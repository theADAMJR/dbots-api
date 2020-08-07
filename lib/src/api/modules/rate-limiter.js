"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var rate_limit_mongoose_1 = __importDefault(require("@lykmapipo/rate-limit-mongoose"));
var config_json_1 = __importDefault(require("../../../config.json"));
var windowMs = 1 * 60 * 1000;
exports.default = express_rate_limit_1.default({
    store: rate_limit_mongoose_1.default({ windowMs: windowMs }),
    max: 180,
    message: "You are being rate limited.",
    skip: function (req) { return config_json_1.default.api.whiteListedIPs.some(function (ip) { return ip === req.ip; }); }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS1saW1pdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tb2R1bGVzL3JhdGUtbGltaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBFQUEyQztBQUMzQyx1RkFBNEQ7QUFDNUQscUVBQTBDO0FBRTFDLElBQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQy9CLGtCQUFlLDRCQUFTLENBQUM7SUFDckIsS0FBSyxFQUFFLDZCQUFjLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO0lBQ25DLEdBQUcsRUFBRSxHQUFHO0lBQ1IsT0FBTyxFQUFFLDZCQUE2QjtJQUN0QyxJQUFJLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxxQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQWIsQ0FBYSxDQUFDLEVBQW5ELENBQW1EO0NBQ3JFLENBQUMsQ0FBQyJ9