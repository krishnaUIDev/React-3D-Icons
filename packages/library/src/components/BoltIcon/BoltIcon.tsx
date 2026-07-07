import { SharedWrapper } from "../SharedWrapper";
import { BoltIconProps } from "./types";

export function BoltIcon(props: BoltIconProps) {
  const threadOffsets = [0.08, -0.1, -0.28, -0.46, -0.64];

  return (
    <SharedWrapper iconId="bolt" {...props}>
      {(mat) => (
        <group>
          <group rotation={[Math.PI / 6, -Math.PI / 6, 0]}>
            {/* Hexagonal Bolt Head */}
            <mesh position={[0, 0.44, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.56, 0.56, 0.4, 6]} />
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
                emissiveIntensity={mat.emissiveIntensity}
              />
            </mesh>

            {/* Bolt Shaft/Pin */}
            <mesh position={[0, -0.24, 0]} castShadow>
              <cylinderGeometry args={[0.28, 0.28, 0.96, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                color={mat.color}
                emissive={mat.emissive}
              />
            </mesh>

            {/* Thread Ridges */}
            {threadOffsets.map((yOffset, index) => (
              <mesh
                key={index}
                position={[0, yOffset, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                castShadow
              >
                <torusGeometry args={[0.28, 0.05, 12, 24]} />
                <meshStandardMaterial
                  roughness={0.25}
                  metalness={0.8}
                  color={props.theme === "dark" ? "#27272a" : "#94a3b8"}
                />
              </mesh>
            ))}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
