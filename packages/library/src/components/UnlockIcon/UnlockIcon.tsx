import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { UnlockIconProps } from "./types";

export function UnlockIcon(props: UnlockIconProps) {
  return (
    <SharedWrapper iconId="unlock" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.2, 0.02]} position={[0, -0.05, 0]}>
          
          {/* Padlock Shackle Loop - Open & Rotated around Left Stem Pivot */}
          <group position={[-0.28, 0.32, 0]} rotation={[0, -Math.PI / 4, 0]}>
            <group position={[0.28, -0.16, 0]}>
              {/* Curved Arch (Half Torus) */}
              <mesh castShadow receiveShadow>
                <torusGeometry args={[0.28, 0.07, 16, 48, Math.PI]} />
                <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
              </mesh>
              {/* Left Stem (Longer pivoting stem) */}
              <mesh position={[-0.28, -0.2, 0]} castShadow>
                <cylinderGeometry args={[0.07, 0.07, 0.4, 16]} />
                <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
              </mesh>
              {/* Right Stem (Shorter, swung open) */}
              <mesh position={[0.28, -0.15, 0]} castShadow>
                <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
                <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
              </mesh>
            </group>
          </group>

          {/* Padlock Body */}
          <mesh position={[0, -0.18, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.85, 0.58, 0.36]} radius={0.1} smoothness={4}>
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
            </RoundedBox>
          </mesh>

          {/* Keyhole details (glowing / contrasting) */}
          <group position={[0, -0.18, 0.185]}>
            {/* Top Circle */}
            <mesh castShadow>
              <cylinderGeometry args={[0.075, 0.075, 0.02, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                roughness={0.7}
              />
            </mesh>
            {/* Bottom Slot */}
            <mesh position={[0, -0.09, 0]} castShadow>
              <boxGeometry args={[0.06, 0.12, 0.02]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                roughness={0.7}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
