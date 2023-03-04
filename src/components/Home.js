import React from 'react';
import './styles/HomePage.css';
import HomeImage from '../images/Mathematics-bro.svg';

function Home() {
  return (
    <div className='homePageContainer'>
      <h2 className='welcome'>Welcome to our page!</h2>
      <p className='description'>
        &quot;Math Magicians&quot; is a website for all fans and lovers of mathematics.
      </p>
      <p className='description'>
        {' '}
        It is a Single Page App (SPA) that allows users to:
      </p>
      <ul className='listContainer'>
        <li className='listItem'>Make simple calculations</li>
        <li className='listItem'>Read a random math-related quote.</li>
      </ul>
      <img src={HomeImage} alt='mathematics person' className='homeImage' />
    </div>
  );
}
export default Home;
