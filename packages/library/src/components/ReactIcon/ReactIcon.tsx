import { SharedWrapper } from "../SharedWrapper";
import { ReactIconProps } from "./types";

export function ReactIcon(props: ReactIconProps) {
  return (
    <SharedWrapper iconId="react" {...props}>
      {(mat) => {
        const orbitColor = mat.color;
        const nucleusColor = mat.emissiveIntensity > 0 ? mat.emissive : props.color || "#61dafb";

        // Each orbital ring: a torus standing upright (in XY plane by default),
        // then rotated around Y-axis by 0°, 60°, and 120° to create the classic
        // React atom pattern when viewed from a slight angle.
        const ringMat = (
          <meshPhysicalMaterial
            roughness={mat.roughness}
            metalness={mat.metalness}
            transmission={mat.transmission}
            thickness={mat.thickness}
            clearcoat={mat.clearcoat}
            clearcoatRoughness={mat.clearcoatRoughness}
            ior={mat.ior}
            color={orbitColor}
            emissive={mat.emissive}
            emissiveIntensity={mat.emissiveIntensity * 1.1}
          />
        );

        return (
          <group rotation={[0.2, -0.3, 0.05]}>
            {/* Central nucleus sphere */}
            <mesh castShadow position={[0, 0, 0]}>
              <sphereGeometry args={[0.19, 24, 24]} />
              <meshStandardMaterial
                color={nucleusColor}
                emissive={nucleusColor}
                emissiveIntensity={1.4}
                roughness={0.08}
                metalness={0.15}
              />
            </mesh>

            {/*
              Each ring is a torus in the XZ plane (lying flat),
              then we tilt them 60° apart around the Y-axis.
              To make them look elliptical from the front, we scale
              one axis of the group containing the torus.
            */}

            {/* Ring 1 – 0° around Y */}
            <group rotation={[0, 0, 0]} scale={[1, 0.42, 1]}>
              <mesh castShadow>
                <torusGeometry args={[0.78, 0.075, 12, 64]} />
                {ringMat}
              </mesh>
            </group>

            {/* Ring 2 – 60° around Y */}
            <group rotation={[0, Math.PI / 3, 0]} scale={[1, 0.42, 1]}>
              <mesh castShadow>
                <torusGeometry args={[0.78, 0.075, 12, 64]} />
                {ringMat}
              </mesh>
            </group>

            {/* Ring 3 – 120° around Y */}
            <group rotation={[0, (2 * Math.PI) / 3, 0]} scale={[1, 0.42, 1]}>
              <mesh castShadow>
                <torusGeometry args={[0.78, 0.075, 12, 64]} />
                {ringMat}
              </mesh>
            </group>
          </group>
        );
      }}
    </SharedWrapper>
  );
}
