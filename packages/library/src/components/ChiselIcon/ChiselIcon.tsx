import { SharedWrapper } from "../SharedWrapper";
import { ChiselIconProps } from "./types";

export function ChiselIcon(props: ChiselIconProps) {
  return (
    <SharedWrapper iconId="chisel" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, -Math.PI / 6]} position={[0, 0, 0]}>
          
          {/* Wooden/Plastic Handle */}
          <mesh castShadow receiveShadow position={[0, 0.16, 0]}>
            <cylinderGeometry args={[0.038, 0.038, 0.28, 8]} />
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

          {/* Top Metal Strike Cap (End plate) */}
          <mesh position={[0, 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#cbd5e1" />
          </mesh>

          {/* Steel Bolster Collar (Between handle and blade - Glowing Accent) */}
          <mesh position={[0, 0.01, 0]} castShadow>
            <cylinderGeometry args={[0.034, 0.034, 0.04, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Chisel Steel Tang/Neck */}
          <mesh position={[0, -0.04, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.08, 8]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Extruded Beveled Chisel Blade */}
          <group position={[0, -0.22, 0]}>
            {/* Main Flat Blade */}
            <mesh castShadow>
              <boxGeometry args={[0.08, 0.28, 0.016]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
            {/* Beveled cutting edge (Tip) */}
            <mesh position={[0, -0.15, 0.004]} rotation={[-0.3, 0, 0]} castShadow>
              <boxGeometry args={[0.08, 0.03, 0.008]} />
              <meshStandardMaterial roughness={0.08} metalness={0.95} color="#94a3b8" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
