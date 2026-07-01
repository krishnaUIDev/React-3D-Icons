<div align="center">

# ✨ R3D Icons (r3d-icons)

A premium, interactive React component library for high-fidelity 3D and 2D vector icons, designed to give modern web applications a state-of-the-art visual aesthetic.

[![npm version](https://img.shields.io/npm/v/r3d-icons.svg?color=6366f1&style=flat-square)](https://www.npmjs.com/package/r3d-icons)
[![npm downloads](https://img.shields.io/npm/dm/r3d-icons.svg?color=ec4899&style=flat-square)](https://www.npmjs.com/package/r3d-icons)
[![license](https://img.shields.io/npm/l/r3d-icons.svg?color=71717a&style=flat-square)](https://github.com/krishnaUIDev/React-3D-Icons/blob/main/LICENSE)

[**✨ Explore Live Interactive Sandbox**](https://react-3d-icons-lab.vercel.app/)

---

</div>

## 🌟 Key Features

*   **🎨 Procedural 3D Canvas**: Renders real-time 3D geometries powered by **React Three Fiber (R3F)** and **Three.js**.
*   **🖱️ Interactive Parallax & Orbit Controls**: Icons react smoothly to hover coordinates (mouse tracking tilt) and support drag-to-rotate or pinch-to-zoom out-of-the-box.
*   **🧪 Curated Material Presets**: Switch skins dynamically with pre-configured settings:
    *   `glass` — Sleek, glossy translucent look.
    *   `glassmorphism` — Elegant frosted glass with high transmission.
    *   `gold` — High-gloss luxury gold-plated finish.
    *   `silver` — Polished reflective chrome plating.
    *   `metal` — Semi-rough metallic silver/steel look.
    *   `hologram` — Glowing, futuristic neon-violet look.
    *   `clay` — Soft-matte rose clay texture.
    *   `carbon` — Sleek dark carbon-fiber pattern.
    *   `wood` — Organic textured timber finish.
*   **🌍 Dynamic Environment Lighting**: Toggle reflection maps (`city`, `sunset`, `studio`, `night`, `park`, etc.) to control specular highlights in real-time.
*   **⚡ Handcrafted 2D Vector Fallback**: Automatically falls back to lightweight, high-fidelity SVGs if WebGL is disabled or unavailable on the client.
*   **📐 Seamless Sizing**: Directly set sizing using a number (e.g. `120` resolves to `120px`) or any valid CSS string (e.g., `6rem`, `10vw`).

---

## 📦 Installation

Install the package and its required peer dependencies:

```bash
npm install r3d-icons three @react-three/fiber @react-three/drei
```

---

## 🚀 Quick Start

```jsx
import React from 'react';
import { ShieldIcon, CrownIcon, AtomIcon } from 'r3d-icons';

function App() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      {/* 3D Glass Shield Icon */}
      <ShieldIcon 
        size={120} 
        preset="glass" 
        angle="perspective" 
        color="#0d9488" 
      />

      {/* 3D Gold Royal Crown */}
      <CrownIcon 
        size={120} 
        preset="gold" 
        angle="front" 
        environment="sunset" 
        interactive={true} 
      />

      {/* 3D Glowing Holographic Atom */}
      <AtomIcon 
        size={120} 
        preset="hologram" 
        accentColor="#10b981" 
      />

      {/* 2D Fallback Vector SVG */}
      <ShieldIcon 
        size={120} 
        variant="2d" 
        color="#ef4444" 
      />
    </div>
  );
}

export default App;
```

---

## ⚙️ API Properties Reference

Every icon component accepts the following customizable props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number \| string` | `100%` | Scale of the viewport container (e.g., `120` or `"8rem"`). |
| `preset` | `IconPreset` | `"glass"` | Material preset (`"glass" \| "metal" \| "clay" \| "hologram" \| "gold" \| "silver" \| "glassmorphism" \| "carbon" \| "wood"`). |
| `angle` | `IconAngle` | `"perspective"` | Camera preset viewpoint angle (`"front" \| "perspective" \| "tilted"`). |
| `environment` | `IconEnvironment` | `"city"` | Specular environment mapping (`"city" \| "sunset" \| "studio" \| "night" \| "park" \| "forest" \| "lobby" \| "apartment" \| "warehouse"`). |
| `variant` | `"3d" \| "2d"` | `"3d"` | Switch between WebGL 3D Canvas and vector 2D SVG fallback. |
| `color` | `string` | *Default brand* | Main hexadecimal primary mesh/stroke color. |
| `accentColor` | `string` | *Default accent* | Secondary detail or glowing emissive color. |
| `spinSpeed` | `number` | `1.0` | Coefficient multiplier for rotation and float speeds. |
| `floatHeight` | `number` | `1.0` | Amplitude height for the hover floating animation. |
| `theme` | `"light" \| "dark"` | `"dark"` | Light or dark lighting contrast mode. |
| `interactive` | `boolean` | `true` | Enables hover parallax tilt and click-and-drag orbit controls. |

---

## 📚 Icon Catalog (Over 280+ Premium Icons)

Icons are categorized into modern, high-fidelity sets:

### 💼 Finance & Commerce
*   `SafeIcon`
*   `GoldBarsIcon`
*   `BankIcon`
*   `CoinIcon`
*   `PiggyBankIcon`
*   `ShoppingBagIcon`
*   `ShoppingCartIcon`
*   `ScaleIcon`
*   `ReceiptIcon`
*   `BanknoteIcon`
*   `EuroIcon`
*   `YenIcon`
*   `PoundIcon`
*   `WalletIcon`
*   `CreditCardIcon`
*   `BriefcaseIcon`

### 🍔 Food & Drinks
*   `BurgerIcon`
*   `PizzaIcon`
*   `AppleIcon`
*   `BananaIcon`
*   `CakeIcon`
*   `IceCreamIcon`
*   `DonutIcon`
*   `PopcornIcon`
*   `WatermelonIcon`
*   `CookieIcon`

### 🐾 Animals
*   `DogIcon`
*   `CatIcon`
*   `PandaIcon`
*   `LionIcon`
*   `TigerIcon`
*   `MonkeyIcon`
*   `BearIcon`
*   `RabbitIcon`
*   `ElephantIcon`
*   `OwlIcon`
*   `TurtleIcon`
*   `DolphinIcon`

### ⛅ Weather & Nature
*   `CloudRainIcon`
*   `CloudSnowIcon`
*   `WindIcon`
*   `TornadoIcon`
*   `SnowflakeIcon`
*   `RainbowIcon`
*   `ThermometerIcon`
*   `LeafIcon`
*   `TreeIcon`
*   `HurricaneIcon`

### 🏷️ Brands & Tech
*   `ReactIcon`
*   `JavascriptIcon`
*   `GithubIcon`
*   `DockerIcon`
*   `FirebaseIcon`
*   `SlackIcon`
*   `DiscordIcon`
*   `ChromeIcon`
*   `VSCodeIcon`
*   `FigmaIcon`
*   `FacebookIcon`
*   `TwitterIcon`
*   `GoogleIcon`
*   `NodeIcon`
*   `GitIcon`

### 🛠️ Hardware & Devices
*   `CpuIcon`
*   `GamepadIcon`
*   `VRHeadsetIcon`
*   `CameraIcon`
*   `SpeakerIcon`
*   `MicIcon`
*   `HeadphonesIcon`
*   `WatchIcon`
*   `PhoneIcon`
*   `TabletIcon`
*   `LaptopIcon`
*   `MonitorIcon`
*   `KeyboardIcon`
*   `MouseIcon`
*   `HardDriveIcon`
*   `PrinterIcon`
*   `RouterIcon`

### ⚙️ Mechanics & Utility
*   `RocketIcon`
*   `GearIcon`
*   `WrenchIcon`
*   `BoltIcon`
*   `HammerIcon`
*   `ScrewdriverIcon`
*   `NutIcon`
*   `ShieldIcon`
*   `LockIcon`
*   `KeyIcon`
*   `MailIcon`
*   `CalendarIcon`
*   `ClockIcon`
*   `SearchIcon`
*   `BellIcon`
*   `HomeIcon`
*   `TrashIcon`
*   `UserIcon`
*   `MapPinIcon`
*   `ReceiptIcon`
*   `DownloadIcon`
*   `UploadIcon`
*   `CheckIcon`
*   `ShieldCheckIcon`

### 🗂️ System & Filesystem Actions
*   `FolderPlusIcon`
*   `FolderMinusIcon`
*   `FolderCheckIcon`
*   `CalendarPlusIcon`
*   `CalendarCheckIcon`

### 🔤 Alphanumerics & Symbols
*   **Alphabet (A-Z)**: `AIcon` through `ZIcon`
*   **Digits (0-9)**: `ZeroIcon` through `NineIcon`

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
