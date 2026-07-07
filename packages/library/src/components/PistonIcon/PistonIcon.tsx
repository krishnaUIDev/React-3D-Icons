import { SharedWrapper } from "../SharedWrapper";
import { PistonIconProps } from "./types";

export function PistonIcon(props: PistonIconProps) {
  return (
    <SharedWrapper iconId="piston" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.1]} position={[0, 0, 0]}>
          {/* Main Piston Head / Skirt */}
          <group position={[0, 0.22, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.28, 0.28, 0.38, 32]} />
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

            {/* Glowing Accent Piston Ring (Top groove) */}
            <mesh position={[0, 0.08, 0]}>
              <torusGeometry args={[0.286, 0.02, 8, 32]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Second Piston Ring (Middle groove, dark steel) */}
            <mesh position={[0, -0.02, 0]}>
              <torusGeometry args={[0.286, 0.015, 8, 32]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#64748b" : "#475569"}
              />
            </mesh>

            {/* Gudgeon Pin / Wrist Pin (Horizontal rod) */}
            <mesh position={[0, -0.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.065, 0.065, 0.32, 16]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#cbd5e1" : "#94a3b8"}
              />
            </mesh>
          </group>

          {/* Connecting Rod (Shaft downwards) */}
          <mesh position={[0, -0.12, 0]} castShadow>
            <boxGeometry args={[0.07, 0.38, 0.05]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Crankshaft Knuckle Cap (Bottom loop) */}
          <group position={[0, -0.32, 0]}>
            {/* Loop Ring */}
            <mesh castShadow rotation={[0, 0, 0]}>
              <torusGeometry args={[0.08, 0.025, 8, 24]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>

            {/* Small Connecting Bolt Details */}
            <mesh position={[-0.1, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#94a3b8" />
            </mesh>
            <mesh position={[0.1, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#94a3b8" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
