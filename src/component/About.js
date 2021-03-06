import React from 'react';
import './About.css';
import './profile.jpeg';

export const About=()=>{
    return(<>
        <div className="main-container">
            <div className="container" id="About">
                    <div className="profileImg">
                        <img src={require('./profile.jpeg')} alt="ProfileImage" />
                    </div>
                        <div className="Details">
                            <h1>Sonu Chandara</h1>
                            <p className='contact'>Contact No: 8700800060</p><br />
                            <p className='email'>E-mail : sonudragneel4@gmail.com</p><br />
                            <a href='https://docs.google.com/document/d/1ICJNQ0s2suaIr5bHlm8Pao3gFQZKZKsT/edit?usp=sharing&ouid=108898870545166671273&rtpof=true&sd=true' target="_blank">Download Resume </a>
                        </div> 
            </div>
                <hr/>
                    <div className="overview_text">
                        <h1>Overview</h1>
                    </div>    
                        <div className="infoText"><p>Hello, I’m Sonu, A passionate <span>Front End coder</span>. I’m curious for learning  and I wish to contribute to the success of an organization, which values  and fosters professionalism, ambition, and skills of an individual.</p> </div> 
        </div> 
        </>    
        )
}