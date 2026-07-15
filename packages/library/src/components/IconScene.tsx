import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";
import { IconPreset, IconAngle, IconAnimationType, MaterialConfig } from "../types";
import { getTexture, getNormalMap, FloatingParticles, getMaterialConfig } from "./SharedWrapper";

const ANGLE_ROTATIONS: Record<IconAngle, [number, number, number]> = {
  front: [0, 0, 0],
  perspective: [0.25, -0.35, 0],
  tilted: [0.25, -0.25, 0.25]
};

function useGradientTexture(
  gradientType: "none" | "linear" | "radial",
  gradientColorStart?: string,
  gradientColorEnd?: string,
  gradientAngle?: number
) {
  return useMemo(() => {
    if (!gradientType || gradientType === "none" || !gradientColorStart || !gradientColorEnd) {
      return null;
    }
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      let grad: CanvasGradient;
      if (gradientType === "linear") {
        const rad = ((gradientAngle || 0) * Math.PI) / 180;
        const halfW = 128;
        const halfH = 128;
        const x1 = halfW - Math.cos(rad) * halfW;
        const y1 = halfH - Math.sin(rad) * halfH;
        const x2 = halfW + Math.cos(rad) * halfW;
        const y2 = halfH + Math.sin(rad) * halfH;
        grad = ctx.createLinearGradient(x1, y1, x2, y2);
      } else {
        grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 181);
      }

      grad.addColorStop(0, gradientColorStart);
      grad.addColorStop(1, gradientColorEnd);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    } catch (e) {
      console.error("Failed to generate custom gradient texture", e);
      return null;
    }
  }, [gradientType, gradientColorStart, gradientColorEnd, gradientAngle]);
}

function useMergedMaterialConfig(
  preset: IconPreset,
  color?: string,
  theme?: "light" | "dark",
  accentColor?: string,
  customMaterial?: Partial<MaterialConfig>
) {
  const matConfig = getMaterialConfig(preset, color, theme, accentColor);
  return useMemo(() => {
    const merged = { ...matConfig, ...customMaterial };
    if (merged.iridescence !== undefined && merged.iridescence > 0) {
      (merged as any).iridescenceThicknessRange = [100, merged.iridescenceThickness ?? 400];
    }
    return merged;
  }, [matConfig, customMaterial]);
}

