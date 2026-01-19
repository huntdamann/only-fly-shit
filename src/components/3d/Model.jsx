import React, { useRef } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva';
import { useSpring, animated } from '@react-spring/three'

const SCENE_DELAY = 5000

export function Model({ section, second}) {
  const { nodes } = useGLTF('/album.glb')
  // const config = useControls({
  //   meshPhysicalMaterial: false,
  //   transmissionSampler: false,
  //   backside: false,
  //   samples: { value: 10, min: 1, max: 32, step: 1 },
  //   resolution: { value: 256, min: 256, max: 2048, step: 256 },
  //   transmission: { value: 1, min: 0, max: 1 },
  //   roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
  //   thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
  //   ior: { value: 2.66, min: 1, max: 5, step: 0.01 },
  //   chromaticAberration: { value: 0.06, min: 0, max: 1 },
  //   anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
  //   distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
  //   temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
  //   clearcoat: { value: 1, min: 0, max: 1 },
  //   attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
  //   attenuationColor: '#ffffff',
  //   color: '#c9ffa1',
  //   bg: '#839681'
  // })
  const { position } = useSpring({
    to: {
      position: section ? [4.113, 0.676, 0.049] : second ? [-4.113, 0.676, 0.049] : [-0.113, 0.676, 0.049],
      delay: SCENE_DELAY,

    },
    config: {
      mass: 10,
      tension: 200,
      friction: 100,
    },
  });



  return (
    
    <group  dispose={null}>
      
      <animated.mesh
        castShadow
        geometry={nodes['Test-Plaque'].geometry}
        position={position}
        rotation={[0, -1.5, -1.379]}
        scale={[1, 1, 0.7]}
      >
        <MeshTransmissionMaterial transmission={1} ior={2.66} resolution={256} thickness={3.5} />
      </animated.mesh>
    </group>

  )
}

useGLTF.preload('/album.glb')