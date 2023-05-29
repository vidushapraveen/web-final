const mongoose = require('mongoose')
const Channneldoctor = require('../models/user')

const Schema = mongoose.Schema;
const channelDoctorSchema = new Schema({
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Channneldoctor,
    },
    userName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true,
        minlength: 10
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    doctor: {
        type: String,
        enum: ['Dr. Sam Amu' , 'Dr. Jane Obs' , 'Dr. Atlas Dk' , 'Dr.Zobu' , 'Dr.Crew' , 'Dr.Tenise' , 'Dr.Pan uk' , 'Dr.Samson' , 'Dr.Wotson' , 'Dr.Ruf JD'],
        default: 'Dr. Sam Amu',
        required: true
    }
})

module.exports = mongoose.model('Channeldoctor' , channelDoctorSchema)