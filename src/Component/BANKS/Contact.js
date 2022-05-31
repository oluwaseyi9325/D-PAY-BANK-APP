import { Form } from 'formik'
import FooterBank from './FooterBank'
import NavBank from './NavBank'
import emailjs from '@emailjs/browser'
import React, { useRef,useState } from 'react';
import swal from 'sweetalert';


function Contact() {
 const [nameUser,setName]=useState('')
 const [EmailUser,setEmail]=useState('')
 const [messageUser,setMessage]=useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (nameUser&&EmailUser&&messageUser) {
      emailjs.sendForm(
        'service_dlxfbho',
         'template_sr9lsas',
          form.current,
           'dixD6XXOxRf7jBK2D'
           )
        .then((result) => {
            console.log(result.text);
            swal("Message sent!", "Our technical team will get to you!", "success");
        }, (error) => {
            console.log(error.text);
            swal("Error in message!", "Please fill the contact from again!", "error");
        });

        setEmail('')
        setName('')
        setMessage('')
    }else{
      swal("Invalid message!", "Try again!", "warning");
    }
    }
  return (
    <div>
      <NavBank />

      <div className=" pt-5 pb-5 h1 mt-5 text-center text-white" style={{backgroundColor:"#7A9759"}}>
    <i> Get In touch with us !!!</i>
  </div>

  <div className='container mt-3'>
  <div className='row'>
     <div className=' col-sm-6 col-md-3 col-lg-3  text-center'>
     <i class="bi bi-telephone-fill h1" style={{color:'#7a9759'}}></i>
     <h3>Phone</h3>
     <div>+234-823349325</div>
     </div>
     <div className='col-sm-6 col-md-3 col-lg-3 text-center'>
     <i class="bi bi-geo-alt-fill h1 "style={{color:'#7a9759'}}></i>
     <h3>Address</h3>
     <div>N0 23,Olaolu street,Adenike</div>
     </div>
     <div className='col-sm-6 col-md-3 col-lg-3 text-center'>
     <i class="bi bi-clock-fill h1 " style={{color:'#7a9759'}}></i>
     <h3>Open Time</h3>
     <div>24hours</div>
     </div>
     <div className='col-sm-6 col-md-3 col-lg-3 text-center'>
     <i class="bi bi-envelope h1 " style={{color:'#7a9759'}}></i>
     <h3>Email</h3>
     <div>sheynet@e-commerce.co.uk</div>
     </div>
  </div>
  </div>

 <div className='container mt-5'>
   <div className='row'>
    <form className='col-lg-6 col-md-7 card' ref={form} onSubmit={sendEmail}>
    <div className='card-header h1' style={{color:"#2d3e50",backgroundColor:'#7a9759'}}>
    Contact Form
    </div>
     <div className='card-body '>
     <div className='row mt-3'>
     <div className='col-lg-6 col-md-7'>
     <label style={{color:"#2d3e50"}}>Enter your Name:-</label>
     <input className='form-control' required value={nameUser} onChange={(e)=>setName(e.target.value)} type="text" name="user_name" placeholder='Name' style={{color:"#2d3e50"}} />
     </div>
     <div className='col-lg-6 col-md-7'>
     <label style={{color:"#2d3e50"}}>Enter your valid Email:-</label>
     <input className='form-control' required value={EmailUser} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="email" name="user_email" style={{color:"#2d3e50"}} />
     </div>
     </div>
     <div className='mt-4'>
     <label style={{color:"#2d3e50"}}>Enter your Messahe here:-</label>
    <textarea className='form-control' required value={messageUser} onChange={(e)=>setMessage(e.target.value)} name="message" style={{color:"#2d3e50"}} rows='5' placeholder='Please enter your message here'></textarea>
     </div>
   <div>
   
   </div>
     <div className=' mt-4'>
     
      <input type="submit" className='btn btn-lg text-white' value="Send Message" style={{backgroundColor:'#7A9759'}}/>
     </div>
     </div>
     <div className='card-footer text-center' style={{color:"#2d3e50",backgroundColor:'#7a9759'}}>
       <h6><i>kindly note that, you can still send your complains on Whatsapp!</i></h6>
     </div>
    </form>
    <div className='col-lg-6 col-md-7 d-none d-lg-block d-md-none card'>
     <img src={require('../gif1.png')} style={{width:'550px'}}/>
    </div>
   </div>
 </div>
  <div className='container mt-5'>
  
  <div className='mt-5' style={{width: "100%"}}>
  <h2 className='text-center'><i><u>Visit Our Office</u></i></h2>
  <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=LAUTECH%20OGBOMOSHO,%20Adenike%20area,%20OGBOMOSO+(SHEY-NET%20E-COMMERCE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/">navigation gps</a></iframe></div>
  </div>

  <div className='fixed-bottom ' style={{textAlign:"right",marginRight:'20px',marginBottom:'20px'}}>
 <div className='animate__animated animate__flip animate__delay-2s animate__repeat-2'>
 <a href='https://wa.link/5hsjhd'  target="_blank"> <i className="bi bi-whatsapp text-success h1 "  ></i></a>
 </div>
  </div>

      <FooterBank/>
    </div>
  )
}

export default Contact
