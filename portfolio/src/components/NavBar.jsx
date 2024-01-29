import { NavLink } from "react-router-dom";
import './Nav.css'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg text-uppercase">
            <div className="container-fluid ">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link text-warning" to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-warning" to="/projects" end>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-warning" to="/contact" end>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;