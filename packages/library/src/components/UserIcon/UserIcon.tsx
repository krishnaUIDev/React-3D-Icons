import { SharedWrapper } from "../SharedWrapper";
import { UserIconProps } from "./types";

export function UserIcon(props: UserIconProps) {
  return (
    <SharedWrapper iconId="user" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.2, 0.02]} position={[0, 0, 0]}>
          {/* Head Sphere */}
          <mesh position={[0, 0.32, 0]} castShadow>
            <sphereGeometry args={[0.26, 32, 32]} />
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

          {/* Torso Shoulder Bust (Capsule) */}
          <mesh position={[0, -0.22, 0]} castShadow>
            <capsuleGeometry args={[0.38, 0.28, 8, 16]} />
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

          {/* Decorative Collar ring */}
          <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.16, 0.02, 8, 24]} />
            <meshPhysicalMaterial
              roughness={0.2}
              metalness={0.7}
              color={props.accentColor || "#10b981"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
