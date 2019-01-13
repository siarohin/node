const express = require('express');
const router = require('./src/routes');
const logger = require('./src/middlewares/logger');
const parser = require('./src/middlewares/jsonBodyParser');

const app = express();

app.use(logger);

app.use(parser);

app.use(router);

app.listen(8080);