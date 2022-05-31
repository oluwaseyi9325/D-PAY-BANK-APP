import React, { useRef, useState,useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import '../Styles/home.css'
import { collect } from '../ADMIN PAGE/Custlist.config'
import { collection , addDoc,docs,getDocs } from 'firebase/firestore'
import { useSelector,useDispatch} from 'react-redux'
import { Myactions } from '../REDUX/Action'
import swal from 'sweetalert';
import User from '../USERS/User'
function Login() {
 
  


  const getStore=useSelector((state=>state.email)) 
 
  const nav =useNavigate()
 const [hideShow,setHideshow]=useState('Show')
 const [hideInput,setHideINput]=useState('password')
  const hideShowBtn=()=>{
     if (hideShow=="Hide") {
       setHideshow('Show')
       setHideINput('password')
     }else if (hideShow=='Show') {
       setHideshow('Hide')
       setHideINput('text')

     }
  }

  const [user,setUser]=useState('')
  
  useEffect(()=>{
    console.log(getStore)
  },[getStore])

  useEffect(()=>{
    
    getDocs(collect)
.then((snapshot)=>{
  let arr=[];
  snapshot.docs.forEach((seyiDoc)=>{
    arr.push({...seyiDoc.data(),id:seyiDoc.id})
  })
    
    setUser(arr)
}).catch(()=>swal('D-PAY TEAM', 'NETWORK ERROR FROM THE ADMIN','info'))
  },[user])

  const [logEmail,setLogEmail]=useState('')
  const [logPassword,setLogPassword]=useState('')
  const [details,setDetails]=useState(
    [
      {Email:"ade@gmail.com",password:"12"},
      {Email:"seyi@gmail.com",password:"2"},
      {Email:"vic@gmail.com",password:"1"},
    ]
  )
  const dispatch=useDispatch()
  // const [paramUsername,setParam]=useState(logEmail)
  const loginUser=()=>{
    dispatch(Myactions(logEmail))
    console.log(getStore)
    console.log(details)
    console.log(user)
    let currentUser = user.filter( us=> us.Email == logEmail && us.password == logPassword)
    currentUser.length ? nav(`/user/${logEmail}`) :swal('DEAR CUSTOMER', 'Login details incorrect !!! Try again','warning')
   
  }
  return (
  <React.Fragment>

  
  <div className='loginForm'>
  <section id="login mt-5 bg-info">
  <aside className='container-lg'>
  <div className="container mt-5">
  <div className="row">
    <div className="col-md-6 mx-auto">
      <div className="card shadow-lg ">
       
       
        <div className="card-body p-5 container">
        <h2>
        <img src={require('../navlogo.png')} width={40}/> <span style={{fontFamily:'cursive'}}><small>D-<span style={{color:'#7a9759'}}>PAY</span></small></span></h2>
          <div  className=''>
            <div className="form-group mt-4">
              <label htmlFor="email">Your Email<sup className='text-danger'>*</sup></label>
              <input type="text" className="form-control" value={logEmail} onChange={(e)=>setLogEmail(e.target.value)} />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password<sup className='text-danger'>*</sup></label>
              <div className='input-group'>
              <input value={logPassword} onChange={(e)=>setLogPassword(e.target.value)} type={hideInput} className="form-control" />
              <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1" style={{cursor:'pointer'}}  onClick={()=>hideShowBtn()}>{hideShow}</span>
              </div>
              </div>
            </div>
            <div className='mt-4' style={{color:"#7a9759"}}>Forgot your password?</div>
            <button onClick={()=>loginUser()} className='btn  form-control  text-white' style={{backgroundColor:"#7a9759",fontSize:"20px"}}><i className="bi bi-box-arrow-in-right mr-3"></i>   Sign In</button>
          </div>
        </div>
       <div className=' text-center p-3' style={{backgroundColor:"whitesmoke"}}>
         <span style={{color:"#2d3e50"}}> New to D-PAY?</span> <span ><Link to='/SignUp'  style={{color:"#7a9759"}}>Create your free account now!</Link></span>
       </div>
      </div>
     
    </div>
   
  </div>
 
</div>


  </aside>
  
</section>


<div className='fixed-bottom' style={{textAlign:"right",marginRight:'20px',marginBottom:'20px',color:'#7a9759'}}>
<h3><i className="bi bi-question-circle"></i> Fags</h3>
</div>

 
   
  </div>
  </React.Fragment>
  )
}

export default Login
