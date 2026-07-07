import { SharedWrapper } from "../SharedWrapper";
import { FileIconProps } from "./types";

export function FileIcon(props: FileIconProps) {
  return (
    <SharedWrapper iconId="file" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, 0.05]} position={[0, 0, 0]}>
          {/* Main Paper Sheet Card */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.85, 1.15, 0.08]} />
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

          {/* Folded corner (Top-right flap overlay, rotated 45 degrees) */}
          <mesh position={[0.29, 0.44, 0.045]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <boxGeometry args={[0.26, 0.26, 0.09]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.7}
              color={props.theme === "dark" ? "#1e293b" : "#cbd5e1"}
            />
          </mesh>

          {/* Written Document Text Lines (Glowing accent color) */}
          <group position={[0, 0, 0.045]}>
            {/* Line 1 */}
            <mesh position={[-0.05, 0.15, 0]} castShadow>
              <boxGeometry args={[0.5, 0.045, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.0}
              />
            </mesh>
            {/* Line 2 */}
            <mesh position={[-0.05, -0.05, 0]} castShadow>
              <boxGeometry args={[0.5, 0.045, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.0}
              />
            </mesh>
            {/* Line 3 */}
            <mesh position={[-0.15, -0.25, 0]} castShadow>
              <boxGeometry args={[0.3, 0.045, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.0}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
