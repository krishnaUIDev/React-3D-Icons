import { SharedWrapper } from "../SharedWrapper";
import { SnowflakeIconProps } from "./types";

export function SnowflakeIcon(props: SnowflakeIconProps) {
  return (
    <SharedWrapper iconId="snowflake" {...props}>
      {(mat) => (
        <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={[1.45, 1.45, 1.45]}>
          {/* Central Glowing Core Sphere */}
          <mesh castShadow>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
              emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"}
              emissiveIntensity={1.3}
            />
          </mesh>

          {/* 6 Radial Branches */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * Math.PI) / 3;
            return (
              <group key={i} rotation={[0, 0, angle]}>
                {/* Main Branch Shaft (lies along Y axis initially, pointing UP) */}
                <mesh position={[0, 0.19, 0]} castShadow>
                  <cylinderGeometry args={[0.014, 0.014, 0.38, 8]} />
                  <meshPhysicalMaterial
                    roughness={mat.roughness}
                    metalness={mat.metalness}
                    transmission={mat.transmission}
                    thickness={mat.thickness}
                    clearcoat={mat.clearcoat}
                    clearcoatRoughness={mat.clearcoatRoughness}
                    ior={mat.ior}
                    color={mat.color}
                  />
                </mesh>

                {/* Sub-branch V-arms (Outer Set) */}
                <group position={[0, 0.26, 0]}>
                  {/* Left V-arm */}
                  <mesh position={[-0.05, 0.03, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
                    <cylinderGeometry args={[0.01, 0.01, 0.12, 6]} />
                    <meshPhysicalMaterial
                      roughness={mat.roughness}
                      metalness={mat.metalness}
                      transmission={mat.transmission}
                      thickness={mat.thickness}
                      color={mat.color}
                    />
                  </mesh>
                  {/* Right V-arm */}
                  <mesh position={[0.05, 0.03, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
                    <cylinderGeometry args={[0.01, 0.01, 0.12, 6]} />
                    <meshPhysicalMaterial
                      roughness={mat.roughness}
                      metalness={mat.metalness}
                      transmission={mat.transmission}
                      thickness={mat.thickness}
                      color={mat.color}
                    />
                  </mesh>
                </group>

                {/* Sub-branch V-arms (Inner Set, smaller) */}
                <group position={[0, 0.15, 0]}>
                  {/* Left V-arm */}
                  <mesh position={[-0.035, 0.02, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
                    <cylinderGeometry args={[0.009, 0.009, 0.08, 6]} />
                    <meshPhysicalMaterial
                      roughness={mat.roughness}
                      metalness={mat.metalness}
                      transmission={mat.transmission}
                      thickness={mat.thickness}
                      color={mat.color}
                    />
                  </mesh>
                  {/* Right V-arm */}
                  <mesh position={[0.035, 0.02, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
                    <cylinderGeometry args={[0.009, 0.009, 0.08, 6]} />
                    <meshPhysicalMaterial
                      roughness={mat.roughness}
                      metalness={mat.metalness}
                      transmission={mat.transmission}
                      thickness={mat.thickness}
                      color={mat.color}
                    />
                  </mesh>
                </group>

                {/* Tiny Tip Core Globe (Glowing) */}
                <mesh position={[0, 0.38, 0]} castShadow>
                  <sphereGeometry args={[0.02, 8, 8]} />
                  <meshStandardMaterial
                    color={
                      mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"
                    }
                    emissive={
                      mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#38bdf8"
                    }
                    emissiveIntensity={1.2}
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
