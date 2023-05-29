const Doctor = require("../models/doctor");

const createDoctor = async (req, res , next) =>{
    const {name , email , category} = req.body;
    const doctor = new Doctor({
        name,
        email,
        category
    })

    try {
        await doctor.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({message: doctor})
}

const getDoctorsByCategory = async ( req , res , next ) => {
    const {category} = req.params;
    let doctor;

    try {
       doctor = await Doctor.find({category : category})
    } catch (error) {
       return new Error(err)
    }

    if (!doctor) {
       return res.status(404).json({message: "No doctors in this category"})
    }

    return res.status(200).json({doctor})

}

const getDoctors = async ( req , res , next ) => {
    let doctor;

    try {
       doctor = await Doctor.find()
    } catch (error) {
       return new Error(err)
    }

    if (!doctor) {
       return res.status(404).json({message: "No doctors"})
    }

    return res.status(200).json({doctor})

}


exports.createDoctor = createDoctor;
exports.getDoctorsByCategory = getDoctorsByCategory;
exports.getDoctors = getDoctors