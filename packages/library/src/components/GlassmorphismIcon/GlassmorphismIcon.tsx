import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function GlassmorphismIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="glassmorphism" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.35, 0.1]} position={[0, 0, 0]}>
          {/* Background Primitive 1: Vibrant Sphere (Behind Glass) */}
          <mesh position={[-0.32, -0.18, -0.22]} castShadow receiveShadow>
            <sphereGeometry args={[0.34, 32, 32]} />
            <meshStandardMaterial
              roughness={0.2}
              color="#ec4899"
              emissive="#701a75"
              emissiveIntensity={0.2}
            />{" "}
            {/* Vivid pink */}
          </mesh>

          {/* Background Primitive 2: Shiny Metallic Cylinder (Behind Glass) */}
          <mesh
            position={[0.28, 0.24, -0.28]}
            rotation={[Math.PI / 4, Math.PI / 6, 0]}
            castShadow
            receiveShadow
          >
            <cylinderGeometry args={[0.16, 0.16, 0.6, 24]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#38bdf8" />{" "}
            {/* Electric cyan */}
          </mesh>

          {/* Background Primitive 3: Torus Ring (Looping around behind) */}
          <mesh position={[0, 0, -0.4]} rotation={[0.4, 0.4, 0]} castShadow>
            <torusGeometry args={[0.56, 0.05, 12, 32]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#eab308" />
          </mesh>

          {/* Foreground Glassmorphic Floating Panel (Refractive frosted glass card) */}
          <mesh position={[0, 0, 0.12]} castShadow receiveShadow>
            <boxGeometry args={[1.05, 1.05, 0.08]} />
            <meshPhysicalMaterial
              roughness={
                props.preset === "glassmorphism" ? 0.05 : Math.max(0.05, mat.roughness - 0.05)
              }
              metalness={props.preset === "glassmorphism" ? 0.05 : mat.metalness}
              transmission={props.preset === "glassmorphism" ? 0.96 : mat.transmission}
              thickness={props.preset === "glassmorphism" ? 1.5 : mat.thickness}
              clearcoat={props.preset === "glassmorphism" ? 1.0 : mat.clearcoat}
              clearcoatRoughness={0.05}
              ior={props.preset === "glassmorphism" ? 1.5 : mat.ior}
              color={
                props.preset === "glassmorphism"
                  ? props.theme === "dark"
                    ? "#ffffff"
                    : "#e2e8f0"
                  : mat.color
              }
              emissive={
                props.preset === "glassmorphism"
                  ? props.theme === "dark"
                    ? "#e4e4e7"
                    : "#a1a1aa"
                  : mat.emissive
              }
              emissiveIntensity={props.preset === "glassmorphism" ? 0.25 : mat.emissiveIntensity}
              transparent
              opacity={props.preset === "glassmorphism" ? 0.75 : 0.85}
            />
          </mesh>

          {/* Glass Card Border Rim (Accent overlay highlighting the glass card shape) */}
          <mesh position={[0, 0, 0.17]} castShadow>
            <boxGeometry args={[1.05, 1.05, 0.01]} />
            <meshStandardMaterial
              roughness={0.2}
              metalness={0.8}
              color={props.theme === "dark" ? "#ffffff" : "#475569"}
              transparent
              opacity={props.theme === "dark" ? 0.3 : 0.6}
            />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
