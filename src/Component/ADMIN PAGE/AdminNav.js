import React from 'react'
import { Link } from 'react-router-dom'
import '../ADMIN PAGE/Dash.css'
import logo from '../navlogo.png'

function AdminNav() {
  return (
    <div className='ad'>
    
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark  p-0" style={{backgroundColor:"#2D3E50"}}>
    <div className="container">
   
      <a  className="navbar-brand">
      <img style={{width:'40%'}} src={logo}/><span style={{fontFamily:'monospace'}}><i>EASY-BANK</i></span>
      </a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav m-auto">
          <li className="nav-item px-2">
          <Link className="nav-link" to='/dash'>Dashboard</Link>
          </li>
          <li className="nav-item px-2">
           
            <Link className="nav-link" to='/admincustomers'>Customers</Link>
          </li>
          <li className="nav-item px-2">
          <Link className="nav-link" to='/adminStaff'>Staff</Link>
          </li>
          <li className="nav-item px-2">
            <a href="users.html" className="nav-link">Manage-Bank</a>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item dropdown mr-3">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fas fa-user"></i> Welcome Brad
            </a>
            <div className="dropdown-menu">
              <a href="profile.html" className="dropdown-item">
                <i className="fas fa-user-circle"></i> Profile
              </a>
              <a href="settings.html" className="dropdown-item">
                <i className="fas fa-cog"></i> Settings
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="login.html" className="nav-link">
              <i className="fas fa-user-times"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 

    
  
    

    </div>
  )
}

export default AdminNav
