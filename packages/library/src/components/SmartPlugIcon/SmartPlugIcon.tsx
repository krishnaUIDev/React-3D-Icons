import { SharedWrapper } from "../SharedWrapper";
import { SmartPlugIconProps } from "./types";

export function SmartPlugIcon(props: SmartPlugIconProps) {
  return (
    <SharedWrapper iconId="smartplug" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0, 0]}>
          {/* Main Adapter Body (Rounded Capsule block) */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.13, 0.13, 0.16, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Front Receptacle Face Plate (White/grey inset disk) */}
          <mesh position={[0, 0.081, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.006, 24]} />
            <meshStandardMaterial roughness={0.3} metalness={0.1} color="#f1f5f9" />
          </mesh>

          {/* Dual Socket Slots (US Receptacle holes) */}
          <group position={[0, 0.083, 0]}>
            {/* Left slot */}
            <mesh position={[-0.038, 0, 0.012]} castShadow>
              <boxGeometry args={[0.012, 0.003, 0.034]} />
              <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
            </mesh>
            {/* Right slot */}
            <mesh position={[0.038, 0, 0.012]} castShadow>
              <boxGeometry args={[0.012, 0.003, 0.034]} />
              <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
            </mesh>
            {/* Grounding hole (D-shape at bottom) */}
            <mesh position={[0, 0, -0.038]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.004, 12]} />
              <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
            </mesh>
          </group>

          {/* Glowing Status Power Button (Accent Ring on bottom front face) */}
          <group position={[0, 0.083, 0]}>
            {/* Button housing ring */}
            <mesh position={[0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.032, 0.032, 0.004, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Center LED power symbol / button (Glowing Accent) */}
            <mesh position={[0, 0.002, 0]} castShadow>
              <cylinderGeometry args={[0.024, 0.024, 0.004, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Rear Wall Plug Prongs (US type blades) */}
          <group position={[0, -0.081, 0]}>
            {/* Left prong */}
            <mesh position={[-0.038, -0.04, 0.012]} castShadow>
              <boxGeometry args={[0.01, 0.08, 0.03]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#d97706" />
            </mesh>
            {/* Right prong */}
            <mesh position={[0.038, -0.04, 0.012]} castShadow>
              <boxGeometry args={[0.01, 0.08, 0.03]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#d97706" />
            </mesh>
            {/* Grounding prong cylinder */}
            <mesh position={[0, -0.046, -0.038]} castShadow>
              <cylinderGeometry args={[0.01, 0.01, 0.09, 12]} />
              <meshStandardMaterial roughness={0.1} metalness={0.95} color="#cbd5e1" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
