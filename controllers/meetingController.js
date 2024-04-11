const Meeting = require('../models/meeting.model');

async function requestMeeting(req, res) {
    try {
        const meeting = new Meeting(req.body);
        await meeting.save();
        res.status(201).send(meeting);
    } catch (error) {
        res.status(400).send(error);
    }
}

async function handleMeeting(req, res) {
    const { meetingId, status } = req.body;
    try {
        const meeting = await Meeting.findById(meetingId);
        if (!meeting) {
            return res.status(404).send({ error: 'Meeting not found' });
        }
        meeting.status = status;
        await meeting.save();
        res.status(200).send({meeting, message: `Meeting updated successfully with status: ${status}`});
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getMeetings(req, res) {
    try {
        const meetings = await Meeting.find();
        res.status(200).send(meetings);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getPendingMeeting(req, res) {
    try {
        const meetings = await Meeting.find({ status: 'pending' });
        res.status(200).send(meetings);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getApprovedMeeting(req, res) {
    try {
        const meetings = await Meeting.find({ status: 'approved' });
        res.status(200).send(meetings);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getRejectedMeeting(req, res) {
    try {
        const meetings = await Meeting.find({ status: 'rejected' });
        res.status(200).send(meetings);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    requestMeeting,
    getMeetings,
    getPendingMeeting,
    getApprovedMeeting,
    getRejectedMeeting,
    handleMeeting
};