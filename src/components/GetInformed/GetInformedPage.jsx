import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



function GetInformedPage() {

    const numberStyles = {
      position:'realative',
      justifyContent:'center', 
      alignItems:'center', 
      alignSelf:'center',
      paddingTop: 15,
      fontSize:70
    }

    const cardBodyStyles = {
      fontSize: 32, 
      textAlign:'center'
    }


    return (
        <>
          <div className="intro" style={{paddingTop:80, marginLeft: 100, marginRight: 100, fontSize: 32, textAlign:'center'}}>
    
            <p>The majority of women in prison are mothers, and they are usually the primary caretakers of the children. 
                The huge increase in female incarceration has significant impact on children and families. 
                An incarcerated woman is at risk of losing her children to the foster care system, 
                and many of the women eventually lose their parental rights altogether. 
                The legal process usually commences while the women are in county jail where there is no legal assistance 
                available and notification of court proceedings is unreliable at best. 
                The separation from family, and the risk of losing their children, is one of the most devastating consequences of female incarceration.
            </p>
          </div>

            <h1 style={{marginTop:50, textAlign: 'center', marginBottom: 20}}>By the Numbers:</h1>

{/* Start First row of By the Numbers cards */}
          <div className="card-group" style={{ marginLeft: 100, marginRight: 100}}>
              
              <div className="card">
                <h5 className="card-title" style={numberStyles}>63</h5>
                  <div className="card-body" >
                    <h5 className="card-title" style={cardBodyStyles}>Sixty-three percent of incarcerated women have a child under the age of 18.</h5>     
                  </div>
              </div>
              {/* https://www.prisonpolicy.org/factsheets/women_pie_chart_report_2019.pdf */}

              <div className="card">
                <h5 className="card-title" style={numberStyles}>1.25</h5>
                  <div className="card-body">
                    <h5 className="card-title" style={cardBodyStyles}>Over one million children have an incarcerated parent</h5>  
                  </div>   
              </div>
              {/* https://www.aclu.org/other/facts-about-over-incarceration-women-united-states */}

              <div className="card">
                <h5 className="card-title" style={numberStyles}>77</h5>
                  <div className="card-body">
                    <h5 className="card-title" style={cardBodyStyles}>Seventy-seven percent of incarcerated women have experienced partner violence</h5>     
                  </div>
              </div>
          </div>
{/* End First row of By the Numbers cards */}



{/* Start second row of By the Numbers cards */}
          <div className="card-group" style={{marginLeft: 100, marginRight: 100}}>

              <div className="card">
                <h5 className="card-title" style={numberStyles}>60</h5>
                  <div className="card-body">
                    <h5 className="card-title" style={cardBodyStyles}>Sixty percent of incarcerated individuals are imprisoned over 100 miles away from their family</h5>     
                  </div>
              </div>
              {/* https://www.prisonpolicy.org/reports/prisonvisits.html*/}

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
              </div>  
              {/* https://www.sentencingproject.org/app/uploads/2022/11/Incarcerated-Women-and-Girls.pdf */}
          </div>

        </>
    )
}

export default GetInformedPage;

