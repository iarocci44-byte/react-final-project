import React from "react";
import imdblogo from "../assets/imdb_logo.png";
import { Link } from "react-router-dom";
import popcorn from '../assets/cartoon-1295516_640.png'
import directorchair from '../assets/film-maker-294496_640.png'

function home() {
  return (
    <div className="home__page">
      <div className="rightpopcorn">
        <img src={popcorn} alt="Popcorn" />
      </div>
      <figure className="home__imdb-logo">
        <img src={imdblogo} className="home__imdb-logo" alt="IMDB Logo" />
      </figure>
        <h1 className="home__title">Welcome to Movie Explorer</h1>
        <h2 className="home__subtitle nav__links1"><Link to="/search"><span className="yellow__link--bg">Search</span></Link> the IMDb database for Your Favorite Movies and TV shows!</h2>
      <div className="directorchair">
        <img src={directorchair} alt="Director Chair" />
      </div>       
    </div>
  );
}

export default home;
