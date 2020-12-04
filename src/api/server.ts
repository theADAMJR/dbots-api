import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import rateLimiter from './modules/rate-limiter';
import Log from '../utils/log';
import Deps from '../utils/deps';
import { resolve } from 'path';
import { WebSocket } from '../api/websocket/websocket';
import SitemapGenerator from './modules/sitemap-generator';

import { router as apiRoutes } from './routes/api-routes';
import { router as botsRoutes } from './routes/bots/bots-routes';
import { router as manageBotRoutes } from './routes/bots/manage-bot-routes';
import { router as statsRoutes } from './routes/bots/stats-routes';
import { router as userRoutes } from './routes/user-routes';
import { router as packRoutes } from './routes/pack-routes';

export const app = express();

export class API {
    rootSitemap = '';
    botsSitemap = '';
    packsSitemap = '';

    constructor(
        private sitemapGenerator = Deps.get<SitemapGenerator>(SitemapGenerator),
        private ws = Deps.get<WebSocket>(WebSocket)) {
        app.use(rateLimiter);
        app.use(cors());
        app.use(bodyParser.json());

        app.get('/api/v1/sitemaps/root.xml', (req, res) =>
            res.set('Content-Type', 'text/xml').send(this.rootSitemap));
        app.get('/api/v1/sitemaps/bots.xml', (req, res) =>
            res.set('Content-Type', 'text/xml').send(this.botsSitemap));
        app.get('/api/v1/sitemaps/packs.xml', (req, res) =>
            res.set('Content-Type', 'text/xml').send(this.packsSitemap));
            
        app.use('/api/v1/user', userRoutes);
        app.use('/api/v1/packs', packRoutes);
        app.use('/api/v1/bots', botsRoutes, manageBotRoutes);
        app.use('/api/v1/bots/:id', statsRoutes);
        app.use('/api/v1', apiRoutes);
        
        // uncomment if you are using Glitch or client-side rendering
        const dashboardPath = resolve('./dist/twopg-dashboard/browser');
        app.use(express.static(dashboardPath));
        app.all('*', (req, res) => res
            .status(200)
            .sendFile(`${dashboardPath}/index.html`));

        const port = process.env.PORT || 3000;
        const server = app.listen(port, () => Log.info(`API is live on port ${port}`));

        this.ws.init(server);
    }

    async initSitemaps() {
        this.rootSitemap = this.sitemapGenerator.getRootMap();
        this.botsSitemap = await this.sitemapGenerator.getBotsMap();
        this.packsSitemap = await this.sitemapGenerator.getPacksMap();
    }
}
