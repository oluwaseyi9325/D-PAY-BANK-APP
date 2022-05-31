import React, {useState,useEffect}from 'react'
import '../Styles/home.css'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import '../ADMIN PAGE/Dash.css'
import logo from '../navlogo.png'
import axios from 'axios'
import Country from './Countries';
import { StateNigeria } from './Countries';
import { LOcal } from './Countries';
import swal from 'sweetalert';
import { collection ,addDoc,docs,getDocs } from 'firebase/firestore'
import {collect} from '../ADMIN PAGE/Custlist.config'
function SignUp() {
   const initialValues={
      Surname:'',
      MiddleName:'',
      LastName:"",
      Email:'',
      Telephone:'',
      checkBox:"",
      country:'',
      gender:"",
      dob:'',
      marital:'',
      password:'',
      confirmPassword:'',
      state:"",
      lgn:"",
      language:'',
      occupation:'',
      balanceHre:'5000'

   }
   
   const onSubmit=(values)=>{
    
     console.log(
     {
      Surname:values.Surname,
      MiddleName:values.MiddleName,
      LastName:values.LastName,
      Email:values.Email,
      Telephone:values.Telephone,
      checkBox:values.checkBox,
      country:values.country,
      gender:values.gender,
      dob:values.dob,
      marital:values.marital,
      password:values.password,
      confirmPassword:values.confirmPassword,
      state:values.state,
      lgn:values.lgn,
      language:values.language,
      occupation:values.occupation,
      balanceHre:'5000'
      }
     )
    addDoc(collect,{
        
      Surname:values.Surname,
      MiddleName:values.MiddleName,
      LastName:values.LastName,
      Email:values.Email,
      Telephone:values.Telephone,
      checkBox:values.checkBox,
      country:values.country,
      gender:values.gender,
      dob:values.dob,
      marital:values.marital,
      password:values.password,
      confirmPassword:values.confirmPassword,
      state:values.state,
      lgn:values.lgn,
      language:values.language,
      occupation:values.occupation,
      balanceHre:'5000'
     })
     .then(()=>{swal(`${values.MiddleName}`, 'Registration successful !!! , Proceed to Login !!!', 'success')})
 .catch(()=>{swal(`${values.MiddleName}`, " You can't register now !! Error from the D-PAY TEAM !!! ", 'info')})
   
   }
   const phoneRegExp=/^([0]{1})[0-9]{10}$/
   const validationSchema=Yup.object({
      Surname:Yup.string().required("Field Required"),
      MiddleName:Yup.string().required("Field Required"),
      LastName:Yup.string().required("Field Required"),
     Email:Yup.string().email("Invalid E-mail !").required('Field required'),
     Telephone:Yup.string().matches(phoneRegExp,"Invalid Phone Number").required("Field required"),
     checkBox:Yup.string().required('Check the Box !!!'),
     country:Yup.string().required("Pick your country"),
     gender:Yup.string().required("Field Required"),
     dob:Yup.string().required("Pick Date of Birth"),
     marital:Yup.string().required("Field Required"),
     lgn:Yup.string().required("Field Required"),
     state:Yup.string().required("Field Required"),
    gender:Yup.string().required("Field Required"),
    language:Yup.string().required("Pick a Language"),
    occupation:Yup.string().required("Pick an Occupation"),
     password:Yup.string()
     .required("Please enter a password")
     .min(8, "Password too short")
     .test("isValidPass", " is not valid", (value, context) => {
       const hasUpperCase = /[A-Z]/.test(value);
       const hasLowerCase = /[a-z]/.test(value);
       const hasNumber = /[0-9]/.test(value);
       const hasSymbole = /[!@#%&]/.test(value);
       let validConditions = 0;
       const numberOfMustBeValidConditions = 3;
       const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
       conditions.forEach((condition) =>
         condition ? validConditions++ : null
       );
       if (validConditions >= numberOfMustBeValidConditions) {
         return true;
       }
       return false;
     }),
     confirmPassword:Yup.string().label('Password Confirm').required().oneOf([Yup.ref('password')], 'Passwords does not match'),
   })

   
 

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
 
  return (
    <div className='regForm'>
    <div   className='container'>
    
    <nav className="navbar mb-5 shadow-lg navbar-expand-sm fixed-top navbar-dark shadow p-0" style={{backgroundColor:'whitesmoke'}} >
    <div className="container">
   
      <a  className="navbar-brand">
      <img className='logoNav' src={logo}/><span className=" bankName mt-5 animate_animated animate__heartBeat" style={{color:'#2d3e50'}}><i className='mt-3'><b style={{fontFamily:'cursive'}}>D<span style={{color:'#7A9759'}}>-PAY</span></b></i></span>
      </a>
      <button className="navbar-toggler" style={{backgroundColor:"#7a9759"}} data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav m-auto">
          
        <li className="nav-btn ml-5 text-center mt-2 mb-2" style={{marginLeft:'30px'}}><Link to="/" className="" style={{color:'#2d3e50'}}><b><button  style={{backgroundColor:'#7a9759',borderRadius:'30px'}} className='btn btn-sm text-white'>GO TO HOMEPAGE</button></b></Link></li>  
        </ul>

        <ul className="navbar-nav">
         
        <li className="nav-btn ml-5 text-center mt-2 mb-2" style={{marginLeft:'30px'}}><Link to="/Login" className="" style={{color:'#2d3e50'}}><b><button  style={{backgroundColor:'#7a9759',borderRadius:'30px'}} className='btn btn-sm text-white'>Sign In</button></b></Link></li>
         
        </ul>
      </div>
    </div>
  </nav>
  

    <div className='mt-5' >
      
    <section className='mt-5' id="login">
    <div className="mt-5">
      <div className="mt-5">
        <div className="col-md-9 mx-auto">
          <div className="card mt-5 shadow-lg">
           
            <div className="card-body">
            <div>
            
             <div className='row'>
             <div className='col-lg-5 col-md-5 col-sm-7 text-muted'>
             <h6>D-PAY ACCOUNT REGISTRATION FORM</h6>
             Create your bank account by filling in this bank account Registration form. All mandatory fields are marked with an asterisk.</div>
             <div className='col-lg-7 col-md-7 col-sm-7 text-muted'>
             <h6><small>IMPORTANT INFORMATION FOR OPENING A NEW ACCOUNT</small></h6>
             <p><small>To help fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to client, validate, and record information that identifies each person who opens an account.</small></p>
            
             </div>
             </div>
            
            </div>
             <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
               <Form>
              
               {/*Field name row*/}
            <aside className='card'>
            <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Contact Information</div>
            <section className='card-body'>
            <div className="form-group row">
            <div className='col-lg-4 col-md-5'>
            <label htmlFor="text">Surname</label> 
            <ErrorMessage name='Surname'>
               {
                 errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
               }
            </ErrorMessage>
            <Field type="text" name="Surname"  className="form-control" />
            </div>
           <div className='col-lg-4 col-md-5'>
           <label htmlFor="password">Middle Name</label>
           <ErrorMessage name='MiddleName'>
           {
             errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
           }
        </ErrorMessage>
           <Field type="text" name="MiddleName" className="form-control" />
           </div>
           <div className='col-lg-4 col-md-5'>
           <label htmlFor="password">Last Name</label>
           <ErrorMessage name='LastName'>
           {
             errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
           }
        </ErrorMessage>
           <Field type="text" name="LastName"  className="form-control" />
           </div>
          </div>

          <div className='form-group row mt-3'>
          <div className='col-lg-6 col-md-7'>
          <label htmlFor="text">Telephone<sup className='text-danger h6'>*</sup></label>
          <ErrorMessage name='Telephone'>
          {
            errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
          }
       </ErrorMessage>
          <Field type="text" name="Telephone"  className="form-control" />
          </div>
         <div className='col-lg-6 col-md-7'>
         <label htmlFor="password">E-mail<sup className='text-danger h6'>*</sup></label>
         <ErrorMessage name='Email'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
         <Field type="text" name="Email"  className="form-control" />
         </div>
          </div>

          
            </section>
            </aside>
         {/*Field name row*/}

         <aside className='card mt-3'>
         <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Mailing Home Address</div>
         <section className='card-body'>
        
         <div className="form-group row">
         <div className='col-lg-4 col-md-6'>
         <label htmlFor="text">Country</label><ErrorMessage name='country'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
         <Field as="select" className="form-control" name="country">
         <option >-----</option>
         {Country.map((cty,i)=><React.Fragment key={i}><option value={cty.name}>{cty.name}</option></React.Fragment>)}
       </Field>
         </div>
        <div className='col-lg-4 col-md-6'>
        <label htmlFor="password">State</label>
        <ErrorMessage name='state'>
        {
          errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
        }
     </ErrorMessage>
     <Field as="select" className="form-control" name="state">
     <option >-----</option>
     {StateNigeria.map((st,i)=><React.Fragment key={i}><option value={st.name}>{st.name}</option></React.Fragment>)}
   </Field>
        </div>
        <div className='col-lg-4 col-md-5'>
        <label htmlFor="password">LGN</label>
        <ErrorMessage name='lgn'>
        {
          errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
        }
     </ErrorMessage>
     <Field as="select" className="form-control" name="lgn">
     <option >-----</option>
     {LOcal.map((lg,i)=><React.Fragment key={i}><option value={lg.name}>{lg.name}</option></React.Fragment>)}
   </Field>
        </div>
       </div>

      

       
         </section>
         </aside>
         

         <aside className='card mt-3'>
         <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Identification:-</div>
         <section className='card-body'>
        
         <div className="form-group row">
         <div className='col-4'>
         <label htmlFor="text">Gender</label>
         <ErrorMessage name='gender'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
         <Field as="select" className="form-control" name="gender">
         <option >-----</option>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
       </Field>
         </div>
        <div className='col-4'>
        <label htmlFor="password">DOB</label>
        <ErrorMessage name='dob'>
        {
          errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
        }
     </ErrorMessage>
        <Field type="date" name="dob"  className="form-control" />
        </div>
        <div className='col-4'>
        <label htmlFor="password">Marital Status</label>
        <ErrorMessage name='marital'>
        {
          errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
        }
     </ErrorMessage>
        <Field as="select" className="form-control" name="marital">
        <option >------</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="separated">Separated</option>
        <option value="widowed">Widowed</option>
        <option value="divorced">Divorced</option>
       
      </Field>
        </div>
       </div>

       <div className='form-group row mt-3'>
       <div className='col-6'>
       <label htmlFor="text">Language<sup className='text-danger h6'>*</sup></label>
       <ErrorMessage name='language'>
       {
         errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
       }
    </ErrorMessage>
    <Field as="select" className="form-control" name="language">
    <option >------</option>
    <option value="English">Englisj (U.S)</option>
    <option value="Yoruba">Yoruba</option>
    <option value="Igbo">Igbo</option>
    <option value="Hausa">Hausa</option>
    <option value="Others">Others</option>
   
  </Field>
       </div>
      <div className='col-6'>
      <label htmlFor="password">Occupation<sup className='text-danger h6'>*</sup></label>
      <ErrorMessage name='occupation'>
      {
        errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
      }
   </ErrorMessage>
      <Field type="text" name="occupation"  className="form-control" />
      </div>
       </div>

       
         </section>
         </aside>


         <aside className='card mt-3'>
         <div className='card-header text-white h5' style={{backgroundColor:"#7a9759"}}>Security:-</div>
         <section className='card-body'>
        
        
       <div className='form-group row'>
       <div className='col-lg-6 col-md-7'>
       <label htmlFor="text">Password<sup className='text-danger h6'>*</sup></label>
       <ErrorMessage name='password'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
       <div className='input-group'>
       <Field type={hideInput} name="password"  className="form-control" />
       <div className="input-group-prepend">
       <span className="input-group-text" id="basic-addon1" style={{cursor:'pointer'}}  onClick={()=>hideShowBtn()}>{hideShow}</span>
       </div>
       </div>
       </div>


      <div className='col-lg-6 col-md-7'>
      <label htmlFor="password">Confirm Password<sup className='text-danger h6'>*</sup></label>
      <ErrorMessage name='confirmPassword'>
         {
           errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
         }
      </ErrorMessage>
     <div className='input-group'>
     <Field type={hideInput} name="confirmPassword"  className="form-control" />
     <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1" style={{cursor:'pointer'}}  onClick={()=>hideShowBtn()}>{hideShow}</span>
                </div>
     </div>
      </div>
       </div> 
       </section>
         </aside>
         

               <div>
                  <hr />
                   <h6 className='text-muted'><b>Terms & Conditions:-</b></h6>
                  <hr />
                 <div className='row'>
                 <div className='col-lg-6 col-sm-7 text-muted'>
                <small>
                By completing this account Registration form,you agree of the terms and conditions that govern your account and your relationship with D-PAY.
                </small></div>
                 <div className='col-lg-6 col-sm-7 text-muted'>
                  <small>Please check the box below to Confirm agreement before sending the bank account Registration information.</small>
                 </div>
                 </div>
               </div>
               <div className='form-group mt-2'>
               
                <Field type='checkbox' size="3" name="checkBox" className='p-5 ml-3 checkBox text-danger'/>
                <label className='ml-4' style={{color:'#2d3e50',marginLeft:'-70px !important'}}>&nbsp; <b> &nbsp;I agree to the terms of service</b></label> <ErrorMessage name='checkBox'>
                {
                  errSms=><span className='text-danger'> <i>({errSms} !)</i></span>
                }
             </ErrorMessage>
               </div>
               <div>
                <hr />
                <span className=''><b>Verification</b></span><sup className='text-danger h6'>*</sup>
               </div>

               <div className='text-right' style={{textAlign:'right'}}>
                <button style={{backgroundColor:"#7a9759"}} type='submit' className='btn text-white btn-lg'>REGISTER THE ACCOUNT</button>
               </div>
               
            
               </Form>
             </Formik>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

     

    </div>

</div>
<div className='fixed-bottom mb-5' style={{textAlign:"right",marginRight:'20px',marginBottom:'20px',color:'#7a9759'}}>
 <h3><i className="bi bi-question-circle"></i> Fags</h3>
</div>
    </div>
  )
}

export default SignUp
