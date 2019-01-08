const chatInfo = (req, res) => {
    res.send( `<chatServer>
    <Rooms>
    <chatRoom>
    <channelCount>8</channelCount>
    <longName>TXT_CHAT_LANG_RUSSIAN</longName>
    <shortName>RUS</shortName>
    </chatRoom>
    <chatRoom>
    <channelCount>2</channelCount>
    <longName>TXT_CHAT_LANG_ENGLISH</longName>
    <shortName>ENG</shortName>
    </chatRoom>
    <chatRoom>
    <channelCount>2</channelCount>
    <longName>TXT_CHAT_LANG_GENERAL</longName>
    <shortName>GEN</shortName>
    </chatRoom>
    </Rooms>
    <ip>185.125.231.50</ip>
    <port>5333</port>
    <prefix>sbrw</prefix>
    </chatServer>`);
}

module.exports = chatInfo;