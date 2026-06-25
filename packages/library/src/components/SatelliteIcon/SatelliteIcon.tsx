import { SharedWrapper } from "../SharedWrapper";
import { SatelliteIconProps } from "./types";

export function SatelliteIcon(props: SatelliteIconProps) {
  return (
    <SharedWrapper iconId="satellite" {...props}>
      {(mat) => (
        <group>
          {/* Main group angled in space */}
          <group rotation={[Math.PI / 8, -Math.PI / 6, 0]}>
            {/* Hexagonal central satellite body */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.16, 0.16, 0.46, 6]} />
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

            {/* Left Connector Bar */}
            <mesh position={[-0.24, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.18, 8]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color={props.theme === "dark" ? "#cbd5e1" : "#475569"} />
            </mesh>
            {/* Left Solar Panel wing */}
            <group position={[-0.45, 0, 0]}>
              <mesh castShadow>
                <boxGeometry args={[0.38, 0.22, 0.02]} />
                <meshStandardMaterial
                  roughness={0.1}
                  metalness={0.9}
                  color={props.theme === "dark" ? "#1e1b4b" : "#4f46e5"} // Dark blue solar cell
                />
              </mesh>
              {/* Solar cell divider grids */}
              <mesh position={[0, 0, 0.015]}>
                <boxGeometry args={[0.36, 0.2, 0.005]} />
                <meshStandardMaterial roughness={0.8} color="#000000" wireframe />
              </mesh>
            </group>

            {/* Right Connector Bar */}
            <mesh position={[0.24, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 0.18, 8]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color={props.theme === "dark" ? "#cbd5e1" : "#475569"} />
            </mesh>
            {/* Right Solar Panel wing */}
            <group position={[0.45, 0, 0]}>
              <mesh castShadow>
                <boxGeometry args={[0.38, 0.22, 0.02]} />
                <meshStandardMaterial
                  roughness={0.1}
                  metalness={0.9}
                  color={props.theme === "dark" ? "#1e1b4b" : "#4f46e5"}
                />
              </mesh>
              {/* Solar cell divider grids */}
              <mesh position={[0, 0, 0.015]}>
                <boxGeometry args={[0.36, 0.2, 0.005]} />
                <meshStandardMaterial roughness={0.8} color="#000000" wireframe />
              </mesh>
            </group>

            {/* Communication Dish Antenna (extending downwards and forward) */}
            <group position={[0, -0.32, 0.14]} rotation={[Math.PI / 6, 0, 0]}>
              {/* Dish support stem */}
              <mesh position={[0, 0.08, -0.06]} rotation={[-Math.PI / 6, 0, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.12, 8]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color={props.theme === "dark" ? "#94a3b8" : "#cbd5e1"} />
              </mesh>
              {/* Dish main bowl */}
              <mesh castShadow position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[0.2, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  clearcoat={mat.clearcoat}
                  color={mat.color}
                  emissive={mat.emissive}
                />
              </mesh>
              {/* Central receiver feed horn */}
              <mesh position={[0, 0, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.01, 0.022, 0.14, 8]} />
                <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
