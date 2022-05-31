import React, { useState,useEffect,useRef } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Profile from './UserDash'
import '../Styles/home.css'
import logo from '../navlogo.png'
import UserCard from './UserCard'
import { collection , addDoc,docs,getDocs,updateDoc,doc } from 'firebase/firestore'
import { IdDetails,collect } from '../ADMIN PAGE/Custlist.config'

import { PDFExport,savePDF } from '@progress/kendo-react-pdf'


function UserDash() {
const pdfExportComponent=useRef(null)
  const pdfPrint=()=>{
         pdfExportComponent.current.save()
  }

  const [transferHistory,setTransferHistory]=useState([])
   const [filterHistory,setFilterHistorty]=useState([
    
   ])
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
  const param=useParams()
  const logDetailsUser=param.id
  let pp=transferHistory.filter(function (us) {
    if (us.regEmail==logDetailsUser) {
        return true;
    }
  })
  useEffect(()=>{
    
    console.log(transferHistory)
    setFilterHistorty(pp)
      console.log(filterHistory)  
  },[pp])

  const checkId=()=>{
    let pp=transferHistory.filter(function (us) {
      if (us.regEmail==logDetailsUser) {
          return true;
      }
    })
    console.log(transferHistory)
    setFilterHistorty(pp)
      console.log(filterHistory)  
  }

  const [arrIndex,setArrindex]=useState(0)

  return (
    <div className="">
    <React.Fragment >
    <div className='p-3 '>
    <li className='list-group-item' style={{fontSize:"25px"}}><span><i className="bi bi-card-heading" style={{color:"#7a9759"}}></i> <span onClick={()=>checkId()}>&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</span></span></li>
    </div>
    <div className='card '>
    <div className='card-header h6'>Transaction History  <small style={{fontSize:'13px'}}><i>(click on the table index to view each Transaction details.)</i></small></div>
    <div className='card-body'>
       <table className='table table-md table-striped table-responsive'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th>TIME</th>
           
          </tr>
        </thead>
        <tbody>
          {filterHistory.map((hist,i)=>

           <React.Fragment>
           <tr key={i} onClick={()=>setArrindex(i)} data-toggle="modal" data-target="#exampleModalCenter">
           <td>{i+1}</td>
           <td>{hist.transferAmount}</td>
           <td>12/04/2022</td>
           <td>12:30 Pm</td>
          </tr>



          <div  className="modal fade animate__animated animate__backInDown " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
       <PDFExport ref={pdfExportComponent} paperSize='A4'>
       <div className="modal-dialog modal-dialog-centered" role="document">
  
         <div className="modal-content">
           <div className="modal-header pb-2 pt-3" style={{backgroundColor:'whitesmoke'}}>
             <h5 className="modal-title" id="exampleModalLongTitle"> <img src={require('../navlogo.png')} style={{width:'40px'}} /> <span className=" bankName mt-5 animate_animated animate__heartBeat" style={{color:'#2d3e50'}}><i className='mt-3'><b style={{fontFamily:'cursive'}}>D<span style={{color:'#7A9759'}}>-PAY</span></b></i></span></h5>
             <button type="button" className="close btn btn-warning btn-sm" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div className="modal-body">
             
      
              <h5 className='text-muted'>Transaction NO {arrIndex+1}</h5>
              <table className='table table-bordered '>
                <tbody>
                <tr>
                <td style={{fontWeight:'bolder'}}>Account Name </td>
                <td className='text-center'>Adedokun seyi A</td>
              </tr>
                  <tr>
                    <td style={{fontWeight:'bolder'}}>Account Mail </td>
                    <td className='text-center'> {filterHistory[arrIndex].regEmail}</td>
                  </tr>
                  <tr>
                  <td style={{fontWeight:'bolder'}}>Transaction ID</td>
                  <td className='text-center'>{filterHistory[arrIndex].transactionId}</td>
                </tr>
                <tr>
                <td style={{fontWeight:'bolder'}}>Transfer When</td>
                <td className='text-center'>12/03/2022 (20:30pm)</td>
              </tr>
              <tr>
              <td style={{fontWeight:'bolder'}}>Amount</td>
              <td className='text-center'>#{filterHistory[arrIndex].transferAmount}</td>
            </tr> <tr>
            <td style={{fontWeight:'bolder'}}>Status</td>
            <td className='text-center'>Not used</td>
          </tr>
          <tr>
          <td style={{fontWeight:'bolder'}}>User by</td>
          <td className='text-center'>96@gmail.com</td>
        </tr>
  
                </tbody>
              </table>
            
               <div >
                  <div className='text-muted'><small>This Device generated receipt no signature required.
                    <br />
                    Electronics receipt owns no legal effect, You may go to branch to get the paper receipt. <span className='h5'>D-PAY TEAM</span>
                  </small>  <img style={{width:"200px",height:'50px'}} src={require('../signature.png')} /> </div>
                 
               </div>
           </div>
           <div className="modal-footer p-2">
         {/* <button type="button" onClick={()=>pdfPrint()} className="btn btn-secondary" >Close</button>*/}
             <button type="button" onClick={()=>pdfPrint()} className="btn btn-success btn-sm">Download Receipt</button>
           </div>
         </div>
       </div>
       </PDFExport>
     </div>

           
           
           </React.Fragment>


            )}
         
         
          <tr>
           <td>3</td>
           <td>#40,300</td>
           <td>12/04/2022</td>
           <td>12:30 Pm</td>
           
          </tr>
        </tbody>


       </table>


      
    
    


       <nav style={{float:'right'}} aria-label="Page navigation example text-danger">
       <ul className="pagination ">
         <li className="page-item"><a className="page-link" style={{color:"#7a9759"}} href="#">Previous</a></li>
         <li className="page-item"><a style={{color:"#7a9759"}} className="page-link" href="#">1</a></li>
         <li className="page-item"><a style={{color:"#7a9759"}} className="page-link" href="#">2</a></li>
         <li className="page-item"><a style={{color:"#7a9759"}} className="page-link" href="#">3</a></li>
         <li className="page-item"><a style={{color:"#7a9759"}} className="page-link" href="#">4</a></li>
         <li className="page-item"><a style={{color:"#7a9759"}} className="page-link" href="#">5</a></li>
         <li className="page-item"><a style={{color:"#7a9759"}} className="page-link" href="#">6</a></li>
         <li className="page-item"><a style={{color:"#7a9759"}} className="page-link" href="#">Next</a></li>
       </ul>
     </nav>
     <div style={{clear:'both'}}></div>
    </div>
    <div style={{textAlign:'right'}} className='card-footer'><button className='btn btn-warning'>Clear History</button></div>
 </div>
    </React.Fragment>
    </div>
  )
}

export default UserDash
