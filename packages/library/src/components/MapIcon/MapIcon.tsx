import { SharedWrapper } from "../SharedWrapper";
import { MapIconProps } from "./types";

export function MapIcon(props: MapIconProps) {
  // Accordion folded panel values: width=0.4, height=1.1, depth=0.03
  const w = 0.4;
  const h = 1.1;
  const d = 0.035;

  return (
    <SharedWrapper iconId="map" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 8, -Math.PI / 12, 0]} position={[0, -0.05, 0]}>
          {/* Folded Panel 1 (Left) */}
          <group position={[-0.386, 0, 0.0]} rotation={[0, -Math.PI / 12, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[w, h, d]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
              />
            </mesh>
            {/* Route Line Segment */}
            <mesh position={[-0.05, 0.1, 0.02]} rotation={[0, 0, Math.PI / 6]}>
              <boxGeometry args={[0.2, 0.02, 0.01]} />
              <meshStandardMaterial color={props.accentColor || "#ec4899"} roughness={0.3} />
            </mesh>
            <mesh position={[0.02, -0.2, 0.02]} rotation={[0, 0, -Math.PI / 8]}>
              <boxGeometry args={[0.25, 0.02, 0.01]} />
              <meshStandardMaterial color={props.accentColor || "#ec4899"} roughness={0.3} />
            </mesh>
          </group>

          {/* Folded Panel 2 (Middle) */}
          <group position={[0, 0, 0.052]} rotation={[0, Math.PI / 12, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[w, h, d]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
              />
            </mesh>
            {/* Connecting Route Line */}
            <mesh position={[-0.08, -0.05, 0.02]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.18, 0.02, 0.01]} />
              <meshStandardMaterial color={props.accentColor || "#ec4899"} roughness={0.3} />
            </mesh>
            <mesh position={[0.05, 0.15, 0.02]} rotation={[0, 0, Math.PI / 10]}>
              <boxGeometry args={[0.22, 0.02, 0.01]} />
              <meshStandardMaterial color={props.accentColor || "#ec4899"} roughness={0.3} />
            </mesh>

            {/* Glowing Map Pin Locator */}
            <group position={[0.08, 0.25, 0.03]} rotation={[-Math.PI / 12, 0, 0]}>
              {/* Pin Base Joint */}
              <mesh castShadow>
                <cylinderGeometry args={[0.018, 0.01, 0.14, 16]} />
                <meshStandardMaterial roughness={0.2} metalness={0.8} color="#4b5563" />
              </mesh>
              {/* Pin Ball Head */}
              <mesh position={[0, 0.1, 0]} castShadow>
                <sphereGeometry args={[0.085, 24, 24]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                  emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                  emissiveIntensity={1.4}
                />
              </mesh>
            </group>
          </group>

          {/* Folded Panel 3 (Right) */}
          <group position={[0.386, 0, 0.0]} rotation={[0, -Math.PI / 12, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[w, h, d]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
              />
            </mesh>
            {/* Route Line Segment */}
            <mesh position={[-0.05, 0.2, 0.02]} rotation={[0, 0, -Math.PI / 6]}>
              <boxGeometry args={[0.15, 0.02, 0.01]} />
              <meshStandardMaterial color={props.accentColor || "#ec4899"} roughness={0.3} />
            </mesh>
            <mesh position={[0.04, -0.1, 0.02]} rotation={[0, 0, Math.PI / 12]}>
              <boxGeometry args={[0.22, 0.02, 0.01]} />
              <meshStandardMaterial color={props.accentColor || "#ec4899"} roughness={0.3} />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
