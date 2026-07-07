import { SharedWrapper } from "../SharedWrapper";
import { AppleIconProps } from "./types";

export function AppleIcon(props: AppleIconProps) {
  return (
    <SharedWrapper iconId="apple" {...props}>
      {(mat) => (
        <group
          rotation={[0.1, -Math.PI / 8, 0.05]}
          position={[0, -0.02, 0]}
          scale={[1.4, 1.4, 1.4]}
        >
          {/* Main Apple Body (Organic cleft look with two overlapping lobes) */}
          <group position={[0, 0, 0]}>
            {/* Left Lobe */}
            <mesh position={[-0.05, 0, 0]} castShadow receiveShadow>
              <sphereGeometry args={[0.24, 32, 32]} />
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
            {/* Right Lobe */}
            <mesh position={[0.05, 0, 0]} castShadow receiveShadow>
              <sphereGeometry args={[0.24, 32, 32]} />
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
          </group>

          {/* Stem (Brown curved cylinder) */}
          <mesh position={[0, 0.22, 0]} rotation={[0, 0, Math.PI / 10]} castShadow>
            <cylinderGeometry args={[0.012, 0.012, 0.14, 8]} />
            <meshStandardMaterial roughness={0.7} metalness={0.0} color="#78350f" />
          </mesh>

          {/* Green Leaf (Pointed box segment) */}
          <mesh position={[0.06, 0.26, 0.02]} rotation={[0.4, 0.2, 0.8]} castShadow>
            <boxGeometry args={[0.1, 0.01, 0.05]} />
            <meshStandardMaterial roughness={0.6} metalness={0.1} color="#16a34a" />
          </mesh>

          {/* Glowing seed core (Emissive accent inside the glass/metal body) */}
          <mesh position={[0, 0, 0]} castShadow>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
              emissiveIntensity={1.3}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
