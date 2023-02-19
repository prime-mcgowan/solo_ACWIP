import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title" style={{fontSize:30}}>ACWIP</h2>
      </Link>

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login" style={{fontSize:20}}>
            Login / <span style={{color:'black', fontWeight:'bold'}}>Become a Volunter</span>
          </Link>
 
          
           



        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

<Link className="navLink" to="/volunteerPortalPage" style={{fontSize:20}}>
            Volunteer Portal
          </Link>




          <Link className="navLink" to="/editVolunteerProfile" style={{fontSize:20}}>
            Edit Profile
          </Link>

       

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about" style={{fontSize:20}}>
          About
        </Link>

        <Link className="navLink" to="/info" style={{fontSize:20}}>
              Info Page
            </Link>
      </div>
    </div>
  );
}

export default Nav;
