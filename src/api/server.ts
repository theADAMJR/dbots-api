import express from 'express';
import config from '../../config.json';
import cors from 'cors';
import OAuthClient from 'disco-oauth';
import bodyParser from 'body-parser';
import { resolve } from 'path';
import rateLimiter from './modules/rate-limiter';
import Log from '../utils/log';
import Deps from '../utils/deps';
import Stats from './modules/stats';

import { router as apiRoutes } from './routes/api-routes';
import { router as botsRoutes } from './routes/bots/bots-routes';
import { router as manageBotRoutes } from './routes/bots/manage-bot-routes';
import { router as statsRoutes } from './routes/bots/stats-routes';
import { router as userRoutes } from './routes/user-routes';
import SitemapGenerator from './modules/sitemap-generator';

export const app = express(),
             AuthClient = new OAuthClient(config.bot.id, config.bot.secret);

export class API {
    rootSitemap = '';
    botsSitemap = '';

    constructor(
        private sitemapGenerator = Deps.get<SitemapGenerator>(SitemapGenerator),
        private stats = Deps.get<Stats>(Stats)) {        
        AuthClient.setRedirect(`${config.api.url}/auth`);
        AuthClient.setScopes('identify', 'guilds');

        app.use(rateLimiter);
        app.use(cors());
        app.use(bodyParser.json());

        app.get('/api/v1/sitemaps/root.xml', (req, res) =>
            res.set('Content-Type', 'text/xml').send(this.rootSitemap));
        app.get('/api/v1/sitemaps/bots.xml', (req, res) =>
            res.set('Content-Type', 'text/xml').send(this.botsSitemap));
            
            app.get('/bots', (req,res) => res.redirect('/'));
            
        app.use('/api/v1/user', userRoutes);
        app.use('/api/v1/bots', botsRoutes, manageBotRoutes);
        app.use('/api/v1/bots/:id', statsRoutes);
        app.use('/api/v1', apiRoutes);
        
        // uncomment if you are using Glitch or client-side rendering
        /*const dashboardPath = resolve('./dist/twopg-dashboard/browser');
        app.use(express.static(dashboardPath));
        app.all('*', (req, res) => res
            .status(200)
            .sendFile(`${dashboardPath}/index.html`));*/

        const port = process.env.PORT || config.api.port || 3000;
        app.listen(port, () => Log.info(`API is live on port ${port}`));
        
        this.stats.init();
    }

    async initSitemaps() {
        this.rootSitemap = this.sitemapGenerator.getRootMap();
        this.botsSitemap = await this.sitemapGenerator.getBotsMap();
    }
}
