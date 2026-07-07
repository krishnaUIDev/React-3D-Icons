import { SharedWrapper } from "../SharedWrapper";
import { CrownIconProps } from "./types";

export function CrownIcon(props: CrownIconProps) {
  return (
    <SharedWrapper iconId="crown" {...props}>
      {(mat) => {
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f59e0b";
        return (
          <group rotation={[0.15, -0.25, 0.05]}>
            {/* Crown band base */}
            <mesh castShadow receiveShadow position={[0, -0.28, 0]}>
              <boxGeometry args={[1.5, 0.28, 0.35]} />
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
            {/* Left spike */}
            <mesh castShadow position={[-0.54, 0.22, 0]}>
              <boxGeometry args={[0.22, 0.76, 0.3]} />
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
            {/* Center spike – taller */}
            <mesh castShadow position={[0, 0.38, 0]}>
              <boxGeometry args={[0.24, 1.06, 0.3]} />
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
            {/* Right spike */}
            <mesh castShadow position={[0.54, 0.22, 0]}>
              <boxGeometry args={[0.22, 0.76, 0.3]} />
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
            {/* Gems */}
            {([-0.54, 0, 0.54] as number[]).map((x, i) => (
              <mesh key={i} position={[x, i === 1 ? 0.92 : 0.62, 0.18]}>
                <octahedronGeometry args={[0.1]} />
                <meshStandardMaterial
                  color={ac}
                  emissive={ac}
                  emissiveIntensity={1.2}
                  roughness={0.05}
                  metalness={0.2}
                />
              </mesh>
            ))}
          </group>
        );
      }}
    </SharedWrapper>
  );
}
