import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../Styles/home.css'
function NavBank() {
  const nav=useNavigate()
  let activeStyle={
    textDecoration:"underline"
  }
  return (
    <div>
      
    <nav className=''>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-inverse shadow animate__animated animate__fadeInDown " style={{backgroundColor:'whitesmoke'}}  data-spy="affix" data-offset-top="197" >
             <div className='container pt-1 pb-1'>
             <div className='' style={{marginLeft:'60px !important'}}>
             <img src={require('../navlogo.png')}  alt="" className='logoNav' />
                 <span className=" bankName mt-5 animate_animated animate__heartBeat" style={{color:'#2d3e50'}}><i className='mt-3'><b style={{fontFamily:'cursive'}}>D<span style={{color:'#7A9759'}}>-PAY</span></b></i></span>
             </div>
             <button className="navbar-toggler" style={{backgroundColor:'#7a9759'}} data-toggle="collapse" data-target="#chatnav">
                 <span className="navbar-toggler-icon" ></span>
             </button>
          <div className="collapse navbar-collapse" id="chatnav" >
              <ul className="navbar-nav m-auto text-center" >
                  <li className="nav-item ml-5 listMargin"  ><Link to="/" className="nav-link" style={{color:'#2d3e50'}}><b>Home</b></Link></li>
                  <li className="nav-item text-center" onClick={()=>nav('/#reviewcomment')} style={{marginLeft:'30px'}} ><a href="#reviewcomment" className="nav-link" style={{color:'#2d3e50'}}><b>Reviews</b></a></li>
                  <li className="nav-btn ml-5 text-center" style={{marginLeft:'30px'}}>
                
                  <Link to="/contact"  className="nav-link" style={{color:'#2d3e50'}}><b>Contact</b></Link></li>
                 
                  
                  
                  <li className="nav-btn ml-5 text-center" style={{marginLeft:'30px'}}><a href="#fags" onClick={()=>nav('/#fags')} title="Please kindly contact our help center" style={{color:'#2d3e50'}} className="nav-link">
                    <b>Fags</b>
                  </a></li>
                  
                 

                  <li className="nav-btn ml-5 text-center" style={{marginLeft:'30px'}}><Link to='/Login' className="nav-link" style={{color:'#2d3e50'}}><b><button style={{backgroundColor:'#7a9759'}} className='btn btn-sm text-white'>Sign In</button></b></Link></li>
                  
                  <li className="nav-btn ml-5 text-center" style={{marginLeft:'30px'}}><Link to='/user/seyi' className="nav-link" style={{color:'#2d3e50'}}><b><button style={{backgroundColor:'#2d3e50'}} className='btn btn-sm text-white'>Sign Up</button></b></Link></li>
                  
              </ul>
          </div>   
             </div>
         </nav>
    </nav>
    </div>
  )
}

export default NavBank
