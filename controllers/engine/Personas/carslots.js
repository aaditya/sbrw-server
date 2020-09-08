const carSlots = (req, res) => {
  res.type('application/xml').render('personas/carslots', {});
};

module.exports = carSlots;
