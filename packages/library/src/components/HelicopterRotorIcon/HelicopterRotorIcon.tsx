import { SharedWrapper } from "../SharedWrapper";
import { HelicopterRotorIconProps } from "./types";

export function HelicopterRotorIcon(props: HelicopterRotorIconProps) {
  const bladeCount = 4;

  return (
    <SharedWrapper iconId="rotor" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Main Vertical Mast/Rotor Shaft */}
          <mesh castShadow receiveShadow position={[0, -0.06, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.28, 16]} />
            <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Lower Control Swashplate assembly (Metal collars) */}
          <group position={[0, -0.08, 0]}>
            {/* Stationary swashplate ring */}
            <mesh castShadow>
              <cylinderGeometry args={[0.07, 0.07, 0.016, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.85} color="#94a3b8" />
            </mesh>
            {/* Rotating swashplate ring (Glowing Accent) */}
            <mesh position={[0, 0.014, 0]} castShadow>
              <cylinderGeometry args={[0.072, 0.072, 0.012, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Upper Pitch Control Scissors Links (Connecting rods) */}
          <group position={[0, -0.01, 0]}>
            <mesh position={[0.036, 0, 0]} rotation={[0, 0, 0.15]} castShadow>
              <cylinderGeometry args={[0.005, 0.005, 0.08, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
            <mesh position={[-0.036, 0, 0]} rotation={[0, 0, -0.15]} castShadow>
              <cylinderGeometry args={[0.005, 0.005, 0.08, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Main Rotor Hub (Pitch housing on mast end) */}
          <mesh position={[0, 0.08, 0]} castShadow>
            <cylinderGeometry args={[0.058, 0.058, 0.06, 24]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>
          <mesh position={[0, 0.11, 0]} castShadow>
            <sphereGeometry args={[0.058, 16, 12]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* 4 Pitch Horns & Rotor Blades */}
          <group position={[0, 0.08, 0]}>
            {Array.from({ length: bladeCount }).map((_, index) => {
              const angle = (index * 2 * Math.PI) / bladeCount;
              return (
                <group key={index} rotation={[0, angle, 0]}>
                  {/* Pitch Horn Grip extension */}
                  <mesh position={[0.046, 0.012, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
                    <cylinderGeometry args={[0.014, 0.014, 0.04, 12]} />
                    <meshStandardMaterial roughness={0.2} metalness={0.8} color="#94a3b8" />
                  </mesh>
                  {/* Glowing connector pin (Accent) */}
                  <mesh position={[0.07, 0.016, 0]} castShadow>
                    <sphereGeometry args={[0.014, 12, 12]} />
                    <meshStandardMaterial
                      color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                      emissiveIntensity={1.3}
                    />
                  </mesh>
                  {/* Aerodynamic Rotor Blade */}
                  <mesh
                    position={[0.22, 0.02, 0]}
                    rotation={[0.06, 0, 0]} // Slight blade pitch twist
                    castShadow
                  >
                    <boxGeometry args={[0.28, 0.008, 0.038]} />
                    <meshPhysicalMaterial
                      roughness={mat.roughness}
                      metalness={mat.metalness}
                      transmission={mat.transmission}
                      thickness={mat.thickness}
                      clearcoat={mat.clearcoat}
                      clearcoatRoughness={mat.clearcoatRoughness}
                      ior={mat.ior}
                      color={mat.color}
                    />
                  </mesh>
                </group>
              );
            })}
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
