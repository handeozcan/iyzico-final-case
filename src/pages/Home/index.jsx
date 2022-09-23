import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/HomeScreen.css';

function Home() {
  return (
    <div className="container">
      <div id="starwars" className="animate">
        <p className="intro">A long time ago, in a galaxy far, far away...</p>
        <img
          src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png"
          className="logo"
        />
        <Link to="/starships">
          <button>Go to Starships</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
