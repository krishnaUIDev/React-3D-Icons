import { SharedWrapper } from "../SharedWrapper";
import { HammerIconProps } from "./types";

export function HammerIcon(props: HammerIconProps) {
  return (
    <SharedWrapper iconId="hammer" {...props}>
      {(mat) => (
        <group>
          {/* Main vertical handle rotated slightly */}
          <group rotation={[0, 0, -Math.PI / 12]}>
            {/* Grip Handle */}
            <mesh castShadow receiveShadow position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 1.0, 16]} />
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
            
            {/* Handle Grip rubber sleeve (bottom half) */}
            <mesh position={[0, -0.4, 0]}>
              <cylinderGeometry args={[0.09, 0.09, 0.5, 16]} />
              <meshStandardMaterial 
                roughness={0.8} 
                metalness={0.1} 
                color={props.theme === "dark" ? "#1e293b" : "#64748b"} 
              />
            </mesh>
            
            {/* Metal collar connector */}
            <mesh position={[0, 0.32, 0]}>
              <cylinderGeometry args={[0.085, 0.085, 0.08, 16]} />
              <meshStandardMaterial 
                roughness={0.2} 
                metalness={0.9} 
                color={props.theme === "dark" ? "#cbd5e1" : "#475569"} 
              />
            </mesh>

            {/* Hammer Head group */}
            <group position={[0, 0.42, 0]} rotation={[0, 0, Math.PI / 2]}>
              {/* Central connecting block */}
              <mesh castShadow>
                <boxGeometry args={[0.2, 0.22, 0.2]} />
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

              {/* Striking Face Cylinder (extends left) */}
              <mesh castShadow position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.11, 0.09, 0.24, 16]} />
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

              {/* Claw Curved Tail (extends right) */}
              <group position={[-0.2, 0.05, 0]} rotation={[0, 0, -Math.PI / 6]}>
                {/* Upper Claw Prong */}
                <mesh castShadow position={[0, 0, 0.04]}>
                  <boxGeometry args={[0.2, 0.06, 0.05]} />
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
                {/* Lower Claw Prong */}
                <mesh castShadow position={[0, 0, -0.04]}>
                  <boxGeometry args={[0.2, 0.06, 0.05]} />
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
              </group>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
