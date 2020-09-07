const bodyParser = require('body-parser');
const cors = require('cors');
const dgram = require('dgram');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

// XML Parsing Support for body-parser
require('body-parser-xml')(bodyParser);
const buildAssets = require('./controllers/common/build_assets');
const errorLogger = require('./controllers/common/error_logger');

const app = express();
const udpApp = dgram.createSocket('udp4');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

// View Rendering Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.xml());

// Route Access Details
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Cross Origin Policy
app.use(cors());

// Actual Routes
const engineController = require('./controllers/engine');

app.use('/', engineController); // For In-Game Server Access
app.use('//', engineController); // For Launcher Access

// Testing Routes Only
app.use('/runner', require('./controllers/runner'));

// Error Handler (To-Do)
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // Log the errors to a file
  const {
    method,
    originalUrl,
    ip,
    body,
    headers,
  } = req;
  // eslint-disable-next-line max-len
  errorLogger.error(`${new Date().toISOString()} | ${method} - ${originalUrl} | IP: ${ip} | Error: ${err.message} | Body: ${JSON.stringify(body)} | Headers: ${JSON.stringify(headers)}`);
  // Send a response
  if (!res.headersSent) {
    res.status(500).send('');
  }
});

// UDP Server Settings
udpApp.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  udpApp.close();
});

udpApp.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

udpApp.on('listening', () => {
  const address = udpApp.address();
  console.log(new Date(), `UDP server running on ${address.port}`);
});

mongoose.connect(process.env.MONGO_URI, mongoOptions, (err) => {
  if (err) console.log(new Date(), 'DB Connection Error', err.message);
  else {
    console.log(new Date(), 'Database connection successful');
    buildAssets();
  }
});

if (process.env.ENABLE_UDP) udpApp.bind(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log(new Date(), `API Server running on ${process.env.PORT}`);
});

module.exports = app;
