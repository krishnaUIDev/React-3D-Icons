<div align="center">

# ✨ R3D Icons (r3d-icons)

A premium, interactive React component library for high-fidelity 3D and 2D vector icons, designed to give modern web applications a state-of-the-art visual aesthetic.

[![npm version](https://img.shields.io/npm/v/r3d-icons.svg?color=6366f1&style=flat-square)](https://www.npmjs.com/package/r3d-icons)
[![npm downloads](https://img.shields.io/npm/dm/r3d-icons.svg?color=ec4899&style=flat-square)](https://www.npmjs.com/package/r3d-icons)
[![license](https://img.shields.io/npm/l/r3d-icons.svg?color=71717a&style=flat-square)](https://github.com/krishnaUIDev/React-3D-Icons/blob/main/LICENSE)
[![Figma](https://img.shields.io/badge/Figma-Design_System-F24E1E?logo=figma&style=flat-square)](https://figma.com)

[**✨ Explore Live Interactive Sandbox**](https://r3d-icons.vercel.app/)

---

</div>

## 🌟 Key Features

- **🎨 Procedural 3D Canvas**: Renders real-time 3D geometries powered by **React Three Fiber (R3F)** and **Three.js**.
- **🖱️ Interactive Parallax & Orbit Controls**: Icons react smoothly to hover coordinates (mouse tracking tilt) and support drag-to-rotate or pinch-to-zoom out-of-the-box.
- **🧪 Curated Material Presets**: Switch skins dynamically with pre-configured settings:
  - `glass` — Sleek, glossy translucent look.
  - `glassmorphism` — Elegant frosted glass with high transmission.
  - `gold` — High-gloss luxury gold-plated finish.
  - `silver` — Polished reflective chrome plating.
  - `metal` — Semi-rough metallic silver/steel look.
  - `hologram` — Glowing, futuristic neon-violet look.
  - `clay` — Soft-matte rose clay texture.
  - `carbon` — Sleek dark carbon-fiber pattern.
  - `wood` — Organic textured timber finish.
- **🌍 Dynamic Environment Lighting**: Toggle reflection maps (`city`, `sunset`, `studio`, `night`, `park`, etc.) to control specular highlights in real-time.
- **⚡ Handcrafted 2D Vector Fallback**: Automatically falls back to lightweight, high-fidelity SVGs if WebGL is disabled or unavailable on the client.
- **📶 Installable PWA & Offline Mode**: The showcase dashboard is fully installable as a Progressive Web App (PWA) on mobile and desktop platforms, featuring robust network-first dynamic caching for complete offline functionality.
- **♿ WCAG Accessibility Standards**: Out-of-the-box support for screen readers and structural semantic `role="img"` tags with dynamic `aria-label` metadata on both 3D canvases and 2D vector elements (WCAG 1.1.1 compliant).
- **📐 Seamless Sizing**: Directly set sizing using a number (e.g. `120` resolves to `120px`) or any valid CSS string (e.g., `6rem`, `10vw`).

---

## 📦 Installation

Install the package and its required peer dependencies:

```bash
npm install r3d-icons three @react-three/fiber @react-three/drei
```

---

## 🚀 Quick Start

```jsx
import React from "react";
import { ShieldIcon, CrownIcon, AtomIcon } from "r3d-icons";

function App() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      {/* 3D Glass Shield Icon */}
      <ShieldIcon size={120} preset="glass" angle="perspective" color="#0d9488" />

      {/* 3D Gold Royal Crown */}
      <CrownIcon size={120} preset="gold" angle="front" environment="sunset" interactive={true} />

      {/* 3D Glowing Holographic Atom */}
      <AtomIcon size={120} preset="hologram" accentColor="#10b981" />

      {/* 2D Fallback Vector SVG */}
      <ShieldIcon size={120} variant="2d" color="#ef4444" />
    </div>
  );
}

export default App;
```

---

## ⚙️ API Properties Reference

Every icon component accepts the following customizable props:

| Prop                   | Type                                        | Default             | Description                                                                                                                                              |
| :--------------------- | :------------------------------------------ | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`                 | `number \| string`                          | `100%`              | Scale of the viewport container (e.g., `120` or `"8rem"`).                                                                                               |
| `preset`               | `IconPreset`                                | `"glass"`           | Material preset (`"glass" \| "metal" \| "clay" \| "hologram" \| "gold" \| "silver" \| "glassmorphism" \| "carbon" \| "wood"`).                           |
| `angle`                | `IconAngle`                                 | `"perspective"`     | Camera preset viewpoint angle (`"front" \| "perspective" \| "tilted"`).                                                                                  |
| `environment`          | `IconEnvironment`                           | `"city"`            | Specular environment mapping (`"city" \| "sunset" \| "studio" \| "night" \| "park" \| "forest" \| "lobby" \| "apartment" \| "warehouse"`).               |
| `variant`              | `"3d" \| "2d"`                              | `"3d"`              | Switch between WebGL 3D Canvas and vector 2D SVG fallback.                                                                                               |
| `color`                | `string`                                    | _Default brand_     | Main hexadecimal primary mesh/stroke color.                                                                                                              |
| `accentColor`          | `string`                                    | _Default accent_    | Secondary detail or glowing emissive color.                                                                                                              |
| `spinSpeed`            | `number`                                    | `1.0`               | Coefficient multiplier for rotation and float speeds.                                                                                                    |
| `floatHeight`          | `number`                                    | `1.0`               | Amplitude height for the hover floating animation.                                                                                                       |
| `theme`                | `"light" \| "dark"`                         | `"dark"`            | Light or dark lighting contrast mode.                                                                                                                    |
| `interactive`          | `boolean`                                   | `true`              | Enables hover parallax tilt and click-and-drag orbit controls.                                                                                           |
| `cameraZoom`           | `number`                                    | `4.5` (interactive) | Distance/zoom level of the viewport camera.                                                                                                              |
| `cameraFov`            | `number`                                    | `45`                | Perspective lens Field of View (focal skew angle).                                                                                                       |
| `customMaterial`       | `Partial<MaterialConfig>`                   | `undefined`         | Fine-grain physics overrides for the 3D material (roughness, metalness, transmission, thickness, clearcoat, clearcoatRoughness, ior, emissiveIntensity). |
| `lightIntensity`       | `number`                                    | `1.0` (dark theme)  | Spot lighting rig brightness override multiplier.                                                                                                        |
| `lightColor`           | `string`                                    | `"#c084fc"`         | Spot lighting rig illumination color override.                                                                                                           |
| `accentLightColor`     | `string`                                    | `"#ec4899"`         | Secondary custom accent lighting rig color override.                                                                                                     |
| `accentLightIntensity` | `number`                                    | `0.0`               | Secondary custom accent lighting rig brightness intensity multiplier (set to `0.0` to disable).                                                          |
| `accentLightAngle`     | `number`                                    | `135`               | Secondary custom accent light rotation angle around the model (in degrees, `0` to `360`).                                                                |
| `tiltIntensity`        | `number`                                    | `1.0`               | Parallax mouse follow intensity factor coefficient.                                                                                                      |
| `animationType`        | `"spin" \| "wobble" \| "breathe" \| "wave"` | `"spin"`            | Physical float/rotation motion animation profile.                                                                                                        |
| `animationAxis`        | `"x" \| "y" \| "z"`                         | `"y"`               | Rotation spin axis (x, y, or z).                                                                                                                         |
| `animationDirection`   | `"clockwise" \| "counter-clockwise"`        | `"clockwise"`       | Spin direction for auto-rotation modes.                                                                                                                  |
| `shadowOpacity`        | `number`                                    | `0.6`               | Drop contact shadow opacity (0.0 to 1.0).                                                                                                                |
| `shadowBlur`           | `number`                                    | `2.5`               | Drop contact shadow blur/softness factor.                                                                                                                |

---

## 🧪 Live Customizer Laboratory Sandbox

The monorepo contains a premium visual editor playground (Vite-based Lab App) allowing developers to iterate, design, and share custom styles:

- **Interactive Material Configurator**: Fine-tune physical settings (Roughness, Metalness, Transmission, Thickness, etc.) in real-time.
- **Scene & Camera Controls**: Adjust camera Zoom level, Field of View (FOV), and custom Spotlight illumination brightness or color values.
- **Integration Context Switcher**: Preview the customized icon inside mockup layouts like a Dashboard Header/Navbar, Metric Info Card, or marketing Landing Hero section.
- **Saved Presets**: Save custom configs locally to `localStorage` and apply them to other assets.
- **Grid Comparison Mode**: Split the viewport into a 2x2 grid to preview and configure multiple icons rendering side-by-side with your active material settings.
- **Share Playgrounds**: Generate a shareable URL containing the complete serialized workspace state. Loading this link will restore your configurations and clean the URL parameters.
- **TSX Code Downloader**: Click the code downloader action to generate and download a self-contained, pre-configured React component file ready for direct workspace import.

---

## 📚 Icon Catalog (Over 280+ Premium Icons)

<details>
<summary><b>📐 Click to Expand Catalog</b></summary>

Icons are categorized into modern, high-fidelity sets:

### 💼 Finance & Commerce

- `SafeIcon`
- `GoldBarsIcon`
- `BankIcon`
- `CoinIcon`
- `PiggyBankIcon`
- `ShoppingBagIcon`
- `ShoppingCartIcon`
- `ScaleIcon`
- `ReceiptIcon`
- `BanknoteIcon`
- `EuroIcon`
- `YenIcon`
- `PoundIcon`
- `WalletIcon`
- `CreditCardIcon`
- `BriefcaseIcon`

### 🍔 Food & Drinks

- `BurgerIcon`
- `PizzaIcon`
- `AppleIcon`
- `BananaIcon`
- `CakeIcon`
- `IceCreamIcon`
- `DonutIcon`
- `PopcornIcon`
- `WatermelonIcon`
- `CookieIcon`

### 🐾 Animals

- `DogIcon`
- `CatIcon`
- `PandaIcon`
- `LionIcon`
- `TigerIcon`
- `MonkeyIcon`
- `BearIcon`
- `RabbitIcon`
- `ElephantIcon`
- `OwlIcon`
- `TurtleIcon`
- `DolphinIcon`

### ⛅ Weather & Nature

- `CloudRainIcon`
- `CloudSnowIcon`
- `WindIcon`
- `TornadoIcon`
- `SnowflakeIcon`
- `RainbowIcon`
- `ThermometerIcon`
- `LeafIcon`
- `TreeIcon`
- `HurricaneIcon`

### 🏷️ Brands & Tech

- `ReactIcon`
- `JavascriptIcon`
- `GithubIcon`
- `DockerIcon`
- `FirebaseIcon`
- `SlackIcon`
- `DiscordIcon`
- `ChromeIcon`
- `VSCodeIcon`
- `FigmaIcon`
- `FacebookIcon`
- `TwitterIcon`
- `GoogleIcon`
- `NodeIcon`
- `GitIcon`

### 🛠️ Hardware & Devices

- `CpuIcon`
- `GamepadIcon`
- `VRHeadsetIcon`
- `CameraIcon`
- `SpeakerIcon`
- `MicIcon`
- `HeadphonesIcon`
- `WatchIcon`
- `PhoneIcon`
- `TabletIcon`
- `LaptopIcon`
- `MonitorIcon`
- `KeyboardIcon`
- `MouseIcon`
- `HardDriveIcon`
- `PrinterIcon`
- `RouterIcon`

### ⚙️ Mechanics & Utility

- `RocketIcon`
- `GearIcon`
- `WrenchIcon`
- `BoltIcon`
- `HammerIcon`
- `ScrewdriverIcon`
- `NutIcon`
- `ShieldIcon`
- `LockIcon`
- `KeyIcon`
- `MailIcon`
- `CalendarIcon`
- `ClockIcon`
- `SearchIcon`
- `BellIcon`
- `HomeIcon`
- `TrashIcon`
- `UserIcon`
- `MapPinIcon`
- `ReceiptIcon`
- `DownloadIcon`
- `UploadIcon`
- `CheckIcon`
- `ShieldCheckIcon`

### 🗂️ System & Filesystem Actions

- `FolderPlusIcon`
- `FolderMinusIcon`
- `FolderCheckIcon`
- `CalendarPlusIcon`
- `CalendarCheckIcon`

### 🔤 Alphanumerics & Symbols

- **Alphabet (A-Z)**: `AIcon` through `ZIcon`
- **Digits (0-9)**: `ZeroIcon` through `NineIcon`

</details>

---

## 🌐 Server-Side Rendering (SSR) & Next.js Compatibility

Since 3D icons use WebGL under the hood (which requires browser-only objects like `window` and `document` to initialize), server-side rendering in frameworks like **Next.js** or **Remix** can trigger runtime errors.

To use the 3D variant safely, import them dynamically with SSR disabled:

### Next.js (App or Pages Router)

```jsx
import dynamic from "next/dynamic";

const ShieldIcon = dynamic(() => import("r3d-icons").then((mod) => mod.ShieldIcon), { ssr: false });

export default function Page() {
  return <ShieldIcon size={120} preset="glass" />;
}
```

Alternatively, you can safely render the **2D vector variant** on the server without dynamic imports:

```jsx
import { ShieldIcon } from "r3d-icons";

export default function Page() {
  return <ShieldIcon size={120} variant="2d" />;
}
```

---

## 🛠️ Development & Contributions

To run the local developer sandbox dashboard (Vite + React showcase lab):

```bash
npm run dev:lab
```

To build the library package assets:

```bash
npm run build:lib
```

To compile the production bundles for the showcase site:

```bash
npm run build:lab
```
