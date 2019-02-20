const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
    "email": String,
    "password": String,
    "status": {
        default: 0,
        type: Number
    }
});

module.exports = mongoose.model('User', User);