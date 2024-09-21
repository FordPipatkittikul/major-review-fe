import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.scss';
import ParticlesBg from 'particles-bg'
import icon from '../../../public/icon';

const config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-50, 50],
  alpha: [0.6, 0],
  scale: [.1, 0.9],
  body: icon,
  position: "all",
  cross: "dead",
  random: 10
};

function HomePage() {

  return (
    <div>
      <ParticlesBg type="custom" config={config} bg={true} />
      <p class="my-paragraph">
        RateMy <span class="highlight">Major</span>
      </p>
      <h1>Rate Your Major: Share Your Experience</h1>
      <div className='mid'>
        <Link to="/majors" className="majors">Let's explore</Link>
      </div>
    </div>
  );
}

export default HomePage;
