import React from 'react'

import '../styles/Donate.css'

function Donate() {
    return (
        <div className="donate_section container-fluid py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h1>Donate your kindness for healthy world</h1>
                    </div>
                    <div className="col-md-2">
                        <button className='py-2 px-4 mt-2'>Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate