import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.join(__dirname, "../src/components");
const INDEX_FILE = path.join(__dirname, "../src/index.ts");

try {
  console.log("Scanning components directory for 3D icon subfolders...");

  const entries = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true });

  // Filter for directories whose name ends with "Icon"
  // Exclude "LetterIcon" from the standard dynamic list since it requires a custom multi-export block
  const iconComponents = entries
    .filter(
      (entry) => entry.isDirectory() && entry.name.endsWith("Icon") && entry.name !== "LetterIcon"
    )
    .map((entry) => entry.name);

  // Sort alphabetically to maintain a stable export structure
  iconComponents.sort();

  let fileContent =
    iconComponents.map((name) => `export { ${name} } from "./components/${name}";`).join("\n") +
    "\n\n";

  // Append custom/special exports block
  fileContent += `// Special Letter and Digit exports
export {
  LetterIcon,
  AIcon, BIcon, CIcon, DIcon, EIcon, FIcon, GIcon,
  HIcon, IIcon, JIcon, KIcon, LIcon, MIcon, NIcon,
  OIcon, PIcon, QIcon, RIcon, SIcon, TIcon, UIcon,
  VIcon, WIcon, XIcon, YIcon, ZIcon,
  ZeroIcon, OneIcon, TwoIcon, ThreeIcon, FourIcon,
  FiveIcon, SixIcon, SevenIcon, EightIcon, NineIcon
} from "./components/LetterIcon";
export type { LetterIconProps } from "./components/LetterIcon";

// Core utility and shared components exports
export { Fallback2D } from "./components/Fallback2D";
export { getMaterialConfig } from "./components/SharedWrapper";
export * from "./types";
`;

  fs.writeFileSync(INDEX_FILE, fileContent, "utf8");
  console.log(
    `Generated packages/library/src/index.ts successfully with ${iconComponents.length + 38} exports.`
  );
} catch (err) {
  console.error("Failed to generate icon exports:", err);
  process.exit(1);
}
