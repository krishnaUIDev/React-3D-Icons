import { RoundedBox } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { GamepadIconProps } from "./types";

export function GamepadIcon(props: GamepadIconProps) {
  return (
    <SharedWrapper iconId="gamepad" {...props}>
      {(mat) => (
        <group rotation={[0.3, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Left Grip Handle */}
          <mesh position={[-0.42, -0.12, 0.02]} rotation={[0, 0, 0.5]} castShadow receiveShadow>
            <RoundedBox args={[0.22, 0.54, 0.16]} radius={0.08} smoothness={4}>
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

          {/* Right Grip Handle */}
          <mesh position={[0.42, -0.12, 0.02]} rotation={[0, 0, -0.5]} castShadow receiveShadow>
            <RoundedBox args={[0.22, 0.54, 0.16]} radius={0.08} smoothness={4}>
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

          {/* Main Controller Body Plate */}
          <mesh position={[0, 0.04, 0]} castShadow receiveShadow>
            <RoundedBox args={[0.82, 0.44, 0.18]} radius={0.12} smoothness={5}>
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

          {/* D-Pad (Left Side Directional Cross) */}
          <group position={[-0.26, 0.05, 0.11]}>
            {/* Vertical Bar */}
            <mesh castShadow>
              <RoundedBox args={[0.06, 0.18, 0.05]} radius={0.015} smoothness={3}>
                <meshStandardMaterial roughness={0.6} metalness={0.2} color="#1e293b" />
              </RoundedBox>
            </mesh>
            {/* Horizontal Bar */}
            <mesh castShadow>
              <RoundedBox args={[0.18, 0.06, 0.05]} radius={0.015} smoothness={3}>
                <meshStandardMaterial roughness={0.6} metalness={0.2} color="#1e293b" />
              </RoundedBox>
            </mesh>
          </group>

          {/* 4 Action Buttons (Right Side Diamond) */}
          <group position={[0.26, 0.05, 0.11]}>
            {/* Button Y (Top) */}
            <mesh position={[0, 0.08, 0]} castShadow>
              <sphereGeometry args={[0.032, 16, 16]} />
              <meshStandardMaterial roughness={0.2} color="#ef4444" /> {/* Red */}
            </mesh>
            {/* Button A (Bottom) */}
            <mesh position={[0, -0.08, 0]} castShadow>
              <sphereGeometry args={[0.032, 16, 16]} />
              <meshStandardMaterial roughness={0.2} color="#22c55e" /> {/* Green */}
            </mesh>
            {/* Button X (Left) */}
            <mesh position={[-0.08, 0, 0]} castShadow>
              <sphereGeometry args={[0.032, 16, 16]} />
              <meshStandardMaterial roughness={0.2} color="#3b82f6" /> {/* Blue */}
            </mesh>
            {/* Button B (Right) */}
            <mesh position={[0.08, 0, 0]} castShadow>
              <sphereGeometry args={[0.032, 16, 16]} />
              <meshStandardMaterial roughness={0.2} color="#eab308" /> {/* Yellow */}
            </mesh>
          </group>

          {/* Left Thumbstick (Analog Stick) */}
          <group position={[-0.11, -0.08, 0.12]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.06, 16]} />
              <meshStandardMaterial roughness={0.8} color="#0f172a" />
            </mesh>
            <mesh position={[0, 0.03, 0]} castShadow>
              <cylinderGeometry args={[0.07, 0.07, 0.02, 16]} />
              <meshStandardMaterial roughness={0.6} color="#334155" />
            </mesh>
          </group>

          {/* Right Thumbstick (Analog Stick) */}
          <group position={[0.11, -0.08, 0.12]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.06, 16]} />
              <meshStandardMaterial roughness={0.8} color="#0f172a" />
            </mesh>
            <mesh position={[0, 0.03, 0]} castShadow>
              <cylinderGeometry args={[0.07, 0.07, 0.02, 16]} />
              <meshStandardMaterial roughness={0.6} color="#334155" />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
