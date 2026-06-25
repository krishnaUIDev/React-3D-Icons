import { SharedWrapper } from "../SharedWrapper";
import { PowerSupplyIconProps } from "./types";

export function PowerSupplyIcon(props: PowerSupplyIconProps) {
  const cableCount = 6;
  const grilleSpokes = 8;

  return (
    <SharedWrapper iconId="powersupply" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.35, 0.1]} position={[0, 0, 0]}>
          
          {/* Main ATX Box Case (Power Supply Chassis) */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.32, 0.32, 0.28]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Rear Power Input Wall AC Receptacle */}
          <group position={[-0.162, -0.06, 0.04]}>
            {/* Input plug housing */}
            <mesh castShadow>
              <boxGeometry args={[0.008, 0.06, 0.09]} />
              <meshStandardMaterial roughness={0.3} metalness={0.9} color="#1e293b" />
            </mesh>
            {/* Three male brass connection pins */}
            {[-0.02, 0, 0.02].map((zOffset, idx) => (
              <mesh key={idx} position={[-0.012, idx === 1 ? 0.016 : -0.016, zOffset]} rotation={[0, 0, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.005, 0.005, 0.02, 8]} />
                <meshStandardMaterial roughness={0.15} metalness={0.95} color="#eab308" />
              </mesh>
            ))}
          </group>

          {/* Rear I/O Power Rocker Switch */}
          <group position={[-0.162, 0.06, 0.04]}>
            <mesh castShadow>
              <boxGeometry args={[0.008, 0.05, 0.03]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#0f172a" />
            </mesh>
            {/* Red illuminated rocker switch (Glowing Accent) */}
            <mesh position={[-0.006, 0, 0]} castShadow>
              <boxGeometry args={[0.008, 0.034, 0.018]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Large Side Cooling Fan Cutout */}
          <group position={[0, 0, 0.141]}>
            {/* Dark background recess */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.114, 0.114, 0.004, 24]} />
              <meshStandardMaterial roughness={0.5} metalness={0.1} color="#0f172a" />
            </mesh>
            {/* Glowing Ring inside Fan Grille */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.002]} castShadow>
              <torusGeometry args={[0.09, 0.006, 8, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.2}
              />
            </mesh>
            {/* Grille Outer Wire Frame Rim */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.004]} castShadow>
              <torusGeometry args={[0.11, 0.006, 8, 24]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.004]} castShadow>
              <torusGeometry args={[0.05, 0.005, 8, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Fan Grille Radial Wire Spokes */}
            {Array.from({ length: grilleSpokes }).map((_, index) => {
              const angle = (index * 2 * Math.PI) / grilleSpokes;
              return (
                <mesh
                  key={index}
                  position={[0, 0, 0.004]}
                  rotation={[0, 0, angle]}
                  castShadow
                >
                  <mesh position={[0, 0.056, 0]}>
                    <boxGeometry args={[0.006, 0.11, 0.003]} />
                    <meshStandardMaterial roughness={0.15} metalness={0.8} color="#cbd5e1" />
                  </mesh>
                </mesh>
              );
            })}
          </group>

          {/* Front Braided Cable Exit Sleeve */}
          <group position={[0.161, -0.06, -0.04]}>
            {/* Black rubber grommet sleeve */}
            <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
              <cylinderGeometry args={[0.046, 0.046, 0.02, 16]} />
              <meshStandardMaterial roughness={0.4} metalness={0.2} color="#0f172a" />
            </mesh>
            {/* Multi-colored bundled power cables curving outwards */}
            {Array.from({ length: cableCount }).map((_, idx) => {
              const angle = (idx * 2 * Math.PI) / cableCount;
              const yOffset = 0.022 * Math.cos(angle);
              const zOffset = 0.022 * Math.sin(angle);
              // Alternate cable colors: red, yellow, orange, black
              const colors = ["#ef4444", "#fbbf24", "#f97316", "#1e293b"];
              const cableColor = colors[idx % colors.length];
              return (
                <group key={idx} position={[0.01, yOffset, zOffset]}>
                  {/* Straight short cylinder sleeve segment */}
                  <mesh rotation={[0, Math.PI / 2, 0]} castShadow>
                    <cylinderGeometry args={[0.008, 0.008, 0.06, 8]} />
                    <meshStandardMaterial roughness={0.3} metalness={0.1} color={cableColor} />
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
