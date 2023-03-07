import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function GetAquainted() {

    const listStyles = {
            paddingBottom:25,
            fontSize:24,
            textAlign:'center', 
            listStyleType:'none', 
    }

    return (
        <>
            <div>
                <h1 style={{textAlign:'center', paddingTop:50, paddingBottom:40}}>Our Mission Statement</h1>

                <h4 style={{textAling:'center', marginLeft:200, marginRight:200}}>
                        Our mission is to advocate for the humane and compassionate treatment of all incarcerated women everywhere.
                        We work for the release of all women who are unjustly imprisoned, and strive to reduce 
                        the over reliance on incarceration. 
                        We work to bring fairness and equity into the criminal justice system and to
                        shift the focus to treatment and restorative justice. We work to educate the public, 
                        develop new legislation, implement new programs, and develop resources for incarcerated women.
                        It is our vision that all persons who are impacted by the criminal justice system will be 
                        treated with dignity and respect, and that restorative justice will be the goal of all parties. 
                        Everyone in society will recognize that they have an important role in the process, and 
                        rehabilitation will be a primary focus of the criminal justice system. 
                        We envision a future where female offenders will be helped to maintain their families 
                        and develop strong relationships with their children rather than having their families 
                        destroyed as a consequence of contact with the criminal justice system…
                </h4>

                <ul style={{marginTop:60}}>
                    <li style={listStyles}>We are advocates for the humane and compassionate treatment of all incarcerated women.</li>
                    <li style={listStyles}>We collaborate with other organizations dedicated to reforming the criminal justice system.</li>
                    <li style={listStyles}>We work for the release of individual women prisoners who pose no danger to society.</li>
                    <li style={listStyles}>We work to inform and educate the public.</li>
                    <li style={listStyles}>We promote a shift of focus from punishment to rehabilitation and restorative justice.</li>
                </ul>    

             </div>
        </>
    )
}

export default GetAquainted;