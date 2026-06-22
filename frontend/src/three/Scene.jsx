import ParticleField from "./ParticleField";
import FloatingCrystal from "./FloatingCrystal";

/**
 * Contents of the background canvas: the drifting brand particle cloud plus the
 * ghostly wireframe crystal ("spear") for depth and slow motion behind the hero.
 */
export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <ParticleField />
      <FloatingCrystal />
    </>
  );
}
