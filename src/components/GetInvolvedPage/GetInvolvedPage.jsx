import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




    function GetInvolvedPage() {

      return (

            <div className="container"> 

                

         


<div className="card mb-3" sx={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="./images/energy.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Monday Mailers</h5>
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

  


   export default GetInvolvedPage;