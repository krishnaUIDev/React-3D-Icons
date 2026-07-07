import { SharedWrapper } from "../SharedWrapper";
import { DatabaseIconProps } from "./types";

export function DatabaseIcon(props: DatabaseIconProps) {
  return (
    <SharedWrapper iconId="database" {...props}>
      {(mat) => (
        <group>
          {/* Stack of 3 database disks */}
          {[0.5, 0, -0.5].map((yOffset, index) => (
            <group key={index} position={[0, yOffset, 0]}>
              {/* Main Disk Cylinder */}
              <mesh castShadow receiveShadow>
                <cylinderGeometry args={[0.9, 0.9, 0.38, 32]} />
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

              {/* Accent status bulb */}
              <mesh position={[0, 0, 0.92]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : "#10b981"}
                  emissive={mat.emissiveIntensity > 0 ? mat.emissive : "#10b981"}
                  emissiveIntensity={1.5}
                />
              </mesh>

              {/* Decorative inner metal groove */}
              <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.92, 0.92, 0.05, 32, 1, true]} />
                <meshStandardMaterial
                  roughness={0.2}
                  metalness={0.8}
                  color={props.theme === "dark" ? "#18181b" : "#e4e4e7"}
                />
              </mesh>
            </group>
          ))}
        </group>
      )}
    </SharedWrapper>
  );
}
