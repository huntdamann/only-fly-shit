"use client";

import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { motion } from 'motion/react'
import '../css/Footer.css'

function Footer() {
  return (
    <motion.footer initial={{y: 40, opacity: 0}} whileInView={{y:0, opacity: 1}} viewport={{amount: 0.2, once: true }} className="footer">
     
     <div className=" gap-1 flex flex-col justify-start items-start">

            <Image className=" " src="/only.png" width={120} height={200} alt="Only Word" />
            <motion.h1 style={{fontSize: "3em", fontWeight: "900", textTransform: "uppercase"}} initial={{x: -100}} whileInView={{x: 0}} className="text-[#d4af37]"> Fly  </motion.h1>
             
            <motion.div initial={{y:60, opacity: 0}} whileInView={{y: 0, opacity: 1}}>
                
                <Image className="" src="/shit_pic.png" width={100} height={200} alt="Shit Word" />

            </motion.div>

     </div>
     
      <div className="footer-container">
        
        {/* Left Section — Shop */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-6 text-[#D4AF37] uppercase tracking-wide">
            Shop
          </h3>
          <ul className="space-y-3 flex flex-col gap-2 text-sm uppercase text-gray-300">
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/">Candles</Link>
                </li>
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/">Glass Photo Albums</Link>
                </li>
                <li  className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <span>All Products</span>
                </li>
            </ul>
        </div>

        {/* Right Section —  */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-6 text-[#D4AF37] uppercase tracking-wide">
            Info
          </h3>
          <ul className="space-y-3 flex flex-col gap-2 text-sm uppercase text-gray-300">
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/">The Story</Link>
                </li>
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/">Contact</Link>
                </li>
                <li  className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <span>FAQ</span>
                </li>
                <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                    <Link href="/blog">Blog</Link>
                </li>
               
            </ul>
         

        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-6 text-[#D4AF37] uppercase tracking-wide">
            Policies
          </h3>
            <ul className="space-y-3 flex flex-col gap-2 text-sm uppercase text-gray-300">
                  <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                      <Link href="/">Shipping Policy</Link>
                  </li>
                  <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                      <Link href="/">Return Policy</Link>
                  </li>
                  <li  className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                      <span>Privacy Policy</span>
                  </li>
                  <li className="transition-colors duration-200 hover:text-[#72d0c8] active:text-[#72d0c8] cursor-pointer">
                      <Link href="/blog">Terms of Service</Link>
                  </li>
                
            </ul>
          

        </div>
      </div>

      {/* Divider + Footer bottom */}
      <div className="max-w-7xl absolute bottom-4 mx-auto border-t border-gray-700 mt-5 pt-6 flex flex-col sm:flex-row justify-between text-xs text-gray-500">
        <span>© {new Date().getFullYear()} HUMANNDESIGN. All rights reserved.</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
