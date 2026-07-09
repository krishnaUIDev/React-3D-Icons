import { HTMLAttributes } from "react";

export type IconPreset =
  | "glass"
  | "metal"
  | "clay"
  | "hologram"
  | "gold"
  | "silver"
  | "glassmorphism"
  | "carbon"
  | "wood"
  | "neon-glow"
  | "liquid-metal";
export type IconAngle = "front" | "perspective" | "tilted";
export type IconEnvironment =
  "apartment" | "city" | "forest" | "lobby" | "night" | "park" | "studio" | "sunset" | "warehouse";

export type IconAnimationType = "spin" | "wobble" | "breathe" | "wave" | "bounce" | "orbit";

export interface IconProps extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "children"> {
  preset?: IconPreset;
  angle?: IconAngle;
  environment?: IconEnvironment;
  variant?: "3d" | "2d";
  color?: string; // Custom primary hex/rgb color
  accentColor?: string; // Custom accent/glow hex/rgb color
  gradientType?: "none" | "linear" | "radial"; // Custom gradient type ("none" | "linear" | "radial")
  gradientColorStart?: string; // Starting gradient color (hex)
  gradientColorEnd?: string; // Ending gradient color (hex)
  gradientAngle?: number; // Linear gradient angle (degrees)
  manualRotationX?: number; // Manual override rotation X (radians)
  manualRotationY?: number; // Manual override rotation Y (radians)
  manualRotationZ?: number; // Manual override rotation Z (radians)
  spinSpeed?: number; // Rotation speed coefficient (default: 1.0)
  floatHeight?: number; // Floating bounce offset coefficient (default: 1.0)
  theme?: "light" | "dark";
  interactive?: boolean; // React to mouse hover
  size?: number | string; // Size configuration (width & height)
  canvas?: boolean; // If false, skips wrapping in a Canvas context
  customMaterial?: Partial<MaterialConfig>; // Override physical material parameters
  cameraZoom?: number; // Distance/zoom level of the viewport camera
  cameraFov?: number; // Perspective lens Field of View
  lightIntensity?: number; // Spot lighting rig intensity override
  lightColor?: string; // Spot lighting rig color override (hex)
  tiltIntensity?: number; // Parallax mouse follow intensity factor
  animationType?: IconAnimationType; // Physical float animation type
  animationAxis?: "x" | "y" | "z"; // Continuous spin rotation axis
  animationDirection?: "clockwise" | "counter-clockwise"; // Spin direction
  shadowOpacity?: number; // Contact shadow opacity (0.0 to 1.0)
  shadowBlur?: number; // Contact shadow blur sharpness factor
  textureType?: "none" | "frosted" | "brushed" | "carbon"; // Tactile texture style
  emissivePulseSpeed?: number; // Pulsing glow speed (0.0 for off)
  emissivePulseIntensity?: number; // Pulsing glow amplitude depth (0.0 to 1.0)
  lightingPreset?: "studio" | "cyber" | "sunset" | "dramatic"; // Studio lighting style
  accentLightColor?: string; // Secondary custom accent light color (hex)
  accentLightIntensity?: number; // Secondary custom accent light intensity
  accentLightAngle?: number; // Secondary custom accent light rotation angle
  ambientLightColor?: string; // Custom ambient light color (hex)
  ambientLightIntensity?: number; // Custom ambient light intensity
}

// Internal standard material config interface
export interface MaterialConfig {
  roughness: number;
  metalness: number;
  transmission: number;
  thickness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  ior: number;
  color: string;
  emissive: string;
  emissiveIntensity: number;
}
