import { SharedWrapper } from "../SharedWrapper";
import { NodeIconProps } from "./types";

export function NodeIcon(props: NodeIconProps) {
  return (
    <SharedWrapper iconId="node" {...props}>
      {(mat) => {
        const accentCol = mat.emissiveIntensity > 0 ? mat.emissive : (props.accentColor || "#3c873a");
        const faceZ = 0.22;

        // Leg geometry
        const legHeight = 0.72;
        const legHalfH = legHeight / 2;   // 0.36
        const legX = 0.25;                 // x distance from center to each leg

        // Diagonal: must go from top of LEFT leg (-0.25, +0.36)
        //           to bottom of RIGHT leg (+0.25, -0.36)
        // Center of diagonal is at (0, 0).
        // Angle from Y-axis: atan2(legX, legHalfH) gives a CCW tilt to the right → "\" shape
        const diagAngle = Math.atan2(legX, legHalfH); // ≈ 34.8°
        const diagLength = Math.sqrt((legX * 2) ** 2 + legHeight ** 2); // ≈ 0.877

        const legMat = (
          <meshStandardMaterial
            color={accentCol}
            emissive={accentCol}
            emissiveIntensity={0.9}
            roughness={0.15}
            metalness={0.2}
          />
        );

        return (
          <group rotation={[0.1, -0.3, 0.05]}>

            {/* Hexagonal shield body – rotated so flat face points forward */}
            <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.82, 0.82, 0.42, 6, 1]} />
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

            {/* Glowing hexagonal border rim */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.86, 0.86, 0.06, 6]} />
              <meshStandardMaterial
                color={accentCol}
                emissive={accentCol}
                emissiveIntensity={0.5}
                roughness={0.2}
                metalness={0.5}
              />
            </mesh>

            {/* N – left vertical leg */}
            <mesh castShadow position={[-legX, 0, faceZ]}>
              <boxGeometry args={[0.11, legHeight, 0.1]} />
              {legMat}
            </mesh>

            {/* N – right vertical leg */}
            <mesh castShadow position={[legX, 0, faceZ]}>
              <boxGeometry args={[0.11, legHeight, 0.1]} />
              {legMat}
            </mesh>

            {/*
              N – diagonal stroke.
              Positive rotation (CCW) tilts the box's top to the LEFT and bottom to the RIGHT.
              With diagAngle = atan2(legX, legHalfH) ≈ 34.8°:
                top of box → (-legX, +legHalfH) = top of left leg ✓
                bottom of box → (+legX, -legHalfH) = bottom of right leg ✓
              Result: "\" diagonal = correct N shape.
            */}
            <mesh castShadow position={[0, 0, faceZ]} rotation={[0, 0, diagAngle]}>
              <boxGeometry args={[0.11, diagLength, 0.1]} />
              {legMat}
            </mesh>

          </group>
        );
      }}
    </SharedWrapper>
  );
}
