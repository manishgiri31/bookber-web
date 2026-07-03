"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 4 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    ref.current.rotation.y = t * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E53935"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrb({ position, color, scale }: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + position[0]) * 0.15;
    ref.current.position.x = position[0] + Math.cos(t * 0.5 + position[2]) * 0.1;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#E53935" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3B82F6" />
        <Suspense fallback={null}>
          <Particles />
          <FloatingOrb position={[2.5, 0.5, -2]} color="#E53935" scale={0.8} />
          <FloatingOrb position={[-2.5, -0.5, -3]} color="#3B82F6" scale={0.6} />
          <FloatingOrb position={[0, 2, -4]} color="#8B5CF6" scale={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
