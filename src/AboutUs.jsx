import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          At Paradise Nursery, we believe in bringing nature closer to you. 
          Explore our wide variety of houseplants ranging from air-purifying 
          marvels to aromatic and medicinal essentials.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;