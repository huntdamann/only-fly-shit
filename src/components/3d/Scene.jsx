"use client"
import { useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { MeshDistortMaterial, Text, useGLTF, Float, Environment, PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model} from './Album'
const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)
const SCENE_DELAY = 5000
const MyScene = ({section, second}) => {
  const [clicked, setClicked] = useState(false)

  const springs = useSpring({
    color: section ? '#569AFF' : '#ff6d6d',
  })
  const { position } = useSpring({
    to: {
      position: section ? [4, 0, 0] : second ? [-4, 0, 0] : [0, 0, 0],
      delay: SCENE_DELAY,

    },
    config: {
      mass: 10,
      tension: 200,
      friction: 100,
    },
  });

  const handleClick = () => setClicked(s => !s)

  return (
    <>
    
    <animated.mesh position={position} onClick={handleClick}>
      <sphereGeometry args={[1.5, 64, 32]} />
      <AnimatedMeshDistortMaterial
        speed={5}
        distort={0.5}
        color={springs.color}
      />
    </animated.mesh>
    </>
  )
}
const Box = () => {
    const { position } = useSpring({
      from: {
        position: [-5, 0, 0],
        delay: SCENE_DELAY,
      },
      to: {
        position: [5, 0, 0],
        delay: SCENE_DELAY,

      },
      loop: { reverse: true },
      config: {
        mass: 10,
        tension: 200,
        friction: 100,
      },
    });
  
    return (
      <animated.group position={position}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </animated.group>
    );
}



export default function Scene({sectionOneActive , sectionTwoActive}) {
  return (
    <Canvas>
      <ambientLight intensity={1.8} />
      <pointLight intensity={5} position={[0, 6, 0]} />
      
<PerformanceMonitor
        // Optional: Callback when performance improves (e.g., to increase detail)
        onIncline={() => console.log('Performance improved, maybe increase quality!')}
        // Optional: Callback when performance drops (e.g., to decrease detail)
        onDecline={() => console.log('Performance dropped, maybe lower quality!')}
      />
      
      <Float>

       <Model section={sectionOneActive} second={sectionTwoActive} />
       </Float>
       

       <Environment preset="city" />



    </Canvas>
  )
}