import { SharedWrapper } from "../SharedWrapper";
import { TreeIconProps } from "./types";

export function TreeIcon(props: TreeIconProps) {
  return (
    <SharedWrapper iconId="tree" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Base Stand (Terracotta cylindrical pot) */}
          <group position={[0, -0.32, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.1, 0.07, 0.11, 12]} />
              <meshStandardMaterial roughness={0.6} metalness={0.1} color="#a16207" />
            </mesh>
            {/* Dark soil inside pot */}
            <mesh position={[0, 0.056, 0]}>
              <cylinderGeometry args={[0.085, 0.085, 0.01, 12]} />
              <meshStandardMaterial roughness={0.9} color="#451a03" />
            </mesh>
          </group>

          {/* Trunk (Wooden vertical pole) */}
          <mesh position={[0, -0.16, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.038, 0.24, 10]} />
            <meshStandardMaterial roughness={0.8} metalness={0.0} color="#78350f" />
          </mesh>

          {/* Coniferous Foliage Stack (Cones with meshPhysicalMaterial) */}
          <group position={[0, 0.06, 0]}>
            {/* Bottom Large Foliage Cone */}
            <mesh position={[0, -0.06, 0]} castShadow receiveShadow>
              <coneGeometry args={[0.28, 0.22, 5]} />
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

            {/* Middle Medium Foliage Cone */}
            <mesh position={[0, 0.07, 0]} castShadow receiveShadow>
              <coneGeometry args={[0.22, 0.19, 5]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Top Small Foliage Cone */}
            <mesh position={[0, 0.19, 0]} castShadow receiveShadow>
              <coneGeometry args={[0.16, 0.16, 5]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Glowing Peak Node (Accent color) */}
            <mesh position={[0, 0.29, 0]} castShadow>
              <sphereGeometry args={[0.032, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
