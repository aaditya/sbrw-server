module.exports = {
    details: {
        PORT: 8680
    },
    features: {
        udp: true,
        cors: true,
        logger: false
    },
    info: {
        messageSrv: 'Server Message',
        serverName: 'Server Name',
        country: 'US',
        adminList: '[Can, Be, Array]',
        bannerUrl: null,
        discordUrl: null,
        facebookUrl: null,
        homePageUrl: null,
        allowedCountries:'',
        maxOnlinePlayers: 100,
        newsUrl: null,
        ownerList: '[Can, Be, Array]',
        timezone: '0',
        activatedHolidaySceneryGroups: [
            'SCENERY_GROUP_CHRISTMAS',
            'SCENERY_GROUP_NEWYEARS',
            'SCENERY_GROUP_OKTOBERFEST',
            'SCENERY_GROUP_HALLOWEEN'
        ],
        disactivatedHolidaySceneryGroups: [
            'SCENERY_GROUP_CHRISTMAS_DISABLE',
            'SCENERY_GROUP_NEWYEARS_DISABLE',
            'SCENERY_GROUP_HALLOWEEN_DISABLE',
            'SCENERY_GROUP_OKTOBERFEST_DISABLE'
        ]
    }
};
