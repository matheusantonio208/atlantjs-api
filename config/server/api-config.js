import '#config/env-loader';
import express from 'express';
import cors from 'cors';
import Youch from '#config/debug/youch-config.js'

import MongoDB from '#config/db-mongo/mongo-connect.js';

import routes from '#controllers/routes-api.js';

class ApiConfig {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    MongoDB.start();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(Youch);
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new ApiConfig().server;
