import { SharedWrapper } from "../SharedWrapper";
import { ActivityIconProps } from "./types";

const RADIUS = 0.045; // Thickness of the pulse line

const SEGMENTS = [
  { pos: [-0.7, 0, 0] as [number, number, number], len: 0.4, rot: -Math.PI / 2 },
  {
    pos: [-0.44, -0.09, 0] as [number, number, number],
    len: 0.216,
    rot: Math.atan2(-0.18, 0.12) - Math.PI / 2
  },
  {
    pos: [-0.26, 0.27, 0] as [number, number, number],
    len: 0.932,
    rot: Math.atan2(0.9, 0.24) - Math.PI / 2
  },
  {
    pos: [-0.02, 0.09, 0] as [number, number, number],
    len: 1.283,
    rot: Math.atan2(-1.26, 0.24) - Math.PI / 2
  },
  {
    pos: [0.22, -0.2, 0] as [number, number, number],
    len: 0.721,
    rot: Math.atan2(0.68, 0.24) - Math.PI / 2
  },
  {
    pos: [0.42, 0.07, 0] as [number, number, number],
    len: 0.213,
    rot: Math.atan2(-0.14, 0.16) - Math.PI / 2
  },
  { pos: [0.7, 0, 0] as [number, number, number], len: 0.4, rot: -Math.PI / 2 }
];

const JOINTS = [
  [-0.9, 0, 0],
  [-0.5, 0, 0],
  [-0.38, -0.18, 0],
  [-0.14, 0.72, 0],
  [0.1, -0.54, 0],
  [0.34, 0.14, 0],
  [0.5, 0, 0],
  [0.9, 0, 0]
] as [number, number, number][];

export function ActivityIcon(props: ActivityIconProps) {
  return (
    <SharedWrapper iconId="activity" {...props}>
      {(mat) => {
        // High glow for pulse lines
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981";

        return (
          <group rotation={[0.08, -0.2, 0.04]}>
            {/* The Pulse Segments */}
            {SEGMENTS.map((seg, idx) => (
              <mesh
                key={`seg-${idx}`}
                position={seg.pos}
                rotation={[0, 0, seg.rot]}
                castShadow
                receiveShadow
              >
                <cylinderGeometry args={[RADIUS, RADIUS, seg.len, 12]} />
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
            ))}

            {/* Glowing rounded joints */}
            {JOINTS.map((joint, idx) => (
              <mesh key={`joint-${idx}`} position={joint} castShadow>
                <sphereGeometry args={[RADIUS * 1.05, 12, 12]} />
                <meshStandardMaterial
                  color={ac}
                  emissive={ac}
                  emissiveIntensity={1.2}
                  roughness={0.15}
                  metalness={0.5}
                />
              </mesh>
            ))}
          </group>
        );
      }}
    </SharedWrapper>
  );
}
