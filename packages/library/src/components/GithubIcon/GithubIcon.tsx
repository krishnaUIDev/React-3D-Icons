import { SharedWrapper } from "../SharedWrapper";
import { GithubIconProps } from "./types";

export function GithubIcon(props: GithubIconProps) {
  return (
    <SharedWrapper iconId="github" {...props}>
      {(mat) => (
        <group>
          {/* Octagonal backplate badge */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.95, 0.95, 0.14, 8]} />
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
              emissiveIntensity={mat.emissiveIntensity}
            />
          </mesh>

          {/* Stylized Cat Head Silhouette */}
          <group position={[0, 0, 0.1]}>
            {/* Center Head (Round) */}
            <mesh castShadow position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.34, 0.34, 0.08, 32]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e1e2f" : "#e4e4e7"}
              />
            </mesh>

            {/* Left Ear (Triangular pointer) */}
            <mesh castShadow position={[-0.22, 0.24, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.11, 0.11, 0.08, 3]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#181825" : "#cbd5e1"}
              />
            </mesh>

            {/* Right Ear (Triangular pointer) */}
            <mesh castShadow position={[0.22, 0.24, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 4]}>
              <cylinderGeometry args={[0.11, 0.11, 0.08, 3]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#181825" : "#cbd5e1"}
              />
            </mesh>

            {/* Cheek/Whisker Accents Left */}
            <mesh castShadow position={[-0.32, -0.06, 0]} rotation={[0, 0, -0.2]}>
              <boxGeometry args={[0.12, 0.06, 0.08]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e1e2f" : "#e4e4e7"}
              />
            </mesh>

            {/* Cheek/Whisker Accents Right */}
            <mesh castShadow position={[0.32, -0.06, 0]} rotation={[0, 0, 0.2]}>
              <boxGeometry args={[0.12, 0.06, 0.08]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#1e1e2f" : "#e4e4e7"}
              />
            </mesh>

            {/* Tapered Neck/Body */}
            <mesh castShadow position={[0, -0.32, 0]}>
              <cylinderGeometry args={[0.18, 0.24, 0.18, 16]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#11111b" : "#94a3b8"}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
