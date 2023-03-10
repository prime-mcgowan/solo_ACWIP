import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'


function writingTips() {

    const history = useHistory();

    const details = useSelector(store => store.detail);

    const listStyles = {
       paddingBottom:25
    }

    const spanStyle = {
        fontStyle:'italic',
        fontWeight:'bold',
    }


    return (
        <>
            <h1 style={{marginLeft:100, marginTop:50, marginRight:100, textAlign:'center'}}>No need to be nervous, we are here to help. <br></br>Take a look at the tips below on how to write to <span style={spanStyle}>{details.name}</span>for the first time...</h1>
       
            <ol className="writingTips" style={{marginLeft:100, marginTop:50, marginRight:100, fontSize:22, paddingLeft:30}}>
                <li style={listStyles}>
                    <span style={spanStyle}>Use their name.</span>You do not need to repeat their name a bunch of times throughout the letter, but definitely use their name specifically in the greeting. 
                You might also mention their name one other time later on in the letter.
                You should also mention your own name early on in the letter, even though it may already be on the envelope. This way you complete the introduction and greeting.
                </li>

                 <li style={listStyles}>
                    <span style={spanStyle}>Write a simple greeting.</span> Before you get into the main content of the letter, take a little bit of time to say hello, mention you are excited to be writing, and wish them well. 
                You could write, “How are you doing today?” or “I hope this letter finds you well.” or “ It’s nice to meet you through letters!”
                A greeting helps the reader transition into the letter rather than immediately diving into all the details you plan to share with them. 
                Think of the letter as a conversation, except that for now you are the only one talking. You wouldn’t start a conversation with immediately telling someone a bunch of information without greeting them first
                </li>

                <li style={listStyles}>
                    <span style={spanStyle}>Tell them some basics about yourself.</span> Your first letter is an introduction, so treat it as such. What would you tell a person you just met? Tell your pen pal those same things. Tell him a little about your public life, such as, “I work at a restaurant,' or 'I'm in college,' or 'I'm
                job hunting.' Tell him a little about your interests, broadly speaking, such as, 'I like to make videos,'
                or 'I like to grow my own food when I can,' or 'I love jazz,' or 'I like to draw.'
                </li>

                <li style={listStyles}>
                    <span style={spanStyle}>Mention how you found them and why you chose to write to them.</span> Here you could talk a little bit about your involvement with ACWIP. You could mention why you chose them to write to. 
                If you saw specific information in their profile that made you want to write to them, you could mention that and tell why it sparked your interest. 
                Tell them what your relationship to that thing is and ask them to tell you more about it.
                </li>

                <li style={listStyles}>
                    <span style={spanStyle}>Ask a few questions.</span>It is great to let your penpal know what you are interested in learning about them. 
                This gives them a little head start in writing back to you. Don't get too personal in the first letter, stick with simple questions.
                </li>

                <li style={listStyles}>
                    <span style={spanStyle}>Write a closing.</span>  You have tons of options for how to close a letter, but for pen pals it is good to thank the person for their time reading your letter. 
                You don’t necessarily want to end the letter by saying, “Please write back,” or “I look forward to hearing from you,” as this may make them feel obligated. 
                Simply thank them for taking the time to read your letter and tell them to have a nice day.
                Be sure to sign your name at the end
                </li>
             </ol>

            <div className="mt-5 text-center">
                <button className="btn profile-button btn-lg" type="button" style={{backgroundColor:'#FC766AFF'}}onClick={() => history.push('/volunteerPortalPage')}>Back to my Volunteer Portal</button>
            </div>
        </>
    )
}

export default writingTips;


