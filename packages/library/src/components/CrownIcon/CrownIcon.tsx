import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function CrownIcon(props: IconProps) {
  // Generate coordinates for the 5 crown points
  const peakCount = 5;
  const radius = 0.52;
  const peaks = Array.from({ length: peakCount }).map((_, i) => {
    const angle = (i * 2 * Math.PI) / peakCount - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      z: Math.sin(angle) * radius,
      rotationY: -angle - Math.PI / 2,
    };
  });

  return (
    <SharedWrapper iconId="crown" {...props}>
      {(mat) => (
        <group rotation={[0.2, 0.2, 0]} position={[0, -0.2, 0]}>
          
          {/* Base Rim Cylinder */}
          <mesh castShadow receiveShadow position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.56, 0.56, 0.16, 32, 1, true]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              clearcoat={mat.clearcoat}
              clearcoatRoughness={mat.clearcoatRoughness}
              ior={mat.ior}
              color={mat.color}
              side={2} // DoubleSide so inside is rendered too
            />
          </mesh>

          {/* Bottom Solid Rim Ring */}
          <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.56, 0.04, 12, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Five crown spikes/peaks */}
          {peaks.map((p, idx) => (
            <group key={idx} position={[p.x, 0.35, p.z]} rotation={[0.15, p.rotationY, 0]}>
              
              {/* Triangular peak spike */}
              <mesh rotation={[0, Math.PI / 4, 0]} castShadow>
                <coneGeometry args={[0.14, 0.44, 4]} />
                <meshPhysicalMaterial
                  roughness={mat.roughness}
                  metalness={mat.metalness}
                  transmission={mat.transmission}
                  thickness={mat.thickness}
                  color={mat.color}
                />
              </mesh>

              {/* Sphere Jewel on Tip */}
              <mesh position={[0, 0.24, 0]} castShadow>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial
                  roughness={0.1}
                  metalness={0.9}
                  color={idx % 2 === 0 ? "#ef4444" : "#3b82f6"} // Alternating red & blue jewels
                />
              </mesh>
            </group>
          ))}

          {/* Central Crown Soft Velvet Cushion inside (dark royal blue or red) */}
          <mesh position={[0, 0.16, 0]} castShadow>
            <sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial
              roughness={0.9}
              metalness={0.1}
              color={props.preset === "gold" ? "#7f1d1d" : "#1e1b4b"} // Crimson red for gold, navy purple otherwise
            />
          </mesh>

        </group>
      )}
    </SharedWrapper>
  );
}
