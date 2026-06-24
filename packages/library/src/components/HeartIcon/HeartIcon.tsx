import { useMemo } from "react";
import * as THREE from "three";
import { SharedWrapper } from "../SharedWrapper";
import { HeartIconProps } from "./types";

export function HeartIcon(props: HeartIconProps) {
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    // Start at top middle center
    shape.moveTo(0, 0.3);
    // Left curve
    shape.bezierCurveTo(0.2, 0.7, 0.7, 0.7, 0.7, 0.2);
    shape.bezierCurveTo(0.7, -0.2, 0.3, -0.5, 0, -0.85);
    // Right curve
    shape.bezierCurveTo(-0.3, -0.5, -0.7, -0.2, -0.7, 0.2);
    shape.bezierCurveTo(-0.7, 0.7, -0.2, 0.7, 0, 0.3);
    return shape;
  }, []);

  const extrudeSettings = {
    depth: 0.2,
    bevelEnabled: true,
    bevelSegments: 6,
    steps: 1,
    bevelSize: 0.08,
    bevelThickness: 0.08,
  };

  return (
    <SharedWrapper iconId="heart" {...props}>
      {(mat) => (
        // Center the heart geometry in the viewport
        <group position={[0, 0.2, -0.1]} rotation={[0, 0, 0]}>
          <mesh castShadow receiveShadow>
            <extrudeGeometry args={[heartShape, extrudeSettings]} />
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
