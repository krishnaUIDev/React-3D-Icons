import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function MegaphoneIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="megaphone" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.5, 0.2]} position={[-0.05, 0.05, 0]}>
          {/* Main Cone Horn Body */}
          <group position={[0.08, 0.08, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh castShadow receiveShadow>
              <coneGeometry args={[0.34, 0.64, 32, 1, true]} />
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
                side={2} // DoubleSide
              />
            </mesh>
          </group>

          {/* Front Opening Rim (Accent torus ring) */}
          <mesh position={[0.4, 0.08, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
            <torusGeometry args={[0.34, 0.03, 12, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Back Cylindrical Casing/Cap */}
          <mesh position={[-0.24, 0.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.16, 0.16, 0.12, 24]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>
          <mesh position={[-0.3, 0.08, 0]} castShadow>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Hand Grip Handle */}
          <mesh position={[-0.14, -0.28, 0]} rotation={[0, 0, 0.15]} castShadow>
            <cylinderGeometry args={[0.045, 0.045, 0.48, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Sound / Volume Waves (two small torus arcs floating in front) */}
          <mesh position={[0.62, 0.08, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow>
            <torusGeometry args={[0.2, 0.02, 8, 24, Math.PI / 2]} />
            <meshStandardMaterial roughness={0.3} metalness={0.1} color="#e4e4e7" />
          </mesh>
          <mesh position={[0.82, 0.08, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow>
            <torusGeometry args={[0.34, 0.02, 8, 24, Math.PI / 2]} />
            <meshStandardMaterial roughness={0.3} metalness={0.1} color="#e4e4e7" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
