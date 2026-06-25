import { SharedWrapper } from "../SharedWrapper";
import { TapeCassetteIconProps } from "./types";

export function TapeCassetteIcon(props: TapeCassetteIconProps) {
  return (
    <SharedWrapper iconId="tapecassette" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.1, 0.05]} position={[0, 0, 0]}>
          {/* Main Cassette Shell Casing */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.38, 0.24, 0.024]} />
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

          {/* Cassette Center Label Inset */}
          <mesh position={[0, 0, 0.003]} castShadow>
            <boxGeometry args={[0.26, 0.12, 0.02]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#334155" />
          </mesh>

          {/* Left Reel Spindle Hub */}
          <group position={[-0.08, 0, 0]}>
            {/* Gear ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.028, 8]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Center hole */}
            <mesh position={[0, 0, 0.005]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.02, 12]} />
              <meshStandardMaterial roughness={0.9} metalness={0.0} color="#0f172a" />
            </mesh>
          </group>

          {/* Right Reel Spindle Hub */}
          <group position={[0.08, 0, 0]}>
            {/* Gear ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.028, 8]} />
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Center hole */}
            <mesh position={[0, 0, 0.005]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.02, 12]} />
              <meshStandardMaterial roughness={0.9} metalness={0.0} color="#0f172a" />
            </mesh>
          </group>

          {/* Left wound magnetic tape pack */}
          <mesh position={[-0.08, 0, -0.002]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.075, 0.075, 0.02, 16]} />
            <meshStandardMaterial roughness={0.9} metalness={0.1} color="#3b2314" />
          </mesh>

          {/* Right wound magnetic tape pack */}
          <mesh position={[0.08, 0, -0.002]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
            <meshStandardMaterial roughness={0.9} metalness={0.1} color="#3b2314" />
          </mesh>

          {/* Trapezoidal bottom shield cap (Tape access area) */}
          <mesh position={[0, -0.1, 0.002]} castShadow>
            <boxGeometry args={[0.2, 0.04, 0.026]} />
            <meshStandardMaterial roughness={0.4} metalness={0.3} color="#1e293b" />
          </mesh>

          {/* Glowing Window/Stripe (Center horizontal line below hubs) */}
          <mesh position={[0, -0.04, 0.005]} castShadow>
            <boxGeometry args={[0.12, 0.016, 0.02]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
