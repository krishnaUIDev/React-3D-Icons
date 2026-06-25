import { SharedWrapper } from "../SharedWrapper";
import { NodeIconProps } from "./types";

export function NodeIcon(props: NodeIconProps) {
  return (
    <SharedWrapper iconId="node" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.25, 0.05]}>

          {/* Hexagonal prism body */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[0.85, 0.85, 0.35, 6]} />
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

          {/* Hexagonal border ring */}
          <mesh position={[0, 0.19, 0]}>
            <cylinderGeometry args={[0.88, 0.88, 0.04, 6]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>

          {/* Bottom border ring */}
          <mesh position={[0, -0.19, 0]}>
            <cylinderGeometry args={[0.88, 0.88, 0.04, 6]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>

          {/* Inner circuit traces: horizontal bar */}
          <mesh position={[0, 0, 0.19]}>
            <boxGeometry args={[0.6, 0.07, 0.04]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissiveIntensity={0.9}
              roughness={0.1}
              metalness={0.3}
            />
          </mesh>

          {/* Inner circuit traces: vertical bar */}
          <mesh position={[0, 0, 0.19]}>
            <boxGeometry args={[0.07, 0.55, 0.04]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
              emissiveIntensity={0.9}
              roughness={0.1}
              metalness={0.3}
            />
          </mesh>

          {/* Corner dot nodes */}
          {[
            [0.28, 0.28], [-0.28, 0.28], [0.28, -0.28], [-0.28, -0.28]
          ].map(([x, y], i) => (
            <mesh key={i} position={[x, y, 0.2]}>
              <sphereGeometry args={[0.055, 8, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#68a063"}
                emissiveIntensity={1.1}
              />
            </mesh>
          ))}

        </group>
      )}
    </SharedWrapper>
  );
}
