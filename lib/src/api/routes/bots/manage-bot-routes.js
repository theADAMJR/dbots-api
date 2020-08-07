"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var config_json_1 = __importDefault(require("../../../../config.json"));
var bot_1 = require("../../../bot");
var discord_js_1 = require("discord.js");
var deps_1 = __importDefault(require("../../../utils/deps"));
var bots_1 = __importDefault(require("../../../data/bots"));
var bot_logs_1 = __importDefault(require("../../../data/bot-logs"));
var user_routes_1 = require("../user-routes");
var audit_logger_1 = __importDefault(require("../../modules/audit-logger"));
var bots_routes_1 = require("./bots-routes");
var api_utils_1 = require("../../modules/api-utils");
exports.router = express_1.Router();
var bots = deps_1.default.get(bots_1.default), logs = deps_1.default.get(bot_logs_1.default);
exports.router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authUser, listing, id, savedBot, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, user_routes_1.getUser(req.query.key)];
            case 1:
                authUser = _a.sent();
                listing = req.body;
                id = listing.botId;
                return [4 /*yield*/, validateCanCreate(req, id)];
            case 2:
                _a.sent();
                return [4 /*yield*/, bots.get(id)];
            case 3:
                savedBot = _a.sent();
                savedBot.listing = listing;
                savedBot.ownerId = authUser.id;
                return [4 /*yield*/, savedBot.save()];
            case 4:
                _a.sent();
                return [4 /*yield*/, sendLog('Bot Added', "<@!" + savedBot.ownerId + "> added <@!" + id + ">.")];
            case 5:
                _a.sent();
                addDevRole(authUser);
                res.status(200).json(savedBot);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                api_utils_1.sendError(res, 400, error_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
exports.router.put('/:id([0-9]{18})', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, key, listing, savedBot, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                id = req.params.id;
                key = req.query.key;
                return [4 /*yield*/, bots_routes_1.validateBotManager(key, id)];
            case 1:
                _a.sent();
                listing = req.body;
                return [4 /*yield*/, validateCanEdit(req, listing)];
            case 2:
                _a.sent();
                return [4 /*yield*/, saveBotAndChanges(id, req)];
            case 3:
                savedBot = _a.sent();
                return [4 /*yield*/, sendLog('Bot Edited', "<@!" + savedBot.ownerId + "> edited <@!" + id + ">.")];
            case 4:
                _a.sent();
                res.json(savedBot);
                return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                api_utils_1.sendError(res, 400, error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.router.delete('/:id([0-9]{18})', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, key, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                key = req.query.key;
                return [4 /*yield*/, bots_routes_1.validateBotManager(key, id)];
            case 1:
                _a.sent();
                return [4 /*yield*/, bots.delete(req.params.id)];
            case 2:
                _a.sent();
                res.json({ success: true });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                api_utils_1.sendError(res, 400, error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
function addDevRole(authUser) {
    var _a, _b;
    (_b = (_a = bot_1.bot.guilds.cache) === null || _a === void 0 ? void 0 : _a.get(config_json_1.default.guild.id).members.cache.get(authUser.id)) === null || _b === void 0 ? void 0 : _b.roles.add(config_json_1.default.guild.devRoleId);
}
function validateCanCreate(req, id) {
    return __awaiter(this, void 0, void 0, function () {
        var exists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body)
                        throw new TypeError('Request body is empty.');
                    return [4 /*yield*/, bots.exists(id)];
                case 1:
                    exists = _a.sent();
                    if (exists)
                        throw new TypeError('Bot already exists!');
                    return [2 /*return*/];
            }
        });
    });
}
function validateCanEdit(req, listing) {
    return __awaiter(this, void 0, void 0, function () {
        var exists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body)
                        throw new TypeError('Request body is empty.');
                    return [4 /*yield*/, bots.exists(listing.botId)];
                case 1:
                    exists = _a.sent();
                    if (!exists)
                        throw new TypeError('Bot does not exist.');
                    return [2 /*return*/];
            }
        });
    });
}
function saveBotAndChanges(id, req) {
    return __awaiter(this, void 0, void 0, function () {
        var savedBot, change, log;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bots.get(id)];
                case 1:
                    savedBot = _a.sent();
                    change = audit_logger_1.default.getChanges({ old: savedBot.listing, new: req.body }, savedBot.ownerId);
                    savedBot.listing = req.body;
                    return [4 /*yield*/, logs.get(id)];
                case 2:
                    log = _a.sent();
                    log.changes.push(change);
                    return [4 /*yield*/, log.save()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, bots.save(savedBot)];
            }
        });
    });
}
function sendLog(eventName, description, good) {
    if (good === void 0) { good = true; }
    var _a, _b, _c;
    return (_c = (_b = (_a = bot_1.bot.guilds.cache) === null || _a === void 0 ? void 0 : _a.get(config_json_1.default.guild.id).channels.cache) === null || _b === void 0 ? void 0 : _b.get(config_json_1.default.guild.logChannelId)) === null || _c === void 0 ? void 0 : _c.send(new discord_js_1.MessageEmbed({
        hexColor: '#' + (good ? '00FF00FF' : 'FF0000FF'),
        description: description,
        title: eventName
    }));
}
exports.sendLog = sendLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWJvdC1yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3JvdXRlcy9ib3RzL21hbmFnZS1ib3Qtcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLHdFQUE2QztBQUM3QyxvQ0FBbUM7QUFDbkMseUNBQXVEO0FBQ3ZELDZEQUF1QztBQUN2Qyw0REFBc0M7QUFDdEMsb0VBQTZDO0FBQzdDLDhDQUFtRDtBQUVuRCw0RUFBcUQ7QUFDckQsNkNBQW1EO0FBQ25ELHFEQUFvRDtBQUV2QyxRQUFBLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFL0IsSUFBTSxJQUFJLEdBQUcsY0FBSSxDQUFDLEdBQUcsQ0FBTyxjQUFJLENBQUMsRUFDM0IsSUFBSSxHQUFHLGNBQUksQ0FBQyxHQUFHLENBQVUsa0JBQU8sQ0FBQyxDQUFDO0FBRXhDLGNBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7OztnQkFFWCxxQkFBTSxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O2dCQUF2QyxRQUFRLEdBQUcsU0FBNEI7Z0JBRXZDLE9BQU8sR0FBWSxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM1QixFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDekIscUJBQU0saUJBQWlCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFBOztnQkFBaEMsU0FBZ0MsQ0FBQztnQkFFaEIscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBQTs7Z0JBQTdCLFFBQVEsR0FBRyxTQUFrQjtnQkFDbkMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQzNCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFB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