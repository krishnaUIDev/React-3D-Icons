import { SharedWrapper } from "../SharedWrapper";
import { AirplaneIconProps } from "./types";

export function AirplaneIcon(props: AirplaneIconProps) {
  return (
    <SharedWrapper iconId="airplane" {...props}>
      {(mat) => (
        <group rotation={[0, -Math.PI / 4, 0]} position={[0, -0.05, 0]}>
          {/* Main Fuselage */}
          <mesh castShadow receiveShadow position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.13, 0.11, 1.3, 32]} />
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

          {/* Nose Cone */}
          <mesh castShadow position={[0, 0, 0.65]} rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry args={[0.13, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
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

          {/* Cockpit Window Accent */}
          <mesh position={[0, 0.06, 0.5]} rotation={[-Math.PI / 8, 0, 0]}>
            <boxGeometry args={[0.12, 0.04, 0.08]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>

          {/* Left Wing */}
          <mesh
            castShadow
            receiveShadow
            position={[-0.42, 0, 0.05]}
            rotation={[0, -Math.PI / 6, -Math.PI / 24]}
          >
            <boxGeometry args={[0.8, 0.025, 0.22]} />
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

          {/* Right Wing */}
          <mesh
            castShadow
            receiveShadow
            position={[0.42, 0, 0.05]}
            rotation={[0, Math.PI / 6, Math.PI / 24]}
          >
            <boxGeometry args={[0.8, 0.025, 0.22]} />
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

          {/* Left Engine */}
          <group position={[-0.32, -0.06, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.045, 0.04, 0.22, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#4b5563" />
            </mesh>
            {/* Glowing Jet Intake/Exhaust */}
            <mesh position={[0, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Right Engine */}
          <group position={[0.32, -0.06, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.045, 0.04, 0.22, 16]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#4b5563" />
            </mesh>
            {/* Glowing Jet Intake/Exhaust */}
            <mesh position={[0, -0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ec4899"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </group>

          {/* Vertical Tail Fin */}
          <mesh
            castShadow
            position={[0, 0.17, -0.5]}
            rotation={[Math.PI / 10, 0, 0]}
          >
            <boxGeometry args={[0.025, 0.32, 0.18]} />
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

          {/* Left Horizontal Stabilizer */}
          <mesh
            castShadow
            position={[-0.18, 0, -0.54]}
            rotation={[0, -Math.PI / 8, -Math.PI / 24]}
          >
            <boxGeometry args={[0.3, 0.02, 0.1]} />
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

          {/* Right Horizontal Stabilizer */}
          <mesh
            castShadow
            position={[0.18, 0, -0.54]}
            rotation={[0, Math.PI / 8, Math.PI / 24]}
          >
            <boxGeometry args={[0.3, 0.02, 0.1]} />
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
        </group>
      )}
    </SharedWrapper>
  );
}
