import { SharedWrapper } from "../SharedWrapper";
import { MagnetIconProps } from "./types";

export function MagnetIcon(props: MagnetIconProps) {
  return (
    <SharedWrapper iconId="magnet" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.15]} position={[0, 0.1, 0]}>
          
          {/* Horseshoe Curved Top (Half Torus) */}
          <mesh castShadow receiveShadow position={[0, 0.15, 0]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.5, 0.13, 16, 48, Math.PI]} />
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

          {/* Left North Pole Leg (Red/Accent Tip) */}
          <group position={[-0.5, -0.05, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.13, 0.13, 0.4, 32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>
            {/* Red pole tip */}
            <mesh castShadow position={[0, -0.28, 0]}>
              <cylinderGeometry args={[0.13, 0.13, 0.16, 32]} />
              <meshStandardMaterial
                color={props.accentColor || "#ef4444"}
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>
          </group>

          {/* Right South Pole Leg (Blue/Dark Tip) */}
          <group position={[0.5, -0.05, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.13, 0.13, 0.4, 32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                ior={mat.ior}
                color={mat.color}
              />
            </mesh>
            {/* Blue pole tip */}
            <mesh castShadow position={[0, -0.28, 0]}>
              <cylinderGeometry args={[0.13, 0.13, 0.16, 32]} />
              <meshStandardMaterial
                color="#3b82f6"
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>
          </group>

          {/* Floating Magnetic Field Loops (Force Fields) */}
          <group position={[0, -0.4, 0.12]} rotation={[Math.PI / 2.5, 0, 0]}>
            <mesh>
              <torusGeometry args={[0.42, 0.015, 8, 32]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.0}
                transparent
                opacity={0.7}
              />
            </mesh>
            <mesh position={[0, 0, 0.1]}>
              <torusGeometry args={[0.48, 0.012, 8, 32]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={0.8}
                transparent
                opacity={0.4}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
