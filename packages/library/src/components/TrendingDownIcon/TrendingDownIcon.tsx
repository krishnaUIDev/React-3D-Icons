import { SharedWrapper } from "../SharedWrapper";
import { TrendingDownIconProps } from "./types";

export function TrendingDownIcon(props: TrendingDownIconProps) {
  const radius = 0.05; // Line thickness

  const segments = [
    { pos: [-0.5, 0.4, 0] as [number, number, number], len: 0.6, rot: -Math.PI / 2 },
    {
      pos: [0, 0.15, 0] as [number, number, number],
      len: 0.64,
      rot: Math.atan2(-0.5, 0.4) - Math.PI / 2
    },
    {
      pos: [0.45, -0.3, 0] as [number, number, number],
      len: 0.64,
      rot: Math.atan2(-0.4, 0.5) - Math.PI / 2
    }
  ];

  const joints = [
    [-0.8, 0.4, 0],
    [-0.2, 0.4, 0],
    [0.2, -0.1, 0]
  ] as [number, number, number][];

  // Arrow head rotation and position details (pointing down-right)
  const arrowAngle = Math.atan2(-0.4, 0.5);
  const headPos: [number, number, number] = [0.7, -0.5, 0];
  const headRot: [number, number, number] = [0, 0, arrowAngle - Math.PI / 2];

  return (
    <SharedWrapper iconId="trendingdown" {...props}>
      {(mat) => {
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444";

        return (
          <group rotation={[0.1, -0.2, 0.05]}>
            {/* The falling trend line cylinders */}
            {segments.map((seg, idx) => (
              <mesh
                key={`seg-${idx}`}
                position={seg.pos}
                rotation={[0, 0, seg.rot]}
                castShadow
                receiveShadow
              >
                <cylinderGeometry args={[radius, radius, seg.len, 12]} />
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

            {/* Glowing joints */}
            {joints.map((joint, idx) => (
              <mesh key={`joint-${idx}`} position={joint} castShadow>
                <sphereGeometry args={[radius * 1.05, 12, 12]} />
                <meshStandardMaterial
                  color={ac}
                  emissive={ac}
                  emissiveIntensity={1.2}
                  roughness={0.15}
                  metalness={0.5}
                />
              </mesh>
            ))}

            {/* Arrow Head */}
            <mesh position={headPos} rotation={headRot} castShadow>
              <coneGeometry args={[0.13, 0.22, 16]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={1.2}
                roughness={0.15}
                metalness={0.5}
              />
            </mesh>
          </group>
        );
      }}
    </SharedWrapper>
  );
}
