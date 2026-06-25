import { SharedWrapper } from "../SharedWrapper";
import { SunflowerIconProps } from "./types";

export function SunflowerIcon(props: SunflowerIconProps) {
  return (
    <SharedWrapper iconId="sunflower" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.15, 0]} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
          {/* Circular array of yellow petals */}
          <group position={[0, 0, 0]}>
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * Math.PI) / 6;
              return (
                <mesh key={i} rotation={[0, 0, angle]} castShadow>
                  <boxGeometry args={[0.045, 0.36, 0.008]} />
                  <meshPhysicalMaterial
                    roughness={mat.roughness}
                    metalness={mat.metalness}
                    transmission={mat.transmission}
                    thickness={mat.thickness}
                    color={mat.color}
                  />
                </mesh>
              );
            })}
          </group>

          {/* Central seed disc base */}
          <mesh position={[0, 0, 0.006]} scale={[1, 1, 0.45]} castShadow>
            <sphereGeometry args={[0.1, 24, 16]} />
            <meshStandardMaterial roughness={0.8} metalness={0.1} color="#451a03" />
          </mesh>

          {/* Glowing Center Core Seeds Grid */}
          <mesh position={[0, 0, 0.016]} scale={[1, 1, 0.2]} castShadow>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#10b981"}
              emissiveIntensity={1.3}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
