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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9kZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBdUJBLENBQUM7SUFsQlUsVUFBSyxHQUFaOztRQUFhLGVBQWE7YUFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1lBQWIsMEJBQWE7O1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPOztZQUV6QixLQUFtQixJQUFBLFVBQUEsU0FBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQXJCLElBQU0sSUFBSSxrQkFBQTtnQkFDWCxJQUFJO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFBRTtnQkFDbkMsV0FBTSxHQUFFO2FBQ1g7Ozs7Ozs7OztJQUNMLENBQUM7SUFFTSxRQUFHLEdBQVYsVUFBYyxJQUFTO1FBQ25CLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLElBQUksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFYyxRQUFHLEdBQWxCLFVBQXNCLFFBQVc7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQXJCTSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRVIsU0FBSSxHQUFVLEVBQUUsQ0FBQztJQW9CcEMsV0FBQztDQUFBLEFBdkJELElBdUJDO2tCQXZCb0IsSUFBSSJ9