"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var botSchema = new mongoose_1.Schema({
    _id: String,
    token: String,
    voteWebhookURL: String
});
exports.SavedBotToken = mongoose_1.model('botToken', botSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LXRva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGEvbW9kZWxzL2JvdC10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFtRDtBQUVuRCxJQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDekIsR0FBRyxFQUFFLE1BQU07SUFDWCxLQUFLLEVBQUUsTUFBTTtJQUNiLGNBQWMsRUFBRSxNQUFNO0NBQ3pCLENBQUMsQ0FBQztBQVFVLFFBQUEsYUFBYSxHQUFHLGdCQUFLLENBQW1CLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyJ9