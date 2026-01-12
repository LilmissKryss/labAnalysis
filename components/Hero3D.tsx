import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Float, MeshDistortMaterial, Sphere, Box, Cylinder, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Vehicle = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle suspension bounce
      meshRef.current.position.y = -0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      // Slight lean forward/back
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Abstract SUV Body */}
      <RoundedBox args={[3.2, 1.2, 1.6]} radius={0.15} smoothness={4} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#1e3a8a" roughness={0.1} metalness={0.2} />
      </RoundedBox>
      
      {/* Cabin */}
      <RoundedBox args={[1.8, 0.8, 1.4]} radius={0.1} smoothness={4} position={[-0.2, 1.4, 0]}>
        <meshStandardMaterial color="#334155" opacity={0.7} transparent />
      </RoundedBox>

      {/* Wheels */}
      {[[-1, 0, 0.85], [1, 0, 0.85], [-1, 0, -0.85], [1, 0, -0.85]].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <Cylinder args={[0.35, 0.35, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#111" />
          </Cylinder>
          <Cylinder args={[0.2, 0.2, 0.32, 16]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#94a3b8" />
          </Cylinder>
        </group>
      ))}

      {/* Headlights */}
      <Box args={[0.1, 0.3, 0.4]} position={[1.6, 0.7, 0.5]}>
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
      </Box>
      <Box args={[0.1, 0.3, 0.4]} position={[1.6, 0.7, -0.5]}>
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
      </Box>
    </group>
  );
};

const Vial = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[1.8, 1.8, 0.5]}>
        {/* Cap */}
        <Cylinder args={[0.12, 0.12, 0.15, 32]} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#991b1b" />
        </Cylinder>
        {/* Glass Tube */}
        <Cylinder args={[0.1, 0.1, 0.8, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#fff" transparent opacity={0.4} />
        </Cylinder>
        {/* Sample Content */}
        <Cylinder args={[0.08, 0.08, 0.5, 32]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={0.5} />
        </Cylinder>
        {/* Soft Aura */}
        <Sphere args={[0.6, 32, 32]}>
          <MeshDistortMaterial color="#0d9488" speed={3} distort={0.5} transparent opacity={0.1} />
        </Sphere>
      </group>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-10, 20, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
      
      <group position={[0, -1, 0]}>
        <Vehicle />
        <Vial />
      </group>

      {/* Floor Grid */}
      <gridHelper args={[40, 20, 0x0d9488, 0xe2e8f0]} position={[0, -1.05, 0]} />
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 3, 10], fov: 35 }}>
        <Scene />
      </Canvas>
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-teal-50/30 rounded-full blur-[120px] -z-10" />
    </div>
  );
};

export default Hero3D;