import { SharedWrapper } from "../SharedWrapper";
import { ReactIconProps } from "./types";

export function ReactIcon(props: ReactIconProps) {
  return (
    <SharedWrapper iconId="react" {...props}>
      {(mat) => {
        const reactBlue = props.color || "#61dafb";
        const orbitColor = mat.emissiveIntensity > 0 ? mat.emissive : reactBlue;
        return (
          <group rotation={[0.1, -0.2, 0.05]}>

            {/* Central nucleus sphere */}
            <mesh castShadow position={[0, 0, 0]}>
              <sphereGeometry args={[0.18, 24, 24]} />
              <meshStandardMaterial
                color={orbitColor}
                emissive={orbitColor}
                emissiveIntensity={1.2}
                roughness={0.1}
                metalness={0.2}
              />
            </mesh>

            {/* Orbital ring 1 – flat (0 deg) */}
            <mesh castShadow position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.72, 0.07, 10, 60]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.9}
              />
            </mesh>

            {/* Orbital ring 2 – 60 deg tilt */}
            <mesh castShadow position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 3]}>
              <torusGeometry args={[0.72, 0.07, 10, 60]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.9}
              />
            </mesh>

            {/* Orbital ring 3 – 120 deg tilt */}
            <mesh castShadow position={[0, 0, 0]} rotation={[Math.PI / 2, 0, (2 * Math.PI) / 3]}>
              <torusGeometry args={[0.72, 0.07, 10, 60]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.9}
              />
            </mesh>

          </group>
        );
      }}
    </SharedWrapper>
  );
}
