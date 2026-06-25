import { SharedWrapper } from "../SharedWrapper";
import { VideoIconProps } from "./types";

export function VideoIcon(props: VideoIconProps) {
  return (
    <SharedWrapper iconId="video" {...props}>
      {(mat) => (
        <group rotation={[Math.PI / 10, -Math.PI / 6, 0]} position={[0.05, 0, 0]}>
          {/* Camera Main Body */}
          <mesh castShadow receiveShadow position={[0, 0, -0.1]}>
            <boxGeometry args={[0.7, 0.65, 0.55]} />
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
              emissiveIntensity={mat.emissiveIntensity * 0.2}
            />
          </mesh>

          {/* Top Handle */}
          <group position={[0, 0.38, -0.15]}>
            {/* Handle Bar */}
            <mesh castShadow>
              <boxGeometry args={[0.08, 0.08, 0.45]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#4b5563" />
            </mesh>
            {/* Front Support */}
            <mesh castShadow position={[0, -0.06, 0.16]}>
              <boxGeometry args={[0.08, 0.12, 0.06]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#4b5563" />
            </mesh>
            {/* Back Support */}
            <mesh castShadow position={[0, -0.06, -0.16]}>
              <boxGeometry args={[0.08, 0.12, 0.06]} />
              <meshStandardMaterial roughness={0.3} metalness={0.7} color="#4b5563" />
            </mesh>
          </group>

          {/* Camera Lens Barrel */}
          <group position={[0, 0.05, 0.28]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Main Outer Cylinder */}
            <mesh castShadow>
              <cylinderGeometry args={[0.22, 0.2, 0.35, 24]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
              />
            </mesh>
            {/* Metallic Focus Ring */}
            <mesh position={[0, 0.05, 0]}>
              <cylinderGeometry args={[0.23, 0.23, 0.06, 24]} />
              <meshStandardMaterial roughness={0.15} metalness={0.92} color="#9ca3af" />
            </mesh>
            {/* Glowing Lens Glass Front */}
            <mesh position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 0.02, 24]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

          {/* Viewfinder Screen (Angled slightly open on the left side) */}
          <group position={[-0.36, 0.02, -0.05]} rotation={[0, -Math.PI / 5, 0]}>
            {/* Screen Back Cover */}
            <mesh castShadow position={[-0.04, 0, 0]}>
              <boxGeometry args={[0.06, 0.45, 0.5]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
              />
            </mesh>
            {/* Glowing Display Panel (facing the user/camera body) */}
            <mesh position={[-0.005, 0, 0]}>
              <boxGeometry args={[0.015, 0.36, 0.42]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={0.6}
                roughness={0.1}
                metalness={0.2}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
