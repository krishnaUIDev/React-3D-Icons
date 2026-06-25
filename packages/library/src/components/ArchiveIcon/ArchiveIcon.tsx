import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { ArchiveIconProps } from "./types";

export function ArchiveIcon(props: ArchiveIconProps) {
  return (
    <SharedWrapper iconId="archive" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 8, -Math.PI / 6, 0]} position={[0, 0.02, 0]}>
          {/* Main Cabinet Chest Box */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[0.78, 0.95, 0.65]} radius={0.06} smoothness={4}>
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
              />
            </RoundedBox>
          </mesh>

          {/* Top Drawer Front Panel */}
          <mesh castShadow position={[0, 0.2, 0.025]}>
            <RoundedBox args={[0.7, 0.38, 0.63]} radius={0.04} smoothness={4}>
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#1f2937" : "#cbd5e1"}
              />
            </RoundedBox>
          </mesh>

          {/* Top Drawer Pull Handle */}
          <group position={[0, 0.2, 0.35]}>
            {/* Horizontal Bar */}
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.015, 0.015, 0.24, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.5}
              />
            </mesh>
            {/* Left Bracket Pin */}
            <mesh position={[-0.12, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.04, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#9ca3af" />
            </mesh>
            {/* Right Bracket Pin */}
            <mesh position={[0.12, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.04, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#9ca3af" />
            </mesh>
          </group>

          {/* Bottom Drawer Front Panel */}
          <mesh castShadow position={[0, -0.22, 0.025]}>
            <RoundedBox args={[0.7, 0.38, 0.63]} radius={0.04} smoothness={4}>
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#1f2937" : "#cbd5e1"}
              />
            </RoundedBox>
          </mesh>

          {/* Bottom Drawer Pull Handle */}
          <group position={[0, -0.22, 0.35]}>
            {/* Horizontal Bar */}
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.015, 0.015, 0.24, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.5}
              />
            </mesh>
            {/* Left Bracket Pin */}
            <mesh position={[-0.12, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.04, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#9ca3af" />
            </mesh>
            {/* Right Bracket Pin */}
            <mesh position={[0.12, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.04, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#9ca3af" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
