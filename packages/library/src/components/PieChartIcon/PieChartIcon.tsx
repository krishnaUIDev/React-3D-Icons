import { SharedWrapper } from "../SharedWrapper";
import { PieChartIconProps } from "./types";

export function PieChartIcon(props: PieChartIconProps) {
  return (
    <SharedWrapper iconId="piechart" {...props}>
      {(mat) => {
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899";
        // Three pie wedges approximated with cylinder geometry and clipped via rotation
        return (
          <group rotation={[0.3, -0.3, 0]}>
            {/* Base disc */}
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
              <cylinderGeometry args={[0.82, 0.82, 0.22, 32]} />
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
            {/* Slice 1 – large (~50%) */}
            <mesh castShadow position={[0.1, 0.14, 0]}>
              <cylinderGeometry args={[0.72, 0.72, 0.3, 32, 1, false, 0, Math.PI]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.6}
              />
            </mesh>
            {/* Slice 2 – medium (~30%) accent */}
            <mesh castShadow position={[-0.12, 0.14, 0.08]}>
              <cylinderGeometry args={[0.68, 0.68, 0.32, 32, 1, false, Math.PI, Math.PI * 0.6]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={0.55}
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            {/* Slice 3 – small (~20%) */}
            <mesh castShadow position={[0.06, 0.14, -0.06]}>
              <cylinderGeometry
                args={[0.65, 0.65, 0.28, 32, 1, false, Math.PI * 1.6, Math.PI * 0.4]}
              />
              <meshPhysicalMaterial
                roughness={mat.roughness * 1.2}
                metalness={mat.metalness * 0.8}
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
          </group>
        );
      }}
    </SharedWrapper>
  );
}
