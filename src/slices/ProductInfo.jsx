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
        <div className='flex flex-col-reverse gap-12 items-center ' >

            <div className='flex flex-col gap-4 items-center justify-center'>

                <h2>About The Brand</h2>

                <div className='p-4'>
                 
                    <div className='border flex flex-col items-center justify-center text-center'> 
                        <p className='text-white'>Only Fly Shit was built on one belief: create value, no matter the circumstance.
After being let go and facing everyday frustrations of feeling stuck, founder Hunter Mann made a decision — instead of waiting for the next opportunity, he would create it. By focusing on elevating himself through creating and providing value to others, he turned adversity into direction.
Only Fly Shit represents that mindset. It’s about creating . Elevating above your situation. And a drive to progress forward.</p>
                    </div>


                </div>
                {/* <PriceSelector /> */}
                

            </div>

            <div className=''>
                <Image src='/logo.PNG' width={300} height={300} alt='Only Fly Shit Alternative Logo' />

               
            </div>



        </div>
        
        
        </>
    )
}