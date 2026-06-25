import { SharedWrapper } from "../SharedWrapper";
import { GoogleIconProps } from "./types";

export function GoogleIcon(props: GoogleIconProps) {
  // Use customizer color if overridden, otherwise use Google brand blue
  const primaryColor = props.color || "#4285f4";

  return (
    <SharedWrapper iconId="google" {...props}>
      {(mat) => (
        <group>
          {/* Circular backing plate */}
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.95, 0.95, 0.14, 32]} />
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

          {/* Extruded Google G Emblem */}
          <group position={[0.02, 0, 0.09]} rotation={[0, 0, 0]}>
            {/* Red Upper Arc */}
            <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <torusGeometry args={[0.46, 0.12, 16, 32, Math.PI]} />
              <meshStandardMaterial roughness={0.15} metalness={0.2} color={props.color ? primaryColor : "#ea4335"} />
            </mesh>

            {/* Green Lower Arc */}
            <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, -Math.PI * 0.75]}>
              <torusGeometry args={[0.46, 0.12, 16, 32, Math.PI * 0.7]} />
              <meshStandardMaterial roughness={0.15} metalness={0.2} color={props.color ? primaryColor : "#34a853"} />
            </mesh>

            {/* Yellow Left Arc */}
            <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI * 0.8]}>
              <torusGeometry args={[0.46, 0.12, 16, 32, Math.PI * 0.4]} />
              <meshStandardMaterial roughness={0.15} metalness={0.2} color={props.color ? primaryColor : "#fbbc05"} />
            </mesh>

            {/* Blue Horizontal Bar & Right Arc */}
            <group rotation={[0, 0, 0]}>
              <mesh castShadow position={[0.22, -0.04, 0]}>
                <boxGeometry args={[0.44, 0.12, 0.08]} />
                <meshStandardMaterial roughness={0.15} metalness={0.2} color={props.color ? primaryColor : "#4285f4"} />
              </mesh>
              <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <torusGeometry args={[0.46, 0.12, 16, 32, Math.PI * 0.3]} />
                <meshStandardMaterial roughness={0.15} metalness={0.2} color={props.color ? primaryColor : "#4285f4"} />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
