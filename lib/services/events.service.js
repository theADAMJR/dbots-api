"use strict";
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
var ready_handler_1 = __importDefault(require("./handlers/ready.handler"));
var guild_member_add_handler_1 = __importDefault(require("./handlers/guild-member-add.handler"));
var guild_member_remove_handler_1 = __importDefault(require("./handlers/guild-member-remove.handler"));
var EventsService = /** @class */ (function () {
    function EventsService() {
        var e_1, _a;
        this.handlers = [
            new ready_handler_1.default(),
            new guild_member_add_handler_1.default(),
            new guild_member_remove_handler_1.default()
        ];
        try {
            for (var _b = __values(this.handlers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                bot_1.bot.on(handler.on, handler.invoke.bind(handler));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        log_1.default.info("Loaded: " + this.handlers.length + " handlers", 'events');
    }
    return EventsService;
}());
exports.default = EventsService;
