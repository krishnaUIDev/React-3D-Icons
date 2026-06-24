import { HTMLAttributes } from "react";

export type IconPreset = "glass" | "metal" | "clay" | "hologram" | "gold" | "glassmorphism" | "carbon" | "wood";
export type IconAngle = "front" | "perspective" | "tilted";

export interface IconProps extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "children"> {
  preset?: IconPreset;
  angle?: IconAngle;
  variant?: "3d" | "2d";
  color?: string;       // Custom primary hex/rgb color
  accentColor?: string; // Custom accent/glow hex/rgb color
  spinSpeed?: number;   // Rotation speed coefficient (default: 1.0)
  floatHeight?: number; // Floating bounce offset coefficient (default: 1.0)
  theme?: "light" | "dark";
  interactive?: boolean; // React to mouse hover
  size?: number | string; // Size configuration (width & height)
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
