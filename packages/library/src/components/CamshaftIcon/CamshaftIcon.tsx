import { SharedWrapper } from "../SharedWrapper";
import { CamshaftIconProps } from "./types";

const LOBES = [
  { pos: -0.18, rot: 0 },
  { pos: -0.06, rot: Math.PI / 2 },
  { pos: 0.06, rot: Math.PI },
  { pos: 0.18, rot: -Math.PI / 2 }
];

export function CamshaftIcon(props: CamshaftIconProps) {
  return (
    <SharedWrapper iconId="camshaft" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.4, 0.4]} position={[0, 0, 0]}>
          {/* Central Camshaft Rod (Main core shaft) */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
            <cylinderGeometry args={[0.024, 0.024, 0.54, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Core Support Journals (Thicker steel guides) */}
          {[-0.24, 0, 0.24].map((zPos) => (
            <mesh
              key={`journal-${zPos}`}
              position={[zPos, 0, 0]}
              rotation={[0, 0, Math.PI / 2]}
              castShadow
            >
              <cylinderGeometry args={[0.038, 0.038, 0.03, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
          ))}

          {/* Drive Gear end pulley (Glowing Accent disk) */}
          <group position={[-0.27, 0, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.068, 0.068, 0.024, 24]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.005, 0, 0]} castShadow>
              <cylinderGeometry args={[0.052, 0.052, 0.026, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* End Nut lock pin */}
          <mesh position={[0.275, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.03, 8]} />
            <meshStandardMaterial roughness={0.2} metalness={0.9} color="#64748b" />
          </mesh>

          {/* Cam Lobes (Eccentric oval shapes) */}
          {LOBES.map((lobe, index) => (
            <group key={`lobe-${index}`} position={[lobe.pos, 0, 0]} rotation={[lobe.rot, 0, 0]}>
              {/* Concentric base circle */}
              <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.046, 0.046, 0.036, 16]} />
                <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
              </mesh>
              {/* Eccentric lobe nose (Offset egg-shaped box) */}
              <mesh position={[0, 0.024, 0]} rotation={[0, 0, 0]} castShadow>
                <boxGeometry args={[0.036, 0.048, 0.046]} />
                <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
              </mesh>
              {/* Lobe center alignment pin (accent color) */}
              <mesh position={[0, 0.048, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.006, 0.006, 0.04, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
            </group>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
