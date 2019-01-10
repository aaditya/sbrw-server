const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ServInfo = new schema({
    "messageSrv": String,
    "country": String,
    "adminList": [String],
    "bannerUrl": String,
    "discordUrl": String,
    "facebookUrl": String,
    "homePageUrl": String,
    "numberOfRegistered": Number,
    "maxPlayers": Number,
    "ownerList": [String],
    "serverName": String,
    "timezone": Number,
    "activatedHolidaySceneryGroups": [String],
    "disactivatedHolidaySceneryGroups": [String]
});

module.exports = mongoose.model('ServerInfo', ServInfo);