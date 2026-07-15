import { useMemo } from "react";
import * as THREE from "three";
import { SharedWrapper } from "../SharedWrapper";
import { FlameIconProps } from "./types";
import { FlameStudio } from "./FlameStudio";

declare global {
  interface Window {
    THREE: any;
  }
}

// Revolved Y-axis curves for the outer and inner flame shapes
export const OUTER_PROFILE_POINTS: number[][] = [
  [0, 0.95],
  [0.03, 0.9],
  [0.08, 0.8],
  [0.15, 0.65],
  [0.24, 0.45],
  [0.34, 0.2],
  [0.42, -0.05],
  [0.46, -0.25],
  [0.42, -0.45],
  [0.32, -0.6],
  [0.18, -0.7],
  [0.08, -0.74],
  [0, -0.75]
];

export const INNER_PROFILE_POINTS: number[][] = [
  [0, 0.45],
  [0.03, 0.4],
  [0.08, 0.28],
  [0.13, 0.1],
  [0.17, -0.1],
  [0.19, -0.22],
  [0.16, -0.34],
  [0.1, -0.42],
  [0.04, -0.47],
  [0, -0.48]
];

export interface EmberData {
  mesh: any;
  speedY: number;
  seed: number;
  originalX: number;
}

export function FlameIcon(props: FlameIconProps) {
  const outerPoints = useMemo(
    () => OUTER_PROFILE_POINTS.map((p) => new THREE.Vector2(p[0], p[1])),
    []
  );
  const innerPoints = useMemo(
    () => INNER_PROFILE_POINTS.map((p) => new THREE.Vector2(p[0], p[1])),
    []
  );
  const flatness = 0.65;

  if (props.studio) {
    return <FlameStudio {...props} />;
  }

  return (
    <SharedWrapper iconId="flame" {...props}>
      {(mat) => (
        <group position={[0, 0.05, 0]}>
          {/* Fireplace Logs at base */}
          <group position={[0, -0.45, 0]}>
            {/* Log 1 */}
            <mesh position={[0, 0, -0.06]} rotation={[Math.PI / 2, 0, Math.PI / 4]} castShadow>
              <cylinderGeometry args={[0.05, 0.06, 0.8, 12]} />
              <meshStandardMaterial roughness={0.9} metalness={0.1} color="#4a2810" />
            </mesh>
            {/* Log 2 */}
            <mesh position={[0, 0, 0.06]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} castShadow>
              <cylinderGeometry args={[0.05, 0.06, 0.8, 12]} />
              <meshStandardMaterial roughness={0.9} metalness={0.1} color="#4a2810" />
            </mesh>
            {/* Glowing Charcoal in center */}
            <mesh position={[0, 0.03, 0]} castShadow>
              <sphereGeometry args={[0.11, 12, 12]} />
              <meshStandardMaterial
                color="#f97316"
                emissive="#f97316"
                emissiveIntensity={1.5}
                roughness={0.5}
              />
            </mesh>
          </group>

          {/* Flame Layers */}
          <group position={[0, 0.1, 0]} scale={[1.1, 1.1, 1.1 * flatness]}>
            {/* Outer Flame Mesh */}
            <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
              <latheGeometry args={[outerPoints, 32]} />
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
                emissiveIntensity={mat.emissiveIntensity * 0.2}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Mid Flame Mesh */}
            <mesh position={[0, -0.22, 0.03]} scale={[0.72, 0.72, 0.72]} castShadow>
              <latheGeometry args={[outerPoints, 32]} />
              <meshStandardMaterial
                color={props.accentColor || "#ef4444"}
                emissive={props.accentColor || "#ef4444"}
                emissiveIntensity={0.6}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Inner Flame Core Mesh */}
            <mesh position={[0, -0.32, 0.05]} scale={[0.9, 0.9, 0.9]} castShadow>
              <latheGeometry args={[innerPoints, 32]} />
              <meshStandardMaterial
                color="#fbfb24"
                emissive="#fbfb24"
                emissiveIntensity={1.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        </group>
      )}
    </SharedWrapper>
  );
}
