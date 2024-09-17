import "./header.css"
import lol from "./lol.jpg"


const Header = () => {
    return (
        <>
        <div className="card">
            <h1 className="header" >Welcome</h1>

            <p className="card-description">Hi, I'm Lane, a software developer with ever growing passion for all things technology.</p>

            <img src={lol} alt = "lol" className="card-image"/>
        </div>
        </>
    )
}

export default Header;