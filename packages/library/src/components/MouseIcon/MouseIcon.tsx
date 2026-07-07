import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function MouseIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="mouse" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.3, 0.2]} position={[0, -0.05, 0]}>
          {/* Main Mouse Body (Capsule shape) */}
          <mesh castShadow receiveShadow>
            <capsuleGeometry args={[0.38, 0.44, 8, 24]} />
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

          {/* Left/Right Button Separation Line (Thin dark box) */}
          <mesh position={[0, 0.32, 0.22]} castShadow>
            <boxGeometry args={[0.02, 0.32, 0.14]} />
            <meshStandardMaterial roughness={0.8} color="#27272a" />
          </mesh>

          {/* Center Scroll Wheel Cylinder */}
          <mesh position={[0, 0.22, 0.28]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.12, 16]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />{" "}
            {/* Metallic scroll wheel */}
          </mesh>

          {/* Bottom Sensor Light (Glow indicator on the back bottom) */}
          <mesh position={[0, -0.4, -0.1]} castShadow>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial
              roughness={0.1}
              color={mat.color}
              emissive={mat.color}
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
