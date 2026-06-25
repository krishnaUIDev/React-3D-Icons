import { SharedWrapper } from "../SharedWrapper";
import { BookmarkIconProps } from "./types";

export function BookmarkIcon(props: BookmarkIconProps) {
  return (
    <SharedWrapper iconId="bookmark" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Ribbon Tab Body */}
          <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
            <boxGeometry args={[0.54, 0.95, 0.06]} />
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

          {/* Top Hanging Mount Loop (Metal ring) */}
          <mesh castShadow position={[0, 0.42, 0]} rotation={[Math.PI / 6, 0, 0]}>
            <torusGeometry args={[0.13, 0.024, 8, 24]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Center decorative accent stripe */}
          <mesh position={[0, -0.1, 0.035]} castShadow>
            <boxGeometry args={[0.08, 0.82, 0.015]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Small metal grommet at the loop hole */}
          <mesh position={[0, 0.34, 0.01]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.045, 0.045, 0.08, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
