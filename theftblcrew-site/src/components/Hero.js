import './Hero.css';
import phoneImage from '../assets/phoneImage.png';

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>theftblcrew.</h1>
                <p>Entertaining football fans worldwide.</p>
            </div>

            <div className='hero-image'>
                <img src={phoneImage}  alt='Instagram preview'/>
            </div>

        </div>
    );
}

export default Hero;