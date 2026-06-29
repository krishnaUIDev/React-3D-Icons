import { SharedWrapper } from "../SharedWrapper";
import { RainbowIconProps } from "./types";

export function RainbowIcon(props: RainbowIconProps) {
  return (
    <SharedWrapper iconId="rainbow" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0]} position={[0, -0.1, 0]} scale={[1.35, 1.35, 1.35]}>
          
          {/* Concentric Rainbow Arches */}
          <group position={[0, -0.05, 0]}>
            {/* Outer Arch (Red/Primary Color) */}
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.42, 0.035, 8, 30, Math.PI]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
                clearcoat={mat.clearcoat}
              />
            </mesh>

            {/* Middle Arch (Yellow/Orange) */}
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.34, 0.035, 8, 30, Math.PI]} />
              <meshPhysicalMaterial
                roughness={mat.roughness * 1.1}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color="#eab308"
              />
            </mesh>

            {/* Inner Arch (Cyan/Glowing Accent) */}
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.26, 0.035, 8, 30, Math.PI]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#06b6d4"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#06b6d4"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Left Base Cloud */}
          <group position={[-0.42, -0.06, 0.05]} scale={[0.6, 0.6, 0.6]}>
            <mesh castShadow position={[0, 0.1, 0]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#f8fafc" />
            </mesh>
            <mesh castShadow position={[-0.12, 0.05, 0]}>
              <sphereGeometry args={[0.11, 16, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#f1f5f9" />
            </mesh>
            <mesh castShadow position={[0.12, 0.06, 0]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#f1f5f9" />
            </mesh>
          </group>

          {/* Right Base Cloud */}
          <group position={[0.42, -0.06, 0.05]} scale={[0.6, 0.6, 0.6]}>
            <mesh castShadow position={[0, 0.1, 0]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#f8fafc" />
            </mesh>
            <mesh castShadow position={[-0.12, 0.06, 0]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#f1f5f9" />
            </mesh>
            <mesh castShadow position={[0.12, 0.05, 0]}>
              <sphereGeometry args={[0.11, 16, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#f1f5f9" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
