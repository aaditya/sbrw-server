const serverInfoModel = require('../../models/serverInfo');

const addInfo = (req, res) => {
    const info = new serverInfoModel({
        "messageSrv": req.body.messageSrv,
        "country": req.body.country,
        "adminList": [req.body.admin],
        "bannerUrl": req.body.bannerUrl,
        "discordUrl": req.body.discordUrl,
        "facebookUrl": req.body.facebookUrl,
        "homePageUrl": req.body.homePageUrl,
        "numberOfRegistered": 0,
        "maxPlayers": 100,
        "ownerList": [req.body.owner],
        "serverName": req.body.serverName,
        "timezone": req.body.timezone,
        "activatedHolidaySceneryGroups": [
            "SCENERY_GROUP_CHRISTMAS"
        ],
        "disactivatedHolidaySceneryGroups": [
            "SCENERY_GROUP_CHRISTMAS_DISABLE"
        ]
    });
    info.save((err, doc) => {
        if (err) {
            res.json({
                success: false,
                msg: err.message
            });
        }
        else {
            res.json({
                success: true,
                msg: 'Server info added.'
            })
        }
    })
}

module.exports = addInfo;