import React from 'react';
import "../style/Project.css";
import quotes from '../quotes.png';
import watchlist from '../watchlist.png';

function Project() {
  return (
    <div className="MyProjects">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 L 0,187 C 77.69377990430621,144.64593301435406 155.38755980861242,102.29186602870814 260,124 C 364.6124401913876,145.70813397129186 496.1435406698565,231.47846889952154 591,234 C 685.8564593301435,236.52153110047846 744.0382775119617,155.7942583732057 839,135 C 933.9617224880383,114.20574162679428 1065.7033492822968,153.3444976076555 1172,172 C 1278.2966507177032,190.6555023923445 1359.1483253588517,188.82775119617224 1440,187 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#232946" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#bae8e8" fill-opacity="1" d="M0,96L26.7,90.7C53.3,85,107,75,160,101.3C213.3,128,267,192,320,202.7C373.3,213,427,171,480,138.7C533.3,107,587,85,640,90.7C693.3,96,747,128,800,133.3C853.3,139,907,117,960,112C1013.3,107,1067,117,1120,133.3C1173.3,149,1227,171,1280,165.3C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg> */}
      <div className="title">My Projects</div>
      <div className="container">
        <div className="project">
          <div className="quotes">
            <img src={watchlist} alt="watchlist" />
          </div>
          <div className="project-profile">
            <div className="project-title">My Watchlist</div>
            <div className="project-description">
              <p>Search a movie from the TMDB database and add it to your watchlist.</p>
              <p className="stack">
                <span className="stack-name">React</span>
                <span className="stack-name">JavaScript</span>
                <span className="stack-name">HTML</span>
                <span className="stack-name">CSS</span>
              </p>
            </div>
            <div className="project-button">
              <button>Live site</button>
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
              <p>Fetch a random quote and copy it to send to your friends.</p>
              <p className="stack">
                <span className="stack-name">React</span>
                <span className="stack-name">JavaScript</span>
                <span className="stack-name">HTML</span>
                <span className="stack-name">CSS</span>
              </p>
            </div>
            <div className="project-button">
              <button>Live site</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project; 