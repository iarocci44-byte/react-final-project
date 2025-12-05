import React from 'react'
import { Link } from 'react-router-dom';
import filmreel from '../assets/filmreel.png';

function nav() {
  return (
    <div>
        <div className="container__nav">
            <figure className="nav__logo">
            <img src={filmreel} className="nav__logo" alt="Film Reel Logo"/>
            </figure>
            <ul className="nav__links">
                <li className="nav__link"><Link to="/">Home</Link></li>
                <li className="nav__link"><Link to="/search">Search</Link></li>
                {/*<li className="nav__link"><Link to="/contact">Contact</Link></li>*/}
            </ul>
        </div>

    </div>
  )
}

export default nav