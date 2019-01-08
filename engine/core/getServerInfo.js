const serverInfo = (req, res) => {
    res.json({
        "success": true,
        "messageSrv": "Closed Indian server.",
        "homePageUrl": "https://sbrw.metaxyt.cf",
        "facebookUrl": "Your facebook page URL.",
        "discordUrl": "Your discord URL.",
        "serverName": "Freeway IN",
        "country": "IN",
        "timezone": 0,
        "bannerUrl": null,
        "adminList": "XSZD",
        "ownerList": "XSZD",
        "numberOfRegistered": 0,
        "allowedCountries": "",
        "newsUrl": null,
        "activatedHolidaySceneryGroups": [
            "SCENERY_GROUP_CHRISTMAS"
        ],
        "disactivatedHolidaySceneryGroups": [
            "SCENERY_GROUP_CHRISTMAS_DISABLE"
        ],
        "onlineNumber": 0,
        "requireTicket": false,
        "serverVersion": "1.0.0",
        "maxOnlinePlayers": 100
    });
}

module.exports = serverInfo;