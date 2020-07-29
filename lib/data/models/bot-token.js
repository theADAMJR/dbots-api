"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var botSchema = new mongoose_1.Schema({
    _id: String,
    token: String
});
exports.SavedBotToken = mongoose_1.model('botToken', botSchema);
