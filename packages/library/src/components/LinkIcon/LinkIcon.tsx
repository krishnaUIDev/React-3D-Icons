import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function LinkIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="link" {...props}>
      {(mat) => (
        <group rotation={[0.1, -0.4, 0.4]} position={[0, 0, 0]}>
          
          {/* First Interlocking Link */}
          <group position={[0, 0.26, 0]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.34, 0.1, 16, 48]} />
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
          </group>

          {/* Second Interlocking Link */}
          <group position={[0, -0.26, 0]} rotation={[Math.PI / 4, Math.PI / 2, Math.PI / 4]}>
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.34, 0.1, 16, 48]} />
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
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
