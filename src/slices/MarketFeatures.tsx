import React from 'react'
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";

export default function MarketFeatures() {
  return (
    <section style={{ backgroundColor: "#352c0f", padding: "40px" }}>
      <div
      className='feature-card-container'
       
      >
        <div className='feature-card'>
          <FaHome className='feature-icon' size={24} />
          <p className='w-20 text-center'>Secure Checkout</p>
        </div>

        <div className='feature-card'>
          <FaUser className='feature-icon' size={24} />
          <p className='w-20 text-center'>Free Shipping over $50</p>
        </div>

        <div className='feature-card'>
          <FaCog className='feature-icon' size={24} />
          <p className='w-20 text-center'>Easy Returns</p>
        </div>

        <div className='feature-card'>
          <FaEnvelope className='feature-icon' size={24} />
          <p className='w-20 text-center'>Real Support</p>
        </div>
      </div>
    </section>
  );
}