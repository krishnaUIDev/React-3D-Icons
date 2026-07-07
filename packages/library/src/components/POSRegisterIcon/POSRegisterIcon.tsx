import { SharedWrapper } from "../SharedWrapper";
import { POSRegisterIconProps } from "./types";

export function POSRegisterIcon(props: POSRegisterIconProps) {
  return (
    <SharedWrapper iconId="posregister" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Bottom Cash Drawer Base (Heavy base unit) */}
          <mesh castShadow receiveShadow position={[0, -0.12, 0]}>
            <boxGeometry args={[0.34, 0.08, 0.3]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Cash Drawer Face detail (Front drawer slot) */}
          <mesh position={[0, -0.12, 0.151]} castShadow>
            <boxGeometry args={[0.3, 0.04, 0.008]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#cbd5e1" />
          </mesh>
          {/* Lock keyhole pin on drawer */}
          <mesh position={[0, -0.12, 0.156]} rotation={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.006, 0.006, 0.008, 8]} />
            <meshStandardMaterial roughness={0.4} metalness={0.9} color="#1e293b" />
          </mesh>

          {/* Raised Slanted POS Monitor Screen (Primary interface) */}
          <group position={[0, 0.02, -0.04]} rotation={[-0.4, 0, 0]}>
            {/* Screen back casing */}
            <mesh castShadow>
              <boxGeometry args={[0.28, 0.2, 0.024]} />
              <meshStandardMaterial roughness={0.25} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* LCD Screen Display Panel (Glowing Glass interface) */}
            <mesh position={[0, 0, 0.01]} castShadow>
              <boxGeometry args={[0.26, 0.18, 0.012]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#0f172a" />
            </mesh>
            {/* UI checkout panel widgets detail (Glowing Accent) */}
            <mesh position={[-0.08, 0.03, 0.017]} castShadow>
              <boxGeometry args={[0.07, 0.03, 0.004]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
            <mesh position={[0.04, -0.02, 0.017]} castShadow>
              <boxGeometry args={[0.13, 0.07, 0.004]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={0.8}
              />
            </mesh>
          </group>

          {/* Thermal Receipt Printer Slot (On side of base) */}
          <group position={[0.11, -0.07, 0.06]}>
            <mesh castShadow>
              <boxGeometry args={[0.07, 0.024, 0.12]} />
              <meshStandardMaterial roughness={0.35} metalness={0.2} color="#1e293b" />
            </mesh>
            {/* Paper output mouth slot */}
            <mesh position={[0, 0.013, 0.01]} castShadow>
              <boxGeometry args={[0.054, 0.004, 0.08]} />
              <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
            </mesh>
            {/* White receipt paper sticking out */}
            <mesh position={[0, 0.02, 0.04]} rotation={[0.2, 0, 0]} castShadow>
              <boxGeometry args={[0.046, 0.004, 0.04]} />
              <meshStandardMaterial roughness={0.9} metalness={0.0} color="#ffffff" />
            </mesh>
          </group>

          {/* Customer Facing Pole Display (Small rear check screen) */}
          <group position={[-0.11, 0.04, -0.1]}>
            {/* Vertical mounting rod pole */}
            <mesh castShadow position={[0, -0.06, 0]}>
              <cylinderGeometry args={[0.01, 0.01, 0.16, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Small display box */}
            <mesh position={[0, 0.02, 0]} castShadow>
              <boxGeometry args={[0.1, 0.05, 0.024]} />
              <meshStandardMaterial roughness={0.3} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Mini LCD face */}
            <mesh position={[0, 0.02, 0.013]} castShadow>
              <boxGeometry args={[0.08, 0.038, 0.006]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#0f172a" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
