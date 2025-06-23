import { Link } from 'react-router-dom';
import './Services.css';


function Services() {
    return(
        <div>
            <h1>Our Services</h1>
            <h2>What We Offer</h2>

            <ul>
                <li>Shoutouts</li>
                <li>Post Promotions</li>
                <li>Brand collaborations</li>
                <li>Music Promotions</li>
            </ul>

            <h2>Content Formats</h2>
            <p>We offer Reels, Stories, Carousels, and more.</p>

            <h2>Why Work With Us?</h2>
            <p>Large reach, high engagement, 
            and guaranteed sales through a loyal football audience.</p>

            <h2>Our Packages</h2>
            <p>Click a package below to see pricing and what's included.</p>

            <h2>Let's Work Together</h2>
            <p>
                Interested? <Link to="/contact">Head over to our contact page</Link>
                to get in touch!
            </p>



        </div>
    );
}
export default Services;
