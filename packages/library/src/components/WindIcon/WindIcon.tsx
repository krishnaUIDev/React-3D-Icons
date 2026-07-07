import { SharedWrapper } from "../SharedWrapper";
import { WindIconProps } from "./types";

export function WindIcon(props: WindIconProps) {
  return (
    <SharedWrapper iconId="wind" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.3, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Top Wind Trail */}
          <group position={[-0.1, 0.16, 0]}>
            {/* Main horizontal line */}
            <mesh castShadow position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.015, 0.015, 0.35, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
                clearcoat={mat.clearcoat}
              />
            </mesh>
            {/* Curl loop */}
            <mesh position={[0.075, 0.04, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
              <torusGeometry args={[0.05, 0.015, 8, 16, Math.PI * 1.5]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Middle Main Wind Trail (Longer with a larger curl) */}
          <group position={[0, 0, 0.05]}>
            {/* Main horizontal line */}
            <mesh castShadow position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.55, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
                clearcoat={mat.clearcoat}
              />
            </mesh>
            {/* Main Curl loop (Glowing accent) */}
            <mesh position={[0.125, 0.06, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
              <torusGeometry args={[0.08, 0.02, 8, 20, Math.PI * 1.6]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Bottom Wind Trail */}
          <group position={[-0.2, -0.16, -0.05]}>
            {/* Main horizontal line */}
            <mesh castShadow position={[-0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
                clearcoat={mat.clearcoat}
              />
            </mesh>
            {/* Curl loop */}
            <mesh position={[0.1, 0.04, 0]} rotation={[0, 0, -Math.PI / 3]} castShadow>
              <torusGeometry args={[0.055, 0.015, 8, 16, Math.PI * 1.5]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
