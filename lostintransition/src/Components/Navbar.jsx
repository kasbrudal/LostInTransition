import { NavLink } from "react-router-dom";
import '../css/login.css'

export function Navbar() {
    return (
        <div className="header">
            <div className="translateHeader">
                <img src={require("../assets/Logo.png" )} 
                alt="Logo"
                width='100px'/>            
                <NavLink to="/translate"><h1>Lost in translation</h1></NavLink>

            </div>
            <div className="profileElmnt">
                <NavLink to="/profile">
                
                <img src={require("../assets/user1.png" )} 
                    alt="Logo"
                    width='100px'/> 
                    
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;