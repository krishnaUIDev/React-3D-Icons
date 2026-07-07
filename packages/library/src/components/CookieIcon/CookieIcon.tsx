import { SharedWrapper } from "../SharedWrapper";
import { CookieIconProps } from "./types";

export function CookieIcon(props: CookieIconProps) {
  return (
    <SharedWrapper iconId="cookie" {...props}>
      {(mat) => (
        <group rotation={[0.4, -Math.PI / 8, 0.1]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Main Cookie Disc (Preset Color - e.g. baked cookie gold/clay, with 1.7*PI sector for a bite mark) */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0.4]}>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 20, 1, false, 0, Math.PI * 1.65]} />
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

          {/* Cookie Surface Cracks (Vibrant details) */}
          <group position={[0, 0.026, 0]}>
            <mesh position={[-0.08, 0, 0.02]} rotation={[0, 0.4, 0]} castShadow>
              <boxGeometry args={[0.12, 0.006, 0.015]} />
              <meshStandardMaterial color="#422006" roughness={0.9} />
            </mesh>
            <mesh position={[0.04, 0, -0.12]} rotation={[0, -0.6, 0]} castShadow>
              <boxGeometry args={[0.08, 0.006, 0.015]} />
              <meshStandardMaterial color="#422006" roughness={0.9} />
            </mesh>
          </group>

          {/* Chocolate Chips (Scattered dark chocolate drop spheres on face) */}
          <group position={[0, 0.026, 0]}>
            {/* Chip 1 */}
            <mesh position={[0.08, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <sphereGeometry args={[0.035, 8, 8]} />
              <meshStandardMaterial color="#422006" roughness={0.7} />
            </mesh>

            {/* Chip 2 */}
            <mesh position={[-0.14, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <sphereGeometry args={[0.035, 8, 8]} />
              <meshStandardMaterial color="#422006" roughness={0.7} />
            </mesh>

            {/* Chip 3 */}
            <mesh position={[0.12, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <sphereGeometry args={[0.032, 8, 8]} />
              <meshStandardMaterial color="#422006" roughness={0.7} />
            </mesh>

            {/* Chip 4 */}
            <mesh position={[-0.08, 0, -0.14]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <sphereGeometry args={[0.038, 8, 8]} />
              <meshStandardMaterial color="#422006" roughness={0.7} />
            </mesh>

            {/* Chip 5 (Glowing Accent Melted Chocolate Chip) */}
            <mesh position={[0.02, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <sphereGeometry args={[0.04, 10, 10]} />
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
