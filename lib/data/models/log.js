"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Change = /** @class */ (function () {
    function Change(by, changes) {
        this.by = by;
        this.changes = changes;
        this.at = new Date();
    }
    return Change;
}());
exports.Change = Change;
var LogSchema = new mongoose_1.Schema({
    _id: String,
    changes: { type: Array, default: [] }
});
exports.SavedLog = mongoose_1.model('log', LogSchema);
