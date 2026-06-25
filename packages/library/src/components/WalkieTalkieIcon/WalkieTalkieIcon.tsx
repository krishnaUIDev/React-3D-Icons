import { SharedWrapper } from "../SharedWrapper";
import { WalkieTalkieIconProps } from "./types";

export function WalkieTalkieIcon(props: WalkieTalkieIconProps) {
  return (
    <SharedWrapper iconId="walkietalkie" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, -Math.PI / 16]} position={[0, -0.05, 0]}>
          {/* Main Handset Radio Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.16, 0.3, 0.07]} />
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

          {/* Left Side Push-To-Talk (PTT) Button (Glowing/Accent) */}
          <mesh position={[-0.082, 0.05, 0]} castShadow>
            <boxGeometry args={[0.012, 0.08, 0.03]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Right Side Ribbed Grips */}
          {[-0.08, -0.04, 0, 0.04, 0.08].map((yOffset, idx) => (
            <mesh key={idx} position={[0.08, yOffset, 0]} castShadow>
              <boxGeometry args={[0.008, 0.02, 0.04]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
            </mesh>
          ))}

          {/* Top Volume/Channel Knob */}
          <mesh position={[-0.04, 0.16, 0]} rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.018, 0.018, 0.03, 12]} />
            <meshStandardMaterial roughness={0.5} metalness={0.4} color="#334155" />
          </mesh>

          {/* Top Flexible Whip Rubber Antenna */}
          <mesh position={[0.04, 0.24, 0]} castShadow>
            <cylinderGeometry args={[0.01, 0.006, 0.18, 12]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#19222f" />
          </mesh>

          {/* Front Speaker Circular Grille / Slits */}
          <group position={[0, -0.04, 0.036]}>
            {[-0.03, -0.01, 0.01, 0.03].map((y, idx) => (
              <mesh key={idx} position={[0, y, 0]} castShadow>
                <boxGeometry args={[0.1, 0.008, 0.002]} />
                <meshStandardMaterial roughness={0.9} metalness={0.1} color="#1e293b" />
              </mesh>
            ))}
          </group>

          {/* Front Status LED Indicator (small dome) */}
          <mesh position={[0.04, 0.12, 0.036]} castShadow>
            <sphereGeometry args={[0.008, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* Front Screen Display Panel */}
          <mesh position={[0, 0.05, 0.036]} castShadow>
            <boxGeometry args={[0.1, 0.06, 0.002]} />
            <meshStandardMaterial roughness={0.1} metalness={0.8} color="#0f172a" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
