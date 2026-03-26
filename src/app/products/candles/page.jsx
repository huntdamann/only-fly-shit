import React from 'react'
import Viewer from '../../../providers/Viewer'
import styles from './page.module.css'
import { CiGrid41, CiGrid2H } from "react-icons/ci";


export const metadata = {
    title: "Glass Photo Album",
    description: "Get in touch with us",
  };
  
  export default function Home() {
    return (
      <main className="min-h-screen text-white  px-6 py-12">
        <div className={styles.productHeading}>
            {/* Product Name and Description */}
            <div className='p-3 flex flex-col gap-2 '>

                <h1 className={styles.productTitle}> Hand-Crafted Candles </h1>

                <p className={styles.productDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium eius blanditiis possimus neque ut totam. Qui hic quas aspernatur molestiae minima alias</p>
            </div>

            {/* 3D Scene */}
            <div className=' h-[300px] lg:absolute lg:right-0 lg:w-[400px] flex flex-col items-center justify-center'>
                <Viewer modelSelect='candle' />
            </div>
        </div>
        <div className='h-[80vh]'>
          {/* Top */}
          <div className={styles.top}>
              <h2 id='items' className={styles.items}>Items</h2>
              {/* Grid Selector */}
              <div className='flex gap-3'>
                <div className={styles.button}>
                  <CiGrid41 size={24} />

                </div>
                <div className={styles.button}>
                  <CiGrid2H size={24} />

                </div>

              </div>
          </div>
          {/* Bottom */}
          <div className=' flex flex-col items-center justify-center h-full'>
            <span className={styles.timedDrop}>Shop Open Soon</span>
          </div>
         
        </div>
      </main>
    );
  }