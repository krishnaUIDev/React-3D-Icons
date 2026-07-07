import { SharedWrapper } from "../SharedWrapper";
import { BarChartIconProps } from "./types";

export function BarChartIcon(props: BarChartIconProps) {
  return (
    <SharedWrapper iconId="barchart" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.25, 0.05]}>
          {/* Base plate */}
          <mesh castShadow receiveShadow position={[0, -0.72, 0]}>
            <boxGeometry args={[1.6, 0.07, 0.3]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Bar 1 - Short (left) */}
          <mesh castShadow receiveShadow position={[-0.52, -0.35, 0]}>
            <boxGeometry args={[0.32, 0.7, 0.28]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Bar 2 - Medium (center) */}
          <mesh castShadow receiveShadow position={[0, -0.08, 0]}>
            <boxGeometry args={[0.32, 1.24, 0.28]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.5}
            />
          </mesh>

          {/* Bar 3 - Tall (right) */}
          <mesh castShadow receiveShadow position={[0.52, 0.18, 0]}>
            <boxGeometry args={[0.32, 1.74, 0.28]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.7}
            />
          </mesh>

          {/* Accent cap on tallest bar */}
          <mesh castShadow position={[0.52, 1.07, 0]}>
            <boxGeometry args={[0.36, 0.08, 0.34]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissiveIntensity={0.9}
              roughness={0.2}
              metalness={0.3}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
