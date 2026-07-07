import { SharedWrapper } from "../SharedWrapper";
import { ServerIconProps } from "./types";

export function ServerIcon(props: ServerIconProps) {
  const bladeOffsets = [0.44, 0, -0.44];

  return (
    <SharedWrapper iconId="server" {...props}>
      {(mat) => (
        <group>
          {/* Server Rack Cabinet Casing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.0, 1.7, 1.0]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.1}
            />
          </mesh>

          {/* Front Bezel Rim Overlay */}
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.92, 1.62, 0.98]} />
            <meshStandardMaterial
              roughness={0.3}
              metalness={0.8}
              color={props.theme === "dark" ? "#18181b" : "#e4e4e7"}
            />
          </mesh>

          {/* Stacked Server Blades */}
          {bladeOffsets.map((yOffset, index) => (
            <group key={index} position={[0, yOffset, 0.5]}>
              {/* Blade Faceplate */}
              <mesh castShadow position={[0, 0, 0.01]}>
                <boxGeometry args={[0.82, 0.32, 0.03]} />
                <meshStandardMaterial
                  roughness={0.2}
                  metalness={0.85}
                  color={props.theme === "dark" ? "#27272a" : "#cbd5e1"}
                />
              </mesh>

              {/* Status LED Lights (Power / Disk Activity) */}
              <mesh position={[-0.28, 0.05, 0.03]}>
                <sphereGeometry args={[0.035, 12, 12]} />
                <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1.5} />
              </mesh>
              <mesh position={[-0.28, -0.05, 0.03]}>
                <sphereGeometry args={[0.035, 12, 12]} />
                <meshStandardMaterial
                  color={index === 1 ? "#ef4444" : "#3b82f6"}
                  emissive={index === 1 ? "#ef4444" : "#3b82f6"}
                  emissiveIntensity={1.5}
                />
              </mesh>

              {/* Vent slots / grid grooves */}
              {[0.02, 0.14, 0.26].map((xOffset, vIndex) => (
                <mesh key={vIndex} position={[xOffset, 0, 0.03]}>
                  <boxGeometry args={[0.06, 0.18, 0.02]} />
                  <meshStandardMaterial roughness={0.9} metalness={0.1} color="#090d16" />
                </mesh>
              ))}
            </group>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
