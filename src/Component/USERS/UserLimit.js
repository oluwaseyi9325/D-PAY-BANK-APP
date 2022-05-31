import React from 'react'

function UserLimit() {
  return (
    <React.Fragment>
   <div className='p-3 '>
   <li className='list-group-item' style={{fontSize:"25px"}}><span><i classsName="bi  bi-align-middle" style={{color:"#7a9759"}}></i> <span>&nbsp;&nbsp;&nbsp;&nbsp;Set Lmit</span></span></li>
   </div>
   <div>
     <div className='card'>
      <div className='card-header h6'>Limit spend:-</div>
      <div className='card-body'>
        <p>NOTE: The limit hours for now is 12hours or below, We are working to increase the Limit hours ! Thanks </p>

        <p>
          <h6>Procedures:- </h6>
        </p>
        
         <div>
          
         <div className='row'>
              
         <div className='col-lg-6 col-md-7'>
         <label htmlFor="password">Limit Amount:-</label>
         <input type="number"  className="form-control text-center" />
         </div>
    
         <div className='col-lg-3 col-md-7'>
         <label htmlFor="password"><small>Time to limit:-</small></label>
         <input disabled placeholder='For validation' type="text" className="form-control text-center" />
         </div>
    
         <div className='col-lg-3 col-md-7'>
         <label htmlFor="password">Date of Limit:-</label>
         <input    disabled placeholder='Features not available' type="text" name="occupation"  className="form-control text-center" />
         </div>
    
    
         </div>
         
         <div className='mt-3' style={{textAlign:'right'}}>
         <button className='btn btn-sm btn-success'>Validate Limit</button>
       </div>

         </div>


      </div>
     </div>
   </div>
   </React.Fragment>
  )
}

export default UserLimit
