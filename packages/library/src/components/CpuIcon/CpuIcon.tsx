import { SharedWrapper } from "../SharedWrapper";
import { CpuIconProps } from "./types";

export function CpuIcon(props: CpuIconProps) {
  const pinOffsets = [-0.45, -0.15, 0.15, 0.45];

  return (
    <SharedWrapper iconId="cpu" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 6, Math.PI / 6, 0]}>
          {/* Main Board Substrate */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.4, 1.4, 0.1]} />
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

          {/* Central Die / Processor Cores */}
          <mesh position={[0, 0, 0.1]} castShadow>
            <boxGeometry args={[0.7, 0.7, 0.12]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.9}
              color={props.theme === "dark" ? "#1e1e24" : "#cbd5e1"}
            />
          </mesh>

          {/* Emissive center core ring */}
          <mesh position={[0, 0, 0.17]}>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 32]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : "#a855f7"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : "#a855f7"}
              emissiveIntensity={2.0}
            />
          </mesh>

          {/* Top & Bottom Pins */}
          {pinOffsets.map((offset, i) => (
            <group key={`tb-${i}`}>
              {/* Top Pin */}
              <mesh position={[offset, 0.76, 0]} castShadow>
                <boxGeometry args={[0.08, 0.14, 0.05]} />
                <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />
              </mesh>
              {/* Bottom Pin */}
              <mesh position={[offset, -0.76, 0]} castShadow>
                <boxGeometry args={[0.08, 0.14, 0.05]} />
                <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />
              </mesh>
            </group>
          ))}

          {/* Left & Right Pins */}
          {pinOffsets.map((offset, i) => (
            <group key={`lr-${i}`}>
              {/* Left Pin */}
              <mesh position={[-0.76, offset, 0]} castShadow>
                <boxGeometry args={[0.14, 0.08, 0.05]} />
                <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />
              </mesh>
              {/* Right Pin */}
              <mesh position={[0.76, offset, 0]} castShadow>
                <boxGeometry args={[0.14, 0.08, 0.05]} />
                <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />
              </mesh>
            </group>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
