import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { CloudNetworkIconProps } from "./types";

export function CloudNetworkIcon(props: CloudNetworkIconProps) {
  return (
    <SharedWrapper iconId="cloudnetwork" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.15, 0.05]}>
          {/* Main Cloud Body */}
          <group position={[0, 0.16, 0]}>
            {/* Center Main Cloud Sphere */}
            <mesh castShadow position={[0, 0.10, 0]}>
              <sphereGeometry args={[0.30, 32, 32]} />
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

            {/* Left Cloud Sphere */}
            <mesh castShadow position={[-0.20, 0.02, 0]}>
              <sphereGeometry args={[0.22, 24, 24]} />
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

            {/* Right Cloud Sphere */}
            <mesh castShadow position={[0.20, 0.02, 0]}>
              <sphereGeometry args={[0.22, 24, 24]} />
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

            {/* Flat Cloud Base Plate */}
            <mesh castShadow position={[0, -0.08, 0]}>
              <RoundedBox args={[0.66, 0.16, 0.28]} radius={0.06} smoothness={4}>
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
          </group>

          {/* Network Connections Underneath */}
          <group>
            {/* Center Vertical Pipe */}
            <mesh castShadow position={[0, -0.16, 0.02]}>
              <cylinderGeometry args={[0.022, 0.022, 0.24, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>

            {/* Left Vertical Pipe */}
            <mesh castShadow position={[-0.20, -0.16, 0.02]}>
              <cylinderGeometry args={[0.022, 0.022, 0.24, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>

            {/* Right Vertical Pipe */}
            <mesh castShadow position={[0.20, -0.16, 0.02]}>
              <cylinderGeometry args={[0.022, 0.022, 0.24, 8]} />
              <meshStandardMaterial roughness={0.2} metalness={0.8} color="#cbd5e1" />
            </mesh>

            {/* Center Spherical Client Node */}
            <mesh castShadow position={[0, -0.32, 0.02]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#10b981" />
            </mesh>

            {/* Left Spherical Client Node */}
            <mesh castShadow position={[-0.20, -0.32, 0.02]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#3b82f6" />
            </mesh>

            {/* Right Spherical Client Node */}
            <mesh castShadow position={[0.20, -0.32, 0.02]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial roughness={0.15} metalness={0.9} color="#ea4c89" />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
