const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Doctor' , doctorSchema);