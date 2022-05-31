import { useEffect, useState } from 'react'
import { collect } from './Custlist.config'
import { collection , addDoc,docs,getDocs } from 'firebase/firestore'
import AdminNav from './AdminNav'
import { useSelector } from 'react-redux'
function Dashboard() {
  const getDetails= useSelector((state=>state))
  console.log(getDetails)
  
    

  useEffect(()=>{
    getDocs(collect)
.then((snapshot)=>{
  let arr=[];
  snapshot.docs.forEach((seyiDoc)=>{
    arr.push({...seyiDoc.data(),id:seyiDoc.id})
  })
    console.log(arr)
}).catch(()=>console.log('this is a network error from admin'))
 
  },[])
 localStorage.nam='seyi adedpkun'
  const [Surname,setSurname]=useState('')
  const [MiddleName,setMiddleName]=useState('')
  const [lastName,setLastName]=useState('')
  const [custArr,setCustArr]=useState([])
  // const collectRef=collection(lis,'customerslist')
  const registerBtn=()=>{
    
    setCustArr(()=>{
      let custDetails={Surname,MiddleName,lastName}
      
      addDoc(collect,{
        
        custDetails
       })
       .then(()=>{alert('data adeded')})
   .catch((err)=>{console.log(err.message)})
      
      return custDetails
    })
   
   
   
   
  }
  return (
    <div>
    <AdminNav />
    <header id="main-header" className="py-0 shadow  text-white mt-5" style={{backgroundColor:"#7A9759"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>
          <i className="bi bi-house"></i>DASHBOARD</h1>
        </div>
      </div>
    </div>
  </header>


  <div className='container mt-2'>
     <div className='row'>
       <div className='col-4'>
        <button className='btn btn-primary form-control' data-toggle="modal" data-target="#addCustomers">ADD CUSTOMERS</button>
       </div>
       <div className='col-4'>
        <button className='btn btn-success form-control'>ADD CUSTOMERS</button>
       </div>
       <div className='col-4'>
        <button className='btn btn-warning form-control'>ADD CUSTOMERS</button>
       </div>
     </div>
  </div>

  {/*add customers modal*/}
  <div className="modal fade "  role="dialog" id="addCustomers">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header  text-white" style={{backgroundColor:"#2D3E50"}}>
          <h5 className="modal-title">ADD CUSTOMERS</h5>
          <button className="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
           {/*input name row*/}
          <div className="form-group row">
          <div className='col-4'>
          <label htmlFor="text">Surname</label>
          <input type="text" value={Surname} onChange={(e)=>setSurname(e.target.value)} className="form-control" />
          </div>
         <div className='col-4'>
         <label htmlFor="password">Middle Name</label>
         <input type="text" value={MiddleName} onChange={(e)=>setMiddleName(e.target.value)} className="form-control" />
         </div>
         <div className='col-4'>
         <label htmlFor="password">Last Name</label>
         <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control" />
         </div>
        </div>
         {/*input name row*/}

          {/*input email row*/}
          <div className="form-group row">
          <div className='col-6'>
          <label htmlFor="password">Email</label>
          <input type="email" className="form-control" />
          </div>
         <div className='col-6'>
         <label htmlFor="password">Phone Number</label>
         <input type="tel" className="form-control" />
         </div>
        </div>
             {/*input email row*/}
            {/*input password row*/}
            <div className="form-group row">
              <div className='col-6'>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" />
              </div>
             <div className='col-6'>
             <label htmlFor="password">Confirm Password</label>
             <input type="password" className="form-control" />
             </div>
            </div>
            {/*input password row*/}
            <div className="form-group">
              <label htmlFor="password2">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
            <label htmlFor="password2">Profile Picture</label>
            <input type="File" className="form-control" />
          </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn text-white"  style={{backgroundColor:"#2D3E50"}} data-dismiss="modal">REGISTER</button>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Dashboard
