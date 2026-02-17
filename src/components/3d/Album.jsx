import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelAlbum(props) {
  const { nodes, materials } = useGLTF('/glassalbum_2.glb')
  return (
    <group position={[0, -0.5, 0]} rotation={[0, 4.5, -0.1]} scale={[0.5, 0.5, 0.5]} {...props} dispose={null}>
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
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PlayTrack.geometry}
        material={materials['Material.002']}
        position={[0.07, 1.413, 0.087]}
        rotation={[0, 0, -1.361]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SongName.geometry}
          material={materials['Material.003']}
          position={[-0.261, 0.056, 0]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/glassalbum_2.glb')