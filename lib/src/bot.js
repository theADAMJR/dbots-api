"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var config_json_1 = __importDefault(require("./config.json"));
var mongoose_1 = __importDefault(require("mongoose"));
var deps_1 = __importDefault(require("./utils/deps"));
var events_service_1 = __importDefault(require("./services/events.service"));
var bots_1 = __importDefault(require("./data/bots"));
var users_1 = __importDefault(require("./data/users"));
var server_1 = require("./api/server");
exports.bot = new discord_js_1.Client();
exports.bot.login(config_json_1.default.bot.token);
deps_1.default.build(bots_1.default, users_1.default, events_service_1.default, server_1.API);
mongoose_1.default.connect(config_json_1.default.mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});
