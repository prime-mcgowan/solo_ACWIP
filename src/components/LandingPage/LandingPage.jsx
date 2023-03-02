import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

//Styling from: https://react-bootstrap.netlify.app/
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { flexbox } from '@mui/system';

function LandingPage() {
  const [heading, setHeading] = useState();
  const history = useHistory();

  const styles = {
    padding: {
      paddingTop: "20px",
      marginTop: "20px"
    }
  }

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container" style={{marginTop:-40}}>
      {/* <h2>{heading}</h2> */}



{/* Bootstrap Hero Section */}
      <div className="container-fluid px-4 py-5 my-5 text-center">
	        <div className="lc-block d-block mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
              </svg>
		                      {/* <svg xmlns="http://www.w3" viewBox="0 0 496 512" width="5em" height="5em" lc-helper="svg-icon" fill="currentColor">
			                          <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
		                      </svg> */}
          </div>


	        <div className="lc-block">
		          <div editable="rich">
			            <h2 className="display-5 fw-bold" style={{fontSize:100}}>Action Committee for Women in Prison</h2>
              </div>
	        </div>


	        <div className="lc-block col-lg-12 mx-auto mb-4">
		          <div editable="rich">
			            <p className="lead" style={{fontSize:30}}>Advocating for the humane and compassionate treatment of all incarcerated women.</p>
		          </div>
	        </div>

      </div> {/* End Bootstrap Hero Section */}

      

      <div className="card-group" style={{marginTop:-80}}>
  <div className="card">
    <img src="./images/love.png"className="card-img-top" alt="..." style={{height: 250, width: 250, alignSelf: 'center', paddingTop: 20}}/>
    <div className="card-body" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {/* <h5 className="card-title">GET AQUAINTED</h5> */}
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      {/* <a href="#" className="btn btn-primary">GET AQUAINTED</a> */}
      <button 
      className="btn profile-button btn-lg"
      type="button" style={{ backgroundColor:'#00acb0',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
      onClick={() => history.push('/getAquainted')}>GET AQUAINTED</button>
    </div>
  </div>
  <div className="card">
    <img src="./images/lamp.png" className="card-img-top" alt="..." style={{height: 250, width: 250, alignSelf: 'center', paddingTop:20}}/>
    <div className="card-body" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {/* <h5 className="card-title">GET INFORMED</h5> */}
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
      <button className="btn  profile-button btn-lg" type="button" style={{ backgroundColor:'#00acb0',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
      onClick={() => history.push('/getInformedPage')}>GET INFORMED</button>
      {/* <a href="#" className="btn btn-primary">GET INFORMED</a> */}
    </div>
  </div>
  <div className="card">
    <img src="./images/energy.png" className="card-img-top" alt="..." style={{height: 250, width: 250, alignSelf: 'center', paddingTop:20}}/>
    <div className="card-body d-grid gap-2"  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {/* <h5 className="card-title">GET INVOLVED</h5> */}
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
      {/* <a href="#" className="btn btn-primary" type="button"  onClick={() => history.push('/getInvolvedPage')}>GET INVOLVED</a> */}
      <button className=" btn profile-button btn-lg" type="button" style={{backgroundColor:'#00acb0',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
      onClick={() => history.push('/getInvolvedPage')}>GET INVOLVED</button>
       <button className="btn profile-button btn-lg" type="button" style={{backgroundColor:'#FC766AFF',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
      onClick={() => history.push('/registration')}>BECOME A VOLUNTEER</button>
    </div>
  </div>
</div>
 



<div className="card mb-3" sx={{maxWidth: '540px'}} style={styles.padding}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="./images/Gloria_Killian.jpg" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title" style={{fontWeight:'bold'}}>MEET THE FOUNDER</h5>
            <p className="card-text" style={{fontSize: 20}}>Gloria Killian was released from prison in 2002 after spending more than 16 years behind bars for a crime she did not commit.
                    As a former law student, Gloria worked in the prison law library providing legal assistance to other inmates and developing 
                    specialized legal services for many different areas of the prison. Since her release, Gloria hs been advocating 
                    for the humane treatment and release of the women she left behind. She has taken her fight to the California legislature, speaking 
                    extensivley about the issues and concerns of incarcerated women. Gloria also works as a consultant to agencies in the criminal
                     justice system and public policy fields.</p>
        </div>
     </div>
  </div>
</div> 






    </div>//closing div for container 
  );
}

export default LandingPage;



{/* <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}









{/* Bootstrap Columns */}
{/* <div class="container text-center">
  <div class="row">
    <div class="col">
      GET AQUAINTED
    </div>
    <div class="col">
      GET INFORMED
    </div>
    <div class="col">
      GET INVOLVED
      <img src="images/energy.png" style="width:10em; height:10em;" alt="head"/>
    </div>
  </div>
</div> */}
{/* End Bootstrap Columns */}



{/* <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>  */}



{/* From: https://react-bootstrap.netlify.app/ */}
{/* <CardGroup>
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
    </CardGroup> */}



















      {/* <div className="grid"> */}
        {/* <div className="grid-col grid-col_8"> */}
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
            ut ex molestie blandit. Etiam et turpis sit amet risus mollis
            interdum. Suspendisse et justo vitae metus bibendum fringilla sed
            sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
            elementum eget. Praesent efficitur eros vitae nunc interdum, eu
            interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
            Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
            luctus. Duis a sapien metus.
          </p> */}

          {/* <p>
            Praesent consectetur orci dui, id elementum eros facilisis id. Sed
            id dolor in augue porttitor faucibus eget sit amet ante. Nunc
            consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut
            finibus metus facilisis. Nullam eget lectus non urna rhoncus
            accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
            euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed
            lobortis augue mi vel felis. Duis ultrices sapien at est convallis
            congue.
          </p> */}

          {/* <p>
            Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
            Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In
            vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed
            sagittis neque id diam euismod, ut egestas felis ultricies. Nullam
            non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit
            amet nisi.
          </p> */}


        {/* </div> */}
        {/* <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div> */}
      {/* </div> */}

