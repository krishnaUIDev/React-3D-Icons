import { SharedWrapper } from "../SharedWrapper";
import { GiftIconProps } from "./types";

export function GiftIcon(props: GiftIconProps) {
  return (
    <SharedWrapper iconId="gift" {...props}>
      {(mat) => (
        <group rotation={[0.12, -0.3, 0.05]} position={[0, -0.05, 0]}>
          {/* Box Base Body */}
          <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
            <boxGeometry args={[0.74, 0.58, 0.74]} />
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

          {/* Lid (Top Box) */}
          <mesh position={[0, 0.2, 0]} castShadow>
            <boxGeometry args={[0.8, 0.16, 0.8]} />
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

          {/* Ribbon Stripe 1 (X Axis) */}
          <mesh position={[0, 0.02, 0]} castShadow>
            <boxGeometry args={[0.12, 0.94, 0.76]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={props.accentColor || "#ef4444"}
            />
          </mesh>

          {/* Ribbon Stripe 2 (Z Axis) */}
          <mesh position={[0, 0.02, 0]} castShadow>
            <boxGeometry args={[0.76, 0.94, 0.12]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={props.accentColor || "#ef4444"}
            />
          </mesh>

          {/* Ribbon Bow Left Loop */}
          <mesh position={[0.1, 0.3, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
            <torusGeometry args={[0.13, 0.038, 8, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              color={props.accentColor || "#ef4444"}
            />
          </mesh>

          {/* Ribbon Bow Right Loop */}
          <mesh position={[-0.1, 0.3, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
            <torusGeometry args={[0.13, 0.038, 8, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              color={props.accentColor || "#ef4444"}
            />
          </mesh>

          {/* Bow Center knot */}
          <mesh position={[0, 0.3, 0]} castShadow>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              color={props.accentColor || "#ef4444"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
