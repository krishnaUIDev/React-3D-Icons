import { SharedWrapper } from "../SharedWrapper";
import { TulipIconProps } from "./types";

export function TulipIcon(props: TulipIconProps) {
  return (
    <SharedWrapper iconId="tulip" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Vertical Green Stem */}
          <mesh position={[0, -0.14, 0]} castShadow>
            <cylinderGeometry args={[0.014, 0.014, 0.28, 12]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#16a34a" />
          </mesh>

          {/* Large vertical leaves bending up around stem */}
          <group position={[0, -0.1, 0]}>
            {/* Left Leaf */}
            <mesh position={[-0.05, 0.02, 0.01]} rotation={[0.2, 0.1, 0.6]} castShadow>
              <boxGeometry args={[0.016, 0.18, 0.05]} />
              <meshStandardMaterial roughness={0.6} metalness={0.2} color="#15803d" />
            </mesh>
            {/* Right Leaf */}
            <mesh position={[0.05, 0.04, -0.01]} rotation={[0.2, -0.1, -0.6]} castShadow>
              <boxGeometry args={[0.016, 0.2, 0.05]} />
              <meshStandardMaterial roughness={0.6} metalness={0.2} color="#15803d" />
            </mesh>
          </group>

          {/* Sepal Base cup */}
          <mesh position={[0, 0.01, 0]} castShadow>
            <cylinderGeometry args={[0.028, 0.014, 0.02, 12]} />
            <meshStandardMaterial roughness={0.5} metalness={0.1} color="#16a34a" />
          </mesh>

          {/* Tulip Closed Chalice Petals */}
          <group position={[0, 0.1, 0]}>
            {/* Front Left Petal (ellipsoid segment) */}
            <mesh position={[-0.04, 0, 0.02]} scale={[0.8, 1.2, 0.8]} rotation={[0.1, 0.4, 0.1]} castShadow>
              <sphereGeometry args={[0.07, 16, 16, 0, Math.PI, 0, Math.PI / 1.6]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Front Right Petal */}
            <mesh position={[0.04, 0, 0.02]} scale={[0.8, 1.2, 0.8]} rotation={[0.1, -0.4, -0.1]} castShadow>
              <sphereGeometry args={[0.07, 16, 16, 0, Math.PI, 0, Math.PI / 1.6]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Back Petal */}
            <mesh position={[0, 0.01, -0.04]} scale={[0.9, 1.2, 0.7]} rotation={[-0.2, 0, 0]} castShadow>
              <sphereGeometry args={[0.075, 16, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
                emissive={mat.emissive}
                emissiveIntensity={mat.emissiveIntensity * 0.4}
              />
            </mesh>

            {/* Glowing Inner Stamen Core (inside cup) */}
            <mesh position={[0, -0.02, 0.01]} castShadow>
              <sphereGeometry args={[0.022, 12, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
