import { SharedWrapper } from "../SharedWrapper";
import { GearboxIconProps } from "./types";

export function GearboxIcon(props: GearboxIconProps) {
  return (
    <SharedWrapper iconId="gearbox" {...props}>
      {(mat) => (
        <group rotation={[0.25, -0.3, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Gearbox Cast Enclosure (Base casing bracket) */}
          <mesh castShadow position={[0, -0.16, 0]}>
            <boxGeometry args={[0.38, 0.04, 0.22]} />
            <meshStandardMaterial roughness={0.4} metalness={0.6} color="#334155" />
          </mesh>

          {/* Side Support Wall Panels (Steel flanges) */}
          {[-0.17, 0.17].map((xOffset, idx) => (
            <mesh key={idx} position={[xOffset, -0.04, 0]} castShadow>
              <boxGeometry args={[0.02, 0.2, 0.18]} />
              <meshStandardMaterial roughness={0.25} metalness={0.7} color="#475569" />
            </mesh>
          ))}

          {/* Top Transparent Dust Shield / Acrylic Cover (Premium Glassmorphic Shell) */}
          <mesh castShadow receiveShadow position={[0, 0.04, 0]}>
            <boxGeometry args={[0.32, 0.2, 0.18]} />
            <meshPhysicalMaterial
              roughness={mat.roughness * 0.4}
              metalness={mat.metalness * 0.5}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              color={mat.color}
              opacity={0.4}
              transparent
            />
          </mesh>

          {/* Three Intermeshing Transmission Gears */}
          
          {/* Left Input Shaft & Gear (Small Cog) */}
          <group position={[-0.08, 0, 0]}>
            {/* Input axle shaft */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.016, 0.016, 0.22, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Small Gear Sprocket */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.01]} castShadow>
              <cylinderGeometry args={[0.06, 0.06, 0.03, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Accent Glowing Core Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.012]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Right Output Shaft & Gear (Large Cog) */}
          <group position={[0.08, 0, 0]}>
            {/* Output axle shaft */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.018, 0.018, 0.22, 12]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
            </mesh>
            {/* Large Gear Sprocket */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.01]} castShadow>
              <cylinderGeometry args={[0.1, 0.1, 0.03, 24]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
            {/* Accent Glowing Core Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.012]} castShadow>
              <cylinderGeometry args={[0.06, 0.06, 0.01, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Casing Mounting Bolts detail */}
          {[-0.14, 0.14].map((xOffset, idx) => (
            [-0.08, 0.08].map((zOffset, bIdx) => (
              <mesh key={`${idx}-${bIdx}`} position={[xOffset, -0.13, zOffset]} castShadow>
                <cylinderGeometry args={[0.012, 0.012, 0.016, 8]} />
                <meshStandardMaterial roughness={0.2} metalness={0.85} color="#cbd5e1" />
              </mesh>
            ))
          ))}

        </group>
      )}
    </SharedWrapper>
  );
}
