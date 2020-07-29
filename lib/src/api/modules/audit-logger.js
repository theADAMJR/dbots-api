"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("../../data/models/log");
var AuditLogger = /** @class */ (function () {
    function AuditLogger() {
    }
    AuditLogger.getChanges = function (values, by) {
        var changes = { old: {}, new: {} };
        for (var key in values.old) {
            var changed = JSON.stringify(values.old[key]) !== JSON.stringify(values.new[key]);
            if (changed) {
                changes.old[key] = values.old[key];
                changes.new[key] = values.new[key];
            }
        }
        return new log_1.Change(by, changes);
    };
    return AuditLogger;
}());
exports.default = AuditLogger;
