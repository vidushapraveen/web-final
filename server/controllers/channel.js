const Channneldoctor = require("../models/channel");

const createChannel = async (req, res , next) =>{
    const {userName ,age , nic ,telephone , address , date , doctor} = req.body;
    const channneldoctor = new Channneldoctor({
        patientId: req.id,
        userName,
        age,
        nic,
        telephone,
        address,
        date,
        doctor
    })

    try {
        await channneldoctor.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({message: channneldoctor})
}

const getAppointments = async ( req , res , next ) => {
    const patientId = req.id;
    let user;

    try {
       user = await Channneldoctor.find({patientId :patientId})
    } catch (error) {
       return new Error(err)
    }

    if (!user) {
       return res.status(404).json({message: "User have no Appointment"})
    }

    return res.status(200).json({user})

}


exports.createChannel = createChannel;
exports.getAppointments = getAppointments;
