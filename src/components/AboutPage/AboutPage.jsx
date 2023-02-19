import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3>
          
        </h3>
      </div>
      


<div className="container">
      <div className="card mb-3" style={{textAlign:'center'}}>
      <h3 >Technologies used:</h3>

  <div className="row g-0">





    <div className="col-md-12" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))", justifyContent: "center" }}>
      
      <img src="./images/icons8-react-64.png" className="img-fluid rounded-start" alt="..." style={{paddingLeft:20}}/>
      <img src="./images/icons8-redux-48.png" className="img-fluid rounded-start" alt="..."/>
      <img src="./images/icons8-postgresql-50.png" className="img-fluid rounded-start" alt="..."/>
      <img src="./images/icons8-bootstrap-48.png" className="img-fluid rounded-start" alt="..."/>
      <img src="./images/icons8-html-filetype-64.png" className="img-fluid rounded-start" alt="..."/>
      <img src="./images/icons8-css-filetype-48.png" className="img-fluid rounded-start" alt="..."/>
      <img src="./images/icons8-nodemon-64.png" className="img-fluid rounded-start" alt="..."/>
      <img src="./images/icons8-javascript-64.png" className="img-fluid rounded-start" alt="..."/>






    </div>
    {/* <div className="col-md-1">
    
    </div> */}
{/* 
    <div className="col-md-1">
      <img src="./images/icons8-postgresql-50.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-1">
      <img src="./images/passport.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-1">
      <img src="./images/icons8-bootstrap-48.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-1">
      <img src="./images/icons8-html-filetype-64.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-1">
      <img src="./images/icons8-css3-64.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-1">
      <img src="./images/icons8-nodemon-36.png" className="img-fluid rounded-start" alt="..."/>
    </div>
   */}
  </div>
</div>
</div>









<div className="container">
      <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./images/prime-logo.png" className="img-fluid rounded-start" alt="..." style={{paddingTop:40, paddingBottom:40, width:400, height:400}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:30}}>Big thanks go out to...</h5>
        <ul className="card-text" style={{fontSize:26}}>
          <li>Matt - Our fearless leader.</li>
          <li>Kevin and Vada - Who have saved the day a number of times.</li>
          <li>The Weekend Zoom Squad...you know who you are.</li>
          <li>Farah, Aman, Lauren, Shong and Natalie - for helping dig me out of holes I coded myself into.</li>
          <li>Christy and Bellamy - for tryin' to help get us paid.</li>
          <li>The ENTIRE Vonnegut cohort - I don't know how Mark and the crew got such an incredible group of people together in one room!!</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>


<div className="container">
      <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./images/nana.jpg" className="img-fluid rounded-start" alt="..." style={{width:270, height:200, paddingLeft:50}}/>
      <img src="./images/fam.jpg" className="img-fluid rounded-start" alt="..." style={{width:270, height:200, paddingLeft:50}}/>

    </div>
    <div className="col-md-8">
      <div className="card-body" >
        <h5 className="card-title" style={{fontSize:30, fontSize:26, display:'flex', alignItems:'center', justifyContent:'center', paddingTop:50}}>To my family:</h5>
            <p style={{fontSize:26, display:'flex', alignItems:'center', justifyContent:'center'}}>
              Your support has brought me to this moment - something I have been wanting for a long time.
              I am so blessed to have you all in my corner. You encouraged me to take a risk and to totally 
              reinvent myself. Without your belief in me, I wouldn't be where I am today.
            </p>
      </div>
    </div>
  </div>
</div>
</div>







    </div>
  );
}

export default AboutPage;
