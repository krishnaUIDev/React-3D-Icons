import { SharedWrapper } from "../SharedWrapper";
import { TurbineIconProps } from "./types";

export function TurbineIcon(props: TurbineIconProps) {
  const blades = [0, 120, 240];

  return (
    <SharedWrapper iconId="turbine" {...props}>
      {(mat) => (
        <group rotation={[0.15, -0.2, 0.05]} position={[0, 0, 0]}>
          
          {/* Outer Protective Shroud Ring */}
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.35, 0.024, 8, 48]} />
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

          {/* Core Spinner Propeller Hub */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <sphereGeometry args={[0.09, 32, 32]} />
            <meshPhysicalMaterial
              roughness={mat.roughness}
              metalness={mat.metalness}
              transmission={mat.transmission}
              thickness={mat.thickness}
              color={mat.color}
            />
          </mesh>

          {/* Central Axle Shaft */}
          <mesh position={[0, 0, -0.06]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.12, 16]} />
            <meshStandardMaterial
              roughness={0.1}
              metalness={0.9}
              color={props.theme === "dark" ? "#cbd5e1" : "#475569"}
            />
          </mesh>

          {/* Glowing Spinner Tip Dome (Accent color) */}
          <mesh position={[0, 0, 0.075]} castShadow>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#06b6d4"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#06b6d4"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* Three Rotated & Angled Turbine Blades */}
          {blades.map((angle, index) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <group key={index} rotation={[0, 0, rad]}>
                {/* Each blade is translated outward along Y and rotated locally around Y to angle the pitch */}
                <mesh
                  castShadow
                  receiveShadow
                  position={[0, 0.19, 0.01]}
                  rotation={[0, 0.45, 0]} // pitch angle
                >
                  <boxGeometry args={[0.075, 0.22, 0.016]} />
                  <meshPhysicalMaterial
                    roughness={mat.roughness}
                    metalness={mat.metalness}
                    transmission={mat.transmission}
                    thickness={mat.thickness}
                    color={mat.color}
                  />
                </mesh>
                
                {/* Thin blade tip accents (glow) */}
                <mesh
                  position={[0, 0.31, 0.01]}
                  rotation={[0, 0.45, 0]}
                >
                  <boxGeometry args={[0.065, 0.02, 0.018]} />
                  <meshStandardMaterial
                    color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#06b6d4"}
                    emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#06b6d4"}
                    emissiveIntensity={1.1}
                  />
                </mesh>
              </group>
            );
          })}

        </group>
      )}
    </SharedWrapper>
  );
}
