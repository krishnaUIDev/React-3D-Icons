import { HTMLAttributes } from "react";

export type IconPreset = "glass" | "metal" | "clay" | "hologram" | "gold" | "silver" | "glassmorphism" | "carbon" | "wood";
export type IconAngle = "front" | "perspective" | "tilted";
export type IconEnvironment = "apartment" | "city" | "forest" | "lobby" | "night" | "park" | "studio" | "sunset" | "warehouse";

export type IconAnimationType = "spin" | "wobble" | "breathe" | "wave";

export interface IconProps extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "children"> {
  preset?: IconPreset;
  angle?: IconAngle;
  environment?: IconEnvironment;
  variant?: "3d" | "2d";
  color?: string;       // Custom primary hex/rgb color
  accentColor?: string; // Custom accent/glow hex/rgb color
  spinSpeed?: number;   // Rotation speed coefficient (default: 1.0)
  floatHeight?: number; // Floating bounce offset coefficient (default: 1.0)
  theme?: "light" | "dark";
  interactive?: boolean; // React to mouse hover
  size?: number | string; // Size configuration (width & height)
  canvas?: boolean; // If false, skips wrapping in a Canvas context
  customMaterial?: Partial<MaterialConfig>; // Override physical material parameters
  cameraZoom?: number; // Distance/zoom level of the viewport camera
  cameraFov?: number;  // Perspective lens Field of View
  lightIntensity?: number; // Spot lighting rig intensity override
  lightColor?: string;     // Spot lighting rig color override (hex)
  tiltIntensity?: number;  // Parallax mouse follow intensity factor
  animationType?: IconAnimationType; // Physical float animation type
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
