import {  useDispatch, useSelector } from 'react-redux';
import {  useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import React from 'react';

// import PenpalItem from '../PenpalProgram/PenpalItem';

import VolunteerForm from '../VolunteerForm/VolunteerForm';
import penpal from '../../redux/reducers/penpal.reducer';

function VolunteerPortalPage() {

    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [letterContents, setLetterContents] = useState('');



    const history = useHistory();
    const dispatch = useDispatch();

    const params = useParams();

    const details = useSelector(store => store.detail);
    const users = useSelector(store => store.user)

    useEffect(() => {
        dispatch({
            type: 'FETCH_PENPAL_DETAILS',
        })
    }, [])

   
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
        setDate('');
        setSubject('');
        setLetterContents('');
    }

    const createTheLetter = () => {
        setFrom('Laura');
        setDate("2023-02-20");
        setSubject('Hey Roseanna!');
        setLetterContents('Dear Roseanna, I hope this letter finds you doing well. You are my very first penpal and I am so excited to get to know you!! I live in northeast Minneapolis with my husband, Cameron. I am currently a student in Full Stack Software Engineering bootcamp. I recently came across the ACWIPs website and immediately saw there was a need for incarcerated women to have support on the outside. So, it is my hope that our relationship can grow into that. So, I read your bio but would love to know more about you. What is your favorite movie and time of year? Thank you for taking the time to read my letter. I hope you have a nice day. - Laura')
    }


    return (
        <>

            <div className="card-group" style={{marginLeft:80, marginTop:40, marginRight:80}}> 

                {/* Penpal Profiles Card */}
                <div className="card border border-5 border-dark mb-3">
                    <div className="card-body text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="150" 
                            height="150" 
                            fill="currentColor" 
                            className="bi bi-person-vcard"
                            viewBox="0 0 16 16">
                            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
                        </svg>

                    <div className="mt-5 text-center">
                        <button 
                            className="btn btn-primary profile-button" 
                            type="button" 
                            onClick={() => history.push('/penpalProfiles')}>Penpal Profiles
                        </button>
                    </div>
                 </div>
                </div> 
                {/* End Penpals Profiles Card */}


   
                <div className="card border border-5 border-dark mb-3">
                    <div className="card-body">
                        <h2>My Penpal:</h2>
                            <h3>{details.name}</h3>
                            <p>{details.bio_response}</p>
                    </div>
                </div>

            


                 {/* Writing Tips Card */}
                 <div className="card border border-5 border-dark mb-3">
                    <div className="card-body text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="150" 
                            height="150" 
                            fill="currentColor" 
                            className="bi bi-pencil-square" 
                            viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <div className="mt-5 text-center"></div>
                            <button 
                                className="btn btn-primary profile-button" 
                                onClick={() => history.push('/writingTips')}>Writing Tips
                            </button>
                        </div>
                    </div> {/* End WritingTips Card */} 
                </div>


                

           {/* Start Write your penpal */}
            <div className="container">
                    <div className="row">
                        <div onClick={createTheLetter} className='col-6'>Write to {details.name} below:</div>
                    </div>
            
                <div className="mb-3">
                    <input type="text" className="form-control mt-3" id="exampleFormControlInput1" placeholder={details.name} value={to} onChange={(event) => setTo(event.target.value)}/>
                    <input type="text" className="form-control mt-3" id="exampleFormControlInput1" placeholder="From" value={from} onChange={(event) => setFrom(event.target.value)}/>
                    <input type="date" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)}/>
                    <input type="text" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)}/>
                    <textarea className="form-control mt-3" id="exampleFormControlTextarea1" placeholder="Type your letter here" rows="3" value={letterContents} onChange={(event) => setLetterContents(event.target.value)}></textarea>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleNewLetterSubmission} >SEND</button></div>
            </div>{/* End Contact Corner Container */}


            {/* Start Edit Volunteer Profile Button */}
            {/* <div className="row mt-3"></div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={() => history.push('/editVolunteerProfile')}>Edit My Volunteer Profile</button></div> */}
            {/* End Edit Volunteer Profile Button */}
        



            
        
        </>//end fragment
    )//end return    
}//end VolunteerPortalpage function







export default VolunteerPortalPage;



// const [toDo, setToDo] = useState('');

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