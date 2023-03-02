// import {  useDispatch } from 'react-redux';
// import {  useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import React from 'react';
// import { use } from 'passport';

// function PenpalMatch() {

//     const dispatch = useDispatch();
//     const history = useHistory();

//     handleItsAMatchButton = (event) => {
//         event.preventDefault();

//         let newPenpalMatch = {
//             user_id:user_id,
//             penpal_id:penpal_id
//         }

//         console.log('This is a new penpal match', newPenpalMatch);

//         dispatch({
//             type: 'SAGA/CREATE_NEW_PENPAL_MATCH',
//             payload: newPenpalMatch
//         })
//         history.push('/volunteerPortalPage');
//     }


//     return (
//         <>
//         <h5>Roseanna</h5>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <button 
//                    className="btn btn-primary profile-button" 
//                    type="button" 
//                    onClick={handleItsAMatchButton}>It's a match
//                </button>
//         </>
          
//       )//closing for return

// }

// export default PenpalMatch;