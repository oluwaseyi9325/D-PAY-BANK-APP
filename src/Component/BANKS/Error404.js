import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'

function Error404() {
  return (
    <div className='container text-center mt-5'>
    <div className='container mt-5'>
      <div className='mt-5'>
        <h1 className='err404 mt-5'>Oopps!</h1>
      </div>
      <div className='mt-3'>
        <h3 style={{color:'#2d3e50'}}><b>404 - PAGE NOT FOUND</b></h3>
      </div>
      <div className='container w-50  d-lg-block d-none mt-4 h5'>
      <p style={{color:'#2d3e50'}} >The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
      </div>
      <div className='container  d-md-block d-lg-none  mt-4 h5'>
      <p style={{color:'#2d3e50'}} >The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
      </div>
      <div className='mt-3'>
      
      <Link style={{backgroundColor:'#2d3e50',borderRadius:'30px'}}  className='btn btn-lg text-white shadow' to="/">GO TO HOMEPAGE</Link> 
    </div>
    </div> 
    </div>
  )
}

export default Error404
