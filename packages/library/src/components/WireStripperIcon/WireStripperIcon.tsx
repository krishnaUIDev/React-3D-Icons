import { SharedWrapper } from "../SharedWrapper";
import { WireStripperIconProps } from "./types";

export function WireStripperIcon(props: WireStripperIconProps) {
  return (
    <SharedWrapper iconId="wirestripper" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.1, -Math.PI / 8]} position={[0, 0, 0]}>
          {/* Main Joint Pivot Screw */}
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.024, 0.024, 0.05, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.9} color="#94a3b8" />
          </mesh>

          {/* Jaws with Wire Stripping Notches */}
          <group position={[0, 0, 0]}>
            {/* Left Jaw */}
            <group rotation={[0, 0, 0.15]}>
              <mesh position={[-0.02, 0.12, 0.008]} castShadow>
                <boxGeometry args={[0.036, 0.16, 0.012]} />
                <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
              </mesh>
              {/* Notches (overlapping cylinders for details) */}
              {[0.06, 0.09, 0.12, 0.15].map((y, idx) => (
                <mesh key={idx} position={[0.002, y, 0.008]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                  <cylinderGeometry args={[0.008 - idx * 0.001, 0.008 - idx * 0.001, 0.018, 12]} />
                  <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
                </mesh>
              ))}
            </group>

            {/* Right Jaw */}
            <group rotation={[0, 0, -0.15]}>
              <mesh position={[0.02, 0.12, -0.008]} castShadow>
                <boxGeometry args={[0.036, 0.16, 0.012]} />
                <meshStandardMaterial roughness={0.15} metalness={0.9} color="#94a3b8" />
              </mesh>
              {/* Notches */}
              {[0.06, 0.09, 0.12, 0.15].map((y, idx) => (
                <mesh key={idx} position={[-0.002, y, -0.008]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                  <cylinderGeometry args={[0.008 - idx * 0.001, 0.008 - idx * 0.001, 0.018, 12]} />
                  <meshStandardMaterial roughness={0.3} metalness={0.8} color="#334155" />
                </mesh>
              ))}
            </group>
          </group>

          {/* Central Return Spring (Glowing/Accent) */}
          <group position={[0, -0.04, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.026, 0.008, 8, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>

          {/* Handles extending downwards */}
          <group position={[0, 0, 0]}>
            {/* Left Handle */}
            <group rotation={[0, 0, 2.7]}>
              <mesh position={[0, 0.18, 0.015]} castShadow>
                <cylinderGeometry args={[0.016, 0.016, 0.28, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
              </mesh>
              {/* Left Grip */}
              <mesh position={[0, 0.2, 0.015]} castShadow>
                <cylinderGeometry args={[0.022, 0.022, 0.2, 12]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  color={mat.color}
                />
              </mesh>
            </group>

            {/* Right Handle */}
            <group rotation={[0, 0, 3.58]}>
              <mesh position={[0, 0.18, -0.015]} castShadow>
                <cylinderGeometry args={[0.016, 0.016, 0.28, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color="#475569" />
              </mesh>
              {/* Right Grip */}
              <mesh position={[0, 0.2, -0.015]} castShadow>
                <cylinderGeometry args={[0.022, 0.022, 0.2, 12]} />
                <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
