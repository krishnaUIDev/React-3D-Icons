import { SharedWrapper } from "../SharedWrapper";
import { FolderCheckIconProps } from "./types";

export function FolderCheckIcon(props: FolderCheckIconProps) {
  return (
    <SharedWrapper iconId="foldercheck" {...props}>
      {(mat) => (
        <group rotation={[0.22, -Math.PI / 6, 0.05]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Main Folder Back Cover & Tab (Preset Material) */}
          <group position={[0, 0, -0.03]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.36, 0.28, 0.02]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                clearcoat={mat.clearcoat}
                color={mat.color}
                emissive={mat.emissive}
                emissiveIntensity={mat.emissiveIntensity * 0.3}
              />
            </mesh>
            {/* Top Back Tab */}
            <mesh position={[-0.11, 0.16, 0]} castShadow>
              <boxGeometry args={[0.13, 0.05, 0.02]} />
              <meshPhysicalMaterial roughness={mat.roughness} color={mat.color} />
            </mesh>
          </group>

          {/* Internal Paper Sheet (Light Grey) */}
          <mesh position={[0, 0.02, 0]} rotation={[0.03, 0, 0]} castShadow>
            <boxGeometry args={[0.32, 0.26, 0.012]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.4} />
          </mesh>

          {/* Folder Front Cover (Slightly tilted open) */}
          <mesh position={[0, -0.01, 0.03]} rotation={[-0.08, 0, 0]} castShadow>
            <boxGeometry args={[0.36, 0.26, 0.02]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Raised 3D Checkmark on Bottom Right Front Cover (Emissive Accent Color) */}
          <group position={[0.09, -0.05, 0.046]}>
            {/* Short Left Wing */}
            <mesh position={[-0.015, -0.015, 0]} rotation={[0, 0, -0.7]} castShadow>
              <boxGeometry args={[0.024, 0.05, 0.016]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* Long Right Wing */}
            <mesh position={[0.015, 0.005, 0]} rotation={[0, 0, 0.7]} castShadow>
              <boxGeometry args={[0.024, 0.09, 0.016]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
