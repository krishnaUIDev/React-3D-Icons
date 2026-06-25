import { SharedWrapper } from "../SharedWrapper";
import { TwitterIconProps } from "./types";

export function TwitterIcon(props: TwitterIconProps) {
  return (
    <SharedWrapper iconId="twitter" {...props}>
      {(mat) => (
        <group>
          {/* Rounded square backing plate */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.7, 1.7, 0.12]} />
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

          {/* Intersecting X lines */}
          <group position={[0, 0, 0.09]}>
            {/* Main thick diagonal line */}
            <mesh castShadow rotation={[0, 0, 0.65]}>
              <boxGeometry args={[0.22, 1.45, 0.1]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#ffffff" : "#0f1419"}
              />
            </mesh>

            {/* Left thin outline line */}
            <mesh castShadow position={[-0.14, 0.06, 0]} rotation={[0, 0, -0.65]}>
              <boxGeometry args={[0.07, 1.45, 0.1]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#ffffff" : "#0f1419"}
              />
            </mesh>

            {/* Right thin outline line */}
            <mesh castShadow position={[0.14, -0.06, 0]} rotation={[0, 0, -0.65]}>
              <boxGeometry args={[0.07, 1.45, 0.1]} />
              <meshStandardMaterial
                roughness={0.1}
                metalness={0.9}
                color={props.theme === "dark" ? "#ffffff" : "#0f1419"}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
