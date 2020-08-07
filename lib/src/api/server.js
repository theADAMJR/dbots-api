"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_json_1 = __importDefault(require("../../config.json"));
var cors_1 = __importDefault(require("cors"));
var disco_oauth_1 = __importDefault(require("disco-oauth"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = require("path");
var rate_limiter_1 = __importDefault(require("./modules/rate-limiter"));
var log_1 = __importDefault(require("../utils/log"));
var deps_1 = __importDefault(require("../utils/deps"));
var stats_1 = __importDefault(require("./modules/stats"));
var api_routes_1 = require("./routes/api-routes");
var bots_routes_1 = require("./routes/bots/bots-routes");
var manage_bot_routes_1 = require("./routes/bots/manage-bot-routes");
var reviewer_routes_1 = require("./routes/bots/reviewer-routes");
var stats_routes_1 = require("./routes/bots/stats-routes");
var user_routes_1 = require("./routes/user-routes");
exports.app = express_1.default(), exports.AuthClient = new disco_oauth_1.default(config_json_1.default.bot.id, config_json_1.default.bot.secret);
var API = /** @class */ (function () {
    function API(stats) {
        if (stats === void 0) { stats = deps_1.default.get(stats_1.default); }
        this.stats = stats;
        exports.AuthClient.setRedirect(config_json_1.default.api.url + "/auth");
        exports.AuthClient.setScopes('identify', 'guilds');
        exports.app.use(rate_limiter_1.default);
        exports.app.use(cors_1.default());
        exports.app.use(body_parser_1.default.json());
        exports.app.use('/api/user', user_routes_1.router);
        exports.app.use('/api/bots', bots_routes_1.router, manage_bot_routes_1.router);
        exports.app.use('/api/bots/:id', reviewer_routes_1.router, stats_routes_1.router);
        exports.app.use('/api', api_routes_1.router);
        exports.app.get('/server', function (req, res) { return res.redirect("https://discord.gg/" + config_json_1.default.api.supportInvite); });
        exports.app.use(express_1.default.static(path_1.join(__dirname, '../../../dist/dashboard')));
        exports.app.all('*', function (req, res) { return res.status(200).sendFile(path_1.join(__dirname, '../../../dist/dashboard/index.html')); });
        var port = config_json_1.default.api.port || 3000;
        exports.app.listen(port, function () { return log_1.default.info("API is live on port " + port); });
        this.stats.init();
    }
    return API;
}());
exports.API = API;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBOEI7QUFDOUIsa0VBQXVDO0FBQ3ZDLDhDQUF3QjtBQUN4Qiw0REFBc0M7QUFDdEMsNERBQXFDO0FBQ3JDLDZCQUE0QjtBQUM1Qix3RUFBaUQ7QUFDakQscURBQStCO0FBQy9CLHVEQUFpQztBQUNqQywwREFBb0M7QUFFcEMsa0RBQTBEO0FBQzFELHlEQUFpRTtBQUNqRSxxRUFBNEU7QUFDNUUsaUVBQXlFO0FBQ3pFLDJEQUFtRTtBQUNuRSxvREFBNEQ7QUFFL0MsUUFBQSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxFQUNmLFFBQUEsVUFBVSxHQUFHLElBQUkscUJBQVcsQ0FBQyxxQkFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUscUJBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFNUU7SUFDSSxhQUFvQixLQUE4QjtRQUE5QixzQkFBQSxFQUFBLFFBQVEsY0FBSSxDQUFDLEdBQUcsQ0FBUSxlQUFLLENBQUM7UUFBOUIsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUMsa0JBQVUsQ0FBQyxXQUFXLENBQUkscUJBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFPLENBQUMsQ0FBQztRQUNqRCxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsV0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBVyxDQUFDLENBQUM7UUFDckIsV0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLFdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLFdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLG9CQUFVLENBQUMsQ0FBQztRQUNqQyxXQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxvQkFBVSxFQUFFLDBCQUFlLENBQUMsQ0FBQztRQUNsRCxXQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx3QkFBYyxFQUFFLHFCQUFXLENBQUMsQ0FBQztRQUN0RCxXQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxtQkFBUyxDQUFDLENBQUM7UUFFM0IsV0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLFFBQVEsQ0FBQyx3QkFBc0IscUJBQU0sQ0FBQyxHQUFHLENBQUMsYUFBZSxDQUFDLEVBQTlELENBQThELENBQUMsQ0FBQztRQUVqRyxXQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEUsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQy9DLFdBQUksQ0FBQyxTQUFTLEVBQUUsb0NBQW9DLENBQUMsQ0FBQyxFQUQvQixDQUMrQixDQUFDLENBQUM7UUFFNUQsSUFBTSxJQUFJLEdBQUcscUJBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNyQyxXQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFNLE9BQUEsYUFBRyxDQUFDLElBQUksQ0FBQyx5QkFBdUIsSUFBTSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxrQkFBRyJ9