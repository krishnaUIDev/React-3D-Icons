import { SharedWrapper } from "../SharedWrapper";
import { NutIconProps } from "./types";

export function NutIcon(props: NutIconProps) {
  return (
    <SharedWrapper iconId="nut" {...props}>
      {(mat) => (
        <group>
          {/* Hex Nut rotated to show 3D volume */}
          <group rotation={[Math.PI / 6, Math.PI / 4, 0]}>
            {/* Hexagonal body */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.55, 0.55, 0.32, 6]} />
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
                emissiveIntensity={mat.emissiveIntensity}
              />
            </mesh>

            {/* Chamfered edge lines (torus around the top and bottom faces to give beveled look) */}
            <mesh position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.48, 0.03, 8, 24]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} />
            </mesh>
            <mesh position={[0, -0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.48, 0.03, 8, 24]} />
              <meshPhysicalMaterial roughness={mat.roughness} metalness={mat.metalness} color={mat.color} />
            </mesh>

            {/* Threaded hole center (contrasting core) */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.26, 0.26, 0.34, 16]} />
              <meshStandardMaterial
                roughness={0.9}
                color={props.theme === "dark" ? "#0f172a" : "#cbd5e1"}
              />
            </mesh>

            {/* Inner thread ridges (simulated using small toruses) */}
            {[-0.1, 0, 0.1].map((yOffset, i) => (
              <mesh key={i} position={[0, yOffset, 0]} rotation={[Math.PI / 2, 0.1, 0]}>
                <torusGeometry args={[0.25, 0.02, 6, 16]} />
                <meshStandardMaterial
                  roughness={0.3}
                  metalness={0.8}
                  color={props.theme === "dark" ? "#475569" : "#94a3b8"}
                />
              </mesh>
            ))}
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
