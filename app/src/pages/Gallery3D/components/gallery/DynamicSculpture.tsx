import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DynamicSculptureProps {
  glbUrl: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
  rotate?: boolean;
}

export function DynamicSculpture({
  glbUrl,
  position,
  rotation,
  scale = [1, 1, 1],
  rotate = false,
}: DynamicSculptureProps) {
  const { scene: model } = useGLTF(glbUrl);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (rotate && groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <primitive object={model} />
    </group>
  );
}