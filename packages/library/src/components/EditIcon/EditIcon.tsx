import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export function EditIcon(props: IconProps) {
  return (
    <SharedWrapper iconId="edit" {...props}>
      {(mat) => (
        <group rotation={[0.4, -0.4, 0.7]} position={[0, 0, 0]}>
          {/* Hexagonal Pencil Body */}
          <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 1.1, 6]} />
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

          {/* Metal Band (Ferrule) */}
          <mesh castShadow position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.17, 0.17, 0.14, 16]} />
            <meshStandardMaterial roughness={0.1} metalness={0.9} color="#d4af37" />{" "}
            {/* Gold ring */}
          </mesh>

          {/* Eraser */}
          <mesh castShadow position={[0, 0.84, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.16, 16]} />
            <meshStandardMaterial roughness={0.9} metalness={0.1} color="#fda4af" />{" "}
            {/* Soft pink eraser */}
          </mesh>

          {/* Sharpened Wood Cone Tip */}
          <mesh castShadow position={[0, -0.6, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.16, 0.3, 16]} />
            <meshStandardMaterial roughness={0.7} metalness={0.05} color="#fed7aa" />{" "}
            {/* Light wood tone */}
          </mesh>

          {/* Graphite Lead Tip */}
          <mesh castShadow position={[0, -0.71, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.06, 0.12, 16]} />
            <meshStandardMaterial roughness={0.3} metalness={0.8} color="#27272a" />{" "}
            {/* Charcoal graphite tip */}
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
}
