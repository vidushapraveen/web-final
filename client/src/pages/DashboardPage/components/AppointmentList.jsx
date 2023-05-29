import React from 'react'


import '../styles/AppointmentList.css'

function AppointmentList({doctorName , time , appId , idc}) {
  return (
    <div className='AppointmentList'>
        <div className='appointment_bg mt-3'>
            <div className="row">
                <div className="col-3">
                    <p className='text-center'>{doctorName}</p>
                </div>
                <div className="col-3">
                    <p className='text-center'>{appId}</p>
                </div>
                <div className="col-3">
                    <p className='text-center'>{time}</p>
                </div>
                <div className="col-3">
                    <p className='text-center'>{idc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppointmentList