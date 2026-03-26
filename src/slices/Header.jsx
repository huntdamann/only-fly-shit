"use client"
import React, { useState } from 'react';
import '../css/Header.css'
import { motion } from 'motion/react';
import { Link, Element } from 'react-scroll';
import Image from 'next/image'
import { CiSearch, CiShoppingCart } from "react-icons/ci";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header initial={{opacity: 0, y: -50}} animate={{opacity: 1, y:0}} transition={{delay: 0.9}} 
    style={{backgroundColor: isMenuOpen ? "black" : "", transition: "all 0.3s ease"}} 
    className="header-wrapper">
      <div className="header-content">
        {/* Brand Name */}
        <Link href="/" className="brand-name">
          <Image src="/official_logo.png" fill alt="Brand logo" style={{ objectFit: 'cover' }} />
        </Link>
        
        <ul className="hidden">
            <li className="">
            <Link to="section1" smooth={true} duration={500}>
              <span>About The Brand</span>
            </Link>

            </li>

            <li className="">
            <Link to="section2" smooth={true} duration={500}>

              <span>Hand-Crafted Candles</span>

              </Link>

            </li>
            <li className="">
            <Link to="section3" smooth={true} duration={500}>

                <span>Glass Albums</span>
              </Link>

            </li>
           
      </ul>
      <ul id='desktop-nav' className="">
            <li className="cursor-pointer">
            <Link to="section1" smooth={true} duration={500}>
              <span className='desktop-link'>About The Brand</span>
            </Link>

            </li>

            <li className="cursor-pointer">
            <Link to="section2" smooth={true} duration={500}>

              <span className='desktop-link'>Hand-Crafted Candles</span>

              </Link>

            </li>
            <li className="cursor-pointer">
            <Link to="section3" smooth={true} duration={500}>

                <span className='desktop-link'>Glass Albums</span>
              </Link>

            </li>
           
      </ul>


      <div className="flex items-center gap-3">
          <div className=' flex text-white gap-2 ml-20'>
            <CiSearch className='cursor-pointer' size={28} />
            <CiShoppingCart className='cursor-pointer' size={28} />
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
    </motion.header>
  );
}