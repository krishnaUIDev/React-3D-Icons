import { SharedWrapper } from "../SharedWrapper";
import { BeakerIconProps } from "./types";

export function BeakerIcon(props: BeakerIconProps) {
  return (
    <SharedWrapper iconId="beaker" {...props}>
      {(mat) => (
        <group
          rotation={[0.15, -Math.PI / 8, 0.05]}
          position={[0, -0.02, 0]}
          scale={[1.4, 1.4, 1.4]}
        >
          {/* Beaker Glass Cup Body (Preset Material) */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.36, 16, 1, true]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission || 0.9}
              thickness={mat.thickness || 0.8}
              clearcoat={mat.clearcoat}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.2}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Beaker Base Glass Plate (solid bottom cap) */}
          <mesh position={[0, -0.175, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.01, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              color={mat.color}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Beaker Top Flange Rim Ring */}
          <mesh position={[0, 0.18, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.18, 0.012, 8, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              color={mat.color}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Liquid Inside Beaker (Emissive Accent Color) */}
          <group>
            {/* Liquid Volume Cylinder */}
            <mesh position={[0, -0.085, 0]} castShadow>
              <cylinderGeometry args={[0.172, 0.172, 0.18, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={0.8}
                transparent
                opacity={0.85}
              />
            </mesh>

            {/* Liquid Surface Meniscus Disc */}
            <mesh position={[0, 0.005, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.172, 0.172, 0.004, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Measurement tick marks on beaker wall (White lines) */}
          <group position={[0, -0.04, 0.176]}>
            <mesh position={[0, 0.08, 0]} castShadow>
              <boxGeometry args={[0.06, 0.006, 0.002]} />
              <meshStandardMaterial color="#ffffff" roughness={0.5} opacity={0.8} transparent />
            </mesh>
            <mesh position={[0, 0.02, 0]} castShadow>
              <boxGeometry args={[0.04, 0.006, 0.002]} />
              <meshStandardMaterial color="#ffffff" roughness={0.5} opacity={0.8} transparent />
            </mesh>
            <mesh position={[0, -0.04, 0]} castShadow>
              <boxGeometry args={[0.06, 0.006, 0.002]} />
              <meshStandardMaterial color="#ffffff" roughness={0.5} opacity={0.8} transparent />
            </mesh>
            <mesh position={[0, -0.1, 0]} castShadow>
              <boxGeometry args={[0.04, 0.006, 0.002]} />
              <meshStandardMaterial color="#ffffff" roughness={0.5} opacity={0.8} transparent />
            </mesh>
          </group>

          {/* Bubbles Floating Upwards */}
          <group>
            {/* Bubble 1 */}
            <mesh position={[-0.04, 0.06, 0.03]} castShadow>
              <sphereGeometry args={[0.016, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* Bubble 2 */}
            <mesh position={[0.05, 0.12, -0.03]} castShadow>
              <sphereGeometry args={[0.013, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
            {/* Bubble 3 */}
            <mesh position={[-0.01, 0.16, 0.01]} castShadow>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
