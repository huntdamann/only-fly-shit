"use client"

import React from 'react'
import Image from 'next/image'
import  styles  from '../css/Preloader.module.css'
import { motion, AnimatePresence } from 'motion/react'


export function Preloader() {


    return (
        <AnimatePresence mode='wait'>
            <motion.section className={styles.preloaderContainer}>
                <Image className={styles.logo} src='/logo.PNG' width={100} height={100} alt='Preloader Image' />
            </motion.section>
        </AnimatePresence>
    )
}