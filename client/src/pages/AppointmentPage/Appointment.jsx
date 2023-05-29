import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true

import '../AppointmentPage/Appointment.css'
import DoctorList from '../AppointmentPage/components/DoctorList'

import logo from '../../assets/images/logo-1.png'


function Appointment() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [nic, setNic] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [telephone, setTelephone] = useState('');
    const [doctor, setDoctor] = useState('');
    const [doctorCategory, setDoctorCategory] = useState('');
    const [doctorList, setDoctorList] = useState([]);
    const [appID, setAppId] = useState('')

    const navigate = useNavigate()

    const createAppointmentUrl = "http://localhost:5400/api/v1/channel";
    const findDoctorsUrl = "http://localhost:5400/api/d1/getDoctors/" + doctorCategory;
    const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + appID;


    const createAppointmentFunction = async (event) => {
        event.preventDefault()
        try {
            const submitData = {
                userName: name,
                age: age,
                nic: nic,
                address: address,
                date: date,
                telephone: telephone,
                doctor: doctor
            }
            const response = await axios.post(createAppointmentUrl, submitData, { withCredentials: true });
            setAppId(response.data.message._id)
            console.log(response.data.message._id)
        } catch (error) {
            console.log(error)
        }
    }

    const findDoctorFunction = async () => {
        try {
            const res = await axios.get(findDoctorsUrl)
            console.log(res)
            setDoctorList(res.data.doctor)
            console.log(res.data.doctor)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        findDoctorFunction();
    }, [doctorCategory])


    return (
        <div className='Appointment_Page'>
            <center>
                <div className="form_header_div">
                    <img src={logo} alt="logo" />
                    <h5 className=''>Life Waws - Health Care Center</h5>
                    <p className='mb-3'>Online Appointment form</p>
                </div>
            </center>
            <button className='py-2 px-3 ml-4' onClick={() => { navigate('/dashboard') }}>Home</button>
            {appID && <div class="alert alert-primary" role="alert">
                Your<a href={url} class="alert-link" download>QR is here</a>. Click.
            </div>}
            <p className='m-4'><span className='text-danger'>*</span> Please fill correct data . We secured all your privet data</p>
            <div className="form_div mx-3 p-3">
                <form onSubmit={createAppointmentFunction}>
                    <input
                        className='input_field py-2 px-3 mb-3'
                        type="text"
                        name='name'
                        placeholder='Patient Name'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    /> <br />
                    <input
                        className='input_field py-2 px-3 mb-3'
                        type="text"
                        name='age'
                        value={age}
                        placeholder='Age'
                        onChange={(e) => {
                            setAge(e.target.value)
                        }}
                    /> <br />
                    <input
                        className='input_field py-2 px-3 mb-3'
                        type="text"
                        name='nic'
                        placeholder='NIC'
                        value={nic}
                        onChange={(e) => {
                            setNic(e.target.value)
                        }}
                    /> <br />
                    <input
                        className='input_field py-2 px-3 mb-3'
                        type="text"
                        name='address'
                        placeholder='Address'
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                    /> <br />
                    <label>Category</label>
                    {/* <div> */}
                    <select value={doctorCategory} className='mx-3' onChange={(e) => {
                        setDoctorCategory(e.target.value)
                        console.log(e.target.value)
                    }}>
                        <option value="Body">Body</option>
                        <option value="Heart">Heart</option>
                        <option value="Head">Head</option>
                    </select>
                    <label>Doctor</label>
                    <select value={doctor} className='mx-3' onChange={(e) => setDoctor(e.target.value)}>
                        {doctorList && doctorList.map((element) => (
                            <DoctorList doctorNames={element.name} />
                        ))}
                    </select><br />
                    <label htmlFor="">Appointment time</label>
                    <input
                        className='my-3 mx-3'
                        type="datetime-local"
                        name='date'
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value)
                        }}
                    /> <br />
                    <input
                        className='input_field py-2 px-3 mb-3'
                        type="text"
                        name='telephone'
                        value={telephone}
                        placeholder='Contact No'
                        onChange={(e) => {
                            setTelephone(e.target.value)
                        }}
                    /> <br />
                    <button type="submit" className='py-2 px-3'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Appointment