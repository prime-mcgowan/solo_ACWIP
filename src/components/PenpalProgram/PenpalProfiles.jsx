import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect } from 'react';
import penpalsSaga from '../../redux/sagas/penpals.saga';


    function PenpalProfiles() {
     
    // const [penpalId, setPenpalId] = useState('');

      const dispatch = useDispatch();  
      const history = useHistory();

      const user = useSelector(store => store.user);
      const penpals = useSelector(store => store.penpal);

      useEffect(() => {
        dispatch({
          type: 'FETCH_PENPALS'
        })
      }, [])

    
      const handleItsAMatchButton = (id, name, bio_response) => {
       
      let newMatch = {
        user_id:user.id,
        penpal_id:id,
        name:name,
        bio_response:bio_response
      }

      console.log('This is a new penpal match', newMatch)
      

        dispatch({
          type: 'SAGA/CREATE_NEW_PENPAL_MATCH',
          payload: newMatch
          
        })
        history.push('/volunteerPortalPage');
      }

      // dispatch({
      //   type:'FETCH_PENPAL_DETAILS,
      // })

      return (
        <>
          <h2>Prospective Penpals:</h2>

          <div className="penpalList">
               <ul>
                  {penpals.map((penpal) => {
                    return <li
                      key={penpal.penpal_id}>
                          {penpal.name}
                          {penpal.bio_response}
                      <button onClick={() => {handleItsAMatchButton(penpal.penpal_id, penpal.name, penpal.bio_response)}}>It's a match!</button>
                    </li>
                  })
                }
              </ul>
          </div>  
        </>
      )//closing for return
    }//end of GetInvolvedFunction

  


   export default PenpalProfiles;


  //  <div className="penpalBio"
  //  // value={penpalId}
  //  // onChange={(event) => setPenpalId(event.target.value)}
  //  >
  //  <h5>Roseanna</h5>
  //      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  //          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  //          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  //          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  //      </p>
  //      <button 
  //             className="btn btn-primary profile-button" 
  //             type="button" 
  //             onClick={hanldeItsAMatchButton}>It's a match
  //         </button>
  //  </div>












//    <div className="container"> 

                

//    <div className="card mb-3" sx={{maxWidth: '540px'}}>
//        <div className="row g-0">
//            <div className="col-md-4">
//                <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
//            </div>
//            <div className="col-md-8">
//            <div className="card-body">
//                <h5 className="card-title">Roseanna</h5>
//                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//            <div className="mt-5 text-center">
//                <button 
//                    className="btn btn-primary profile-button" 
//                    type="button" 
//                    onClick={() => history.push('/editVolunteerProfile')}>Edit Profile
//                </button>
//            </div>

   
//            </div>
//         </div>
//      </div>
//    </div>   
   
   
//    <div className="card mb-3" sx={{maxWidth: '540px'}}>
//        <div className="row g-0">
//            <div className="col-md-4">
//                <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
//            </div>
//            <div className="col-md-8">
//            <div className="card-body">
//                <h5 className="card-title">Penpal Project</h5>
//                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//            </div>
//         </div>
//      </div>
//    </div>   
   
//    <div className="card mb-3" sx={{maxWidth: '540px'}}>
//        <div className="row g-0">
//            <div className="col-md-4">
//                <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
//            </div>
//            <div className="col-md-8">
//            <div className="card-body">
//                <h5 className="card-title">Operation Holidays</h5>
//                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//            </div>
//         </div>
//      </div>
//    </div>   
   
//    <div className="card mb-3" sx={{maxWidth: '540px'}}>
//        <div className="row g-0">
//            <div className="col-md-4">
//                <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
//            </div>
//            <div className="col-md-8">
//            <div className="card-body">
//                <h5 className="card-title">Get on the bus!!</h5>
//                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//            </div>
//         </div>
//      </div>
//    </div>   
   
   
   
   
//                </div>//closing tag for className="container


// <div className="container"> 

// <div className="card mb-3">
//     <div className="row g-0">

//         <div className="col-md-2">
//             <svg xmlns="http://www.w3.org/2000/svg" 
//                 width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
//                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//                 <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
//             </svg>
//         </div>

//         <div className="col-md-8">
//             <div className="card-body">
//             <ul>
// {penpals.map((penpal) => {
// return <li
// key={penpal.penpal_id}>
//   {penpal.name}
//   {penpal.bio_response}
//   {/* <button onClick={handleItsAMatchButton}>It's a match!</button> */}

//   <button onClick={() => {handleItsAMatchButton(penpal.penpal_id, penpal.name, penpal.bio_response)}}>It's a match!</button>
// </li>
// })
// }
// </ul>

//                 <h5 className="card-title">Roseanna</h5>
//                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         </div>
//     </div>
// </div>
// </div>   
// </div>