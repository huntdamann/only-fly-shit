"use client";
import React, { useState, useEffect } from "react";
import Scene from "@/components/3d/Scene";
import ProductInfo from "@/slices/ProductInfo";
import Preorder from "@/components/ui/Preorder";
import Header from "@/slices/Header";
import Image from 'next/image'
import AnimatedWord from "@/components/ui/AnimatedWord"
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { Preloader } from "@/slices/Preloader";
import { Link, Element } from 'react-scroll';


export default function Home() {


  const [enter, setEnter ] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  // Track current scent index
  const [currentIndex, setCurrentIndex] = useState(0);

  const scents = [
    {
      name: "CREATE",
      description: "The Create scent is made to spark creativity. A balanced scent meant to quiet the noise, open the mind, and make room for ideas to form."
    },
    {
      name: "ELEVATE",
      description: "The Elevate scent helps you concentrate and stay on task. A crisp blend designed to sharpen the mind and enhance productivity."
    },
    {
      name: "PROGRESS",
      description: "The Progress scent promotes calmness and tranquility. A soothing aroma crafted to ease tension and create peaceful moments."
    },
   
  ];
  // Auto-cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scents.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [scents.length]);

  const currentScent = scents[currentIndex];



  const { ref: sectionOneRef, inView: sectionOneInView } = useInView({
    threshold: 0.5,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
  });

  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    threshold: 0.5,
  });
  
  const { ref: cubeRef, inView: cubeSectionInView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (sectionOneInView) setActiveSection('one')
    else if (cubeSectionInView) setActiveSection('three')
    else if (sectionTwoInView) setActiveSection('two')
  }, [sectionOneInView, aboutInView, sectionTwoInView])


  const handleEnter = () => {
    setEnter(true)
  }

  return (
    <>
      {/* <motion.section initial={{opacity: 1}} animate={{opacity: enter ? 0 : 1}} className="enter-screen">
       
        <div className="flex flex-col"> 

         <button onClick={handleEnter} className="generic-button">Enter</button>
          <AnimatedWord text={"Capture The Moment"} />

        </div>

      </motion.section> */}
      {/* <header className="header">
        <ul>
          <li>Products</li>
          <li>Products</li>
          <li>Products</li>
          <li>Products</li>

          
        </ul>

      </header> */}
      <Header />
      <main  className="scene-container">
        <Scene
          active={activeSection}
        />
      </main>

      <section className="hero-section">
       <h1> Only Fly Shit </h1>

        <div className="hero-cta">
          <ul>
            <li>Create</li>
            <li>Elevate</li>
            <li>Progress</li>


          </ul>
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScvwus4INP3WYvEDprTmcUoRZDUZyf4ZzPSNLB-Ra2ctR1LKA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Link to="section1" smooth={true} duration={500}>

          <button className="generic-button">
            Scroll Down
          </button>
          </Link>
          
        </a>
        </div>
      </section>


      <Element name="section1">

      <section ref={aboutRef} className="about-product">

        <ProductInfo />
      
      </section>
      </Element>

      <Element name="section2">


      <section ref={sectionOneRef} className="section-1">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="content-container"
        >
          <div className="container">
            <div className="flex flex-col gap-5">
              <h2 className="">Hand-Crafted Candles</h2>
            </div>
            <div style={{fontSize: "30px"}} className="w-[200px] h-[200px] flex flex-col items-center justify-center border rounded-md relative ">
             <span>{currentScent.name}</span>
            </div>
            
            <p className="w-[225px]"> 
            {currentScent.description}           
             </p>

            <div className="flex gap-4">
              <button className="generic-button button-custo">Coming Soon</button>
            </div>
           

          </div>
        </motion.div>
      </section>

      </Element>

      <Element name="section3">

      <section ref={sectionTwoRef} className="section-2">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="content-container"
        >
          <div className="container">
            <div className="mb-6">
              <h2 className="">Glass Albums</h2>
            </div>
            
            
           <ul className='flex mt-10 flex-col gap-5'>
                        <li className='flex gap-8'>
                        
                         <p className=' w-[200px]  text-[0.8rem]'>
                         Customize each glass album with names, dates, and a meaningful phrase tied to the song that defines your special moment.
                         </p>
                        </li>
                        <li className='flex gap-8'>
                        
                         <p className=' w-[200px] text-[0.8rem]'>
                         Choose from Spotify, Apple, or SoundCloud-inspired designs—each with unique layouts and detailing that reflect the platform’s aesthetic.                         </p>
                        </li>
                        <li className='flex gap-8'>
                        
                       
                        </li>
                        
                        
           </ul> 

            <div className="flex gap-4">
              <button className="generic-button button-custo">Reserve Yours</button>
            </div>
           

          </div>
        </motion.div>
      </section>
      </Element>

      {/* <section ref={cubeRef} className="section-3">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="content-container"
        >
          <div className="container">
            <div>
              <h2 className="">Custom Cubes</h2>
            </div>
            
              <span>Personalized cubes that challenge your mind while celebrating what matters most to you.</span>
            
          

            <div className="flex gap-4">
              <button className="generic-button button-custo">Reserve Yours</button>
            </div>
           

          </div>
        </motion.div>
      </section> */}

     

      {/* PreOrder Form */}
      {/* <Preorder /> */}
    </>
  );
}
