import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/diamond.glb')
  return (
    <group rotate={[0, Math.PI / 2, 0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCone1_DiamondOutside_0.geometry}
        material={materials.DiamondOutside}
      />
    </group>
  )
}

useGLTF.preload('/diamond.glb')