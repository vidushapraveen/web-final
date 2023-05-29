import React from 'react'
import { useState, useEffect } from 'react';
import '../DashboardPage/Dashboard.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AppointmentList from '../DashboardPage/components/AppointmentList'
import OpenHours from './components/OpenHours';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
axios.defaults.withCredentials = true


function Dashboard() {
    const [appointmentCount, setAppointmentCount] = useState('');
    const [myappointmentList, setMyAppointmentList] = useState([]);
    const [loggedUser, setLoggedUser] = useState('');

    const navigate = useNavigate()

    const getAppointmentUrl = 'http://localhost:5400/api/v1/myappointments'
    const getUserUrl = 'http://localhost:5400/api/account/user';


    useEffect(() => {
        const getAppointments = async () => {
            try {
                const result = await axios.get(getAppointmentUrl, { withCredentials: true })
                const arrLength = await result.data.user.length;
                setMyAppointmentList(result.data.user)
                setAppointmentCount(arrLength)
            } catch (error) {
                console.log(error)
            }
        }
        getAppointments()
    }, []
    )

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axios.get(getUserUrl, { withCredentials: true })
                setLoggedUser(result.data.user.name)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, []
    )

    return (
        <div>
            <div className="DashboardPage">
                <Profile user={loggedUser} />
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <OpenHours />
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="reports-bg-div ">
                                <div className="layer3 p-3">
                                    <h4 className='text-white'>Appointments</h4>
                                    <p>{appointmentCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="appointment_list mt-5 container-fluid">
                    <p className='text-center'>My Appointments</p>
                    <div className='appointment_head mt-3'>
                        <div className="row">
                            <div className="col-3">
                                <p className='text-center pt-2'>Doctor</p>
                            </div>
                            <div className="col-3">
                                <p className='text-center pt-2'>Id</p>
                            </div>
                            <div className="col-3">
                                <p className='text-center pt-2'>Date & Time</p>
                            </div>
                            <div className="col-3">
                                <p className='text-center pt-2'>NIC</p>
                            </div>
                        </div>
                    </div>
                    {myappointmentList && myappointmentList.map((element) => (
                        <AppointmentList
                            doctorName={element.doctor}
                            time={element.date}
                            appId={element._id}
                            idc={element.nic}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard