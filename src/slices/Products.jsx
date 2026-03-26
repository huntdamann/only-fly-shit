import React from 'react'
import { motion } from 'motion/react'
import "../css/Products.css"
import { FaArrowRight } from 'react-icons/fa'
import Viewer from '../providers/Viewer'

const useDesktopAnimation = (props) => {
  if (typeof window === 'undefined') return {}
  return window.innerWidth >= 1024 ? props : {}
}

export default function Products() {

  const prices = [{ size: "8x10", amount: "19.99" }]

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }

  const cardVariants = {
    hidden: (custom) => ({ opacity: 0, x: custom?.x ?? 0, y: custom?.y ?? 0 }),
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const containerProps = useDesktopAnimation({
    variants: containerVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.6 }
  })

  const el1Props = useDesktopAnimation({ variants: cardVariants, custom: { y: -50 } })
  const el2Props = useDesktopAnimation({ variants: cardVariants, custom: { x: 50 } })
  const el3Props = useDesktopAnimation({ variants: cardVariants, custom: { x: -50 } })
  const el4Props = useDesktopAnimation({ variants: cardVariants, custom: { y: 50 } })

  return (
    <>
      <section className='whole-section'>
        <div className='flex flex-col lg:gap-10 w-full'>

          <div className='flex flex-col lg:flex-row lg:justify-evenly gap-8'>
            <div className='flex pt-8 gap-0 flex-col'>
              <span className='uppercase text-sm text-[#d4af37]'>The collection</span>
              <h2 className='section-title'>Curated Drops</h2>
            </div>
            <div className='flex'>
              <button className='flex transition-all ease-in duration-200 flex-end hover:text-white text-gray-400 cursor-pointer justify-center items-center gap-2 uppercase self-center pb-2 underline'>
                <span>View All Products</span>
                <FaArrowRight size={15} />
              </button>
            </div>
          </div>

          <motion.div className='product-section' {...containerProps}>
            <motion.div {...el1Props} className='product-container el-1'>
              <Viewer modelSelect='album' />
              <span className='product-container-title'>New Drop</span>
              <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />
            </motion.div>

            <motion.a href='/products/candles' {...el2Props} className='product-container el-2'>
              <span className='product-container-title'>Candles</span>
              <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />
            </motion.a>

            <motion.a href='/products/glassalbum' {...el3Props} className='product-container el-3'>
              <span className='product-container-title adjust'>Glass Photo Albums</span>
              <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />
            </motion.a>

            <motion.div {...el4Props} className='product-container el-4'>
              <span className='product-container-title'>More</span>
              <div className='w-full absolute bottom-0 h-24 bg-[#352c0f] z-10' />
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  )
}