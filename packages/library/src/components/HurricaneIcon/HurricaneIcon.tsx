import { SharedWrapper } from "../SharedWrapper";
import { HurricaneIconProps } from "./types";

export function HurricaneIcon(props: HurricaneIconProps) {
  return (
    <SharedWrapper iconId="hurricane" {...props}>
      {(mat) => (
        <group rotation={[0.2, -Math.PI / 12, 0]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Central Eye Ring (Eye wall) */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.16, 0.04, 12, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              color={mat.color}
            />
          </mesh>

          {/* Central Eye Core (Glowing Accent) */}
          <mesh castShadow>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Spiral Arm 1 */}
          <group rotation={[0, 0, 0.2]}>
            {/* Segment 1 */}
            <mesh position={[0.16, 0.1, 0]} rotation={[0, 0, Math.PI / 6]} castShadow receiveShadow>
              <boxGeometry args={[0.22, 0.045, 0.035]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Segment 2 */}
            <mesh position={[0.28, 0.2, 0]} rotation={[0, 0, Math.PI / 3]} castShadow receiveShadow>
              <boxGeometry args={[0.16, 0.035, 0.03]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Outer Tip Glow */}
            <mesh position={[0.34, 0.28, 0]} castShadow>
              <sphereGeometry args={[0.024, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Spiral Arm 2 (Symmetrical 180 deg rotation) */}
          <group rotation={[0, 0, Math.PI + 0.2]}>
            {/* Segment 1 */}
            <mesh position={[0.16, 0.1, 0]} rotation={[0, 0, Math.PI / 6]} castShadow receiveShadow>
              <boxGeometry args={[0.22, 0.045, 0.035]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Segment 2 */}
            <mesh position={[0.28, 0.2, 0]} rotation={[0, 0, Math.PI / 3]} castShadow receiveShadow>
              <boxGeometry args={[0.16, 0.035, 0.03]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Outer Tip Glow */}
            <mesh position={[0.34, 0.28, 0]} castShadow>
              <sphereGeometry args={[0.024, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#0ea5e9"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
