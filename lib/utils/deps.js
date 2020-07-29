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
Object.defineProperty(exports, "__esModule", { value: true });
var Deps = /** @class */ (function () {
    function Deps() {
    }
    Deps.build = function () {
        var e_1, _a;
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
        }
        if (this.testing)
            return;
        try {
            for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                var Type = types_1_1.value;
                try {
                    this.deps.push(new Type());
                }
                // catch { throw new TypeError(`Type '${Type}' could not be instantiated`); }
                catch (_b) { }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Deps.get = function (type) {
        var service = this.deps.find(function (t) { return t instanceof type; });
        return service || this.add(new type());
    };
    Deps.add = function (instance) {
        this.deps.push(instance);
        return instance;
    };
    Deps.testing = false;
    Deps.deps = [];
    return Deps;
}());
exports.default = Deps;
