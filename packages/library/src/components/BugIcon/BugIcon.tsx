import { SharedWrapper } from "../SharedWrapper";
import { BugIconProps } from "./types";

export function BugIcon(props: BugIconProps) {
  return (
    <SharedWrapper iconId="bug" {...props}>
      {(mat) => {
        const accent = props.accentColor || "#ef4444";
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : accent;
        return (
          <group rotation={[0.1, -0.25, 0.05]}>
            {/* Body */}
            <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
              <sphereGeometry args={[0.55, 24, 16]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.5}
              />
            </mesh>
            {/* Head */}
            <mesh castShadow position={[0, 0.6, 0]}>
              <sphereGeometry args={[0.28, 20, 14]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.5}
              />
            </mesh>
            {/* Eyes */}
            {([-0.12, 0.12] as number[]).map((x, i) => (
              <mesh key={i} position={[x, 0.66, 0.2]}>
                <sphereGeometry args={[0.07, 10, 10]} />
                <meshStandardMaterial color={ac} emissive={ac} emissiveIntensity={1.2} />
              </mesh>
            ))}
            {/* Antennae */}
            {(
              [
                [-0.14, 0.88, 0.07, -0.35],
                [0.14, 0.88, 0.07, 0.35]
              ] as number[][]
            ).map(([x, y, z, rx], i) => (
              <mesh key={i} position={[x, y, z]} rotation={[0, 0, rx]}>
                <boxGeometry args={[0.04, 0.32, 0.04]} />
                <meshStandardMaterial color={ac} emissive={ac} emissiveIntensity={0.7} />
              </mesh>
            ))}
            {/* Legs (3 per side) */}
            {([-1, 0, 1] as number[]).map((row, i) =>
              ([-1, 1] as number[]).map((side, j) => (
                <mesh
                  key={`${i}-${j}`}
                  position={[side * 0.55, row * 0.22 - 0.05, 0]}
                  rotation={[0, 0, side * 0.9]}
                >
                  <boxGeometry args={[0.32, 0.05, 0.04]} />
                  <meshStandardMaterial color={ac} emissive={ac} emissiveIntensity={0.5} />
                </mesh>
              ))
            )}
          </group>
        );
      }}
    </SharedWrapper>
  );
}
