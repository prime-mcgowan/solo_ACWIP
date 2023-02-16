import {  useDispatch, useSelector } from 'react-redux';
import {  useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import React from 'react';

// import PenpalItem from '../PenpalProgram/PenpalItem';

import VolunteerForm from '../VolunteerForm/VolunteerForm';
import penpal from '../../redux/reducers/penpal.reducer';

function VolunteerPortalPage() {

    //saga get
    //router get
    //reducer to hold data
    //bring over volunteers_penpals store
    //useEffect w/ dispatch to Fetch volunteer and penpal data
    //map through the data and render on page

    const [toDo, setToDo] = useState('');
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [letterContents, setLetterContents] = useState('');



    const history = useHistory();
    const dispatch = useDispatch();

    const params = useParams();

    const details = useSelector(store => store.detail);

    useEffect(() => {
        dispatch({
            type: 'FETCH_PENPAL_DETAILS',
            // payload:params.id
        })
    }, [])

    // const handleToDoSubmission = (event) => {
    //     event.preventDefault();
    //     console.log(toDo);

        

    //     dispatch({
    //         type: 'SAGA/CREATE_NEW_TO_DO', 
    //         payload: {
    //             toDo:toDo
    //         }
    //     })
    //     setToDo('');
    // }//end handleToDoSumbission


    const handleNewLetterSubmission = (event) => {
        event.preventDefault();

        let newLetter = {
            to: to, 
            from: from, 
            date: date,
            subject: subject,
            letterContents: letterContents
        }

        console.log('This is a new letter', newLetter);

        dispatch({
            type: 'SAGA/CREATE_NEW_LETTER',
            payload: newLetter
        })
        setTo('');
        setFrom('');
        setSubject('');
        setLetterContents('');
    }


    return (
        <>

        <h2>My Penpal:</h2>
        <p>{details.name}
        {details.bio_response}
        </p>
        {/* <ul>
            {details.map((detail) => (
               
                    <PenpalItem key={penpal.id}
                                penpal={name}
                                penpal={bio_response} />
                    
            ))}
        </ul>
            */}
           {/* Start To-Do Tracker */}
            {/* <div className="container">
                <div className="row">
                    <div className='col-6'>To-Do Tracker</div>
                </div>

                <div className="row g-3">
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="My To-Do" aria-label="City" value={toDo} onChange={(event) => setToDo(event.target.value)}/>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary profile-button" type="button" onClick={handleToDoSubmission}>ADD</button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary profile-button" type="button">DONE</button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-primary profile-button" type="button">DELETE</button>
                    </div>
                </div>
            </div>     */}
            {/* End To-Do Tracker Container */}
            
           
   





            <div className="card-group">
  <div className="card">
 
    {/* <img src="./images/love.png"className="card-img-top" alt="..."/> */}
    {/* <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} /> */}
    <div className="card-body">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
</svg>



      {/* <h5 className="card-title">GET AQUAINTED</h5> */}
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      <div className="mt-5 text-center">
        <button 
            className="btn btn-primary profile-button" 
            type="button" 
            onClick={() => history.push('/penpalProfiles')}>Penpal Profiles
        </button>
        </div>

    </div>
  </div>
  <div className="card">
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
    {/* <img src="./images/lamp.png" className="card-img-top" alt="..."/> */}
    <div className="card-body">
      {/* <h5 className="card-title">GET INFORMED</h5> */}
      {/* <p className="card-text">Writing Tips</p> */}
      <a href="#" className="btn btn-primary">Writing Tips</a>
    </div>
  </div>

  {/* <div className="card"> */}
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg> */}
    {/* <img src="./images/energy.png" className="card-img-top" alt="..."/> */}
    {/* <div className="card-body">
      {/* <h5 className="card-title">GET INVOLVED</h5> */}
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
      {/* <a href="#" className="btn btn-primary">Documents & Training</a> */}
    {/* </div>  */}
  </div>












           {/* Start Contact Corner */}
            <div className="Contact Corner container">
                    <div className="row">
                        <div className='col-6'>Contact Corner</div>
                    </div>
            
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="To" value={to} onChange={(event) => setTo(event.target.value)}/>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="From" value={from} onChange={(event) => setFrom(event.target.value)}/>
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)}/>

                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)}/>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={letterContents} onChange={(event) => setLetterContents(event.target.value)}></textarea>
                </div>

                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleNewLetterSubmission} >SEND</button></div>

            </div>
            {/* End Contact Corner Container */}


            {/* Start Edit Volunteer Profile */}
            <div className="row mt-3"></div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={() => history.push('/editVolunteerProfile')}>Edit Profile</button></div>
            {/* End Edit Volunteer Profile */}
        



            
        
        </>//end fragment
    )//end return    
}//end VolunteerPortalpage function







export default VolunteerPortalPage;


