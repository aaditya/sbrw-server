const getModInfo = async (req, res, next) => {
  try {
    return res.json({
      basePath: 'http://srv-cdn.worldunited.gg/mods-v4.0.2',
      serverID: 'worldunited',
      features: [''],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getModInfo;
