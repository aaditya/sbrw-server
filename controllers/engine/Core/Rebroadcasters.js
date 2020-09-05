const getReBroadcasters = (req, res) => {
    res.send(`<ArrayOfUdpRelayInfo>
    <UdpRelayInfo>
        <Host>127.0.0.1</Host>
        <Port>8680</Port>
    </UdpRelayInfo>
</ArrayOfUdpRelayInfo>`);
}

module.exports = getReBroadcasters;