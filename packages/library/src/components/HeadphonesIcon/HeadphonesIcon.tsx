import { SharedWrapper } from "../SharedWrapper";
import { HeadphonesIconProps } from "./types";

export function HeadphonesIcon(props: HeadphonesIconProps) {
  return (
    <SharedWrapper iconId="headphones" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0]} position={[0, 0.1, 0]}>
          
          {/* Headband Curved Arc (Torus segment) */}
          <mesh castShadow receiveShadow position={[0, 0.08, 0]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.55, 0.045, 12, 32, Math.PI]} />
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

          {/* Left Earcup Chamber */}
          <group position={[-0.55, 0.04, 0]} rotation={[0, 0, Math.PI / 2]}>
            {/* Outer Chamber body */}
            <mesh castShadow>
              <cylinderGeometry args={[0.18, 0.18, 0.14, 24]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Inner cushion foam ring */}
            <mesh castShadow position={[0, -0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.14, 0.04, 8, 24]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#0f172a" : "#475569"}
                roughness={0.8}
              />
            </mesh>
            {/* Outer detail grill badge */}
            <mesh position={[0, 0.075, 0]}>
              <sphereGeometry args={[0.11, 16, 8]} />
              <meshStandardMaterial
                color={props.accentColor || "#3b82f6"}
                roughness={0.2}
                metalness={0.7}
              />
            </mesh>
          </group>

          {/* Right Earcup Chamber */}
          <group position={[0.55, 0.04, 0]} rotation={[0, 0, -Math.PI / 2]}>
            {/* Outer Chamber body */}
            <mesh castShadow>
              <cylinderGeometry args={[0.18, 0.18, 0.14, 24]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Inner cushion foam ring */}
            <mesh castShadow position={[0, -0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.14, 0.04, 8, 24]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#0f172a" : "#475569"}
                roughness={0.8}
              />
            </mesh>
            {/* Outer detail grill badge */}
            <mesh position={[0, 0.075, 0]}>
              <sphereGeometry args={[0.11, 16, 8]} />
              <meshStandardMaterial
                color={props.accentColor || "#3b82f6"}
                roughness={0.2}
                metalness={0.7}
              />
            </mesh>
          </group>

          {/* Connectors/Sliders linking band to cups */}
          {[-0.55, 0.55].map((x, i) => (
            <mesh key={i} position={[x, 0.06, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#334155" : "#cbd5e1"}
              />
            </mesh>
          ))}

        </group>
      )}
    </SharedWrapper>
  );
}
