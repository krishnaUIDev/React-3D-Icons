import { SharedWrapper } from "../SharedWrapper";
import { ScrewdriverIconProps } from "./types";

export function ScrewdriverIcon(props: ScrewdriverIconProps) {
  return (
    <SharedWrapper iconId="screwdriver" {...props}>
      {(mat) => (
        <group>
          {/* Main screwdriver group angled diagonally */}
          <group rotation={[0, 0, -Math.PI / 4]}>
            {/* Grip Handle */}
            <mesh castShadow position={[0, -0.4, 0]}>
              <cylinderGeometry args={[0.15, 0.12, 0.6, 16]} />
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

            {/* Handle top cap */}
            <mesh position={[0, -0.1, 0]}>
              <cylinderGeometry args={[0.12, 0.15, 0.08, 16]} />
              <meshStandardMaterial
                roughness={0.6}
                metalness={0.2}
                color={props.theme === "dark" ? "#1e293b" : "#64748b"}
              />
            </mesh>

            {/* Handle flutes/ridges (4 decorative vertical rails for visual texture) */}
            {[0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].map((angle, index) => (
              <group key={index} rotation={[0, angle, 0]} position={[0, -0.4, 0]}>
                <mesh position={[0.14, 0, 0]}>
                  <boxGeometry args={[0.03, 0.44, 0.04]} />
                  <meshStandardMaterial
                    roughness={0.9}
                    color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
                  />
                </mesh>
              </group>
            ))}

            {/* Steel Shaft */}
            <mesh castShadow position={[0, 0.28, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.7, 12]} />
              <meshStandardMaterial
                roughness={0.15}
                metalness={0.95}
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
              />
            </mesh>

            {/* Shaft to Handle Bolster neck */}
            <mesh position={[0, -0.04, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.08, 12]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.9}
                color={props.theme === "dark" ? "#94a3b8" : "#334155"}
              />
            </mesh>

            {/* Screwdriver Flat Tip */}
            <group position={[0, 0.63, 0]}>
              <mesh castShadow>
                <boxGeometry args={[0.08, 0.08, 0.03]} />
                <meshStandardMaterial
                  roughness={0.2}
                  metalness={0.95}
                  color={props.theme === "dark" ? "#94a3b8" : "#475569"}
                />
              </mesh>
              <mesh position={[0, 0.03, 0]}>
                <boxGeometry args={[0.07, 0.03, 0.015]} />
                <meshStandardMaterial
                  roughness={0.3}
                  metalness={0.95}
                  color={props.theme === "dark" ? "#64748b" : "#334155"}
                />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
