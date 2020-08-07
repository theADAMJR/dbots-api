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
var bot_1 = require("../bot");
var log_1 = __importDefault(require("../utils/log"));
var util_1 = require("util");
var fs_1 = __importDefault(require("fs"));
var readdir = util_1.promisify(fs_1.default.readdir);
var EventsService = /** @class */ (function () {
    function EventsService() {
        this.handlers = [];
    }
    EventsService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handlerFiles, handlerFiles_1, handlerFiles_1_1, file, Handler, handler, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, readdir(__dirname + "/handlers")];
                    case 1:
                        handlerFiles = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        handlerFiles_1 = __values(handlerFiles), handlerFiles_1_1 = handlerFiles_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!handlerFiles_1_1.done) return [3 /*break*/, 6];
                        file = handlerFiles_1_1.value;
                        return [4 /*yield*/, require("./handlers/" + file).default];
                    case 4:
                        Handler = _b.sent();
                        handler = Handler && new Handler();
                        if (!(handler === null || handler === void 0 ? void 0 : handler.on))
                            return [3 /*break*/, 5];
                        this.handlers.push(new Handler());
                        _b.label = 5;
                    case 5:
                        handlerFiles_1_1 = handlerFiles_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (handlerFiles_1_1 && !handlerFiles_1_1.done && (_a = handlerFiles_1.return)) _a.call(handlerFiles_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        this.hookEvents();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsService.prototype.hookEvents = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.handlers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                bot_1.bot.on(handler.on, handler.invoke.bind(handler));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        log_1.default.info("Loaded: " + this.handlers.length + " handlers", 'events');
    };
    return EventsService;
}());
exports.default = EventsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvZXZlbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhCQUE2QjtBQUM3QixxREFBK0I7QUFDL0IsNkJBQWlDO0FBRWpDLDBDQUFvQjtBQUVwQixJQUFNLE9BQU8sR0FBRyxnQkFBUyxDQUFDLFlBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV0QztJQUFBO1FBQ3FCLGFBQVEsR0FBbUIsRUFBRSxDQUFDO0lBcUJuRCxDQUFDO0lBbkJTLDRCQUFJLEdBQVY7Ozs7Ozs0QkFDeUIscUJBQU0sT0FBTyxDQUFJLFNBQVMsY0FBVyxDQUFDLEVBQUE7O3dCQUFyRCxZQUFZLEdBQUcsU0FBc0M7Ozs7d0JBRXhDLGlCQUFBLFNBQUEsWUFBWSxDQUFBOzs7O3dCQUFwQixJQUFJO3dCQUNLLHFCQUFNLE9BQU8sQ0FBQyxnQkFBYyxJQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUE7O3dCQUFyRCxPQUFPLEdBQUcsU0FBMkM7d0JBQ3JELE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxPQUFPLEVBQUUsQ0FBQzt3QkFDekMsSUFBSSxFQUFDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxFQUFFLENBQUE7NEJBQUUsd0JBQVM7d0JBRTNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBRXRDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7S0FDckI7SUFFTyxrQ0FBVSxHQUFsQjs7O1lBQ0ksS0FBc0IsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxnQkFBQTtnQkFBOUIsSUFBTSxPQUFPLFdBQUE7Z0JBQ2QsU0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFBQTs7Ozs7Ozs7O1FBRTVELGFBQUcsQ0FBQyxJQUFJLENBQUMsYUFBVyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sY0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkMifQ==