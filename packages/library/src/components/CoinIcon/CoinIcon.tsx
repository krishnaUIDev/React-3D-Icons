import { SharedWrapper } from "../SharedWrapper";
import { CoinIconProps } from "./types";

export function CoinIcon(props: CoinIconProps) {
  return (
    <SharedWrapper iconId="coin" {...props}>
      {(mat) => (
        <group rotation={[0.3, -Math.PI / 6, 0.1]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
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

          {/* Raised Outer Rim Ring (For premium coin texture) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.001]} castShadow>
            <torusGeometry args={[0.29, 0.016, 8, 24]} />
            <meshStandardMaterial color="#ca8a04" metalness={0.8} roughness={0.3} />
          </mesh>

          {/* Currency Dollar Sign ($ Symbol in Center - Glowing Accent) */}
          <group position={[0, 0, 0.026]}>
            {/* Center Vertical Bar */}
            <mesh castShadow>
              <boxGeometry args={[0.018, 0.22, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Top Loop Horizontal Segment */}
            <mesh position={[0, 0.06, 0]} castShadow>
              <boxGeometry args={[0.1, 0.018, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Middle Horizontal Segment */}
            <mesh position={[0, 0, 0]} castShadow>
              <boxGeometry args={[0.1, 0.018, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Bottom Loop Horizontal Segment */}
            <mesh position={[0, -0.06, 0]} castShadow>
              <boxGeometry args={[0.1, 0.018, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Left/Right hooks to make S-shape */}
            <mesh position={[-0.05, 0.03, 0]}>
              <boxGeometry args={[0.018, 0.06, 0.01]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
            <mesh position={[0.05, -0.03, 0]}>
              <boxGeometry args={[0.018, 0.06, 0.01]} />
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
