import React, { useState,useEffect,useRef } from 'react'
import { Link, Route, Routes,useParams } from 'react-router-dom'
import Profile from './UserDash'
import '../Styles/home.css'
import logo from '../navlogo.png'
import UserCard from './UserCard'
import UserDash from './UserDash'
import UserNav from './UserNav'

import UserTransfer from './UserTransfer'
import UserWithdraw from './UserWithdraw'
import UserLimit from './UserLimit'
import * as uuid from 'uuid'
import { collect } from '../ADMIN PAGE/Custlist.config'
import { collection , addDoc,docs,getDocs } from 'firebase/firestore'
import { MyIds } from '../REDUX/Action'
import { useSelector,useDispatch} from 'react-redux'
function User() {
  
   


  const param=useParams()
  const logDetailsUser=param.id
  const getStore=useSelector((state=>state.email))
  const getTransferAmount=useSelector((state=>state.amtTransfer))
  const [user,setUser]=useState([])
  const dispatch=useDispatch()
  useEffect(()=>{
    getDocs(collect)
.then((snapshot)=>{
  let arr=[];
  snapshot.docs.forEach((seyiDoc)=>{
    arr.push({...seyiDoc.data(),id:seyiDoc.id})
  })
    
      setUser(arr)
    
   
}).catch(()=>console.log('this is a network error from admin'))
  },[user])

  const [details,setDetails]=useState(
    [
      {Email:"ade@gmail.com",password:"12"},
      {Email:"seyi@gmail.com",password:"2"},
      {Email:"vic@gmail.com",password:"1"},
    ]
  )
const [username,setUsername]=useState('')
const [userBalance,setUserBalance]=useState([])
const [midName,setMidname]=useState('')
const [tId,setTid]=useState('')

console.log(details)
let pp=user.filter(function (us) {
  if (us.Email==logDetailsUser) {
      return true;
  }
})
   
useEffect(()=>{
  
   setTimeout(()=>{
   
  setTid(pp[0].id)
  dispatch(MyIds(pp[0].id))
  console.log(pp[0].id)
    console.log(pp)
    setUsername(pp[0].Email)
    setUserBalance(pp[0].balanceHre)
    setMidname(pp[0].MiddleName)
   },500)
 
 },[pp])



  const bb=()=>{
    console.log(details)
    let pp=user.filter(function (us) {
      if (us.Email==logDetailsUser) {
          return true;
      }
  })
  setTid(pp[0].id)
 dispatch(MyIds(pp[0].id))
  console.log(pp[0].id)
    console.log(pp)
    setUsername(pp[0].Email)
    setUserBalance(pp[0].balanceHre)
    setMidname(pp[0].MiddleName)
  }
  
  // setTimeout(()=>{
  //      bb()
  // },2000)
   
    
   
//   const isMOunted=useRef();
// useEffect(()=>{
//   if(isMOunted.current) return;
//    setTimeout(()=>{
//     bb()
//  },1000)
//  isMOunted.current=true;
// },[isMOunted])
  
  // useEffect(() => {
   
  //   const timer = setTimeout(() => {
  //     bb()
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // useSelector(()=>{
  //   setTimeout(()=>{
  //     bb()
  //   },1000)
  // },[bb()])
  

  // let retailCompanies = user.filter(ss=> ss.Email == 'vic96@gmail.com')
  // useEffect(()=>{
  //   console.log(retailCompanies)
  // },[retailCompanies])
  

  const [getHours,setGetHours]=useState(new Date().getHours())
  const [greetings,setGreetings]=useState('')
  useEffect(()=>{
    
    if (getHours < 10) {
      setGreetings("Good morning")
    } else if (getHours < 20) {
     setGreetings('Good afternoon')
    } else {
      setGreetings("Good Evening")
    }
  },[greetings])

  const [hideShow,setHideshow]=useState('Hide')
//  const [hideCharacter,setHideCharacter]=useState('******')
const  [hideAmount,setHideAmount]=useState(0)
// const [newAmt,setNew]=useState()
useEffect(()=>{
  setHideAmount(Number((localStorage.getItem('amt')))-Number(getTransferAmount))
  // localStorage.setItem('amt',hideAmount)
},[hideAmount])
 
  const hideBtn=()=>{
     if (hideShow=="Hide") {
      // setHideAmount(hideCharacter)
      setHideAmount('*****')
       setHideshow('Show')
     }else if (hideShow=='Show') {
      setHideshow('Hide')
      // setHideAmount(50000)
     }
  }
    // const [locaAmount,setLocalAmount]=useState(localStorage.getItem('amt'))
    const [dash,setDash]=useState(true)
    const [transfer,setTransfer]=useState(false)
    const [withdraw,setWithdraw]=useState(false)
    const [limit,setLimit]=useState(false)
     const dashBtn=()=>{
         setDash(true)
         setTransfer(false)
         setWithdraw(false)
         setLimit(false)
     }
     const transferBtn=()=>{
          setTransfer(true)
          setDash(false)
          setWithdraw(false)
          setLimit(false)
     }
     const withdrawBtn=()=>{
         setWithdraw(true)
         setTransfer(false)
         setDash(false)
         setLimit(false)
     }
     const limitBtn=()=>{
       setLimit(true)
       setDash(false)
       setTransfer(false)
       setWithdraw(false)
     }
     const [balance,setBalance]=useState(300)
    //  localStorage.amt=5000;
  return (
  <React.Fragment>

  
  <div style={{backgroundColor:'whitesmoke'}} className="pb-5">
   
  <UserNav />
   <div >
   
   <div className='container '>

     <div className='container mt-5 pt-2'>
       <section className='row ' style={{position:'relative'}} data-spy="scroll" data-target=".bb" data-offset="50">
       <aside className='col-lg-4 col-md-4 col-sm-5 '>
       <div className='card'>
       <div className='card-header  profile-bg'>
       <div className='text-center text-white'>
         <h4 className='card-header'><i><small>{username}</small></i></h4>
       </div>
          <div className='text-center'>
           <img style={{borderRadius:"40px 40px 0px 40px",border:"5px dashed #2d3e50"}} width={130} src={require('../img.jpg')}/>
          </div>
       </div>
       <div className='card-body'>
   
       <div className=' d-lg-none d-md-block '>
       <div className='row  text-center p-2' style={{border:"2px solid #7a9759"}}>
       <div onClick={()=>dashBtn()} className='col-3' data-toggle="tooltip" title="Dashboard"><i className="bi bi-card-heading" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
       <div onClick={()=>transferBtn()} className='col-3' data-toggle="tooltip" title="Transfer"><i className="bi bi-arrow-left-right" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
       <div onClick={()=>withdrawBtn()} className='col-3' data-toggle="tooltip" title="Withdraw"><i className="bi bi-folder-minus" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
       <div onClick={()=>limitBtn()} className='col-3 ' data-toggle="tooltip" title="Set Limit"><i className="bi bi-align-middle" style={{color:"#7a9759",fontSize:'25px'}}></i></div>
     </div>
       </div>
         
          <div className='d-none d-lg-block d-md-none '>
          <ul className='list-group'>
          <li className='list-group-item' onClick={()=>dashBtn()} style={{fontSize:"25px",cursor:'pointer'}}><span><i className="bi bi-card-heading" style={{color:"#7a9759"}}></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</span></span></li>
          <li onClick={()=>transferBtn()} className='list-group-item' style={{fontSize:"25px",cursor:'pointer'}}><span><i className="bi bi-arrow-left-right" style={{color:"#7a9759"}} ></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Transfer</span></span></li>
          <li onClick={()=>withdrawBtn()} className='list-group-item' style={{fontSize:"25px",cursor:'pointer'}}><span><i className="bi bi-folder-minus" style={{color:"#7a9759"}}></i>&nbsp; <span>&nbsp;&nbsp;&nbsp;&nbsp;Receive</span></span></li>
          <li onClick={()=>limitBtn()} className='list-group-item' style={{fontSize:"25px",cursor:"pointer"}}><span><i className="bi bi-align-middle" style={{color:"#7a9759"}}></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Set Limit</span></span></li>
        </ul>
          </div>
         
       </div>
       <div className='card-footer text-center'>
     <div className='row'>
       <div className='col-6'> <button className='btn btn-sm text-white' style={{backgroundColor:'#7a9759'}} >Privacy</button></div>
       <div className='col-6'> <button className='btn btn-sm text-white' style={{backgroundColor:'#7a9759'}} >Settings</button></div>
     </div>
       </div>
       </div>
       </aside>
         <aside className='col-lg-8 col-md-8 col-sm-9 bb' style={{borderLeft:"5px solid #2d3e50"}}>
          
         <div className=' p-3 mb-0' style={{backgroundColor:'#7a9759',border:'5px solid white'}}>
         <h6 style={{color:"#7a9759",textAlign:"right"}}><span style={{borderRadius:'20px'}} className='bg-white p-1'><i>{greetings}, {midName} !</i></span></h6>
         <div className='row mt-3' style={{borderTop:"1px solid #cdcdcd"}}>
           <div className='col-7 text-center '>
          <div className='row mt-4'>
            <div className='col-6' onClick={()=>bb()}><h5>Balance</h5></div>
            <div className='col-6'>
            <h4 style={{color:"white"}}><span className=' pl-4 pr-4 pt-2 pb-2'>#{userBalance}</span></h4>
           
            </div>
          </div>
          
           </div>
           
           <div style={{borderLeft:"2px solid white"}} className='col-5 text-center mt-4'><button className='btn  btn-sm btn-success border border-white' onClick={()=>hideBtn()}>{hideShow}</button></div>
         </div>
         
         </div>
        
        {dash &&  <UserDash username={username}/>}
       
        {transfer && <UserTransfer tId={tId} /> }
        {withdraw && <UserWithdraw tId={tId}/>}
        {limit && <UserLimit/>}

         </aside>
       </section>
     </div>
   </div>
  </div>

  {/*<div className='mt-2 fixed-bottom   container' style={{float:'right',marginRight:'20px'}}>
      
  <div className='alert alert-width alert-success alert-dismissible '>
   
  <strong>dhdhd</strong>, You have a successful login!!!   
  <a href='#' className='close' data-dismiss='alert' aria-label='close'>  &times;</a>
  </div>
 
  </div>*/}

  <div style={{height:'200px'}}>

   
  
  </div>
   </div>
  
  </React.Fragment>
  )
}

export default User
