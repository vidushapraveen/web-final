import { Routes , Route } from 'react-router-dom'

import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login';
import Signup from './pages/RegisterPage/Signup';
import Dashboard from './pages/DashboardPage/Dashboard'

import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './pages/AppointmentPage/Appointment';
import Doctors from './pages/DoctorsPage/Doctors';
import Reports from './pages/DashboardPage/components/Reports';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </div>
  )
}

export default App
