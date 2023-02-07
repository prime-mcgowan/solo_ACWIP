import {  useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';


function VolunteerForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');




    const dispatch = useDispatch();
    const history = useHistory();

    const handleVolunteerProfileSubmission = (event) => {
        event.preventDefault();

        console.log(`Add a volunteer`)

        dispatch({
            type:'CREATE_NEW_VOLUNTEER',
            payload: {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email, 
                birthdate: birthdate, 
                address: address,
                apt_suite_number: apt_suite_number,

            }
        }) 
        // history.push to volunteer portal
    }//end handleVolunteerProfileSubmission 


    return (
        <>
          
        <form onSubmit={handleVolunteerProfileSubmission}>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" 
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                                
                                {/* https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg */}
            </div>
            {/* profile picture */}
        
        
                <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">ACWIP Profile Information</h4>
                </div>  
                {/* profile page title */}
                
                
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder="first name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/></div>
                    <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" placeholder="last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/></div>
                </div>
                {/* name inputs */}
                
                
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder="phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">Email </label><input type="email" className="form-control" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">Birthdate</label><input type="date" className="form-control" placeholder="enter address" value=""/></div>

                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" value=""/></div>
                    <div className="col-md-12"><label className="labels">Apartment or Suite</label><input type="text" className="form-control" placeholder="apartment or suite number" value=""/></div>
                    <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" placeholder="city" value=""/></div>
                    <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="state" value=""/></div>
                    <div className="col-md-12"><label className="labels">Zip Code</label><input type="text" className="form-control" placeholder="zip code" value=""/></div>
                </div>
                {/* phone, email, birthday, address inputs */}



        {/* Start of Volunteer Opportunities radio button section */}
                <input class="form-control" type="text" value="What volunteer opportunities are you wanting to be a part of?" aria-label="readonly input example" readonly></input>
               
                <div class="input-group mb-3">
                    <div class="input-group">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                        </div>
                            <input type="text" class="form-control" value="Monday Mailers"aria-label="Text input with radio button"/>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                        </div>
                            <input type="text" class="form-control" value="Penpal Program"aria-label="Text input with radio button"/>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                        </div>
                            <input type="text" class="form-control" value="Operation Holidays"aria-label="Text input with radio button"/>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                        </div>
                            <input type="text" class="form-control" value="Get On the Bus!!"aria-label="Text input with radio button"/>
                    </div>
                </div>
            {/* End of radio button section */}


             
            {/* Start of Profile Response section */}
                <div className="row mt-9">
                    <div className="col-md-9">
                        <label className="labels">
                            Please tell us a little bit about yourself. <br></br>Below are a few prompts to help you get started:
                            * Tell us about your family and what you do for work.<br></br>
                            * Why did you decide to volunteer with ACWIP?<br></br>
                            * What are some of your hobbies?<br></br>
                            * What is one of your favorite quotes and what does it mean to you?<br></br>
                            * If you could learn to do anything, what would it be?<br></br>
                            * If you could be any fictional character, who would you choose and why?
                        </label>
                    </div>
                </div>
             
             {/* Please type your response below: */}
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Please type your response below:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

            {/* Submit Button */}
                <div className="row mt-3"></div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            
            
            
        </div>
        </div>
        </div>
        </div>


        </form>
      </>
    )//end of return
}//end of VolunteerForm function

export default VolunteerForm;