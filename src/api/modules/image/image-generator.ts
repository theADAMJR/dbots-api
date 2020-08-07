import { Canvas } from 'canvas';

export default class ImageGenerator 
{
    applyText(canvas: Canvas, text: string)
    {
        const context = canvas.getContext('2d');
        let fontSize = 70;

        do {
          context.font = `${fontSize -= 8}px Roboto, sans-serif`;
        }
        while (context.measureText(text).width > canvas.width - 275);
        return context.font;
    }
    wrapText(context, text, x, y, maxWidth, lineHeight) 
    {
        let words = text.split(' ');
        let line = '';

        for(let n = 0; n < words.length; n++) 
        {
          let testLine = line + words[n] + ' ';
          let metrics = context.measureText(testLine);
          let testWidth = metrics.width;
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
    }
}
