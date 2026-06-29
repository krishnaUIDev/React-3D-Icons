import { SharedWrapper } from "../SharedWrapper";
import { LeafIconProps } from "./types";

export function LeafIcon(props: LeafIconProps) {
  return (
    <SharedWrapper iconId="leaf" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 6, 0.1]} position={[0, -0.05, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Stem (Cylinder at the bottom base) */}
          <mesh position={[-0.08, -0.22, 0]} rotation={[0, 0, Math.PI / 6]} castShadow>
            <cylinderGeometry args={[0.015, 0.018, 0.22, 10]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#15803d" />
          </mesh>

          {/* Leaf Blade Group (Oriented diagonally upward) */}
          <group position={[0, 0.05, 0]} rotation={[0, 0, -Math.PI / 12]}>
            {/* Center Leaf Blade Core */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.28, 0.42, 0.02]} />
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

            {/* Pointed Leaf Tip */}
            <mesh position={[0, 0.28, 0]} rotation={[0, 0, Math.PI / 4]} castShadow receiveShadow>
              <boxGeometry args={[0.2, 0.2, 0.02]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Bottom Rounded Sepal Joint */}
            <mesh position={[0, -0.21, 0]} castShadow>
              <sphereGeometry args={[0.035, 12, 12]} />
              <meshStandardMaterial color="#16a34a" />
            </mesh>

            {/* Midrib central vein (slightly raised) */}
            <mesh position={[0, 0.05, 0.012]} castShadow>
              <boxGeometry args={[0.016, 0.44, 0.012]} />
              <meshStandardMaterial color="#15803d" roughness={0.6} />
            </mesh>

            {/* Left side secondary vein */}
            <mesh position={[-0.06, 0.06, 0.011]} rotation={[0, 0, -Math.PI / 4]} castShadow>
              <boxGeometry args={[0.008, 0.12, 0.008]} />
              <meshStandardMaterial color="#15803d" roughness={0.6} />
            </mesh>

            {/* Right side secondary vein */}
            <mesh position={[0.06, 0.12, 0.011]} rotation={[0, 0, Math.PI / 4]} castShadow>
              <boxGeometry args={[0.008, 0.12, 0.008]} />
              <meshStandardMaterial color="#15803d" roughness={0.6} />
            </mesh>

            {/* Glowing dewdrop (Accent color indicator) */}
            <mesh position={[0.05, -0.04, 0.022]} castShadow>
              <sphereGeometry args={[0.03, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
