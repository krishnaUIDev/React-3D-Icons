import { SharedWrapper } from "../SharedWrapper";
import { DriveShaftIconProps } from "./types";

export function DriveShaftIcon(props: DriveShaftIconProps) {
  return (
    <SharedWrapper iconId="driveshaft" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.4, 0.4]} position={[0, 0, 0]}>
          
          {/* Main Central Tube (Drive shaft tube) */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
            <cylinderGeometry args={[0.038, 0.038, 0.38, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Central Shaft Weld Yokes (Steel collars at ends of tube) */}
          {[-0.19, 0.19].map((xPos, idx) => (
            <mesh key={idx} position={[xPos, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.044, 0.044, 0.03, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#94a3b8" />
            </mesh>
          ))}

          {/* Double Universal Joints (U-Joints) */}
          
          {/* Left U-Joint Assembly */}
          <group position={[-0.24, 0, 0]}>
            {/* Yoke Bracket A (attached to shaft) */}
            <group rotation={[0, 0, 0]}>
              <mesh position={[-0.016, 0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
              </mesh>
              <mesh position={[-0.016, -0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
              </mesh>
            </group>

            {/* Glowing Spider Cross (accent colored center pivot) */}
            <group>
              {/* Vertical spider pin */}
              <mesh rotation={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.01, 0.01, 0.076, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissiveIntensity={1.3}
                />
              </mesh>
              {/* Horizontal spider pin */}
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.01, 0.01, 0.076, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissiveIntensity={1.3}
                />
              </mesh>
            </group>

            {/* Yoke Bracket B (attached to transmission end) */}
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh position={[-0.042, 0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#64748b" />
              </mesh>
              <mesh position={[-0.042, -0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#64748b" />
              </mesh>
            </group>

            {/* Left Splined Stub Shaft */}
            <mesh position={[-0.07, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.05, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#475569" />
            </mesh>
          </group>

          {/* Right U-Joint Assembly */}
          <group position={[0.24, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            {/* Yoke Bracket A (attached to shaft) */}
            <group rotation={[0, 0, Math.PI / 2]}>
              <mesh position={[-0.016, 0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
              </mesh>
              <mesh position={[-0.016, -0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
              </mesh>
            </group>

            {/* Glowing Spider Cross (accent colored center pivot) */}
            <group>
              {/* Vertical spider pin */}
              <mesh rotation={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.01, 0.01, 0.076, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissiveIntensity={1.3}
                />
              </mesh>
              {/* Horizontal spider pin */}
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.01, 0.01, 0.076, 8]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissiveIntensity={1.3}
                />
              </mesh>
            </group>

            {/* Yoke Bracket B (attached to differential end) */}
            <group rotation={[Math.PI / 2, 0, Math.PI / 2]}>
              <mesh position={[-0.042, 0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#64748b" />
              </mesh>
              <mesh position={[-0.042, -0.03, 0]} castShadow>
                <boxGeometry args={[0.03, 0.014, 0.038]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#64748b" />
              </mesh>
            </group>

            {/* Right Splined Stub Shaft */}
            <mesh position={[-0.07, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.05, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.9} color="#475569" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
