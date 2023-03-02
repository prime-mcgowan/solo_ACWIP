import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function EditVolunteerProfile() {


const dispatch = useDispatch();
const history = useHistory();

const volunteerToEdit = useSelector((store) => store.volunteerToEdit);
const volunteerToDelete = useSelector((store) => store.volunteerToDelete)

useEffect(() => {
    dispatch({
        type: 'FETCH_VOLUNTEER_TO_EDIT',
    })
}, [])

console.log(volunteerToEdit)

const handleUpdateVolunteerProfile = (event) => {
    event.preventDefault();
        dispatch({
            type: 'UPDATE_VOLUNTEER_PROFILE',
            payload: volunteerToEdit
        })
        history.push('/volunteerPortalPage')
    }

const handleDeleteVolunteerProfile = (event) => {
    event.preventDefault();
        dispatch({
            type: 'DELETE_VOLUNTEER_PROFILE',
            payload: volunteerToDelete
        })
        history.push('/')
}








return (
    <>
     <form>

<div className="container rounded bg-white mt-5 mb-5">
                       <div className="row">                             <div className="col-md-3 border-right">
                                {/* <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" 
                                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div> */}
                                    
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
            <div className="col-md-6">
                <label className="labels">First Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={volunteerToEdit.first_name || ''}
                        onChange={(evt) => dispatch({type: 'EDIT_FIRST_NAME', payload: evt.target.value})}
                    /></div>
                    {/* closes First Name */}

            <div className="col-md-6">
                <label className="labels">Last Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={volunteerToEdit.last_name || ''}
                        onChange={(evt) => dispatch({type: 'EDIT_LAST_NAME', payload: evt.target.value})}
                    /></div>
                    {/* closes Last Name  */}
        </div>{/* closes first name / last name row */}


     {/* phone, email, birthday, address inputs */}
        <div className="row-mt-3">
            {/* <div className="col-md-12">
                <label className="labels">Phone Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="phone number" 
                        value={phoneNumber} 
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    /></div> */}

            <div className="col-md-12"> {/* Opens: phone, email, birthday, address inputs */}
                <label className="labels">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="email" 
                        value={volunteerToEdit.email || ""} 
                        onChange={(event) => dispatch({type: 'EDIT_EMAIL',payload: event.target.value})}
                    /></div>
             <div className="col-md-12">
                <label className="labels">Birthdate</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="birthdate" 
                        value={volunteerToEdit.birthday || ""} 
                        onChange={(event) => dispatch({type: 'EDIT_BIRTHDAY',payload: event.target.value})}
                    /></div>
             <div className="col-md-12">   
                <label className="labels">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Address" 
                        value={volunteerToEdit.address || ""} 
                        onChange={(event) => dispatch({type: 'EDIT_ADDRESS',payload: event.target.value})}
                    /></div>
             <div className="col-md-12">
                <label className="labels">Apartment or Suite Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Apartment or Suite Number" 
                        value={volunteerToEdit.apt_suite_number || ""} 
                        onChange={(event) => dispatch({type: 'EDIT_APT_SUITE_NUMBER',payload: event.target.value})}
                    /></div>
             <div className="col-md-12"> 
                <label className="labels">City</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="City" 
                        value={volunteerToEdit.city || ""} 
                        onChange={(event) => dispatch({type: 'EDIT_CITY',payload: event.target.value})}
                    /></div>
             <div className="col-md-12"> 
                <label className="labels">State</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="State" 
                        value={volunteerToEdit.state || ""} 
                        onChange={(event) => dispatch({type: 'EDIT_STATE',payload: event.target.value})}
                    /></div>
             <div className="col-md-12"> 
                <label className="labels">Zip Code</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Zip Code" 
                        value={volunteerToEdit.zip_code || ""} 
                        onChange={(event) => dispatch({type: 'EDIT_ZIP_CODE',payload: event.target.value})}
                    /></div>
        </div> {/* Closes: phone, email, birthday, address inputs */}
        

          {/* Start of Volunteer Opportunities checkbox section */}
                    <input className="form-control" 
                        type="text" 
                        value="Please check the volunteer program(s) you would like to be a part of:" 
                        aria-label="readonly input example"
                        readOnly
                    />

                <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={volunteerToEdit.is_monday_mailers || ""} 
                            onChange={(event) => dispatch({type:'EDIT_IS_MONDAY_MAILERS', payload: event.target.checked})} 
                            id="flexCheckDefault"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="flexCheckDefault">Monday Mailers
                        </label>
                </div>

                <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={volunteerToEdit.is_penpal_program || ""} 
                            onChange={(event) => dispatch({type:'EDIT_IS_PENPAL_PROGRAM', payload: event.target.checked})} 
                            id="flexCheckDefault"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="flexCheckDefault">Penpal Program
                        </label>
                </div>

                <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={volunteerToEdit.is_operation_holidays || ""} 
                            onChange={(event) => dispatch({type:'EDIT_IS_OPERATION_HOLIDAYS', payload: event.target.checked})} 
                            id="flexCheckDefault"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="flexCheckDefault">Opeartion Holidays
                        </label>
                </div>

                <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={volunteerToEdit.is_get_on_the_bus || ""} 
                            onChange={(event) => dispatch({type:'EDIT_IS_GET_ON_THE_BUS', payload: event.target.checked})} 
                            id="flexCheckDefault"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="flexCheckDefault">Get on the bus!!
                        </label>
                </div>
            {/* End of Volunteer Opportunities checkbox section */}


        {/* Start of Bio Response section */}
            <div className="mb-3">
                    <label 
                        htmlFor="exampleFormControlTextarea1" 
                        className="form-label">Tell us a little bit about yourself. Please type your response below.
                    </label>
                    <textarea
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        value={volunteerToEdit.bio_response} 
                        onChange={(event) => dispatch({type: 'EDIT_BIO_RESPONSE',payload: event.target.value})}></textarea>
            </div>

                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">Helpful Writing Prompts
                    </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 
                            className="modal-title" 
                            id="exampleModalLabel">Helpful Writing Prompts
                        </h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close">
                        </button>
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
                <div className="mt-5 text-center">
                    <button  
                         onClick={handleUpdateVolunteerProfile} 
                        className="btn btn-primary profile-button" 
                        type="button">UPDATE
                    </button>
                </div>

                {/* Delete Button */}
                <div className="row mt-3"></div>
                <div className="mt-5 text-center">
                    <button  
                         onClick={handleDeleteVolunteerProfile} 
                        className="btn btn-primary profile-button" 
                        type="button">DELETE
                    </button>
                </div>





</div>
</div>
</div>
</div>
</form>  
</>
)
}

export default EditVolunteerProfile;