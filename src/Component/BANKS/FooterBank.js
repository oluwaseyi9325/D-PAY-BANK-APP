import React from 'react'
import '../Styles/home.css'
function FooterBank() {
  return (
    <div>
    <footer className='mt-5 footer shadow-lg'  >
      <div className="container p-3">
         <div className="row">
            <div className="col-md-4 ">
                <div className="full">
                   <div className="logo_footer  text-center">
                   <div className='mt-3'>
                   <img className=' shadow-lg' style={{backgroundColor:"#2d3e50",borderRadius:'20px',border:'5px dashed #7a9759'}} src={require('../navlogo.png')} />
                   <span className='h1 ml-2' style={{fontFamily:"cursive",color:"#2d3e50"}}> <span className='text-dark'>D-</span>PAY</span>
                   </div>
                   </div>
                   <div className="information_f mt-3 text-center">
                   <div><i className='bi bi-whatsapp h3 p-2 '></i><i className='bi bi-facebook p-2 h3'></i><i className='bi bi-twitter p-2 h3'></i> <i className='bi bi-instagram p-2 h3'></i></div>
                   
                    
                   
                   </div>
                </div>
            </div>
            <div  className="col-lg-7 col-md-12">
               <div  className="row">
               <div class="col-md-7">
                  <div  className="row">
                     <div class="col-md-6">
                  <div  className=" mt-3">
                 
                  <ul className='list-group text-center'>
                     <li className='list-group-item ' style={{backgroundColor:"#7a9759",color:"#2d3e50"}}>Useful Links:-</li>
                     <li className='list-group-item' style={{backgroundColor:"#7a9759",color:"#2d3e50"}}>Conatct</li>
                    
                  </ul>
                  </div>
               </div>
               <div  className="col-md-6 ">
                  <div  className=" mt-3">
                  <ul className='list-group text-center'>
                  <li className='list-group-item ' style={{backgroundColor:"#7a9759"}}>Conatct</li>
                  <li className='list-group-item ' style={{backgroundColor:"#7a9759",color:"#2d3e50"}}>Conatct</li>
                 
               </ul>
                  </div>
               </div>
                  </div>
               </div>     
               <div  className="col-md-5 mt-3">
                  <div  className="widget_menu">
                     
                     <div  className="information_f">
                       <p>Subscribe by our newsletter:</p>
                     </div>
                     <div  className="form_sub">
                        <form>
                           <fieldset>
                              <div  className="input-group">
                                 <input type="email" placeholder="Enter Your Mail" name="email" className='form-control' />
                                 <div className='input-group-append'>
                                <button className='btn btn-md text-white' style={{backgroundColor:'#2d3e50'}} type='button'>Subscribe</button>
                              </div>
                              </div>
                             
                           </fieldset>
                        </form>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   <footer id="main-footer" className="bg-secondary text-white p-0">
   <div className="container">
     <div className="row">
       <div className="col">
        <small> <p className="lead text-center">
        Copyright &copy;
        <span id="year"></span>
        <small>2022 All Rights Reserved || SHEY-NET D-PAY</small>
      </p></small>
       </div>
     </div>
   </div>
 </footer>

 
    </div>
  )
}

export default FooterBank
