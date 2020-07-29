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
