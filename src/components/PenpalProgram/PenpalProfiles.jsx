import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect } from 'react';
import penpalsSaga from '../../redux/sagas/penpals.saga';


    function PenpalProfiles() {
     
    // const [penpalId, setPenpalId] = useState('');

      const dispatch = useDispatch();  
      const history = useHistory();

      const user = useSelector(store => store.user);
      const penpal = useSelector(store => store.penpal)

      useEffect(() => {
        dispatch({
          type: 'FETCH_PENPALS'
        })
      }, [])

    
      const handleItsAMatchButton = (event) => {
        event.preventDefault();

      let newMatch = {
        user_id:user.id,
        penpal_id:penpal.penpal_id
      }

      console.log('This is a new penpal match', new)
      

        dispatch({
          type: 'SAGA/CREATE_NEW_PENPAL_MATCH',
          payload: {
           newMatch
          }
        })
        history.push('/volunteerPortalPage');
      }

      return (
        <>
          <h2>Penpals:</h2>
          <ul>
            {penpal.map((penpal, id) => {
              return <li
                key={id}>
                  {penpal.name}
                  {penpal.bio_response}
                </li>
            })
          }
          </ul>
          <button onClick={handleItsAMatchButton}>It's a match!</button>
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