const express = require('express');
const { verifyToken } = require('../controllers/user');
const { getAppointments, createChannel, deleteAppointment } = require('../controllers/channel');

const channelRouter = express.Router();

channelRouter.get("/myappointments" , verifyToken , getAppointments);
channelRouter.post("/channel" , verifyToken , createChannel)

module.exports = channelRouter;
