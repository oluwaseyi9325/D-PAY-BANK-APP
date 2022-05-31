import React, { useState } from 'react'

function UserCard() {
    const[dash,setDash]=useState('seyi')
  return (
    <aside className='col-lg-4 col-md-4 col-sm-5 '>
    <div className='card'>
    <div className='card-header  profile-bg'>
    <div className='text-center text-white'>
      <h4>OLUWASEYI SEYI V.</h4>
    </div>
       <div className='text-center'>
        <img style={{borderRadius:"80px",border:"5px dashed white"}} width={150} src={require('../img.jpg')}/>
       </div>
    </div>
    <div className='card-body'>

    <div className=' d-lg-none d-md-block '>
    <div className='row  text-center p-2' style={{border:"2px solid #7a9759"}}>
    <div className='col-3' data-toggle="tooltip" title="Dashboard"><i classsName="bi bi-card-heading" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
    <div className='col-3' data-toggle="tooltip" title="Transfer"><i classsName="bi bi-arrow-left-right" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
    <div className='col-3' data-toggle="tooltip" title="Withdraw"><i classsName="bi bi-folder-minus" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
    <div className='col-3 ' data-toggle="tooltip" title="Set Limit"><i classsName="bi bi-align-middle" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
  </div>
    </div>
      
       <div className='d-none d-lg-block d-md-none '>
       <ul className='list-group'>
       <li className='list-group-item' style={{fontSize:"25px"}}><span><i classsName="bi bi-card-heading" style={{color:"#7a9759"}}></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</span></span></li>
       <li className='list-group-item' style={{fontSize:"25px"}}><span><i classsName="bi bi-arrow-left-right" style={{color:"#7a9759"}} ></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Transfer</span></span></li>
       <li className='list-group-item' style={{fontSize:"25px"}}><span><i classsName="bi bi-folder-minus" style={{color:"#7a9759"}}></i>&nbsp; <span>&nbsp;&nbsp;&nbsp;&nbsp;Withdraw</span></span></li>
       <li className='list-group-item' style={{fontSize:"25px"}}><span><i classsName="bi bi-align-middle" style={{color:"#7a9759"}}></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Set Limit</span></span></li>
     </ul>
       </div>
      
    </div>
    <div className='card-footer text-center'>
  <div className='row'>
    <div className='col-6'> <button className='btn btn-sm text-white' style={{backgroundColor:'#7a9759',borderRadius:'30px'}} >Privacy</button></div>
    <div className='col-6'> <button className='btn btn-sm text-white' style={{backgroundColor:'#7a9759',borderRadius:'30px'}} >Settings</button></div>
  </div>
    </div>
    </div>
    </aside>
  )
}

export default UserCard
