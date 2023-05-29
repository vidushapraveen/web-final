import React from 'react'

import '../styles/Contact.css'
// import {ImFacebook2} from 'react-icons/im'
// import {TfiTwitterAlt} from 'react-icons/tfi'
// import {BsLinkedin} from 'react-icons/bs'

function Contact() {
    return (
        <div className="contact_section py-4">
            <h1 className="text-center">Contact Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form_div p-3 mt-5">
                            <form>
                                <label htmlFor="">Name</label><br />
                                <input type="text" placeholder='Name' className='py-2 px-2 mb-2' /><br />

                                <label htmlFor="">Email</label><br />
                                <input type="email" name="" id="" placeholder='Email' className='py-2 px-2 mb-2' /><br />

                                <label htmlFor="">Address</label><br />
                                <input type="text" placeholder='Address' className='py-2 px-2 mb-2' />

                                <div className="row mb-2">
                                    <div className="col-6">
                                        <label htmlFor="">Age</label><br />
                                        <input type="number" placeholder='Age' className='py-2 px-2' />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Telephone No</label><br />
                                        <input type="number" placeholder='Telephone No' className='py-2 px-2' />
                                    </div>
                                </div>
                                <label htmlFor="">Message</label><br />
                                <input type="text" placeholder='Message' className='pb-5 pt-2 px-2' />
                                <button className='btn btn-success mt-4'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact