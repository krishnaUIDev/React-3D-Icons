import { SharedWrapper } from "../SharedWrapper";
import { PipeWrenchIconProps } from "./types";

export function PipeWrenchIcon(props: PipeWrenchIconProps) {
  return (
    <SharedWrapper iconId="pipewrench" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.1, Math.PI / 4]} position={[0, 0, 0]}>
          {/* Long main handle shaft */}
          <mesh position={[0, -0.06, 0]} castShadow>
            <boxGeometry args={[0.046, 0.44, 0.024]} />
            <meshStandardMaterial roughness={0.4} metalness={0.7} color="#475569" />
          </mesh>

          {/* Glowing/Accent Handle Sleeve */}
          <mesh position={[0, -0.14, 0]} castShadow>
            <boxGeometry args={[0.052, 0.24, 0.03]} />
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

          {/* Lower Jaw (integrated into head housing) */}
          <group position={[0, 0.16, 0]}>
            {/* Wrench head housing housing */}
            <mesh castShadow>
              <boxGeometry args={[0.06, 0.08, 0.04]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#334155" />
            </mesh>
            {/* Flat lower jaw plate */}
            <mesh position={[0.03, 0.02, 0]} castShadow>
              <boxGeometry args={[0.04, 0.02, 0.03]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Teeth on lower jaw */}
            {[-0.005, 0.005, 0.015].map((xOffset, idx) => (
              <mesh key={idx} position={[0.02 + xOffset, 0.032, 0]} castShadow>
                <boxGeometry args={[0.004, 0.006, 0.028]} />
                <meshStandardMaterial roughness={0.1} metalness={0.95} color="#e2e8f0" />
              </mesh>
            ))}
          </group>

          {/* Knurled Adjustment Ring/Nut */}
          <mesh position={[0, 0.11, 0]} castShadow>
            <cylinderGeometry args={[0.028, 0.028, 0.026, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Upper Adjustable Hook Jaw (L-Shape sliding frame) */}
          <group position={[0, 0.21, 0]}>
            {/* Vertical slider shank */}
            <mesh position={[-0.022, 0, 0]} castShadow>
              <boxGeometry args={[0.016, 0.16, 0.02]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Top horizontal bend hook */}
            <mesh position={[0.02, 0.07, 0]} castShadow>
              <boxGeometry args={[0.1, 0.022, 0.024]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Downward hook jaw face */}
            <mesh position={[0.06, 0.04, 0]} castShadow>
              <boxGeometry args={[0.02, 0.04, 0.024]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Teeth on upper jaw */}
            {[-0.01, 0.0, 0.01].map((yOffset, idx) => (
              <mesh key={idx} position={[0.048, 0.035 + yOffset, 0]} castShadow>
                <boxGeometry args={[0.005, 0.005, 0.022]} />
                <meshStandardMaterial roughness={0.1} metalness={0.95} color="#e2e8f0" />
              </mesh>
            ))}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
