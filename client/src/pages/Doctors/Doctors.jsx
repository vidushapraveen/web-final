import React from 'react'
import DoctorCard from './components/DoctorCard'

function Doctors() {
  return (
    <div className='doctor_section'>
        <div className="row">
            <div className="col-md-3">
                <DoctorCard />
            </div>
            <div className="col-md-3">
                <DoctorCard />
            </div>
            <div className="col-md-3">
                <DoctorCard />
            </div>
            <div className="col-md-3">
                <DoctorCard />
            </div>
        </div>
    </div>
  )
}

export default Doctors