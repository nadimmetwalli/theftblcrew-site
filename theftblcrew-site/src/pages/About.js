import './About.css';
import yamalPhoto from '../assets/yamal.png';

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

      <h2>What is theftblcrew</h2>
      <p>@theftblcrew is a football-focused <br />
       Instagram page that delivers <br/>
      entertaining, engaging content for fans <br/>
      around the world.</p>

      <h2>What kind of content do we post?</h2>
      <p>We post a mix of entertaining football content—including reels, 
      edits, iconic moments, memes, and fun takes on trending football topics. 
      It's not just memes—it's everything that keeps fans entertained.</p>

      <h2>Who is your audience?</h2>
      <p>Our audience is made up of football fans of all ages, 
      especially Gen Z and Millennials who love fast, fun, and creative content.</p>

      <h2>Our reach</h2>
      <p>We currently have over 77,000 followers on Instagram and growing steadily.</p>
      
      <h2>Our story</h2>
      <p>We’re a passionate football-loving crew aiming to entertain. 
      Whether it’s a legendary goal, a funny moment, or an epic comeback, we bring the energy, 
      nostalgia, and fun side of the game to our followers.</p>
      
    </div>
  );
}

export default About;
