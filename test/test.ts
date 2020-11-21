import { config } from 'dotenv';
config();

import { connect } from 'mongoose';
connect(process.env.MONGO_URI)

import './integration/pack-routes.tests';