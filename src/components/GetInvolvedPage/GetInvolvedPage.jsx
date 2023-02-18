import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { faItalic } from '@fortawesome/free-solid-svg-icons';




    function GetInvolvedPage() {

    const history = useHistory();

    const svgStyles = {
        display:'flex',
        justifyContent:'center'
    }

      return (
        
        <>

                <h1 style={{marginTop:50, textAlign: 'center'}}>What is the ACWIP up to?</h1>
                   

            <div className="container" style={{}}> 

                <div className="card mb-3">
                    <div className="row g-0">

                        <div className="col-md-4" style={svgStyles}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="100" 
                                height="100" 
                                fill="currentColor" 
                                className="bi bi-mailbox" 
                                viewBox="0 0 16 16">
                                <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                                <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                            </svg>
                        </div>
        
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Monday Mailers</h5>
                                <p className="card-text">
                                    Join us every first Monday of the month to 
                                </p>
                        </div>
                    </div>
                </div>
            </div>   


            <div className="card mb-3" >
                <div className="row g-0">
        
                        <div className="col-md-4" style={svgStyles}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="100" 
                                height="100" 
                                fill="currentColor" 
                                className="bi bi-pencil" 
                                viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </div>
                
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Penpal Project</h5>
                                <p className="card-text">
                                    YOU can make a difference!! The 
                                </p>
                            </div>
                        </div>
                </div>
            </div>   

            <div className="card mb-3" sx={{maxWidth: '540px'}}>
                <div className="row g-0">
        
                        <div className="col-md-4" style={svgStyles}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="100" 
                                height="100" 
                                fill="currentColor" 
                                className="bi bi-gift" 
                                viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                            </svg>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Operation Holidays</h5>
                                <p className="card-text">
                                    Help us to make the holidays special for the incarcerated women we server AND their families. 
                                    Small gift bags of allowable items are packeaged up and delivered to our women. We also provide
                                    brand new donated toys that a child will recieve after from thier mother, during their holiday visit.
                                </p>
                            </div>
                         </div>
                </div>
            </div>   
    

            <div className="card mb-3" sx={{maxWidth: '540px'}}>
                <div className="row g-0">
                    
                    <div className="col-md-4" style={svgStyles}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="100" 
                            height="100" 
                            fill="currentColor" 
                            className="bi bi-bus-front" 
                            viewBox="0 0 16 16">
                            <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4Zm0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3Z"/>
                            <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2V8ZM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1Z"/>
                        </svg>
                    </div>
        
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Get on the bus!!</h5>
                                <p className="card-text">
                                Get On The Bus is an organization dedicated to serving the children of incarcerated mothers. Each year, 
                                Get On The Bus coordinates a statewide event bringing buses of children and their guardians 
                                for a Mother's Day visit. Get On The Bus is more than just a bus ride. Families are guided through every step of the prison paperwork 
                                process by caring volunteers who get to know them. During the bus trip children receive healthy snacks and age appropriate games and puzzles. 
                                While visiting, Get On The Bus provides a lunch and a family photograph. Each child receives a teddy bear and letter from his or her mother. 
                                </p>
                            </div>
                        </div>
                </div>
            </div>   



            <div className="callToAction" style={{textAlign:'center', marginTop: 25}}>
            <h2><span style={{fontStyle:'italic'}}>We can't do this work alone...</span>We need YOU.</h2><button className="btn btn-primary profile-button" type="button" style={{backgroundColor: '#008183', marginTop:10}}
                            onClick={() => history.push('/registration')}>BECOME A VOLUNTEER
                    </button>
            </div>


            </div> {/* closing tag for className="container" */}
            </>
      )//closing for return
    }//end of GetInvolvedFunction

  


   export default GetInvolvedPage;