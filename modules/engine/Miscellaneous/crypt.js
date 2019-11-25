const crypto = require('crypto');
const algorithm = 'aes-256-gcm';
const config = require('config');

const iv = Buffer.from(crypto.randomBytes(16));

exports.xcrypt = (text) => {
    let cipher = crypto.createCipheriv(algorithm, config.details.xkey, iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex');
    let tag = cipher.getAuthTag();
    return tag.toString('hex') + encrypted;
}

exports.ucrypt = (text, next) => {
    text = text.split('');
    let tag = Buffer.from(text.splice(0, 32).join(''), 'hex');
    text = text.join('');
    let decipher = crypto.createDecipheriv(algorithm, config.details.xkey, iv)
    try {
        decipher.setAuthTag(tag);
        let dec = decipher.update(text, 'hex', 'utf8')
        dec += decipher.final('utf8');
        next(null, dec);
    }
    catch (err) {
        next(err);
    }
}
