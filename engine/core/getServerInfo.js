const package = require('../../package.json');
const serverInfoModel = require('../../models/serverInfo');

const serverInfo = (req, res) => {
    serverInfoModel.find({}).exec((err, doc) => {
        if (err) {
            res.json({
                success: false,
                msg: err.message
            });
        }
        else {
            let info = doc[0];
            if (!info) {
                res.json({
                    success: false,
                    msg: 'Server not initialized. Run the addServerInfo API.'
                })
            }
            else {
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
                    "adminList": info.adminList[0],
                    "ownerList": info.ownerList[0],
                    "numberOfRegistered": info.numberOfRegistered,
                    "allowedCountries": info.allowedCountries,
                    "newsUrl": info.newsUrl,
                    "activatedHolidaySceneryGroups": [
                        "SCENERY_GROUP_CHRISTMAS"
                    ],
                    "disactivatedHolidaySceneryGroups": [
                        "SCENERY_GROUP_CHRISTMAS_DISABLE"
                    ],
                    "onlineNumber": 0,
                    "requireTicket": false,
                    "serverVersion": package.version,
                    "maxOnlinePlayers": info.maxPlayers
                });
            }
        }
    });
}

module.exports = serverInfo;