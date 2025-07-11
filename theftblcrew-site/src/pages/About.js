import './About.css';
import './AboutCards.css';
import yamalPhoto from '../assets/yamal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import audience from '../assets/audience.png';
import reach from '../assets/reach.png';
import services from '../assets/services.png';
import shop from '../assets/shop.png';

function About() {
  return (
    <div className="about-page">
      {/* Top Section */}
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

      {/* What We Do Section */}
      <div className='what-we-do-box'>
        <h2>What do we do?</h2>
      </div>

      <div className="cards-grid">
        {/* First Row */}
        <div className='card-tilted content-card'>
          <div className='card-header'>
            <FontAwesomeIcon icon={faVideo} className='card-icon' />
            <h3>CONTENT</h3>
          </div>
          <p>We post a mix of entertaining football content—including reels, edits, iconic moments, memes, and fun takes on trending football topics. It's not just memes—it's everything that keeps fans entertained.</p>
        </div>

        <div className='card audience-card'>
          <div className='card-header'>
            <img src={audience} alt='audience icon' className='card-icon' />
            <h3>AUDIENCE</h3>
          </div>
          <p>Our audience is made up of football fans of all ages, especially Gen Z and Millennials who love fast, fun, and creative content.</p>
        </div>

        {/* Second Row */}
        <div className='card reach-card'>
          <div className='card-header'>
            <img src={reach} alt='reach icon' className='card-icon' />
            <h3>REACH</h3>
          </div>
          <p>We currently have over 78,000 followers on Instagram and growing steadily. We reach over 10 million people a month.</p>
        </div>

        <div className='card services-card'>
          <div className='card-header'>
            <img src={services} alt='services icon' className='card-icon' />
            <h3>SERVICES</h3>
          </div>
          <p>We offer different types of service for brands, business owners, start-ups, and more. Those include shoutout posts, promotions, brand collaborations, music promotions and more!</p>
        </div>

        <div className='card shop-card'>
          <div className='card-header'>
            <img src={shop} alt='shop icon' className='card-icon' />
            <h3>SHOP</h3>
          </div>
          <p>You can shop our different products including wallpapers, football shirts, merch and much more! Each product was developed with the highest quality possible and tested. Shipping is quick. Money back guaranteed.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
