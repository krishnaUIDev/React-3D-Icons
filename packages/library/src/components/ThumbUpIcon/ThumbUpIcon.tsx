import { SharedWrapper } from "../SharedWrapper";
import { ThumbUpIconProps } from "./types";

export function ThumbUpIcon(props: ThumbUpIconProps) {
  // Vertically stacked finger positions
  const fingerOffsets = [0.03, -0.09, -0.21, -0.33];

  return (
    <SharedWrapper iconId="thumbup" {...props}>
      {(mat) => (
        <group rotation={[0.05, -0.35, 0.05]} position={[-0.05, 0.05, 0]}>
          
          {/* Sleeve Cuff (Wrist wrapper) */}
          <mesh position={[-0.45, -0.15, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.3, 0.65, 0.5]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              // Cuff gets the accent color (or a nice contrast)
              color={props.accentColor || "#f43f5e"}
              emissive={mat.emissive}
              emissiveIntensity={mat.emissiveIntensity * 0.2}
            />
          </mesh>

          {/* Cufflink Button */}
          <mesh position={[-0.45, -0.25, 0.26]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <sphereGeometry args={[0.055, 16, 16]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.9}
              color={props.theme === "dark" ? "#1e293b" : "#475569"}
            />
          </mesh>

          {/* Wrist Joint (Connects cuff to palm) */}
          <mesh position={[-0.24, -0.15, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.15, 16]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Palm Core */}
          <mesh position={[0.02, -0.15, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.42, 0.46, 0.32]} />
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

          {/* Thumb (Pointing straight up, rounded capsule) */}
          <mesh position={[-0.08, 0.22, 0]} castShadow>
            <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
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

          {/* Curled Fingers (Four horizontal rounded capsules sticking out on front-right) */}
          {fingerOffsets.map((yOffset, i) => (
            <mesh 
              key={i} 
              position={[0.32, yOffset, 0.20]} 
              rotation={[0, Math.PI / 2, 0]}
              castShadow
            >
              <capsuleGeometry args={[0.08, 0.24, 8, 16]} />
              <meshPhysicalMaterial
                roughness={mat.roughness}
                metalness={mat.metalness}
                transmission={mat.transmission}
                thickness={mat.thickness}
                color={mat.color}
              />
            </mesh>
          ))}

        </group>
      )}
    </SharedWrapper>
  );
}
