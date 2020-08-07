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
var deps_1 = __importDefault(require("../../../utils/deps"));
var bots_1 = __importDefault(require("../../../data/bots"));
var bot_logs_1 = __importDefault(require("../../../data/bot-logs"));
var api_utils_1 = require("../../modules/api-utils");
var bot_tokens_1 = __importDefault(require("../../../data/bot-tokens"));
var bots_routes_1 = require("./bots-routes");
exports.router = express_1.Router({ mergeParams: true });
var bots = deps_1.default.get(bots_1.default), botTokens = deps_1.default.get(bot_tokens_1.default), logs = deps_1.default.get(bot_logs_1.default);
exports.router.post('/stats', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, savedBot, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                return [4 /*yield*/, botTokens.validate(id, req.headers.authorization)];
            case 1:
                _a.sent();
                return [4 /*yield*/, bots.get(id)];
            case 2:
                savedBot = _a.sent();
                savedBot.stats = req.body;
                return [4 /*yield*/, savedBot.save()];
            case 3:
                _a.sent();
                res.json({ success: true });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                api_utils_1.sendError(res, 400, error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/log', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, log, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, bots_routes_1.validateBotManager(req.query.key, id)];
            case 1:
                _a.sent();
                return [4 /*yield*/, logs.get(id)];
            case 2:
                log = _a.sent();
                res.json(log);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                api_utils_1.sendError(res, 400, error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/token', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, token, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, bots_routes_1.validateBotManager(req.query.key, id)];
            case 1:
                _a.sent();
                return [4 /*yield*/, botTokens.get(id)];
            case 2:
                token = (_a.sent()).token;
                res.json(token);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                api_utils_1.sendError(res, 400, error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/token/regen', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, token, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                return [4 /*yield*/, bots_routes_1.validateBotManager(req.query.key, id)];
            case 1:
                _a.sent();
                return [4 /*yield*/, botTokens.delete(id)];
            case 2:
                _a.sent();
                return [4 /*yield*/, botTokens.get(id)];
            case 3:
                token = (_a.sent()).token;
                res.json(token);
                return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                api_utils_1.sendError(res, 400, error_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMtcm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9yb3V0ZXMvYm90cy9zdGF0cy1yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBaUM7QUFDakMsNkRBQXVDO0FBQ3ZDLDREQUFzQztBQUN0QyxvRUFBNkM7QUFDN0MscURBQW9EO0FBQ3BELHdFQUFpRDtBQUNqRCw2Q0FBNkQ7QUFFaEQsUUFBQSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXBELElBQU0sSUFBSSxHQUFHLGNBQUksQ0FBQyxHQUFHLENBQU8sY0FBSSxDQUFDLEVBQzNCLFNBQVMsR0FBRyxjQUFJLENBQUMsR0FBRyxDQUFZLG9CQUFTLENBQUMsRUFDMUMsSUFBSSxHQUFHLGNBQUksQ0FBQyxHQUFHLENBQVUsa0JBQU8sQ0FBQyxDQUFDO0FBRXhDLGNBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7OztnQkFFM0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFBOztnQkFBdkQsU0FBdUQsQ0FBQztnQkFFdkMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBQTs7Z0JBQTdCLFFBQVEsR0FBRyxTQUFrQjtnQkFDbkMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBZ0IsQ0FBQztnQkFDdEMscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBckIsU0FBcUIsQ0FBQztnQkFFdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7O2dCQUNaLHFCQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFLLENBQUMsQ0FBQzs7Ozs7S0FDOUMsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBTSxHQUFHLEVBQUUsR0FBRzs7Ozs7O2dCQUV2QixFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLHFCQUFNLGdDQUFrQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFBOztnQkFBM0MsU0FBMkMsQ0FBQztnQkFFaEMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBQTs7Z0JBQXhCLEdBQUcsR0FBRyxTQUFrQjtnQkFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OztnQkFDRSxxQkFBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBSyxDQUFDLENBQUM7Ozs7O0tBQzlDLENBQUMsQ0FBQztBQUVILGNBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7OztnQkFFMUIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN6QixxQkFBTSxnQ0FBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBQTs7Z0JBQTNDLFNBQTJDLENBQUM7Z0JBRTFCLHFCQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUE7O2dCQUFqQyxLQUFLLEdBQUssQ0FBQSxTQUF1QixDQUFBLE1BQTVCO2dCQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Z0JBQ0EscUJBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQUssQ0FBQyxDQUFDOzs7OztLQUM5QyxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFPLEdBQUcsRUFBRSxHQUFHOzs7Ozs7Z0JBRWhDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDekIscUJBQU0sZ0NBQWtCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUE7O2dCQUEzQyxTQUEyQyxDQUFDO2dCQUU1QyxxQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFBOztnQkFBMUIsU0FBMEIsQ0FBQztnQkFDVCxxQkFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFBOztnQkFBakMsS0FBSyxHQUFLLENBQUEsU0FBdUIsQ0FBQSxNQUE1QjtnQkFFYixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O2dCQUNBLHFCQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFLLENBQUMsQ0FBQzs7Ozs7S0FDOUMsQ0FBQyxDQUFDIn0=