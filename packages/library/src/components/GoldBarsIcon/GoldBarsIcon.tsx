import { SharedWrapper } from "../SharedWrapper";
import { GoldBarsIconProps } from "./types";

export function GoldBarsIcon(props: GoldBarsIconProps) {
  return (
    <SharedWrapper iconId="goldbars" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 6, 0.05]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Bottom Left Gold Bar (Matte Metallic Gold) */}
          <mesh castShadow position={[-0.09, -0.06, 0]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
            <cylinderGeometry args={[0.07, 0.09, 0.32, 4]} />
            <meshStandardMaterial color="#ca8a04" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* Bottom Right Gold Bar (Matte Metallic Gold) */}
          <mesh castShadow position={[0.09, -0.06, 0]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
            <cylinderGeometry args={[0.07, 0.09, 0.32, 4]} />
            <meshStandardMaterial color="#ca8a04" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* Top Center Gold Bar (Preset material - e.g. glowing/glass or metallic gold) */}
          <mesh castShadow receiveShadow position={[0, 0.06, 0.02]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
            <cylinderGeometry args={[0.075, 0.095, 0.32, 4]} />
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

          {/* Glowing Accents on Gold Bar Ends (Emissive Accent Color dots) */}
          <group position={[0, 0.06, 0.17]}>
            <mesh castShadow>
              <sphereGeometry args={[0.022, 10, 10]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
