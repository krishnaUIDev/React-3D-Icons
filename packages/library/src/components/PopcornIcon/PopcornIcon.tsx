import { SharedWrapper } from "../SharedWrapper";
import { PopcornIconProps } from "./types";

export function PopcornIcon(props: PopcornIconProps) {
  return (
    <SharedWrapper iconId="popcorn" {...props}>
      {(mat) => (
        <group rotation={[0.15, -Math.PI / 8, 0.05]} position={[0, -0.02, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Popcorn Tub Container (Tapered 4-sided cylinder in preset material) */}
          <group position={[0, -0.08, 0]} rotation={[0, Math.PI / 4, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.2, 0.15, 0.42, 4]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.3}
              />
            </mesh>

            {/* Vertical Red Accent Stripes (Layered on front/back/sides) */}
            <group scale={[1.01, 1.01, 1.01]}>
              <mesh position={[0, 0, 0.005]}>
                <boxGeometry args={[0.04, 0.42, 0.28]} />
                <meshStandardMaterial color="#ef4444" roughness={0.6} />
              </mesh>
              <mesh position={[0.005, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[0.04, 0.42, 0.28]} />
                <meshStandardMaterial color="#ef4444" roughness={0.6} />
              </mesh>
            </group>
          </group>

          {/* Puffy Popcorn Kernels (Overflowing white/cream spheres at top) */}
          <group position={[0, 0.12, 0]}>
            {/* Center kernel */}
            <mesh position={[0, 0.02, 0]} castShadow>
              <sphereGeometry args={[0.075, 10, 10]} />
              <meshStandardMaterial color="#fef08a" roughness={0.9} />
            </mesh>

            {/* Left front kernel */}
            <mesh position={[-0.09, 0, 0.06]} castShadow>
              <sphereGeometry args={[0.065, 10, 10]} />
              <meshStandardMaterial color="#ffffff" roughness={0.9} />
            </mesh>

            {/* Right front kernel */}
            <mesh position={[0.09, -0.01, 0.05]} castShadow>
              <sphereGeometry args={[0.062, 10, 10]} />
              <meshStandardMaterial color="#ffffff" roughness={0.9} />
            </mesh>

            {/* Back left kernel */}
            <mesh position={[-0.06, 0.03, -0.08]} castShadow>
              <sphereGeometry args={[0.065, 10, 10]} />
              <meshStandardMaterial color="#fef08a" roughness={0.9} />
            </mesh>

            {/* Back right kernel */}
            <mesh position={[0.06, 0.02, -0.08]} castShadow>
              <sphereGeometry args={[0.06, 10, 10]} />
              <meshStandardMaterial color="#ffffff" roughness={0.9} />
            </mesh>

            {/* Glowing Top Kernel (Emissive butter accent) */}
            <mesh position={[0.01, 0.08, 0.01]} castShadow>
              <sphereGeometry args={[0.055, 10, 10]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#eab308"}
                emissiveIntensity={1.3}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
