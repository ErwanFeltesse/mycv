import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo_erwan.png'


function Navbar(){

    return (


<div className = "navbarContainer">  
   <img className="logo" src={logo} alt="logo-log" />
      <ul className="navbar">
        <li>
          <Link to="/accueil" className="link-navbar" style={{ textDecoration: 'none' }}>
            <p>Accueil</p>
      
          </Link>
        </li>
        <li>
          <Link to="/cv" className="link-navbar" style={{ textDecoration: 'none' }}>
            <p>CV</p>
          </Link>
        </li>
        <li>
            <Link to="/portfolio" className="link-navbar" style={{ textDecoration: 'none' }}>
                <p>Portfolio</p>
            </Link>
        </li>
        <li>
            <Link to="/contact" className="link-navbar" style={{ textDecoration: 'none' }}>
                <p>Contact</p>
            </Link>
        </li>
      </ul>
      
</div>
    )
}
export default Navbar;