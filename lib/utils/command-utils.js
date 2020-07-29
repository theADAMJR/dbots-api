"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandUtils = /** @class */ (function () {
    function CommandUtils() {
    }
    CommandUtils.getMemberFromMention = function (mention, guild) {
        var _a;
        var id = (_a = mention.replace(/^<@!?(\d+)>$/gm, '$1')) !== null && _a !== void 0 ? _a : '';
        var member = guild.members.cache.get(id);
        if (!member)
            throw new TypeError('Member not found.');
        return member;
    };
    return CommandUtils;
}());
exports.default = CommandUtils;
function createUUID() {
    var time = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var random = (time + Math.random() * 16) % 16 | 0;
        time = Math.floor(time / 16);
        return ((c == 'x') ? random : (random & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
exports.createUUID = createUUID;
function getWeek(date) {
    var yearStart = +new Date(date.getFullYear(), 0, 1);
    var today = +new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var dayOfYear = ((today - yearStart + 1) / 86400000);
    return Math.ceil(dayOfYear / 7).toString();
}
exports.getWeek = getWeek;
