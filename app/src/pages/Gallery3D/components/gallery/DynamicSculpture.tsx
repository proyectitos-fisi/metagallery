import { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DynamicSculptureProps {
  glbUrl: string;
  position: readonly [number, number, number];
  rotation: [number, number, number];
  scale?: readonly [number, number, number];
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
  const copiedModel = useMemo(() => model.clone(), [model])

  useFrame(() => {
    if (rotate && groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[position[0], position[1] + 1.9, position[2]]}
      rotation={rotation}
      scale={[.8, .8, .8]}
    >
      <primitive object={copiedModel} />
    </group>
  );
}
