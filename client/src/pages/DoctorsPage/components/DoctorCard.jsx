import React from 'react'

import '../styles/DoctorCard.css'

function DoctorCard({doctorName , section , email}) {
    return (
        <div className="doctor_card my-2 container">
            <div className="row py-2">
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <p className='mb-0'>{doctorName}</p>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <p className='mb-0'>{section} Specialist</p>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <p className='mb-0'>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard