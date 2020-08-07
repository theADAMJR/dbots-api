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
    totalVotes: { type: Number, default: 0 },
    lastVoteAt: Date,
    votes: { type: Array, default: [] }
});
exports.SavedBot = mongoose_1.model('bot', botSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGEvbW9kZWxzL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFtRDtBQUVuRDtJQUFBO0lBV0EsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLDBCQUFPO0FBd0JwQixJQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDekIsR0FBRyxFQUFFLE1BQU07SUFDWCxVQUFVLEVBQUUsSUFBSTtJQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7SUFDcEMsU0FBUyxFQUFFLElBQUk7SUFDZixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7SUFDdEMsT0FBTyxFQUFFLE1BQU07SUFDZixPQUFPLEVBQUUsTUFBTTtJQUNmLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7SUFDN0IsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQ3hDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtDQUN0QyxDQUFDLENBQUM7QUFnQlUsUUFBQSxRQUFRLEdBQUcsZ0JBQUssQ0FBYyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMifQ==