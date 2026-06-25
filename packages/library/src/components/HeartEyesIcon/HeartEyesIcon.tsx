import { SharedWrapper } from "../SharedWrapper";
import { HeartEyesIconProps } from "./types";

export function HeartEyesIcon(props: HeartEyesIconProps) {
  const renderHeartEye = (xOffset: number, yOffset: number) => (
    <group position={[xOffset, yOffset, 0.1]} rotation={[0, 0, 0]}>
      {/* Left lobe */}
      <mesh position={[-0.05, 0.04, 0]} castShadow>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshStandardMaterial roughness={0.15} color="#ef4444" />
      </mesh>
      {/* Right lobe */}
      <mesh position={[0.05, 0.04, 0]} castShadow>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshStandardMaterial roughness={0.15} color="#ef4444" />
      </mesh>
      {/* Downward pointing triangle cone */}
      <mesh position={[0, -0.04, 0]} rotation={[Math.PI, 0, 0]} castShadow>
        <coneGeometry args={[0.096, 0.16, 16]} />
        <meshStandardMaterial roughness={0.15} color="#ef4444" />
      </mesh>
    </group>
  );

  return (
    <SharedWrapper iconId="hearteyes" {...props}>
      {(mat) => (
        <group>
          {/* Smiley Face Base Disk */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.9, 0.9, 0.16, 32]} />
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
              emissiveIntensity={mat.emissiveIntensity}
            />
          </mesh>

          {/* Left Heart Eye */}
          {renderHeartEye(-0.28, 0.2)}

          {/* Right Heart Eye */}
          {renderHeartEye(0.28, 0.2)}

          {/* Curved Smile Mouth (Torus segment) */}
          <mesh position={[0, -0.15, 0.1]} rotation={[Math.PI / 2, 0, Math.PI]} castShadow>
            <torusGeometry args={[0.34, 0.05, 12, 24, Math.PI]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#18181b" : "#475569"}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
