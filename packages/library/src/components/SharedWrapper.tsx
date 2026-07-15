import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { IconProps, MaterialConfig, IconPreset } from "../types";
import { isWebGLAvailable } from "../utils/webgl";
import { Fallback2D } from "./Fallback2D";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { IconScene } from "./IconScene";

// Helper to resolve material configurations from presets
export function getMaterialConfig(
  preset: IconPreset = "glass",
  baseColor?: string,
  theme: "light" | "dark" = "dark",
  accentColor?: string
): MaterialConfig {
  const defaultColors: Record<IconPreset, string> = {
    glass: "#6366f1",
    metal: "#cbd5e1", // Silver
    clay: "#f43f5e", // Rose
    hologram: "#a855f7", // Violet
    gold: "#d4af37", // Gold
    silver: "#e2e8f0", // Silver
    glassmorphism: theme === "dark" ? "#ffffff" : "#64748b", // Frosted Glass
    carbon: "#27272a", // Carbon slate
    wood: "#d97706", // Wood
    "neon-glow": "#06b6d4", // Neon Cyan
    "liquid-metal": "#38bdf8" // Liquid Blue
  };

  const color = baseColor || defaultColors[preset];
  const accent = accentColor || "#ec4899"; // Default pink glow

  switch (preset) {
    case "neon-glow":
      return {
        roughness: 0.15,
        metalness: 0.2,
        transmission: 0.3,
        thickness: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        ior: 1.6,
        color,
        emissive: accent,
        emissiveIntensity: theme === "dark" ? 2.5 : 1.2
      };
    case "liquid-metal":
      return {
        roughness: 0.02,
        metalness: 0.98,
        transmission: 0,
        thickness: 0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.01,
        ior: 2.5,
        color,
        emissive: theme === "dark" ? "#110022" : "#000000",
        emissiveIntensity: theme === "dark" ? 0.35 : 0
      };
    case "glassmorphism":
      return {
        roughness: 0.05,
        metalness: 0.05,
        transmission: 0.96,
        thickness: 1.5,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        ior: 1.5,
        color,
        emissive: theme === "dark" ? "#18181b" : "#e4e4e7",
        emissiveIntensity: 0.2
      };
    case "carbon":
      return {
        roughness: 0.45,
        metalness: 0.1,
        transmission: 0,
        thickness: 0,
        clearcoat: 0.6,
        clearcoatRoughness: 0.15,
        ior: 1.55,
        color,
        emissive: "#000000",
        emissiveIntensity: 0
      };
    case "wood":
      return {
        roughness: 0.85,
        metalness: 0,
        transmission: 0,
        thickness: 0,
        clearcoat: 0.0,
        clearcoatRoughness: 0,
        ior: 1.3,
        color,
        emissive: "#000000",
        emissiveIntensity: 0
      };
    case "gold":
      return {
        roughness: 0.12,
        metalness: 0.98,
        transmission: 0,
        thickness: 0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        ior: 1.6,
        color,
        emissive: theme === "dark" ? "#221100" : "#000000",
        emissiveIntensity: theme === "dark" ? 0.25 : 0
      };
    case "silver":
      return {
        roughness: 0.12,
        metalness: 0.98,
        transmission: 0,
        thickness: 0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        ior: 1.5,
        color,
        emissive: theme === "dark" ? "#111111" : "#000000",
        emissiveIntensity: theme === "dark" ? 0.2 : 0
      };
    case "metal":
      return {
        roughness: 0.15,
        metalness: 0.95,
        transmission: 0,
        thickness: 0,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        ior: 1.5,
        color,
        emissive: "#000000",
        emissiveIntensity: 0
      };
    case "clay":
      return {
        roughness: 0.9,
        metalness: 0.05,
        transmission: 0,
        thickness: 0,
        clearcoat: 0,
        clearcoatRoughness: 0,
        ior: 1.3,
        color,
        emissive: "#000000",
        emissiveIntensity: 0
      };
    case "hologram":
      return {
        roughness: 0.25,
        metalness: 0.3,
        transmission: 0.4,
        thickness: 0.6,
        clearcoat: 1.0,
        clearcoatRoughness: 0.15,
        ior: 1.45,
        color,
        emissive: accent,
        emissiveIntensity: theme === "dark" ? 0.75 : 0.4
      };
    case "glass":
    default:
      return {
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.9,
        thickness: 1.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        ior: 1.5,
        color,
        emissive: theme === "dark" ? color : "#000000",
        emissiveIntensity: theme === "dark" ? 0.3 : 0
      };
  }
}

