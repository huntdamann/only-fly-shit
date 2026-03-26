import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import "../css/Products.css"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FaArrowRight } from 'react-icons/fa'
import Viewer  from '../providers/Viewer'


export default function Products() {


    const prices = [
        {
            size: "8x10",
            amount: "19.99"
        }
    ]


        const containerVariants = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.15
            }
        }
        }

        const cardVariants = {
        hidden: (custom) => ({
            opacity: 0,
            x: custom?.x ?? 0,
            y: custom?.y ?? 0
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
        }

    return (
        <>
        <section className='whole-section' >
            <div className=' flex flex-col lg:gap-10  w-full'>

                <div className='flex flex-col lg:flex-row lg:justify-evenly gap-8'>
                    <div className='flex pt-8  gap-0 flex-col'>


                        <span className='uppercase text-sm text-[#d4af37]'>
                            The collection
                        </span>
                        <h2 className='section-title'>
                            Curated Drops
                        </h2>
                        
                    </div>
                    <div className='flex'>
                        <button className='flex transition-all ease-in duration-200 flex-end hover:text-white text-gray-400 cursor-pointer justify-center items-center gap-2 uppercase self-center pb-2 underline'>
                            <span>View All Products</span>
                            <FaArrowRight size={15} />
                        </button>


                    </div>


                 </div>


                 {/* Product Selector For User */}
                 <motion.div
                    className='product-section'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <motion.div variants={cardVariants} custom={{ y: -50 }} className='product-container el-1'>
                        <Viewer modelSelect='album' />
                        <span className='product-container-title'>New Drop</span>
                        <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />

                    </motion.div>

                    <motion.a href='/products/candle' variants={cardVariants} custom={{ x: 50 }} className='product-container el-2'>
                        <span className='product-container-title'>Candles</span>
                        <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />
                    </motion.a>

                    <motion.a href='/products/glassalbum' variants={cardVariants} custom={{ x: -50 }} className='product-container el-3'>
                        <span className='product-container-title adjust'>Glass Photo Albums</span>
                        <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />
                    </motion.a>

                    <motion.div variants={cardVariants} custom={{ y: 50 }} className='product-container el-4'>
                        <span className='product-container-title'>More</span>
                        <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />
                    </motion.div>
                </motion.div>
              


            </div>
            



        </section>
        
        
        </>
    )
}