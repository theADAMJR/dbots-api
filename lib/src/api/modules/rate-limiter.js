"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var rate_limit_mongoose_1 = __importDefault(require("@lykmapipo/rate-limit-mongoose"));
var whiteListedIPs = ['::1', '.', '::ffff:127.0.0.1'];
var windowMs = 10 * 60 * 1000;
exports.default = express_rate_limit_1.default({
    store: rate_limit_mongoose_1.default({ windowMs: windowMs }),
    max: 600,
    message: "You are being rate limited.",
    skip: function (req) { return whiteListedIPs.some(function (ip) { return ip === req.ip; }); }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS1saW1pdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tb2R1bGVzL3JhdGUtbGltaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBFQUEyQztBQUMzQyx1RkFBNEQ7QUFHNUQsSUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFeEQsSUFBTSxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDaEMsa0JBQWUsNEJBQVMsQ0FBQztJQUNyQixLQUFLLEVBQUUsNkJBQWMsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7SUFDbkMsR0FBRyxFQUFFLEdBQUc7SUFDUixPQUFPLEVBQUUsNkJBQTZCO0lBQ3RDLElBQUksRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBYixDQUFhLENBQUMsRUFBeEMsQ0FBd0M7Q0FDMUQsQ0FBQyxDQUFDIn0=