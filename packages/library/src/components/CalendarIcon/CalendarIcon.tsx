import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import { SharedWrapper } from "../SharedWrapper";
import { CalendarIconProps } from "./types";

const DAY_OFFSETS = [-0.3, 0, 0.3];
const ROW_OFFSETS = [0.08, -0.18, -0.44];

interface CalendarIconInnerProps extends CalendarIconProps {
  mat: any;
}

function CalendarIconInner({
  mat,
  selectedDayRow = 1,
  selectedDayCol = 1,
  highlightColor = "#3b82f6",
  dayText = "",
  showGrid = true,
  theme,
  interactive
}: CalendarIconInnerProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const isInteractive = interactive !== false;

  useFrame(() => {
    if (!groupRef.current) return;
    const targetScale = hovered ? 1.08 : 1.0;
    const targetRotY = hovered ? -0.1 : -0.3;
    const targetRotX = hovered ? 0.35 : 0.3;

    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.1
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.1
    );
  });

  return (
    <group
      ref={groupRef}
      rotation={[0.3, -0.3, 0.05]}
      position={[0, -0.05, 0]}
      onPointerOver={(e) => {
        if (isInteractive) {
          e.stopPropagation();
          setHovered(true);
        }
      }}
      onPointerOut={(e) => {
        if (isInteractive) {
          e.stopPropagation();
          setHovered(false);
        }
      }}
    >
      {/* Main Calendar Backing Board */}
      <mesh castShadow receiveShadow>
        <RoundedBox args={[1.2, 1.2, 0.16]} radius={0.12} smoothness={8}>
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
        </RoundedBox>
      </mesh>

      {/* Header Band (Red Accent) */}
      <mesh position={[0, 0.44, 0.02]} castShadow>
        <RoundedBox args={[1.2, 0.32, 0.18]} radius={0.06} smoothness={4}>
          <meshStandardMaterial
            roughness={0.2}
            metalness={0.1}
            color="#ef4444" // Crimson red header
          />
        </RoundedBox>
      </mesh>

      {/* Left Binder Hook/Ring */}
      <mesh position={[-0.32, 0.58, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.1, 0.028, 8, 24]} />
        <meshStandardMaterial roughness={0.1} metalness={0.9} color="#e2e8f0" />
      </mesh>

      {/* Right Binder Hook/Ring */}
      <mesh position={[0.32, 0.58, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.1, 0.028, 8, 24]} />
        <meshStandardMaterial roughness={0.1} metalness={0.9} color="#e2e8f0" />
      </mesh>

      {/* Day Grid Squares */}
      {showGrid &&
        ROW_OFFSETS.map((y, rowIdx) =>
          DAY_OFFSETS.map((x, colIdx) => (
            <mesh key={`${rowIdx}-${colIdx}`} position={[x, y, 0.095]} castShadow>
              <boxGeometry args={[0.16, 0.16, 0.03]} />
              <meshStandardMaterial
                roughness={0.8}
                metalness={0.1}
                color={
                  rowIdx === selectedDayRow && colIdx === selectedDayCol
                    ? highlightColor
                    : theme === "dark"
                      ? "#1e293b"
                      : "#cbd5e1"
                }
              />
            </mesh>
          ))
        )}

      {/* 3D Custom Day text badge */}
      {dayText && (
        <Text
          position={[0, -0.15, 0.09]}
          fontSize={0.36}
          color={theme === "dark" ? "#ffffff" : "#1e293b"}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/outfit/v11/0oWqF3EKg1z3h1d58S2Y.woff"
        >
          {dayText}
        </Text>
      )}
    </group>
  );
}

export function CalendarIcon(props: CalendarIconProps) {
  return (
    <SharedWrapper iconId="calendar" {...props}>
      {(mat) => <CalendarIconInner mat={mat} {...props} />}
    </SharedWrapper>
  );
}
