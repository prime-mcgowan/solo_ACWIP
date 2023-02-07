import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




    function GetInvolvedPage() {

      return (

            <div className="container"> 

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">PENPAL PROJECT</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

              
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">MAILER MONDAYS</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">OPERATION HOLIDAYS</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">GET ON THE BUS!!</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


















{/* Below is the card I really want to use BUT it isn't working!!!! */}

 {/* <div className="card mb-3" sx={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src={energy.png} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
     </div>
  </div>
</div>   */}


{/* <div class="card" style="width:20rem;">
    <img src="https://www.dropbox.com/s/5xp7sy21sqb6jm4/ImageCap.jpg?raw=1" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div> */}



            </div>//closing tag for className="container"
      )//closing for return
    }//end of GetInvolvedFunction

  


   export default GetInvolvedPage;