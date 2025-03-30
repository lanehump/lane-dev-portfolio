import "./Projects.css";
import { cueImage, zbpvp } from "../../assets";
import { useState } from "react";

const Projects = () => {
  const [flipped, setFlipped] = useState([false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <>
      <div className="banner">Here are some of my projects</div>
      <div className="projects-container">
        <div
          className={`project-item ${flipped[0] ? "flipped" : ""}`}
          onClick={() => handleFlip(0)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img className="project-image" src={cueImage} alt="Cool" />
              <p>Cue Music</p>
            </div>
            <div className="card-back">
              <p>
                While in college I was tired of passing my phone around at
                parties just for people to queue songs. So I created this
                full-stack web application from the ground up. Using Python on
                the back end, and React JS on the front end, I was able to solve
                this problem in my life with code.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`project-item ${flipped[1] ? "flipped" : ""}`}
          onClick={() => handleFlip(1)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img className="project-image" src={zbpvp} alt="Cool" />
              <p>My FiveM Server</p>
            </div>
            <div className="card-back">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
