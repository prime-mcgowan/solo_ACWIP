import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function VolunteerPortalPage() {

    return (
        <>
           
           {/* To-Do Tracker */}
            <div className="container">
                <div className="row">
                    <div className='col-6'>To-Do Tracker</div>
                </div>

                <div className="row g-3">
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="My To-Do" aria-label="City"/>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary profile-button" type="button">DONE</button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary profile-button" type="button">DELETE</button>
                    </div>
                </div>
            </div>    
            
           
           {/* Contact Corner */}
            <div className="container">
                    <div className="row">
                        <div className='col-6'>Contact Corner</div>
                    </div>
            
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="To"/>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="From"/>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">SEND</button></div>

           
            
            </div>









            
        
        </>//end fragment
    )//end return    
}//end VolunteerPortalpage function






export default VolunteerPortalPage;



       {/* <form id="contactForm">
    <div className="mb-3">
      <label className="form-label" htmlFor="name">Name</label>
      <input className="form-control" id="name" type="text" placeholder="Name"/>
    </div>

    <div className="mb-3">
      <label className="form-label" htmlFor="emailAddress">Email Address</label>
      <input className="form-control" id="emailAddress" type="email" placeholder="Email Address"/>
      
    </div>

    <div className="mb-3">
      <label className="form-label" htmlFor="message">Message</label>
      {/* <textarea className="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;" data-sb-validations="required"></textarea> */}
//       <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
//     </div>

//     <div className="d-none" id="submitSuccessMessage">
//       <div className="text-center mb-3">Form submission successful!</div>
//     </div>

//     <div className="d-none" id="submitErrorMessage">
//       <div className="text-center text-danger mb-3">Error sending message!</div>
//     </div>

//     <div className="d-grid">
//       <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
//     </div>

//   </form>

// </div>