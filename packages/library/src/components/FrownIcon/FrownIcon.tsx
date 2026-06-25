import { SharedWrapper } from "../SharedWrapper";
import { FrownIconProps } from "./types";

export function FrownIcon(props: FrownIconProps) {
  return (
    <SharedWrapper iconId="frown" {...props}>
      {(mat) => (
        <group>
          {/* Smiley Face Base Disk */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.9, 0.9, 0.16, 32]} />
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

          {/* Left Eye */}
          <mesh position={[-0.28, 0.22, 0.1]} castShadow>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.8}
              color={props.theme === "dark" ? "#18181b" : "#475569"}
            />
          </mesh>

          {/* Right Eye */}
          <mesh position={[0.28, 0.22, 0.1]} castShadow>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.8}
              color={props.theme === "dark" ? "#18181b" : "#475569"}
            />
          </mesh>

          {/* Down-curved Frown Mouth (Torus segment) */}
          <mesh position={[0, -0.32, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.26, 0.05, 12, 24, Math.PI]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#18181b" : "#475569"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
