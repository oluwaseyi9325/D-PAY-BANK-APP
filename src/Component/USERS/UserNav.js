import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Profile from './UserDash'
import '../Styles/home.css'
import logo from '../navlogo.png'
import UserCard from './UserCard'
import UserDash from './UserDash'


function UserNav() {
  return (
   <React.Fragment>
   <nav className="navbar mb-5 shadow-lg navbar-expand-sm fixed-top navbar-dark shadow p-0" style={{backgroundColor:'whitesmoke'}} >
   <div className="container">
  
     <a  className="navbar-brand">
     <img className='logoNav' src={logo}/><span className=" bankName mt-5 animate_animated animate__heartBeat" style={{color:'#2d3e50'}}><i className='mt-3'><b style={{fontFamily:'cursive'}}>D<span style={{color:'#7A9759'}}>-PAY</span></b></i></span>
     </a>
     <button className="navbar-toggler" style={{backgroundColor:"#7a9759"}} data-toggle="collapse" data-target="#navbarCollapse">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarCollapse">
       <ul className="navbar-nav m-auto">
         
       <li className="nav-btn ml-5 text-center mt-2 mb-2" style={{marginLeft:'30px'}}><Link to="/" className="" style={{color:'#2d3e50'}}><b><button  style={{backgroundColor:'#7a9759',borderRadius:'30px'}} className='btn btn-sm text-white'>GO TO HOMEPAGE</button></b></Link></li>  
       </ul>

       <ul className="navbar-nav">
        
       <li className="nav-btn ml-5 text-center mt-2 mb-2" style={{marginLeft:'30px'}}><Link to="/Login" className="" style={{color:'#2d3e50'}}><b><button  style={{backgroundColor:'#7a9759',borderRadius:'30px'}} className='btn btn-sm text-white'>Sign Out</button></b></Link></li>
        
       </ul>
     </div>
   </div>
 </nav>
   </React.Fragment>
  )
}

export default UserNav
