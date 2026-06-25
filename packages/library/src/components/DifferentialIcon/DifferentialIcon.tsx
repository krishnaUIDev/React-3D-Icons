import { SharedWrapper } from "../SharedWrapper";
import { DifferentialIconProps } from "./types";

export function DifferentialIcon(props: DifferentialIconProps) {
  return (
    <SharedWrapper iconId="differential" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.4, 0.2]} position={[0, 0, 0]}>
          
          {/* Left/Right Axle Tubes (Outer steel sleeves) */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
            <cylinderGeometry args={[0.028, 0.028, 0.48, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
          </mesh>

          {/* Axle Flanges (Thick collar rings near pumpkin housing) */}
          {[-0.09, 0.09].map((xPos, idx) => (
            <mesh key={idx} rotation={[0, 0, Math.PI / 2]} position={[xPos, 0, 0]} castShadow>
              <cylinderGeometry args={[0.046, 0.046, 0.02, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#334155" />
            </mesh>
          ))}

          {/* Central Pumpkin Housing Core (Spherical casing split in half) */}
          <mesh castShadow position={[0, 0, 0]}>
            <sphereGeometry args={[0.106, 24, 20]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Central Housing Bolt Ring Flange */}
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.116, 0.116, 0.02, 24]} />
            <meshStandardMaterial roughness={0.25} metalness={0.8} color="#334155" />
          </mesh>

          {/* Glowing Housing Accent Ring (Fitted on bolt flange perimeter) */}
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.012, 0, 0]} castShadow>
            <torusGeometry args={[0.114, 0.008, 8, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Rear Inspection Cover Plate */}
          <mesh position={[0, 0, -0.092]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.068, 0.068, 0.016, 12]} />
            <meshStandardMaterial roughness={0.3} metalness={0.65} color="#475569" />
          </mesh>

          {/* Input Pinion Shaft Nose (Forward extension for driveshaft input) */}
          <group position={[0, 0, 0.09]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.04, 0.03, 0.08, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Input Pinion Yoke / U-joint adapter flange */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.046]} castShadow>
              <cylinderGeometry args={[0.046, 0.046, 0.02, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
