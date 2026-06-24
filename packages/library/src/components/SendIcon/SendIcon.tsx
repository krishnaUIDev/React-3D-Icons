import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function SendIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="send" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.4, 0.2]} position={[0, 0, 0]}>
          
          {/* Central spine/keel of the paper plane */}
          <mesh castShadow receiveShadow position={[0, -0.1, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.08, 0.3, 1.2]} />
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

          {/* Left Wing Main Face (slanted outwards and up) */}
          <mesh 
            position={[-0.32, 0.08, -0.1]} 
            rotation={[0.1, -0.15, -0.2]} 
            castShadow
          >
            <boxGeometry args={[0.6, 0.04, 1.0]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Right Wing Main Face (slanted outwards and up) */}
          <mesh 
            position={[0.32, 0.08, -0.1]} 
            rotation={[0.1, 0.15, 0.2]} 
            castShadow
          >
            <boxGeometry args={[0.6, 0.04, 1.0]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Inner Wing Folds (forming the creased look) */}
          <mesh 
            position={[-0.1, -0.02, -0.05]} 
            rotation={[0, 0, -0.5]} 
            castShadow
          >
            <boxGeometry args={[0.2, 0.03, 0.95]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          <mesh 
            position={[0.1, -0.02, -0.05]} 
            rotation={[0, 0, 0.5]} 
            castShadow
          >
            <boxGeometry args={[0.2, 0.03, 0.95]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Under-Keel Triangle Fin (optional detail) */}
          <mesh position={[0, -0.22, -0.1]} rotation={[Math.PI / 4, 0, 0]} castShadow>
            <boxGeometry args={[0.04, 0.2, 0.35]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