// Lighting component that responds to light/dark themes
const StudioLights: React.FC<{
  theme: "light" | "dark";
  intensity?: number;
  color?: string;
  preset?: "studio" | "cyber" | "sunset" | "dramatic";
  accentColor?: string;
  accentIntensity?: number;
  accentAngle?: number;
  ambientColor?: string;
  ambientIntensity?: number;
  keyLightX?: number;
  keyLightY?: number;
  keyLightZ?: number;
}> = ({
  theme,
  intensity,
  color,
  preset = "studio",
  accentColor,
  accentIntensity,
  accentAngle,
  ambientColor,
  ambientIntensity,
  keyLightX,
  keyLightY,
  keyLightZ
}) => {
  const isDark = theme === "dark";

  const angleRad = ((accentAngle ?? 135) * Math.PI) / 180;
  const accentX = 6 * Math.sin(angleRad);
  const accentZ = 6 * Math.cos(angleRad);

  const customAccentLight = accentIntensity !== undefined && accentIntensity > 0 && (
    <pointLight
      position={[accentX, 3, accentZ]}
      intensity={accentIntensity}
      color={accentColor ?? "#ec4899"}
    />
  );

  const finalAmbientIntensity =
    ambientIntensity ??
    (preset === "cyber"
      ? isDark
        ? 0.25
        : 0.45
      : preset === "sunset"
        ? isDark
          ? 0.35
          : 0.55
        : preset === "dramatic"
          ? 0.06
          : isDark
            ? 0.4
            : 0.7);
  const finalAmbientColor =
    ambientColor ??
    (preset === "cyber"
      ? "#18181b"
      : preset === "sunset"
        ? "#1c1917"
        : preset === "dramatic"
          ? "#000000"
          : isDark
            ? "#3f3f46"
            : "#ffffff");

  if (preset === "cyber") {
    return (
      <>
        <ambientLight intensity={finalAmbientIntensity} color={finalAmbientColor} />
        <directionalLight
          position={[keyLightX ?? 5, keyLightY ?? 10, keyLightZ ?? 5]}
          intensity={0.8}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {/* Cyan key light */}
        <pointLight position={[-8, 4, 3]} intensity={isDark ? 3.0 : 1.8} color="#06b6d4" />
        {/* Magenta fill light */}
        <pointLight position={[8, 4, 3]} intensity={isDark ? 3.0 : 1.8} color="#ec4899" />
        {/* Accent spotlight */}
        <spotLight
          position={[0, 15, 2]}
          angle={0.35}
          penumbra={1}
          intensity={intensity ?? (isDark ? 1.5 : 0.8)}
          color={color ?? "#c084fc"}
        />
        {customAccentLight}
      </>
    );
  }

  if (preset === "sunset") {
    return (
      <>
        <ambientLight intensity={finalAmbientIntensity} color={finalAmbientColor} />
        <directionalLight
          position={[keyLightX ?? 5, keyLightY ?? 10, keyLightZ ?? 5]}
          intensity={1.0}
          color="#fed7aa"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {/* Warm orange key */}
        <pointLight position={[6, 5, 6]} intensity={isDark ? 3.5 : 2.2} color="#f59e0b" />
        {/* Deep blue/purple fill */}
        <pointLight position={[-6, 2, -6]} intensity={isDark ? 2.5 : 1.5} color="#6366f1" />
        {/* Highlight spot */}
        <spotLight
          position={[0, 15, 2]}
          angle={0.3}
          penumbra={1}
          intensity={intensity ?? (isDark ? 1.0 : 0.6)}
          color={color ?? "#fdba74"}
        />
        {customAccentLight}
      </>
    );
  }

  if (preset === "dramatic") {
    return (
      <>
        <ambientLight intensity={finalAmbientIntensity} color={finalAmbientColor} />
        <directionalLight
          position={[keyLightX ?? 5, keyLightY ?? 10, keyLightZ ?? 5]}
          intensity={0.2}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {/* Intense backlight contour silhouette rim */}
        <spotLight
          position={[0, 8, -10]}
          angle={0.6}
          penumbra={0.6}
          intensity={isDark ? 6.0 : 4.0}
          color="#ffffff"
        />
        {/* Fill spotlight */}
        <spotLight
          position={[0, 15, 5]}
          angle={0.25}
          penumbra={1}
          intensity={intensity ?? (isDark ? 0.8 : 0.4)}
          color={color ?? "#818cf8"}
        />
        {customAccentLight}
      </>
    );
  }

  // "studio" default setup
  return (
    <>
      <ambientLight intensity={finalAmbientIntensity} color={finalAmbientColor} />
      <directionalLight
        position={[keyLightX ?? 5, keyLightY ?? 10, keyLightZ ?? 5]}
        intensity={isDark ? 1.5 : 1.2}
        color={isDark ? "#ffffff" : "#fbfbfb"}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight
        position={[-5, 5, -5]}
        intensity={isDark ? 0.8 : 0.4}
        color={isDark ? "#818cf8" : "#d1d5db"}
      />
      <spotLight
        position={[0, 15, 2]}
        angle={0.3}
        penumbra={1}
        intensity={intensity ?? (isDark ? 1.0 : 0.6)}
        color={color ?? (isDark ? "#c084fc" : "#fff")}
      />
      {customAccentLight}
    </>
  );
};

function createFrostedTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const imgData = ctx.createImageData(128, 128);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const val = Math.floor(Math.random() * 255);
    imgData.data[i] = val;
    imgData.data[i + 1] = val;
    imgData.data[i + 2] = val;
    imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  return texture;
}

function createBrushedTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#888888";
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 400; i++) {
    const y = Math.floor(Math.random() * 256);
    const h = 1 + Math.floor(Math.random() * 2);
    const val = 110 + Math.floor(Math.random() * 60);
    ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
    ctx.fillRect(0, y, 256, h);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

function createCarbonTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#333333";
  ctx.fillRect(0, 0, 16, 16);
  ctx.fillStyle = "#777777";
  ctx.fillRect(0, 0, 8, 8);
  ctx.fillRect(8, 8, 8, 8);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(24, 24);
  return texture;
}

const textureCache: Record<string, THREE.CanvasTexture> = {};

export function getTexture(type: "none" | "frosted" | "brushed" | "carbon") {
  if (typeof document === "undefined" || type === "none") return null;
  if (textureCache[type]) return textureCache[type];

  if (type === "frosted") {
    textureCache[type] = createFrostedTexture();
  } else if (type === "brushed") {
    textureCache[type] = createBrushedTexture();
  } else if (type === "carbon") {
    textureCache[type] = createCarbonTexture();
  }
  return textureCache[type];
}

// Procedural Grayscale Heightmaps converted to Sobel Tangent Space Normal Maps
function createNoiseNormalMap(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  const height = new Float32Array(size * size);
  for (let i = 0; i < size * size; i++) {
    height[i] = Math.random();
  }

  const strength = 2.0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const hL = height[y * size + Math.max(0, x - 1)];
      const hR = height[y * size + Math.min(size - 1, x + 1)];
      const hT = height[Math.max(0, y - 1) * size + x];
      const hB = height[Math.min(size - 1, y + 1) * size + x];

      const nx = (hL - hR) * strength;
      const ny = (hT - hB) * strength;
      const nz = 1.0;

      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      const rx = (nx / len) * 0.5 + 0.5;
      const ry = (ny / len) * 0.5 + 0.5;
      const rz = (nz / len) * 0.5 + 0.5;

      data[idx] = Math.floor(rx * 255);
      data[idx + 1] = Math.floor(ry * 255);
      data[idx + 2] = Math.floor(rz * 255);
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);
  return texture;
}

