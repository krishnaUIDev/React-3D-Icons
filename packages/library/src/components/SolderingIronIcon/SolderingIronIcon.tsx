import { SharedWrapper } from "../SharedWrapper";
import { SolderingIronIconProps } from "./types";

export function SolderingIronIcon(props: SolderingIronIconProps) {
  return (
    <SharedWrapper iconId="solderingiron" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 4, -Math.PI / 6]} position={[0, 0, 0]}>
          {/* Main Pen Handle */}
          <mesh position={[0, 0.1, 0]} castShadow>
            <cylinderGeometry args={[0.032, 0.024, 0.32, 16]} />
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

          {/* Rubber Comfort Grip Band */}
          <mesh position={[0, 0.02, 0]} castShadow>
            <cylinderGeometry args={[0.034, 0.03, 0.12, 16]} />
            <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
          </mesh>

          {/* Glowing Heat Status LED Ring on Grip */}
          <mesh position={[0, 0.07, 0]} castShadow>
            <cylinderGeometry args={[0.035, 0.035, 0.015, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Hand Shield / Flange */}
          <mesh position={[0, -0.05, 0]} castShadow>
            <cylinderGeometry args={[0.045, 0.045, 0.015, 16]} />
            <meshStandardMaterial roughness={0.5} metalness={0.6} color="#475569" />
          </mesh>

          {/* Metallic Heating Element (Sleeve/Shaft) */}
          <mesh position={[0, -0.16, 0]} castShadow>
            <cylinderGeometry args={[0.016, 0.012, 0.2, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Fine Solder Copper Tip */}
          <mesh position={[0, -0.28, 0]} castShadow>
            <cylinderGeometry args={[0.012, 0.002, 0.04, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#b45309" />
          </mesh>

          {/* Glowing Heat Tip (Front tip) */}
          <mesh position={[0, -0.3, 0]} castShadow>
            <sphereGeometry args={[0.005, 8, 8]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={2.0}
            />
          </mesh>

          {/* Connection Cord at Back */}
          <group position={[0, 0.26, 0]}>
            {/* Cord relief boot */}
            <mesh castShadow>
              <cylinderGeometry args={[0.018, 0.01, 0.04, 12]} />
              <meshStandardMaterial roughness={0.6} metalness={0.2} color="#334155" />
            </mesh>
            {/* Curved wire line using torus segments */}
            <mesh position={[0.02, 0.04, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
              <torusGeometry args={[0.04, 0.008, 6, 12, Math.PI]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
            </mesh>
            <mesh position={[0.06, 0.08, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
              <torusGeometry args={[0.04, 0.008, 6, 12, Math.PI]} />
              <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
