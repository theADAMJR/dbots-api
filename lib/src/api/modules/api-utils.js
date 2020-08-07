"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendError(res, code, error) {
    return res.status(code).json({ code: code, message: error === null || error === void 0 ? void 0 : error.message });
}
exports.sendError = sendError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tb2R1bGVzL2FwaS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLFNBQVMsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLEtBQVk7SUFDNUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sRUFBRSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRkQsOEJBRUMifQ==