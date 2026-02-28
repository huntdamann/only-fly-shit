"use client";
import React, { useState, useEffect } from "react";
import Scene from "@/components/3d/Scene";
import ProductInfo from "@/slices/ProductInfo";
import Preorder from "@/components/ui/Preorder";
import Header from "@/slices/Header";
import Image from 'next/image'
import AnimatedWord from "@/components/ui/AnimatedWord"
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "motion/react";
import { Preloader } from "@/slices/Preloader";
import { Link, Element } from 'react-scroll';
import Tooltip from "@/components/Tooltip";


export default function Home() {


  const [enter, setEnter ] = useState(false)
  //Container Menu Open Controller
  const [isOpen, setIsOpen ] = useState(true)
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
    threshold: 0.75,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
  });

  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    threshold: 0.75,
  });
  
  const { ref: cubeRef, inView: cubeSectionInView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (sectionOneInView) setActiveSection('one')
    else if (cubeSectionInView) setActiveSection('three')
    else if (sectionTwoInView) setActiveSection('two')
    else setActiveSection(null)
  }, [sectionOneInView, aboutInView, sectionTwoInView])


  const handleEnter = () => {
    setEnter(true)
  }
 

  return (
    <>
      <Header />
      <main  className="scene-container">
        <Scene
          active={activeSection}
        />
      </main>

      <section className="hero-section">

        <div className="hero-cta">
        <div className="flex items-center gap-4">
          <Tooltip text="Create Your Reality">
            <span className="tagline-word">Create</span>

          </Tooltip>
          <div className="w-px h-4" style={{ backgroundColor: '#D4AF37' }} />
          <Tooltip text="Elevate Above Your Situation">

          <span className="tagline-word">Elevate</span>

          </Tooltip>

          <div className="w-px h-4" style={{ backgroundColor: '#D4AF37' }} />
          <Tooltip text="Progress forward">
          <span className="tagline-word">Progress</span>

          </Tooltip>
        </div>
       
        <Link to="section1" smooth={true} duration={500}>

          <button className="generic-button">
            Scroll Down
          </button>
        </Link>
          
        
        </div>
      </section>


      <Element name="section1">

      <section ref={aboutRef} className="about-product">

        <ProductInfo />
      
      </section>
      </Element>

      <Element name="section2">


      <section ref={sectionOneRef} className="section-1">

        <AnimatePresence>

          {isOpen && (

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="content-container"
            >
            <div className="container">
            {/* <button onClick={() => setIsOpen(false)}>exit</button> */}
            <div className="flex flex-col gap-5">
                <h2 className="">Hand-Crafted Candles</h2>
              </div>
              <div style={{fontSize: "30px"}} className="w-[200px] h-[200px] flex flex-col items-center justify-center rounded-md relative ">
              <span>{currentScent.name}</span>
              </div>
              
              <p className="w-[225px]"> 
              {currentScent.description}           
              </p>

              <div className="flex gap-4">
                <button className="generic-button button-custo">Available Soon</button>
              </div>
            </div>
            </motion.div>



          )}
         
        </AnimatePresence>

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
              <h2 className="">Glass/Vinyl Albums</h2>
            </div>
            
            
           <ul className='flex mt-10 flex-col gap-5'>
                        <li className='flex gap-8'>
                        
                         <p className=' w-[200px]  text-[0.8rem]'>
                         Customize each album with names, dates, and a meaningful timestamp tied to the song that defines your special moment.
                         </p>
                        </li>
                        <li className='flex gap-8'>
                        
                         <p className=' w-[200px] text-[0.8rem]'>
                         Choose from Spotify, Apple, or SoundCloud-inspired designs— each with unique layouts and detailing that reflect the platform’s aesthetic.                         </p>
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
