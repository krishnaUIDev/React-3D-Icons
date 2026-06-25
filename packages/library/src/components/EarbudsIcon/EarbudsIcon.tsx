import { SharedWrapper } from "../SharedWrapper";
import { EarbudsIconProps } from "./types";

export function EarbudsIcon(props: EarbudsIconProps) {
  return (
    <SharedWrapper iconId="earbuds" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, 0.05]} position={[0, 0, 0]}>
          
          {/* Charging Case Lower Base Body */}
          <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
            <boxGeometry args={[0.24, 0.18, 0.16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Inset Inner Deck (Chamber slots area) */}
          <mesh position={[0, 0.031, 0]} castShadow>
            <boxGeometry args={[0.22, 0.008, 0.14]} />
            <meshStandardMaterial roughness={0.3} metalness={0.1} color="#0f172a" />
          </mesh>

          {/* Case Open Hinge Connection */}
          <mesh position={[0, 0.03, -0.076]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.012, 0.012, 0.16, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Open Top Lid (Tilted back 110 degrees) */}
          <mesh position={[0, 0.1, -0.09]} rotation={[-1.6, 0, 0]} castShadow>
            <boxGeometry args={[0.24, 0.06, 0.16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Glowing Status LED Indicator Light */}
          <mesh position={[0, -0.02, 0.082]} castShadow>
            <sphereGeometry args={[0.008, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Twin Earbuds (Left & Right nested inside charging slots) */}
          
          {/* Left Earbud */}
          <group position={[-0.05, 0.04, 0.01]}>
            {/* Cylindrical stem pointing downwards inside case */}
            <mesh position={[0, -0.03, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.06, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Spherical bulbous earpiece head */}
            <mesh position={[0.006, 0.008, 0]} castShadow>
              <sphereGeometry args={[0.024, 16, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Silicone rubber eartip (Glowing color sleeve) */}
            <mesh position={[0.024, 0.008, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.02, 0.014, 0.016, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={0.6}
              />
            </mesh>
          </group>

          {/* Right Earbud */}
          <group position={[0.05, 0.04, 0.01]}>
            {/* Cylindrical stem pointing downwards inside case */}
            <mesh position={[0, -0.03, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.06, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Spherical bulbous earpiece head */}
            <mesh position={[-0.006, 0.008, 0]} castShadow>
              <sphereGeometry args={[0.024, 16, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Silicone rubber eartip (Glowing color sleeve) */}
            <mesh position={[-0.024, 0.008, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.02, 0.014, 0.016, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={0.6}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
