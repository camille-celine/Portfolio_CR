import React from 'react';
import "../style/AboutMe.css";
import photo from '../photo.png';

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="SumUp">
        <div className="title">Hi, I'm Camille,</div>
        <div className="description">
          I am a Berlin-based junior developer. 
          After 4 years working as a CRM Marketing Manager, 
          I started learning how to code and changed my career path. 
          Now I am focused on front-end development in React.
        </div>
      </div>
      <div className="Profile">
        <div className="photo">
          <img src={photo} alt="photo" />
        </div>
        <div className="info">
          <div className="location"><i class="fa-solid fa-location-dot"></i> Berlin</div>
          <div className="email"><i class="fa-solid fa-envelope"></i> camille.celine.rey@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe; 