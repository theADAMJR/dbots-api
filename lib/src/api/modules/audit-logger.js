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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQtbG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tb2R1bGVzL2F1ZGl0LWxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRDtBQUVoRDtJQUFBO0lBYUEsQ0FBQztJQVpVLHNCQUFVLEdBQWpCLFVBQWtCLE1BQTRCLEVBQUUsRUFBVTtRQUN0RCxJQUFJLE9BQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRW5DLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRixJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QztTQUNKO1FBQ0QsT0FBTyxJQUFJLFlBQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUMifQ==