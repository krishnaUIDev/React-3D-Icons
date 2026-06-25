import { SharedWrapper } from "../SharedWrapper";
import { MinusIconProps } from "./types";

export function MinusIcon(props: MinusIconProps) {
  return (
    <SharedWrapper iconId="minus" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Single Horizontal Bar */}
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.07, 0.07, 0.8, 16]} />
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

          {/* Accent Ends */}
          {[-0.4, 0.4].map((xOffset, index) => (
            <mesh key={index} position={[xOffset, 0, 0]}>
              <sphereGeometry args={[0.07, 12, 12]} />
              <meshStandardMaterial
                color={props.accentColor || "#10b981"}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
