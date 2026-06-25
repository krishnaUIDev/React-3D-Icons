import { SharedWrapper } from "../SharedWrapper";
import { ScissorsIconProps } from "./types";

export function ScissorsIcon(props: ScissorsIconProps) {
  return (
    <SharedWrapper iconId="scissors" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 8, -Math.PI / 12, 0]} position={[0, 0.05, 0]}>
          {/* Central Hinge Pivot Joint */}
          <mesh castShadow position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.12, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Blade A Group (Angles up-left, handle down-right) */}
          <group position={[0, -0.05, 0.02]} rotation={[0, 0, Math.PI / 12]}>
            {/* Blade Upper segment */}
            <mesh castShadow position={[0, 0.42, 0]}>
              <boxGeometry args={[0.06, 0.72, 0.022]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.1}
              />
            </mesh>
            {/* Tip detail */}
            <mesh position={[0, 0.78, 0]} rotation={[0, 0, 0]}>
              <coneGeometry args={[0.03, 0.08, 4]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>
            {/* Handle Stem */}
            <mesh castShadow position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.32, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#4b5563" />
            </mesh>
            {/* Loop Handle */}
            <mesh castShadow position={[0, -0.38, 0]} rotation={[0, 0, 0]}>
              <torusGeometry args={[0.13, 0.032, 8, 24]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#4b5563" />
            </mesh>
          </group>

          {/* Blade B Group (Angles up-right, handle down-left) */}
          <group position={[0, -0.05, -0.02]} rotation={[0, 0, -Math.PI / 12]}>
            {/* Blade Upper segment */}
            <mesh castShadow position={[0, 0.42, 0]}>
              <boxGeometry args={[0.06, 0.72, 0.022]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.1}
              />
            </mesh>
            {/* Tip detail */}
            <mesh position={[0, 0.78, 0]} rotation={[0, 0, 0]}>
              <coneGeometry args={[0.03, 0.08, 4]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>
            {/* Handle Stem */}
            <mesh castShadow position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.32, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#4b5563" />
            </mesh>
            {/* Loop Handle */}
            <mesh castShadow position={[0, -0.38, 0]} rotation={[0, 0, 0]}>
              <torusGeometry args={[0.13, 0.032, 8, 24]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#4b5563" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
