import { Link } from "react-router-dom";
import './Navbar.css';
import navbarLogo from '../assets/navbarlogo.png'
import cartIcon from '../assets/cartIcon.png'


function Navbar() {
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <img src={navbarLogo} alt="navbarlogo" className="logo" />
            </div>

            <div className="nav-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            </div>

            <div className="nav-right">
                <Link to="/services" className='buy-service'>Buy service</Link>
                <img src={cartIcon} alt="cart" className="cart-icon" />
            </div>
        </nav>
    )
}
export default Navbar;