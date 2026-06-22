import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { palette } from "../config/brand";

/**
 * Slow, ghostly wireframe icosahedron ("spear") that adds depth and motion
 * behind the hero. Rotates continuously and reacts subtly to the pointer.
 */
export default function FloatingCrystal() {
  const ref = useRef();

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.x = t * 0.08 + pointer.y * 0.3;
    ref.current.rotation.y = t * 0.12 + pointer.x * 0.3;
    ref.current.position.y = Math.sin(t * 0.6) * 0.25;
  });

  return (
    <mesh ref={ref} scale={2.8}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial
        color={palette.violet}
        wireframe
        transparent
        opacity={0.16}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
