import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import '../css/ProductInfo.css'

import  PriceSelector  from '@/components/ui/price-selector'


export default function ProductInfo() {


    const prices = [
        {
            size: "8x10",
            amount: "19.99"
        }
    ]


    return (
        <>
        <section className='flex flex-col-reverse lg:flex-row-reverse lg:justify-between lg:gap-48 gap-12 items-center ' >

            <div>
            <Image style={{borderRadius: "20px"
            }} width={300} height={300} alt='Only Fly Shit Brand Logo' src="/logo.png" />

            </div>
            <div className='flex flex-col gap-4 items-center justify-center'>
                
                <span className='uppercase text-sm text-[#d4af37]'>About The Brand</span>
                <h2>Create Value, No matter the circumstance</h2>

                <div className='p-4'>
                 
                    <div className='about-text'> 
                        <p className=''>
                                After being let go and facing the everyday frustrations of feeling stuck, founder Hunter Mann made a decision — instead of waiting for the next opportunity, he would create it. By focusing on elevating himself through creating and providing value for others, he turned adversity into direction.
                        </p>

                        <p className=''>
                            <span className='font-extrabold'>Only Fly Shit</span> represents a mindset. It’s about creating . Elevating above your situation. And a drive to progress forward.

                        </p>


                    </div>


                </div>
                <div id='sig' className='border-t-2 border-gray-500 flex items-center gap-3 mt-24'>
                    <div className='w-12.5 h-12.5 relative overflow-hidden block border rounded-[100%] '>
                         <Image src="/logo.png" fill alt="Brand logo" style={{ objectFit: 'cover' }} />

                    </div>
                    <div>
                        <span className="name">Hunter Mann</span>
                    </div>
                </div>
                {/* <PriceSelector /> */}
                

            </div>

            {/* <div className=''>
                <Image src='/logo.PNG' width={300} height={300} alt='Only Fly Shit Alternative Logo' />

               
            </div> */}



        </section>
        
        
        </>
    )
}