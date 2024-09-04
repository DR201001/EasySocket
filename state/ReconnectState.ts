// import WebSocketState from "../base/WebSocketState";
// import OpenState from "./OpenState";

// export default class ReconnectState extends WebSocketState {
//     private _reHandle: any = undefined;

//     private timeout: number = 4000;

//     public enter(data?: any): void {
//         super.enter(data);

//         clearTimeout(this._reHandle);
//         this._reHandle = setTimeout(() => {
//             this.connect();
//         }, this.timeout);
//     }

//     public exit(data?: any): void {
//         super.exit(data);

//         clearTimeout(this._reHandle);
//     }

//     protected reconnect(): void {
//         console.info("ReconnectState: currrent state was already reconnect.");
//     }

//     protected connect(): void {
//         try {
//             this.machine.ws?.close();
//             this.machine.ws = new WebSocket(this.machine.url);

//             this.machine.changeState(new OpenState(this.machine));
//         } catch (error) {
//             console.error("ReconnectState connect failed, the exception is:", error);
//             this.machine.changeState(new ReconnectState(this.machine));
//         }
//     }
// }