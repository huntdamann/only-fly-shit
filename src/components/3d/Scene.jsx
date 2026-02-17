"use client"
import { useState, useRef } from 'react'
import { useSpring, animated, useScroll } from '@react-spring/three'
import { MeshDistortMaterial, Text, useGLTF, Float, Environment, PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ModelAlbum  from './Album'
import  ModelCandle  from './Candle'
import { ModelCube } from './Cube'



const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)
const SCENE_DELAY = 5000


const MyScene = ({activeSection}) => {

  const meshRef = useRef()

  return (
    
 
    <>
      {activeSection === 'two' && <ModelAlbum />}
      {activeSection === 'one' && <ModelCandle />}
      {activeSection === 'three' && <ModelCube/>}

      
    </>

  )
}




export default function Scene({ active }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 20 }} >
      <ambientLight intensity={1.8} />
      <pointLight intensity={5} position={[0, 6, 0]} />
      
    {/* <PerformanceMonitor
        // Optional: Callback when performance improves (e.g., to increase detail)
        onIncline={() => console.log('Performance improved, maybe increase quality!')}
        // Optional: Callback when performance drops (e.g., to decrease detail)
        onDecline={() => console.log('Performance dropped, maybe lower quality!')}
      />
       */}
      
      <Float>
          <MyScene activeSection={active} />

      </Float>
       
       
       <Environment preset="city" />



    </Canvas>
  )
}