function createLeatherNormalMap(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  const numPoints = 45;
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * size,
      y: Math.random() * size
    });
  }

  const height = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let minDist = size * 2;
      let secondMinDist = size * 2;
      for (const p of points) {
        const dx = Math.min(Math.abs(x - p.x), size - Math.abs(x - p.x));
        const dy = Math.min(Math.abs(y - p.y), size - Math.abs(y - p.y));
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          secondMinDist = minDist;
          minDist = dist;
        } else if (dist < secondMinDist) {
          secondMinDist = dist;
        }
      }
      const cellVal = secondMinDist - minDist;
      height[y * size + x] = Math.min(1.0, cellVal * 0.07);
    }
  }

  const strength = 1.5;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const hL = height[y * size + Math.max(0, x - 1)];
      const hR = height[y * size + Math.min(size - 1, x + 1)];
      const hT = height[Math.max(0, y - 1) * size + x];
      const hB = height[Math.min(size - 1, y + 1) * size + x];

      const nx = (hL - hR) * strength;
      const ny = (hT - hB) * strength;
      const nz = 1.0;

      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      const rx = (nx / len) * 0.5 + 0.5;
      const ry = (ny / len) * 0.5 + 0.5;
      const rz = (nz / len) * 0.5 + 0.5;

      data[idx] = Math.floor(rx * 255);
      data[idx + 1] = Math.floor(ry * 255);
      data[idx + 2] = Math.floor(rz * 255);
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

function createGridNormalMap(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  const height = new Float32Array(size * size);
  const center = size / 2;
  const radius = size * 0.35;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = x - center;
      const dy = y - center;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        height[y * size + x] = Math.cos((dist / radius) * (Math.PI / 2));
      } else {
        height[y * size + x] = 0;
      }
    }
  }

  const strength = 1.8;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const hL = height[y * size + Math.max(0, x - 1)];
      const hR = height[y * size + Math.min(size - 1, x + 1)];
      const hT = height[Math.max(0, y - 1) * size + x];
      const hB = height[Math.min(size - 1, y + 1) * size + x];

      const nx = (hL - hR) * strength;
      const ny = (hT - hB) * strength;
      const nz = 1.0;

      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      const rx = (nx / len) * 0.5 + 0.5;
      const ry = (ny / len) * 0.5 + 0.5;
      const rz = (nz / len) * 0.5 + 0.5;

      data[idx] = Math.floor(rx * 255);
      data[idx + 1] = Math.floor(ry * 255);
      data[idx + 2] = Math.floor(rz * 255);
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);
  return texture;
}

const normalCache: Record<string, THREE.CanvasTexture> = {};

export function getNormalMap(type: "none" | "noise" | "leather" | "grid") {
  if (typeof document === "undefined" || type === "none") return null;
  if (normalCache[type]) return normalCache[type];

  if (type === "noise") {
    normalCache[type] = createNoiseNormalMap();
  } else if (type === "leather") {
    normalCache[type] = createLeatherNormalMap();
  } else if (type === "grid") {
    normalCache[type] = createGridNormalMap();
  }
  return normalCache[type];
}

