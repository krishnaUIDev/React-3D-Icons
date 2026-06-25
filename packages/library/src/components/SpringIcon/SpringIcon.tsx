import { SharedWrapper } from "../SharedWrapper";
import { SpringIconProps } from "./types";

export function SpringIcon(props: SpringIconProps) {
  const turns = 5;
  const spacing = 0.14;
  const helixRotation: [number, number, number] = [0.15, 0.1, 0.08];

  return (
    <SharedWrapper iconId="spring" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Spring Helical Coil Body */}
          <group>
            {Array.from({ length: turns }).map((_, index) => {
              const yPos = (index - (turns - 1) / 2) * spacing;
              return (
                <mesh
                  key={index}
                  castShadow
                  receiveShadow
                  position={[0, yPos, 0]}
                  rotation={helixRotation}
                >
                  <torusGeometry args={[0.22, 0.032, 10, 32]} />
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
              );
            })}
          </group>

          {/* Top Hook Attachment (Accent color) */}
          <mesh
            castShadow
            position={[0, (turns / 2) * spacing, 0]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <torusGeometry args={[0.1, 0.024, 8, 20]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Bottom Hook Attachment (Accent color) */}
          <mesh
            castShadow
            position={[0, -((turns / 2) * spacing), 0]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <torusGeometry args={[0.1, 0.024, 8, 20]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.2}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
