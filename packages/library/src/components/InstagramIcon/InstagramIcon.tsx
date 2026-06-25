import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { InstagramIconProps } from "./types";

export function InstagramIcon(props: InstagramIconProps) {
  return (
    <SharedWrapper iconId="instagram" {...props}>
      {(mat) => {
        const flashColor = "#fbbf24"; // golden flash dot

        return (
          <group rotation={[0.1, -0.2, 0.05]}>
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

            {/* Camera Body Squircle Outline (White) */}
            <mesh position={[0, 0, 0.145]} castShadow>
              <RoundedBox args={[0.9, 0.9, 0.06]} radius={0.16} smoothness={8}>
                <meshStandardMaterial roughness={0.2} metalness={0.1} color="#ffffff" />
              </RoundedBox>
            </mesh>

            {/* Inner Mask to hollow out the camera body */}
            <mesh position={[0, 0, 0.15]}>
              <RoundedBox args={[0.76, 0.76, 0.07]} radius={0.13} smoothness={8}>
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

            {/* Lens Outer Circle (White) */}
            <mesh position={[0, 0, 0.18]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.22, 0.22, 0.08, 24]} />
              <meshStandardMaterial roughness={0.2} metalness={0.1} color="#ffffff" />
            </mesh>

            {/* Lens Inner Hollow */}
            <mesh position={[0, 0, 0.185]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.09, 24]} />
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

            {/* Camera Flash Dot (Golden Glow) */}
            <mesh position={[0.26, 0.26, 0.19]} castShadow>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshStandardMaterial
                color={flashColor}
                emissive={flashColor}
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>
          </group>
        );
      }}
    </SharedWrapper>
  );
}
