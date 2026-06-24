import { SharedWrapper } from "../SharedWrapper";
import { ClockIconProps } from "./types";

export function ClockIcon(props: ClockIconProps) {
  return (
    <SharedWrapper iconId="clock" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0.05]} position={[0, 0.05, 0]}>
          
          {/* Main Case (Outer Drum) */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.54, 0.54, 0.2, 32]} />
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

          {/* Clock Face Plate (white or dark matching theme) */}
          <mesh position={[0, 0, 0.065]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.46, 0.46, 0.08, 32]} />
            <meshStandardMaterial
              roughness={0.7}
              metalness={0.1}
              color={props.theme === "dark" ? "#1e293b" : "#f8fafc"}
            />
          </mesh>

          {/* Center Pin */}
          <mesh position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.04, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#94a3b8" />
          </mesh>

          {/* Hour Hand */}
          <group position={[0.08, 0.08, 0.11]} rotation={[0, 0, -0.8]}>
            <mesh castShadow>
              <boxGeometry args={[0.03, 0.22, 0.02]} />
              <meshStandardMaterial roughness={0.5} color="#ef4444" />
            </mesh>
          </group>

          {/* Minute Hand */}
          <group position={[-0.11, 0.13, 0.11]} rotation={[0, 0, 0.7]}>
            <mesh castShadow>
              <boxGeometry args={[0.024, 0.32, 0.02]} />
              <meshStandardMaterial roughness={0.5} color={props.theme === "dark" ? "#cbd5e1" : "#0f172a"} />
            </mesh>
          </group>

          {/* Left Top Bell Dome */}
          <group position={[-0.36, 0.44, 0]} rotation={[0, 0, 0.7]}>
            <mesh castShadow>
              <sphereGeometry args={[0.18, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
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
            {/* Bell Post */}
            <mesh position={[0, -0.1, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.12, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Right Top Bell Dome */}
          <group position={[0.36, 0.44, 0]} rotation={[0, 0, -0.7]}>
            <mesh castShadow>
              <sphereGeometry args={[0.18, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
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
            {/* Bell Post */}
            <mesh position={[0, -0.1, 0]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.12, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.9} color="#cbd5e1" />
            </mesh>
          </group>

          {/* Left Foot Leg */}
          <mesh position={[-0.26, -0.52, 0]} rotation={[0, 0, 0.4]} castShadow>
            <cylinderGeometry args={[0.04, 0.03, 0.16, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

          {/* Right Foot Leg */}
          <mesh position={[0.26, -0.52, 0]} rotation={[0, 0, -0.4]} castShadow>
            <cylinderGeometry args={[0.04, 0.03, 0.16, 16]} />
            <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
