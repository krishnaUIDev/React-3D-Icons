import { SharedWrapper } from "../SharedWrapper";
import { SpeakerIconProps } from "./types";

export function SpeakerIcon(props: SpeakerIconProps) {
  return (
    <SharedWrapper iconId="speaker" {...props}>
      {(mat) => (
        <group>
          {/* Angled diagonally */}
          <group rotation={[Math.PI / 12, -Math.PI / 8, 0]}>
            {/* Main Speaker Wooden/Plastic Cabinet */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.55, 0.95, 0.48]} />
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
                emissiveIntensity={mat.emissiveIntensity}
              />
            </mesh>

            {/* Front baffle face (inner plate) */}
            <mesh position={[0, 0, 0.245]}>
              <boxGeometry args={[0.47, 0.87, 0.02]} />
              <meshStandardMaterial
                roughness={0.7}
                color={props.theme === "dark" ? "#1e293b" : "#cbd5e1"}
              />
            </mesh>

            {/* Top Tweeter Speaker Cone */}
            <group position={[0, 0.22, 0.26]} rotation={[Math.PI / 2, 0, 0]}>
              {/* Outer rim */}
              <mesh castShadow>
                <torusGeometry args={[0.09, 0.02, 8, 24]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color={props.theme === "dark" ? "#cbd5e1" : "#64748b"} />
              </mesh>
              {/* Central dust cap cone */}
              <mesh position={[0, 0.015, 0]}>
                <sphereGeometry args={[0.045, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial roughness={0.8} color="#0f172a" />
              </mesh>
            </group>

            {/* Bottom Woofer Speaker Cone */}
            <group position={[0, -0.16, 0.26]} rotation={[Math.PI / 2, 0, 0]}>
              {/* Outer rim */}
              <mesh castShadow>
                <torusGeometry args={[0.16, 0.03, 8, 24]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color={props.theme === "dark" ? "#cbd5e1" : "#64748b"} />
              </mesh>
              {/* Cone suspension surround */}
              <mesh position={[0, -0.01, 0]}>
                <cylinderGeometry args={[0.13, 0.08, 0.04, 24, 1, true]} />
                <meshStandardMaterial roughness={0.9} color={props.theme === "dark" ? "#1e293b" : "#475569"} />
              </mesh>
              {/* Central dust cap dome */}
              <mesh position={[0, 0.015, 0]}>
                <sphereGeometry args={[0.07, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial roughness={0.7} color={props.theme === "dark" ? "#0f172a" : "#090d16"} />
              </mesh>
            </group>

            {/* Bass Reflex Port (Hole at the bottom) */}
            <mesh position={[0, -0.36, 0.26]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
              <meshStandardMaterial roughness={1.0} color="#020617" />
            </mesh>

            {/* Sound Wave Ripple Arcs (Dynamic aesthetic effect) */}
            {[-0.1, 0.2].map((yPos, i) => (
              <group key={i} position={[0, yPos, 0.26]}>
                {/* Thin torus rings fading outward */}
                <mesh position={[0, 0, 0.08 + i * 0.04]} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[0.22 + i * 0.1, 0.008, 6, 24, Math.PI]} />
                  <meshBasicMaterial color={props.theme === "dark" ? "#818cf8" : "#6366f1"} transparent opacity={0.4 - i * 0.15} />
                </mesh>
              </group>
            ))}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
