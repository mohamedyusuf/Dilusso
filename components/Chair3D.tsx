'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import * as THREE from 'three'

export default function Chair3D() {
  const chairRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (chairRef.current) {
      // Subtle floating animation
      chairRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={chairRef} position={[0, -0.5, 0]}>
      {/* Chair Base */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.1, 0.8]} />
        <meshStandardMaterial color="#8f7c5a" />
      </mesh>

      {/* Chair Back */}
      <mesh position={[0, 0.8, -0.35]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#a8956f" />
      </mesh>

      {/* Chair Seat */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.05, 0.8]} />
        <meshStandardMaterial color="#bcae8e" />
      </mesh>

      {/* Chair Legs */}
      {[
        [-0.35, 0, -0.35],
        [0.35, 0, -0.35],
        [-0.35, 0, 0.35],
        [0.35, 0, 0.35],
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 16]} />
          <meshStandardMaterial color="#625440" />
        </mesh>
      ))}

      {/* Decorative Cushion */}
      <mesh position={[0, 0.35, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.15, 0.7]} />
        <meshStandardMaterial color="#d4cbb3" />
      </mesh>
    </group>
  )
}

