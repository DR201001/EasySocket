// import WebSocketState from "../base/WebSocketState";
// import HeartBeat from "../logic/HeartBeat";

// export default class OpenState extends WebSocketState {
//     private _heartBeat: HeartBeat = undefined;

//     public enter(data?: any): void {
//         super.enter(data);

//         this.machine.ws.onmessage = function (event) {
//             console.debug("OpenState receive msg:", event);
//         }

//         this.heartBeat();
//     }

//     public exit(data?: any): void {
//         super.exit(data);

//         this._heartBeat?.onDestroy();
//     }

//     public execute(data?: any): Promise<void> {
//         super.execute(data);

//         return new Promise((resolve: Function, reject: Function) => {
//             try {
//                 this.machine.ws.send(data);
//             } catch (error) {
//                 reject("EasyWebSocket send msg failed, the exception is:", error);
//             }

//             resolve();
//         });
//     }

//     protected heartBeat(): void {
//         this._heartBeat = new HeartBeat(this.machine.ws, this.reconnect.bind(this));
//         this._heartBeat.beating();
//     }
// }