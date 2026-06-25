import { SharedWrapper } from "../SharedWrapper";
import { BlowtorchIconProps } from "./types";

export function BlowtorchIcon(props: BlowtorchIconProps) {
  return (
    <SharedWrapper iconId="blowtorch" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 6, -Math.PI / 12]} position={[0, 0, 0]}>
          {/* Main Gas Canister Base Cylinder */}
          <mesh position={[0, -0.12, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.32, 16]} />
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

          {/* Canister Collar Rim */}
          <mesh position={[0, 0.04, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.02, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
          </mesh>

          {/* Brass Valve Block on top */}
          <group position={[0, 0.07, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.04, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#d97706" />
            </mesh>
            {/* Valve knob (back side) */}
            <mesh position={[0, 0.01, -0.04]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.02, 8]} />
              <meshStandardMaterial roughness={0.5} metalness={0.2} color="#1e293b" />
            </mesh>
          </group>

          {/* Angled Neck Pipe */}
          <group position={[0, 0.09, 0.02]} rotation={[0.4, 0, 0]}>
            <mesh position={[0, 0.08, 0]} castShadow>
              <cylinderGeometry args={[0.012, 0.012, 0.16, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
            </mesh>

            {/* Flare Nozzle Burner Shroud */}
            <mesh position={[0, 0.17, 0]} castShadow>
              <cylinderGeometry args={[0.022, 0.016, 0.06, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#64748b" />
            </mesh>

            {/* Jet Fire Spark Core (glowing cone inside nozzle) */}
            <mesh position={[0, 0.22, 0]} castShadow>
              <coneGeometry args={[0.018, 0.06, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.8}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
