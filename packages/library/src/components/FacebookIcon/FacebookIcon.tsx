import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { FacebookIconProps } from "./types";

export function FacebookIcon(props: FacebookIconProps) {
  return (
    <SharedWrapper iconId="facebook" {...props}>
      {(mat) => (
        <group>
          {/* Main Rounded Box Backplate */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[1.3, 1.3, 0.28]} radius={0.2} smoothness={8}>
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

          {/* Letter "f" - Vertical Stem */}
          <mesh position={[0.1, -0.15, 0.165]} castShadow>
            <boxGeometry args={[0.18, 0.85, 0.1]} />
            <meshStandardMaterial roughness={0.2} metalness={0.1} color="#ffffff" />
          </mesh>

          {/* Letter "f" - Horizontal Crossbar */}
          <mesh position={[-0.02, 0.12, 0.165]} castShadow>
            <boxGeometry args={[0.42, 0.16, 0.1]} />
            <meshStandardMaterial roughness={0.2} metalness={0.1} color="#ffffff" />
          </mesh>

          {/* Letter "f" - Top Hook Right Turn */}
          <mesh position={[0.22, 0.28, 0.165]} castShadow>
            <boxGeometry args={[0.3, 0.16, 0.1]} />
            <meshStandardMaterial roughness={0.2} metalness={0.1} color="#ffffff" />
          </mesh>

          {/* Letter "f" - Top Hook Connecting Corner */}
          <mesh position={[0.19, 0.2, 0.165]} castShadow>
            <boxGeometry args={[0.18, 0.16, 0.1]} />
            <meshStandardMaterial roughness={0.2} metalness={0.1} color="#ffffff" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
