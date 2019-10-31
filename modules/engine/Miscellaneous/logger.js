const fs = require('fs');
const uuid = require('uuid/v1')();

const config = require('../../../system/config.json');

const loggerFunc = (req, res, next) => {
  if (config.features.logger) {
    let fname;
    if (req.originalUrl.indexOf('?') === -1) {
      fname = req.originalUrl.split('/').join('_');
    } else {
      const file = req.originalUrl.split('?')[0];
      fname = file.split('/').join('_');
    }

    const name = fname.split('_').filter((i, index) => index > 2).join('_');

    const stamp = new Date().getTime();

    const dir = `/logs/access/${uuid}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const fstream = fs.createWriteStream(`${dir}/${stamp}_${name}.json`);
    const data = {
      Protocol: req.method,
      Body: req.body,
      Queries: req.query,
      Params: req.params,
      Headers: req.headers,
      URL: req.originalUrl,
    };
    fstream.write(JSON.stringify(data, null, 4));
    fstream.end();
  }
  next();
};

module.exports = loggerFunc;
