"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendError(res, code, error) {
    return res.status(code).json({ code: code, message: error === null || error === void 0 ? void 0 : error.message });
}
exports.sendError = sendError;