export const FloatingParticles: React.FC<{
  type: "sparkles" | "dust" | "stars";
  count: number;
  color: string;
  speed: number;
}> = ({ type, count = 50, color = "#ffffff", speed = 1 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 3.5;
      arr[i + 1] = (Math.random() - 0.5) * 3.5;
      arr[i + 2] = (Math.random() - 0.5) * 3.5;
    }
    return arr;
  }, [count]);

  const speeds = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = 0.2 + Math.random() * 0.8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const positionsAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.getElapsedTime() * 0.1 * speed;

    for (let i = 0; i < count; i++) {
      positionsAttr.setY(i, positionsAttr.getY(i) + 0.002 * speed * speeds[i]);

      if (positionsAttr.getY(i) > 1.8) {
        positionsAttr.setY(i, -1.8);
      }
      positionsAttr.setX(i, positionsAttr.getX(i) + Math.sin(t + i) * 0.0008);
    }
    positionsAttr.needsUpdate = true;
  });

  const size = type === "sparkles" ? 0.12 : type === "stars" ? 0.08 : 0.04;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Internal staging mesh handling animations and hovers
function SceneGrabber({ onScene }: { onScene: (scene: THREE.Scene) => void }) {
  const { scene } = useThree();
  useEffect(() => {
    onScene(scene);
  }, [scene, onScene]);
  return null;
}

