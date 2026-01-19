import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

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
        <div className='flex border border-amber-300 w-full h-full'>

            <div className='w-1/2 border flex flex-col items-center justify-evenly p-4'>

                <h2>Capture the moment...</h2>

                <div className='p-4'>
                    <ul className='flex flex-col gap-5'>
                        <li className='flex gap-8'>
                        
                         <Image src="/heart.svg" width={30} height={100} alt='Heart Symbol' />
                         <span className=' w-[400px]'>
                         Customize each glass album with names, dates, and a meaningful phrase tied to the song that defines your special moment.
                         </span>
                        </li>
                        <li className='flex gap-8'>
                        
                         <Image src="/heart.svg" width={30} height={100} alt='Heart Symbol' />
                         <span className=' w-[400px]'>
                         Choose from Spotify, Apple, or SoundCloud-inspired designs—each with unique layouts and detailing that reflect the platform’s aesthetic.                         </span>
                        </li>
                        <li className='flex gap-8'>
                        
                        <Image src="/heart.svg" width={30} height={100} alt='Heart Symbol' />
                        <span className=' w-[400px]'>
                        Scan the engraved code to instantly play your song anytime, anywhere.
                        </span>
                        </li>
                        
                        
                    </ul>

                </div>
                <PriceSelector />
                
                <button className='border-2 p-2 rounded-sm w-[150px] border-red-400'>Get Now</button>

            </div>

            <div className='w-1/2 flex items-center justify-center'>

                <span>Image goes Here </span>
               
            </div>



        </div>
        
        
        </>
    )
}