import React from 'react'
import DoctorCard from './components/DoctorCard'
import axios from 'axios'
import { useEffect, useState } from 'react';

import './Doctors.css'

function Doctors() {

    const getDoctorsUrl = "http://localhost:5400/api/d1/get";
    const [doctorList, setDoctorList] = useState([])

    useEffect(() => {
        const getDoctorsFunction = async () => {
            try {
                const res = await axios.get(getDoctorsUrl)
                console.log(res.data.doctor)
                setDoctorList(res.data.doctor)
                console.log(doctorList)
            } catch (error) {
                console.log(error)
            }
        }
        getDoctorsFunction()
    }, []
    )

    return (
        <div className='doctor_section'>
            <h1 className='text-center my-3'>We have the best doctors</h1>
            <div className=" container mb-3">
                <div className="row py-2 table_head">
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <p className='mb-0'>Name</p>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <p className='mb-0'>Specialist</p>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <p className='mb-0'>contact</p>
                    </div>
                </div>
            </div>
            {doctorList && doctorList.map((element) => (
                <DoctorCard doctorName={element.name}
                    section={element.category}
                    email={element.email}
                />
            ))}
        </div>
    )
}

export default Doctors