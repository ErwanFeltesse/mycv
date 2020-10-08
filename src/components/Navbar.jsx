import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo-site.jpg';
import './Navbar.scss';


function Navbar(){

    return (


<div>  
<div className = "navbarContainer">
    <div className='logoC'>
    <img className="logo" src={logo} alt="logo-log" /> 
     <p className='name'><br/>Erwan Feltesse <br/> Web Developer </p>
   </div>
 
   <div className="linksC" >
      <ul className="navbar" >
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
      </div> 
</div>
    )
}
export default Navbar;