import React, { useEffect } from 'react'
import '../Styles/home.css'
import FooterBank from './FooterBank'
import NavBank from './NavBank'
import OneSignal from 'react-onesignal';
function Home() {
  

  return (
    <div>
     
      <div className='hero'>
      <NavBank/>


      <div className='banner-b'>
      <section className='container mt-5'>
      <div className='row container ' >
      <div className='col-lg-6 col-md-7 mt-5 animate__animated animate__backInLeft '>
        <div className='mt-5 '>
          <h1 className='d-none d-lg-block d-md-none '>
         <span style={{fontSize:'60px',color:"#2d3e50"}}>Make Easier your Payment with</span>
           
           <br />
           <span style={{fontSize:'50px',color:'#7A9759'}}>D-PAY !!!</span>
          </h1>

          <h1 className=' d-lg-none d-md-block '>
         <span style={{fontSize:'30px',color:"#2d3e50"}}>Make Easier your Payment with</span>
           
           <br />
           <span style={{fontSize:'20px',color:'#7A9759'}}>D-PAY !!!</span>
          </h1>
         
        </div>
        <div>
         <p className='' style={{color:"#2d3e50",fontSize:'20px'}}>Manage everything directly and easy with D-PAY, set your Payment limit,send money to your friends,give monthly salary to your employees. All in real time with D-PAY </p>
        </div>
        <div className='' style={{display:'flex',justifyContent:''}}>
       <div className=''> <button className='btn btn-lg text-white' style={{backgroundColor:'#7a9759'}}>DOWNLOAD</button></div>
       
        </div>
      </div>
      <div className='col-lg-6 col-md-7 d-none d-lg-block d-md-none container mt-5 text-center animate__animated animate__backInRight' style={{marginLeft:'0px'}}>
      <img className='container mt-5' src={require('../gif1.png')} style={{width:'500px'}} id="phone-pics"/>
      </div>
      </div>
    </section>
      </div>

      </div>

      <section id='reviewcomment' className='container '>
         <div className='mt-5'>
         <h1 className='text-center' style={{fontSize:'40px',fontFamily:'cursive'}}>Why <span style={{borderBottom:'solid #7a9759 7px'}}>Saving</span> With Us</h1>
         </div>
          <aside className='container'>
          <div className='row  mt-5'>
           <div className='shadow-sm col-lg-4 col-md-5 p-4' >
             <h1><span className='btn text-white' style={{borderRadius:"80px",backgroundColor:"#7a9759"}}><i className="bi bi-credit-card h3"></i></span></h1>
             <div>We’ll give you a free debit card. Order it right in the app.</div>
           </div>
           <div className='shadow-sm col-lg-4 col-md-5 p-4' >
           <h1><span className='btn text-white' style={{borderRadius:"80px",backgroundColor:"#7a9759"}}><i className="bi bi-chat-text-fill h3"></i></span></h1>
           <div>Create smart budgets to help you take control of your spending.</div>
           </div>
           <div className='shadow-sm col-lg-4 col-md-5 p-4'>
           <h1><span className='btn text-white' style={{borderRadius:"80px",backgroundColor:"#7a9759"}}><i className="bi bi-check2-circle h3"></i></span></h1>
           <div>See where your money goes without solving equations.</div>
           </div>
         </div>
          </aside>
         <aside className='container'>
         <div className='row  mt-4 text-c'>
         <div className='shadow-sm  col-lg-4 col-md-5 p-4'>
         <h1><span className='btn text-white' style={{borderRadius:"80px",backgroundColor:"#7a9759"}}><i className="bi bi-layer-forward h3"></i></span></h1>
         <div>Pay absolutely nothing for sending money.</div>
         </div>
         <div className='shadow-sm col-lg-4 col-md-5 p-4'>
           <h1><span className='btn text-white' style={{borderRadius:"80px",backgroundColor:"#7a9759"}}><i className="bi bi-save h3"></i></span></h1>
           <div>Save automatically and we’ll pay you up to 15% interest every year.</div>
           </div>
           <div className='shadow-sm col-lg-4 col-md-5 p-4'>
           <h1><span className='btn text-white' style={{borderRadius:"80px",backgroundColor:"#7a9759"}}><i className="bi bi-calculator h3"></i></span></h1>
           <div>See where your money goes without solving equations.</div>
           </div>
         </div>
         
         </aside>
      </section>

      

      <section className='container mt-5 animate__animated animate__fadeInDown' id="fags">
      <div className='text-center' style={{fontFamily:"cursive",color:'#2d3e50'}}><h3>FREQUENTLY ASKED QUESTIONS</h3></div>
      <div className="accordion " id="accordionExample">
  <div className="accordion-item " >
    <h2 className="accordion-header text-white" id="headingOne">
      <button className="accordion-button text-white h1" style={{backgroundColor:'#7a9759'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is D-PAY ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Manage everything directly and easy with D-PAY, set your Payment limit,send money to your friends,give monthly salary to your employees. All in real time with D-PAY
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button text-white h1 collapsed" style={{backgroundColor:'#7a9759'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       What is D-PAY ?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Manage everything directly and easy with D-PAY, set your Payment limit,send money to your friends,give monthly salary to your employees. All in real time with D-PAY
      </div>
    </div>
  </div>
  <div className="accordion-item" >
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button text-white h1 collapsed" style={{backgroundColor:'#7a9759'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    How can I reset my Pasword ?
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    Kindly go the login page, your will see <strong>FORGET PASSWORD</strong> below the login botton,click on it and add enter your registered email address in the input provided and then proceed to activate your new PASSWORD
    </div>
  </div>
</div>
<div className="accordion-item" >
<h2 className="accordion-header" id="headingFour">
  <button className="accordion-button text-white h1 collapsed" style={{backgroundColor:'#7a9759'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
   What is D-PAY ?
  </button>
</h2>
<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  Manage everything directly and easy with D-PAY, set your Payment limit,send money to your friends,give monthly salary to your employees. All in real time with D-PAY
  </div>
</div>
</div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button text-white h1 collapsed" style={{backgroundColor:'#7a9759'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
       How can i limit my daily spend on D-PAY ?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Kindly  note that you must have up to #10,000 in your account before eligible for daily limit .
      </div>
    </div>
   
  </div>
 
</div>
    
      </section>
      {/*footer*/}
     <FooterBank/>
    </div>
  )
}

export default Home
