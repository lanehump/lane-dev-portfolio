import "./header.css";
import { lol } from "../../assets";

const Header = () => {
  return (
    <div className="card">
      <img src={lol} alt="lol" className="card-image" />
      <div className="card-content">
        <h1>Welcome</h1>
        <div>
          Hi, I'm Lane, a software developer with an ever-growing passion for
          all things technology.
        </div>
      </div>
    </div>
  );
};

export default Header;
