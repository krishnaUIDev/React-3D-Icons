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
            {/* Center Head */}
            <mesh castShadow position={[0, 0, 0]}>
              <boxGeometry args={[0.56, 0.46, 0.08]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#18181b" : "#cbd5e1"}
              />
            </mesh>

            {/* Left Ear */}
            <mesh castShadow position={[-0.22, 0.28, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.18, 0.18, 0.08]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#18181b" : "#cbd5e1"}
              />
            </mesh>

            {/* Right Ear */}
            <mesh castShadow position={[0.22, 0.28, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.18, 0.18, 0.08]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.8}
                color={props.theme === "dark" ? "#18181b" : "#cbd5e1"}
              />
            </mesh>

            {/* Tail/Bottom tentacle accents */}
            <mesh castShadow position={[0, -0.28, 0]} rotation={[0, 0, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.16, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color={props.theme === "dark" ? "#27272a" : "#94a3b8"} />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
