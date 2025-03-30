import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMe">
        <div className="aboutMe-content">
          <h1>About Me</h1>
          <div>
            Hello, I am a comp TIA certified Cyber Security Specialist, as well
            as a self-taught Software Developer. I have been interested in
            technology since I was young, and my passion has kept growing ever
            since. I have used this passion to learn and use practical
            developmental skills across many diverse projects in my portfolio.
          </div>
          <br />
          <div>
            My preferred technologies and languages:
            <ul>
              <li>Lua</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vite</li>
            </ul>
          </div>
          <br />
          <div>
            While these are my preferred languages and technologies, I am still
            open to learning and using whatever else to get the job done!
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
