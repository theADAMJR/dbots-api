"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var XPCard = /** @class */ (function () {
    function XPCard() {
        this.backgroundURL = '';
        this.primary = '';
        this.secondary = '';
        this.tertiary = '';
    }
    return XPCard;
}());
exports.XPCard = XPCard;
var userSchema = new mongoose_1.Schema({
    _id: String,
    lastVotedAt: Date,
    premium: Boolean,
    role: String
});
exports.SavedUser = mongoose_1.model('user', userSchema);
