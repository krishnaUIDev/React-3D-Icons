# Contributing to React 3D Icons

First off, thank you for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

This guide outlines the project structure, development workflow, coding standards, and step-by-step instructions for adding new premium 3D icons to the library.

---

## Repository Architecture

This repository is set up as a monorepo containing two main packages under the `packages/` directory:

1. **`packages/library`**: The core npm package. It houses all the procedural 3D React Three Fiber (R3F) icon components, the 2D vector fallbacks, WebGL detection utilities, and type definitions.
2. **`packages/lab`**: The showcase sandbox web application (built with React and Vite) where developers can explore the icons catalog, search, filter, customize materials/angles/speeds, and copy implementation snippets.

---

## Local Setup & Development

To get started, make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### 1. Install Dependencies

Run the following command at the repository root to install all workspaces dependencies:

```bash
npm install
```

### 2. Run the Development Server

Launch the local showcase lab application:

```bash
npm run dev:lab
```

This runs the lab site on `http://localhost:5173/` with hot reloading enabled for both the laboratory application and any modifications you make to the library package.

### 3. Build Commands

- **Build the Library Package**:
  ```bash
  npm run build:lib
  ```
- **Build the Showcase Lab Application**:
  ```bash
  npm run build:lab
  ```

---

## How to Add a New Icon

Adding a new premium icon requires registering it in both the library bundle and the showcase catalog. Follow this step-by-step workflow:

### Step 1: Create the 3D Component

Create a new folder under `packages/library/src/components/YourNameIcon/`.
Inside this directory, implement two files:

1. `types.ts` (if specific types are required, otherwise import `IconProps` from `../../types`).
2. `YourNameIcon.tsx`: The actual 3D React component.

Every icon must follow these standards:

- Utilize the `SharedWrapper` component to handle canvas setup, rendering mode toggles, animations (spin/float), sizing (`size` prop), and theme-based lighting settings.
- Implement clear, premium 3D mesh geometries using standard Three.js primitives (`<boxGeometry>`, `<cylinderGeometry>`, `<torusGeometry>`, etc.).
- Maintain light/dark theme compatibility. Adjust physical materials, roughness, colors, and emissive properties so that they remain highly visible in both contrast schemes.
- Support all custom preset materials (`glass`, `metal`, `clay`, `hologram`, `gold`, `glassmorphism`, `carbon`, `wood`).

Example component structure:

```tsx
import React from "react";
import { SharedWrapper } from "../SharedWrapper";
import { IconProps } from "../../types";

export const YourNameIcon: React.FC<IconProps> = (props) => {
  return (
    <SharedWrapper {...props} defaultColor="#3b82f6" defaultAccentColor="#10b981">
      {({ material }) => (
        <group>
          {/* Main 3D meshes using the procedural material passed from SharedWrapper */}
          <mesh material={material}>
            <boxGeometry args={[1, 1, 1]} />
          </mesh>
        </group>
      )}
    </SharedWrapper>
  );
};
```

### Step 2: Add the 2D Vector Fallback

Open [Fallback2D.tsx](file:///Users/krishnakondoju/projects/agents/react-3d-icons/packages/library/src/components/Fallback2D.tsx) and add a custom, clean SVG case under the switch statement matching your icon's lowercase identifier.

- Maintain sizing proportions (SVGs must fit within standard bounding boxes).
- Ensure stroke values dynamically read the `strokeColor` computed from the active theme.

### Step 3: Export from Library

Open [index.ts](file:///Users/krishnakondoju/projects/agents/react-3d-icons/packages/library/src/index.ts) and export your new icon:

```typescript
export { YourNameIcon } from "./components/YourNameIcon";
```

### Step 4: Register in Showcase Pages

To make your icon discoverable inside the Lab sandbox application, register it in the following places:

1. **Homepage Gallery ([Landing.tsx](file:///Users/krishnakondoju/projects/agents/react-3d-icons/packages/lab/src/pages/Landing.tsx))**:
   - Import the component from `react-3d-icons`.
   - Register it inside the `ICONS_REGISTRY` list, assigning a unique description, category (`brands`, `networking`, `storage`, `systems`, `hardware`, `mechanics`, `emojies`, or `utility`), default brand color, and accent color.
2. **Customizer Sandbox ([Customize.tsx](file:///Users/krishnakondoju/projects/agents/react-3d-icons/packages/lab/src/pages/Customize.tsx))**:
   - Import the component from `react-3d-icons`.
   - Register it inside `ICONS_REGISTRY` (maintaining consistency with your Landing page registry).
   - Map its lowercase key in `LUCIDE_FALLBACKS` to an equivalent 2D icon component from `lucide-react`.
3. **Icon Card component ([IconCard.tsx](file:///Users/krishnakondoju/projects/agents/react-3d-icons/packages/lab/src/components/IconCard.tsx))**:
   - Add its lowercase key mapping in `LUCIDE_FALLBACKS` (matching `Customize.tsx`).

### Step 5: Update the README Catalog

1. Open [README.md](file:///Users/krishnakondoju/projects/agents/react-3d-icons/README.md).
2. Increment the total count in the **Icon Catalog** section header.
3. List your new `YourNameIcon` under the appropriate category.

---

## Coding Guidelines

- **TypeScript Standard**: Use explicit types. Ensure all properties are properly defined in `types.ts` files or inherited correctly.
- **Maintain Aesthetics**: Ensure 3D components have correct mesh face groupings, clean normal vectors, and smooth surfaces. Do not use extremely high polygon segments that could cause memory leaks or sluggish frame rendering.
- **Micro-Animations**: All new components should float and rotate natively inside `SharedWrapper` based on `spinSpeed` and `floatHeight` factors.
- **Clean Builds**: Always verify that the project compiles cleanly before making a pull request:
  ```bash
  npm run build:lib && npm run build:lab
  ```

---

## Submitting Pull Requests

1. **Create a Branch**: Create a descriptive feature branch (`feature/add-docker-icon`).
2. **Commit Changes**: Use clean, descriptive commit messages (e.g. `feat(library): add premium docker 3d icon and fallback`).
3. **Self-Review**:
   - Check light and dark theme contrasts.
   - Verify 3D parameters (presettings, angles, interactive rotation).
   - Double-check 2D vector fallback presentation.
4. **Push & Open PR**: Push to your fork and submit a PR to `main` with screenshots/video demonstrations showing the icon inside the customizer.
