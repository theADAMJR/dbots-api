"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBWrapper = /** @class */ (function () {
    function DBWrapper() {
    }
    DBWrapper.prototype.get = function (type) {
        return this.getOrCreate(type);
    };
    DBWrapper.prototype.save = function (savedType) {
        return savedType.save();
    };
    return DBWrapper;
}());
exports.default = DBWrapper;
