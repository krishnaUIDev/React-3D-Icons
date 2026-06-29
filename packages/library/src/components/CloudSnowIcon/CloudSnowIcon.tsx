import { SharedWrapper } from "../SharedWrapper";
import { CloudSnowIconProps } from "./types";

export function CloudSnowIcon(props: CloudSnowIconProps) {
  return (
    <SharedWrapper iconId="cloudsnow" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0.1, 0]}>
          
          {/* Cloud Body */}
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

          {/* Falling Snowballs */}
          <group position={[0, -0.22, 0.1]}>
            {/* Left snowflake sphere */}
            <mesh position={[-0.18, 0.02, 0]} castShadow>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#e2e8f0"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#e2e8f0"}
                emissiveIntensity={1.2}
              />
            </mesh>
            
            {/* Center snowflake sphere */}
            <mesh position={[0.02, -0.08, 0.02]} castShadow>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#e2e8f0"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#e2e8f0"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Right snowflake sphere */}
            <mesh position={[0.2, -0.01, -0.02]} castShadow>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#e2e8f0"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#e2e8f0"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
