/* eslint-disable no-undef */
import React from 'react'; import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assests/logo.png'
import instagram from './assests/instagram.png';

export default function Navbar() {
  return (
    <nav className="navbar">
       <div className="nav-wrapper white topnav">
          <Link to="/feed" className="brand-logo left">
            <span><img src={logo} alt="logo" style={{ width: 75 }} /></span>
            <img className="instagram-logo" src={instagram} alt="logo" style={{ width: 175 }} />
          </Link>
          
          <span className="search-bar">
                  <input type="search" placeholder="search" className="search-input"/>
                  {/* <i className="material-icons  ">search</i> */}
               </span>
          <ul id="nav-mobile" className="right">
             
              <li key="2"><Link to="/profile" style={{color : "black"}}>NAVREET</Link></li>
              <li key="2">
                <Link to="/profile" style={{color : "black"}}>
                  <button>LOGOUT</button>
                </Link></li>
         
          </ul>
      </div>
    </nav>
  );
}
