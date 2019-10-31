const crypto = require('crypto');

const algorithm = 'aes-256-gcm';
const config = require('../../../system/config.json');

const iv = Buffer.from(crypto.randomBytes(16));

exports.xcrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, config.details.xkey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const tag = cipher.getAuthTag();
  return tag.toString('hex') + encrypted;
};

exports.ucrypt = (text, next) => {
  let dec = text.split('');
  const tag = Buffer.from(dec.splice(0, 32).join(''), 'hex');
  dec = dec.join('');
  const decipher = crypto.createDecipheriv(algorithm, config.details.xkey, iv);
  try {
    decipher.setAuthTag(tag);
    dec = decipher.update(dec, 'hex', 'utf8');
    dec += decipher.final('utf8');
    next(null, dec);
  } catch (err) {
    next(err);
  }
};
