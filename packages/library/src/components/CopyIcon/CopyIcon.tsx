import { SharedWrapper } from "../SharedWrapper";
import { CopyIconProps } from "./types";

export function CopyIcon(props: CopyIconProps) {
  // Document Dimensions: width=0.62, height=0.82, depth=0.03
  const w = 0.62;
  const h = 0.82;
  const d = 0.03;

  return (
    <SharedWrapper iconId="copy" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 10, -Math.PI / 10, 0]} position={[0, 0, 0]}>
          {/* Back Document Sheet */}
          <mesh castShadow receiveShadow position={[-0.12, 0.12, -0.05]}>
            <boxGeometry args={[w, h, d]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.2}
            />
          </mesh>

          {/* Front Document Sheet */}
          <group position={[0.12, -0.12, 0.05]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[w, h, d]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
              />
            </mesh>

            {/* Glowing Abstract Text Lines on Front Sheet */}
            <mesh position={[0, 0.18, 0.018]} castShadow>
              <boxGeometry args={[0.36, 0.02, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.2}
              />
            </mesh>
            <mesh position={[0, 0.06, 0.018]} castShadow>
              <boxGeometry args={[0.36, 0.02, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.2}
              />
            </mesh>
            <mesh position={[-0.08, -0.06, 0.018]} castShadow>
              <boxGeometry args={[0.2, 0.02, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
