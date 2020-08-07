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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9tb2R1bGVzL2ltYWdlL2ltYWdlLWdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7SUFrQ0EsQ0FBQztJQWhDRyxrQ0FBUyxHQUFULFVBQVUsTUFBYyxFQUFFLElBQVk7UUFFbEMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbEIsR0FBRztZQUNELE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBRyxRQUFRLElBQUksQ0FBQywyQkFBdUIsQ0FBQztTQUN4RCxRQUNNLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQzdELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QsaUNBQVEsR0FBUixVQUFTLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVTtRQUU5QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVkLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNwQztZQUNFLElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLFNBQVMsR0FBRyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDdEIsQ0FBQyxJQUFJLFVBQVUsQ0FBQzthQUNqQjtpQkFDSTtnQkFDSCxJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQ2pCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQyJ9