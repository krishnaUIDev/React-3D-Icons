# React 3D Icons

A premium, interactive React component library for high-fidelity 3D and 2D vector icons, designed for modern web applications. Powered by **React Three Fiber** and **Three.js**, it offers responsive controls, custom styling presets, dynamic angles, lighting adjustments, and a seamless 2D SVG fallback system.

---

## Key Features

- **Procedural 3D Canvas**: Renders real-time 3D geometries with interactive OrbitControls (pan/rotate/zoom on hover/drag).
- **8 Curated Material Presets**:
  - `glass`: Sleek semitransparent glossy finish.
  - `metal`: Highly reflective silver/metallic finish.
  - `clay`: Matte soft rose clay texture.
  - `hologram`: Vibrant glowing violet futuristic material.
  - `gold`: Premium beveled reflective gold plating.
  - `glassmorphism`: Elegant frosted glass overlays with high transmission.
  - `carbon`: Detailed dark carbon fiber look.
  - `wood`: Diffuse warm organic timber texture.
- **Sizing Flexibility**: Directly set size using the `size` prop as a number (resolves to pixels, e.g., `120` -> `120px`) or any valid CSS string (e.g. `8rem`, `10vw`, etc.).
- **Camera Angle Controls**: View icons from `front`, `perspective`, or `tilted` orientations out-of-the-box.
- **WebGL Check & 2D Vector Fallback**: Automatically falls back to handcrafted, lightweight, premium 2D SVGs if WebGL is unavailable on the client browser. Can also be explicitly triggered via `variant="2d"`.
- **Contrast Adaptation**: Dynamically adjusts glassmorphic highlights and 2D vector outline strokes to contrast perfectly against light or dark canvas backgrounds.

---

## Installation

Install the package and its peer dependencies:

```bash
npm install react-3d-icons three @react-three/fiber @react-three/drei
```

---

## Quick Start

```jsx
import React from 'react';
import { ShieldIcon, CrownIcon } from 'react-3d-icons';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
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
        interactive={true} 
      />

      {/* 2D Fallback Vector Emoji */}
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

## API Properties Reference

Every icon component accepts the following customizable props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number \| string` | `100%` (fill container) | Scale of the icon viewport (e.g. `120` or `"6rem"`). |
| `preset` | `"glass" \| "metal" \| "clay" \| "hologram" \| "gold" \| "glassmorphism" \| "carbon" \| "wood"` | `"glass"` | Material skin preset. |
| `angle` | `"front" \| "perspective" \| "tilted"` | `"perspective"` | Camera preset viewing angle. |
| `variant` | `"3d" \| "2d"` | `"3d"` | Switch between WebGL 3D Canvas and 2D SVG fallback. |
| `color` | `string` | *Icon brand default* | Main hexadecimal primary mesh/stroke color. |
| `accentColor` | `string` | *Icon default accent* | Glow/emissive or detail styling color. |
| `spinSpeed` | `number` | `1.0` | Coefficient multiplier for rotation and float cycles. |
| `floatHeight` | `number` | `1.0` | Amplitude height for the hover floating animation. |
| `theme` | `"light" \| "dark"` | `"dark"` | Active ambient lighting contrast scheme. |
| `interactive` | `boolean` | `true` | Enables click-and-drag rotation and zoom. |

---

## Icon Catalog (75 Premium Icons)

Icons are categorized to align with filter catalogs:

### Brands
- `FacebookIcon`
- `GithubIcon`
- `TwitterIcon`
- `GoogleIcon`

### Networking
- `NetworkIcon`
- `WifiIcon`
- `RouterIcon`
- `ServerIcon`

### Storage
- `DatabaseIcon`
- `FolderIcon`
- `LayersIcon`

### Systems
- `CloudIcon`
- `SunIcon`
- `GlobeIcon`

### Hardware
- `CpuIcon`
- `GamepadIcon`
- `CameraIcon`
- `MonitorIcon`
- `KeyboardIcon`
- `MouseIcon`
- `HardDriveIcon`

### Mechanics
- `RocketIcon`
- `GearIcon`
- `WrenchIcon`
- `BoltIcon`
- `HammerIcon`
- `ScrewdriverIcon`
- `NutIcon`

### Emojies (Emojis)
- `SmileIcon`
- `FrownIcon`
- `HeartEyesIcon`

### Utility
- `ShieldIcon`
- `MailIcon`
- `CalendarIcon`
- `WalletIcon`
- `DollarIcon`
- `ThumbUpIcon`
- `FlashIcon`
- `HeartIcon`
- `ChatIcon`
- `KeyIcon`
- `StarIcon`
- `CartIcon`
- `MusicIcon`
- `BellIcon`
- `BulbIcon`
- `ClockIcon`
- `TrophyIcon`
- `LockIcon`
- `MapPinIcon`
- `CreditCardIcon`
- `SearchIcon`
- `HomeIcon`
- `TrashIcon`
- `UserIcon`
- `PlayIcon`
- `GiftIcon`
- `BagIcon`
- `CompassIcon`
- `SendIcon`
- `TargetIcon`
- `EditIcon`
- `PhoneIcon`
- `BookIcon`
- `LinkIcon`
- `CrownIcon`
- `PinIcon`
- `FlagIcon`
- `BriefcaseIcon`
- `EyeIcon`
- `TagIcon`
- `CoffeeIcon`
- `ShareIcon`
- `SparklesIcon`
- `MegaphoneIcon`
- `DownloadIcon`
- `UploadIcon`
- `GlassmorphismIcon`

---

## Development and Building

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
