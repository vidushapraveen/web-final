import React from 'react'

import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='navbar_section'>
            <div className="nav_div ">
                <div className="nav_link px-3 py-1">
                    <p><button onClick={() => { navigate('/')}}>Home</button></p>
                    <p><button onClick={() => { navigate('/doctors') }}>Doctors</button></p>
                    <p><button onClick={() => { navigate('/appointment') }}>Appointment</button></p>
                    <p><button onClick={() => { navigate('/reports')}}>Reports</button></p>
                </div>
                <div className="logout_div px-2">
                    <button>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar