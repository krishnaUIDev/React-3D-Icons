import { SharedWrapper } from "../SharedWrapper";
import { BarcodeScannerIconProps } from "./types";

export function BarcodeScannerIcon(props: BarcodeScannerIconProps) {
  return (
    <SharedWrapper iconId="barcodescanner" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 6, 0.2]} position={[0, 0, 0]}>
          {/* Main Pistol Grip Handle (Matte plastic) */}
          <mesh castShadow receiveShadow position={[-0.04, -0.1, 0]} rotation={[0, 0, -0.28]}>
            <boxGeometry args={[0.046, 0.18, 0.046]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Trigger Button (Index finger switch - Glowing Accent) */}
          <mesh position={[0.005, -0.05, 0]} rotation={[0, 0, -0.28]} castShadow>
            <boxGeometry args={[0.016, 0.038, 0.026]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Rubber Base bumper on handle bottom */}
          <mesh position={[-0.065, -0.19, 0]} rotation={[0, 0, -0.28]} castShadow>
            <boxGeometry args={[0.054, 0.016, 0.054]} />
            <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
          </mesh>

          {/* Main Scanner Head Housing (Thick chamfered upper block) */}
          <group position={[0.02, 0.06, 0]} rotation={[0, 0, 0.15]}>
            <mesh castShadow>
              <boxGeometry args={[0.22, 0.088, 0.088]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Top Protective Rubber Guard Shield */}
            <mesh position={[0, 0.045, 0]} castShadow>
              <boxGeometry args={[0.224, 0.01, 0.092]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#1e293b" />
            </mesh>

            {/* Front Bezel Face Rim (Angled nose where laser shoots out) */}
            <mesh position={[0.1, -0.01, 0]} rotation={[0, 0, -0.4]} castShadow>
              <boxGeometry args={[0.02, 0.096, 0.092]} />
              <meshStandardMaterial roughness={0.3} metalness={0.4} color="#0f172a" />
            </mesh>

            {/* Red Laser Emitter Lens (Glowing glass element) */}
            <mesh position={[0.111, -0.01, 0]} rotation={[0, 0, -0.4]} castShadow>
              <boxGeometry args={[0.004, 0.08, 0.076]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.5}
              />
            </mesh>

            {/* Top Status LED Stripe (Indicates read success) */}
            <mesh position={[-0.04, 0.05, 0]} castShadow>
              <boxGeometry args={[0.06, 0.006, 0.04]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.0}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
