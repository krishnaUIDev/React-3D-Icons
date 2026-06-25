import { SharedWrapper } from "../SharedWrapper";
import { LaptopIconProps } from "./types";

export function LaptopIcon(props: LaptopIconProps) {
  return (
    <SharedWrapper iconId="laptop" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.3, 0.05]} position={[0, -0.08, 0]}>
          
          {/* Main Laptop Bottom Base (Keyboard deck) */}
          <mesh castShadow receiveShadow position={[0, 0, 0.04]}>
            <boxGeometry args={[0.74, 0.028, 0.52]} />
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

          {/* Keyboard Keys Layout Plate (Slightly raised, darker) */}
          <mesh position={[0, 0.016, 0.02]} castShadow>
            <boxGeometry args={[0.62, 0.01, 0.22]} />
            <meshStandardMaterial
              roughness={0.4}
              metalness={0.6}
              color={props.theme === "dark" ? "#1e293b" : "#475569"}
            />
          </mesh>

          {/* Trackpad (Front center notch) */}
          <mesh position={[0, 0.016, 0.2]} castShadow>
            <boxGeometry args={[0.16, 0.006, 0.1]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Angled Display Screen Panel (Rises from the hinge at the back) */}
          <group position={[0, 0.01, -0.22]} rotation={[-Math.PI / 6, 0, 0]}>
            {/* Screen Lid Back Cover */}
            <mesh castShadow position={[0, 0.24, -0.01]}>
              <boxGeometry args={[0.74, 0.48, 0.024]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Glowing Screen Face (Display Panel - Glowing Accent) */}
            <mesh position={[0, 0.24, 0.005]} castShadow>
              <boxGeometry args={[0.68, 0.42, 0.008]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Screen bezel details (Top camera dot) */}
            <mesh position={[0, 0.46, 0.01]}>
              <sphereGeometry args={[0.008, 8, 8]} />
              <meshBasicMaterial color="#1e293b" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
