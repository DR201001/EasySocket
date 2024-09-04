// import EasyWebSocket from "../EasyWebSocket";

// export default abstract class EasyWebSocketState extends NetState {
//     protected machine: EasyWebSocket = undefined;

//     constructor(machine: EasyWebSocket) {
//         super();

//         this.machine = machine;
//     }

//     public enter(data?: any): void {
//         console.debug(`Current state is ${this.className}, enter.`);
//     }

//     public execute(data?: any): void {
//         console.debug(`Current state is ${this.className}, execute.`);
//     }

//     public exit(data?: any): void {
//         console.debug(`Current state is ${this.className}, exit.`);
//     }

//     protected reconnect(): void {
//         console.debug(`Current state is ${this.className}, reconnect.`, this.machine);
//         this.machine.reconnect();
//     }

//     protected disconnect(): void {
//         console.debug(`Current state is ${this.className}, disconnect.`);
//         this.machine.disconnect();
//     }
// }