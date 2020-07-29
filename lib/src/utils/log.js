"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.getSource = function (src) {
        return (src === null || src === void 0 ? void 0 : src.toUpperCase()) || 'OTHER';
    };
    Log.info = function (message, src) {
        console.log("[" + this.toHHMMSS(new Date()) + "] INFO [" + this.getSource(src) + "] " + message);
    };
    Log.error = function (err, src) {
        var message = (err === null || err === void 0 ? void 0 : err.message) || err || 'Unknown error';
        console.error("[" + this.toHHMMSS(new Date()) + "] ERROR [" + this.getSource(src) + "] " + message);
    };
    Log.toHHMMSS = function (time) {
        var hours = time.getHours().toString().padStart(2, '0');
        var minutes = time.getMinutes().toString().padStart(2, '0');
        var seconds = time.getSeconds().toString().padStart(2, '0');
        return hours + ":" + minutes + ":" + seconds;
    };
    return Log;
}());
exports.default = Log;
