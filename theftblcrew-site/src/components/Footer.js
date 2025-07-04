import React from 'react';
import './Footer.css';
import theftblcrewlogo from '../assets/theftblcrewlogo.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div className='footer-logo'>
                    <img src={theftblcrewlogo} alt='theftblcrewlogo'/>
                    <p className='tagline'>Entertaining football fans worldwide.</p>
                </div>

                <div className='footer-links'>
                    <div className='footer-column'>
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">TikTok</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
        <p>© {new Date().getFullYear()} theftblcrew.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

        </footer>
    );
}
export default Footer;