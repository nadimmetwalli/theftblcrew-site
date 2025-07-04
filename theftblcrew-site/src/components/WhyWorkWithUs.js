import React from 'react';
import './WhyWorkWithUs.css';
import { useNavigate } from 'react-router-dom';

function WhyWorkWithUs() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <section className='why-work-section'>
            <h2>Why work with us</h2>
            <div className='benefits-container'>
                <div className='benefit-card'>
                    <h3>Massive Football Audience</h3>
                    <p>Reach over 77k+ engaged football fans worldwide who love trending content.</p>
                </div>

                <div className='benefit-card'>
                    <h3>High Engagement & Viral Content</h3>
                    <p>Our creative content, edits, and reels consistently spark conversations and shares.</p>
                </div>

                <div className='benefit-card'>
                    <h3>Trusted by Top Brands</h3>
                    <p>Leading sports brands partner with us for authentic promotion and visibility.</p>
                </div>
            </div>
            <button className="work-button" onClick={handleClick}>
                Work with us
            </button>
        </section>
    )
}
export default WhyWorkWithUs;