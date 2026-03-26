import React from 'react'
import Viewer from '../../../providers/Viewer'
import styles from './page.module.css'


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

                <h1 className={styles.productTitle}> Glass Photo Album </h1>

                <p className={styles.productDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium eius blanditiis possimus neque ut totam. Qui hic quas aspernatur molestiae minima alias</p>
            </div>

            {/* 3D Scene */}
            <div className=' h-[300px] lg:absolute lg:right-0 lg:w-[400px] flex flex-col items-center justify-center'>
                <Viewer modelSelect='album' />
            </div>
        </div>
        <div>
          {/* Top */}
          <div>
              <h2>Items</h2>
              {/* Grid Selector */}
              <div>
                <span>grid</span>
                <span>grid</span>

              </div>
          </div>
          {/* Bottom */}
          <div>
            <span>Shop Open Soon</span>
          </div>
         
        </div>
      </main>
    );
  }