"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Listing = /** @class */ (function () {
    function Listing() {
    }
    return Listing;
}());
exports.Listing = Listing;
var botSchema = new mongoose_1.Schema({
    _id: String,
    approvedAt: Date,
    badges: { type: Array, default: [] },
    createdAt: Date,
    feedback: { type: Array, default: [] },
    listing: Object,
    ownerId: String,
    stats: { guildCount: Number },
    totalVotes: Number,
    lastVoteAt: Date,
    votes: { type: Array, default: [] }
});
exports.SavedBot = mongoose_1.model('bot', botSchema);
