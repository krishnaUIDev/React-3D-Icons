import { SharedWrapper } from "../SharedWrapper";
import { FigmaIconProps } from "./types";

export function FigmaIcon(props: FigmaIconProps) {
  return (
    <SharedWrapper iconId="figma" {...props}>
      {(mat) => {
        // Resolve signature brand colors for the Glass preset, otherwise override for uniform custom presets
        const isGlass = props.preset === undefined || props.preset === "glass";
        const cTopLeft = isGlass ? "#f24e1e" : mat.color; // Orange
        const cTopRight = isGlass ? "#ff7262" : mat.color; // Coral/Pink
        const cMidLeft = isGlass ? "#a259ff" : mat.color; // Purple
        const cMidRight = isGlass ? "#1abc9c" : mat.color; // Blue
        const cBotLeft = isGlass ? "#0acf83" : mat.color; // Green

        return (
          <group>
            {/* Angled to show thickness in 3D */}
            <group rotation={[Math.PI / 10, -Math.PI / 8, 0]}>
              {/* --- TOP ROW --- */}
              {/* Top-Left: Rounded Left, Flat Right */}
              <group position={[-0.15, 0.3, 0]}>
                <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry args={[0.15, 0.15, 0.08, 16, 1, false, Math.PI / 2, Math.PI]} />
                  <meshPhysicalMaterial {...mat} color={cTopLeft} />
                </mesh>
                <mesh castShadow position={[0.075, 0, 0]}>
                  <boxGeometry args={[0.15, 0.3, 0.08]} />
                  <meshPhysicalMaterial {...mat} color={cTopLeft} />
                </mesh>
              </group>

              {/* Top-Right: Full Circle */}
              <mesh castShadow position={[0.15, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.08, 24]} />
                <meshPhysicalMaterial {...mat} color={cTopRight} />
              </mesh>

              {/* --- MIDDLE ROW --- */}
              {/* Mid-Left: Rounded Left, Flat Right */}
              <group position={[-0.15, 0, 0]}>
                <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry args={[0.15, 0.15, 0.08, 16, 1, false, Math.PI / 2, Math.PI]} />
                  <meshPhysicalMaterial {...mat} color={cMidLeft} />
                </mesh>
                <mesh castShadow position={[0.075, 0, 0]}>
                  <boxGeometry args={[0.15, 0.3, 0.08]} />
                  <meshPhysicalMaterial {...mat} color={cMidLeft} />
                </mesh>
              </group>

              {/* Mid-Right: Full Circle */}
              <mesh castShadow position={[0.15, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.08, 24]} />
                <meshPhysicalMaterial {...mat} color={cMidRight} />
              </mesh>

              {/* --- BOTTOM ROW --- */}
              {/* Bottom-Left: Rounded Right/Bottom (Teardrop shape pointing left) */}
              <group position={[-0.15, -0.3, 0]}>
                {/* Rounded half */}
                <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry
                    args={[0.15, 0.15, 0.08, 16, 1, false, -Math.PI / 2, Math.PI]}
                  />
                  <meshPhysicalMaterial {...mat} color={cBotLeft} />
                </mesh>
                {/* Extending block */}
                <mesh castShadow position={[0.075, 0, 0]}>
                  <boxGeometry args={[0.15, 0.3, 0.08]} />
                  <meshPhysicalMaterial {...mat} color={cBotLeft} />
                </mesh>
                {/* Bottom sharp corner tip to represent the teardrop extension */}
                <mesh castShadow position={[-0.08, -0.08, 0]} rotation={[0, 0, Math.PI / 4]}>
                  <boxGeometry args={[0.12, 0.12, 0.08]} />
                  <meshPhysicalMaterial {...mat} color={cBotLeft} />
                </mesh>
              </group>
            </group>
          </group>
        );
      }}
    </SharedWrapper>
  );
}
