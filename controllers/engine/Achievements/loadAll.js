const allAchievements = async (req, res, next) => {
  try {
    res.type('application/xml').render('achievements/list');
  } catch (err) {
    next(err);
  }
};

module.exports = allAchievements;