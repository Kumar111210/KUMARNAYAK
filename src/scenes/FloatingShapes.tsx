import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.3}
          wireframe={false}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.6;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: 'transparent', position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#a855f7" intensity={1} />

      <FloatingCube position={[-4, 2, -2]} color="#00d4ff" scale={0.5} />
      <FloatingCube position={[3, -1, -3]} color="#a855f7" scale={0.4} />
      <FloatingOctahedron position={[4, 3, -1]} color="#00d4ff" scale={0.6} />
      <FloatingOctahedron position={[-3, -2, -2]} color="#ec4899" scale={0.5} />
      <FloatingCube position={[0, -3, -1]} color="#06b6d4" scale={0.3} />
    </Canvas>
  );
}
