import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addcustomers from './Component/ADMIN PAGE/Addcustomers'
import AddStaff from './Component/ADMIN PAGE/AddStaff'
import AdminNav from './Component/ADMIN PAGE/AdminNav'
import Dashboard from './Component/ADMIN PAGE/Dashboard'
import Contact from './Component/BANKS/Contact'
import Error404 from './Component/BANKS/Error404'
import Facebook from './Component/BANKS/Facebook'
import Home from './Component/BANKS/Home'
import Login from './Component/BANKS/Login'
import SignUp from './Component/BANKS/SignUp'
import Profile from './Component/USERS/UserDash'
import User from './Component/USERS/User'

function App() {
  return (
    <div>
     

     <Routes>
     <Route path='*' element={<Error404/>} />
     <Route path='/dash' element={<Dashboard />} />
      <Route path='/admincustomers' element={<Addcustomers />} />
      <Route path='/adminStaff' element={<AddStaff />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
     <Route path='/Login' element={<Login/>} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/user/:id' element={<User/>} />
    
    <Route path='/Face' element={<Facebook/>} />
     </Routes>
    </div>
  )
}

export default App
