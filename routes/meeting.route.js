const express = require('express');
const { requestMeeting, handleMeeting, getPendingMeeting, getApprovedMeeting, getRejectedMeeting, getMeetings } = require('../controllers/meetingController');

const router = express.Router();

router.post('/request', requestMeeting);
router.post('/handle', handleMeeting);
router.get('/', getMeetings);
router.get('/pending', getPendingMeeting);
router.get('/approved', getApprovedMeeting);
router.get('/rejected', getRejectedMeeting);


module.exports = router;
