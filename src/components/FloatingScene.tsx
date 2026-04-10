import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const GraduationCap = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={ref} position={position}>
        <mesh><boxGeometry args={[1.8, 0.08, 1.8]} /><meshStandardMaterial color="#d4a017" metalness={0.6} roughness={0.3} /></mesh>
        <mesh position={[0, 0.1, 0]}><cylinderGeometry args={[0.08, 0.08, 0.15, 8]} /><meshStandardMaterial color="#d4a017" metalness={0.8} roughness={0.2} /></mesh>
        <mesh position={[0, -0.3, 0]}><cylinderGeometry args={[0.5, 0.6, 0.5, 6]} /><meshStandardMaterial color="#1a3a5c" metalness={0.3} roughness={0.5} /></mesh>
      </group>
    </Float>
  );
};

const Globe = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.3; });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial color="#3b82f6" speed={2} distort={0.15} metalness={0.4} roughness={0.3} transparent opacity={0.85} />
      </mesh>
    </Float>
  );
};

const Book = ({ position }: { position: [number, number, number] }) => (
  <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
    <group position={position} rotation={[0.2, 0.5, 0.1]}>
      <mesh><boxGeometry args={[1, 0.12, 1.4]} /><meshStandardMaterial color="#d4a017" metalness={0.3} roughness={0.5} /></mesh>
      <mesh position={[0, 0.08, 0]}><boxGeometry args={[0.95, 0.05, 1.35]} /><meshStandardMaterial color="#f5f5f0" roughness={0.8} /></mesh>
    </group>
  </Float>
);

const FloatingParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 50;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  useFrame((state) => { if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.05; });

  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} /></bufferGeometry>
      <pointsMaterial size={0.04} color="#d4a017" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const FloatingScene = () => (
  <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full">
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} color="#fff8e7" />
    <pointLight position={[-3, 2, 2]} intensity={0.8} color="#d4a017" />
    <pointLight position={[3, -2, -2]} intensity={0.5} color="#3b82f6" />
    <GraduationCap position={[0, 1.2, 0]} />
    <Globe position={[-1.8, -0.5, 0.5]} />
    <Book position={[1.8, -0.8, -0.5]} />
    <FloatingParticles />
  </Canvas>
);

export default FloatingScene;
