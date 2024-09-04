// import WebSocketState from "../base/WebSocketState";

// export default class CloseState extends WebSocketState {
//     public enter(data?: any): void {
//         this.machine.ws.close();
//         this.machine.ws = undefined;
//     }

//     protected reconnect(): void {
//         throw new Error("Method not implemented.");
//     }

//     protected disconnect(): void {
//         console.info("CloseState: currrent state was already disconnect.");
//     }
// }
