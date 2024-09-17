import "./header.css"
import lol from "./lol.jpg"


const Header = () => {
    return (
        <>
        <div className="card">
            <h1 className="header" >Welcome</h1>

            <p className="card-description">Hi, I'm Lane, I'm a software developer with a strong passion for all things technology.</p>

            <img src={lol} alt = "lol" className="card-image"/>
        </div>
        </>
    )
}

export default Header;