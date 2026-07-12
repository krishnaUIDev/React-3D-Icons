import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { audioEngine } from "../utils/audio";
import { Hero } from "../components/Hero";
import { IconCard } from "../components/IconCard";
import { HelpCircle, Search, Heart } from "lucide-react";
import { TranslationKey } from "../i18n/translations";
import { IconPreset, LetterIcon } from "r3d-icons";

interface LandingProps {
  theme: "light" | "dark";
  search: string;
  setSearch: (val: string) => void;
}

const ICONS_REGISTRY = [
  {
    id: "plus",
    name: "PlusIcon",
    category: "utility",
    description: "3D mathematical plus sign composed of two intersecting cylinders",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "minus",
    name: "MinusIcon",
    category: "utility",
    description: "3D horizontal minus cylinder bar with glowing status caps",
    color: "#6b7280",
    accentColor: "#9ca3af"
  },
  {
    id: "close",
    name: "CloseIcon",
    category: "utility",
    description: "3D close cross sign composed of two diagonal intersecting cylinders",
    color: "#ef4444",
    accentColor: "#f87171"
  },
  {
    id: "info",
    name: "InfoIcon",
    category: "utility",
    description: "3D lowercase letter i inside a circular ring with glowing accent dot",
    color: "#3b82f6",
    accentColor: "#60a5fa"
  },
  {
    id: "alertcircle",
    name: "AlertCircleIcon",
    category: "utility",
    description: "3D exclamation point inside a circular ring with glowing warning dot",
    color: "#f59e0b",
    accentColor: "#fbbf24"
  },
  {
    id: "anchor",
    name: "AnchorIcon",
    category: "utility",
    description: "Maritime physical anchor with upper stock bar and bottom crescent flukes",
    color: "#475569",
    accentColor: "#f43f5e"
  },
  {
    id: "diamond",
    name: "DiamondIcon",
    category: "utility",
    description: "Gemstone cut diamond with bevel facet edges and metal girdle belt",
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "filter",
    name: "FilterIcon",
    category: "utility",
    description: "Conical liquid funnel filter showing internal tray and bottom droplet",
    color: "#f43f5e",
    accentColor: "#38bdf8"
  },
  {
    id: "pipeline",
    name: "PipelineIcon",
    category: "networking",
    description: "Multi-joint physical network flow pipelines with central control valve wheel",
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "refresh",
    name: "RefreshIcon",
    category: "utility",
    description: "Dual symmetrical circular arrows in continuous sync loop motion",
    color: "#8b5cf6",
    accentColor: "#ec4899"
  },
  {
    id: "webhook",
    name: "WebhookIcon",
    category: "networking",
    description: "Forked merge network connector showing 3 terminal spheres and status bulbs",
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "facebook",
    name: "FacebookIcon",
    category: "brands",
    description: "F-logo brand mark badge with glassmorphic backing",
    color: "#1877f2",
    accentColor: "#3b82f6"
  },
  {
    id: "shield",
    name: "ShieldIcon",
    category: "utility",
    description: "Robust digital fire-wall guard security shield",
    color: "#0d9488",
    accentColor: "#34d399"
  },
  {
    id: "rocket",
    name: "RocketIcon",
    category: "mechanics",
    description: "Aerodynamic space shuttle rocket launch structure",
    color: "#ef4444",
    accentColor: "#f59e0b"
  },
  {
    id: "database",
    name: "DatabaseIcon",
    category: "storage",
    description: "Layered data towers with status indicator light bars",
    color: "#4f46e5",
    accentColor: "#ec4899"
  },
  {
    id: "folder",
    name: "FolderIcon",
    category: "storage",
    description: "Glassmorphic folder vault container with structural dividers",
    color: "#f59e0b",
    accentColor: "#eab308"
  },
  {
    id: "cloud",
    name: "CloudIcon",
    category: "systems",
    description: "Glassmorphic data cloud with rounded physical volumes",
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "network",
    name: "NetworkIcon",
    category: "networking",
    description: "Central network node bound by wireframe geodesics",
    color: "#06b6d4",
    accentColor: "#a855f7"
  },
  {
    id: "cloudnetwork",
    name: "CloudNetworkIcon",
    category: "networking",
    description:
      "Cloud-hosted computing environment connected to multiple dynamic user node systems",
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "firewall",
    name: "FirewallIcon",
    category: "networking",
    description:
      "Network protection firewall with brick-red barrier security and glowing fire flames",
    color: "#e11d48",
    accentColor: "#ea580c"
  },
  {
    id: "cpu",
    name: "CpuIcon",
    category: "hardware",
    description: "Substrate microchip featuring circuit trace geometries",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "gear",
    name: "GearIcon",
    category: "mechanics",
    description: "Rotational gear mechanical engine wheel configuration",
    color: "#71717a",
    accentColor: "#b45309"
  },
  {
    id: "mail",
    name: "MailIcon",
    category: "utility",
    description: "Isometric sealed glass envelope with physical letter slots",
    color: "#e11d48",
    accentColor: "#ec4899"
  },
  {
    id: "calendar",
    name: "CalendarIcon",
    category: "utility",
    description: "Sleek time calendar organizer grid with scheduling pin",
    color: "#6366f1",
    accentColor: "#ef4444"
  },
  {
    id: "wallet",
    name: "WalletIcon",
    category: "utility",
    description: "Dual-compartment leather card holder container",
    color: "#b45309",
    accentColor: "#d97706"
  },
  {
    id: "dollar",
    name: "DollarIcon",
    category: "utility",
    description: "Sleek gold currency symbol with circular coin border",
    color: "#eab308",
    accentColor: "#f59e0b"
  },
  {
    id: "thumbup",
    name: "ThumbUpIcon",
    category: "utility",
    description: "Like thumbs-up gesture hand sign silhouette",
    color: "#f43f5e",
    accentColor: "#fb7185"
  },
  {
    id: "flash",
    name: "FlashIcon",
    category: "utility",
    description: "Angled digital electrical thunder lightning bolt",
    color: "#eab308",
    accentColor: "#f97316"
  },
  {
    id: "heart",
    name: "HeartIcon",
    category: "utility",
    description: "Glossy 3D love heart model with smooth curved surfaces",
    color: "#ec4899",
    accentColor: "#f43f5e"
  },
  {
    id: "chat",
    name: "ChatIcon",
    category: "utility",
    description: "3D message speech bubble with text line overlays",
    color: "#8b5cf6",
    accentColor: "#a78bfa"
  },
  {
    id: "key",
    name: "KeyIcon",
    category: "utility",
    description: "Security access key with ring head and cut teeth",
    color: "#f59e0b",
    accentColor: "#fbbf24"
  },
  {
    id: "star",
    name: "StarIcon",
    category: "utility",
    description: "Beveled 3D rating star with glowing faceted surfaces",
    color: "#fbbf24",
    accentColor: "#f59e0b"
  },
  {
    id: "cart",
    name: "CartIcon",
    category: "utility",
    description: "Shopping cart basket framework with rolling wheels",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "music",
    name: "MusicIcon",
    category: "utility",
    description: "Slanted double eighth music note vector design",
    color: "#ec4899",
    accentColor: "#f43f5e"
  },
  {
    id: "gamepad",
    name: "GamepadIcon",
    category: "hardware",
    description: "Dual-analog console gaming controller blueprint",
    color: "#6366f1",
    accentColor: "#8b5cf6"
  },
  {
    id: "bell",
    name: "BellIcon",
    category: "utility",
    description: "Tactile notification bell model with top hanging loop",
    color: "#f59e0b",
    accentColor: "#d97706"
  },
  {
    id: "sun",
    name: "SunIcon",
    category: "systems",
    description: "Central bright weather sun sphere with radiating cylinder rays",
    color: "#f97316",
    accentColor: "#eab308"
  },
  {
    id: "bulb",
    name: "BulbIcon",
    category: "utility",
    description: "Glowing 3D creative lightbulb with filament and screw base",
    color: "#fbbf24",
    accentColor: "#f59e0b"
  },
  {
    id: "camera",
    name: "CameraIcon",
    category: "hardware",
    description: "Retro 3D camera model with double lens glass",
    color: "#06b6d4",
    accentColor: "#3b82f6"
  },
  {
    id: "clock",
    name: "ClockIcon",
    category: "utility",
    description: "Classic alarm clock layout with double top bell domes",
    color: "#ef4444",
    accentColor: "#cbd5e1"
  },
  {
    id: "trophy",
    name: "TrophyIcon",
    category: "utility",
    description: "Shiny victory championship cup with side loops and stand",
    color: "#eab308",
    accentColor: "#f59e0b"
  },
  {
    id: "lock",
    name: "LockIcon",
    category: "utility",
    description: "High-security padlock structure with U-shackle loop",
    color: "#6366f1",
    accentColor: "#8b5cf6"
  },
  {
    id: "mappin",
    name: "MapPinIcon",
    category: "utility",
    description: "Location map marker balloon with bottom ground shadow",
    color: "#ef4444",
    accentColor: "#f43f5e"
  },
  {
    id: "creditcard",
    name: "CreditCardIcon",
    category: "utility",
    description: "3D plastic bank card with chip and logo overlap",
    color: "#4f46e5",
    accentColor: "#0ea5e9"
  },
  {
    id: "wifi",
    name: "WifiIcon",
    category: "networking",
    description: "Wireless network signal bands with center dot base",
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "search",
    name: "SearchIcon",
    category: "utility",
    description: "Magnifying glass with refractive visual lens and themed frame",
    color: "#3b82f6",
    accentColor: "#38bdf8"
  },
  {
    id: "home",
    name: "HomeIcon",
    category: "utility",
    description: "Charming physical 3D house structure with roof and door",
    color: "#10b981",
    accentColor: "#f43f5e"
  },
  {
    id: "trash",
    name: "TrashIcon",
    category: "utility",
    description: "Ribbed 3D waste basket bin with liftable top handle lid",
    color: "#71717a",
    accentColor: "#ef4444"
  },
  {
    id: "user",
    name: "UserIcon",
    category: "utility",
    description: "Smooth clay user profile personal avatar shoulder bust",
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "play",
    name: "PlayIcon",
    category: "utility",
    description: "Glossy digital player control media play triangle arrow",
    color: "#10b981",
    accentColor: "#38bdf8"
  },
  {
    id: "gift",
    name: "GiftIcon",
    category: "utility",
    description: "Gift box wrapping model featuring ribbon cross bow tie",
    color: "#f43f5e",
    accentColor: "#ef4444"
  },
  {
    id: "globe",
    name: "GlobeIcon",
    category: "systems",
    description: "Desktop geographic navigation map globe sphere on stand",
    color: "#0ea5e9",
    accentColor: "#3b82f6"
  },
  {
    id: "bag",
    name: "BagIcon",
    category: "utility",
    description: "Shopping utility handle bag with front accent sleeve pocket",
    color: "#f59e0b",
    accentColor: "#38bdf8"
  },
  {
    id: "compass",
    name: "CompassIcon",
    category: "utility",
    description: "Sleek navigation compass with dual-tone indicator needle",
    color: "#d4af37",
    accentColor: "#ef4444"
  },
  {
    id: "send",
    name: "SendIcon",
    category: "utility",
    description: "Sleek 3D paper plane model with aerodynamic creased wings",
    color: "#6366f1",
    accentColor: "#3b82f6"
  },
  {
    id: "target",
    name: "TargetIcon",
    category: "utility",
    description: "Concentric bullseye target rings pierced by a sharp angled arrow",
    color: "#ef4444",
    accentColor: "#f59e0b"
  },
  {
    id: "edit",
    name: "EditIcon",
    category: "utility",
    description: "Classic hexagonal wooden pencil with a gold metal band and pink eraser",
    color: "#eab308",
    accentColor: "#fed7aa"
  },
  {
    id: "phone",
    name: "PhoneIcon",
    category: "utility",
    description: "Smooth telephone receiver handset with glossy sound caps",
    color: "#10b981",
    accentColor: "#cbd5e1"
  },
  {
    id: "book",
    name: "BookIcon",
    category: "utility",
    description: "Thick closed hardcover binder featuring cream-colored inner pages",
    color: "#e11d48",
    accentColor: "#fda4af"
  },
  {
    id: "link",
    name: "LinkIcon",
    category: "utility",
    description: "Two interlocking rounded metallic chain links rotated 90 degrees",
    color: "#71717a",
    accentColor: "#cbd5e1"
  },
  {
    id: "crown",
    name: "CrownIcon",
    category: "utility",
    description: "Shiny golden royal headpiece adorned with colored diamond gems",
    color: "#d4af37",
    accentColor: "#fbbf24"
  },
  {
    id: "pin",
    name: "PinIcon",
    category: "utility",
    description: "Glossy map pushpin tack with a sharp steel pointer needle",
    color: "#ef4444",
    accentColor: "#fb7185"
  },
  {
    id: "flag",
    name: "FlagIcon",
    category: "utility",
    description: "Waving rectangular banner attached to a sleek metal flagpole",
    color: "#8b5cf6",
    accentColor: "#a78bfa"
  },
  {
    id: "briefcase",
    name: "BriefcaseIcon",
    category: "utility",
    description: "Beveled business luggage suitcase with dual metal lock latches",
    color: "#b45309",
    accentColor: "#f59e0b"
  },
  {
    id: "eye",
    name: "EyeIcon",
    category: "utility",
    description: "Stylized visual organ eyeball with glossy colored iris and pupil",
    color: "#0ea5e9",
    accentColor: "#a855f7"
  },
  {
    id: "tag",
    name: "TagIcon",
    category: "utility",
    description: "Angled merchandise label card featuring string attachment cord",
    color: "#ec4899",
    accentColor: "#fb7185"
  },
  {
    id: "coffee",
    name: "CoffeeIcon",
    category: "utility",
    description: "Classic ceramic cylinder drinking mug showing hot steam ripples",
    color: "#ea580c",
    accentColor: "#fed7aa"
  },
  {
    id: "share",
    name: "ShareIcon",
    category: "utility",
    description: "Linked node diagram layout displaying circular junction hubs",
    color: "#6366f1",
    accentColor: "#818cf8"
  },
  {
    id: "layers",
    name: "LayersIcon",
    category: "storage",
    description: "Three overlapping stacked semitransparent layout planes",
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "sparkles",
    name: "SparklesIcon",
    category: "utility",
    description: "Magical group configuration of three four-pointed stars",
    color: "#eab308",
    accentColor: "#fbbf24"
  },
  {
    id: "megaphone",
    name: "MegaphoneIcon",
    category: "utility",
    description: "Loud voice amplifier speaker cone featuring handle grip support",
    color: "#ef4444",
    accentColor: "#f43f5e"
  },
  {
    id: "download",
    name: "DownloadIcon",
    category: "utility",
    description: "Downward pointing indicator arrow nested inside wall storage base",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "upload",
    name: "UploadIcon",
    category: "utility",
    description: "Upward pointing indicator arrow nested inside wall storage base",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "code",
    name: "CodeIcon",
    category: "utility",
    description: "Sleek beveled HTML code tag brackets with a floating diagonal slash",
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "terminal",
    name: "TerminalIcon",
    category: "utility",
    description: "Charming terminal command window prompt complete with title bar and cursor block",
    color: "#10b981",
    accentColor: "#020617"
  },
  {
    id: "git",
    name: "GitIcon",
    category: "utility",
    description: "Extruded git branch diagram on a tilted diamond status board",
    color: "#f43f5e",
    accentColor: "#ffffff"
  },
  {
    id: "monitor",
    name: "MonitorIcon",
    category: "hardware",
    description: "Sleek modern display screen bezel resting on a metal neck and base",
    color: "#06b6d4",
    accentColor: "#3b82f6"
  },
  {
    id: "keyboard",
    name: "KeyboardIcon",
    category: "hardware",
    description: "Slanted keyboard deck plate populated with individual Key caps",
    color: "#6366f1",
    accentColor: "#a855f7"
  },
  {
    id: "mouse",
    name: "MouseIcon",
    category: "hardware",
    description: "Computer mouse model with central scroll wheel and button slots",
    color: "#10b981",
    accentColor: "#cbd5e1"
  },
  {
    id: "harddrive",
    name: "HardDriveIcon",
    category: "hardware",
    description: "Solid storage drive plate featuring spindle cover and indicators",
    color: "#71717a",
    accentColor: "#94a3b8"
  },
  {
    id: "printer",
    name: "PrinterIcon",
    category: "hardware",
    description: "Chassis scanner bed printer with active paper output tray sheet",
    color: "#64748b",
    accentColor: "#cbd5e1"
  },
  {
    id: "speaker",
    name: "SpeakerIcon",
    category: "hardware",
    description: "Cabinet media loudspeaker baffle featuring double cones and active signal arcs",
    color: "#71717a",
    accentColor: "#818cf8"
  },
  {
    id: "glassmorphism",
    name: "GlassmorphismIcon",
    category: "utility",
    description: "Concept overlay of a floating frosted glass plate and geometric backdrops",
    color: "#ffffff",
    accentColor: "#ec4899"
  },
  {
    id: "github",
    name: "GithubIcon",
    category: "brands",
    description: "Sleek extruded silhouette of Octocat logo badge",
    color: "#24292e",
    accentColor: "#6e5494"
  },
  {
    id: "twitter",
    name: "TwitterIcon",
    category: "brands",
    description: "Extruded geometric X logo outline on a glossy glass backplate",
    color: "#1da1f2",
    accentColor: "#0f1419"
  },
  {
    id: "google",
    name: "GoogleIcon",
    category: "brands",
    description: "Rotational beveled circular G emblem segmented in brand colors",
    color: "#4285f4",
    accentColor: "#ea4335"
  },
  {
    id: "figma",
    name: "FigmaIcon",
    category: "brands",
    description: "Five layered signature brand-color circles stacked vertically in 3D",
    color: "#f24e1e",
    accentColor: "#a259ff"
  },
  {
    id: "router",
    name: "RouterIcon",
    category: "networking",
    description: "Procedural network router model with rear antennas and signal wave arcs",
    color: "#06b6d4",
    accentColor: "#10b981"
  },
  {
    id: "server",
    name: "ServerIcon",
    category: "networking",
    description: "Vertical metal server cabinet featuring three stacked blade slots and LEDs",
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "ethernet",
    name: "EthernetIcon",
    category: "networking",
    description:
      "Extruded transparent RJ45 plug connector with detailed gold contact pins and locking lever",
    color: "#3b82f6",
    accentColor: "#d4af37"
  },
  {
    id: "satellite",
    name: "SatelliteIcon",
    category: "networking",
    description:
      "Central communications satellite body featuring solar panel wings and antenna dish",
    color: "#06b6d4",
    accentColor: "#4f46e5"
  },
  {
    id: "wrench",
    name: "WrenchIcon",
    category: "mechanics",
    description: "Combination double-head wrench key angled in 3D space",
    color: "#94a3b8",
    accentColor: "#475569"
  },
  {
    id: "bolt",
    name: "BoltIcon",
    category: "mechanics",
    description: "Hexagonal bolt fastener head with a detailed spiral thread shaft",
    color: "#71717a",
    accentColor: "#cbd5e1"
  },
  {
    id: "hammer",
    name: "HammerIcon",
    category: "mechanics",
    description: "Extruded steel claw hammer head with a rubber-sleeved grip handle",
    color: "#cbd5e1",
    accentColor: "#f59e0b"
  },
  {
    id: "screwdriver",
    name: "ScrewdriverIcon",
    category: "mechanics",
    description: "Classic flathead screwdriver with fluted grip handle and steel shaft",
    color: "#cbd5e1",
    accentColor: "#6366f1"
  },
  {
    id: "nut",
    name: "NutIcon",
    category: "mechanics",
    description: "Hexagonal threaded locknut fastener with concentric inner coil details",
    color: "#94a3b8",
    accentColor: "#475569"
  },
  {
    id: "smile",
    name: "SmileIcon",
    category: "emojies",
    description: "Classic happy face emoji disk featuring R3F beveled smile shapes",
    color: "#f59e0b",
    accentColor: "#f43f5e"
  },
  {
    id: "frown",
    name: "FrownIcon",
    category: "emojies",
    description: "Classic sad face emoji disk featuring down-curved R3F torus mouth",
    color: "#f59e0b",
    accentColor: "#f43f5e"
  },
  {
    id: "hearteyes",
    name: "HeartEyesIcon",
    category: "emojies",
    description: "Smiley face emoji featuring dual 3D heart-shaped eye geometry meshes",
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "barchart",
    name: "BarChartIcon",
    category: "utility",
    description: "Three ascending 3D bar chart columns on a glowing base plate",
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "check",
    name: "CheckIcon",
    category: "utility",
    description: "Bold glowing 3D checkmark on a beveled circular disc backing",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "container",
    name: "ContainerIcon",
    category: "systems",
    description: "Corrugated cargo shipping container representing Docker deployments",
    color: "#2496ed",
    accentColor: "#f59e0b"
  },
  {
    id: "shieldcheck",
    name: "ShieldCheckIcon",
    category: "utility",
    description:
      "Security shield with embedded verified checkmark for trusted payment and security UIs",
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "react",
    name: "ReactIcon",
    category: "brands",
    description: "Three-orbital atomic React logo with glowing nucleus sphere",
    color: "#61dafb",
    accentColor: "#20232a"
  },
  {
    id: "node",
    name: "NodeIcon",
    category: "brands",
    description: "Hexagonal Node.js badge with inner circuit trace details",
    color: "#68a063",
    accentColor: "#3c873a"
  },
  {
    id: "bug",
    name: "BugIcon",
    category: "utility",
    description: "3D software bug model with segmented body, glowing eyes and legs",
    color: "#475569",
    accentColor: "#ef4444"
  },
  {
    id: "flask",
    name: "FlaskIcon",
    category: "utility",
    description: "3D chemistry science lab flask containing glowing fluid and rising bubbles",
    color: "#4f46e5",
    accentColor: "#a855f7"
  },
  {
    id: "piechart",
    name: "PieChartIcon",
    category: "utility",
    description: "3D circular pie chart divided into three distinct colored proportional wedges",
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "flame",
    name: "FlameIcon",
    category: "utility",
    description: "3D layered organic fire flame showing warm red, orange, and yellow cores",
    color: "#f97316",
    accentColor: "#ef4444"
  },
  {
    id: "activity",
    name: "ActivityIcon",
    category: "systems",
    description: "3D medical heartbeat ECG monitor line with glowing joint beads",
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "graduationcap",
    name: "GraduationCapIcon",
    category: "utility",
    description: "3D academic graduation mortarboard cap with golden hanging tassel",
    color: "#3f3f46",
    accentColor: "#eab308"
  },
  {
    id: "trendingup",
    name: "TrendingUpIcon",
    category: "utility",
    description: "3D line chart arrow showing rising analytics growth and trend trajectory",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "instagram",
    name: "InstagramIcon",
    category: "brands",
    description: "3D Instagram brand mark camera lens with metallic ring and golden flash",
    color: "#e1306c",
    accentColor: "#f77737"
  },
  {
    id: "youtube",
    name: "YoutubeIcon",
    category: "brands",
    description: "3D YouTube brand mark play button with rounded red plate and white play arrow",
    color: "#ff0000",
    accentColor: "#ef4444"
  },
  {
    id: "linkedin",
    name: "LinkedinIcon",
    category: "brands",
    description: "3D LinkedIn brand mark square badge with extruded letters",
    color: "#0077b5",
    accentColor: "#00a0dc"
  },
  {
    id: "dribbble",
    name: "DribbbleIcon",
    category: "brands",
    description: "3D Dribbble brand mark basketball with extruded white lines pattern",
    color: "#ea4c89",
    accentColor: "#ff769f"
  },
  {
    id: "package",
    name: "PackageIcon",
    category: "storage",
    description: "3D cardboard box storage packaging parcel with glowing tape overlay",
    color: "#b45309",
    accentColor: "#38bdf8"
  },
  {
    id: "airplane",
    name: "AirplaneIcon",
    category: "utility",
    description:
      "Sleek 3D aircraft with swept-back wings, dual underwing engines, and detailed tail fins",
    color: "#0ea5e9",
    accentColor: "#f43f5e"
  },
  {
    id: "battery",
    name: "BatteryIcon",
    category: "hardware",
    description:
      "3D battery cylinder featuring transparent outer casing and glowing green energy charge indicator cells",
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "video",
    name: "VideoIcon",
    category: "utility",
    description:
      "3D cinema video camera with physical casing, concentric focus lens, and side-mounted display panel",
    color: "#8b5cf6",
    accentColor: "#ec4899"
  },
  {
    id: "microphone",
    name: "MicrophoneIcon",
    category: "utility",
    description: "3D recording studio microphone capsule mounted on vertical desktop swivel base",
    color: "#ec4899",
    accentColor: "#3b82f6"
  },
  {
    id: "sliders",
    name: "SlidersIcon",
    category: "utility",
    description:
      "3D control dashboard sliders showing vertical track rods and slider level nodes with glowing indicators",
    color: "#6366f1",
    accentColor: "#f59e0b"
  },
  {
    id: "map",
    name: "MapIcon",
    category: "utility",
    description: "3D folded accordion map with road lines and a glowing location pin",
    color: "#10b981",
    accentColor: "#f43f5e"
  },
  {
    id: "umbrella",
    name: "UmbrellaIcon",
    category: "utility",
    description: "3D open umbrella canopy with a central steel shaft and J-hook handle",
    color: "#0ea5e9",
    accentColor: "#ec4899"
  },
  {
    id: "scissors",
    name: "ScissorsIcon",
    category: "utility",
    description: "3D scissors with crossing blades, pivot screw, and grip loops",
    color: "#f59e0b",
    accentColor: "#3b82f6"
  },
  {
    id: "unlock",
    name: "UnlockIcon",
    category: "utility",
    description: "3D open lock featuring a physical body base and rotated shackle",
    color: "#eab308",
    accentColor: "#22c55e"
  },
  {
    id: "archive",
    name: "ArchiveIcon",
    category: "storage",
    description: "3D archive cabinet with sliding drawer panels and metal pulls",
    color: "#a855f7",
    accentColor: "#ec4899"
  },
  {
    id: "shieldalert",
    name: "ShieldAlertIcon",
    category: "utility",
    description: "3D guard shield with a central vertical exclamation warning symbol",
    color: "#475569",
    accentColor: "#ef4444"
  },
  {
    id: "eyeoff",
    name: "EyeOffIcon",
    category: "utility",
    description: "3D eyeball Crossed out by a front-diagonal slash bar indicating hidden state",
    color: "#6366f1",
    accentColor: "#ef4444"
  },
  {
    id: "userplus",
    name: "UserPlusIcon",
    category: "utility",
    description:
      "3D user body profile alongside a floating plus sign badge representing user addition",
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "trendingdown",
    name: "TrendingDownIcon",
    category: "utility",
    description: "3D line chart arrow pointing downwards indicating negative trend metrics",
    color: "#ef4444",
    accentColor: "#fb7185"
  },
  {
    id: "copy",
    name: "CopyIcon",
    category: "utility",
    description: "3D overlapping duplicate document sheets with horizontal glowing layout lines",
    color: "#06b6d4",
    accentColor: "#22d3ee"
  },
  {
    id: "gauge",
    name: "GaugeIcon",
    category: "mechanics",
    description: "3D dial gauge speedometer with tick marks and a rotating pointer needle",
    color: "#64748b",
    accentColor: "#ef4444"
  },
  {
    id: "magnet",
    name: "MagnetIcon",
    category: "mechanics",
    description: "3D horseshoe magnet with polar colored ends and floating force-field rings",
    color: "#71717a",
    accentColor: "#ef4444"
  },
  {
    id: "stack",
    name: "StackIcon",
    category: "systems",
    description: "3D stack of database slabs with glowing illuminated spacer layers",
    color: "#4f46e5",
    accentColor: "#10b981"
  },
  {
    id: "workflow",
    name: "WorkflowIcon",
    category: "systems",
    description: "3D process flowchart hierarchy showing root node connected to child nodes",
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "topology",
    name: "TopologyIcon",
    category: "systems",
    description: "3D hub-and-spoke network diagram with central hub and satellite nodes",
    color: "#06b6d4",
    accentColor: "#10b981"
  },
  {
    id: "file",
    name: "FileIcon",
    category: "utility",
    description: "3D document page sheet with folded corner and glowing text lines",
    color: "#64748b",
    accentColor: "#ef4444"
  },
  {
    id: "headphones",
    name: "HeadphonesIcon",
    category: "utility",
    description: "Sleek 3D over-ear music headphones with soft earcups and metallic sliders",
    color: "#4f46e5",
    accentColor: "#3b82f6"
  },
  {
    id: "moon",
    name: "MoonIcon",
    category: "utility",
    description: "Glossy 3D crescent moon with floating yellow night-sky stars",
    color: "#a855f7",
    accentColor: "#f59e0b"
  },
  {
    id: "paperclip",
    name: "PaperclipIcon",
    category: "utility",
    description: "Looping 3D metallic paperclip attachment wireframe with red status band",
    color: "#94a3b8",
    accentColor: "#ef4444"
  },
  {
    id: "bookmark",
    name: "BookmarkIcon",
    category: "utility",
    description: "Hanging 3D ribbon bookmark tab with metallic mounting loop and grommet",
    color: "#e11d48",
    accentColor: "#ef4444"
  },
  {
    id: "cloudlightning",
    name: "CloudLightningIcon",
    category: "systems",
    description: "3D fluffy weather data cloud with a central glowing lightning bolt",
    color: "#0ea5e9",
    accentColor: "#fbbf24"
  },
  {
    id: "folderopen",
    name: "FolderOpenIcon",
    category: "storage",
    description: "3D open folder container with nesting document sheet panels",
    color: "#f59e0b",
    accentColor: "#10b981"
  },
  {
    id: "volume",
    name: "VolumeIcon",
    category: "hardware",
    description: "3D audio speaker cone with glowing concentric audio wave arcs",
    color: "#6366f1",
    accentColor: "#3b82f6"
  },
  {
    id: "belloff",
    name: "BellOffIcon",
    category: "utility",
    description: "3D notification alert bell crossed out by a front diagonal slash bar",
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "sunmoon",
    name: "SunMoonIcon",
    category: "systems",
    description: "3D hybrid sun sphere and overlapping crescent moon mode switcher",
    color: "#6366f1",
    accentColor: "#f59e0b"
  },
  {
    id: "piston",
    name: "PistonIcon",
    category: "mechanics",
    description: "3D engine piston chamber with glowing rings and moving connecting rod",
    color: "#71717a",
    accentColor: "#10b981"
  },
  {
    id: "spring",
    name: "SpringIcon",
    category: "mechanics",
    description: "3D helical suspension coil spring with glowing top and bottom attachment loops",
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "anvil",
    name: "AnvilIcon",
    category: "mechanics",
    description: "3D blacksmith forged anvil body with a horn, deck, and glowing metal bar",
    color: "#4b5563",
    accentColor: "#f97316"
  },
  {
    id: "hook",
    name: "HookIcon",
    category: "mechanics",
    description: "3D heavy crane lifting hook with warning pulley housing and swivel axle",
    color: "#475569",
    accentColor: "#f59e0b"
  },
  {
    id: "turbine",
    name: "TurbineIcon",
    category: "mechanics",
    description: "3D mechanical wind turbine propeller with angled pitch blades and central hub",
    color: "#64748b",
    accentColor: "#06b6d4"
  },
  {
    id: "pliers",
    name: "PliersIcon",
    category: "mechanics",
    description: "3D double-handle hand pliers with rubberized grip sleeves and textured jaws",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "drill",
    name: "DrillIcon",
    category: "mechanics",
    description: "3D cordless power drill with motor housing barrel, battery pack, and steel chuck",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "hacksaw",
    name: "HacksawIcon",
    category: "mechanics",
    description: "3D metal cutting hacksaw with a steel frame rod, blade, and D-shaped grip",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "tapemeasure",
    name: "TapeMeasureIcon",
    category: "mechanics",
    description:
      "3D pocket tape measure with bumper guard casing, extended steel blade, and lock switch",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "caliper",
    name: "CaliperIcon",
    category: "mechanics",
    description: "3D precision vernier caliper slide gauge with measuring jaws and depth rod",
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "spiritlevel",
    name: "SpiritLevelIcon",
    category: "mechanics",
    description: "3D builder bubble level bar featuring horizontal and vertical indicator vials",
    color: "#64748b",
    accentColor: "#22c55e"
  },
  {
    id: "sledgehammer",
    name: "SledgehammerIcon",
    category: "mechanics",
    description: "3D heavy demolition sledgehammer head with fiberglass shaft and rubber grip",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "phonemobile",
    name: "PhoneMobileIcon",
    category: "hardware",
    description: "3D bezel-less mobile smartphone screen with camera punch and desktop widgets",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "tablet",
    name: "TabletIcon",
    category: "hardware",
    description: "3D display tablet screen with bezel borders and floating overlay widgets",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "laptop",
    name: "LaptopIcon",
    category: "hardware",
    description:
      "3D open laptop deck with raised keyboard rows, trackpad, and angled display screen",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "smartwatch",
    name: "SmartWatchIcon",
    category: "hardware",
    description: "3D smartwatch housing featuring glass watch face screen and wrapping strap bands",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "routerwifi",
    name: "RouterWifiIcon",
    category: "hardware",
    description: "3D home broadband internet wifi router base with dual vertical antennas",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "serverrack",
    name: "ServerRackIcon",
    category: "hardware",
    description:
      "3D enterprise datacenter server cabinet with stacked server drawers and LED indicators",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "harddriveexternal",
    name: "HardDriveExternalIcon",
    category: "hardware",
    description: "3D portable external backup hard drive block with side rubber bumper guards",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "webcam",
    name: "WebcamIcon",
    category: "hardware",
    description:
      "3D spherical desktop webcam with lens bezel, aperture glass, and mounting stand clamp",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "chisel",
    name: "ChiselIcon",
    category: "mechanics",
    description:
      "3D octagonal wood chisel tool with beveled steel tip, metal tang, and glowing accent bolster",
    color: "#78350f",
    accentColor: "#10b981"
  },
  {
    id: "crowbar",
    name: "CrowbarIcon",
    category: "mechanics",
    description:
      "3D bent steel crowbar pry rod with split claw head, wedge tip, and glowing accent split",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "funnel",
    name: "FunnelIcon",
    category: "mechanics",
    description:
      "3D conical fluid funnel with narrow outlet spout, rim loop, and a glowing suspended droplet",
    color: "#0f766e",
    accentColor: "#10b981"
  },
  {
    id: "oilcan",
    name: "OilCanIcon",
    category: "mechanics",
    description:
      "3D thumb-pump oil can canister with slanted spout, trigger lever, and glowing fluid drop",
    color: "#b45309",
    accentColor: "#10b981"
  },
  {
    id: "bearing",
    name: "BearingIcon",
    category: "mechanics",
    description:
      "3D ball bearing cage assembly with concentric inner/outer rings and spherical steel balls",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "pulley",
    name: "PulleyIcon",
    category: "mechanics",
    description:
      "3D mechanical pulley block with U-bracket frame, grooved wheel, and guiding wire rope",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "sprocket",
    name: "SprocketIcon",
    category: "mechanics",
    description:
      "3D drive sprocket wheel with beveled teeth, central shaft hole, and glowing concentric tracks",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "projector",
    name: "ProjectorIcon",
    category: "hardware",
    description:
      "3D table presentation projector with concentric lens, controls pad, and glowing focus ring",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "gameconsole",
    name: "GameConsoleIcon",
    category: "hardware",
    description:
      "3D slim home console stand with side panels, vertical base, and glowing status stripe",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "vrheadset",
    name: "VRHeadsetIcon",
    category: "hardware",
    description:
      "3D virtual reality goggle headset with front glass shield visor and glowing indicator strip",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "smartspeaker",
    name: "SmartSpeakerIcon",
    category: "hardware",
    description:
      "3D assistant smart speaker cylinder with control deck and glowing voice response ring",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "powerbank",
    name: "PowerBankIcon",
    category: "hardware",
    description:
      "3D backup power bank battery brick with USB port slots and glowing status level LEDs",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "usbdrive",
    name: "UsbDriveIcon",
    category: "hardware",
    description:
      "3D flash thumb drive memory key with metal connector plug and glowing keyring loop",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "motherboard",
    name: "MotherboardIcon",
    category: "hardware",
    description:
      "3D green circuit motherboard board with CPU socket frame, RAM slots, and glowing core",
    color: "#065f46",
    accentColor: "#10b981"
  },
  {
    id: "ramstick",
    name: "RamStickIcon",
    category: "hardware",
    description:
      "3D desktop memory RAM stick module with golden pin edge and glowing top RGB light diffuser",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "crank",
    name: "CrankIcon",
    category: "mechanics",
    description:
      "3D offset manual crank arm handle with a pivot sleeve, counterweight, and glowing accent cap",
    color: "#71717a",
    accentColor: "#10b981"
  },
  {
    id: "camshaft",
    name: "CamshaftIcon",
    category: "mechanics",
    description:
      "3D engine camshaft shaft populated with eccentric cam lobes, journals, and a glowing accent gear",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "driveshaft",
    name: "DriveShaftIcon",
    category: "mechanics",
    description:
      "3D torqued driveshaft rod with double universal joints, weld yokes, and a glowing spider cross",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "valve",
    name: "ValveIcon",
    category: "mechanics",
    description:
      "3D pipeline fluid control gate valve wheel with a threaded stem and glowing accent ring",
    color: "#4b5563",
    accentColor: "#10b981"
  },
  {
    id: "propeller",
    name: "PropellerIcon",
    category: "mechanics",
    description:
      "3D marine propeller hub containing three twisted blades, adapter shaft, and glowing nose cap",
    color: "#78350f",
    accentColor: "#10b981"
  },
  {
    id: "rotor",
    name: "HelicopterRotorIcon",
    category: "mechanics",
    description:
      "3D multi-blade helicopter rotor hub with control rods, swashplate, and glowing control ring",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "hydraulicjack",
    name: "HydraulicJackIcon",
    category: "mechanics",
    description:
      "3D heavy hydraulic bottle jack cylinder lifting jack with a base plate and glowing accent collar",
    color: "#ef4444",
    accentColor: "#10b981"
  },
  {
    id: "gpu",
    name: "GpuIcon",
    category: "hardware",
    description:
      "3D high-end desktop GPU graphics card with triple active fan spinner blades and top RGB glowing strip",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "powersupply",
    name: "PowerSupplyIcon",
    category: "hardware",
    description:
      "3D boxy ATX power unit with a round fan cooling grille, braided cables, and glowing indicator red switch",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "networkswitch",
    name: "NetworkSwitchIcon",
    category: "hardware",
    description:
      "3D rack unit populated with dual rows of RJ45 ports, mount brackets, and glowing status LED panel",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "smartplug",
    name: "SmartPlugIcon",
    category: "hardware",
    description:
      "3D smart wall outlet adapter plug with US receptacle holes and a glowing status power button",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartbulb",
    name: "SmartBulbIcon",
    category: "hardware",
    description:
      "3D smart RGB LED lightbulb containing a wifi accent ring and glowing inner LED tower",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "securitycamera",
    name: "SecurityCameraIcon",
    category: "hardware",
    description:
      "3D spherical dome security surveillance lens camera with mount bracket and glowing status LED ring",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartlock",
    name: "SmartLockIcon",
    category: "hardware",
    description:
      "3D heavy mechanical cylinder door smart lock with electronic touchpad and glowing status ring",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "thermostat",
    name: "ThermostatIcon",
    category: "hardware",
    description:
      "3D circular smart home climate thermostat dials with digital number readout and glowing accent scale",
    color: "#0f172a",
    accentColor: "#10b981"
  },
  {
    id: "gclamp",
    name: "GClampIcon",
    category: "mechanics",
    description:
      "3D heavy threaded G-clamp frame with a rotatable clamping screw rod and glowing collar guide",
    color: "#4b5563",
    accentColor: "#10b981"
  },
  {
    id: "vice",
    name: "ViceIcon",
    category: "mechanics",
    description:
      "3D heavy duty workbench jaws vice tool with sliding track guide and glowing hub dial",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "greasegun",
    name: "GreaseGunIcon",
    category: "mechanics",
    description:
      "3D hand-lever grease injector gun canister with high pressure extension pipe and glowing accent sleeve",
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "gearbox",
    name: "GearboxIcon",
    category: "mechanics",
    description:
      "3D mechanical gearbox casing enclosure showing meshed cogs and a glowing center indicator",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "differential",
    name: "DifferentialIcon",
    category: "mechanics",
    description:
      "3D automotive differential pumpkin gear casing with axle tubes and a glowing perimeter flange",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "suspension",
    name: "SuspensionIcon",
    category: "mechanics",
    description:
      "3D wishbone frame car suspension arm with shock absorber strut and glowing spiral spring coils",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "windlass",
    name: "WindlassIcon",
    category: "mechanics",
    description:
      "3D cable winch windlass drum cylinder with a hand crank, support brackets, and glowing end flange",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "earbuds",
    name: "EarbudsIcon",
    category: "hardware",
    description:
      "3D open wireless charging earbuds case with twin nested buds and glowing battery status LED",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartring",
    name: "SmartRingIcon",
    category: "hardware",
    description:
      "3D high gloss titanium smart health tracker ring with glowing exterior sensor crown line",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "drawingtablet",
    name: "DrawingTabletIcon",
    category: "hardware",
    description:
      "3D graphics drawing tablet bezel frame and active canvas screen with a hovering stylus pen",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "barcodescanner",
    name: "BarcodeScannerIcon",
    category: "hardware",
    description:
      "3D pistol-trigger barcode laser scanner handle with top rubber guard and red glowing laser window",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "posregister",
    name: "POSRegisterIcon",
    category: "hardware",
    description:
      "3D cashier register terminal display with cash drawer base, printer paper sheet, and pole LCD screen",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "calculator",
    name: "CalculatorIcon",
    category: "hardware",
    description:
      "3D pocket calculator casing with 4x4 keypad grid, solar strip, and glowing display matrix",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "remotecontrol",
    name: "RemoteControlIcon",
    category: "hardware",
    description:
      "3D TV remote control wand with navigation D-pad disk, number keys, and glowing power switch",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "soundbar",
    name: "SoundbarIcon",
    category: "hardware",
    description:
      "3D slim audio soundbar horizontal cabinet with front fabric mesh and standing companion subwoofer",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "jackhammer",
    name: "JackhammerIcon",
    category: "mechanics",
    description:
      "3D pneumatic demolition jackhammer with T-handle grip, shock absorber spring, and steel chisel bit",
    color: "#e2e8f0",
    accentColor: "#10b981"
  },
  {
    id: "solderingiron",
    name: "SolderingIronIcon",
    category: "mechanics",
    description:
      "3D pen-style high-temperature soldering iron with grip collar, connection cable, and fine copper tip",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "blowtorch",
    name: "BlowtorchIcon",
    category: "mechanics",
    description:
      "3D portable welding gas torch cylinder with brass valve knob, angled neck, and glowing jet nozzle",
    color: "#0284c7",
    accentColor: "#10b981"
  },
  {
    id: "wheelbarrow",
    name: "WheelbarrowIcon",
    category: "mechanics",
    description:
      "3D heavy construction hand push wheelbarrow with deep container tray, support legs, and front rubber wheel",
    color: "#ea580c",
    accentColor: "#10b981"
  },
  {
    id: "plumbbob",
    name: "PlumbBobIcon",
    category: "mechanics",
    description:
      "3D suspended conical plumb bob alignment weight with brass cap collar and thin hanging wire",
    color: "#d97706",
    accentColor: "#10b981"
  },
  {
    id: "shears",
    name: "ShearsIcon",
    category: "mechanics",
    description:
      "3D sheet metal hand shears with double pivot hinge and curved rubber-coated handle loops",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "wirestripper",
    name: "WireStripperIcon",
    category: "mechanics",
    description:
      "3D spring-loaded wire insulation stripper plier jaws with metric sizing notches and rubber handle sleeve",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "pipewrench",
    name: "PipeWrenchIcon",
    category: "mechanics",
    description:
      "3D plumber heavy pipe wrench with adjustable hook jaw, thread turn ring, and steel grip handle",
    color: "#dc2626",
    accentColor: "#10b981"
  },
  {
    id: "floppy",
    name: "FloppyDiskIcon",
    category: "storage",
    description:
      "3D vintage 3.5 inch floppy diskette with metal sliding shutter casing, write-protect tab, and paper label",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "tapecassette",
    name: "TapeCassetteIcon",
    category: "storage",
    description:
      "3D retro audio tape cassette shell case with central sprocket holes and magnetic tape reel spool packs",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "cd",
    name: "CompactDiscIcon",
    category: "storage",
    description:
      "3D optical compact disc showing shiny iridescent colors, clear central hub ring, and spindle hole",
    color: "#f1f5f9",
    accentColor: "#10b981"
  },
  {
    id: "tv",
    name: "TvIcon",
    category: "hardware",
    description:
      "3D flat widescreen television display screen resting on a central column stand and rectangular base",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "radio",
    name: "RadioIcon",
    category: "hardware",
    description:
      "3D retro transistor radio cabinet showing left speaker fabric mesh, horizontal tuning bar, and dials",
    color: "#7c2d12",
    accentColor: "#10b981"
  },
  {
    id: "walkietalkie",
    name: "WalkieTalkieIcon",
    category: "hardware",
    description:
      "3D wireless handheld walkie-talkie handset with flexible top antenna, volume knob, and side PTT button",
    color: "#19222f",
    accentColor: "#10b981"
  },
  {
    id: "headset",
    name: "HeadsetIcon",
    category: "hardware",
    description:
      "3D call center headset with padded overhead band, left/right earmuff cushions, and a boom microphone",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "fish",
    name: "FishIcon",
    category: "emojies",
    description:
      "3D stylized swimming fish with curved dorsal fins, tail fins, and a glowing scale-band",
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "butterfly",
    name: "ButterflyIcon",
    category: "emojies",
    description:
      "3D symmetrical butterfly with upper and lower glass wings, antennae, and glowing inner wing slots",
    color: "#d946ef",
    accentColor: "#10b981"
  },
  {
    id: "bird",
    name: "BirdIcon",
    category: "emojies",
    description:
      "3D aerodynamic flying bird in upstroke wing pose, with glowing beak and wing tip highlights",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "cat",
    name: "CatIcon",
    category: "emojies",
    description:
      "3D round feline head with pointed ears, whiskers, glowing eyes, and a collar band",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "dog",
    name: "DogIcon",
    category: "emojies",
    description:
      "3D canine head showing floppy ears, protruding snout, round glowing eyes, and a collar tag",
    color: "#e2e8f0",
    accentColor: "#10b981"
  },
  {
    id: "rabbit",
    name: "RabbitIcon",
    category: "emojies",
    description:
      "3D cute rabbit head with long vertical ears, glowing inner ear canals, and a tiny nose snout",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "elephant",
    name: "ElephantIcon",
    category: "emojies",
    description:
      "3D stately elephant profile showing raised trunk, large ear plates, and glowing tusks",
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "owl",
    name: "OwlIcon",
    category: "emojies",
    description:
      "3D owl head showing top tufts, large concentric eye rings with glowing pupils, and beak",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "turtle",
    name: "TurtleIcon",
    category: "emojies",
    description:
      "3D domed sea turtle shell wrapped in a glowing collar rim, with four flippers and head",
    color: "#16a34a",
    accentColor: "#10b981"
  },
  {
    id: "dolphin",
    name: "DolphinIcon",
    category: "emojies",
    description:
      "3D curved dolphin body leaping forward, featuring dorsal fin, tail fluke, and glowing snout tip",
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "rose",
    name: "RoseIcon",
    category: "emojies",
    description: "3D concentric rose petals structure with stem, thorns, and glowing center core",
    color: "#ec4899",
    accentColor: "#10b981"
  },
  {
    id: "sunflower",
    name: "SunflowerIcon",
    category: "emojies",
    description:
      "3D circular array of yellow pointed petals with a dark seed disc and glowing grid seeds",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "tulip",
    name: "TulipIcon",
    category: "emojies",
    description: "3D closed cup tulip blossom with green stem leaf and glowing stamen",
    color: "#f43f5e",
    accentColor: "#10b981"
  },
  {
    id: "lotus",
    name: "LotusIcon",
    category: "emojies",
    description: "3D symmetrical blooming lotus petals layered above a flat water lily pad",
    color: "#f472b6",
    accentColor: "#10b981"
  },
  {
    id: "daisy",
    name: "DaisyIcon",
    category: "emojies",
    description:
      "3D flat yellow center button with radiating white capsule petals and glowing stamen dots",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "hibiscus",
    name: "HibiscusIcon",
    category: "emojies",
    description:
      "3D flared hibiscus petals with a curved central style tube and glowing pollen tips",
    color: "#ec4899",
    accentColor: "#10b981"
  },
  {
    id: "orchid",
    name: "OrchidIcon",
    category: "emojies",
    description: "3D exotic asymmetric orchid petals with a center hood and glowing stamen node",
    color: "#d946ef",
    accentColor: "#10b981"
  },
  {
    id: "lily",
    name: "LilyIcon",
    category: "emojies",
    description: "3D trumpet-like recurved lily petals, green calyx base, and glowing stamen tips",
    color: "#fdf2f8",
    accentColor: "#10b981"
  },
  {
    id: "cactus",
    name: "CactusIcon",
    category: "emojies",
    description:
      "3D Saguaro cactus silhouette with ribbed trunk, side branches, and glowing spine pins",
    color: "#16a34a",
    accentColor: "#10b981"
  },
  {
    id: "lavender",
    name: "LavenderIcon",
    category: "emojies",
    description:
      "3D thin green stem with vertically stacked purple flower pod tiers and glowing centers",
    color: "#a855f7",
    accentColor: "#10b981"
  },
  {
    id: "cloudrain",
    name: "CloudRainIcon",
    category: "systems",
    description: "3D glassmorphic cloud body with falling cylindrical glowing raindrops",
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "cloudsnow",
    name: "CloudSnowIcon",
    category: "systems",
    description: "3D glassmorphic cloud body with falling glowing spherical snowflakes",
    color: "#0ea5e9",
    accentColor: "#e2e8f0"
  },
  {
    id: "wind",
    name: "WindIcon",
    category: "systems",
    description: "3D horizontal blowing breeze air streams with glowing vector curls",
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "tornado",
    name: "TornadoIcon",
    category: "systems",
    description: "3D helical spinning funnel vortex storm with a glowing vertical axis core",
    color: "#475569",
    accentColor: "#0ea5e9"
  },
  {
    id: "snowflake",
    name: "SnowflakeIcon",
    category: "systems",
    description: "3D six-sided symmetrical crystalline snowflake with a central glowing core",
    color: "#38bdf8",
    accentColor: "#e2e8f0"
  },
  {
    id: "rainbow",
    name: "RainbowIcon",
    category: "systems",
    description: "3D multi-layered arching rainbow with nested semi-toruses and base clouds",
    color: "#ef4444",
    accentColor: "#06b6d4"
  },
  {
    id: "thermometer",
    name: "ThermometerIcon",
    category: "utility",
    description: "3D temperature gauge cylinder tube with base bulb and glowing red fluid core",
    color: "#cbd5e1",
    accentColor: "#ef4444"
  },
  {
    id: "leaf",
    name: "LeafIcon",
    category: "emojies",
    description: "3D organic styled leaf blade with midrib veins and a glowing dewdrop sphere",
    color: "#16a34a",
    accentColor: "#0ea5e9"
  },
  {
    id: "tree",
    name: "TreeIcon",
    category: "emojies",
    description: "3D coniferous pine tree with stacked green cones, trunk, and a glowing peak node",
    color: "#15803d",
    accentColor: "#10b981"
  },
  {
    id: "hurricane",
    name: "HurricaneIcon",
    category: "systems",
    description: "3D symmetrical spiral storm vortex arms around a central glowing eye sphere",
    color: "#0284c7",
    accentColor: "#0ea5e9"
  },
  {
    id: "burger",
    name: "BurgerIcon",
    category: "emojies",
    description:
      "3D stacked burger with buns, sesame seeds, meat patty, cheese, and green lettuce layers",
    color: "#d97706",
    accentColor: "#eab308"
  },
  {
    id: "pizza",
    name: "PizzaIcon",
    category: "emojies",
    description:
      "3D triangular pizza slice with cheese, base crust, and glowing red pepperoni discs",
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "apple",
    name: "AppleIcon",
    category: "emojies",
    description:
      "3D cleft apple body with top indentation, vertical stem, green leaf, and glowing core seed",
    color: "#ef4444",
    accentColor: "#eab308"
  },
  {
    id: "banana",
    name: "BananaIcon",
    category: "emojies",
    description: "3D partially peeled banana with matte cream core and yellow skin peeling flaps",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "cake",
    name: "CakeIcon",
    category: "emojies",
    description:
      "3D dual-layer celebration cake with white frosting, rim whipped cream, and glowing candle",
    color: "#ec4899",
    accentColor: "#f59e0b"
  },
  {
    id: "icecream",
    name: "IceCreamIcon",
    category: "emojies",
    description:
      "3D waffle cone containing a scoop of ice cream with whipped cream and glowing cherry on top",
    color: "#f472b6",
    accentColor: "#ef4444"
  },
  {
    id: "donut",
    name: "DonutIcon",
    category: "emojies",
    description:
      "3D baked ring donut with thick colored frosting glaze and scattered multi-color sprinkles",
    color: "#db2777",
    accentColor: "#eab308"
  },
  {
    id: "popcorn",
    name: "PopcornIcon",
    category: "emojies",
    description:
      "3D striped popcorn tub overflowing with white and buttery glowing yellow popcorn kernels",
    color: "#ef4444",
    accentColor: "#eab308"
  },
  {
    id: "watermelon",
    name: "WatermelonIcon",
    category: "emojies",
    description:
      "3D triangular watermelon wedge showing green rind, white outline, red flesh, and black seeds",
    color: "#ef4444",
    accentColor: "#1e293b"
  },
  {
    id: "cookie",
    name: "CookieIcon",
    category: "emojies",
    description:
      "3D circular baked cookie disc with dark chocolate chips and a central glowing accent chip",
    color: "#ca8a04",
    accentColor: "#10b981"
  },
  {
    id: "safe",
    name: "SafeIcon",
    category: "utility",
    description:
      "3D steel combination vault safe box with circular combination dial, lever handle, and a glowing node",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "goldbars",
    name: "GoldBarsIcon",
    category: "utility",
    description:
      "3D stacked gold bars showing trapezoidal shape contours, polished finish, and a glowing end stamp",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "bank",
    name: "BankIcon",
    category: "utility",
    description:
      "3D classical temple bank building with vertical pillars, foundation steps, and a glowing portal",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "coin",
    name: "CoinIcon",
    category: "utility",
    description:
      "3D ridged gold coin showing raised outer borders and a glowing central currency dollar symbol",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "piggybank",
    name: "PiggyBankIcon",
    category: "utility",
    description: "3D stylized piggy bank featuring a top slot and a glowing gold coin drop entry",
    color: "#f472b6",
    accentColor: "#eab308"
  },
  {
    id: "shoppingbag",
    name: "ShoppingBagIcon",
    category: "utility",
    description:
      "3D paper shopping bag with rope handles, side crease folds, and a glowing star label badge",
    color: "#ca8a04",
    accentColor: "#eab308"
  },
  {
    id: "shoppingcart",
    name: "ShoppingCartIcon",
    category: "utility",
    description:
      "3D metallic shopping cart with support frames, moving wheels, and a glowing gift item inside",
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "scale",
    name: "ScaleIcon",
    category: "utility",
    description:
      "3D justice balance scale showing central stand column, balance crossbeam, hanging pans, and glowing pivot",
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "receipt",
    name: "ReceiptIcon",
    category: "utility",
    description:
      "3D curved transaction receipt slip with jagged cut edges, printed lines, and a glowing checkmark",
    color: "#f8fafc",
    accentColor: "#10b981"
  },
  {
    id: "banknote",
    name: "BanknoteIcon",
    category: "utility",
    description:
      "3D paper banknote bills stacked together with center strap collar and a glowing coin badge in center",
    color: "#16a34a",
    accentColor: "#eab308"
  },
  {
    id: "euro",
    name: "EuroIcon",
    category: "utility",
    description:
      "3D ridged gold coin showing raised outer borders and a glowing central currency euro symbol",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "yen",
    name: "YenIcon",
    category: "utility",
    description:
      "3D ridged gold coin showing raised outer borders and a glowing central currency yen symbol",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "pound",
    name: "PoundIcon",
    category: "utility",
    description:
      "3D ridged gold coin showing raised outer borders and a glowing central currency pound symbol",
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "atom",
    name: "AtomIcon",
    category: "utility",
    description: "3D Rutherford-Bohr atom model with orbiting electrons and a clustered nucleus",
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "dna",
    name: "DNAIcon",
    category: "utility",
    description: "3D winding double-helix structure with connected base pairs",
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "microscope",
    name: "MicroscopeIcon",
    category: "utility",
    description:
      "3D laboratory microscope featuring adjustable focus knobs and a specimen platform",
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "telescope",
    name: "TelescopeIcon",
    category: "utility",
    description: "3D astronomical telescope with refractor main tube on tripod support legs",
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "beaker",
    name: "BeakerIcon",
    category: "utility",
    description: "3D laboratory beaker containing bubbling liquid volume and measurement markers",
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "folderplus",
    name: "FolderPlusIcon",
    category: "storage",
    description: "3D directory folder with a raised glowing green plus sign on the front cover",
    color: "#f59e0b",
    accentColor: "#10b981"
  },
  {
    id: "folderminus",
    name: "FolderMinusIcon",
    category: "storage",
    description: "3D directory folder with a raised glowing red minus sign on the front cover",
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "foldercheck",
    name: "FolderCheckIcon",
    category: "storage",
    description: "3D directory folder with a raised glowing green checkmark on the front cover",
    color: "#f59e0b",
    accentColor: "#10b981"
  },
  {
    id: "calendarplus",
    name: "CalendarPlusIcon",
    category: "utility",
    description:
      "3D calendar grids plate with a raised glowing green plus sign on the front corner",
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "calendarcheck",
    name: "CalendarCheckIcon",
    category: "utility",
    description:
      "3D calendar grids plate with a raised glowing green checkmark on the front corner",
    color: "#6366f1",
    accentColor: "#10b981"
  },
  // Alphabet icons – generated dynamically A-Z
  ...(() => {
    const LETTER_COLORS: Record<string, string> = {
      A: "#f43f5e",
      B: "#f97316",
      C: "#eab308",
      D: "#84cc16",
      E: "#22c55e",
      F: "#10b981",
      G: "#14b8a6",
      H: "#06b6d4",
      I: "#0ea5e9",
      J: "#3b82f6",
      K: "#6366f1",
      L: "#8b5cf6",
      M: "#a855f7",
      N: "#d946ef",
      O: "#ec4899",
      P: "#f43f5e",
      Q: "#ef4444",
      R: "#f97316",
      S: "#f59e0b",
      T: "#10b981",
      U: "#06b6d4",
      V: "#3b82f6",
      W: "#6366f1",
      X: "#8b5cf6",
      Y: "#a855f7",
      Z: "#d946ef"
    };
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => ({
      id: `letter-${l.toLowerCase()}`,
      name: `${l}Icon`,
      category: "alphabet" as const,
      description: `Extruded 3D bold letter ${l} with beveled edges and material presets`,
      Component: (props: any) => <LetterIcon letter={l} {...props} />,
      color: LETTER_COLORS[l],
      accentColor: "#ffffff"
    }));
  })()
];

