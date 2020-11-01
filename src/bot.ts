import { Client } from 'discord.js';
import config from '../config.json';
import mongoose from 'mongoose';
import Deps from './utils/deps';

import EventsService from './services/events.service';
import { API } from './api/server';
import Log from './utils/log';

export const bot = new Client();

bot.login(config.bot.token);

Deps.get<EventsService>(EventsService).init();
Deps.build(API);

mongoose.connect(config.mongoURL, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false 
}, (error) => error
    ? Log.error('Failed to connect to db', 'bot')
    : Log.info('Connected to db', 'bot'));