import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

import '../RegisterPage/Signup.css'

function Signup() {
    const history = useNavigate()
    const [error , setError] = useState('')
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async () => {
        const res = await axios.post("http://localhost:5400/api/account/signup", {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).catch(err => setError(err));
        const data = await res.data;
    
        console.log(res)
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest().then(() => history("/login"))
    }

    return (
        <div className='Signup_Page'>
            {error && 
                 <div class="alert alert-warning alert-dismissible fade show" role="alert">
                 <strong>Oops!</strong> User already exists.
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
            }
            <div className="form_div p-5">
                <h1 className='text-center'>Create account</h1>
                <center>
                    <FaUserCircle className='user_icon' />
                </center>
                <form onSubmit={handleSubmit}>
                    <input
                        className='p-2 my-2'
                        type="text"
                        value={inputs.name}
                        placeholder='User Name'
                        onChange={handleChange}
                        name='name'
                    /><br />
                    <input
                        className='p-2 my-2'
                        type="email"
                        value={inputs.email}
                        placeholder='Email'
                        onChange={handleChange}
                        name='email'
                    /><br />
                    <input
                        className='p-2 my-2'
                        type="password"
                        value={inputs.password}
                        placeholder='Password'
                        onChange={handleChange}
                        name='password'
                    /><br />
                    <button type="submit" className='mt-2 py-2 px-4'>Sign Up</button>
                </form>
                <p className='mt-3'>Already have account? <button className='to_login_button' onClick={() => { history('/login') }}>Login</button></p>
            </div>
        </div>
    )
}

export default Signup;