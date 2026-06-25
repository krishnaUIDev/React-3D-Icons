import { SharedWrapper } from "../SharedWrapper";
import { SecurityCameraIconProps } from "./types";

export function SecurityCameraIcon(props: SecurityCameraIconProps) {
  return (
    <SharedWrapper iconId="securitycamera" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.25, 0.05]} position={[0, 0, 0]}>
          
          {/* Wall Mount Base Plate (Disc on the wall) */}
          <mesh rotation={[0, 0, 0]} position={[0, 0, -0.16]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.02, 24]} />
            <meshStandardMaterial roughness={0.3} metalness={0.7} color="#475569" />
          </mesh>

          {/* Heavy Wall Mount Bracket Arm (L-shaped bracket) */}
          <group>
            {/* Horizontal offset stem */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.1]} castShadow>
              <cylinderGeometry args={[0.026, 0.026, 0.12, 12]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>
            {/* Angle bracket block */}
            <mesh position={[0, -0.02, -0.04]} castShadow>
              <boxGeometry args={[0.046, 0.06, 0.054]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#94a3b8" />
            </mesh>
            {/* Vertical swivel cylinder dropping down */}
            <mesh position={[0, -0.08, -0.04]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.08, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.85} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Swivel Pivot Ball (Universal joint) */}
          <mesh position={[0, -0.12, -0.04]} castShadow>
            <sphereGeometry args={[0.034, 16, 12]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#cbd5e1" />
          </mesh>

          {/* Main Camera Housing Barrel */}
          <group position={[0, -0.14, 0]} rotation={[0.4, 0, 0]}>
            {/* Cylinder shield */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.076, 0.064, 0.2, 24]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Rear Sunshield Hood (Overhanging plate on top) */}
            <mesh position={[0, 0.02, 0.016]} castShadow>
              <boxGeometry args={[0.082, 0.22, 0.012]} />
              <meshStandardMaterial roughness={0.3} metalness={0.4} color="#334155" />
            </mesh>

            {/* Front Bezel Rim Ring */}
            <mesh position={[0, 0.1, 0]} castShadow>
              <cylinderGeometry args={[0.078, 0.078, 0.02, 24]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>

            {/* Glowing Accent Status LED Ring around Lens */}
            <mesh position={[0, 0.108, 0]} castShadow>
              <torusGeometry args={[0.064, 0.006, 8, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                emissiveIntensity={1.3}
              />
            </mesh>

            {/* Camera Glass Lens Aperture */}
            <mesh position={[0, 0.101, 0]} castShadow>
              <cylinderGeometry args={[0.058, 0.058, 0.008, 24]} />
              <meshStandardMaterial roughness={0.05} metalness={0.9} color="#0f172a" />
            </mesh>
            <mesh position={[0, 0.106, 0]} castShadow>
              <sphereGeometry args={[0.038, 16, 12]} />
              <meshPhysicalMaterial roughness={0.02} metalness={0.9} transmission={0.9} color="#0ea5e9" />
            </mesh>

            {/* Back Cable wire */}
            <mesh position={[0, -0.11, -0.03]} rotation={[0.4, 0, 0]} castShadow>
              <cylinderGeometry args={[0.006, 0.006, 0.06, 8]} />
              <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
