import { SharedWrapper } from "../SharedWrapper";
import { FlaskIconProps } from "./types";

export function FlaskIcon(props: FlaskIconProps) {
  return (
    <SharedWrapper iconId="flask" {...props}>
      {(mat) => {
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#a855f7";
        return (
          <group rotation={[0.05, -0.25, 0.04]}>
            {/* Neck / tube */}
            <mesh castShadow receiveShadow position={[0, 0.52, 0]}>
              <cylinderGeometry args={[0.18, 0.18, 0.66, 20]} />
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
            {/* Flask mouth rim */}
            <mesh castShadow position={[0, 0.88, 0]}>
              <torusGeometry args={[0.2, 0.04, 8, 32]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={0.6}
                roughness={0.2}
                metalness={0.4}
              />
            </mesh>
            {/* Bulb body */}
            <mesh castShadow receiveShadow position={[0, -0.22, 0]}>
              <sphereGeometry args={[0.62, 24, 16]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.5}
              />
            </mesh>
            {/* Liquid level inside bulb */}
            <mesh position={[0, -0.46, 0]}>
              <cylinderGeometry args={[0.44, 0.44, 0.28, 24]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.1}
                transparent
                opacity={0.75}
              />
            </mesh>
            {/* Bubble 1 */}
            <mesh position={[-0.18, -0.28, 0.3]}>
              <sphereGeometry args={[0.07, 10, 10]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={0.9}
                transparent
                opacity={0.8}
              />
            </mesh>
            {/* Bubble 2 */}
            <mesh position={[0.2, -0.14, 0.28]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={0.9}
                transparent
                opacity={0.8}
              />
            </mesh>
          </group>
        );
      }}
    </SharedWrapper>
  );
}
