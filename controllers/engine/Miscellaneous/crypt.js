const crypto = require('crypto');

const algorithm = 'aes-256-gcm';

const iv = Buffer.from(crypto.randomBytes(16));

exports.xcrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, process.env.CRYPT_KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const tag = cipher.getAuthTag();
  return tag.toString('hex') + encrypted;
};

exports.ucrypt = (text) => new Promise((resolve, reject) => {
  try {
    let textArr = text.split('');
    const tag = Buffer.from(textArr.splice(0, 32).join(''), 'hex');

    textArr = textArr.join('');
    const decipher = crypto.createDecipheriv(algorithm, process.env.CRYPT_KEY, iv).setAuthTag(tag);

    let dec = decipher.update(textArr, 'hex', 'utf8');
    dec += decipher.final('utf8');

    resolve(dec);
  } catch (err) {
    reject(err);
  }
});
