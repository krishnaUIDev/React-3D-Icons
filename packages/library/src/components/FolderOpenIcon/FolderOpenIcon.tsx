import { SharedWrapper } from "../SharedWrapper";
import { FolderOpenIconProps } from "./types";

export function FolderOpenIcon(props: FolderOpenIconProps) {
  return (
    <SharedWrapper iconId="folderopen" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, 0.05]} position={[0, 0, 0]}>
          
          {/* Folder Back Plate */}
          <group position={[0, 0, -0.16]}>
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
              <boxGeometry args={[1.25, 0.8, 0.05]} />
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
            {/* Top-left Folder Tab index */}
            <mesh castShadow position={[-0.375, 0.45, 0]}>
              <boxGeometry args={[0.5, 0.14, 0.05]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                color={mat.color}
              />
            </mesh>
          </group>

          {/* Nested Document Sheets (Paper pages peeking out) */}
          <group position={[0, 0.05, -0.04]}>
            {/* Page 1 (Back page, tilted slightly left) */}
            <mesh position={[-0.03, 0.16, -0.04]} rotation={[0.08, 0, 0.04]} castShadow>
              <boxGeometry args={[1.05, 0.85, 0.025]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#e2e8f0" : "#ffffff"}
                roughness={0.6}
              />
            </mesh>
            
            {/* Page 2 (Front page, tilted slightly right) */}
            <mesh position={[0.04, 0.08, 0.03]} rotation={[0.15, 0, -0.03]} castShadow>
              <boxGeometry args={[1.05, 0.85, 0.025]} />
              <meshStandardMaterial
                color={props.theme === "dark" ? "#cbd5e1" : "#f8fafc"}
                roughness={0.6}
              />
            </mesh>
          </group>

          {/* Folder Front Cover (Open cover, tilted forward) */}
          <group position={[0, -0.08, 0.16]} rotation={[0.26, 0, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.25, 0.8, 0.05]} />
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

            {/* Front accent brand line / tab lock */}
            <mesh position={[0, 0.22, 0.03]} castShadow>
              <boxGeometry args={[0.25, 0.06, 0.025]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
