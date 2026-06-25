import { SharedWrapper } from "../SharedWrapper";
import { GreaseGunIconProps } from "./types";

export function GreaseGunIcon(props: GreaseGunIconProps) {
  return (
    <SharedWrapper iconId="greasegun" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.25, -Math.PI / 6]} position={[0, 0, 0]}>
          
          {/* Main Grease Canister Cylinder (Cartridge tube) */}
          <mesh castShadow receiveShadow position={[0, -0.04, 0]}>
            <cylinderGeometry args={[0.046, 0.046, 0.28, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Ribbed Grip Bands on canister */}
          {[-0.1, -0.04, 0.02].map((yPos, idx) => (
            <mesh key={idx} position={[0, yPos - 0.04, 0]} castShadow>
              <cylinderGeometry args={[0.048, 0.048, 0.012, 16]} />
              <meshStandardMaterial roughness={0.3} metalness={0.4} color="#1e293b" />
            </mesh>
          ))}

          {/* Bottom Canister Cap (Screw-on cover) */}
          <mesh position={[0, -0.19, 0]} castShadow>
            <cylinderGeometry args={[0.048, 0.048, 0.02, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#94a3b8" />
          </mesh>

          {/* Bottom Plunger Rod T-handle */}
          <group position={[0, -0.2, 0]}>
            {/* Extended steel shaft */}
            <mesh position={[0, -0.04, 0]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.08, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#cbd5e1" />
            </mesh>
            {/* T-bar cross handle */}
            <mesh rotation={[0, 0, Math.PI / 2]} position={[0, -0.08, 0]} castShadow>
              <cylinderGeometry args={[0.012, 0.012, 0.08, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#475569" />
            </mesh>
          </group>

          {/* Top Cast Iron Pump Head Block */}
          <mesh position={[0, 0.12, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.04, 16]} />
            <meshStandardMaterial roughness={0.25} metalness={0.7} color="#cbd5e1" />
          </mesh>

          {/* Pump Head Accent Collar (Glowing Ring) */}
          <mesh position={[0, 0.144, 0]} castShadow>
            <cylinderGeometry args={[0.052, 0.052, 0.008, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Actuating Pump Lever Handle (Diagonal bar with pivot hinge) */}
          <group position={[0.02, 0.13, 0]}>
            {/* Pivot bracket */}
            <mesh position={[0, 0.01, 0.02]} castShadow>
              <boxGeometry args={[0.02, 0.02, 0.01]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Long lever bar extending downwards parallel to body */}
            <mesh position={[0.06, -0.12, 0]} rotation={[0, 0, -0.15]} castShadow>
              <boxGeometry args={[0.016, 0.28, 0.022]} />
              <meshStandardMaterial roughness={0.2} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Rubber handle sleeve (Glowing color) */}
            <mesh position={[0.082, -0.22, 0]} rotation={[0, 0, -0.15]} castShadow>
              <boxGeometry args={[0.02, 0.08, 0.026]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={0.6}
              />
            </mesh>
          </group>

          {/* High-Pressure Extension Tube (Nozzle spout) */}
          <group position={[0, 0.135, 0]}>
            {/* Angled steel pipe */}
            <mesh position={[0, 0.06, 0.024]} rotation={[0.4, 0, 0]} castShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.12, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Hydraulic nozzle coupler (tip) */}
            <mesh position={[0, 0.116, 0.046]} rotation={[0.4, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.012, 0.034, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.85} color="#475569" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
