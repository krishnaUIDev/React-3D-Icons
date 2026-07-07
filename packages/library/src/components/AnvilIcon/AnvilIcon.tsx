import { SharedWrapper } from "../SharedWrapper";
import { AnvilIconProps } from "./types";

export function AnvilIcon(props: AnvilIconProps) {
  return (
    <SharedWrapper iconId="anvil" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.35, 0.05]} position={[0, 0.02, 0]}>
          {/* Main Waist Block */}
          <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
            <boxGeometry args={[0.3, 0.24, 0.22]} />
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

          {/* Left Pointy Horn */}
          <mesh castShadow position={[-0.26, 0.04, 0]} rotation={[0, 0, Math.PI / 2]}>
            <coneGeometry args={[0.09, 0.24, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Right Rectangular Tail */}
          <mesh castShadow position={[0.22, 0.04, 0]}>
            <boxGeometry args={[0.16, 0.16, 0.22]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Top Strike Deck Plate */}
          <mesh castShadow position={[0, 0.12, 0]}>
            <boxGeometry args={[0.42, 0.05, 0.22]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Flared Bottom Base Feet */}
          <group position={[0, -0.24, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.44, 0.12, 0.32]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Base Bevel Trim (Metal/Steel color) */}
            <mesh position={[0, 0.07, 0]} castShadow>
              <boxGeometry args={[0.34, 0.02, 0.24]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#64748b" : "#475569"}
              />
            </mesh>
          </group>

          {/* Glowing Red-Hot Forged Metal Bar on top of Anvil (Accent color) */}
          <mesh position={[0.04, 0.17, 0]} castShadow>
            <boxGeometry args={[0.14, 0.05, 0.08]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f97316"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#f97316"}
              emissiveIntensity={1.4}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
