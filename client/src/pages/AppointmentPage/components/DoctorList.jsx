import React from 'react'

function DoctorList({doctorNames}) {
    return (
        <>
            <option value={doctorNames}>{doctorNames}</option>
        </>
    )
}

export default DoctorList