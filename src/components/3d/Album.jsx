import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/glassalbum.glb')
  return (
    <group {...props} rotation={[-0.1,-1.5,0]} position={[0, -5, 0]} scale={[3.1, 3.1, 3.1]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Test-Plaque'].geometry}
        material={materials['Glass.001']}
        position={[-0.144, 1.765, 0.094]}
        rotation={[0, 0, -1.379]}
        scale={[0.671, 0.671, 0.523]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AlbumPhoto.geometry}
        material={materials['Material.001']}
        position={[-0.049, 2.093, 0.082]}
        rotation={[0, 0, -1.361]}
        scale={[0.257, 0.158, 0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SongName.geometry}
        material={materials['Material.003']}
        position={[0.07, 1.681, 0.087]}
        rotation={[0, 0, -1.361]}
        scale={[0.184, 0.14, 0.43]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PlayTrack.geometry}
        material={materials['Material.002']}
        position={[0.07, 1.413, 0.087]}
        rotation={[0, 0, -1.361]}
        scale={[0.111, 0.131, 0.43]}
      />
    </group>
  )
}

useGLTF.preload('/glassalbum.glb')