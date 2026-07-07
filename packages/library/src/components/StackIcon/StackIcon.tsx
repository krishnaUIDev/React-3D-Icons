import { SharedWrapper } from "../SharedWrapper";
import { StackIconProps } from "./types";

export function StackIcon(props: StackIconProps) {
  return (
    <SharedWrapper iconId="stack" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.4, 0.1]} position={[0, 0, 0]}>
          {/* Stack Layers (Three horizontal beveled database plates) */}
          {[-0.45, 0, 0.45].map((yOffset, index) => (
            <group key={index} position={[0, yOffset, 0]}>
              {/* Main plate mesh */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[1.25, 0.18, 1.25]} />
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

              {/* Front face status LED indicator bulbs */}
              <mesh position={[-0.38, 0, 0.63]} castShadow>
                <sphereGeometry args={[0.045, 8, 8]} />
                <meshStandardMaterial
                  color={index === 2 ? "#10b981" : "#3b82f6"} // top green, others blue
                  emissive={index === 2 ? "#10b981" : "#3b82f6"}
                  emissiveIntensity={1.2}
                />
              </mesh>
              <mesh position={[-0.2, 0, 0.63]} castShadow>
                <sphereGeometry args={[0.045, 8, 8]} />
                <meshStandardMaterial
                  color={index === 2 ? "#10b981" : "#10b981"} // green
                  emissive={index === 2 ? "#10b981" : "#10b981"}
                  emissiveIntensity={1.2}
                />
              </mesh>
            </group>
          ))}

          {/* Core Support corner rails (four metallic rods at the edges) */}
          {[
            [-0.56, -0.56],
            [-0.56, 0.56],
            [0.56, -0.56],
            [0.56, 0.56]
          ].map(([x, z], i) => (
            <mesh key={i} position={[x, 0, z]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 1.1, 8]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#334155" : "#cbd5e1"}
              />
            </mesh>
          ))}

          {/* Glowing internal spacer layers (neon accents between slabs) */}
          {[-0.225, 0.225].map((y, i) => (
            <mesh key={i} position={[0, y, 0]}>
              <boxGeometry args={[1.05, 0.04, 1.05]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
