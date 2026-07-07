import { SharedWrapper } from "../SharedWrapper";
import { RefreshIconProps } from "./types";

export function RefreshIcon(props: RefreshIconProps) {
  const R = 0.48; // Torus Radius
  const arcLength = Math.PI * 0.8; // Arc covers 144 degrees

  // End of arc coordinates: [R * cos(144°), R * sin(144°), 0]
  // cos(144°) = -0.809, sin(144°) = 0.588
  // x = 0.48 * -0.809 = -0.388 => -0.39
  // y = 0.48 * 0.588 = 0.282 => 0.28
  const headPos: [number, number, number] = [-0.39, 0.28, 0];
  const headRot: [number, number, number] = [0, 0, arcLength];

  return (
    <SharedWrapper iconId="refresh" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Arrow 1: Top-Right Arc and Head */}
          <group>
            {/* The Arc */}
            <mesh castShadow receiveShadow>
              <torusGeometry args={[R, 0.055, 12, 32, arcLength]} />
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

            {/* The Arrow Head */}
            <mesh castShadow position={headPos} rotation={headRot}>
              <coneGeometry args={[0.13, 0.2, 4]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>
          </group>

          {/* Arrow 2: Bottom-Left Arc and Head (Symmetric copy rotated 180 degrees) */}
          <group rotation={[0, 0, Math.PI]}>
            {/* The Arc */}
            <mesh castShadow receiveShadow>
              <torusGeometry args={[R, 0.055, 12, 32, arcLength]} />
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

            {/* The Arrow Head */}
            <mesh castShadow position={headPos} rotation={headRot}>
              <coneGeometry args={[0.13, 0.2, 4]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
