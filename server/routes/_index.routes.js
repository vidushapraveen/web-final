const express = require('express');
const userRouter = require('./user.routes');
const channelRouter = require('./channel.routes');
const doctorRouter = require('./doctor.routes');

const router = express.Router();

router.use("/account" , userRouter)
router.use("/v1" , channelRouter)
router.use("/d1" , doctorRouter)

module.exports = router