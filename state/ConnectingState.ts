// import WebSocketState from "../base/WebSocketState";
// import EasyWebSocket from "../EasyWebSocket";
// import OpenState from "./OpenState";
// import ReconnectState from "./ReconnectState";

// export default class ConnectingState extends WebSocketState {
//     public enter(data?: any): void {
//         super.enter(data);

//         try {
//             this.connect(this.machine, data);
//         } catch (error) {
//             console.error("ConnectingState connect failed, the exception is:", error);
//             this.reconnect();
//         }
//     }

//     protected connect(machine: EasyWebSocket, data?: any): void {
//         this.machine.ws = new WebSocket(this.machine.url);

//         this.machine.ws.onopen = function (event: any) {
//             console.info(`ConnectingState: EasyWebSocket connected.`);
//             machine.changeState(new OpenState(machine));
//         };

//         this.machine.ws.onerror = function (event: any) {
//             console.info(`ConnectingState: EasyWebSocket onerror.`);
//             machine.changeState(new ReconnectState(machine));
//         };

//         this.machine.ws.onclose = function (event: any) {
//             console.info(`ConnectingState: EasyWebSocket onclose.`);
//             machine.changeState(new ReconnectState(machine));
//         };
//     }
// }