import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { YoutubeIconProps } from "./types";

export function YoutubeIcon(props: YoutubeIconProps) {
  return (
    <SharedWrapper iconId="youtube" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, 0.05]}>
          {/* Main Rounded Box Backplate */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[1.5, 1.05, 0.28]} radius={0.25} smoothness={8}>
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

          {/* Extruded Play Triangle */}
          <mesh castShadow position={[0.03, 0, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.26, 0.26, 0.08, 3]} />
            <meshStandardMaterial roughness={0.15} metalness={0.1} color="#ffffff" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
