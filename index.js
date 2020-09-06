const bodyParser = require('body-parser');
const cors = require('cors');
const dgram = require('dgram');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

// XML Parsing Support for body-parser
require('body-parser-xml')(bodyParser);

const app = express();
const udpApp = dgram.createSocket('udp4');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
// app.use('/soapbox-race-core/Engine.svc', require('./controllers/engine'));
// app.use('/runner', require('./controllers/runner'));

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
  console.log(`UDP server active on ${address.address}:${address.port}`);
});

mongoose.connect(process.env.MONGO_URI, mongoOptions, (err) => {
  if (err) console.log(new Date(), 'DB Connection Error', err.message);
  else console.log(new Date(), 'DB Connected');
});

if (process.env.ENABLE_UDP) udpApp.bind(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log(new Date(), `Server running on ${process.env.PORT}`);
});

module.exports = app;
