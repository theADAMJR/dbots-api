"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var server_1 = require("../../server");
var bot_1 = require("../../../bot");
var deps_1 = __importDefault(require("../../../utils/deps"));
var bots_1 = __importDefault(require("../../../data/bots"));
var user_routes_1 = require("../user-routes");
var api_utils_1 = require("../../modules/api-utils");
var bot_2 = require("../../../data/models/bot");
var users_1 = __importDefault(require("../../../data/users"));
var manage_bot_routes_1 = require("./manage-bot-routes");
var config_json_1 = __importDefault(require("../../../../config.json"));
var bot_widget_generator_1 = require("../../modules/image/bot-widget-generator");
var stats_1 = __importDefault(require("../../modules/stats"));
var bot_tokens_1 = __importDefault(require("../../../data/bot-tokens"));
var node_fetch_1 = __importDefault(require("node-fetch"));
exports.router = express_1.Router();
var bots = deps_1.default.get(bots_1.default), botTokens = deps_1.default.get(bot_tokens_1.default), stats = deps_1.default.get(stats_1.default), users = deps_1.default.get(users_1.default);
exports.router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var botUsers, savedBots, savedBots_1, savedBots_1_1, savedBot, botUser, error_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                botUsers = [];
                return [4 /*yield*/, bot_2.SavedBot.find()];
            case 1:
                savedBots = _b.sent();
                try {
                    for (savedBots_1 = __values(savedBots), savedBots_1_1 = savedBots_1.next(); !savedBots_1_1.done; savedBots_1_1 = savedBots_1.next()) {
                        savedBot = savedBots_1_1.value;
                        botUser = bot_1.bot.users.cache.get(savedBot.id);
                        if (!botUser)
                            continue;
                        botUsers.push(__assign(__assign({}, botUser), { displayAvatarURL: botUser.displayAvatarURL({ dynamic: true, size: 256 }), presence: botUser.presence }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (savedBots_1_1 && !savedBots_1_1.done && (_a = savedBots_1.return)) _a.call(savedBots_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                res.json({ saved: savedBots, users: botUsers });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                api_utils_1.sendError(res, 400, error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bots_2, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getManagableBots(req.query.key)];
            case 1:
                bots_2 = _a.sent();
                res.json(bots_2);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                api_utils_1.sendError(res, 400, error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id', function (req, res) {
    try {
        var botUser = bot_1.bot.users.cache.get(req.params.id);
        res.json(__assign(__assign({}, botUser), { displayAvatarURL: botUser.displayAvatarURL({ dynamic: true, size: 256 }), presence: botUser.presence }));
    }
    catch (error) {
        api_utils_1.sendError(res, 400, error);
    }
});
exports.router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, instigator, error_3;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 7]);
                id = req.params.id;
                return [4 /*yield*/, validateBotManager(req.query.key, id)];
            case 1:
                _c.sent();
                return [4 /*yield*/, bots.delete(id)];
            case 2:
                _c.sent();
                return [4 /*yield*/, user_routes_1.getUser(req.query.key)];
            case 3:
                instigator = _c.sent();
                return [4 /*yield*/, manage_bot_routes_1.sendLog("Bot Deleted", "<@!" + instigator.id + "> deleted <@!" + id + "> for some reason.", false)];
            case 4:
                _c.sent();
                return [4 /*yield*/, ((_b = (_a = bot_1.bot.guilds.cache
                        .get(config_json_1.default.guild.id)) === null || _a === void 0 ? void 0 : _a.members.cache.get(id)) === null || _b === void 0 ? void 0 : _b.kick())];
            case 5:
                _c.sent();
                res.json({ success: true });
                return [3 /*break*/, 7];
            case 6:
                error_3 = _c.sent();
                api_utils_1.sendError(res, 400, error_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id/vote', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, voter, savedVoter, vote, savedBot, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                id = req.params.id;
                return [4 /*yield*/, user_routes_1.getUser(req.query.key)];
            case 1:
                voter = _a.sent();
                return [4 /*yield*/, users.get(voter)];
            case 2:
                savedVoter = _a.sent();
                validateIfCanVote(savedVoter);
                savedVoter.lastVotedAt = new Date();
                return [4 /*yield*/, savedVoter.save()];
            case 3:
                _a.sent();
                vote = { at: new Date(), by: voter.id };
                return [4 /*yield*/, bots.get(id)];
            case 4:
                savedBot = _a.sent();
                savedBot.votes.push(vote);
                savedBot.lastVoteAt = new Date();
                return [4 /*yield*/, savedBot.save()];
            case 5:
                _a.sent();
                return [4 /*yield*/, postVoteWebhook(id, vote)];
            case 6:
                _a.sent();
                res.json({ success: true });
                return [3 /*break*/, 8];
            case 7:
                error_4 = _a.sent();
                api_utils_1.sendError(res, 400, error_4);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
function postVoteWebhook(id, vote) {
    return __awaiter(this, void 0, void 0, function () {
        var savedToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, botTokens.get(id)];
                case 1:
                    savedToken = _a.sent();
                    return [4 /*yield*/, node_fetch_1.default(savedToken.voteWebhookURL, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(vote)
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.router.get('/:id/saved', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var savedBot, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bots.get(req.params.id)];
            case 1:
                savedBot = _a.sent();
                res.json(savedBot);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                api_utils_1.sendError(res, 400, error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id/widget', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var botUser, savedBot, image, error_6;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                botUser = bot_1.bot.users.cache.get(req.params.id);
                return [4 /*yield*/, bots.get(req.params.id)];
            case 1:
                savedBot = _c.sent();
                return [4 /*yield*/, new bot_widget_generator_1.BotWidgetGenerator(botUser, savedBot)
                        .generate((_b = (_a = req.query.size) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : 'large')];
            case 2:
                image = _c.sent();
                res.set({ 'Content-Type': 'image/png' }).send(image);
                return [3 /*break*/, 4];
            case 3:
                error_6 = _c.sent();
                api_utils_1.sendError(res, 400, error_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id/stats', function (req, res) {
    var id = req.params.id;
    res.json({
        general: stats.general(id),
        topVoters: stats.votes(id),
        votes: stats.votes(id),
        recentVotes: stats.recentVotes(id)
    });
});
function validateIfCanVote(savedVoter) {
    var twelveHoursMs = 1000 * 60 * 60 * 12;
    var oneDayAgo = new Date(Date.now() - twelveHoursMs);
    if (savedVoter.lastVotedAt > oneDayAgo) {
        var timeLeftMs = new Date(savedVoter.lastVotedAt.getTime() + twelveHoursMs).getTime() - Date.now();
        var hoursLeft = (timeLeftMs / 1000 / 60 / 60);
        throw new TypeError("You have already voted. You can next vote in " + hoursLeft.toFixed(2) + " hours.");
    }
}
function getManagableBots(key) {
    return __awaiter(this, void 0, void 0, function () {
        var id, owner, savedBots, ids;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, server_1.AuthClient.getUser(key)];
                case 1:
                    id = (_a.sent()).id;
                    owner = bot_1.bot.users.cache.get(id);
                    return [4 /*yield*/, bots.getManageable(owner)];
                case 2:
                    savedBots = _a.sent();
                    ids = savedBots.map(function (b) { return b._id; });
                    return [2 /*return*/, bot_1.bot.users.cache.filter(function (u) { return ids.includes(u.id); })];
            }
        });
    });
}
function validateBotManager(key, botId) {
    return __awaiter(this, void 0, void 0, function () {
        var bots;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!key)
                        throw new TypeError('Unauthorized.');
                    return [4 /*yield*/, getManagableBots(key)];
                case 1:
                    bots = _a.sent();
                    if (!bots.some(function (b) { return b.id === botId; }))
                        throw TypeError('Bot not manageable.');
                    return [2 /*return*/];
            }
        });
    });
}
exports.validateBotManager = validateBotManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy1yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3JvdXRlcy9ib3RzL2JvdHMtcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFpQztBQUNqQyx1Q0FBMEM7QUFDMUMsb0NBQW1DO0FBQ25DLDZEQUF1QztBQUN2Qyw0REFBc0M7QUFDdEMsOENBQXlDO0FBQ3pDLHFEQUFvRDtBQUNwRCxnREFBb0Q7QUFDcEQsOERBQXdDO0FBQ3hDLHlEQUE4QztBQUM5Qyx3RUFBNkM7QUFFN0MsaUZBQThFO0FBQzlFLDhEQUF3QztBQUN4Qyx3RUFBaUQ7QUFDakQsMERBQStCO0FBRWxCLFFBQUEsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUUvQixJQUFNLElBQUksR0FBRyxjQUFJLENBQUMsR0FBRyxDQUFPLGNBQUksQ0FBQyxFQUMzQixTQUFTLEdBQUcsY0FBSSxDQUFDLEdBQUcsQ0FBWSxvQkFBUyxDQUFDLEVBQzFDLEtBQUssR0FBRyxjQUFJLENBQUMsR0FBRyxDQUFRLGVBQUssQ0FBQyxFQUM5QixLQUFLLEdBQUcsY0FBSSxDQUFDLEdBQUcsQ0FBUSxlQUFLLENBQUMsQ0FBQztBQUVyQyxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFPLEdBQUcsRUFBRSxHQUFHOzs7Ozs7O2dCQUVqQixRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNGLHFCQUFNLGNBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQWpDLFNBQVMsR0FBRyxTQUFxQjs7b0JBRXZDLEtBQXVCLGNBQUEsU0FBQSxTQUFTLENBQUEsK0ZBQUU7d0JBQXZCLFFBQVE7d0JBQ1QsT0FBTyxHQUFHLFNBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFB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