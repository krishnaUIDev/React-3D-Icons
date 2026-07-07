import { SharedWrapper } from "../SharedWrapper";
import { DollarIconProps } from "./types";

export function DollarIcon(props: DollarIconProps) {
  return (
    <SharedWrapper iconId="dollar" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.4, 0.15]}>
          {/* Main Gold Coin Body */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.7, 0.7, 0.15, 32]} />
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

          {/* Outer Raised Rim Border */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.66, 0.05, 12, 32]} />
            <meshStandardMaterial roughness={0.15} metalness={0.9} color={mat.color} />
          </mesh>

          {/* Embossed Dollar Sign ($) - Vertical Strike */}
          <mesh position={[0, 0, 0.09]} castShadow>
            <boxGeometry args={[0.05, 0.72, 0.06]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#ffffff" />
          </mesh>

          {/* Dollar Sign - Top Bar */}
          <mesh position={[0, 0.23, 0.09]} castShadow>
            <boxGeometry args={[0.24, 0.06, 0.06]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#ffffff" />
          </mesh>

          {/* Dollar Sign - Middle Bar */}
          <mesh position={[0, 0, 0.09]} castShadow>
            <boxGeometry args={[0.24, 0.06, 0.06]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#ffffff" />
          </mesh>

          {/* Dollar Sign - Bottom Bar */}
          <mesh position={[0, -0.23, 0.09]} castShadow>
            <boxGeometry args={[0.24, 0.06, 0.06]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#ffffff" />
          </mesh>

          {/* Dollar Sign - Top Left Connector */}
          <mesh position={[-0.09, 0.115, 0.09]} castShadow>
            <boxGeometry args={[0.06, 0.17, 0.06]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#ffffff" />
          </mesh>

          {/* Dollar Sign - Bottom Right Connector */}
          <mesh position={[0.09, -0.115, 0.09]} castShadow>
            <boxGeometry args={[0.06, 0.17, 0.06]} />
            <meshStandardMaterial roughness={0.2} metalness={0.85} color="#ffffff" />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
