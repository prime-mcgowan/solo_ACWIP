import {  useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';


function VolunteerForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [apt_suite_number, setApt_Suite_Number] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [mondayMailers, setMondayMailers] = useState(false);
  const [penpalProgram, setPenpalProgram] = useState(false);
  const [operationHolidays, setOperationHolidays] = useState(false);
  const [getOnTheBus, setGetOnTheBus] = useState(false);
  const [bioResponse, setBioResponse] = useState('');



    const dispatch = useDispatch();
    const history = useHistory();

    const handleVolunteerProfileSubmission = (event) => {
        event.preventDefault();



        let newVolunteer = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email, 
                birthdate: birthdate, 
                address: address,
                apt_suite_number: apt_suite_number,
                city: city,
                state: state,
                zipCode:zipCode,
                mondayMailers:mondayMailers,
                penpalProgram: penpalProgram,
                operationHolidays: operationHolidays,
                getOnTheBus: getOnTheBus,
                bioResponse: bioResponse
        }

        console.log('This is a new volunteer', newVolunteer);

        dispatch({
            type:'SAGA/CREATE_NEW_VOLUNTEER',
            payload: newVolunteer,
        
        }) 
        history.push('/volunteerPortalPage');// history.push to volunteer portal
    }//end handleVolunteerProfileSubmission 

   
    return (
        <>
          
        <form>

             {/* profile picture sidebar */}
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" 
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                                
                                {/* https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg */}
                </div>
           
        
                {/* profile page title */}
                <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">ACWIP Profile Information</h4>
                </div>  
                

                
                 {/* name inputs */}
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder="first name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/></div>
                    <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" placeholder="last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/></div>
                </div>
               
                
                

                 {/* phone, email, birthday, address inputs */}
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder="phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">Email </label><input type="email" className="form-control" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">Birthdate</label><input type="date" className="form-control" placeholder="birthdate" value={birthdate} onChange={(event) => setBirthdate(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" value={address} onChange={(event) => setAddress(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">Apartment or Suite</label><input type="text" className="form-control" placeholder="apartment or suite number" value={apt_suite_number} onChange={(event) => setApt_Suite_Number(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" placeholder="city" value={city} onChange={(event) => setCity(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="state" value={state} onChange={(event) => setState(event.target.value)}/></div>
                    <div className="col-md-12"><label className="labels">Zip Code</label><input type="text" className="form-control" placeholder="zip code" value={zipCode} onChange={(event) => setZipCode(event.target.value)}/></div>
                </div>
               



        {/* Start of Volunteer Opportunities checkbox section */}
                <input className="form-control" type="text" value="Please check the volunteer program(s) you would like to be a part of:" aria-label="readonly input example" readOnly/>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={mondayMailers} onChange={() => setMondayMailers(!mondayMailers)} id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">Monday Mailers</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={penpalProgram} onChange={() => setPenpalProgram(!penpalProgram)} id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">Penpal Program</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={operationHolidays} onChange={() => setOperationHolidays(!operationHolidays)} id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">Operation Holidays</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={getOnTheBus} onChange={() => setGetOnTheBus(!getOnTheBus)} id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">Get on the bus!!</label>
                        </div>


             
            {/* Start of Bio Response section */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Tell us a little bit about yourself. Please type your response below.</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={bioResponse} onChange={(event) => setBioResponse(event.target.value)}rows="3"></textarea>
                </div>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Helpful Writing Prompts</button>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Helpful Writing Prompts</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                            Please tell us a little bit about yourself.<br></br>
                            Below are a few prompts to help you get started:<br></br>
                            * Tell us about your family and what you do for work.<br></br>
                            * Why did you decide to volunteer with ACWIP?<br></br>
                            * What are some of your hobbies?<br></br>
                            * What is one of your favorite quotes and what does it mean to you?<br></br>
                            * If you could learn to do anything, what would it be?<br></br>
                            * If you could be any fictional character, who would you choose and why?
                    </div>
      
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
    </div>
  </div>
</div>



            {/* Submit Button */}
                <div className="row mt-3"></div>
                <div className="mt-5 text-center"><button  onClick={handleVolunteerProfileSubmission} className="btn btn-primary profile-button" type="button">SUBMIT</button></div>
            
            
            
        </div>
        </div>
        </div>
        </div>


        </form>
      </>
    )//end of return
}//end of VolunteerForm function

export default VolunteerForm;