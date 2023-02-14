import {  useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';



import VolunteerForm from '../VolunteerForm/VolunteerForm';

function VolunteerPortalPage() {

    const [toDo, setToDo] = useState('');
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [letterContents, setLetterContents] = useState('');



    const history = useHistory();
    const dispatch = useDispatch();
    

    const handleToDoSubmission = (event) => {
        event.preventDefault();
        console.log(toDo);

        

        dispatch({
            type: 'SAGA/CREATE_NEW_TO_DO', 
            payload: {
                toDo:toDo
            }
        })
        setToDo('');
    }//end handleToDoSumbission


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
           
           {/* Start To-Do Tracker */}
            <div className="container">
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
            </div>    
            {/* End To-Do Tracker Container */}
            
           
   





            <div className="card-group">
  <div className="card">
 
    {/* <img src="./images/love.png"className="card-img-top" alt="..."/> */}
    {/* <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} /> */}
    <div className="card-body">
    <i className="fa-solid fa-user fa-5x"></i> 
      {/* <h5 className="card-title">GET AQUAINTED</h5> */}
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
    <img src="./images/lamp.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      {/* <h5 className="card-title">GET INFORMED</h5> */}
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <a href="#" className="btn btn-primary">GET INFORMED</a>
    </div>
  </div>
  <div className="card">
    <img src="./images/energy.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      {/* <h5 className="card-title">GET INVOLVED</h5> */}
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a href="#" className="btn btn-primary">GET INVOLVED</a>
    </div>
  </div>
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


