import './About.css'
import theftblcrewlogo from '../assets/theftblcrewlogo.png'
import { useEffect, useRef, useState } from 'react';

function About() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.3}
        );
        observer.observe(sectionRef.current);
    }, []);
    return(
        <section
        ref={sectionRef} 
        className={`about ${visible ? 'visible' : ''}`}
        >

    <div className='about-instagram-section'>
        <div className='about-half'>
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
        </div>

        <div className="instagram-half">
            <div
                className="elfsight-app-e8399e87-9342-4341-a246-e1c6a8751f5f"
                data-elfsight-app-lazy
            ></div>
        </div>
    </div>


        </section>
    )
}
export default About;