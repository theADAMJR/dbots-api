import ImageGenerator from './image-generator';
import { createCanvas, loadImage, CanvasRenderingContext2D, Canvas } from 'canvas';
import { User } from 'discord.js';
import { BotDocument } from '../../../data/models/bot';

export class BotWidgetGenerator extends ImageGenerator {
    colors = {
        primary: '#F4F2F3',
        secondary: '#46828D',
        tertiary: '#36E2CA',
        bgPrimary: '#2C2F33',
        bgSecondary: '#23272A'
    }

    constructor(
        private user: User,
        private savedBot: BotDocument) { super(); }

    async generate(size: WidgetSize = 'LARGE') {
        if (size === 'MEDIUM')
            return this.medium();
        else if (size === 'SMALL')
            return this.small();
        return this.large();
    }

    private async large() {
        const { canvas, ctx } = this.createCanvas(300, 250);
        
        ctx.fillStyle = this.colors.bgPrimary;
        // SQUARE
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // SQUIRCLE
        // const size = canvas.width;
        // const borderRadius = 15;
        // ctx.beginPath();
        // ctx.moveTo(size,size);
        // ctx.arcTo(0,size,0,0,borderRadius);
        // ctx.arcTo(0,0,size,0,borderRadius);
        // ctx.arcTo(size,0,size,size,borderRadius);
        // ctx.arcTo(size,size,0,size,borderRadius);
        // ctx.fill();
        
        this.addUserText(ctx, canvas);        
        await this.addUserAvatar(ctx);
        await this.addStats(ctx, canvas);
        this.addBotOverview(ctx, canvas);

        await this.addFooter(canvas, ctx);

        return canvas.toBuffer();
    }

    async addStats(ctx: CanvasRenderingContext2D, canvas: Canvas) {
        const pos = { x: 25, y: canvas.height / 3.25 };
        
        const serversImage = await loadImage('api/modules/image/server.png');
        const votesImage = await loadImage('api/modules/image/chevron-circle-up.png');
        const nativeSize = { w: 128, h: 128 };

        ctx.drawImage(votesImage, pos.x, pos.y,
            nativeSize.w / 6, nativeSize.h / 6);
        
        ctx.font = 'bold 16px Arial, sans-serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.savedBot.votes.length.toString(),
            pos.x + 25, pos.y + 16.5);
        ctx.fillText(this.savedBot.stats?.guildCount?.toString() ?? 'N/A',
            (canvas.width / 2) + 27.5, pos.y + 16.5);

        ctx.drawImage(serversImage, (canvas.width / 2), pos.y,
            nativeSize.w / 6, nativeSize.h / 6);
    }

    private addBotOverview(ctx: CanvasRenderingContext2D, canvas) {
        ctx.font = '16px Arial, sans-serif';
        ctx.fillStyle = 'gray';
        super.wrapText(ctx, this.savedBot.listing.overview,
            25, canvas.height / 2, canvas.width - 50, 20);
    }

    private async addFooter(canvas, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.colors.bgSecondary;
        ctx.fillRect(0, canvas.height * 0.85, canvas.width, canvas.height);

        const avatar = await loadImage('api/modules/image/logo.png');

        const pos = { x: 10, y: canvas.height * 0.885 };
        const nativeSize = { w: 231, h: 46 };
        
        ctx.drawImage(avatar, pos.x, pos.y,
            nativeSize.w / 2.5, nativeSize.h / 2.5);
    }

    private addUserText(ctx: CanvasRenderingContext2D, canvas) {
        const pos = { x: canvas.width / 4, y: canvas.height / 5 };

        ctx.font = '32px Arial, sans-serif';
        ctx.fillStyle = this.colors.primary;
        ctx.fillText(this.user.username, pos.x, pos.y);
    }

    private async addUserAvatar(ctx: CanvasRenderingContext2D) {
        const pos = { x: 15, y: 15 };

        ctx.save();
        ctx.beginPath();
        ctx.arc(pos.x + 25, pos.y + 25, 25, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const avatar = await loadImage(this.user.displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, pos.x, pos.y, 50, 50);

        ctx.beginPath();
        ctx.arc(0, 0, 25, 0, Math.PI * 2, true);
        ctx.clip();
        ctx.closePath();
        ctx.restore();
    }

    private medium() {
        const { canvas, ctx } = this.createCanvas(500, 350);

        return canvas.toBuffer();        
    }

    private small() {
        const { canvas, ctx } = this.createCanvas(500, 200);

        return canvas.toBuffer();
    }

    private createCanvas(width: number, height: number) {
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        return { canvas, ctx };
    }
}

export type WidgetSize = 'SMALL' | 'MEDIUM' | 'LARGE';