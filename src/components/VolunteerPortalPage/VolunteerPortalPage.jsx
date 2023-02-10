import {  useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';


function VolunteerPortalPage() {

    const [toDo, setToDo] = useState('');
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('');
    const [letterContent, setLetterContent] = useState('');




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
            subject: subject,
            date: date,
            letterContent: letterContent
        }

        console.log('This is a new letter', newLetter);

        dispatch({
            type: 'SAGA/CREATE_NEW_LETTER',
            payload: newLetter
        })
        setTo('');
        setFrom('');
        setSubject('');
        setLetterContent('');
    }



    return (
        <>
           
           {/* To-Do Tracker */}
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
            {/* end To-Do Tracker Container */}
            
           
           {/* Contact Corner */}
            <div className="Contact Corner container">
                    <div className="row">
                        <div className='col-6'>Contact Corner</div>
                    </div>
            
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="To" value={to} onChange={(event) => setTo(event.target.value)}/>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="From" value={from} onChange={(event) => setFrom(event.target.value)}/>
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="From" value={date} onChange={(event) => setDate(event.target.value)}/>

                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)}/>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={letterContent} onChange={(event) => setLetterContent(event.target.value)}></textarea>
                </div>

                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleNewLetterSubmission} >SEND</button></div>

            </div>
            {/* end Contact Corner Container */}









            
        
        </>//end fragment
    )//end return    
}//end VolunteerPortalpage function






export default VolunteerPortalPage;


