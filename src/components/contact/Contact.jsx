import "./contact.css";
import { discord, github, gmail, instagram, linkedin } from "../../assets";

const Contact = () => {
  const githubURL = "https://github.com/lanehump";
  const instagramURL = 'https://www.instagram.com/lanehumphreys/';
  const discordURL = "https://discordapp.com/users/143182611257229313";

  const handleClick = (url) => {
    window.open(url, '_blank')
  };

  return (
    <div className="contact">
      <div className="contact-content">Lets build something!</div>
      <div className="contact-icons-container">
        <img className="contact-icon" src={github} alt="GitHub" role="button" onClick={() => handleClick(githubURL)}/>
        <img className="contact-icon" src={instagram} alt="Instagram" role="button" onClick={() => handleClick(instagramURL)}/>
        <a href="mailto:lane.humphreys12@gmail.com"><img className="contact-icon" src={gmail} alt="Gmail" role="button"/></a>
        <img className="contact-icon" src={linkedin} alt="LinkedIN" role="button"/>
        <img className="contact-icon" src={discord} alt="Discord" role="button" onClick={() => handleClick(discordURL)}/>
      </div>
    </div>
  );
};

export default Contact;
