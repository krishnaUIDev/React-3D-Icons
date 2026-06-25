import { SharedWrapper } from "../SharedWrapper";
import { UserPlusIconProps } from "./types";

export function UserPlusIcon(props: UserPlusIconProps) {
  return (
    <SharedWrapper iconId="userplus" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.2, 0.02]} position={[0, 0, 0]}>
          {/* User Silhouette Group (Offset to the left) */}
          <group position={[-0.14, 0, 0]}>
            {/* Head Sphere */}
            <mesh position={[0, 0.32, 0]} castShadow>
              <sphereGeometry args={[0.25, 32, 32]} />
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
              <capsuleGeometry args={[0.35, 0.28, 8, 16]} />
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
              <torusGeometry args={[0.15, 0.02, 8, 24]} />
              <meshPhysicalMaterial
                roughness={0.2}
                metalness={0.7}
                color={props.accentColor || "#ec4899"}
              />
            </mesh>
          </group>

          {/* Plus Symbol (On the right side) */}
          <group position={[0.36, -0.06, 0.15]}>
            {/* Horizontal Bar */}
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.028, 0.028, 0.18, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* Vertical Bar */}
            <mesh castShadow>
              <cylinderGeometry args={[0.028, 0.028, 0.18, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