const CATEGORIES = [
  "all",
  "storage",
  "systems",
  "hardware",
  "networking",
  "mechanics",
  "brands",
  "emojies",
  "utility",
  "alphabet"
] as const;

function getLevenshteinDistance(a: string, b: string): number {
  const tmp: number[][] = [];
  for (let i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,
        tmp[i][j - 1] + 1,
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return tmp[a.length][b.length];
}

function getFuzzyScore(text: string, query: string): number {
  const tLower = text.toLowerCase();
  const qLower = query.toLowerCase();

  if (tLower === qLower) return 1.0;
  if (tLower.startsWith(qLower)) return 0.9;
  if (tLower.includes(qLower)) return 0.8;

  // Split target words to match tokens
  const words = tLower
    .replace("icon", "")
    .split(/(?=[0-9])|[^a-zA-Z0-9]/)
    .filter(Boolean);
  for (const w of words) {
    if (w.startsWith(qLower)) return 0.75;
    if (w.includes(qLower)) return 0.7;

    // Typo matching within words
    if (qLower.length > 2 && w.length > 2) {
      const dist = getLevenshteinDistance(w, qLower);
      if (dist <= 1) return 0.6;
      if (dist <= 2 && qLower.length > 4) return 0.4;
    }
  }

  // Abbreviation / character subsequence matching
  let qIdx = 0;
  let matches = 0;
  for (let i = 0; i < tLower.length; i++) {
    if (tLower[i] === qLower[qIdx]) {
      qIdx++;
      matches++;
      if (qIdx === qLower.length) break;
    }
  }

  if (matches === qLower.length) {
    return 0.5 + (qLower.length / tLower.length) * 0.15;
  }

  return 0;
}

const COLOR_PALETTES = [
  {
    id: "all",
    label: "All Colors",
    value: "all",
    bg: "bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    id: "slate",
    label: "Slate / Gray",
    value: "slate",
    bg: "bg-slate-500",
    colors: ["#6b7280", "#475569", "#71717a"]
  },
  {
    id: "blue",
    label: "Blue / Indigo",
    value: "blue",
    bg: "bg-blue-500",
    colors: ["#3b82f6", "#6366f1", "#4f46e5", "#1877f2", "#0ea5e9", "#06b6d4"]
  },
  {
    id: "emerald",
    label: "Emerald / Teal",
    value: "emerald",
    bg: "bg-emerald-500",
    colors: ["#10b981", "#0d9488", "#34d399"]
  },
  {
    id: "rose",
    label: "Red / Pink",
    value: "rose",
    bg: "bg-rose-500",
    colors: ["#ef4444", "#ec4899", "#e11d48", "#f43f5e"]
  },
  {
    id: "amber",
    label: "Amber / Yellow",
    value: "amber",
    bg: "bg-amber-500",
    colors: ["#f59e0b", "#f97316", "#eab308", "#d4af37", "#b45309", "#fbbf24"]
  }
];

export const Landing: React.FC<LandingProps> = ({ theme, search, setSearch }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activePreset, setActivePreset] = useState<IconPreset>("glass");
  const [favoriteIconIds, setFavoriteIconIds] = useState<string[]>([]);

  // Load favorites on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("r3d_favorite_icons:v1");
      if (stored) {
        setFavoriteIconIds(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load favorites", e);
    }
  }, []);

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (favoriteIconIds.includes(id)) {
      updated = favoriteIconIds.filter((favId) => favId !== id);
    } else {
      updated = [...favoriteIconIds, id];
    }
    setFavoriteIconIds(updated);
    localStorage.setItem("r3d_favorite_icons:v1", JSON.stringify(updated));
  };

  // Pre-calculate category counts for quick search badges
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = { all: ICONS_REGISTRY.length };
    ICONS_REGISTRY.forEach((icon) => {
      counts[icon.category] = (counts[icon.category] || 0) + 1;
    });
    return counts;
  }, []);

  const [activeColorFilter, setActiveColorFilter] = useState<string>("all");

  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestIconName, setRequestIconName] = useState(search || "");
  const [requestCategory, setRequestCategory] = useState("utility");
  const [requestDetails, setRequestDetails] = useState("");
  const [requestEmail, setRequestEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleCount, setVisibleCount] = useState(60);

  const hasActiveFilters =
    search !== "" ||
    activeCategory !== "all" ||
    activeColorFilter !== "all" ||
    activePreset !== "glass";

  const handleResetFilters = () => {
    setSearch("");
    setActiveCategory("all");
    setActiveColorFilter("all");
    setActivePreset("glass");
  };

  // Sync suggestion field with search input & reset category to 'all' for global search
  useEffect(() => {
    setRequestIconName(search);
    if (search.trim() !== "") {
      setActiveCategory("all");
    }
  }, [search]);

  // Handle scroll tracking for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredIcons = useMemo(() => {
    const matchesColorFilter = (iconColor: string) => {
      if (activeColorFilter === "all") return true;
      const filter = COLOR_PALETTES.find((p) => p.id === activeColorFilter);
      if (!filter || !filter.colors) return true;
      return filter.colors.some((c) => c.toLowerCase() === iconColor.toLowerCase());
    };

    const filterBase = (icon: (typeof ICONS_REGISTRY)[0]) => {
      const matchesCategory =
        activeCategory === "all"
          ? true
          : activeCategory === "favorites"
            ? favoriteIconIds.includes(icon.id)
            : icon.category === activeCategory;
      const matchesColor = matchesColorFilter(icon.color);
      return matchesCategory && matchesColor;
    };

    if (search === "") {
      return ICONS_REGISTRY.filter(filterBase);
    }

    const scored = ICONS_REGISTRY.map((icon) => {
      const nameScore = getFuzzyScore(icon.name, search);
      const descScore = getFuzzyScore(icon.description || "", search);
      const maxScore = Math.max(nameScore, descScore * 0.8);
      return { icon, score: maxScore };
    }).filter((item) => item.score > 0 && filterBase(item.icon));

    scored.sort((a, b) => b.score - a.score);
    return scored.map((item) => item.icon);
  }, [search, activeCategory, activeColorFilter, favoriteIconIds]);

  // Reset visible icons count when filters change
  useEffect(() => {
    setVisibleCount(60);
  }, [search, activeCategory, activeColorFilter]);

  // Infinite Scroll / Lazy Load Observer for Lighthouse performance optimization
  useEffect(() => {
    if (visibleCount >= filteredIcons.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 40, filteredIcons.length));
        }
      },
      { rootMargin: "300px" } // Load next batch 300px before reaching viewport bottom
    );

    const sentinel = document.getElementById("scroll-sentinel");
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [visibleCount, filteredIcons.length]);

  return (
    <div>
      {/* Hero Section */}
      <Hero totalIcons={ICONS_REGISTRY.length} />

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        {/* Mobile-only Search Input */}
        <div className="sm:hidden mb-6 relative">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            aria-label="Search 3D icons"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 pl-11 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
          />
          <Search size={16} className="absolute left-4 top-3.5 text-zinc-400 pointer-events-none" />
        </div>
        {/* Dynamic Search Suggestions / Trending Tags */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 text-[10px] sm:text-xs">
          <span className="text-zinc-400 dark:text-zinc-555 font-bold uppercase tracking-wider mr-1">
            Trending:
          </span>
          {["React", "Database", "Shield", "Rocket", "Wifi", "Battery", "Mail", "Globe"].map(
            (tag) => {
              const isSelected = search.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  onClick={() => setSearch(isSelected ? "" : tag)}
                  className={`px-2.5 py-1 rounded-lg font-bold border transition duration-155 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600/20 dark:bg-indigo-500/25 border-indigo-500/80 text-indigo-600 dark:text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.15)] backdrop-blur-md"
                      : "bg-white/40 dark:bg-[#0e111a]/40 backdrop-blur-md border-zinc-200/50 dark:border-white/5 hover:bg-white/70 dark:hover:bg-zinc-900/50 text-zinc-550 dark:text-zinc-400"
                  }`}
                >
                  {tag}
                </button>
              );
            }
          )}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-red-500 dark:text-red-400 font-extrabold uppercase tracking-wide hover:underline cursor-pointer ml-1.5"
            >
              Clear
            </button>
          )}
        </div>{" "}
        {/* Controls Toolbar: Brand Color Filter, Preset Switcher & Grid/List View Switcher */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 p-3.5 rounded-3xl border border-zinc-200/50 dark:border-white/10 bg-white/40 dark:bg-[#0c0f1a]/45 backdrop-blur-xl max-w-4xl mx-auto w-full shadow-lg shadow-indigo-500/[0.02] dark:shadow-indigo-500/[0.01]">
          {/* Brand Color Selector */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Filter by Color
            </span>
            <div className="flex items-center gap-2">
              {COLOR_PALETTES.map((palette) => {
                const isSelected = activeColorFilter === palette.id;
                return (
                  <button
                    key={palette.id}
                    onClick={() => setActiveColorFilter(palette.id)}
                    className={`group/color w-5 h-5 rounded-full ${palette.bg} transition cursor-pointer relative flex items-center justify-center hover:scale-110 active:scale-95 ${
                      isSelected
                        ? "ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-[#07090f] scale-110 shadow-md"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    {/* Tooltip label */}
                    <span className="absolute bottom-7 scale-0 group-hover/color:scale-100 transition-all duration-150 origin-bottom bg-zinc-950/90 dark:bg-zinc-800/95 text-white text-[8px] font-extrabold uppercase tracking-wider py-1 px-2 rounded-lg pointer-events-none whitespace-nowrap shadow-md z-20">
                      {palette.label}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-inner animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider line for mobile stack layout */}
          <div className="lg:hidden w-full h-px bg-zinc-200/40 dark:bg-zinc-800/40" />

          {/* Catalog Material Preset Selector Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Material Preset
            </span>
            <div className="flex flex-wrap gap-1 rounded-2xl p-1 bg-zinc-100/50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-white/5 backdrop-blur-md">
              {(
                [
                  { id: "glass", name: "Glass" },
                  { id: "gold", name: "Gold" },
                  { id: "silver", name: "Chrome" },
                  { id: "carbon", name: "Carbon" },
                  { id: "wood", name: "Wood" }
                ] as const
              ).map((presetItem) => {
                const isSelected = activePreset === presetItem.id;
                return (
                  <button
                    key={presetItem.id}
                    onClick={() => {
                      audioEngine.playClick();
                      setActivePreset(presetItem.id);
                    }}
                    className={`px-2 py-1 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-white dark:bg-zinc-900/80 text-indigo-600 dark:text-indigo-400 shadow-md border border-zinc-250/10 dark:border-white/10"
                        : "text-zinc-400 hover:text-zinc-655 dark:hover:text-zinc-350"
                    }`}
                  >
                    {presetItem.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider line for mobile stack layout */}
          <div className="lg:hidden w-full h-px bg-zinc-200/40 dark:bg-zinc-800/40" />

          {/* Grid vs List Toggle Switcher */}
          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="px-2.5 py-1.5 rounded-xl border border-red-200 dark:border-red-950/40 bg-red-500/10 hover:bg-red-500/15 text-red-600 dark:text-red-400 text-[9px] font-black uppercase tracking-wider transition active:scale-95 cursor-pointer shadow-sm animate-page-fade"
              >
                Reset Filters
              </button>
            )}
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Layout
              </span>
              <div className="flex rounded-2xl p-1 bg-zinc-100/50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-white/5 backdrop-blur-md">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition duration-150 cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-white dark:bg-zinc-900/80 text-indigo-650 dark:text-indigo-400 shadow-md border border-zinc-250/10 dark:border-white/10"
                      : "text-zinc-400 hover:text-zinc-650 dark:hover:text-zinc-350"
                  }`}
                  title="Grid View"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md transition duration-150 cursor-pointer ${
                    viewMode === "list"
                      ? "bg-white dark:bg-zinc-900/80 text-indigo-650 dark:text-indigo-400 shadow-md border border-zinc-250/10 dark:border-white/10"
                      : "text-zinc-400 hover:text-zinc-650 dark:hover:text-zinc-350"
                  }`}
                  title="List View"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-6">
          {/* Favorites filter tab button */}
          <button
            onClick={() => {
              audioEngine.playClick();
              setActiveCategory("favorites");
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-155 cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "favorites"
                ? "bg-rose-600 text-white shadow-sm shadow-rose-600/20"
                : "bg-white/45 dark:bg-[#0e111a]/45 hover:bg-white/70 dark:hover:bg-zinc-900/50 text-zinc-550 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/5 backdrop-blur-md"
            }`}
          >
            <Heart
              size={12}
              className={
                activeCategory === "favorites" ? "fill-current text-white" : "text-zinc-400"
              }
            />
            <span>{t("category_favorites" as any)}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[9px] font-extrabold ${
                activeCategory === "favorites"
                  ? "bg-white/20 text-white"
                  : "bg-zinc-200/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-500"
              }`}
            >
              {favoriteIconIds.length}
            </span>
          </button>

          {CATEGORIES.map((category) => {
            const translationKey = `category_${category}` as TranslationKey;
            const isSelected = activeCategory === category;
            const count = categoryCounts[category] || 0;
            return (
              <button
                key={category}
                onClick={() => {
                  audioEngine.playClick();
                  setActiveCategory(category);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20"
                    : "bg-white/45 dark:bg-[#0e111a]/45 hover:bg-white/70 dark:hover:bg-zinc-900/50 text-zinc-550 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/5 backdrop-blur-md"
                }`}
              >
                <span>{t(translationKey)}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] font-extrabold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-zinc-200/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        {/* Icon Grid/List Catalog */}
        <div
          key={`${activeCategory}-${activeColorFilter}-${activePreset}-${search}`}
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3"
              : "flex flex-col gap-3.5"
          } animate-page-fade`}
        >
          {filteredIcons.slice(0, visibleCount).map((icon) => (
            <IconCard
              key={icon.id}
              id={icon.id}
              name={icon.name}
              color={icon.color}
              accentColor={icon.accentColor}
              theme={theme}
              category={icon.category}
              description={icon.description}
              viewMode={viewMode}
              preset={activePreset}
              isFavorite={favoriteIconIds.includes(icon.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}

          {/* Sentinel element to trigger loading more icons */}
          {visibleCount < filteredIcons.length && (
            <div
              id="scroll-sentinel"
              className="col-span-full h-8 flex items-center justify-center text-xs font-semibold text-zinc-400 dark:text-zinc-500 py-4"
            >
              <span className="animate-pulse">Loading more icons...</span>
            </div>
          )}

          {filteredIcons.length === 0 && (
            <div className="col-span-full py-12 px-6 flex flex-col items-center justify-center text-center text-zinc-400 dark:text-zinc-500 gap-6 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl bg-zinc-50/50 dark:bg-[#090d16]/30 backdrop-blur-sm max-w-md mx-auto w-full">
              <div className="flex flex-col items-center gap-2">
                <HelpCircle size={40} className="stroke-1 text-indigo-500 animate-pulse" />
                <h3 className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                  No matching 3D icons found
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
                  Try clearing active filters, or submit a request and our modeling team will design
                  it!
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition active:scale-95 cursor-pointer shadow-md shadow-indigo-600/10 border-0"
                >
                  Clear All Active Filters
                </button>
              </div>

              {requestSubmitted ? (
                <div className="py-6 px-8 rounded-2xl bg-indigo-50/30 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/30 text-center space-y-2 w-full animate-fadeIn">
                  <p className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                    ✓ Request Submitted Successfully!
                  </p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    Thank you! We've queued "{requestIconName}" for custom 3D modeling.
                  </p>
                  <button
                    onClick={() => {
                      setRequestSubmitted(false);
                      setRequestDetails("");
                      setRequestEmail("");
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white text-[10px] font-bold transition cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRequestSubmitted(true);
                  }}
                  className="w-full space-y-4 text-left"
                >
                  {/* Icon Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                      Suggested Icon Name
                    </label>
                    <input
                      type="text"
                      required
                      value={requestIconName}
                      onChange={(e) => setRequestIconName(e.target.value)}
                      placeholder="e.g. Bluetooth, Satellite, Printer"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0d14] text-zinc-800 dark:text-zinc-200 text-xs font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>

                  {/* Category Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                      Icon Category
                    </label>
                    <select
                      value={requestCategory}
                      onChange={(e) => setRequestCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0d14] text-zinc-800 dark:text-zinc-200 text-xs font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    >
                      <option value="utility">Utility</option>
                      <option value="hardware">Hardware</option>
                      <option value="networking">Networking</option>
                      <option value="storage">Storage</option>
                      <option value="systems">Systems</option>
                      <option value="mechanics">Mechanics</option>
                      <option value="brands">Brands</option>
                      <option value="emojies">Emojies</option>
                    </select>
                  </div>

                  {/* Description / Details */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                      Design Description (optional)
                    </label>
                    <textarea
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                      placeholder="Describe the shape, colors, or metallic accents..."
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0d14] text-zinc-800 dark:text-zinc-200 text-xs font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* User Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                      Your Email (optional)
                    </label>
                    <input
                      type="email"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0d14] text-zinc-800 dark:text-zinc-200 text-xs font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/10 hover:scale-[1.01] transition active:scale-99 cursor-pointer text-center block border-0"
                  >
                    Submit Icon Request
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500/90 dark:hover:bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-md ${
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
};
