import { SharedWrapper } from "../SharedWrapper";
import { GraduationCapIconProps } from "./types";

export function GraduationCapIcon(props: GraduationCapIconProps) {
  return (
    <SharedWrapper iconId="graduationcap" {...props}>
      {(mat) => {
        const tasselColor = props.accentColor || "#eab308"; // Golden tassel by default
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : tasselColor;

        return (
          <group rotation={[0.15, -0.3, 0.08]}>
            {/* Skullcap / Cap Base */}
            <mesh castShadow receiveShadow position={[0, -0.06, 0]} rotation={[Math.PI, 0, 0]}>
              <sphereGeometry args={[0.35, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2]} />
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

            {/* Cap Headband / Bottom Cylinder */}
            <mesh castShadow receiveShadow position={[0, -0.14, 0]}>
              <cylinderGeometry args={[0.35, 0.35, 0.16, 24]} />
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

            {/* Mortarboard (Flat Square Diamond Top) */}
            <mesh castShadow receiveShadow position={[0, 0.14, 0]} rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[1.25, 0.06, 1.25]} />
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

            {/* Center Button */}
            <mesh castShadow position={[0, 0.18, 0]}>
              <cylinderGeometry args={[0.07, 0.07, 0.04, 12]} />
              <meshStandardMaterial
                color={ac}
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>

            {/* Tassel String Part 1 (Draped to the side edge) */}
            <mesh
              castShadow
              position={[0.26, 0.18, 0.26]}
              rotation={[0.05, -Math.PI / 4, -0.05]}
            >
              <cylinderGeometry args={[0.015, 0.015, 0.72, 8]} />
              <meshStandardMaterial color={ac} roughness={0.3} metalness={0.4} />
            </mesh>

            {/* Tassel String Part 2 (Hanging down) */}
            <mesh
              castShadow
              position={[0.52, 0.04, 0.52]}
              rotation={[0.1, 0, -0.1]}
            >
              <cylinderGeometry args={[0.015, 0.015, 0.28, 8]} />
              <meshStandardMaterial color={ac} roughness={0.3} metalness={0.4} />
            </mesh>

            {/* Tassel Brush (Golden Fringe) */}
            <mesh castShadow position={[0.54, -0.16, 0.54]} rotation={[0.1, 0, -0.1]}>
              <coneGeometry args={[0.06, 0.18, 12]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={0.6}
                roughness={0.25}
                metalness={0.5}
              />
            </mesh>
          </group>
        );
      }}
    </SharedWrapper>
  );
}