export function SharedWrapper({
  preset = "glass",
  angle = "perspective",
  environment = "city",
  variant = "3d",
  color,
  accentColor,
  gradientType = "none",
  gradientColorStart,
  gradientColorEnd,
  gradientAngle = 45,
  manualRotationX,
  manualRotationY,
  manualRotationZ,
  spinSpeed = 1.0,
  floatHeight = 1.0,
  theme = "dark",
  interactive = true,
  size,
  fallback2d,
  iconId,
  canvas = true,
  customMaterial,
  cameraZoom,
  cameraFov,
  lightIntensity,
  lightColor,
  tiltIntensity,
  animationType,
  animationAxis,
  animationDirection,
  shadowOpacity,
  shadowBlur,
  textureType,
  emissivePulseSpeed,
  emissivePulseIntensity,
  lightingPreset,
  accentLightColor,
  accentLightIntensity,
  accentLightAngle,
  ambientLightColor,
  ambientLightIntensity,
  particleSystem,
  particleCount,
  particleColor,
  particleSpeed,
  surfaceNormal,
  labelText,
  labelColor,
  explodeDistance,
  envRotation,
  onSceneLoaded,
  turntableActive = false,
  keyLightX,
  keyLightY,
  keyLightZ,
  bloomIntensity,
  bloomThreshold,
  bloomSmoothing,
  children,
  ...props
}: IconProps & {
  fallback2d?: React.ReactNode;
  iconId?: string;
  customMaterial?: Partial<MaterialConfig>;
  children: (mat: MaterialConfig) => React.ReactNode;
}) {
  const sizeStyle =
    size !== undefined
      ? {
          width: typeof size === "number" ? `${size}px` : size,
          height: typeof size === "number" ? `${size}px` : size
        }
      : { width: "100%", height: "100%" };

  const [mounted, setMounted] = useState(false);
  const glRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (glRef.current) {
        try {
          glRef.current.dispose();
          const glContext = glRef.current.getContext();
          if (glContext) {
            const ext = glContext.getExtension("WEBGL_lose_context");
            if (ext) {
              ext.loseContext();
            }
          }
        } catch (e) {
          console.warn("WebGL context force loss failed:", e);
        }
      }
    };
  }, []);

  if (!canvas) {
    if (!mounted || !isWebGLAvailable() || variant === "2d") {
      return <group />;
    }
    return (
      <IconScene
        preset={preset}
        angle={angle}
        color={color}
        accentColor={accentColor}
        spinSpeed={spinSpeed}
        floatHeight={floatHeight}
        theme={theme}
        interactive={interactive}
        customMaterial={customMaterial}
        tiltIntensity={tiltIntensity}
        animationType={animationType}
        animationAxis={animationAxis}
        animationDirection={animationDirection}
        textureType={textureType}
        emissivePulseSpeed={emissivePulseSpeed}
        emissivePulseIntensity={emissivePulseIntensity}
        gradientType={gradientType}
        gradientColorStart={gradientColorStart}
        gradientColorEnd={gradientColorEnd}
        gradientAngle={gradientAngle}
        manualRotationX={manualRotationX}
        manualRotationY={manualRotationY}
        manualRotationZ={manualRotationZ}
        labelText={labelText}
        labelColor={labelColor}
        explodeDistance={explodeDistance}
        cameraZoom={cameraZoom}
        turntableActive={turntableActive}
      >
        {children}
      </IconScene>
    );
  }

  const use2d = variant === "2d" || !isWebGLAvailable() || !mounted;
  const fallbackLabel =
    props["aria-label"] ||
    (iconId ? `${iconId.charAt(0).toUpperCase() + iconId.slice(1)} Icon` : "3D Icon");

  if (use2d) {
    return (
      <div
        role="img"
        aria-label={fallbackLabel}
        style={{
          ...sizeStyle,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
        {...props}
      >
        <div
          style={{
            width: "85%",
            height: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {fallback2d ||
            (iconId ? (
              <Fallback2D
                id={iconId}
                color={color}
                theme={theme}
                preset={preset}
                gradientType={gradientType}
                gradientColorStart={gradientColorStart}
                gradientColorEnd={gradientColorEnd}
                gradientAngle={gradientAngle}
              />
            ) : (
              <div style={{ color: color || "#6366f1", fontStyle: "italic", fontSize: "11px" }}>
                3D Icon
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={fallbackLabel}
      style={{ ...sizeStyle, position: "relative" }}
      {...props}
    >
      <Canvas
        camera={{ position: [0, 0, cameraZoom ?? (interactive ? 4.5 : 3.0)], fov: cameraFov ?? 45 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        shadows
        onCreated={({ gl }) => {
          glRef.current = gl;
        }}
      >
        <StudioLights
          theme={theme}
          intensity={lightIntensity}
          color={lightColor}
          preset={lightingPreset}
          accentColor={accentLightColor}
          accentIntensity={accentLightIntensity}
          accentAngle={accentLightAngle}
          ambientColor={ambientLightColor}
          ambientIntensity={ambientLightIntensity}
          keyLightX={keyLightX}
          keyLightY={keyLightY}
          keyLightZ={keyLightZ}
        />
        <group rotation={[0, envRotation ?? 0, 0]}>
          <Environment preset={environment} />
        </group>
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={shadowOpacity ?? 0.6}
          scale={5}
          blur={shadowBlur ?? 2.5}
          far={4.5}
        />
        {onSceneLoaded && <SceneGrabber onScene={onSceneLoaded} />}

        <IconScene
          preset={preset}
          angle={angle}
          color={color}
          accentColor={accentColor}
          spinSpeed={spinSpeed}
          floatHeight={floatHeight}
          theme={theme}
          interactive={interactive}
          customMaterial={customMaterial}
          tiltIntensity={tiltIntensity}
          animationType={animationType}
          animationAxis={animationAxis}
          animationDirection={animationDirection}
          textureType={textureType}
          emissivePulseSpeed={emissivePulseSpeed}
          emissivePulseIntensity={emissivePulseIntensity}
          gradientType={gradientType}
          gradientColorStart={gradientColorStart}
          gradientColorEnd={gradientColorEnd}
          gradientAngle={gradientAngle}
          manualRotationX={manualRotationX}
          manualRotationY={manualRotationY}
          manualRotationZ={manualRotationZ}
          particleSystem={particleSystem}
          particleCount={particleCount}
          particleColor={particleColor}
          particleSpeed={particleSpeed}
          surfaceNormal={surfaceNormal}
          labelText={labelText}
          labelColor={labelColor}
          explodeDistance={explodeDistance}
          cameraZoom={cameraZoom}
          turntableActive={turntableActive}
        >
          {children}
        </IconScene>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enabled={!turntableActive}
          makeDefault
        />

        {bloomIntensity !== undefined && bloomIntensity > 0 && (
          <EffectComposer>
            <Bloom
              luminanceThreshold={bloomThreshold ?? 0.25}
              luminanceSmoothing={bloomSmoothing ?? 0.9}
              intensity={bloomIntensity}
              mipmapBlur
            />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
}
