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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGEvbW9kZWxzL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFtRDtBQUVuRDtJQUdJLGdCQUNXLEVBQVUsRUFDVixPQUE0QjtRQUQ1QixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFKaEMsT0FBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFJbUIsQ0FBQztJQUMvQyxhQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSx3QkFBTTtBQVFuQixJQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDekIsR0FBRyxFQUFFLE1BQU07SUFDWCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Q0FDeEMsQ0FBQyxDQUFDO0FBT1UsUUFBQSxRQUFRLEdBQUcsZ0JBQUssQ0FBYyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMifQ==