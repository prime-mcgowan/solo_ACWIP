import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



function GetInformedPage() {

  const numberStyles = {
    position:'realative',
    justifyContent:'center', 
    alignItems:'center', 
    alignSelf:'center',
    paddingTop: 15,
    fontSize:50
  }

  const cardBodyStyles = {
    fontSize: 25, 
    textAlign:'center'
  }


    return (
<>

<div className="intro" style={{paddingTop:40, marginLeft: 75, marginRight: 75, fontSize: 24, textAlign:'center'}}>
    <p>The majority of women in prison are mothers, and they are usually the primary caretakers of the children. 
        The huge increase in female incarceration has significant impact on children and families. 
        An incarcerated woman is at risk of losing her children to the foster care system, 
        and many of the women eventually lose their parental rights altogether. 
        The legal process usually commences while the women are in county jail where there is no legal assistance 
        available and notification of court proceedings is unreliable at best. 
        The separation from family, and the risk of losing their children, is one of the most devastating consequences of female incarceration.</p>
</div>

<h1 style={{marginTop:50, textAlign: 'center', marginBottom: 20}}>By the Numbers:</h1>

<div className="card-group" style={{ marginLeft: 100, marginRight: 100}}>
  <div className="card">
  <h5 className="card-title" 
  style={{position:'realative',justifyContent:'center', alignItems:'center', alignSelf:'center',
          paddingTop: 15, fontSize:50}}>80</h5>
    <div className="card-body" >
      <h5 className="card-title" style={cardBodyStyles}>Eighty percent of incarcerated women are mothers.</h5>     
    </div>
    {/* https://www.prisonpolicy.org/factsheets/women_pie_chart_report_2019.pdf */}
  </div>
  

  <div className="card">
  <h5 className="card-title" style={numberStyles}>1.25</h5>
    <div className="card-body">
      <h5 className="card-title" style={cardBodyStyles}>Over one million children have an incarcerated parent</h5>  
    </div>
      {/* https://www.aclu.org/other/facts-about-over-incarceration-women-united-states */}
   
  </div>

  <div className="card">
  <h5 className="card-title" style={numberStyles}>77</h5>
    <div className="card-body">
      <h5 className="card-title" style={cardBodyStyles}>Seventy-seven percent of incarncerated women have experienced partner violence</h5>     
    </div>
  </div>

 
</div>



{/* second card deck */}
<div className="card-group" style={{marginLeft: 100, marginRight: 100}}>
  <div className="card">
  <h5 className="card-title" style={numberStyles}>63</h5>
    <div className="card-body">
      <h5 className="card-title" style={cardBodyStyles}>Sixty-three percent of incarcerated individuals are imprisoned over 100 miles away from their families</h5>     
    </div>
    {/* https://www.prisonpolicy.org/reports/prisonvisits.html*/}
  </div>

  

  <div className="card">
  <h5 className="card-title" style={numberStyles}>13</h5>
    <div className="card-body">
      <h5 className="card-title" style={cardBodyStyles}>Incarcerated individuals who recieve visitors have their chances of a felony re-conviction drop by thirteen percent</h5>     
    </div>
  </div>

  <div className="card">
  <h5 className="card-title" style={numberStyles}>39</h5>
    <div className="card-body">
      <h5 className="card-title" style={cardBodyStyles}>Thirty-nine percent of incarcerated women led a single-parent household</h5>     
    </div>
    {/* https://www.sentencingproject.org/app/uploads/2022/11/Incarcerated-Women-and-Girls.pdf */}
  </div>  
</div>








    </>
        )
}

export default GetInformedPage;

// {/* <div className="card">
// <h5 className="card-title">475</h5>
//   <div className="card-body">
//     <h5 className="card-title">Percentage increase of incarcerated women over the last 40 years</h5>     
//   </div>
//   {/* https://www.sentencingproject.org/app/uploads/2022/11/Incarcerated-Women-and-Girls.pdf */}
// </div> */}






// {/* <div className="row row-cols-1 row-cols-md-2 g-4">
//   <div className="col">
//     <div className="card" style={{height: 200, width: 200, alignSelf: 'center', paddingTop: 20, marginLeft: 40}}>
//       <h1>80</h1>
//       <div className="card-body">
//         <h5 className="card-title">Percentage of incarcerated women with a child under the age of 18.</h5>
//         {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       {/* <img src="..." className="card-img-top" alt="..."/> */}
//       <div className="card-body">
//         <h5 className="card-title">77</h5>
//         <p className="card-text">Percentage of women who have experienced partner violence</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       {/* <img src="..." className="card-img-top" alt="..."/> */}
//       <div className="card-body">
//         <h5 className="card-title">700</h5>
//         <p className="card-text">Percentage increase of incarcerated women over the last 40 years</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       {/* <img src="..." className="card-img-top" alt="..."/> */}
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
// </div> */}

//flip cards w/ css
// <div className="container d-flex align-items-center justify-content-center flex-wrap">
//         <div className="box">
//             <div className="body">
//                 <div className="imgContainer">
//                     <img src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
//                 </div>
//                 <div className="content d-flex flex-column align-items-center justify-content-center">
//                     <div>
//                         <h3 className="text-white fs-5">Post Title</h3>
//                         <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="box">
//             <div className="body">
//                 <div className="imgContainer">
//                     <img src="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
//                 </div>
//                 <div className="content d-flex flex-column align-items-center justify-content-center">
//                     <div>
//                         <h3 className="text-white fs-5">Post Title</h3>
//                         <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="box">
//             <div className="body">
//                 <div className="imgContainer">
//                     <img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
//                 </div>
//                 <div className="content d-flex flex-column align-items-center justify-content-center">
//                     <div>
//                         <h3 className="text-white fs-5">Post Title</h3>
//                         <p className="fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed cum neque, rem provident ex. Laboriosam perspiciatis modi eveniet in?</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

// /* Reseting */
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Poppins', sans-serif;
// }

// body{
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .container{
//     transform-style: preserve-3d;
// }

// .container .box{
//     position: relative;
//     width: 300px;
//     height: 300px;
//     margin: 20px;
//     transform-style: preserve-3d;
//     perspective: 1000px;
//     cursor: pointer;
// }

// .container .box .body{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
//     transition: 0.9s ease;
// }



// .container .box .body .imgContainer{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
// }

// .container .box .body .imgContainer img{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }

// .container .box .body .content{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #333;
//     backface-visibility: hidden;
//     transform-style: preserve-3d;
//     transform: rotateY(180deg);
// }

// .container .box:hover .body{
//     transform: rotateY(180deg);
// }

// .container .box .body .content div{
//     transform-style: preserve-3d;
//     padding: 20px;
//     background: linear-gradient(45deg, #FE0061,#FFEB3B);
//     transform: translateZ(100px);
// }

// .container .box .body .content div h3{
//     letter-spacing: 1px;
// }