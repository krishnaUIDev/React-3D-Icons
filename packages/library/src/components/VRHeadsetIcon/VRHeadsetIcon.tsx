import { SharedWrapper } from "../SharedWrapper";
import { VRHeadsetIconProps } from "./types";

export function VRHeadsetIcon(props: VRHeadsetIconProps) {
  return (
    <SharedWrapper iconId="vrheadset" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Front Visor Goggles Box */}
          <mesh castShadow receiveShadow position={[0, 0, 0.08]}>
            <boxGeometry args={[0.52, 0.28, 0.22]} />
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

          {/* Front Visor Gloss Shield (Faceplate overlay) */}
          <mesh position={[0, 0, 0.192]} castShadow>
            <boxGeometry args={[0.48, 0.24, 0.01]} />
            <meshStandardMaterial
              roughness={0.02}
              metalness={0.9}
              color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
            />
          </mesh>

          {/* Glowing Status Light Strip (Horizon visor accent - Glowing Accent) */}
          <mesh position={[0, 0, 0.198]} castShadow>
            <boxGeometry args={[0.34, 0.016, 0.006]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Soft Cushion Face Gasket (Dark backing seal) */}
          <mesh position={[0, 0, -0.04]} castShadow>
            <boxGeometry args={[0.53, 0.29, 0.03]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#1e293b" />
          </mesh>

          {/* Rigid Head Strap (Sides wrapping to back, simulated with torus) */}
          <group position={[0, 0, -0.2]}>
            {/* Side strap left */}
            <mesh position={[-0.26, 0, 0.06]} rotation={[0, -0.1, 0]} castShadow>
              <boxGeometry args={[0.018, 0.06, 0.24]} />
              <meshStandardMaterial roughness={0.7} metalness={0.2} color="#334155" />
            </mesh>
            {/* Side strap right */}
            <mesh position={[0.26, 0, 0.06]} rotation={[0, 0.1, 0]} castShadow>
              <boxGeometry args={[0.018, 0.06, 0.24]} />
              <meshStandardMaterial roughness={0.7} metalness={0.2} color="#334155" />
            </mesh>
            {/* Back strap ring */}
            <mesh position={[0, 0, -0.06]} castShadow>
              <boxGeometry args={[0.24, 0.06, 0.018]} />
              <meshStandardMaterial roughness={0.7} metalness={0.2} color="#334155" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
