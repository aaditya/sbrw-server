const getRegionInfo = (req, res) => {
  res.send(`<RegionInfo>
    <CountdownProposalInMilliseconds>3000</CountdownProposalInMilliseconds>
    <DirectConnectTimeoutInMilliseconds>1000</DirectConnectTimeoutInMilliseconds>
    <DropOutTimeInMilliseconds>15000</DropOutTimeInMilliseconds>
    <EventLoadTimeoutInMilliseconds>30000</EventLoadTimeoutInMilliseconds>
    <HeartbeatIntervalInMilliseconds>1000</HeartbeatIntervalInMilliseconds>
    <UdpRelayBandwidthInBps>9600</UdpRelayBandwidthInBps>
    <UdpRelayTimeoutInMilliseconds>60000</UdpRelayTimeoutInMilliseconds>
</RegionInfo>`);
};

module.exports = getRegionInfo;
