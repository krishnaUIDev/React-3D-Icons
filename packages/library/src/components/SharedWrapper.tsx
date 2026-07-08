import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { IconProps, MaterialConfig, IconPreset, IconAngle, IconAnimationType } from "../types";
import { isWebGLAvailable } from "../utils/webgl";
import { Fallback2D } from "./Fallback2D";

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
}> = ({
  theme,
  intensity,
  color,
  preset = "studio",
  accentColor,
  accentIntensity,
  accentAngle
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

  if (preset === "cyber") {
    return (
      <>
        <ambientLight intensity={isDark ? 0.25 : 0.45} color="#18181b" />
        <directionalLight
          position={[5, 10, 5]}
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
        <ambientLight intensity={isDark ? 0.35 : 0.55} color="#1c1917" />
        <directionalLight
          position={[5, 10, 5]}
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
        <ambientLight intensity={0.06} color="#000000" />
        <directionalLight
          position={[5, 10, 5]}
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
      <ambientLight intensity={isDark ? 0.4 : 0.7} color={isDark ? "#3f3f46" : "#ffffff"} />
      <directionalLight
        position={[5, 10, 5]}
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

function getTexture(type: "none" | "frosted" | "brushed" | "carbon") {
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

// Internal staging mesh handling animations and hovers
const IconScene: React.FC<{
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
  textureType?: "none" | "frosted" | "brushed" | "carbon";
  emissivePulseSpeed?: number;
  emissivePulseIntensity?: number;
}> = ({
  children,
  preset,
  angle,
  color,
  accentColor,
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
  emissivePulseIntensity = 0.5
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Compute material configs
  const matConfig = getMaterialConfig(preset, color, theme, accentColor);
  const mergedMatConfig = { ...matConfig, ...customMaterial };

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

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

            // 2. Modulate emissive pulsing
            if (emissivePulseSpeed > 0) {
              const baseIntensity = mergedMatConfig.emissiveIntensity ?? 0.3;
              const sinVal = Math.sin(t * emissivePulseSpeed); // -1.0 to 1.0
              const normVal = (sinVal + 1) / 2; // 0.0 to 1.0
              material.emissiveIntensity = baseIntensity + normVal * emissivePulseIntensity * 1.5;
            } else {
              material.emissiveIntensity = mergedMatConfig.emissiveIntensity ?? 0.3;
            }
          }
        }
      });
    }
  });

  const angleRotations: Record<IconAngle, [number, number, number]> = {
    front: [0, 0, 0],
    perspective: [0.25, -0.35, 0],
    tilted: [0.25, -0.25, 0.25]
  };

  return (
    <group
      ref={groupRef}
      onPointerOver={() => interactive && setHovered(true)}
      onPointerOut={() => interactive && setHovered(false)}
    >
      <group ref={meshRef}>
        <group rotation={angleRotations[angle]}>
          <Float
            speed={1.5 * spinSpeed}
            rotationIntensity={animationType === "wobble" ? 0.4 : 0.2}
            floatIntensity={animationType === "wave" ? 1.5 * floatHeight : 0.8 * floatHeight}
          >
            {children(mergedMatConfig)}
          </Float>
        </group>
      </group>
    </group>
  );
};

export function SharedWrapper({
  preset = "glass",
  angle = "perspective",
  environment = "city",
  variant = "3d",
  color,
  accentColor,
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
  useEffect(() => {
    setMounted(true);
  }, []);

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
              <Fallback2D id={iconId} color={color} theme={theme} preset={preset} />
            ) : (
              <div style={{ color: color || "#6366f1", fontStyle: "italic", fontSize: "11px" }}>
                3D Icon
              </div>
            ))}
        </div>
      </div>
    );
  }

  if (!canvas) {
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
      >
        {children}
      </IconScene>
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
      >
        <StudioLights
          theme={theme}
          intensity={lightIntensity}
          color={lightColor}
          preset={lightingPreset}
          accentColor={accentLightColor}
          accentIntensity={accentLightIntensity}
          accentAngle={accentLightAngle}
        />
        <Environment preset={environment} />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={shadowOpacity ?? 0.6}
          scale={5}
          blur={shadowBlur ?? 2.5}
          far={4.5}
        />

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
        >
          {children}
        </IconScene>

        <OrbitControls enableZoom={false} enablePan={false} makeDefault />
      </Canvas>
    </div>
  );
}
