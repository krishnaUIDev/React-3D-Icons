import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { DribbbleIconProps } from "./types";

export function DribbbleIcon(props: DribbbleIconProps) {
  return (
    <SharedWrapper iconId="dribbble" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, 0.05]}>
          {/* Main Rounded Box Backplate */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[1.1, 1.1, 0.28]} radius={0.25} smoothness={8}>
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

          {/* Dribbble Basketball Rib lines */}
          <group position={[0, 0, 0.15]}>
            {/* Outer Circle Ring */}
            <mesh castShadow>
              <torusGeometry args={[0.36, 0.024, 16, 64]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* Horizontal wave center */}
            <mesh castShadow rotation={[0, 0, -0.1]}>
              <boxGeometry args={[0.72, 0.024, 0.04]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* Curved Left/Top Rib Arc */}
            <mesh castShadow position={[-0.14, 0.14, 0]} rotation={[0, 0, Math.PI / 4]}>
              <torusGeometry args={[0.26, 0.02, 12, 48, Math.PI * 0.85]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* Curved Right/Bottom Rib Arc */}
            <mesh castShadow position={[0.14, -0.14, 0]} rotation={[0, 0, -Math.PI / 4 * 3]}>
              <torusGeometry args={[0.26, 0.02, 12, 48, Math.PI * 0.85]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
