import { SharedWrapper } from "../SharedWrapper";
import { CloudRainIconProps } from "./types";

export function CloudRainIcon(props: CloudRainIconProps) {
  return (
    <SharedWrapper iconId="cloudrain" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0.1, 0]}>
          
          {/* Cloud Body (Overlapping physical spheres) */}
          <group position={[0, 0.1, 0]}>
            {/* Center Sphere */}
            <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
              <sphereGeometry args={[0.38, 32, 32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
                emissive={mat.emissive}
                emissiveIntensity={mat.emissiveIntensity * 0.4}
              />
            </mesh>

            {/* Left Sphere */}
            <mesh castShadow receiveShadow position={[-0.34, 0.05, 0]}>
              <sphereGeometry args={[0.27, 32, 32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>

            {/* Right Sphere */}
            <mesh castShadow receiveShadow position={[0.34, 0.08, 0]}>
              <sphereGeometry args={[0.29, 32, 32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>

            {/* Flat Bottom Filler Plate */}
            <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[0.68, 0.24, 0.46]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Falling Raindrops */}
          <group position={[0, -0.22, 0.1]}>
            {/* Left drop */}
            <mesh position={[-0.2, 0, 0]} rotation={[0.1, 0, -0.15]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
                emissiveIntensity={1.2}
              />
            </mesh>
            
            {/* Center drop (slightly lower) */}
            <mesh position={[0, -0.08, 0]} rotation={[0.1, 0, -0.15]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Right drop */}
            <mesh position={[0.2, -0.02, 0]} rotation={[0.1, 0, -0.15]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
