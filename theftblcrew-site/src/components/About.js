import './About.css'
import theftblcrewlogo from '../assets/theftblcrewlogo.png'
import { useEffect, useRef, useState } from 'react';

function About() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    return(
        <section className='about'>
            <div className='about-image'>
                <img src={theftblcrewlogo} alt='logo picture'/>
            </div>

            <div className='about-text'>
                <h2>About theftblcrew</h2>
                <p>
                    @theftblcrew is a football-focused Instagram page that delivers entertaining,
                    engaging content for fans around the world. We post a mix of reels, edits,
                    iconic moments, memes, and fun takes on trending football topics. Our audience
                    is mainly Gen Z and Millennials who love fast, fun, and creative content.
                </p>
            </div>


        </section>
    )
}
export default About;