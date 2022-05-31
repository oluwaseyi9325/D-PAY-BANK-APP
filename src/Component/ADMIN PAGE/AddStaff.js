import React from 'react'

function AddStaff() {
  return (
    <div>
    <header id="main-header" class="py-0 shadow  text-white mt-5" style={{backgroundColor:"#7A9759"}}>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>
          <i class="bi bi-person-circle"></i> MANAGING STAFFS</h1>
        </div>
      </div>
    </div>
  </header>


  <div className='container mt-4 col-6'>
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Name / Email / Account-Number" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span class="input-group-text" id="basic-addon2">Search Staff</span>
</div>
</div>
  <div className='container mt-4 table-responsive-sm'>
   <table className='table table-bordered table-sm table-striped table-hover'>
    <thead className='text-center' style={{backgroundColor:"#2D3E50",color:'#7A9759'}} >
      <tr>
       <th>S/N</th>
       <th>FULL NAME</th>
       <th>EMAIL ADDRESS</th>
       <th>PASSWORD</th>
       <th className='text-center'><small>PICTURE</small></th>
       <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody className='text-center' style={{color:'#2D3E50',backgroundColor:'whitesmoke'}}>
     <tr>
      <td>1</td>
      <td>ADEDOKUN</td>
      <td>adedokunseyi96@gmail.com</td>
      <td>ahsdsjha232</td>
      <td className='text-center'><i class="bi bi-person-bounding-box"></i></td>
      <td>
     <ul style={{listStyleType:'none'}}>
      <li><button className='btn btn-primary btn-sm'>Edit</button></li>
      <li><button className='btn btn-danger btn-sm'>DELETE</button></li>
     </ul>
      </td>
     </tr>
     <tr>
      <td>1</td>
      <td>ADEDOKUN</td>
      <td>adedokunseyi96@gmail.com</td>
      <td>ahsdsjha232</td>
      <td><i class="bi bi-person-bounding-box"></i></td>
      <td>
     <ul style={{listStyleType:'none'}}>
      <li><button className='btn btn-info btn-sm'>Edit</button></li>
      <li><button className='btn btn-info btn-sm'>DELETE</button></li>
     </ul>
      </td>
     </tr>
     <tr>
      <td>1</td>
      <td>ADEDOKUN</td>
      <td>adedokunseyi96@gmail.com</td>
      <td>ahsdsjha232</td>
      <td><i class="bi bi-person-bounding-box"></i></td>
      <td>
     <ul style={{listStyleType:'none'}}>
      <li><button className='btn btn-info btn-sm'>Edit</button></li>
      <li><button className='btn btn-info btn-sm'>DELETE</button></li>
     </ul>
      </td>
     </tr>
     <tr>
      <td>1</td>
      <td>ADEDOKUN</td>
      <td>adedokunseyi96@gmail.com</td>
      <td>ahsdsjha232</td>
      <td><i class="bi bi-person-bounding-box"></i></td>
      <td>
     <ul style={{listStyleType:'none'}}>
      <li><button className='btn btn-info btn-sm'>Edit</button></li>
      <li><button className='btn btn-info btn-sm'>DELETE</button></li>
     </ul>
      </td>
     </tr>
     <tr>
      <td>1</td>
      <td>ADEDOKUN</td>
      <td>adedokunseyi96@gmail.com</td>
      <td>ahsdsjha232</td>
      <td><i class="bi bi-person-bounding-box"></i></td>
      <td>
     <ul style={{listStyleType:'none'}}>
      <li><button className='btn btn-info btn-sm'>Edit</button></li>
      <li><button className='btn btn-info btn-sm'>DELETE</button></li>
     </ul>
      </td>
     </tr>
     <tr>
      <td>1</td>
      <td>ADEDOKUN</td>
      <td>adedokunseyi96@gmail.com</td>
      <td>ahsdsjha232</td>
      <td><i class="bi bi-person-bounding-box"></i></td>
      <td>
     <ul style={{listStyleType:'none'}}>
      <li><button className='btn btn-info btn-sm'>Edit</button></li>
      <li><button className='btn btn-info btn-sm'>DELETE</button></li>
     </ul>
      </td>
     </tr>
    </tbody>
   </table>  

  </div>
    </div>
  )
}

export default AddStaff
