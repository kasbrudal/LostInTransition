import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <div className="header">
            <NavLink to="/translate">Translate</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </div>
    )
}

export default Navbar;