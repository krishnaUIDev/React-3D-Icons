import { SharedWrapper } from "../SharedWrapper";
import { PowerBankIconProps } from "./types";

export function PowerBankIcon(props: PowerBankIconProps) {
  return (
    <SharedWrapper iconId="powerbank" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.25, 0.05]} position={[0, 0, 0]}>
          {/* Main Power Bank Charger Brick */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.34, 0.6, 0.07]} />
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

          {/* Aluminium Side Edge Trim (Metal framing sheet) */}
          <mesh position={[0, 0, -0.036]} castShadow>
            <boxGeometry args={[0.344, 0.604, 0.01]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* USB Ports on the top face (X-axis slots, Y = 0.3) */}
          <group position={[0, 0.301, 0]} rotation={[0, 0, 0]}>
            {/* USB-A port cutout */}
            <mesh position={[-0.08, 0, 0]} castShadow>
              <boxGeometry args={[0.08, 0.008, 0.026]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#1e293b" />
            </mesh>
            {/* USB-C port cutout */}
            <mesh position={[0.08, 0, 0]} castShadow>
              <boxGeometry args={[0.06, 0.008, 0.016]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#1e293b" />
            </mesh>
          </group>

          {/* Four Small Battery Level LED Indicators (Glowing Accent) */}
          <group position={[0, 0.18, 0.036]}>
            {/* LED 1 */}
            <mesh position={[-0.09, 0, 0]}>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* LED 2 */}
            <mesh position={[-0.03, 0, 0]}>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* LED 3 */}
            <mesh position={[0.03, 0, 0]}>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* LED 4 (Empty/Unlit status dot) */}
            <mesh position={[0.09, 0, 0]}>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshStandardMaterial roughness={0.5} metalness={0.2} color="#475569" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
