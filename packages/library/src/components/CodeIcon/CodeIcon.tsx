import { SharedWrapper } from "../SharedWrapper";
import { CodeIconProps } from "./types";

export function CodeIcon(props: CodeIconProps) {
  return (
    <SharedWrapper iconId="code" {...props}>
      {(mat) => (
        <group>
          {/* Angled to show 3D depth */}
          <group rotation={[Math.PI / 12, -Math.PI / 8, 0]}>
            {/* Left Bracket "<" */}
            <group position={[-0.42, 0, 0]}>
              {/* Top half */}
              <mesh castShadow position={[-0.08, 0.12, 0]} rotation={[0, 0, Math.PI / 6]}>
                <boxGeometry args={[0.32, 0.08, 0.08]} />
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
              {/* Bottom half */}
              <mesh castShadow position={[-0.08, -0.12, 0]} rotation={[0, 0, -Math.PI / 6]}>
                <boxGeometry args={[0.32, 0.08, 0.08]} />
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
            </group>

            {/* Right Bracket ">" */}
            <group position={[0.42, 0, 0]}>
              {/* Top half */}
              <mesh castShadow position={[0.08, 0.12, 0]} rotation={[0, 0, -Math.PI / 6]}>
                <boxGeometry args={[0.32, 0.08, 0.08]} />
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
              {/* Bottom half */}
              <mesh castShadow position={[0.08, -0.12, 0]} rotation={[0, 0, Math.PI / 6]}>
                <boxGeometry args={[0.32, 0.08, 0.08]} />
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
            </group>

            {/* Center Slash "/" */}
            <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI / 10]}>
              <boxGeometry args={[0.08, 0.74, 0.08]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={props.accentColor || mat.color} // Emphasize slash with accent color if present
                emissive={mat.emissive}
                emissiveIntensity={mat.emissiveIntensity}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
