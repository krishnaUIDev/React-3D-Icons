import { SharedWrapper } from "../SharedWrapper";
import { MailIconProps } from "./types";

export function MailIcon(props: MailIconProps) {
  return (
    <SharedWrapper iconId="mail" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, -0.05, 0]}>
          {/* Main Envelope Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.4, 0.95, 0.16]} />
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

          {/* Top Flap (Pointed Flap angled down) */}
          <mesh position={[0, 0.22, 0.09]} rotation={[-0.1, 0, Math.PI / 4]} castShadow>
            <boxGeometry args={[0.66, 0.66, 0.02]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Bottom Flap Cover */}
          <mesh position={[0, -0.24, 0.09]} castShadow>
            <boxGeometry args={[1.38, 0.48, 0.02]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Wax Sealing Stamp (Red round seal in center) */}
          <mesh position={[0, -0.08, 0.11]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
            <meshStandardMaterial
              roughness={0.3}
              metalness={0.1}
              color="#ef4444" // Classic red sealing wax
              emissive="#b91c1c"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
