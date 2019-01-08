const getReBroadcasters = (req, res) => {
    res.send(`<ArrayOfUdpRelayInfo>
    <UdpRelayInfo>
        <Host>78.107.251.45</Host>
        <Port>9999</Port>
    </UdpRelayInfo>
</ArrayOfUdpRelayInfo>`);
}

module.exports = getReBroadcasters;