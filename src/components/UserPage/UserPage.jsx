import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

import VolunteerPortalPage from '../VolunteerPortalPage/VolunteerPortalPage';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
 
  const history = useHistory();
 
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}

      <div className="row mt-3"></div>
                <div className="mt-5 text-center">
                  <button 
                  className="btn btn-primary profile-button" 
                  type="button" 
                  onClick={() => history.push('/volunteerForm')}>Volunteer Profile Form
                  </button>
                </div>
{/* 
                <div className="row mt-3"></div>
                <div className="mt-5 text-center">
                  <button 
                  className="btn btn-primary profile-button" 
                  type="button" 
                  onClick={() => history.push('/volunteerPortalPage')}>Portal Page
                  </button>
                </div> */}



{/* 
     <VolunteerPortalPage /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
