import React from 'react';
import "../style/Project.css";
import quotes from '../quotes.png';

function Project() {
  return (
    <div className="MyProjects">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3cdc2" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,208C672,235,768,245,864,229.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="title">My Projects</div>
        <div className="project">
          <div className="quotes">
            <img src={quotes} alt="quotes" />
          </div>
          <div className="project-profile">
            <div className="project-title">Quotes Generator</div>
            <div className="project-description">
              <p>Fetch quotes from the F.RI.E.N.D.S TV series and vote for your favorite ones.</p>
              <p className="stack">
                <span className="stack-name">React</span>
                <span className="stack-name">JavaScript</span>
                <span className="stack-name">HTML</span>
                <span className="stack-name">CSS</span>
              </p>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="quotes">
            <img src={quotes} alt="quotes" />
          </div>
          <div className="project-profile">
            <div className="project-title">Quotes Generator</div>
            <div className="project-description">
              <p>Fetch quotes from the F.RI.E.N.D.S TV series and vote for your favorite ones.</p>
              <p>React, JavaScript, HTML, CSS</p>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="quotes">
            <img src={quotes} alt="quotes" />
          </div>
          <div className="project-profile">
            <div className="project-title">Quotes Generator</div>
            <div className="project-description">
              <p>Fetch quotes from the F.RI.E.N.D.S TV series and vote for your favorite ones.</p>
              <p>React, JavaScript, HTML, CSS</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project; 