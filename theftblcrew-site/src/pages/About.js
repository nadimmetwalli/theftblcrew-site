import './About.css';
import yamalPhoto from '../assets/yamal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="about-page">
      
      <div className='aboutBox'>
        <div className='about-flex-container'>
          
          <div className='left-side'>
            <h1 className='main-title'>About theftblcrew</h1>
            <p>@theftblcrew is a football-focused Instagram page that delivers entertaining, engaging content for fans around the world.</p>
          </div>
          
          <div className='right-side'>
            <img src={yamalPhoto} alt='Lamine Yamal' />
          </div>

        </div>
      </div>

      <div className='what-we-do-box'>
        <h2>What do we do?</h2>
      </div>

      {/* Flex container for the two cards */}
      <div className="cards-container">
        <div className='about-card-tilted'>
          <h2>Content</h2>
          <FontAwesomeIcon icon={faVideo} size='3x' className='video-icon' />
          <h3>We post a mix of entertaining football
           content—including reels, edits, iconic
          moments, memes, and fun takes on
          trending football topics. It's not just
          memes—it's everything that keeps<br/>
          fans entertained.</h3>
        </div>

        <div className='about-card'>
          <h2>Audience</h2>
          <h3>Our audience is made up of football <br/>
          fans of all ages, especially Gen Z and<br/>
          Millennials who love fast, fun, and <br/>
          creative content.</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
