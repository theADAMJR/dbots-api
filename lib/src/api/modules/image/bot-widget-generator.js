"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var image_generator_1 = __importDefault(require("./image-generator"));
var canvas_1 = require("canvas");
var BotWidgetGenerator = /** @class */ (function (_super) {
    __extends(BotWidgetGenerator, _super);
    function BotWidgetGenerator(user, savedBot) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.savedBot = savedBot;
        _this.colors = {
            primary: '#F4F2F3',
            secondary: '#46828D',
            tertiary: '#36E2CA',
            bgPrimary: '#2C2F33',
            bgSecondary: '#23272A'
        };
        return _this;
    }
    BotWidgetGenerator.prototype.generate = function (size) {
        if (size === void 0) { size = 'large'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (size === 'medium')
                    return [2 /*return*/, this.medium()];
                else if (size === 'small')
                    return [2 /*return*/, this.small()];
                return [2 /*return*/, this.large()];
            });
        });
    };
    BotWidgetGenerator.prototype.large = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, canvas, ctx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createCanvas(300, 250), canvas = _a.canvas, ctx = _a.ctx;
                        ctx.fillStyle = this.colors.bgPrimary;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        this.addUserText(ctx, canvas);
                        return [4 /*yield*/, this.addUserAvatar(ctx)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.addStats(ctx, canvas)];
                    case 2:
                        _b.sent();
                        this.addBotOverview(ctx, canvas);
                        return [4 /*yield*/, this.addFooter(canvas, ctx)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, canvas.toBuffer()];
                }
            });
        });
    };
    BotWidgetGenerator.prototype.medium = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, canvas, ctx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createCanvas(300, 150), canvas = _a.canvas, ctx = _a.ctx;
                        ctx.fillStyle = this.colors.bgPrimary;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        this.addUserText(ctx, canvas, { x: 0, y: 20 });
                        return [4 /*yield*/, this.addUserAvatar(ctx, { x: 0, y: 0 })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.addStats(ctx, canvas, { x: 0, y: 35 })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.addFooter(canvas, ctx, { x: 0, y: -7.5 })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, canvas.toBuffer()];
                }
            });
        });
    };
    BotWidgetGenerator.prototype.small = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, canvas, ctx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.createCanvas(300, 75), canvas = _a.canvas, ctx = _a.ctx;
                        ctx.fillStyle = this.colors.bgPrimary;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        this.addUserText(ctx, canvas, { x: -15, y: 20 });
                        return [4 /*yield*/, this.addUserAvatar(ctx, { x: -15, y: -15 }, true)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.addStats(ctx, canvas, { x: canvas.width - 150, y: -10 })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.addFooter(canvas, ctx, { x: 0, y: -15 })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, canvas.toBuffer()];
                }
            });
        });
    };
    BotWidgetGenerator.prototype.addStats = function (ctx, canvas, offset) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var pos, serversImage, votesImage, nativeSize;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pos = { x: offset.x, y: canvas.height / 3.25 + offset.y };
                        return [4 /*yield*/, canvas_1.loadImage('api/modules/image/server.png')];
                    case 1:
                        serversImage = _d.sent();
                        return [4 /*yield*/, canvas_1.loadImage('api/modules/image/chevron-circle-up.png')];
                    case 2:
                        votesImage = _d.sent();
                        nativeSize = { w: 128, h: 128 };
                        ctx.drawImage(votesImage, pos.x + 25, pos.y, nativeSize.w / 6, nativeSize.h / 6);
                        ctx.font = 'bold 16px Arial, sans-serif';
                        ctx.fillStyle = 'white';
                        ctx.fillText(this.savedBot.votes.length.toString(), pos.x + 50, pos.y + 16.5);
                        ctx.fillText((_c = (_b = (_a = this.savedBot.stats) === null || _a === void 0 ? void 0 : _a.guildCount) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : 'N/A', (canvas.width / 2) + pos.x + 27.5, pos.y + 16.5);
                        ctx.drawImage(serversImage, (canvas.width / 2) + pos.x, pos.y, nativeSize.w / 6, nativeSize.h / 6);
                        return [2 /*return*/];
                }
            });
        });
    };
    BotWidgetGenerator.prototype.addBotOverview = function (ctx, canvas) {
        ctx.font = '16px Arial, sans-serif';
        ctx.fillStyle = 'gray';
        _super.prototype.wrapText.call(this, ctx, this.savedBot.listing.overview, 25, canvas.height / 2, canvas.width - 50, 20);
    };
    BotWidgetGenerator.prototype.addFooter = function (canvas, ctx, offset) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        return __awaiter(this, void 0, void 0, function () {
            var pos, avatar, nativeSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pos = { x: 10 + offset.x, y: canvas.height * 0.9 + offset.y };
                        ctx.fillStyle = this.colors.bgSecondary;
                        ctx.fillRect(0, pos.y - 5, canvas.width, canvas.height);
                        return [4 /*yield*/, canvas_1.loadImage('api/modules/image/logo.png')];
                    case 1:
                        avatar = _a.sent();
                        nativeSize = { w: 231, h: 46 };
                        ctx.drawImage(avatar, pos.x, pos.y, nativeSize.w / 2.5, nativeSize.h / 2.5);
                        return [2 /*return*/];
                }
            });
        });
    };
    BotWidgetGenerator.prototype.addUserText = function (ctx, canvas, offset) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        var pos = { x: canvas.width / 4 + offset.x, y: canvas.height / 5 + offset.y };
        ctx.font = '32px Arial, sans-serif';
        ctx.fillStyle = this.colors.primary;
        ctx.fillText(this.user.username, pos.x, pos.y);
    };
    BotWidgetGenerator.prototype.addUserAvatar = function (ctx, offset, square) {
        if (offset === void 0) { offset = { x: 0, y: 0 }; }
        if (square === void 0) { square = false; }
        return __awaiter(this, void 0, void 0, function () {
            var pos, avatar_1, avatar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pos = { x: 15 + offset.x, y: 15 + offset.y };
                        if (!square) return [3 /*break*/, 2];
                        return [4 /*yield*/, canvas_1.loadImage(this.user.displayAvatarURL({ format: 'png' }))];
                    case 1:
                        avatar_1 = _a.sent();
                        return [2 /*return*/, ctx.drawImage(avatar_1, pos.x, pos.y, 50, 50)];
                    case 2:
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(pos.x + 25, pos.y + 25, 25, 0, Math.PI * 2, true);
                        ctx.closePath();
                        ctx.clip();
                        return [4 /*yield*/, canvas_1.loadImage(this.user.displayAvatarURL({ format: 'png' }))];
                    case 3:
                        avatar = _a.sent();
                        ctx.drawImage(avatar, pos.x, pos.y, 50, 50);
                        ctx.beginPath();
                        ctx.arc(0, 0, 25, 0, Math.PI * 2, true);
                        ctx.clip();
                        ctx.closePath();
                        ctx.restore();
                        return [2 /*return*/];
                }
            });
        });
    };
    BotWidgetGenerator.prototype.createCanvas = function (width, height) {
        var canvas = canvas_1.createCanvas(width, height);
        var ctx = canvas.getContext('2d');
        return { canvas: canvas, ctx: ctx };
    };
    return BotWidgetGenerator;
}(image_generator_1.default));
exports.BotWidgetGenerator = BotWidgetGenerator;
