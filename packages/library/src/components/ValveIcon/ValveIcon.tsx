import { SharedWrapper } from "../SharedWrapper";
import { ValveIconProps } from "./types";

export function ValveIcon(props: ValveIconProps) {
  const spokeCount = 4;

  return (
    <SharedWrapper iconId="valve" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.2, 0.05]} position={[0, 0, 0]}>
          {/* Main Horizontal Water Pipe (T-junction pipe) */}
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow position={[0, -0.16, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.44, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
          </mesh>

          {/* Pipe Connection Flanges (Thick collar rings at ends) */}
          {[-0.21, 0.21].map((xPos, idx) => (
            <mesh key={idx} rotation={[0, 0, Math.PI / 2]} position={[xPos, -0.16, 0]} castShadow>
              <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#334155" />
            </mesh>
          ))}

          {/* Vertical Bonnet Stem Pipe (Neck base) */}
          <mesh position={[0, -0.06, 0]} castShadow>
            <cylinderGeometry args={[0.046, 0.046, 0.18, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
          </mesh>

          {/* Hexagonal Bonnet Packing Nut */}
          <mesh position={[0, 0.03, 0]} rotation={[0, Math.PI / 6, 0]} castShadow>
            <cylinderGeometry args={[0.054, 0.054, 0.03, 6]} />
            <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
          </mesh>

          {/* Golden Threaded Valve Stem Screw (Center spindle) */}
          <mesh position={[0, 0.12, 0]} castShadow>
            <cylinderGeometry args={[0.016, 0.016, 0.18, 12]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#eab308" />
          </mesh>

          {/* Main Handwheel Controller */}
          <group position={[0, 0.16, 0]}>
            {/* Outer Wheel Rim */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.18, 0.022, 12, 36]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Concentric Glowing Accent Indicator Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.005, 0]} castShadow>
              <torusGeometry args={[0.11, 0.012, 8, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Wheel Spoke Ribs */}
            {Array.from({ length: spokeCount }).map((_, index) => {
              const angle = (index * 2 * Math.PI) / spokeCount;
              return (
                <mesh
                  key={index}
                  position={[0, 0, 0]}
                  rotation={[0, angle, Math.PI / 2]}
                  castShadow
                >
                  <cylinderGeometry args={[0.014, 0.014, 0.36, 12]} />
                  <meshPhysicalMaterial
                    roughness={mat.roughness}
                    metalness={mat.metalness}
                    transmission={mat.transmission}
                    thickness={mat.thickness}
                    color={mat.color}
                  />
                </mesh>
              );
            })}

            {/* Central Hex Nut cap */}
            <mesh position={[0, 0.015, 0]} rotation={[0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 6]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#cbd5e1" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
