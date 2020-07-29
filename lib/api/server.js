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
var api_routes_1 = require("./routes/api-routes");
var bots_routes_1 = require("./routes/bots/bots-routes");
var manage_bot_routes_1 = require("./routes/bots/manage-bot-routes");
var reviewer_routes_1 = require("./routes/bots/reviewer-routes");
var stats_routes_1 = require("./routes/bots/stats-routes");
var user_routes_1 = require("./routes/user-routes");
exports.app = express_1.default(), exports.AuthClient = new disco_oauth_1.default(config_json_1.default.bot.id, config_json_1.default.bot.secret);
var API = /** @class */ (function () {
    function API() {
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
        exports.app.use(express_1.default.static(path_1.join(__dirname, '..', config_json_1.default.dashboard.distPath)));
        exports.app.all('*', function (req, res) { return res.status(200).sendFile(path_1.join(__dirname, '..', config_json_1.default.dashboard.distPath, '/index.html')); });
        var port = config_json_1.default.api.port || 3000;
        exports.app.listen(port, function () { return log_1.default.info("API is live on port " + port); });
    }
    return API;
}());
exports.API = API;
