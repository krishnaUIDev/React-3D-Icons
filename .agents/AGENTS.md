# Workspace Customization Rules - React 3D Icons

This document specifies repository-specific guidelines, coding standards, and architectural patterns to keep the codebase optimized and visually consistent.

---

## 1. Code-Splitting & Dynamic Mesh Loading

- **Rule:** Do NOT import R3F (React Three Fiber) 3D mesh components statically inside `packages/lab` (e.g., `import { ShieldIcon } from "r3d-icons"`).
- **Rationale:** Importing 280+ meshes statically bloats the initial bundle size, hurting initial page load speeds.
- **Pattern:** Always use the `<Lazy3DIcon name="IconName" />` component from [Lazy3DIcon.tsx](file:///Users/krishnakondoju/projects/agents/react-3d-icons/packages/lab/src/components/Lazy3DIcon.tsx). It dynamically loads the mesh chunks asynchronously under a React Suspense boundary.

---

## 2. Scroll Stability & Dark Mode Transitions

- **Rule:** When implementing theme toggles, do NOT trigger transition properties on filters, blurs, or layout sizes. Always limit transition targets to colors: `transition-colors`.
- **Rationale:** Transitioning backdrop filters or layout parameters triggers full GPU repaints which cause visual scroll stuttering and flickering.
- **Pattern:** Stabilize scrollbars across routing transitions by maintaining `scrollbar-gutter: stable` in HTML declarations inside [index.css](file:///Users/krishnakondoju/projects/agents/react-3d-icons/packages/lab/src/index.css).

---

## 3. Premium Glassmorphic Design Aesthetics

- **Rule:** Adhere strictly to the established translucent design values for cards, headers, and floating sidebars:
  - `bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl`
  - `border border-zinc-200/50 dark:border-white/5`
  - `shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)]` (adjust opacity values for dark mode).

---

## 4. Interactive Sound Feeds

- **Rule:** Sync interactive clicks, transitions, and successful form submissions with standard sound triggers from the audio utility:
  - `audioEngine.playClick()` - Selection changes, layout swaps, normal buttons.
  - `audioEngine.playSnap()` - Upvoting, toggling favorites.
  - `audioEngine.playChime()` - Form submission success, reward milestones.

---

## 5. Build & Lint Hygiene

- **Rule:** Maintain a warning-free compilation output. Always run `npm run lint` and `npm run build:lab` to confirm changes are clean before pushing commits.
