import { SharedWrapper } from "../SharedWrapper";
import { SunIconProps } from "./types";

export function SunIcon(props: SunIconProps) {
  const rayCount = 8;
  const rays = Array.from({ length: rayCount });
  const rayRadius = 0.64;

  return (
    <SharedWrapper iconId="sun" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.15, 0.05]}>
          {/* Central Sun Sphere */}
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.42, 32, 32]} />
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

          {/* Radiating Rays */}
          {rays.map((_, index) => {
            const angle = (index * (Math.PI * 2)) / rayCount;
            const x = Math.cos(angle) * rayRadius;
            const y = Math.sin(angle) * rayRadius;

            return (
              <mesh
                key={index}
                position={[x, y, 0]}
                rotation={[0, 0, angle + Math.PI / 2]}
                castShadow
                receiveShadow
              >
                {/* Tapered capsule-like rays */}
                <cylinderGeometry args={[0.02, 0.048, 0.2, 16]} />
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
            );
          })}
        </group>
      )}
    </SharedWrapper>
  );
}
