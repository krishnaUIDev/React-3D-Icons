import { SharedWrapper } from "../SharedWrapper";
import { BagIconProps } from "./types";

export function BagIcon(props: BagIconProps) {
  return (
    <SharedWrapper iconId="bag" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.3, 0.05]} position={[0, -0.05, 0]}>
          {/* Main Bag Body (Box) */}
          <mesh castShadow receiveShadow position={[0, -0.12, 0]}>
            <boxGeometry args={[0.68, 0.58, 0.38]} />
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

          {/* Front Pocket (accent colored slice) */}
          <mesh position={[0, -0.16, 0.192]} castShadow>
            <boxGeometry args={[0.68, 0.35, 0.02]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              color={props.accentColor || "#38bdf8"}
            />
          </mesh>

          {/* Left Handle Loop */}
          <mesh position={[0, 0.22, 0.1]} rotation={[0, 0, Math.PI]} castShadow>
            <torusGeometry args={[0.16, 0.025, 8, 24, Math.PI]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Right Handle Loop */}
          <mesh position={[0, 0.22, -0.1]} rotation={[0, 0, Math.PI]} castShadow>
            <torusGeometry args={[0.16, 0.025, 8, 24, Math.PI]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
