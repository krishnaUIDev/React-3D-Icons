import { SharedWrapper } from "../SharedWrapper";
import { WrenchIconProps } from "./types";

export function WrenchIcon(props: WrenchIconProps) {
  return (
    <SharedWrapper iconId="wrench" {...props}>
      {(mat) => (
        <group>
          <group rotation={[0, 0, -Math.PI / 8]}>
            {/* Wrench Shaft / Handle */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.16, 1.15, 0.08]} />
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

            {/* Inset Handle Accent */}
            <mesh position={[0, 0, 0.02]}>
              <boxGeometry args={[0.07, 0.72, 0.06]} />
              <meshStandardMaterial
                roughness={0.4}
                metalness={0.9}
                color={props.theme === "dark" ? "#18181b" : "#e4e4e7"}
              />
            </mesh>

            {/* Top Open Jaw Head */}
            <group position={[0, 0.61, 0]}>
              {/* Outer Jaw Circle base */}
              <mesh castShadow position={[0, 0, 0]}>
                <cylinderGeometry args={[0.26, 0.26, 0.11, 24]} />
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
              {/* Jaw Cutout Block (Creates U-shape) */}
              <mesh position={[0, 0.08, 0.01]}>
                <boxGeometry args={[0.16, 0.28, 0.13]} />
                <meshStandardMaterial
                  color={props.theme === "dark" ? "#090d16" : "#ffffff"}
                  roughness={1.0}
                />
              </mesh>
            </group>

            {/* Bottom Ring Head (Box End) */}
            <group position={[0, -0.61, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh castShadow>
                <torusGeometry args={[0.18, 0.07, 12, 24]} />
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
              {/* Decorative inner cylinder for teeth details */}
              <mesh>
                <cylinderGeometry args={[0.12, 0.12, 0.08, 12, 1, true]} />
                <meshStandardMaterial
                  roughness={0.3}
                  metalness={0.8}
                  color={props.theme === "dark" ? "#27272a" : "#cbd5e1"}
                />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
