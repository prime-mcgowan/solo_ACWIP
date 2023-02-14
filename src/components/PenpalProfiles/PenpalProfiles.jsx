import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




    function PenpalProfiles() {

      return (

            <div className="container"> 

                

<div className="card mb-3" sx={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Roseanna</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#" className="btn btn-primary">IT'S A MATCH</a>
        </div>
     </div>
  </div>
</div>   


<div className="card mb-3" sx={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Penpal Project</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
     </div>
  </div>
</div>   

<div className="card mb-3" sx={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Operation Holidays</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
     </div>
  </div>
</div>   

<div className="card mb-3" sx={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Get on the bus!!</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
     </div>
  </div>
</div>   




            </div>//closing tag for className="container"
      )//closing for return
    }//end of GetInvolvedFunction

  


   export default PenpalProfiles;