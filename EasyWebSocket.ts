// import NetStateMachine from "../base/NetStateMachine";
// import CloseState from "./state/CloseState";
// import ConnectingState from "./state/ConnectingState";
// import ReconnectState from "./state/ReconnectState";

// export default class EasyWebSocket extends NetStateMachine {
//     public ws: WebSocket = undefined;

//     public url: string = "";

//     constructor(url: string) {
//         super();

//         this.connect(url);
//     }

//     public connect(url: string): void {
//         this.url = url;
//         if (!this.curState) {
//             this.changeState(new ConnectingState(this), { url: url });
//         }
//         else
//             console.warn(`The EasyWebSocket state was already connected.`);
//     }

//     public close(): void {
//         this.disconnect();
//         this.curState = undefined;
//     }

//     public reconnect(): void {
//         if (!this.curState) {
//             console.error("EasyWebSocket reconnect failed, the EasyWebSocket state was nil.");
//             return;
//         }

//         if (!(this.curState instanceof ReconnectState))
//             this.changeState(new ReconnectState(this));
//         else
//             console.warn("The EasyWebSocket state was already in ReconnectState.");
//     }

//     public disconnect(): void {
//         if (!(this.curState instanceof CloseState))
//             this.changeState(new CloseState(this));
//         else
//             console.warn("The EasyWebSocket state was already in CloseState.");
//     }
// }
