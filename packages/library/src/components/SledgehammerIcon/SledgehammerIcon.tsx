import { SharedWrapper } from "../SharedWrapper";
import { SledgehammerIconProps } from "./types";

export function SledgehammerIcon(props: SledgehammerIconProps) {
  return (
    <SharedWrapper iconId="sledgehammer" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, -Math.PI / 6]} position={[0, 0, 0]}>
          {/* Main Heavy Sledgehammer Head */}
          <group position={[0, 0.22, 0]}>
            {/* Hammer Head Block */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.34, 0.16, 0.16]} />
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

            {/* Beveled Octagonal End Cap Ring (Left face) */}
            <mesh position={[-0.17, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.08, 0.08, 0.02, 8]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#64748b" : "#475569"}
              />
            </mesh>

            {/* Beveled Octagonal End Cap Ring (Right face) */}
            <mesh position={[0.17, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.08, 0.08, 0.02, 8]} />
              <meshStandardMaterial
                roughness={0.2}
                metalness={0.8}
                color={props.theme === "dark" ? "#64748b" : "#475569"}
              />
            </mesh>

            {/* Glowing Accent Central Energy Core (Wrapping band) */}
            <mesh position={[0, 0, 0]} castShadow>
              <boxGeometry args={[0.08, 0.166, 0.166]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Steel Handle Collar (Connector sleeve right below head) */}
          <mesh position={[0, 0.1, 0]} castShadow>
            <cylinderGeometry args={[0.038, 0.038, 0.08, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Long Shaft Handle (Wooden or fiberglass post stretching down) */}
          <mesh position={[0, -0.16, 0]} castShadow>
            <cylinderGeometry args={[0.026, 0.026, 0.6, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Bottom Rubber Grip (End sleeve) */}
          <mesh position={[0, -0.38, 0]} castShadow>
            <cylinderGeometry args={[0.029, 0.029, 0.18, 16]} />
            <meshStandardMaterial roughness={0.7} metalness={0.1} color="#1e293b" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
