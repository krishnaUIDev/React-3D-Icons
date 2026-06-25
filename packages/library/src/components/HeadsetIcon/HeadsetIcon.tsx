import { SharedWrapper } from "../SharedWrapper";
import { HeadsetIconProps } from "./types";

export function HeadsetIcon(props: HeadsetIconProps) {
  return (
    <SharedWrapper iconId="headset" {...props}>
      {(mat) => (
        <group rotation={[0.1, -Math.PI / 8, 0]} position={[0, 0, 0]}>
          {/* Main Curved Headband */}
          <mesh position={[0, 0.08, 0]} rotation={[0, 0, 0]} castShadow>
            <torusGeometry args={[0.18, 0.016, 8, 24, Math.PI]} />
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

          {/* Left Earcup Assembly */}
          <group position={[-0.18, 0.08, 0]}>
            {/* Cushion */}
            <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
              <cylinderGeometry args={[0.06, 0.06, 0.03, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Earcup housing */}
            <mesh position={[-0.015, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <cylinderGeometry args={[0.054, 0.054, 0.02, 16]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
            </mesh>
            {/* Glowing outer ring */}
            <mesh position={[-0.026, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <torusGeometry args={[0.04, 0.008, 6, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Right Earcup Assembly */}
          <group position={[0.18, 0.08, 0]}>
            {/* Cushion */}
            <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
              <cylinderGeometry args={[0.06, 0.06, 0.03, 16]} />
              <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Earcup housing */}
            <mesh position={[0.015, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <cylinderGeometry args={[0.054, 0.054, 0.02, 16]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
            </mesh>
            {/* Glowing outer ring */}
            <mesh position={[0.026, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <torusGeometry args={[0.04, 0.008, 6, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Microphone Boom Arm extending from Left Earcup */}
          <group position={[-0.18, 0.05, 0.02]}>
            {/* Straight boom bar pointing forward-down */}
            <mesh position={[0.04, -0.06, 0.08]} rotation={[-0.6, 0.4, 0]} castShadow>
              <cylinderGeometry args={[0.006, 0.006, 0.16, 8]} />
              <meshStandardMaterial roughness={0.5} metalness={0.6} color="#334155" />
            </mesh>
            {/* Mic capsule tip */}
            <mesh position={[0.08, -0.12, 0.14]} rotation={[-0.6, 0.4, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.03, 8]} />
              <meshStandardMaterial roughness={0.6} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Glowing tip indicator dot */}
            <mesh position={[0.09, -0.13, 0.155]} castShadow>
              <sphereGeometry args={[0.006, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
