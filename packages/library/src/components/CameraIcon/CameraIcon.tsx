import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { CameraIconProps } from "./types";

export function CameraIcon(props: CameraIconProps) {
  return (
    <SharedWrapper iconId="camera" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.3, 0]} position={[0, 0, 0]}>
          
          {/* Camera Body */}
          <mesh castShadow receiveShadow>
            <RoundedBox args={[1.0, 0.65, 0.38]} radius={0.1} smoothness={4}>
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
            </RoundedBox>
          </mesh>

          {/* Lens Outer Barrel */}
          <mesh position={[0, -0.05, 0.18]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.26, 0.28, 0.22, 32]} />
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

          {/* Inner Lens Glass Elements (Shiny reflection) */}
          <mesh position={[0, -0.05, 0.29]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.02, 24]} />
            <meshStandardMaterial roughness={0.05} metalness={0.9} color="#0f172a" />
          </mesh>
          <mesh position={[0, -0.05, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.02, 24]} />
            <meshStandardMaterial roughness={0.1} metalness={0.1} color="#38bdf8" transparent opacity={0.6} />
          </mesh>

          {/* Flash Panel on Top-Left */}
          <mesh position={[-0.26, 0.38, 0.08]} castShadow>
            <RoundedBox args={[0.22, 0.12, 0.12]} radius={0.02} smoothness={3}>
              <meshStandardMaterial roughness={0.3} metalness={0.8} color="#cbd5e1" />
            </RoundedBox>
          </mesh>
          <mesh position={[-0.26, 0.38, 0.14]} castShadow>
            <boxGeometry args={[0.16, 0.08, 0.02]} />
            <meshStandardMaterial roughness={0.1} metalness={0.1} color="#f8fafc" emissive="#ffffff" emissiveIntensity={1.5} />
          </mesh>

          {/* Shutter Button on Top-Right */}
          <mesh position={[0.28, 0.36, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.1, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.1} color="#ef4444" />
          </mesh>

          {/* Mode Dial Dial on Top-Center */}
          <mesh position={[0.02, 0.34, 0]} castShadow>
            <cylinderGeometry args={[0.11, 0.11, 0.06, 24]} />
            <meshStandardMaterial roughness={0.5} metalness={0.8} color="#475569" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
