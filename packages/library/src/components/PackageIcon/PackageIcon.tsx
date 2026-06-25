import { SharedWrapper } from "../SharedWrapper";
import { PackageIconProps } from "./types";

export function PackageIcon(props: PackageIconProps) {
  return (
    <SharedWrapper iconId="package" {...props}>
      {(mat) => {
        const tapeColor = props.accentColor || "#38bdf8"; // default sky blue tape
        const ac = mat.emissiveIntensity > 0 ? mat.emissive : tapeColor;

        return (
          <group rotation={[0.3, -0.4, 0.1]}>
            {/* Main Cardboard Box Body */}
            <mesh castShadow receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[0.9, 0.85, 0.9]} />
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

            {/* Packaging Tape - Center Top Strip */}
            <mesh position={[0, 0.38, 0]} castShadow>
              <boxGeometry args={[0.16, 0.015, 0.92]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={mat.emissiveIntensity > 0 ? 0.8 : 0.2}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>

            {/* Packaging Tape - Front Vertical Drop */}
            <mesh position={[0, 0.28, 0.462]} castShadow>
              <boxGeometry args={[0.16, 0.2, 0.015]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={mat.emissiveIntensity > 0 ? 0.8 : 0.2}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>

            {/* Packaging Tape - Back Vertical Drop */}
            <mesh position={[0, 0.28, -0.462]} castShadow>
              <boxGeometry args={[0.16, 0.2, 0.015]} />
              <meshStandardMaterial
                color={ac}
                emissive={ac}
                emissiveIntensity={mat.emissiveIntensity > 0 ? 0.8 : 0.2}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>

            {/* Box Side Panels / Flap Lines (Depressions for details) */}
            {/* Left side flap groove */}
            <mesh position={[-0.455, 0.1, 0]}>
              <boxGeometry args={[0.01, 0.02, 0.91]} />
              <meshStandardMaterial color={mat.color} roughness={0.9} metalness={0.1} opacity={0.4} transparent />
            </mesh>
            {/* Right side flap groove */}
            <mesh position={[0.455, 0.1, 0]}>
              <boxGeometry args={[0.01, 0.02, 0.91]} />
              <meshStandardMaterial color={mat.color} roughness={0.9} metalness={0.1} opacity={0.4} transparent />
            </mesh>
          </group>
        );
      }}
    </SharedWrapper>
  );
}
