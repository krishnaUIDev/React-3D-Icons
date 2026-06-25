import { SharedWrapper } from "../SharedWrapper";
import { MicrophoneIconProps } from "./types";

export function MicrophoneIcon(props: MicrophoneIconProps) {
  return (
    <SharedWrapper iconId="microphone" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0]} position={[0, 0.05, 0]}>
          {/* Base Stand Plate */}
          <mesh castShadow receiveShadow position={[0, -0.68, 0]}>
            <cylinderGeometry args={[0.35, 0.38, 0.06, 32]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#4b5563"}
            />
          </mesh>

          {/* Stand Vertical Stem */}
          <mesh castShadow position={[0, -0.42, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.45, 16]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#4b5563"}
            />
          </mesh>

          {/* U-Shape Mount Connector */}
          <mesh castShadow position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.2, 0.035, 8, 32, Math.PI]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#cbd5e1" : "#4b5563"}
            />
          </mesh>

          {/* Mount Center Joint */}
          <mesh castShadow position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.08, 16]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#9ca3af" : "#374151"}
            />
          </mesh>

          {/* Microphone Handle / Body */}
          <mesh castShadow position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.11, 0.08, 0.35, 24]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.2}
            />
          </mesh>

          {/* Microphone Capsule Grille */}
          <group position={[0, 0.22, 0]}>
            {/* Grille Cylinder */}
            <mesh castShadow>
              <cylinderGeometry args={[0.14, 0.14, 0.24, 24]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#e2e8f0" : "#1f2937"}
              />
            </mesh>
            {/* Grille Top Dome */}
            <mesh position={[0, 0.12, 0]}>
              <sphereGeometry args={[0.14, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#e2e8f0" : "#1f2937"}
              />
            </mesh>
            {/* Internal Pop Filter Screen (Glowing) */}
            <mesh position={[0, 0.02, 0]}>
              <cylinderGeometry args={[0.13, 0.13, 0.22, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </mesh>
          </group>

          {/* Glowing Accent Recording Band (Between Handle and Grille) */}
          <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.12, 0.02, 8, 24]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
