import { SharedWrapper } from "../SharedWrapper";
import { BanknoteIconProps } from "./types";

export function BanknoteIcon(props: BanknoteIconProps) {
  return (
    <SharedWrapper iconId="banknote" {...props}>
      {(mat) => (
        <group rotation={[0.25, -Math.PI / 6, 0.12]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Bottom Paper Bill (Slightly rotated green plate) */}
          <mesh position={[-0.02, -0.04, -0.02]} rotation={[0.05, -0.05, -0.04]} castShadow>
            <boxGeometry args={[0.46, 0.26, 0.01]} />
            <meshStandardMaterial color="#16a34a" roughness={0.7} />
          </mesh>

          {/* Middle Paper Bill (Slightly offset green plate) */}
          <mesh position={[0.01, -0.01, -0.01]} rotation={[-0.03, 0.03, 0.02]} castShadow>
            <boxGeometry args={[0.46, 0.26, 0.01]} />
            <meshStandardMaterial color="#15803d" roughness={0.7} />
          </mesh>

          {/* Top Paper Bill (Preset Material, e.g. glass or primary clay note) */}
          <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.46, 0.26, 0.012]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              color={mat.color}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.3}
            />
          </mesh>

          {/* Top Bill Decorative Oval Border (Inset details) */}
          <mesh position={[0, 0.02, 0.007]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.004, 16]} />
            <meshStandardMaterial color="#86efac" roughness={0.6} />
          </mesh>

          {/* Paper Currency Wrapping Band (Slate/dark paper collar wrapping around center) */}
          <mesh position={[0, -0.01, 0]} castShadow>
            <boxGeometry args={[0.09, 0.28, 0.048]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} />
          </mesh>

          {/* Glowing Currency Symbol on the band center (Emissive Accent Color) */}
          <group position={[0, -0.01, 0.025]}>
            <mesh castShadow>
              <sphereGeometry args={[0.022, 10, 10]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissiveIntensity={1.4}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