export const IconScene: React.FC<{
  children: (mat: MaterialConfig) => React.ReactNode;
  preset: IconPreset;
  angle: IconAngle;
  color?: string;
  accentColor?: string;
  spinSpeed: number;
  floatHeight: number;
  theme: "light" | "dark";
  interactive: boolean;
  customMaterial?: Partial<MaterialConfig>;
  tiltIntensity?: number;
  animationType?: IconAnimationType;
  animationAxis?: "x" | "y" | "z";
  animationDirection?: "clockwise" | "counter-clockwise";
  gradientAngle?: number;
  manualRotationX?: number;
  manualRotationY?: number;
  manualRotationZ?: number;
  textureType?: "none" | "frosted" | "brushed" | "carbon";
  emissivePulseSpeed?: number;
  emissivePulseIntensity?: number;
  gradientType?: "none" | "linear" | "radial";
  gradientColorStart?: string;
  gradientColorEnd?: string;
  particleSystem?: "none" | "sparkles" | "dust" | "stars";
  particleCount?: number;
  particleColor?: string;
  particleSpeed?: number;
  surfaceNormal?: "none" | "noise" | "leather" | "grid";
  labelText?: string;
  labelColor?: string;
  explodeDistance?: number;
  cameraZoom?: number;
  turntableActive?: boolean;
}> = ({
  children,
  preset,
  angle,
  color,
  accentColor,
  labelText,
  labelColor = "#ffffff",
  spinSpeed,
  floatHeight,
  theme,
  interactive,
  customMaterial,
  tiltIntensity = 1.0,
  animationType = "spin",
  animationAxis = "y",
  animationDirection = "clockwise",
  textureType = "none",
  emissivePulseSpeed = 0,
  emissivePulseIntensity = 0.5,
  gradientType = "none",
  gradientColorStart,
  gradientColorEnd,
  gradientAngle = 45,
  manualRotationX,
  manualRotationY,
  manualRotationZ,
  particleSystem = "none",
  particleCount = 50,
  particleColor = "#ffffff",
  particleSpeed = 1,
  surfaceNormal = "none",
  explodeDistance = 0,
  cameraZoom,
  turntableActive = false
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const gradientTexture = useGradientTexture(
    gradientType,
    gradientColorStart,
    gradientColorEnd,
    gradientAngle
  );

  const mergedMatConfig = useMergedMaterialConfig(
    preset,
    color,
    theme,
    accentColor,
    customMaterial
  );

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    if (turntableActive) {
      const orbitTime = t * 0.15;
      const radius = cameraZoom ?? 4.5;
      state.camera.position.x = Math.sin(orbitTime) * radius;
      state.camera.position.z = Math.cos(orbitTime) * radius;
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.8, 0.05);
      state.camera.lookAt(0, 0, 0);
    }

    // Constant rotation/animation based on type
    if (animationType === "spin") {
      const dirCoeff = animationDirection === "counter-clockwise" ? -1 : 1;
      if (animationAxis === "x") {
        groupRef.current.rotation.x = t * 0.3 * spinSpeed * dirCoeff;
        groupRef.current.rotation.y = 0;
        groupRef.current.rotation.z = 0;
      } else if (animationAxis === "z") {
        groupRef.current.rotation.z = t * 0.3 * spinSpeed * dirCoeff;
        groupRef.current.rotation.x = 0;
        groupRef.current.rotation.y = 0;
      } else {
        groupRef.current.rotation.y = t * 0.3 * spinSpeed * dirCoeff;
        groupRef.current.rotation.x = 0;
        groupRef.current.rotation.z = 0;
      }
      groupRef.current.position.y = 0;
      groupRef.current.position.x = 0;
    } else if (animationType === "wobble") {
      groupRef.current.rotation.y = Math.sin(t * 1.0) * 0.25 * spinSpeed;
      groupRef.current.rotation.x = Math.cos(t * 1.2) * 0.15 * spinSpeed;
      groupRef.current.position.y = 0;
      groupRef.current.position.x = 0;
    } else if (animationType === "wave") {
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.x = 0;
      groupRef.current.position.y = Math.sin(t * 2.0) * 0.25 * floatHeight;
      groupRef.current.position.x = 0;
    } else if (animationType === "bounce") {
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.x = 0;
      groupRef.current.rotation.z = 0;
      const bounceVal = Math.abs(Math.sin(t * 2.5 * spinSpeed));
      groupRef.current.position.y = bounceVal * 0.45 * floatHeight;
      groupRef.current.position.x = 0;
    } else if (animationType === "orbit") {
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.x = 0;
      groupRef.current.rotation.z = Math.sin(t * 1.5 * spinSpeed) * 0.18;
      groupRef.current.position.x = Math.sin(t * 1.5 * spinSpeed) * 0.22 * floatHeight;
      groupRef.current.position.y = 0;
    } else {
      // "breathe" - slow static angle, pulse scale
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.x = 0;
      groupRef.current.rotation.z = 0;
      groupRef.current.position.y = 0;
      groupRef.current.position.x = 0;
    }

    // Apply manual rotation overrides if provided
    if (manualRotationX !== undefined) groupRef.current.rotation.x = manualRotationX;
    if (manualRotationY !== undefined) groupRef.current.rotation.y = manualRotationY;
    if (manualRotationZ !== undefined) groupRef.current.rotation.z = manualRotationZ;

    // Hover scale interpolation (smooth lerping)
    let targetScaleX = hovered && interactive ? 1.15 : 1.0;
    let targetScaleY = hovered && interactive ? 1.15 : 1.0;
    let targetScaleZ = hovered && interactive ? 1.15 : 1.0;

    if (animationType === "breathe") {
      const pulse = Math.sin(t * 2.5 * spinSpeed) * 0.06;
      targetScaleX += pulse;
      targetScaleY += pulse;
      targetScaleZ += pulse;
    } else if (animationType === "bounce") {
      const bounceVal = Math.abs(Math.sin(t * 2.5 * spinSpeed));
      if (bounceVal < 0.15) {
        const squashFactor = (0.15 - bounceVal) * 0.6; // max 0.09 squash
        targetScaleY -= squashFactor;
        targetScaleX += squashFactor * 0.5;
        targetScaleZ += squashFactor * 0.5;
      }
    }
    groupRef.current.scale.lerp(new THREE.Vector3(targetScaleX, targetScaleY, targetScaleZ), 0.15);

    // Mouse tracking tilt effect (3D parallax)
    if (meshRef.current) {
      if (hovered && interactive) {
        const targetX = ((-state.pointer.y * Math.PI) / 8) * tiltIntensity; // Pitch
        const targetY = ((state.pointer.x * Math.PI) / 8) * tiltIntensity; // Yaw
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1);
      } else {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1);
      }
    }

    // Apply texture and pulsing at runtime on the Three.js hierarchy
    if (groupRef.current) {
      const texture = getTexture(textureType);
      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const material = child.material;
          if (
            material instanceof THREE.MeshPhysicalMaterial ||
            material instanceof THREE.MeshStandardMaterial
          ) {
            // 1. Assign bump map
            if (texture) {
              if (material.bumpMap !== texture) {
                material.bumpMap = texture;
                material.bumpScale = 0.08;
                material.needsUpdate = true;
              }
            } else {
              if (material.bumpMap) {
                material.bumpMap = null;
                material.needsUpdate = true;
              }
            }

            // 1b. Assign normal map
            const normalMapTexture = getNormalMap(surfaceNormal);
            if (normalMapTexture) {
              if (material.normalMap !== normalMapTexture) {
                material.normalMap = normalMapTexture;
                material.normalScale = new THREE.Vector2(0.2, 0.2);
                material.needsUpdate = true;
              }
            } else {
              if (material.normalMap) {
                material.normalMap = null;
                material.needsUpdate = true;
              }
            }

            // 2. Modulate emissive pulsing
            if (emissivePulseSpeed > 0) {
              const baseIntensity = mergedMatConfig.emissiveIntensity ?? 0.3;
              const sinVal = Math.sin(t * emissivePulseSpeed); // -1.0 to 1.0
              const normVal = (sinVal + 1) / 2; // 0.0 to 1.0
              material.emissiveIntensity = baseIntensity + normVal * emissivePulseIntensity * 1.5;
            } else {
              material.emissiveIntensity = mergedMatConfig.emissiveIntensity ?? 0.3;
            }

            // 3. Assign gradient texture map
            if (gradientTexture) {
              if (material.map !== gradientTexture) {
                material.map = gradientTexture;
                material.color.set("#ffffff");
                material.needsUpdate = true;
              }
            } else {
              if (material.map) {
                material.map = null;
                material.color.set(mergedMatConfig.color);
                material.needsUpdate = true;
              }
            }
          }
        }
      });

      // 4. Model Explode sub-mesh separation offsets
      if (explodeDistance > 0) {
        let index = 0;
        groupRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (!(child as any).originalPosition) {
              (child as any).originalPosition = child.position.clone();
            }
            const orig = (child as any).originalPosition as THREE.Vector3;
            const dir = orig.clone().normalize();
            if (dir.lengthSq() === 0) {
              dir.set(Math.sin(index), Math.cos(index), 0.25).normalize();
            }
            child.position.copy(orig).addScaledVector(dir, explodeDistance);
            index++;
          }
        });
      } else {
        groupRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh && (child as any).originalPosition) {
            child.position.copy((child as any).originalPosition);
          }
        });
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => interactive && setHovered(true)}
      onPointerOut={() => interactive && setHovered(false)}
    >
      <group ref={meshRef}>
        <group rotation={ANGLE_ROTATIONS[angle]}>
          <Float
            speed={1.5 * spinSpeed}
            rotationIntensity={animationType === "wobble" ? 0.4 : 0.2}
            floatIntensity={animationType === "wave" ? 1.5 * floatHeight : 0.8 * floatHeight}
          >
            {children(mergedMatConfig)}
          </Float>
        </group>
      </group>
      {particleSystem && particleSystem !== "none" && (
        <FloatingParticles
          type={particleSystem}
          count={particleCount ?? 50}
          color={particleColor ?? "#ffffff"}
          speed={particleSpeed ?? 1}
        />
      )}
      {labelText && (
        <Text
          position={[0, -1.8, 0]}
          fontSize={0.24}
          color={labelColor}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/outfit/v11/0oWqF3EKg1z3h1d58S2Y.woff"
        >
          {labelText}
        </Text>
      )}
    </group>
  );
};
