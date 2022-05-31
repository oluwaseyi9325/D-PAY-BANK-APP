import React, {useState,useEffect} from 'react'
import { collection , addDoc,docs,getDocs,updateDoc,doc } from 'firebase/firestore'
import { IdDetails,collect } from '../ADMIN PAGE/Custlist.config'
import swal from 'sweetalert'
function UserWithdraw({tId}) {
  const [uudd,setUudd]=useState('')
  useEffect(()=>{
    console.log(uudd)
    setUudd(tId)
  },[uudd])
  const [transId,setTransactionId]=useState('')
  const [amount,setAmount]=useState(0)
  const [transferPin,setTransferPin]=useState(0)
  const [getSender,setGetSender]=useState('')
  const [sumBalance,setSumBalance]=useState(0)
  const [receiverEmail,setReceiverEmail]=useState('')
  const [details,setDetails]=useState(
    [
      {Email:"ade@gmail.com",password:"12"},
      {Email:"seyi@gmail.com",password:"2"},
      {Email:"vic@gmail.com",password:"1"},
    ]
  )
  
   const [transferHistory,setTransferHistory]=useState([])
   
   useEffect(()=>{
    getDocs(IdDetails)
.then((snapshot)=>{
  let arr=[];
  snapshot.docs.forEach((seyiDoc)=>{
    arr.push({...seyiDoc.data(),id:seyiDoc.id})
  })
     setTransferHistory(arr)
   
}).catch(()=>console.log('this is a network error from admin'))
  },[transferHistory])

  


  const [user,setUser]=useState([])
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

  const checkId=()=>{
    let pp=transferHistory.filter(function (us) {
      if (us.transactionId==transId) {
          return true;
      }
  })
 setAmount(pp[0].transferAmount)
 setTransferPin(pp[0].uudd)
 setGetSender(pp[0].regEmail)

 let flt=user.filter(function (us) {
  if (us.Email==getSender) {
      return true;
  }
})

console.log(Number(flt[0].balanceHre))
setSumBalance(Number(flt[0].balanceHre))
  
  }

  


  const receiveBtn=()=>{
   if(amount){
    const docRef=doc(collect,uudd)
    updateDoc(docRef,{
      "balanceHre": Number(sumBalance)+Number(amount)
    }).then(()=>swal(`${getSender}`, `#${amount} added to your D-pay Wallet !!!`, 'success'))
   }
   setAmount('')
  }

  return (
    <React.Fragment>
   <div className='p-3 '>
   <li className='list-group-item' style={{fontSize:"25px"}}><span><i classsName="bi bi-folder-minus" style={{color:"#7a9759"}}></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Receive</span></span></li>
   </div>
   <div>
     <div className='card'>
     <div className='card-header h6'>Receive money:</div>
     <div className='card-body'>
     <div className='row'>
              
     <div className='col-lg-6 col-md-7'>
     <label htmlFor="password">Enter Transaction-ID:</label>
     <input type="text" value={transId} onChange={(e)=>setTransactionId(e.target.value)} className="form-control text-center" />
     </div>

     <div className='col-lg-3 col-md-7'>
     <label htmlFor="password"><small>Ref:</small></label>
     <input disabled placeholder='For validation' type="text" value={uudd} onChange={(e)=>setUudd(e.target.value)} className="form-control text-center" />
     </div>

     <div className='col-lg-3 col-md-7'>
     <label htmlFor="password">Transfer Pin:-</label>
     <input  value={transferPin} onChange={(e)=>setTransferPin(e.target.value)}  disabled placeholder='Features not available' type="text" name="occupation"  className="form-control text-center" />
     </div>


     </div>

     <div className='mt-3' style={{textAlign:'right'}}>
         <button className='btn btn-sm btn-success' onClick={()=>checkId()}>Check ID</button>
       </div>

       <hr />

       <div className=''>
             <label htmlFor="password">Amount In the Transaction-ID</label>
            <div className='input-group'>
            <input disabled value={amount} onChange={(e)=>setAmount(e.target.value)} type="text"   className="form-control text-center" />

            <div onClick={()=>receiveBtn()} className="input-group-prepend ">
               <span  style={{cursor:"pointer"}}  className='input-group-text bg-success text-white' title='copied'>Add Money</span>
            </div>
            </div>
             </div>

     </div>
     </div>
   </div>
   </React.Fragment>
  )
}

export default UserWithdraw
