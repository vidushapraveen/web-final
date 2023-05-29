import React from 'react'

import '../styles/Profile.css'

function Profile({user}) {
    return (
        <div className="head_div px-3 py-2">
            <div className="logo_div">
                <h1>Life waws</h1>
            </div>
            <div className="user_div">
                <p>{user}</p>
                <p className='online_text'>Online</p>
            </div>
        </div>
    )
}

export default Profile