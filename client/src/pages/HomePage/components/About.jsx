import React from 'react'
import whoWeAre from '../../../assets/images/doctor-robot.jpg'

import '../styles/About.css'

function About() {
    return (
        <div className='about_section'>
            <div className=" container-fluid">
                <div className="row">
                    <div className="col-md-6 p-md-5  mt-md-5">
                        <img src={whoWeAre} alt='' />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h1 className='text-center mt-5'>Who we are</h1>
                        <hr />
                        <div className="p-3">
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit harum nobis, doloremque eaque delectus optio vel possimus explicabo laboriosam atque?</p>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis placeat quidem harum eos sequi blanditiis eligendi dignissimos, quo, in iusto cum! Id repellendus harum dicta. Esse facere obcaecati commodi rerum earum totam hic accusantium cupiditate.</p>
                        </div>
                        <button className='py-2 px-3'>Read More</button>
                        <hr />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About