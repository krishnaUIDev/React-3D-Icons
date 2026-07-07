import { SharedWrapper } from "../SharedWrapper";
import { IceCreamIconProps } from "./types";

export function IceCreamIcon(props: IceCreamIconProps) {
  return (
    <SharedWrapper iconId="icecream" {...props}>
      {(mat) => (
        <group
          rotation={[0.1, -Math.PI / 10, 0.05]}
          position={[0, -0.05, 0]}
          scale={[1.4, 1.4, 1.4]}
        >
          {/* Waffle Cone (Points downwards, warm orange/brown clay-matte) */}
          <mesh position={[0, -0.14, 0]} rotation={[Math.PI, 0, 0]} castShadow>
            <coneGeometry args={[0.14, 0.38, 8]} />
            <meshStandardMaterial color="#ca8a04" roughness={0.85} metalness={0.0} />
          </mesh>

          {/* Cone Rim Collar (Waffle texture fold) */}
          <mesh position={[0, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.14, 0.02, 8, 16]} />
            <meshStandardMaterial color="#ca8a04" roughness={0.85} />
          </mesh>

          {/* Ice Cream Scoop (Preset color - e.g. glass or clay scoop) */}
          <group position={[0, 0.13, 0]}>
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[0.16, 24, 24]} />
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

            {/* Whipped Cream Swirl (White) */}
            <mesh position={[0, 0.13, 0]} castShadow>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshStandardMaterial color="#ffffff" roughness={0.6} />
            </mesh>
            <mesh position={[0, 0.17, 0]} castShadow>
              <coneGeometry args={[0.04, 0.08, 8]} />
              <meshStandardMaterial color="#ffffff" roughness={0.6} />
            </mesh>

            {/* Glowing Cherry on Top (Emissive red/accent) */}
            <group position={[0, 0.22, 0]}>
              <mesh castShadow>
                <sphereGeometry args={[0.038, 12, 12]} />
                <meshStandardMaterial
                  color={mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"}
                  emissive={
                    mat.emissiveIntensity > 0 ? mat.emissive : props.accentColor || "#ef4444"
                  }
                  emissiveIntensity={1.3}
                />
              </mesh>
              {/* Cherry stem (angled line) */}
              <mesh position={[0.02, 0.05, 0.02]} rotation={[0, 0, -Math.PI / 6]} castShadow>
                <cylinderGeometry args={[0.004, 0.004, 0.08, 6]} />
                <meshStandardMaterial color="#422006" roughness={0.9} />
              </mesh>
            </group>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
