import { SharedWrapper } from "../SharedWrapper";
import { SlidersIconProps } from "./types";

export function SlidersIcon(props: SlidersIconProps) {
  const tracks = [
    { x: -0.45, y: -0.25 },
    { x: 0.0, y: 0.25 },
    { x: 0.45, y: -0.05 }
  ];

  return (
    <SharedWrapper iconId="sliders" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 10, -Math.PI / 8, 0]} position={[0, 0, 0]}>
          {tracks.map((track, idx) => (
            <group key={`track-${idx}`} position={[track.x, 0, 0]}>
              {/* Vertical Guide Rod */}
              <mesh castShadow>
                <cylinderGeometry args={[0.025, 0.025, 1.2, 16]} />
                <meshStandardMaterial
                  roughness={0.25}
                  metalness={0.8}
                  color={props.theme === "dark" ? "#6b7280" : "#9ca3af"}
                />
              </mesh>

              {/* Top End Cap */}
              <mesh position={[0, 0.6, 0]}>
                <boxGeometry args={[0.1, 0.04, 0.06]} />
                <meshStandardMaterial
                  roughness={0.25}
                  metalness={0.8}
                  color={props.theme === "dark" ? "#4b5563" : "#cbd5e1"}
                />
              </mesh>

              {/* Bottom End Cap */}
              <mesh position={[0, -0.6, 0]}>
                <boxGeometry args={[0.1, 0.04, 0.06]} />
                <meshStandardMaterial
                  roughness={0.25}
                  metalness={0.8}
                  color={props.theme === "dark" ? "#4b5563" : "#cbd5e1"}
                />
              </mesh>

              {/* Slider Knob */}
              <group position={[0, track.y, 0]}>
                {/* Physical Body */}
                <mesh castShadow>
                  <boxGeometry args={[0.22, 0.16, 0.22]} />
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
                    emissiveIntensity={mat.emissiveIntensity * 0.2}
                  />
                </mesh>

                {/* Glowing Active Center Line Indicator */}
                <mesh position={[0, 0, 0.115]}>
                  <boxGeometry args={[0.03, 0.16, 0.02]} />
                  <meshStandardMaterial
                    color={
                      mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"
                    }
                    emissive={
                      mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"
                    }
                    emissiveIntensity={1.5}
                  />
                </mesh>
              </group>
            </group>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
