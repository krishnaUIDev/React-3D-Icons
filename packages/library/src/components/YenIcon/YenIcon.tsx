import { SharedWrapper } from "../SharedWrapper";
import { YenIconProps } from "./types";

export function YenIcon(props: YenIconProps) {
  return (
    <SharedWrapper iconId="yen" {...props}>
      {(mat) => (
        <group rotation={[0.25, -Math.PI / 6, 0.08]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Main Gold/Metallic Disc (Preset material) */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 24]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Raised Outer Rim Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.001]} castShadow>
            <torusGeometry args={[0.29, 0.016, 8, 24]} />
            <meshStandardMaterial color="#ca8a04" metalness={0.8} roughness={0.3} />
          </mesh>

          {/* Yen Symbol (¥ in Center - Glowing Accent) */}
          <group position={[0, 0, 0.026]}>
            {/* Left Upper branch */}
            <mesh position={[-0.045, 0.07, 0]} rotation={[0, 0, -0.6]} castShadow>
              <boxGeometry args={[0.018, 0.11, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Right Upper branch */}
            <mesh position={[0.045, 0.07, 0]} rotation={[0, 0, 0.6]} castShadow>
              <boxGeometry args={[0.018, 0.11, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Center vertical leg */}
            <mesh position={[0, -0.04, 0]} castShadow>
              <boxGeometry args={[0.018, 0.12, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Upper horizontal crossbar */}
            <mesh position={[0, -0.01, 0]} castShadow>
              <boxGeometry args={[0.13, 0.018, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Lower horizontal crossbar */}
            <mesh position={[0, -0.06, 0]} castShadow>
              <boxGeometry args={[0.13, 0.018, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
