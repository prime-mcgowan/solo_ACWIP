import {  useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';


function VolunteerForm() {

    const [firstName, setFirstName] = useState('');    





    return (
        <>
            {/* <form>

                <input 
                    type="text"
                    placeholder='First Name'
                    // value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                 />


                <input 
                    type="text"
                    placeholder='Last Name'
                    // value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                 />


                <input 
                    type="email"
                    placeholder='e-mail'
                    // value={email}
                    onChange={(event) => setEmail(event.target.value)}
                 />

                <input 
                    type="date"
                    placeholder='Birthday'
                    // value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                 />

                <input 
                    type="text"
                    placeholder='Last Name'
                    // value={LastName}
                    onChange={(event) => setLastName(event.target.value)}
                 />

            </form> */}

            <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" 
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
       
       {/* https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg */}
       
       
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder="first name" value=""/></div>
                    <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" value="" placeholder="last name"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder="phone number" value=""/></div>
                    <div className="col-md-12"><label className="labels">Email </label><input type="email" className="form-control" placeholder="email" value=""/></div>
                    <div className="col-md-12"><label className="labels">Birthdate</label><input type="date" className="form-control" placeholder="enter address" value=""/></div>

                    <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address" value=""/></div>
                    <div className="col-md-12"><label className="labels">Apartment or Suite</label><input type="text" className="form-control" placeholder="apartment or suite number" value=""/></div>
                    <div className="col-md-12"><label className="labels">Zip Code</label><input type="text" className="form-control" placeholder="zip code" value=""/></div>
                    <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="state" value=""/></div>
                </div>



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









                <div className="row mt-3">
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        {/* <div className="col-md-4">
            <div className="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""/></div> <br>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>
            </div> */}
        </div>
    </div>
{/* </div> */}
{/* // </div>
// </div> */}














        </>
    )//end of return
}//end of VolunteerForm function

export default VolunteerForm;