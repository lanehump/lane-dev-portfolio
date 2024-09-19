import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMe">
        <div className="aboutMe-content">
          <h1>About Me</h1>
          <div>Hello, I am a comp TIA certified Cyber Security Specialist, that also happens to be an avid programmer. I have been interested in technology since I was young, and
            my passion has kept growing ever since.
          </div>
          <br/>
          <div>
            My preferred languages:
            <ul>
            <li>Lua</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
          </div>
          <br/>
          <div>
            While these are my preferred languages and technologies, I am still open to learning and using whatever else to get the job done!
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
