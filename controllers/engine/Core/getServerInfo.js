const package = require('../../../package.json');
const { info } = require('config');

const userModel = require(__base + 'models/user.js');

const serverInfo = (req, res) => {
    userModel.find({}, (err, doc) => {
        if (err) {
            res.json({
                success: false,
                msg: err.message
            });
        }
        else {
            // Add logged in flags.
            let onlineUsers = doc.filter((i) => { return i.status == 1;})
            res.json({
                "success": true,
                "messageSrv": info.messageSrv,
                "homePageUrl": info.homePageUrl,
                "facebookUrl": info.facebookUrl,
                "discordUrl": info.discordUrl,
                "serverName": info.serverName,
                "country": info.country,
                "timezone": info.timezone,
                "bannerUrl": info.bannerUrl,
                "adminList": info.adminList,
                "ownerList": info.ownerList,
                "numberOfRegistered": doc.length,
                "allowedCountries": info.allowedCountries,
                "newsUrl": info.newsUrl,
                "activatedHolidaySceneryGroups": info.activatedHolidaySceneryGroups,
                "disactivatedHolidaySceneryGroups": info.disactivatedHolidaySceneryGroups,
                "onlineNumber": onlineUsers.length,
                "requireTicket": false,
                "serverVersion": package.version,
                "maxOnlinePlayers": info.maxOnlinePlayers
            });
        }
    });
}

module.exports = serverInfo;
