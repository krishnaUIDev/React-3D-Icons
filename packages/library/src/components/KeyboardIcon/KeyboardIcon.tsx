import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function KeyboardIcon(props: IconProps) {
  // Key rows and columns coordinates
  const rows = [-0.14, 0, 0.14];
  const cols = [-0.45, -0.225, 0, 0.225, 0.45];

  return (
    <SharedWrapper iconId="keyboard" {...props}>
      {(mat) => (
        <group rotation={[0.45, -0.25, 0.1]} position={[0, 0, 0]}>
          {/* Main Board Base Frame */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.3, 0.58, 0.08]} />
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

          {/* Keycaps Grid (Procedurally nested) */}
          {rows.map((r, rIdx) =>
            cols.map((c, cIdx) => (
              <mesh key={`${rIdx}-${cIdx}`} position={[c, r, 0.05]} castShadow>
                <boxGeometry args={[0.13, 0.09, 0.04]} />
                <meshStandardMaterial
                  roughness={0.4}
                  metalness={0.1}
                  color={rIdx === 1 && cIdx === 2 ? mat.color : "#f4f4f5"} // Center key matching accent theme
                />
              </mesh>
            ))
          )}

          {/* Spacebar key */}
          <mesh position={[0, -0.23, 0.05]} castShadow>
            <boxGeometry args={[0.62, 0.06, 0.04]} />
            <meshStandardMaterial roughness={0.4} metalness={0.1} color="#cbd5e1" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
