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



{/* Start Bootstrap Hero Section */}
      <div className="container-fluid px-4 py-5 my-5 text-center">
	        <div className="lc-block d-block mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
              </svg>
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

      </div> 
{/* End Bootstrap Hero Section */}


      
{/* Start GET AQUAINTED, INFORMED & INVOLVED Section */}
    <div className="card-group" style={{marginTop:-80}}>

        <div className="card">
          <img src="./images/love.png"className="card-img-top" alt="..." style={{height: 250, width: 250, alignSelf: 'center', paddingTop: 20}}/>
          
          <div className="card-body" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <button 
              className="btn profile-button btn-lg"
              type="button" style={{ backgroundColor:'#00acb0',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
              onClick={() => history.push('/getAquainted')}>GET AQUAINTED
            </button>
          </div>
        </div>
        

        <div className="card">
          <img src="./images/lamp.png" className="card-img-top" alt="..." style={{height: 250, width: 250, alignSelf: 'center', paddingTop:20}}/>
    
          <div className="card-body" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <button 
              className="btn  profile-button btn-lg" 
              type="button" style={{ backgroundColor:'#00acb0',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
              onClick={() => history.push('/getInformedPage')}>GET INFORMED
            </button>
          </div>
        </div>


        <div className="card">
          <img src="./images/energy.png" className="card-img-top" alt="..." style={{height: 250, width: 250, alignSelf: 'center', paddingTop:20}}/>

          <div className="card-body d-grid gap-2"  style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <button 
              className=" btn profile-button btn-lg" 
              type="button" style={{backgroundColor:'#00acb0',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
              onClick={() => history.push('/getInvolvedPage')}>GET INVOLVED
            </button>
            <button 
              className="btn profile-button btn-lg" 
              type="button" style={{backgroundColor:'#FC766AFF',position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center'}}
              onClick={() => history.push('/registration')}>BECOME A VOLUNTEER
            </button>
          </div>
        </div>
    </div>
{/* End GET AQUAINTED, INFORMED & INVOLVED Section */}



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
                     justice system and public policy fields.
              </p>
          </div>
        </div>
    </div>
</div> 

</div>
);
}

export default LandingPage;




