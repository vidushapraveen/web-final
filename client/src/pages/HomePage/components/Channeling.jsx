import React from 'react'

import one from '../../../assets/svg/1.svg'
import two from '../../../assets/svg/2.svg'
import three from '../../../assets/svg/3.svg'

import '../styles/Channeling.css'

import { useNavigate } from 'react-router-dom'

function Channeling() {
    const navigate = useNavigate()
    return (
        <div className='channeling_section py-sm-0'>
            <div className="container center_div my-md-5 pb-md-5">
                <h1 className='text-center'>Only three steps to meet your doctor</h1>
                <div className="row mt-5 pt-5">
                    <div className="col-md-7 appointment_step_div py-5">
                        <div className="my-4">
                            <div className="row my-3">
                                <div className="col-2">
                                    <img src={one} alt='' />
                                </div>
                                <div className="col-10">
                                    <p className='mt-2'>Create account and register as a patient</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="row my-3">
                                <div className="col-2">
                                    <img src={two} alt='' />
                                </div>
                                <div className="col-10">
                                    <p className='mt-2'>Login to your account</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="row my-3">
                                <div className="col-2">
                                    <img src={three} alt='' />
                                </div>
                                <div className="col-10">
                                    <p className='mt-2'>Make an appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center mt-sm-5 align-items-center">
                        <button className='py-3 px-5' onClick={() => { navigate('/register') }}>Make an appointment</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Channeling