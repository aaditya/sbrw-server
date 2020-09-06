const friendList = (req, res) => {
  res.type('application/xml');
  res.send(`
    <PersonaFriendsList>
    <friendPersona/>
    </PersonaFriendsList>
    `);
};

module.exports = friendList;
