// export default class HeartBeat {
//     private _timeout: number = 3000;

//     private _beatTimes: number = 3;

//     private _beatHandle: any = undefined;

//     private _curTimes: number = 0;

//     private _ws: WebSocket = undefined;

//     private _failedCall: Function = undefined;

//     constructor(webSocket: WebSocket, failedCall: Function) {
//         this._ws = webSocket;
//         this._failedCall = failedCall;
//     }

//     public beating(): void {
//         console.debug("Heart beating.");

//         clearTimeout(this._beatHandle);
//         if (this._curTimes++ > this._beatTimes) {
//             this._failedCall && this._failedCall();
//             return;
//         }

//         this._ws.send("ping");
//         this._beatHandle = setTimeout(() => {
//             this.beating();
//         }, this._timeout);
//     }

//     public onBeatMessage(): void {
//         this._curTimes = 0;
//     }

//     onDestroy(): void {
//         clearTimeout(this._beatHandle);
//     }
// }