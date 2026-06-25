import { SharedWrapper } from "../SharedWrapper";
import { FloppyDiskIconProps } from "./types";

export function FloppyDiskIcon(props: FloppyDiskIconProps) {
  return (
    <SharedWrapper iconId="floppy" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.15, 0.05]} position={[0, 0, 0]}>
          {/* Main Diskette Plastic Casing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.38, 0.38, 0.024]} />
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

          {/* Beveled Top-Right Corner clip */}
          <mesh position={[0.18, 0.18, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <boxGeometry args={[0.04, 0.04, 0.028]} />
            <meshStandardMaterial roughness={0.5} metalness={0.2} color="#1e293b" />
          </mesh>

          {/* Paper Label (white sticker block) */}
          <mesh position={[0, -0.06, 0.003]} castShadow>
            <boxGeometry args={[0.3, 0.2, 0.02]} />
            <meshStandardMaterial roughness={0.9} metalness={0.0} color="#f8fafc" />
          </mesh>

          {/* Glowing/Accent stripe on the paper label */}
          <mesh position={[0, -0.12, 0.005]} castShadow>
            <boxGeometry args={[0.26, 0.03, 0.02]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Sliding Metal Shutter (lower bottom-right cover) */}
          <group position={[-0.06, 0.12, 0.002]}>
            <mesh castShadow>
              <boxGeometry args={[0.13, 0.12, 0.025]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Shutter slot indent */}
            <mesh position={[0.02, 0, 0.002]} castShadow>
              <boxGeometry args={[0.04, 0.08, 0.025]} />
              <meshStandardMaterial roughness={0.4} metalness={0.9} color="#1e293b" />
            </mesh>
          </group>

          {/* Center Circular Drive Spindle Spigot (metal hub at center back) */}
          <mesh position={[0, 0, -0.013]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.004, 16]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>
          {/* Spindle drive pin drive holes */}
          <mesh position={[0.015, 0.015, -0.014]} castShadow>
            <boxGeometry args={[0.012, 0.012, 0.004]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#1e293b" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
