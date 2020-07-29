"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageGenerator = /** @class */ (function () {
    function ImageGenerator() {
    }
    ImageGenerator.prototype.applyText = function (canvas, text) {
        var context = canvas.getContext('2d');
        var fontSize = 70;
        do {
            context.font = (fontSize -= 8) + "px Roboto, sans-serif";
        } while (context.measureText(text).width > canvas.width - 275);
        return context.font;
    };
    ImageGenerator.prototype.wrapText = function (context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
    };
    return ImageGenerator;
}());
exports.default = ImageGenerator;
