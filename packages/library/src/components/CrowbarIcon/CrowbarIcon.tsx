import { SharedWrapper } from "../SharedWrapper";
import { CrowbarIconProps } from "./types";

export function CrowbarIcon(props: CrowbarIconProps) {
  return (
    <SharedWrapper iconId="crowbar" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, -Math.PI / 8]} position={[0, 0, 0]}>
          {/* Main Hexagonal Steel Shaft */}
          <mesh castShadow receiveShadow position={[-0.04, -0.04, 0]}>
            <cylinderGeometry args={[0.018, 0.018, 0.54, 6]} />
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

          {/* Top Hook/Claw Curve (Half torus) */}
          <group position={[-0.1, 0.22, 0]}>
            <mesh castShadow rotation={[0, 0, Math.PI / 6]}>
              <torusGeometry args={[0.08, 0.018, 8, 16, Math.PI * 0.9]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Split prying claw tip (Glowing Accent) */}
            <mesh position={[-0.06, -0.05, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
              <boxGeometry args={[0.038, 0.07, 0.018]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Bottom Angled Chisel Wedge Tip */}
          <mesh position={[-0.04, -0.32, 0]} rotation={[0, 0, 0.15]} castShadow>
            <coneGeometry args={[0.024, 0.06, 6]} />
            <meshStandardMaterial
              roughness={0.15}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
