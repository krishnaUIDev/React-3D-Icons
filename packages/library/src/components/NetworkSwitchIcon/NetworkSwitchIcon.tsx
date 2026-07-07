import { SharedWrapper } from "../SharedWrapper";
import { NetworkSwitchIconProps } from "./types";

export function NetworkSwitchIcon(props: NetworkSwitchIconProps) {
  const ports = [-0.14, -0.07, 0, 0.07, 0.14];

  return (
    <SharedWrapper iconId="networkswitch" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.35, 0.05]} position={[0, 0, 0]}>
          {/* Main 1U Rack Casing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.46, 0.12, 0.28]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Left/Right Rack Mount Brackets (Ear wings) */}
          {[-0.235, 0.235].map((xOffset, idx) => (
            <group key={idx} position={[xOffset, 0, 0.08]}>
              <mesh castShadow>
                <boxGeometry args={[0.01, 0.14, 0.04]} />
                <meshStandardMaterial roughness={0.15} metalness={0.9} color="#94a3b8" />
              </mesh>
              {/* Bolt mounting holes details */}
              {[-0.04, 0.04].map((yOffset, bIdx) => (
                <mesh
                  key={bIdx}
                  position={[xOffset < 0 ? -0.006 : 0.006, yOffset, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  castShadow
                >
                  <cylinderGeometry args={[0.006, 0.006, 0.004, 8]} />
                  <meshStandardMaterial roughness={0.3} metalness={0.9} color="#1e293b" />
                </mesh>
              ))}
            </group>
          ))}

          {/* Left Side Status LED Indicators Panel */}
          <group position={[-0.18, 0, 0.141]}>
            {/* System Power indicator (Glowing Accent) */}
            <mesh position={[-0.016, 0.016, 0]} castShadow>
              <sphereGeometry args={[0.008, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            {/* Auxiliary status indicators */}
            <mesh position={[-0.016, -0.016, 0]} castShadow>
              <sphereGeometry args={[0.007, 8, 8]} />
              <meshStandardMaterial roughness={0.1} metalness={0.1} color="#fbbf24" />
            </mesh>
          </group>

          {/* Dual Rows of RJ45 Ports (Ethernet Jacks) */}
          <group position={[0.04, 0, 0.141]}>
            {ports.map((xPos, idx) => (
              <group key={idx} position={[xPos, 0, 0]}>
                {/* Upper RJ45 Port Socket */}
                <mesh position={[0, 0.022, 0]} castShadow>
                  <boxGeometry args={[0.038, 0.026, 0.01]} />
                  <meshStandardMaterial roughness={0.4} metalness={0.2} color="#0f172a" />
                </mesh>
                <mesh position={[0, 0.022, 0.002]} castShadow>
                  <boxGeometry args={[0.028, 0.018, 0.008]} />
                  <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
                </mesh>
                {/* Port Activity LED (Upper) */}
                <mesh position={[-0.012, 0.04, 0]} castShadow>
                  <boxGeometry args={[0.006, 0.004, 0.004]} />
                  <meshStandardMaterial
                    color={idx % 2 === 0 ? "#10b981" : "#eab308"}
                    emissive={idx % 2 === 0 ? "#10b981" : "#eab308"}
                    emissiveIntensity={idx % 3 === 0 ? 1.2 : 0}
                  />
                </mesh>

                {/* Lower RJ45 Port Socket */}
                <mesh position={[0, -0.022, 0]} castShadow>
                  <boxGeometry args={[0.038, 0.026, 0.01]} />
                  <meshStandardMaterial roughness={0.4} metalness={0.2} color="#0f172a" />
                </mesh>
                <mesh position={[0, -0.022, 0.002]} castShadow>
                  <boxGeometry args={[0.028, 0.018, 0.008]} />
                  <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
                </mesh>
                {/* Port Activity LED (Lower) */}
                <mesh position={[0.012, -0.04, 0]} castShadow>
                  <boxGeometry args={[0.006, 0.004, 0.004]} />
                  <meshStandardMaterial
                    color={idx % 2 === 1 ? "#10b981" : "#eab308"}
                    emissive={idx % 2 === 1 ? "#10b981" : "#eab308"}
                    emissiveIntensity={idx % 2 === 1 ? 1.2 : 0}
                  />
                </mesh>
              </group>
            ))}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
