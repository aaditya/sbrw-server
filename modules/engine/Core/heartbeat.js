const heartbeat = (req, res) => {
  res.type('application/xml').render('core/heartbeat');
};

module.exports = heartbeat;
