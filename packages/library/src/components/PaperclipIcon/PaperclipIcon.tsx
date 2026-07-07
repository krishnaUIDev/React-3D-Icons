import { SharedWrapper } from "../SharedWrapper";
import { PaperclipIconProps } from "./types";

export function PaperclipIcon(props: PaperclipIconProps) {
  return (
    <SharedWrapper iconId="paperclip" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.3, 0.5]} position={[0, 0, 0]}>
          {/* Wire Straight Segments */}
          <group>
            {/* Outer Left Line */}
            <mesh position={[-0.18, 0, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.7, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness * 0.5}
                metalness={Math.max(0.8, mat.metalness)}
                color={mat.color}
              />
            </mesh>

            {/* Mid Stem Line */}
            <mesh position={[0, -0.05, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.7, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness * 0.5}
                metalness={Math.max(0.8, mat.metalness)}
                color={mat.color}
              />
            </mesh>

            {/* Inner Right Line */}
            <mesh position={[0.18, 0.05, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.5, 12]} />
              <meshPhysicalMaterial
                roughness={mat.roughness * 0.5}
                metalness={Math.max(0.8, mat.metalness)}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Wire Curved Arches */}
          <group>
            {/* Top Outer Arch (connects X=-0.18 and X=0.18? No, X=-0.18 to X=0.18 is radius 0.18) */}
            <mesh position={[0, 0.35, 0]} rotation={[0, 0, 0]}>
              <torusGeometry args={[0.18, 0.03, 8, 24, Math.PI]} />
              <meshPhysicalMaterial
                roughness={mat.roughness * 0.5}
                metalness={Math.max(0.8, mat.metalness)}
                color={mat.color}
              />
            </mesh>

            {/* Bottom Inner Arch (connects X=-0.18 and X=0) */}
            <mesh position={[-0.09, -0.35, 0]} rotation={[0, 0, Math.PI]}>
              <torusGeometry args={[0.09, 0.03, 8, 24, Math.PI]} />
              <meshPhysicalMaterial
                roughness={mat.roughness * 0.5}
                metalness={Math.max(0.8, mat.metalness)}
                color={mat.color}
              />
            </mesh>

            {/* Top Inner Arch (connects X=0 and X=0.18) */}
            <mesh position={[0.09, 0.25, 0]} rotation={[0, 0, 0]}>
              <torusGeometry args={[0.09, 0.03, 8, 24, Math.PI]} />
              <meshPhysicalMaterial
                roughness={mat.roughness * 0.5}
                metalness={Math.max(0.8, mat.metalness)}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Symmetrical glowing locking band (aesthetic touch) */}
          <mesh position={[0, 0.1, 0.035]} castShadow>
            <boxGeometry args={[0.42, 0.05, 0.02]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
              emissiveIntensity={1.0}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
