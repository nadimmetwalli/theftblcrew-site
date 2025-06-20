import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
export default Navbar;