import React from 'react';
import "../style/AboutMe.css";
import photo from '../photo.png';

function AboutMe() {
  return (
    <div className="AboutMe">
        {/* <div className="Profile"> */}
          <div className="wrapper">
            <div className="item">
              <div class="polaroid">
                <img src={photo} alt="photo" />
                <div class="caption">
                  {/* <div className="location"><i class="fa-solid fa-location-dot"></i> Berlin</div> */}
                  {/* <div className="email"><i class="fa-solid fa-envelope"></i> camille.celine.rey@gmail.com</div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="info">
            <div className="location"><i class="fa-solid fa-location-dot"></i> Berlin</div>
            <div className="email"><i class="fa-solid fa-envelope"></i> camille.celine.rey@gmail.com</div>
          </div> */}
        {/* </div> */}
        <div className="SumUp">
          <div className="title">Hi, I'm Camille,</div>
          <div className="description">
            Former CRM Manager based in Berlin converted into web development. 
            Now I am focused on front-end development in React.
          </div>
        </div>
    </div>
  )
}

export default AboutMe; 