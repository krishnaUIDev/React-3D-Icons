import { SharedWrapper } from "../SharedWrapper";
import { ShieldCheckIconProps } from "./types";

export function ShieldCheckIcon(props: ShieldCheckIconProps) {
  return (
    <SharedWrapper iconId="shieldcheck" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.2, 0.05]} position={[0, 0.1, 0]}>
          {/* Shield Base Plate – top rectangle */}
          <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
            <boxGeometry args={[1.06, 0.72, 0.22]} />
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

          {/* Shield bottom pointed section */}
          <mesh castShadow receiveShadow position={[0, -0.23, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.75, 0.75, 0.22]} />
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

          {/* Verified badge circle */}
          <mesh position={[0, -0.04, 0.12]}>
            <cylinderGeometry args={[0.34, 0.34, 0.04, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.3}
            />
          </mesh>

          {/* Checkmark – short left leg */}
          <mesh castShadow position={[-0.1, -0.07, 0.16]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.07, 0.2, 0.05]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Checkmark – long right leg */}
          <mesh castShadow position={[0.07, 0.03, 0.16]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.07, 0.38, 0.05]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Border rim */}
          <mesh position={[0, 0.1, 0.115]}>
            <boxGeometry args={[1.1, 0.74, 0.03]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#1e293b" : "#e2e8f0"}
              wireframe
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
