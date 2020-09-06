const getUserSettings = (req, res) => {
  res.send(`
    <User_Settings>
    <CarCacheAgeLimit>600</CarCacheAgeLimit>
    <IsRaceNowEnabled>true</IsRaceNowEnabled>
    <MaxCarCacheSize>250</MaxCarCacheSize>
    <MinRaceNowLevel>2</MinRaceNowLevel>
    <VoipAvailable>false</VoipAvailable>
    <activatedHolidaySceneryGroups>
        <string>SCENERY_GROUP_CHRISTMAS</string>
    </activatedHolidaySceneryGroups>
    <activeHolidayIds>
        <long>3</long>
    </activeHolidayIds>
    <disactivatedHolidaySceneryGroups>
        <string>SCENERY_GROUP_CHRISTMAS_DISABLE</string>
    </disactivatedHolidaySceneryGroups>
    <firstTimeLogin>false</firstTimeLogin>
    <maxLevel>60</maxLevel>
    <starterPackApplied>false</starterPackApplied>
    <userId>26083</userId>
</User_Settings>`);
};

module.exports = getUserSettings;
