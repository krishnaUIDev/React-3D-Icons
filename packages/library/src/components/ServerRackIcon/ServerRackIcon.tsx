import { SharedWrapper } from "../SharedWrapper";
import { ServerRackIconProps } from "./types";

export function ServerRackIcon(props: ServerRackIconProps) {
  const slots = [-0.2, 0, 0.2];

  return (
    <SharedWrapper iconId="serverrack" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Server Cabinet Chassis */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.54, 0.74, 0.44]} />
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

          {/* Cabinet Top/Bottom Metal Plates (Structure rims) */}
          <mesh position={[0, 0.375, 0]} castShadow>
            <boxGeometry args={[0.55, 0.02, 0.45]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#475569" />
          </mesh>
          <mesh position={[0, -0.375, 0]} castShadow>
            <boxGeometry args={[0.55, 0.02, 0.45]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#475569" />
          </mesh>

          {/* Individual Server Nodes (Drawers stacked vertically) */}
          {slots.map((yOffset, index) => (
            <group key={index} position={[0, yOffset, 0.02]}>
              {/* Server Face Plate (Inset dark slab) */}
              <mesh position={[0, 0, 0.205]} castShadow>
                <boxGeometry args={[0.46, 0.14, 0.01]} />
                <meshStandardMaterial
                  roughness={0.3}
                  metalness={0.7}
                  color={props.theme === "dark" ? "#0f172a" : "#334155"}
                />
              </mesh>

              {/* Horizontal Metal Grab Handles */}
              <mesh position={[-0.14, 0, 0.212]} rotation={[0, 0, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.008, 0.008, 0.08, 8]} />
                <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
              </mesh>
              <mesh position={[0.14, 0, 0.212]} rotation={[0, 0, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.008, 0.008, 0.08, 8]} />
                <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
              </mesh>

              {/* Glowing Server Status Indicator Lights (Glowing Accent) */}
              <group position={[0.02, 0, 0.212]}>
                <mesh position={[-0.04, 0, 0]}>
                  <sphereGeometry args={[0.012, 8, 8]} />
                  <meshStandardMaterial
                    color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissiveIntensity={1.4}
                  />
                </mesh>
                <mesh position={[0, 0, 0]}>
                  <sphereGeometry args={[0.012, 8, 8]} />
                  <meshStandardMaterial
                    color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissiveIntensity={1.4}
                  />
                </mesh>
                <mesh position={[0.04, 0, 0]}>
                  <sphereGeometry args={[0.012, 8, 8]} />
                  <meshStandardMaterial
                    color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                    emissiveIntensity={1.4}
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
