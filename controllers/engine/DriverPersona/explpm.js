const LevelMap = require('../../../models/levelRep');

const expLvlPtsMap = async (req, res, next) => {
  try {
    // Get all the level info from db
    const levelInfo = await LevelMap.find({});
    // Make an array with successive elements as sum from precceding element and current element.
    const lvlArr = levelInfo.reduce((p, cv, ci) => p.concat(cv.expPoint + p[ci]), [0]).slice(1);
    res.type('application/xml').render('personas/expLvlPlrMap', { data: { lvlArr } });
  } catch (err) {
    next(err);
  }
};

module.exports = expLvlPtsMap;
