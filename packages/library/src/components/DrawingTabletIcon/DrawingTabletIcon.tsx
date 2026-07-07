import { SharedWrapper } from "../SharedWrapper";
import { DrawingTabletIconProps } from "./types";

export function DrawingTabletIcon(props: DrawingTabletIconProps) {
  return (
    <SharedWrapper iconId="drawingtablet" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.1]} position={[0, 0, 0]}>
          {/* Tablet Matte Bezel Chassis (Black outer frame) */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.46, 0.32, 0.024]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Active Drawing Canvas Screen (Inset dark glass plate) */}
          <mesh position={[0.03, 0, 0.008]} castShadow>
            <boxGeometry args={[0.36, 0.28, 0.016]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color="#0f172a" />
          </mesh>

          {/* Express Keys Bar (Left bezel buttons) */}
          <group position={[-0.18, 0, 0.014]}>
            {/* Express keys buttons */}
            {[-0.1, -0.04, 0.04, 0.1].map((yOffset, idx) => (
              <mesh key={idx} position={[0, yOffset, 0]} castShadow>
                <boxGeometry args={[0.02, 0.026, 0.006]} />
                <meshStandardMaterial roughness={0.3} metalness={0.4} color="#334155" />
              </mesh>
            ))}
            {/* Glowing Accent circular dial key */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.014, 0.014, 0.008, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

          {/* Stylus Digital Pen (Hovering at a 30-degree tilt above the canvas) */}
          <group position={[0.08, 0.06, 0.12]} rotation={[-0.4, 0.2, 0.5]}>
            {/* Pen tapered barrel body */}
            <mesh castShadow>
              <cylinderGeometry args={[0.014, 0.01, 0.22, 12]} />
              <meshStandardMaterial roughness={0.3} metalness={0.1} color="#1e293b" />
            </mesh>
            {/* Pen grip sleeve (Glowing Accent color) */}
            <mesh position={[0, -0.06, 0]} castShadow>
              <cylinderGeometry args={[0.015, 0.014, 0.06, 12]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={0.6}
              />
            </mesh>
            {/* Pen tapered tip cone */}
            <mesh position={[0, -0.11, 0]} castShadow>
              <cylinderGeometry args={[0.01, 0.002, 0.04, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.1} color="#0f172a" />
            </mesh>
            {/* Active tip nib */}
            <mesh position={[0, -0.132, 0]} castShadow>
              <sphereGeometry args={[0.003, 8, 8]} />
              <meshStandardMaterial roughness={0.15} metalness={0.1} color="#cbd5e1" />
            </mesh>
            {/* Eraser button cap (Top end) */}
            <mesh position={[0, 0.11, 0]} castShadow>
              <cylinderGeometry args={[0.012, 0.012, 0.01, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.7} color="#cbd5e1" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
