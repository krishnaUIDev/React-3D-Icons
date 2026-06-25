import { SharedWrapper } from "../SharedWrapper";
import { MotherboardIconProps } from "./types";

export function MotherboardIcon(props: MotherboardIconProps) {
  return (
    <SharedWrapper iconId="motherboard" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, 0.05]} position={[0, 0, 0]}>
          
          {/* Main PCB Substrate Plate */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.68, 0.68, 0.024]} />
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

          {/* Central CPU Socket (Raised square bezel) */}
          <group position={[-0.12, 0.12, 0.015]}>
            <mesh castShadow>
              <boxGeometry args={[0.2, 0.2, 0.025]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#1e293b" />
            </mesh>
            {/* CPU Socket Center Core (Glowing Accent) */}
            <mesh position={[0, 0, 0.014]} castShadow>
              <boxGeometry args={[0.12, 0.12, 0.008]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Memory RAM DIMM Slots (Two vertical bars to the right of CPU) */}
          <group position={[0.16, 0.12, 0.015]}>
            {/* Slot 1 */}
            <mesh position={[-0.04, 0, 0]} castShadow>
              <boxGeometry args={[0.025, 0.26, 0.024]} />
              <meshStandardMaterial roughness={0.4} metalness={0.6} color="#334155" />
            </mesh>
            {/* Slot 2 */}
            <mesh position={[0.04, 0, 0]} castShadow>
              <boxGeometry args={[0.025, 0.26, 0.024]} />
              <meshStandardMaterial roughness={0.4} metalness={0.6} color="#334155" />
            </mesh>
          </group>

          {/* PCI Express Slots (Two horizontal lanes at the bottom) */}
          <group position={[-0.04, -0.18, 0.015]}>
            {/* PCIe lane 1 */}
            <mesh position={[0, 0.06, 0]} castShadow>
              <boxGeometry args={[0.42, 0.024, 0.024]} />
              <meshStandardMaterial roughness={0.4} metalness={0.6} color="#475569" />
            </mesh>
            {/* PCIe lane 2 */}
            <mesh position={[0, -0.06, 0]} castShadow>
              <boxGeometry args={[0.42, 0.024, 0.024]} />
              <meshStandardMaterial roughness={0.4} metalness={0.6} color="#475569" />
            </mesh>
          </group>

          {/* Sundry Motherboard Capacitors & Chip Cylinders (Tiny metal cans) */}
          <group position={[-0.2, -0.02, 0.015]}>
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.025, 0.025, 0.05, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>
            <mesh position={[0.06, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.025, 0.025, 0.05, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>
            <mesh position={[0.04, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.04, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
          </group>

          {/* Chipset Heatsink Block (Dark chrome fin details) */}
          <mesh position={[0.18, -0.16, 0.02]} castShadow>
            <boxGeometry args={[0.12, 0.12, 0.035]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#1e293b" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
