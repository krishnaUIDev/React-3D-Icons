import { SharedWrapper } from "../SharedWrapper";
import { RamStickIconProps } from "./types";

export function RamStickIcon(props: RamStickIconProps) {
  const chips = [-0.22, -0.07, 0.08, 0.23];

  return (
    <SharedWrapper iconId="ramstick" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.1]} position={[0, 0, 0]}>
          
          {/* Main PCB Memory Module Board */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.74, 0.22, 0.02]} />
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

          {/* Golden Pin Connectors (Bottom strip border) */}
          <mesh position={[0, -0.104, 0.011]} castShadow>
            <boxGeometry args={[0.72, 0.015, 0.005]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />
          </mesh>

          {/* Row of DRAM Memory Chips (Rectangular black chips) */}
          {chips.map((xOffset, index) => (
            <mesh key={index} position={[xOffset, -0.01, 0.015]} castShadow>
              <boxGeometry args={[0.08, 0.12, 0.012]} />
              <meshStandardMaterial roughness={0.4} metalness={0.4} color="#1e293b" />
            </mesh>
          ))}

          {/* Heat Spreader Protective Armor (Metal brackets on sides) */}
          <mesh position={[0, 0, 0.01]} castShadow>
            <boxGeometry args={[0.742, 0.16, 0.008]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#475569" : "#64748b"}
            />
          </mesh>

          {/* Glowing RGB Light Bar (Top edge diffuser line - Glowing Accent) */}
          <mesh position={[0, 0.094, 0.012]} castShadow>
            <boxGeometry args={[0.724, 0.02, 0.008]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
