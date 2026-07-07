import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function HardDriveIcon(props: IconProps) {
  // Grid coordinates for ventilation holes on the cover
  const gridX = [-0.25, 0, 0.25];
  const gridY = [-0.3, -0.15, 0];

  return (
    <SharedWrapper iconId="harddrive" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.3, 0.15]} position={[0, 0, 0]}>
          {/* Main Hard Drive Metal Casing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.9, 1.3, 0.16]} />
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

          {/* Top Metal Accent Plate (Metallic disk cover) */}
          <mesh position={[0, 0.26, 0.09]} castShadow>
            <boxGeometry args={[0.8, 0.5, 0.04]} />
            <meshStandardMaterial roughness={0.15} metalness={0.95} color="#cbd5e1" />
          </mesh>

          {/* Circular Spindle detail on top plate */}
          <mesh position={[0, 0.26, 0.11]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.02, 16]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#94a3b8" />
          </mesh>

          {/* Ventilation Grid Holes (Procedural indents) */}
          {gridY.map((y, yIdx) =>
            gridX.map((x, xIdx) => (
              <mesh key={`${yIdx}-${xIdx}`} position={[x, y, 0.09]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 0.02, 8]} />
                <meshStandardMaterial roughness={0.9} color="#18181b" />
              </mesh>
            ))
          )}

          {/* Connection Interface Connector at the bottom */}
          <mesh position={[0, -0.66, 0]} castShadow>
            <boxGeometry args={[0.5, 0.08, 0.1]} />
            <meshStandardMaterial roughness={0.8} color="#27272a" />
          </mesh>

          {/* Status LED 1 (Green) */}
          <mesh position={[-0.26, -0.48, 0.09]} castShadow>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial
              roughness={0.1}
              color="#22c55e"
              emissive="#15803d"
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Status LED 2 (Orange) */}
          <mesh position={[-0.14, -0.48, 0.09]} castShadow>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial
              roughness={0.1}
              color="#f97316"
              emissive="#c2410c"
              emissiveIntensity={1.0}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
