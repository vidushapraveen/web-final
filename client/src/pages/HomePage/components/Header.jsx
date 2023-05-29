import React from 'react'

import '../styles/Header.css'

function Header() {
    return (
        <div className='header_section'>
            <div className="hero_section pt-5">
                <div className="container">
                    <h1 className='bold_text'>Find best doctors</h1>
                    <h1 className='light_text'>effortlessly</h1>
                    <p>Get 24/7 online consultations with the best doctors</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Header