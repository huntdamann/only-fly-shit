"use client"
import { useState, useRef, useEffect } from 'react'
import { useSpring, animated, useScroll } from '@react-spring/three'
import { MeshDistortMaterial, Text, useGLTF, Float, Environment, PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import ModelAlbum  from './Album'
import  ModelCandle  from './Candle'
import { ModelCube } from './Cube'



const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)
const SCENE_DELAY = 5000


const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768)

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return isDesktop
}

const MyScene = ({activeSection}) => {

  const meshRef = useRef()
  const isDesktop = useIsDesktop()

  const { position } = useSpring({
    position: isDesktop ? (activeSection ? [0.8,0,0 ] : [2,0,0]) : [0, 0, 0] ,
    config: { mass: 1, tension: 170, friction: 26 }, // spring feel
  })

  return (
    
 
    <>
       <animated.group position={position}>
        {activeSection === 'two' && <ModelAlbum />}
        {activeSection === 'one' && <ModelCandle />}
        {activeSection === 'three' && <ModelCube />}
      </animated.group>

      
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