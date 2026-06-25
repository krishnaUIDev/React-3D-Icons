import { SharedWrapper } from "../SharedWrapper";
import { RouterIconProps } from "./types";

export function RouterIcon(props: RouterIconProps) {
  return (
    <SharedWrapper iconId="router" {...props}>
      {(mat) => (
        <group>
          {/* Main Router Casing */}
          <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.5, 0.36, 1.0]} />
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

          {/* Casing Top Slate Trim */}
          <mesh position={[0, -0.01, 0]}>
            <boxGeometry args={[1.42, 0.04, 0.92]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#18181b" : "#e4e4e7"}
            />
          </mesh>

          {/* Rear Antennas */}
          {[-0.5, 0.5].map((xOffset, index) => (
            <group key={index} position={[xOffset, 0, -0.38]} rotation={[0.15, 0, 0]}>
              {/* Antenna Hinge */}
              <mesh position={[0, 0, 0]} castShadow>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial roughness={0.3} metalness={0.7} color="#27272a" />
              </mesh>
              {/* Antenna Rod */}
              <mesh position={[0, 0.44, 0]} castShadow>
                <cylinderGeometry args={[0.035, 0.035, 0.88, 16]} />
                <meshStandardMaterial roughness={0.2} metalness={0.7} color="#27272a" />
              </mesh>
            </group>
          ))}

          {/* Front Indicator Lights */}
          {[-0.4, -0.1, 0.2].map((xOffset, index) => (
            <mesh key={index} position={[xOffset, -0.2, 0.51]}>
              <sphereGeometry args={[0.032, 12, 12]} />
              <meshStandardMaterial
                color={index === 2 ? "#ef4444" : "#10b981"}
                emissive={index === 2 ? "#ef4444" : "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          ))}

          {/* Floating Wi-Fi Signal Arcs */}
          <group position={[0, 0.35, 0]} rotation={[0, 0, 0]}>
            {/* Inner Signal Wave */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.26, 0.04, 12, 24, Math.PI / 2]} />
              <meshStandardMaterial
                color={mat.color}
                emissive={mat.color}
                emissiveIntensity={1.0}
              />
            </mesh>
            {/* Outer Signal Wave */}
            <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.42, 0.04, 12, 24, Math.PI / 2]} />
              <meshStandardMaterial
                color={mat.color}
                emissive={mat.color}
                emissiveIntensity={1.0}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
