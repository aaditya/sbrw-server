const express = require('express');

const router = express.Router();

// Miscellaneous functions.
const auth = require('./User/tokenVerify');
const logger = require('./Miscellaneous/logger');

router.use(logger);

// Achievements
router.use('/achievements', require('./Achievements'));

// Add Friend
router.get('/addfriendrequest', require('./Core/addFriend'));

// Car Classes
router.get('/carclasses', require('./Core/carClasses'));

// Catalog
router.use('/catalog', require('./Catalog'));

// Driver Persona
router.use('/DriverPersona', auth, require('./DriverPersona'));

// Event
router.use('/event', require('./Event'));

// Events
router.use('/events', require('./Events'));

// Server Info
router.get('/GetServerInformation', require('./Core/getServerInfo'));

// Get Blocked User List
router.get('/getblockeduserlist', require('./Core/getBlockedUserList'));

// Get Blockers
router.get('/getblockersbyusers', require('./Core/getBlockers'));

// Get Social Settings
router.get('/getsocialsettings', require('./Core/getSocialSettings'));

// Get Social Network Info
router.get('/getsocialnetworkinfo', require('./Core/getSocialNetwork'));

// Get User Settings
router.get('/getusersettings', require('./Core/userSettings'));

// Set User Settings
router.put('/setusersettings', require('./Core/setUserSettings'));

// FriendList
router.get('/getfriendlistfromuserid', require('./Core/friendList'));

// Gifts
router.use('/Gifts', require('./Gifts'));

// Heartbeat
router.post('/heartbeat', require('./Core/heartbeat'));

// Login Announcements
router.get('/LoginAnnouncements', require('./Core/loginAnnouncements'));

// Logging
router.use('/logging', require('./Logging'));

// Matchmaking
router.use('/matchmaking', require('./MatchMaking'));

// Modding
router.use('/Modding', require('./Modding'));

// News Articles
router.get('/NewsArticles', require('./Core/newsArticles'));

// Online Users
router.use('/OnlineUsers', require('./OnlineUsers'));

// Personas
router.use('/personas', require('./Personas'));

// Powerups
router.use('/powerups', require('./Powerups'));

// Promo Codes
router.use('/PromoCode', require('./PromoCodes'));

// Rebroadcasters
router.get('/getrebroadcasters', require('./Core/Rebroadcasters'));

// Region Information
router.get('/getregioninfo', require('./Core/regionInfo'));

// Reporting
router.use('/Reporting', require('./Reporting'));

// Security
router.use('/security', require('./Security'));

// Session
router.use('/Session', require('./Session'));

// Social
router.use('/Social', require('./Social'));

// System Info
router.get('/systeminfo', require('./Core/systeminfo'));

// User Routes
router.use('/User', require('./User'));

module.exports = router;
