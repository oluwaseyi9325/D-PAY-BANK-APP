import React, {useEffect,useState} from 'react'
import AdminNav from './AdminNav'
import { collect } from './Custlist.config'
import { collection , addDoc,docs,getDocs } from 'firebase/firestore'
function Addcustomers() {
  const [user,setUser]=useState([])
  const fm=()=>{
    getDocs(collect)
.then((snapshot)=>{
  let arr=[];
  snapshot.docs.forEach((seyiDoc)=>{
    arr.push({...seyiDoc.data(),id:seyiDoc.id})
  })
    
      setUser(arr)
    
   
}).catch(()=>console.log('this is a network error from admin'))
  }

  useEffect(()=>{
    fm()
  },[user])

 
  return (
    <div>
    <AdminNav />
    <header id="main-header" className="py-0 shadow  text-white mt-5" style={{backgroundColor:"#7A9759"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>
          <i className="bi bi-person-lines-fill"></i> MANAGING CUSTOMERS</h1>
        </div>
      </div>
    </div>
  </header>

<div className='container mt-4 col-6'>
  <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Name / Email / Account-Number" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">Search Details</span>
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
    {
    
      user.map((us,i)=>
           <React.Fragment key={i}>
           <tr>
           <td>{i+1}</td>
           <td>{us.LastName}</td>
           <td>{us.Email}</td>
           <td>{us.password}</td>
           <td className='text-center'><i className="bi bi-person-bounding-box"></i></td>
           <td>
          <ul style={{listStyleType:'none'}}>
           <li><button className='btn btn-primary btn-sm'>Edit</button></li>
           <li><button className='btn btn-danger btn-sm'>DELETE</button></li>
          </ul>
           </td>
          </tr>
           </React.Fragment>
        )

    }
     
     
    </tbody>
   </table>  

  </div>
    </div>
  )
}

export default Addcustomers
