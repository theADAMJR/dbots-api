"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var config_json_1 = __importDefault(require("../config.json"));
var mongoose_1 = __importDefault(require("mongoose"));
var deps_1 = __importDefault(require("./utils/deps"));
var events_service_1 = __importDefault(require("./services/events.service"));
var server_1 = require("./api/server");
var log_1 = __importDefault(require("./utils/log"));
exports.bot = new discord_js_1.Client();
exports.bot.login(config_json_1.default.bot.token);
deps_1.default.get(events_service_1.default).init();
deps_1.default.build(server_1.API);
mongoose_1.default.connect(config_json_1.default.mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (error) { return error
    ? log_1.default.error('Failed to connect to db', 'bot')
    : log_1.default.info('Connected to db', 'bot'); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUFvQztBQUNwQywrREFBb0M7QUFDcEMsc0RBQWdDO0FBQ2hDLHNEQUFnQztBQUVoQyw2RUFBc0Q7QUFDdEQsdUNBQW1DO0FBQ25DLG9EQUE4QjtBQUVqQixRQUFBLEdBQUcsR0FBRyxJQUFJLG1CQUFNLEVBQUUsQ0FBQztBQUVoQyxXQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTVCLGNBQUksQ0FBQyxHQUFHLENBQWdCLHdCQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QyxjQUFJLENBQUMsS0FBSyxDQUFDLFlBQUcsQ0FBQyxDQUFDO0FBRWhCLGtCQUFRLENBQUMsT0FBTyxDQUFDLHFCQUFNLENBQUMsUUFBUSxFQUFFO0lBQzlCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsZUFBZSxFQUFFLElBQUk7SUFDckIsZ0JBQWdCLEVBQUUsS0FBSztDQUMxQixFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSztJQUNmLENBQUMsQ0FBQyxhQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQztJQUM3QyxDQUFDLENBQUMsYUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsRUFGMUIsQ0FFMEIsQ0FBQyxDQUFDIn0=