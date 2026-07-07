import { SharedWrapper } from "../SharedWrapper";
import { GpuIconProps } from "./types";

export function GpuIcon(props: GpuIconProps) {
  const fans = [-0.15, 0, 0.15];
  const fanBladeCount = 7;

  return (
    <SharedWrapper iconId="gpu" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.15]} position={[0, 0, 0]}>
          {/* Main Shroud Outer Cover (Premium Matte Case) */}
          <mesh castShadow receiveShadow position={[0, 0.02, 0]}>
            <boxGeometry args={[0.48, 0.24, 0.076]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* PCIe Connection Strip (Golden pins at bottom) */}
          <mesh position={[0, -0.11, 0.01]} castShadow>
            <boxGeometry args={[0.34, 0.02, 0.01]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#eab308" />
          </mesh>
          <mesh position={[0, -0.12, 0.01]} castShadow>
            <boxGeometry args={[0.34, 0.006, 0.016]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#065f46" />
          </mesh>

          {/* Side Backplate / Ports Bracket (Left silver metal bracket) */}
          <mesh position={[-0.245, 0.02, 0.002]} castShadow>
            <boxGeometry args={[0.01, 0.26, 0.06]} />
            <meshStandardMaterial roughness={0.15} metalness={0.85} color="#94a3b8" />
          </mesh>
          {/* Port cutouts detailing */}
          {[-0.08, -0.01, 0.06].map((yPos, idx) => (
            <mesh key={idx} position={[-0.251, yPos + 0.02, 0]} castShadow>
              <boxGeometry args={[0.004, 0.022, 0.038]} />
              <meshStandardMaterial roughness={0.3} metalness={0.95} color="#1e293b" />
            </mesh>
          ))}

          {/* Top RGB Glowing Accent Strip (Premium brand signature light) */}
          <mesh position={[0, 0.134, 0.022]} castShadow>
            <boxGeometry args={[0.42, 0.014, 0.014]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Triple Fans Array */}
          {fans.map((xPos, fanIdx) => (
            <group key={fanIdx} position={[xPos, 0.02, 0.036]}>
              {/* Circular Fan Rim recess */}
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.068, 0.068, 0.01, 24]} />
                <meshStandardMaterial roughness={0.4} metalness={0.7} color="#1e293b" />
              </mesh>
              {/* Fan Hub Center spinner */}
              <mesh position={[0, 0, 0.008]} castShadow>
                <sphereGeometry args={[0.022, 16, 12]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#475569" />
              </mesh>
              {/* Glowing logo badge on hub center */}
              <mesh position={[0, 0, 0.018]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.012, 0.012, 0.002, 16]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"
                  }
                  emissiveIntensity={1.0}
                />
              </mesh>
              {/* Fan Blades */}
              <group>
                {Array.from({ length: fanBladeCount }).map((_, bladeIdx) => {
                  const angle = (bladeIdx * 2 * Math.PI) / fanBladeCount;
                  return (
                    <mesh
                      key={bladeIdx}
                      position={[0, 0, 0.002]}
                      rotation={[0, 0, angle + fanIdx * 0.4]} // Offset rotations for organic look
                      castShadow
                    >
                      {/* Tilted blade plane */}
                      <mesh position={[0, 0.036, 0]} rotation={[0.24, 0, 0]}>
                        <boxGeometry args={[0.014, 0.046, 0.003]} />
                        <meshStandardMaterial roughness={0.35} metalness={0.1} color="#0f172a" />
                      </mesh>
                    </mesh>
                  );
                })}
              </group>
            </group>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
