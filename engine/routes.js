const express = require('express');
const router = express.Router();

// Miscellaneous functions.
const auth = require('./User/tokenVerify');
const logger = require('../system/misc/logger');

// Achievements
router.use('/achievements', require('./Achievements/index'));

// Add Friend
router.get('/addfriendrequest', require('./Core/addFriend'));

// Car Classes
router.get('/carclasses', require('./Core/carClasses'));

// Catalog
router.use('/catalog', require('./Catalog/index'));

// Driver Persona
router.use('/DriverPersona', require('./DriverPersona/index'));

// Event
router.use('/event', require('./Event/index'));

// Events
router.use('/events', require('./Events/index'));

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

// FriendList
router.get('/getfriendlistfromuserid', require('./Core/friendList'));

// Gifts
router.use('/Gifts', require('./Gifts/index'));

// Heartbeat
router.post('/heartbeat', require('./Core/heartbeat'));

// Login Announcements
router.get('/LoginAnnouncements', require('./Core/loginAnnouncements'));

// Logging
router.use('/logging', require('./Logging/index'))

// Matchmaking
router.use('/matchmaking', require('./MatchMaking/index'));

// News Articles
router.get('/NewsArticles', require('./Core/newsArticles'));

// Online Users
router.use('/OnlineUsers', require('./OnlineUsers/index'));

// Personas
router.use('/personas', require('./Personas/index'));

// Powerups
router.use('/powerups', require('./Powerups/index'));

// Promo Codes
router.use('/PromoCode', require('./PromoCodes/index'));

// Rebroadcasters
router.get('/getrebroadcasters', require('./Core/Rebroadcasters'));

// Region Information
router.get('/getregioninfo', require('./Core/regionInfo'));

// Reporting
router.use('/Reporting', require('./Reporting/index'));

// Security
router.use('/security', require('./Security/index'));

// Session
router.use('/Session', require('./Session/index'));

// Social
router.use('/Social', require('./Social/index'));

// System Info
router.get('/systeminfo', require('./Core/systeminfo'));

// User Routes
router.use('/User', require('./User/index'));

module.exports = router;