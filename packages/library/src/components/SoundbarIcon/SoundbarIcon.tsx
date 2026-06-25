import { SharedWrapper } from "../SharedWrapper";
import { SoundbarIconProps } from "./types";

export function SoundbarIcon(props: SoundbarIconProps) {
  return (
    <SharedWrapper iconId="soundbar" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0.05]} position={[0, 0, 0]}>
          
          {/* Long Horizontal Soundbar Casing (Primary speaker) */}
          <mesh castShadow receiveShadow position={[0, -0.1, 0.06]}>
            <boxGeometry args={[0.48, 0.046, 0.054]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Front Fabric Mesh Grille on Soundbar (Slightly smaller inset box) */}
          <mesh position={[0, -0.1, 0.088]} castShadow>
            <boxGeometry args={[0.46, 0.038, 0.006]} />
            <meshStandardMaterial roughness={0.5} metalness={0.1} color="#1e293b" />
          </mesh>

          {/* Glowing Status Indicator Line on Soundbar (Center power LED) */}
          <mesh position={[0, -0.1, 0.092]} castShadow>
            <boxGeometry args={[0.04, 0.006, 0.004]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Companion Standing Subwoofer Cabinet (Offset left & back) */}
          <group position={[-0.1, 0.02, -0.08]}>
            {/* Subwoofer box cabinet */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.16, 0.28, 0.16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>

            {/* Front speaker circular driver cone */}
            <group position={[0, 0.04, 0.081]}>
              <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.052, 0.052, 0.006, 24]} />
                <meshStandardMaterial roughness={0.4} metalness={0.1} color="#0f172a" />
              </mesh>
              {/* Inner paper cone suspension */}
              <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.002]} castShadow>
                <cylinderGeometry args={[0.038, 0.038, 0.006, 24]} />
                <meshStandardMaterial roughness={0.5} metalness={0.2} color="#1e293b" />
              </mesh>
              {/* Center dust cap dome */}
              <mesh position={[0, 0, 0.006]} castShadow>
                <sphereGeometry args={[0.016, 12, 12]} />
                <meshStandardMaterial roughness={0.3} metalness={0.9} color="#cbd5e1" />
              </mesh>
              {/* Glowing Accent Ring surrounding speaker cone */}
              <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.002]} castShadow>
                <torusGeometry args={[0.058, 0.004, 8, 24]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
                  emissiveIntensity={1.3}
                />
              </mesh>
            </group>

            {/* Bottom bass port hole */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.08, 0.081]} castShadow>
              <cylinderGeometry args={[0.018, 0.018, 0.004, 16]} />
              <meshStandardMaterial roughness={0.5} metalness={0.1} color="#000000" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
