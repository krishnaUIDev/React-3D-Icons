import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { IconProps, MaterialConfig, IconPreset, IconAngle } from "../types";
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
    clay: "#f43f5e",  // Rose
    hologram: "#a855f7", // Violet
    gold: "#d4af37",   // Gold
    silver: "#e2e8f0", // Silver
    glassmorphism: theme === "dark" ? "#ffffff" : "#64748b", // Frosted Glass
    carbon: "#27272a", // Carbon slate
    wood: "#d97706"   // Wood
  };

  const color = baseColor || defaultColors[preset];
  const accent = accentColor || "#ec4899"; // Default pink glow

  switch (preset) {
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
const StudioLights: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <ambientLight 
        intensity={isDark ? 0.4 : 0.7} 
        color={isDark ? "#3f3f46" : "#ffffff"} 
      />
      
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
        intensity={isDark ? 1.0 : 0.6}
        color={isDark ? "#c084fc" : "#fff"}
      />
    </>
  );
};

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
}> = ({ children, preset, angle, color, accentColor, spinSpeed, floatHeight, theme, interactive }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Compute material configs
  const matConfig = getMaterialConfig(preset, color, theme, accentColor);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Constant rotation
    groupRef.current.rotation.y = t * 0.3 * spinSpeed;

    // Hover scale interpolation (smooth lerping)
    const targetScale = hovered && interactive ? 1.2 : 1.0;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
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
      <group rotation={angleRotations[angle]}>
        <Float
          speed={1.5 * spinSpeed} 
          rotationIntensity={0.2} 
          floatIntensity={1.0 * floatHeight}
        >
          {children(matConfig)}
        </Float>
      </group>
    </group>
  );
};

export function SharedWrapper({
  preset = "glass",
  angle = "perspective",
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
  children,
  ...props
}: IconProps & { 
  fallback2d?: React.ReactNode; 
  iconId?: string;
  children: (mat: MaterialConfig) => React.ReactNode; 
}) {
  const sizeStyle = size !== undefined
    ? { width: typeof size === "number" ? `${size}px` : size, height: typeof size === "number" ? `${size}px` : size }
    : { width: "100%", height: "100%" };

  const use2d = variant === "2d" || !isWebGLAvailable();

  if (use2d) {
    return (
      <div 
        style={{ 
          ...sizeStyle, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          position: "relative" 
        }} 
        {...props}
      >
        <div style={{ width: "60%", height: "60%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {fallback2d || (iconId ? (
            <Fallback2D id={iconId} color={color} theme={theme} />
          ) : (
            <div style={{ color: color || "#6366f1", fontStyle: "italic", fontSize: "11px" }}>3D Icon</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...sizeStyle, position: "relative" }} {...props}>
      <Canvas
        camera={{ position: [0, 0, interactive ? 4.5 : 3.0], fov: 45 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        shadows
      >
        <StudioLights theme={theme} />
        <Environment preset="city" />
        
        <IconScene
          preset={preset}
          angle={angle}
          color={color}
          accentColor={accentColor}
          spinSpeed={spinSpeed}
          floatHeight={floatHeight}
          theme={theme}
          interactive={interactive}
        >
          {children}
        </IconScene>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          makeDefault 
        />
      </Canvas>
    </div>
  );
}
