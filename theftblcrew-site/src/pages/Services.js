import { Link } from 'react-router-dom';
import './Services.css';
import { useState } from 'react';

function Services() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
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
      <p>
        Large reach, high engagement, and guaranteed sales through a loyal football audience.
      </p>

      <h2>Our Packages</h2>
      <p>Click a package below to see pricing and what's included.</p>

      <h2>Let's Work Together</h2>
      <p>
        Interested? <Link to="/contact">Head over to our contact page</Link> to get in touch!
      </p>

      {/* Individual Options */}
      <div className="individual-option">
        <h2>Choose Individual</h2>

        <div className="card">
          <h3>Story</h3>
          <p>One Instagram Story</p>
          <p>Price: €15</p>
          <button onClick={() => setSelectedPackage("Story")}>Select</button>
        </div>

        <div className="card">
          <h3>Reel</h3>
          <p>One Instagram Reel</p>
          <p>Price: €40</p>
          <button onClick={() => setSelectedPackage("Reel")}>Select</button>
        </div>

        <div className="card">
          <h3>Post</h3>
          <p>One Instagram Post</p>
          <p>Price: €65</p>
          <button onClick={() => setSelectedPackage("Post")}>Select</button>
        </div>
      </div>

      {/* Packages */}
      <div className="packages">
        <h2>Choose Package</h2>

        <div className="card">
          <h3>Starter Package</h3>
          <ul>
            <li>1 Post or Reel</li>
            <li>1 Story</li>
          </ul>
          <p>Price: €70</p>
          <button onClick={() => setSelectedPackage("Starter Package")}>Select</button>
        </div>

        <div className="card">
          <h3>Growth Package</h3>
          <ul>
            <li>3 Posts or Reels over a week</li>
          </ul>
          <p>Price: €90</p>
          <button onClick={() => setSelectedPackage("Growth Package")}>Select</button>
        </div>

        <div className="card">
          <h3>Custom Package</h3>
          <ul>
            <li>Tailored offer. Price on request.</li>
          </ul>
          <button onClick={() => setSelectedPackage("Custom Package")}>Contact Us</button>
        </div>
      </div>

      {selectedPackage && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedPackage}</h2>
            <p>More details about this package go here.</p>
            <button onClick={() => setSelectedPackage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
