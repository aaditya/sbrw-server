const systemInfo = (req, res) => {
    res.send(`<SystemInfo>
    <Branch>production</Branch>
    <ChangeList>620384</ChangeList>
    <ClientVersion>637</ClientVersion>
    <ClientVersionCheck>true</ClientVersionCheck>
    <Deployed>08/20/2013 11:24:40</Deployed>
    <EntitlementsToDownload>true</EntitlementsToDownload>
    <ForcePermanentSession>true</ForcePermanentSession>
    <JidPrepender>sbrw</JidPrepender>
    <LauncherServiceUrl>http://127.0.0.1</LauncherServiceUrl>
    <NucleusNamespace>sbrw-live</NucleusNamespace>
    <NucleusNamespaceWeb>sbr_web</NucleusNamespaceWeb>
    <PersonaCacheTimeout>900</PersonaCacheTimeout>
    <PortalDomain>soapboxrace.world</PortalDomain>
    <PortalStoreFailurePage>soapboxrace.world/fail</PortalStoreFailurePage>
    <PortalTimeOut>6000</PortalTimeOut>
    <ShardName>CORE</ShardName>
    <Time>2019-01-08T09:40:53.965+03:00</Time>
    <Version>1599</Version>
    </SystemInfo>`)
}

module.exports = systemInfo;