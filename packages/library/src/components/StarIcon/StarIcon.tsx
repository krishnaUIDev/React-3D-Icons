import { useMemo } from "react";
import * as THREE from "three";
import { SharedWrapper } from "../SharedWrapper";
import { StarIconProps } from "./types";

export function StarIcon(props: StarIconProps) {
  const starShape = useMemo(() => {
    const shape = new THREE.Shape();
    const spikes = 5;
    const outerRadius = 0.65;
    const innerRadius = 0.28;
    const step = Math.PI / spikes;

    // Start at top point
    let angle = Math.PI / 2;
    shape.moveTo(0, outerRadius);

    for (let i = 0; i < spikes; i++) {
      // outer point
      let x = Math.cos(angle) * outerRadius;
      let y = Math.sin(angle) * outerRadius;
      shape.lineTo(x, y);
      angle += step;

      // inner point
      x = Math.cos(angle) * innerRadius;
      y = Math.sin(angle) * innerRadius;
      shape.lineTo(x, y);
      angle += step;
    }
    shape.closePath();
    return shape;
  }, []);

  const extrudeSettings = {
    depth: 0.18,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.06,
    bevelThickness: 0.06
  };

  return (
    <SharedWrapper iconId="star" {...props}>
      {(mat) => (
        <group rotation={[0.2, -0.2, 0]} position={[0, 0, -0.09]}>
          <mesh castShadow receiveShadow>
            <extrudeGeometry args={[starShape, extrudeSettings]} />
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
        </group>
      )}
    </SharedWrapper>
  );
}
