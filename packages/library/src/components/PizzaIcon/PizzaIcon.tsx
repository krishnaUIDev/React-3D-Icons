import { SharedWrapper } from "../SharedWrapper";
import { PizzaIconProps } from "./types";

export function PizzaIcon(props: PizzaIconProps) {
  return (
    <SharedWrapper iconId="pizza" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.2, 0.1]} position={[0, -0.05, 0]} scale={[1.4, 1.4, 1.4]}>
          
          {/* Pizza Slice Body (Wedge Cylinder - Cheese Layer using primary/mat color) */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, -Math.PI / 6]} position={[0, 0, 0.08]}>
            <cylinderGeometry args={[0.48, 0.48, 0.035, 12, 1, false, 0, Math.PI / 3]} />
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

          {/* Bottom Dough Crust Layer (Slightly larger, baked brown/orange) */}
          <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, -Math.PI / 6]} position={[0, -0.012, 0.075]}>
            <cylinderGeometry args={[0.5, 0.5, 0.038, 12, 1, false, 0, Math.PI / 3]} />
            <meshStandardMaterial roughness={0.7} color="#d97706" />
          </mesh>

          {/* Pizza Crust (Curved base along the arc) */}
          <mesh castShadow position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, -Math.PI / 6]}>
            <torusGeometry args={[0.48, 0.04, 10, 24, Math.PI / 3]} />
            <meshStandardMaterial roughness={0.7} metalness={0.0} color="#c2410c" />
          </mesh>

          {/* Pepperonis (Glowing red/accent discs on surface) */}
          <group position={[0, 0.02, 0.08]}>
            {/* Pepperoni 1 */}
            <mesh position={[0.06, 0.22, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.015, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.2}
              />
            </mesh>
            
            {/* Pepperoni 2 */}
            <mesh position={[-0.08, 0.16, 0]} rotation={[Math.PI / 2, 0, 0.3]} castShadow>
              <cylinderGeometry args={[0.045, 0.045, 0.015, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.2}
              />
            </mesh>

            {/* Pepperoni 3 */}
            <mesh position={[0.1, 0.12, 0]} rotation={[Math.PI / 2, 0, -0.2]} castShadow>
              <cylinderGeometry args={[0.038, 0.038, 0.015, 8]} />
              <meshStandardMaterial
                color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissive={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                emissiveIntensity={1.2}
              />
            </mesh>
          </group>

        </group>
      )}
    </SharedWrapper>
  );
}
