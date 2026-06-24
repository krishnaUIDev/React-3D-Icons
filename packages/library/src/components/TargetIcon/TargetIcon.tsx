import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function TargetIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="target" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.4, 0.15]} position={[0, 0, 0]}>
          
          {/* Target Base / Outer Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.7, 0.7, 0.08, 32]} />
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

          {/* Middle Ring (Contrast Ring) */}
          <mesh position={[0, 0, 0.01]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.46, 0.46, 0.085, 32]} />
            <meshPhysicalMaterial
              roughness={Math.max(0.1, mat.roughness - 0.1)}
              metalness={Math.max(0, mat.metalness - 0.2)}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color="#ffffff" // White contrasting ring
            />
          </mesh>

          {/* Inner Ring (Bullseye center) */}
          <mesh position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.22, 0.22, 0.09, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Arrow piercing the target */}
          <group position={[0, 0, 0.05]} rotation={[-0.4, 0.4, 0]}>
            
            {/* Arrow Shaft */}
            <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 1.2, 12]} />
              <meshStandardMaterial roughness={0.5} metalness={0.7} color="#cbd5e1" />
            </mesh>

            {/* Arrow Tip (embedding into the center) */}
            <mesh position={[0, 0, -0.3]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
              <coneGeometry args={[0.05, 0.15, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#d4af37" />
            </mesh>

            {/* Arrow Feathers / Fletching */}
            <group position={[0, 0, 0.85]}>
              {/* Top Feather */}
              <mesh position={[0, 0.08, 0]} rotation={[0, 0, 0]} castShadow>
                <boxGeometry args={[0.01, 0.12, 0.25]} />
                <meshStandardMaterial color="#ffffff" roughness={0.6} />
              </mesh>
              {/* Diagonal Left Feather */}
              <mesh position={[-0.07, -0.04, 0]} rotation={[0, 0, Math.PI / 3]} castShadow>
                <boxGeometry args={[0.01, 0.12, 0.25]} />
                <meshStandardMaterial color="#ffffff" roughness={0.6} />
              </mesh>
              {/* Diagonal Right Feather */}
              <mesh position={[0.07, -0.04, 0]} rotation={[0, 0, -Math.PI / 3]} castShadow>
                <boxGeometry args={[0.01, 0.12, 0.25]} />
                <meshStandardMaterial color="#ffffff" roughness={0.6} />
              </mesh>
            </group>

          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
