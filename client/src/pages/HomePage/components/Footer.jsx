import React from 'react'

import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { BsMailbox } from 'react-icons/bs'
import { BiRightArrow } from 'react-icons/bi'

import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer_section pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className='py-2 px-5 mb-3'>Channel A Doctor</button>
                        <p className='mb-0'><BsTelephone /> &nbsp;+41 258 369 4552</p>
                        <p className='mb-0 mt-2'><CiMail /> &nbsp;lifewaws.contact.en</p>
                        <p className='mb-0 mt-2'><BsMailbox /> &nbsp;no: 245/2 ,Church Road , California</p>
                        <p></p>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-4">
                                <h4 >Doctors <BiRightArrow /></h4>
                                <p> - Family medicine</p>
                                <p> - Internal medicine</p>
                                <p> - Pediatricians</p>
                                <p> - Cardiologist</p>
                                <p> - Obstetrician</p>
                                <p> - Surgeon</p>
                            </div>
                            <div className="col-4">
                                <h4>Elder Care <BiRightArrow /></h4>
                                <p> - San Francisco</p>
                                <p> - New York</p>
                                <p> - Houston</p>
                                <p> - Boston</p>
                                <p> - Portland</p>
                                <p> - Columbus</p>
                            </div>
                            <div className="col-4">
                                <h4>Other <BiRightArrow /></h4>
                                <p> - Pricing</p>
                                <p> - Packages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer