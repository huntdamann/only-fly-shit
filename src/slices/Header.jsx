import React, { useState } from 'react';
import '../css/Header.css'
import { Link, Element } from 'react-scroll';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{backgroundColor: isMenuOpen ? "black" : "", transition: "all 0.3s ease"}} className="header-wrapper">
      <div className="header-content">
        {/* Brand Name */}
        <div className="brand-name">
          <h1>Only Fly Shit</h1>
        </div>

        {/* Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          {/* Top line - rotates down to form top of X */}
          <span style={{
            transform: isMenuOpen ? "rotate(45deg) translateY(8px) translateX(5px)" : "rotate(0deg)",
            transition: "transform 0.3s ease"
          }} className="menu-line"/>

          {/* Middle line - fades out */}
          <span style={{
            opacity: isMenuOpen ? "0" : "1",
            transition: "opacity 0.3s ease"
          }} className="menu-line"/>

          {/* Bottom line - rotates up to form bottom of X */}
          <span style={{
            transform: isMenuOpen ? "rotate(-45deg) translateY(-8px) translateX(5px)" : "rotate(0deg)",
            transition: "transform 0.3s ease"
          }} className="menu-line"/>
        </button>
      </div>

      {/* Dropdown Navigation */}
      {isMenuOpen && (
        <nav className="dropdown-nav">
          <ul className="nav-list">
            <li className="nav-item">
            <Link to="section1" smooth={true} duration={500}>
              <span>About The Brand</span>
            </Link>

            </li>

            <li className="nav-item">
            <Link to="section2" smooth={true} duration={500}>

              <span>Hand-Crafted Candles</span>

              </Link>

            </li>
            <li className="nav-item">
            <Link to="section3" smooth={true} duration={500}>

                <span>Glass Albums</span>
              </Link>

            </li>
           
          </ul>
        </nav>
      )}
    </header>
  );
}