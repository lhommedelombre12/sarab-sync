import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus, Sphere, Box } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingTorus = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={ref} args={[1.2, 0.4, 32, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FF4D7D"
          emissive="#FF4D7D"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
    </Float>
  );
};

const FloatingBlob = () => {
  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere args={[0.6, 64, 64]} position={[2, 1, -1]}>
        <MeshDistortMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.6}
          distort={0.4}
          speed={3}
        />
      </Sphere>
    </Float>
  );
};

const FloatingCube = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Box ref={ref} args={[0.7, 0.7, 0.7]} position={[-1.8, -0.8, 0.5]}>
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#3B82F6"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.9}
        />
      </Box>
    </Float>
  );
};

const SmallSphere = ({ position, color }: { position: [number, number, number]; color: string }) => (
  <Float speed={4} floatIntensity={2}>
    <Sphere args={[0.15, 32, 32]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </Sphere>
  </Float>
);

const FloatingScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#FF4D7D" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#A855F7" />
      <spotLight position={[0, 5, 3]} intensity={0.8} color="#ffffff" />

      <FloatingTorus />
      <FloatingBlob />
      <FloatingCube />
      <SmallSphere position={[1.5, -1.5, 1]} color="#22D3EE" />
      <SmallSphere position={[-2, 1.5, -0.5]} color="#FF4D7D" />
      <SmallSphere position={[2.5, -0.5, 0.5]} color="#FBBF24" />
    </Canvas>
  );
};

export default FloatingScene;
