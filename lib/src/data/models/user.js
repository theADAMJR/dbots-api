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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhL21vZGVscy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1EO0FBRW5EO0lBQUE7UUFDSSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLHdCQUFNO0FBT25CLElBQU0sVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUMxQixHQUFHLEVBQUUsTUFBTTtJQUNYLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQyxDQUFDO0FBV1UsUUFBQSxTQUFTLEdBQUcsZ0JBQUssQ0FBZSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMifQ==