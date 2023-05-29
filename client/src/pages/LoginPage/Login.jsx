import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../LoginPage/Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const loginUrl = "http://localhost:5400/api/account/login";

    const loginFunction = async (event) => {
        event.preventDefault()
        try {
            const submitData = {
                email: email,
                password: password
            }
            const res = await axios.post(loginUrl, submitData)
            console.log(res)
            if (res.status == 200) {
                navigate('/dashboard')
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className='Login_Page'>
            {error && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Oops!</strong> Wrong username or password.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
            <div className="form_div p-5">
                <h1 className='text-center'>Welcome</h1>
                <form onSubmit={loginFunction}>
                    <input
                        className='p-2 my-2'
                        type="email"
                        value={email}
                        placeholder='Email'
                        name='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    <input
                        className='p-2 my-2'
                        type="password"
                        value={password}
                        placeholder='Password'
                        name='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    <button type="submit" className='mt-2 py-2 px-4'>Log In</button>
                </form>
                <p className='mt-3'>Not registered yet? <button className='to_register_button' onClick={() => { navigate('/register') }}>Register</button></p>
            </div>
        </div>
    )
}

export default Login