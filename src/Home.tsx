import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <h2>About</h2>
      <div>
        Hi, I'm Tali. I'm an engineer and leader passionate about building for the future.
        <br></br><br></br>
        I love working in collaborative environments on things which bind humanity together and bring us forward:
        energy, food, art, healthcare, transportation, and technology.
      </div>
      <h2>Connect</h2>
      <div>
        I'm not your typical socials guy. You can find me on...<br></br><br></br>
        <li>
          <a href='https://www.linkedin.com/in/talilaifer/'>LinkedIn</a>
        </li>
        <li>
          <a href='https://www.goodreads.com/user/show/167193129-tali-laifer'>Goodreads</a>
        </li>
        <li>
          <a href='https://www.strava.com/athletes/64198457'>Strava</a>
        </li>
        <li>
          <a href='https://github.com/tlaifer'>Github</a>
        </li>
      </div>
    </div>
  );
};

export default Home;
