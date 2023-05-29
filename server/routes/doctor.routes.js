const express = require('express');
const { createDoctor, getDoctorsByCategory, getDoctors } = require('../controllers/doctor');

const doctorRouter = express.Router();

doctorRouter.post("/create" , createDoctor);
doctorRouter.get("/getDoctors/:category" , getDoctorsByCategory);
doctorRouter.get("/get" , getDoctors)

module.exports = doctorRouter;