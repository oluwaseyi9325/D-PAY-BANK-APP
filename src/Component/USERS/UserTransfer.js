import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import * as uuid from 'uuid'
import { IdDetails,collect } from '../ADMIN PAGE/Custlist.config'
import { collection , addDoc,docs,getDocs,updateDoc,doc } from 'firebase/firestore'
import { useSelector,useDispatch} from 'react-redux'
import { Myamt } from '../REDUX/Action'
import { Link, Route, Routes,useParams } from 'react-router-dom'
function UserTransfer({tId}) {
  
  const param=useParams()
  const logDetailsUser=param.id
  const [uudd,setUudd]=useState('')
  useEffect(()=>{
    console.log(uudd)
    setUudd(tId)
  },[uudd])
  
 const [regEmail,setRegEmail]=useState(logDetailsUser)
 const [filterEmail,setFilterEmail]=useState('')
  const getIds=useSelector((state=>state.idsTransfer))
  const [transIds,setTransIds]=useState(0)
  useEffect(()=>{
   setTransIds(getIds)
  },[getIds])
  const dispatch =useDispatch()
  const [transactionId,setTransactionId]=useState('')
  const [transferAmount,setTransferAmount]=useState()
  const [transactionDetails,setTransactionDetails]=useState([])
  const getStore=useSelector((state=>state.email))

  
  const [user,setUser]=useState([])
  const [username,setUsername]=useState('')
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
  const geneerateId=()=>{
  if (transferAmount) {
    setTransactionId(`${uuid.v4()}`)
  }else{
    alert('pls enter amount to zip')
  }
  let pp=user.filter(function (us) {
    if (us.Email==regEmail) {
        return true;
    }
})

console.log(pp[0].balanceHre)
setFilterEmail(pp[0].balanceHre)
  }

  
 


  const validateSend=()=>{
   
  
   const docRef=doc(collect,uudd)
   updateDoc(docRef,{
     "balanceHre":filterEmail-transferAmount
   })
    dispatch(Myamt(transferAmount))
    if (transferAmount&&transactionId&&uudd) {
      let transferObject={transactionId,transferAmount,getStore,uudd}
    setTransactionDetails([...transactionDetails,transferObject])
    setTransferAmount('')
    setTransactionId('')
    console.log(transactionDetails)
     
    addDoc(IdDetails,{
        
      transactionId:transactionId,
      transferAmount:transferAmount,
      uudd:uudd,
      regEmail:regEmail
    
    

     })
     .then(()=>{swal('D-PAY', 'Transaction Successfu','success')})
 .catch((err)=>{console.log(err.message)})
     
    }else{
      swal('D-PAY','Dear customer ! Please fill the field to proceed with your transaction', 'info')
    }

  }

 
  const clipCopy=()=>{
    
    navigator.clipboard.writeText(transactionId) 
  }

  
  return (
   <React.Fragment>
   <div className='p-3 '>
   <li className='list-group-item' style={{fontSize:"25px"}}><span><i classsName="bi bi-arrow-left-right" style={{color:"#7a9759"}}></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Transfer</span></span></li>
   </div>
   <div>
     <div className='card animate__animated animate__zoomIn'>
     <div className='card-header h6'>Transfer</div>
         <div className='card-body'>
             <div>

             <div className='row text-center'>
              
             <div className='col-lg-3 col-md-7 mt-2'>
             <label htmlFor="password">Amount to Transfer:</label>
             <input type="number" value={transferAmount} onChange={(e)=>setTransferAmount(e.target.value)}  className="form-control text-center" />
             </div>

             <div className='col-lg-4 col-md-7 mt-2'>
             <label htmlFor="password">Registered Email</label>
             <input disabled placeholder='Enter Email address' type="Email" value={regEmail} onChange={(e)=>setRegEmail(e.target.value)}  className="form-control text-center" />
             </div>

             <div className='col-lg-5 col-md-7 mt-2'>
             <label htmlFor="password">Zip Transfer with pin (????):-</label>
             <input value={uudd} onChange={(e)=>setUudd(e.target.value)} disabled placeholder='Features not available'  name="occupation"  className="form-control text-center" />
             </div>


             </div>

             <div className='mt-2' style={{textAlign:'right'}}>
         <button className='btn btn-sm btn-success' onClick={()=>geneerateId()}>Click to Generate Transaction ID</button>
       </div>

           
            
             <div className=''>
             <label htmlFor="password">Transaction ID:-</label>
            <div className='input-group'>
            <input disabled placeholder='Id loading ....' value={transactionId} type="text"   className="form-control text-center" />
            <div className="input-group-prepend">
               <span style={{cursor:"pointer"}} onClick={()=>clipCopy()} className='input-group-text' title='copied'>Copy</span>
            </div>
            </div>
             </div>


               
             </div>
         </div>
         <div className='card-footer'>
         <div className='mt-0' style={{textAlign:'right'}}>
         <button onClick={()=>validateSend()} className='btn btn-md btn-success'>Validate</button>
       </div>
         </div>
     </div>
   </div>
   </React.Fragment>
  )
}

export default UserTransfer;
