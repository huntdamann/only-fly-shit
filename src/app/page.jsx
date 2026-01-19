"use client";
import React, { useState } from "react";
import Scene from "@/components/3d/Scene";
import ProductInfo from "@/slices/ProductInfo";
import Preorder from "@/components/ui/Preorder";
import Image from 'next/image'
import AnimatedWord from "@/components/ui/AnimatedWord"
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { Preloader } from "@/slices/Preloader";

export default function Home() {


  const [enter, setEnter ] = useState(false)

  const { ref: sectionOneRef, inView: sectionOneInView } = useInView({
    threshold: 0.5,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
  });

  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    threshold: 0.5,
  });
  
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
      <main style={{ opacity: aboutInView ? 0 : 1, transition: "opacity 0.5s ease"}} className="scene-container">
        <Scene
          sectionOneActive={sectionOneInView}
          sectionTwoActive={sectionTwoInView}
        />
      </main>

      <section className="hero-section">
        <div className="hero-bg" />
       <h1> Moment Of Love</h1>

        <div className="hero-cta">
          <span className="text-[1.5em]">Captured in music. Made to last forever.</span>
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScvwus4INP3WYvEDprTmcUoRZDUZyf4ZzPSNLB-Ra2ctR1LKA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="generic-button">
            Reserve Yours
          </button>
        </a>
        </div>
      </section>

      {/* <section ref={aboutRef} className="about-product">

        <ProductInfo />
      
      </section> */}

      {/* <section ref={sectionOneRef} className="section-1">
      <div className="basic-bg" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="content-container"
        >
          <div className="container">
            <div>
              <h2 className="">If This World Were Mine</h2>
              <span>Luther Vandross & Cheryl Lynn</span>
            </div>
            <div className="w-[200px] h-[200px] rounded-md relative ">
              <Image className="rounded-md" src="/luther.jpeg" alt="Album Cover" fill style={{objectFit: 'contain'}} />
            </div>
            
            <span className="w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error, ducimus odio recusandae explicabo exercitationem accusamus atque necessitatibus? Saepe, molestias placeat officia cumque optio facere. Possimus corporis nulla eius expedita.
            </span>

            <div className="flex gap-4">
              <button className="generic-button">Buy</button>
              <button className="generic-button button-custo">Customize Your Own</button>
            </div>
           

          </div>
        </motion.div>
      </section> */}

      {/* <section ref={sectionTwoRef} className="section-2">
      <div className="basic-bg" />
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{amount: 0.6}}
          className="content-container two"
        >
          <div className="container">
            <div>
              <h2 className="">Ribbon In The Sky</h2>
              <span>Stevie Wonder</span>
            </div>
            
            <span className="w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error, ducimus odio recusandae explicabo exercitationem accusamus atque necessitatibus? Saepe, molestias placeat officia cumque optio facere. Possimus corporis nulla eius expedita.
            </span>

            <div className="flex gap-4">
              <button className="generic-button">Buy</button>
              <button className="generic-button button-custo">Customize Your Own</button>
            </div>
           

          </div>
        </motion.div>
      </section> */}

      {/* PreOrder Form */}
      {/* <Preorder /> */}
    </>
  );
}
