const bodyParser = require('body-parser');
const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');
const path = require('path');

const { options: loggerOptions } = require('./utils/logger');

/* Global Path setup for easy require */
global.__base = __dirname + '/';

require('body-parser-xml')(bodyParser);

const app = express();

const config = require('config');

// XML/HTML Rendering Engine
app.set('views', path.join(__dirname, 'modules/renders'));
app.set('view engine', 'ejs');

// POST request parsing
app.use(bodyParser.json());
app.use(bodyParser.xml());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('tokenSign', config.details.sign);

// API backtracking
app.use(expressWinston.logger(loggerOptions));

app.use('/soapbox-race-core/Engine.svc', require('./modules/engine/routes'));
app.use('/runner', require('./modules/runner/routes'));

app.use(expressWinston.errorLogger(loggerOptions));

module.exports = app;
