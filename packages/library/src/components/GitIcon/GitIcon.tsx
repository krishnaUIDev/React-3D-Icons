import { SharedWrapper } from "../SharedWrapper";
import { GitIconProps } from "./types";

export function GitIcon(props: GitIconProps) {
  return (
    <SharedWrapper iconId="git" {...props}>
      {(mat) => (
        <group>
          {/* Angled square badge rotated to look like Git logo diamond */}
          <group rotation={[Math.PI / 12, -Math.PI / 8, 0]}>
            {/* Tilted diamond backing box */}
            <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.74, 0.74, 0.08]} />
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

            {/* Git Branch Lines Group (raised slightly above the face of the backing) */}
            <group position={[0, 0, 0.05]}>
              {/* Main Vertical Trunk line */}
              <mesh position={[-0.14, 0, 0]}>
                <cylinderGeometry args={[0.024, 0.024, 0.48, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color="#ffffff" />
              </mesh>

              {/* Branch curve line */}
              <mesh position={[0, -0.01, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.024, 0.024, 0.22, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color="#ffffff" />
              </mesh>
              <mesh position={[0.08, 0.11, 0]}>
                <cylinderGeometry args={[0.024, 0.024, 0.16, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.8} color="#ffffff" />
              </mesh>

              {/* Bottom Trunk Node Sphere */}
              <mesh position={[-0.14, -0.24, 0]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial roughness={0.2} metalness={0.9} color={props.accentColor || "#f43f5e"} />
              </mesh>

              {/* Top Trunk Node Sphere */}
              <mesh position={[-0.14, 0.24, 0]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial roughness={0.2} metalness={0.9} color={props.accentColor || "#f43f5e"} />
              </mesh>

              {/* Branch Node Sphere */}
              <mesh position={[0.08, 0.19, 0]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial roughness={0.2} metalness={0.9} color={props.accentColor || "#f43f5e"} />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
