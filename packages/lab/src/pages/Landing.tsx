import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/useTranslation";
import { Hero } from "../components/Hero";
import { IconCard } from "../components/IconCard";
import { HelpCircle } from "lucide-react";
import { 
  FacebookIcon,
  ShieldIcon,
  RocketIcon,
  DatabaseIcon, 
  CloudIcon, 
  CpuIcon, 
  NetworkIcon, 
  GearIcon,
  FlashIcon,
  FolderIcon,
  MailIcon,
  WalletIcon,
  CalendarIcon,
  DollarIcon,
  ThumbUpIcon,
  HeartIcon,
  ChatIcon,
  KeyIcon,
  StarIcon,
  CartIcon,
  MusicIcon,
  GamepadIcon,
  BellIcon,
  SunIcon,
  BulbIcon,
  CameraIcon,
  ClockIcon,
  TrophyIcon,
  LockIcon,
  MapPinIcon,
  CreditCardIcon,
  WifiIcon,
  SearchIcon,
  HomeIcon,
  TrashIcon,
  UserIcon,
  PlayIcon,
  GiftIcon,
  GlobeIcon,
  BagIcon,
  CompassIcon,
  SendIcon,
  TargetIcon,
  EditIcon,
  PhoneIcon,
  BookIcon,
  LinkIcon,
  CrownIcon,
  PinIcon,
  FlagIcon,
  BriefcaseIcon,
  EyeIcon,
  TagIcon,
  CoffeeIcon,
  ShareIcon,
  LayersIcon,
  SparklesIcon,
  MegaphoneIcon,
  DownloadIcon,
  UploadIcon,
  MonitorIcon,
  KeyboardIcon,
  MouseIcon,
  HardDriveIcon,
  GlassmorphismIcon,
  GithubIcon,
  TwitterIcon,
  GoogleIcon,
  RouterIcon,
  ServerIcon,
  WrenchIcon,
  BoltIcon,
  SmileIcon,
  FrownIcon,
  HeartEyesIcon,
  HammerIcon,
  ScrewdriverIcon,
  NutIcon,
  PrinterIcon,
  SpeakerIcon,
  EthernetIcon,
  SatelliteIcon,
  CodeIcon,
  TerminalIcon,
  GitIcon,
  FigmaIcon,
  BarChartIcon,
  CheckIcon,
  ContainerIcon,
  ShieldCheckIcon,
  ReactIcon,
  NodeIcon
} from "react-3d-icons";
import { TranslationKey } from "../i18n/translations";


interface LandingProps {
  theme: "light" | "dark";
  search: string;
}

const ICONS_REGISTRY = [
  {
    id: "facebook",
    name: "FacebookIcon",
    category: "brands",
    description: "F-logo brand mark badge with glassmorphic backing",
    Component: FacebookIcon,
    color: "#1877f2",
    accentColor: "#3b82f6"
  },
  {
    id: "shield",
    name: "ShieldIcon",
    category: "utility",
    description: "Robust digital fire-wall guard security shield",
    Component: ShieldIcon,
    color: "#0d9488",
    accentColor: "#34d399"
  },
  {
    id: "rocket",
    name: "RocketIcon",
    category: "mechanics",
    description: "Aerodynamic space shuttle rocket launch structure",
    Component: RocketIcon,
    color: "#ef4444",
    accentColor: "#f59e0b"
  },
  {
    id: "database",
    name: "DatabaseIcon",
    category: "storage",
    description: "Layered data towers with status indicator light bars",
    Component: DatabaseIcon,
    color: "#4f46e5",
    accentColor: "#ec4899"
  },
  {
    id: "folder",
    name: "FolderIcon",
    category: "storage",
    description: "Glassmorphic folder vault container with structural dividers",
    Component: FolderIcon,
    color: "#f59e0b",
    accentColor: "#eab308"
  },
  {
    id: "cloud",
    name: "CloudIcon",
    category: "systems",
    description: "Glassmorphic data cloud with rounded physical volumes",
    Component: CloudIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "network",
    name: "NetworkIcon",
    category: "networking",
    description: "Central network node bound by wireframe geodesics",
    Component: NetworkIcon,
    color: "#06b6d4",
    accentColor: "#a855f7"
  },
  {
    id: "cpu",
    name: "CpuIcon",
    category: "hardware",
    description: "Substrate microchip featuring circuit trace geometries",
    Component: CpuIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "gear",
    name: "GearIcon",
    category: "mechanics",
    description: "Rotational gear mechanical engine wheel configuration",
    Component: GearIcon,
    color: "#71717a",
    accentColor: "#b45309"
  },
  {
    id: "mail",
    name: "MailIcon",
    category: "utility",
    description: "Isometric sealed glass envelope with physical letter slots",
    Component: MailIcon,
    color: "#e11d48",
    accentColor: "#ec4899"
  },
  {
    id: "calendar",
    name: "CalendarIcon",
    category: "utility",
    description: "Sleek time calendar organizer grid with scheduling pin",
    Component: CalendarIcon,
    color: "#6366f1",
    accentColor: "#ef4444"
  },
  {
    id: "wallet",
    name: "WalletIcon",
    category: "utility",
    description: "Dual-compartment leather card holder container",
    Component: WalletIcon,
    color: "#b45309",
    accentColor: "#d97706"
  },
  {
    id: "dollar",
    name: "DollarIcon",
    category: "utility",
    description: "Sleek gold currency symbol with circular coin border",
    Component: DollarIcon,
    color: "#eab308",
    accentColor: "#f59e0b"
  },
  {
    id: "thumbup",
    name: "ThumbUpIcon",
    category: "utility",
    description: "Like thumbs-up gesture hand sign silhouette",
    Component: ThumbUpIcon,
    color: "#f43f5e",
    accentColor: "#fb7185"
  },
  {
    id: "flash",
    name: "FlashIcon",
    category: "utility",
    description: "Angled digital electrical thunder lightning bolt",
    Component: FlashIcon,
    color: "#eab308",
    accentColor: "#f97316"
  },
  {
    id: "heart",
    name: "HeartIcon",
    category: "utility",
    description: "Glossy 3D love heart model with smooth curved surfaces",
    Component: HeartIcon,
    color: "#ec4899",
    accentColor: "#f43f5e"
  },
  {
    id: "chat",
    name: "ChatIcon",
    category: "utility",
    description: "3D message speech bubble with text line overlays",
    Component: ChatIcon,
    color: "#8b5cf6",
    accentColor: "#a78bfa"
  },
  {
    id: "key",
    name: "KeyIcon",
    category: "utility",
    description: "Security access key with ring head and cut teeth",
    Component: KeyIcon,
    color: "#f59e0b",
    accentColor: "#fbbf24"
  },
  {
    id: "star",
    name: "StarIcon",
    category: "utility",
    description: "Beveled 3D rating star with glowing faceted surfaces",
    Component: StarIcon,
    color: "#fbbf24",
    accentColor: "#f59e0b"
  },
  {
    id: "cart",
    name: "CartIcon",
    category: "utility",
    description: "Shopping cart basket framework with rolling wheels",
    Component: CartIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "music",
    name: "MusicIcon",
    category: "utility",
    description: "Slanted double eighth music note vector design",
    Component: MusicIcon,
    color: "#ec4899",
    accentColor: "#f43f5e"
  },
  {
    id: "gamepad",
    name: "GamepadIcon",
    category: "hardware",
    description: "Dual-analog console gaming controller blueprint",
    Component: GamepadIcon,
    color: "#6366f1",
    accentColor: "#8b5cf6"
  },
  {
    id: "bell",
    name: "BellIcon",
    category: "utility",
    description: "Tactile notification bell model with top hanging loop",
    Component: BellIcon,
    color: "#f59e0b",
    accentColor: "#d97706"
  },
  {
    id: "sun",
    name: "SunIcon",
    category: "systems",
    description: "Central bright weather sun sphere with radiating cylinder rays",
    Component: SunIcon,
    color: "#f97316",
    accentColor: "#eab308"
  },
  {
    id: "bulb",
    name: "BulbIcon",
    category: "utility",
    description: "Glowing 3D creative lightbulb with filament and screw base",
    Component: BulbIcon,
    color: "#fbbf24",
    accentColor: "#f59e0b"
  },
  {
    id: "camera",
    name: "CameraIcon",
    category: "hardware",
    description: "Retro 3D camera model with double lens glass",
    Component: CameraIcon,
    color: "#06b6d4",
    accentColor: "#3b82f6"
  },
  {
    id: "clock",
    name: "ClockIcon",
    category: "utility",
    description: "Classic alarm clock layout with double top bell domes",
    Component: ClockIcon,
    color: "#ef4444",
    accentColor: "#cbd5e1"
  },
  {
    id: "trophy",
    name: "TrophyIcon",
    category: "utility",
    description: "Shiny victory championship cup with side loops and stand",
    Component: TrophyIcon,
    color: "#eab308",
    accentColor: "#f59e0b"
  },
  {
    id: "lock",
    name: "LockIcon",
    category: "utility",
    description: "High-security padlock structure with U-shackle loop",
    Component: LockIcon,
    color: "#6366f1",
    accentColor: "#8b5cf6"
  },
  {
    id: "mappin",
    name: "MapPinIcon",
    category: "utility",
    description: "Location map marker balloon with bottom ground shadow",
    Component: MapPinIcon,
    color: "#ef4444",
    accentColor: "#f43f5e"
  },
  {
    id: "creditcard",
    name: "CreditCardIcon",
    category: "utility",
    description: "3D plastic bank card with chip and logo overlap",
    Component: CreditCardIcon,
    color: "#4f46e5",
    accentColor: "#0ea5e9"
  },
  {
    id: "wifi",
    name: "WifiIcon",
    category: "networking",
    description: "Wireless network signal bands with center dot base",
    Component: WifiIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "search",
    name: "SearchIcon",
    category: "utility",
    description: "Magnifying glass with refractive visual lens and themed frame",
    Component: SearchIcon,
    color: "#3b82f6",
    accentColor: "#38bdf8"
  },
  {
    id: "home",
    name: "HomeIcon",
    category: "utility",
    description: "Charming physical 3D house structure with roof and door",
    Component: HomeIcon,
    color: "#10b981",
    accentColor: "#f43f5e"
  },
  {
    id: "trash",
    name: "TrashIcon",
    category: "utility",
    description: "Ribbed 3D waste basket bin with liftable top handle lid",
    Component: TrashIcon,
    color: "#71717a",
    accentColor: "#ef4444"
  },
  {
    id: "user",
    name: "UserIcon",
    category: "utility",
    description: "Smooth clay user profile personal avatar shoulder bust",
    Component: UserIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "play",
    name: "PlayIcon",
    category: "utility",
    description: "Glossy digital player control media play triangle arrow",
    Component: PlayIcon,
    color: "#10b981",
    accentColor: "#38bdf8"
  },
  {
    id: "gift",
    name: "GiftIcon",
    category: "utility",
    description: "Gift box wrapping model featuring ribbon cross bow tie",
    Component: GiftIcon,
    color: "#f43f5e",
    accentColor: "#ef4444"
  },
  {
    id: "globe",
    name: "GlobeIcon",
    category: "systems",
    description: "Desktop geographic navigation map globe sphere on stand",
    Component: GlobeIcon,
    color: "#0ea5e9",
    accentColor: "#3b82f6"
  },
  {
    id: "bag",
    name: "BagIcon",
    category: "utility",
    description: "Shopping utility handle bag with front accent sleeve pocket",
    Component: BagIcon,
    color: "#f59e0b",
    accentColor: "#38bdf8"
  },
  {
    id: "compass",
    name: "CompassIcon",
    category: "utility",
    description: "Sleek navigation compass with dual-tone indicator needle",
    Component: CompassIcon,
    color: "#d4af37",
    accentColor: "#ef4444"
  },
  {
    id: "send",
    name: "SendIcon",
    category: "utility",
    description: "Sleek 3D paper plane model with aerodynamic creased wings",
    Component: SendIcon,
    color: "#6366f1",
    accentColor: "#3b82f6"
  },
  {
    id: "target",
    name: "TargetIcon",
    category: "utility",
    description: "Concentric bullseye target rings pierced by a sharp angled arrow",
    Component: TargetIcon,
    color: "#ef4444",
    accentColor: "#f59e0b"
  },
  {
    id: "edit",
    name: "EditIcon",
    category: "utility",
    description: "Classic hexagonal wooden pencil with a gold metal band and pink eraser",
    Component: EditIcon,
    color: "#eab308",
    accentColor: "#fed7aa"
  },
  {
    id: "phone",
    name: "PhoneIcon",
    category: "utility",
    description: "Smooth telephone receiver handset with glossy sound caps",
    Component: PhoneIcon,
    color: "#10b981",
    accentColor: "#cbd5e1"
  },
  {
    id: "book",
    name: "BookIcon",
    category: "utility",
    description: "Thick closed hardcover binder featuring cream-colored inner pages",
    Component: BookIcon,
    color: "#e11d48",
    accentColor: "#fda4af"
  },
  {
    id: "link",
    name: "LinkIcon",
    category: "utility",
    description: "Two interlocking rounded metallic chain links rotated 90 degrees",
    Component: LinkIcon,
    color: "#71717a",
    accentColor: "#cbd5e1"
  },
  {
    id: "crown",
    name: "CrownIcon",
    category: "utility",
    description: "Shiny golden royal headpiece adorned with colored diamond gems",
    Component: CrownIcon,
    color: "#d4af37",
    accentColor: "#fbbf24"
  },
  {
    id: "pin",
    name: "PinIcon",
    category: "utility",
    description: "Glossy map pushpin tack with a sharp steel pointer needle",
    Component: PinIcon,
    color: "#ef4444",
    accentColor: "#fb7185"
  },
  {
    id: "flag",
    name: "FlagIcon",
    category: "utility",
    description: "Waving rectangular banner attached to a sleek metal flagpole",
    Component: FlagIcon,
    color: "#8b5cf6",
    accentColor: "#a78bfa"
  },
  {
    id: "briefcase",
    name: "BriefcaseIcon",
    category: "utility",
    description: "Beveled business luggage suitcase with dual metal lock latches",
    Component: BriefcaseIcon,
    color: "#b45309",
    accentColor: "#f59e0b"
  },
  {
    id: "eye",
    name: "EyeIcon",
    category: "utility",
    description: "Stylized visual organ eyeball with glossy colored iris and pupil",
    Component: EyeIcon,
    color: "#0ea5e9",
    accentColor: "#a855f7"
  },
  {
    id: "tag",
    name: "TagIcon",
    category: "utility",
    description: "Angled merchandise label card featuring string attachment cord",
    Component: TagIcon,
    color: "#ec4899",
    accentColor: "#fb7185"
  },
  {
    id: "coffee",
    name: "CoffeeIcon",
    category: "utility",
    description: "Classic ceramic cylinder drinking mug showing hot steam ripples",
    Component: CoffeeIcon,
    color: "#ea580c",
    accentColor: "#fed7aa"
  },
  {
    id: "share",
    name: "ShareIcon",
    category: "utility",
    description: "Linked node diagram layout displaying circular junction hubs",
    Component: ShareIcon,
    color: "#6366f1",
    accentColor: "#818cf8"
  },
  {
    id: "layers",
    name: "LayersIcon",
    category: "storage",
    description: "Three overlapping stacked semitransparent layout planes",
    Component: LayersIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "sparkles",
    name: "SparklesIcon",
    category: "utility",
    description: "Magical group configuration of three four-pointed stars",
    Component: SparklesIcon,
    color: "#eab308",
    accentColor: "#fbbf24"
  },
  {
    id: "megaphone",
    name: "MegaphoneIcon",
    category: "utility",
    description: "Loud voice amplifier speaker cone featuring handle grip support",
    Component: MegaphoneIcon,
    color: "#ef4444",
    accentColor: "#f43f5e"
  },
  {
    id: "download",
    name: "DownloadIcon",
    category: "utility",
    description: "Downward pointing indicator arrow nested inside wall storage base",
    Component: DownloadIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "upload",
    name: "UploadIcon",
    category: "utility",
    description: "Upward pointing indicator arrow nested inside wall storage base",
    Component: UploadIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "code",
    name: "CodeIcon",
    category: "utility",
    description: "Sleek beveled HTML code tag brackets with a floating diagonal slash",
    Component: CodeIcon,
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "terminal",
    name: "TerminalIcon",
    category: "utility",
    description: "Charming terminal command window prompt complete with title bar and cursor block",
    Component: TerminalIcon,
    color: "#10b981",
    accentColor: "#020617"
  },
  {
    id: "git",
    name: "GitIcon",
    category: "utility",
    description: "Extruded git branch diagram on a tilted diamond status board",
    Component: GitIcon,
    color: "#f43f5e",
    accentColor: "#ffffff"
  },
  {
    id: "monitor",
    name: "MonitorIcon",
    category: "hardware",
    description: "Sleek modern display screen bezel resting on a metal neck and base",
    Component: MonitorIcon,
    color: "#06b6d4",
    accentColor: "#3b82f6"
  },
  {
    id: "keyboard",
    name: "KeyboardIcon",
    category: "hardware",
    description: "Slanted keyboard deck plate populated with individual Key caps",
    Component: KeyboardIcon,
    color: "#6366f1",
    accentColor: "#a855f7"
  },
  {
    id: "mouse",
    name: "MouseIcon",
    category: "hardware",
    description: "Computer mouse model with central scroll wheel and button slots",
    Component: MouseIcon,
    color: "#10b981",
    accentColor: "#cbd5e1"
  },
  {
    id: "harddrive",
    name: "HardDriveIcon",
    category: "hardware",
    description: "Solid storage drive plate featuring spindle cover and indicators",
    Component: HardDriveIcon,
    color: "#71717a",
    accentColor: "#94a3b8"
  },
  {
    id: "printer",
    name: "PrinterIcon",
    category: "hardware",
    description: "Chassis scanner bed printer with active paper output tray sheet",
    Component: PrinterIcon,
    color: "#64748b",
    accentColor: "#cbd5e1"
  },
  {
    id: "speaker",
    name: "SpeakerIcon",
    category: "hardware",
    description: "Cabinet media loudspeaker baffle featuring double cones and active signal arcs",
    Component: SpeakerIcon,
    color: "#71717a",
    accentColor: "#818cf8"
  },
  {
    id: "glassmorphism",
    name: "GlassmorphismIcon",
    category: "utility",
    description: "Concept overlay of a floating frosted glass plate and geometric backdrops",
    Component: GlassmorphismIcon,
    color: "#ffffff",
    accentColor: "#ec4899"
  },
  {
    id: "github",
    name: "GithubIcon",
    category: "brands",
    description: "Sleek extruded silhouette of Octocat logo badge",
    Component: GithubIcon,
    color: "#24292e",
    accentColor: "#6e5494"
  },
  {
    id: "twitter",
    name: "TwitterIcon",
    category: "brands",
    description: "Extruded geometric X logo outline on a glossy glass backplate",
    Component: TwitterIcon,
    color: "#1da1f2",
    accentColor: "#0f1419"
  },
  {
    id: "google",
    name: "GoogleIcon",
    category: "brands",
    description: "Rotational beveled circular G emblem segmented in brand colors",
    Component: GoogleIcon,
    color: "#4285f4",
    accentColor: "#ea4335"
  },
  {
    id: "figma",
    name: "FigmaIcon",
    category: "brands",
    description: "Five layered signature brand-color circles stacked vertically in 3D",
    Component: FigmaIcon,
    color: "#f24e1e",
    accentColor: "#a259ff"
  },
  {
    id: "router",
    name: "RouterIcon",
    category: "networking",
    description: "Procedural network router model with rear antennas and signal wave arcs",
    Component: RouterIcon,
    color: "#06b6d4",
    accentColor: "#10b981"
  },
  {
    id: "server",
    name: "ServerIcon",
    category: "networking",
    description: "Vertical metal server cabinet featuring three stacked blade slots and LEDs",
    Component: ServerIcon,
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "ethernet",
    name: "EthernetIcon",
    category: "networking",
    description: "Extruded transparent RJ45 plug connector with detailed gold contact pins and locking lever",
    Component: EthernetIcon,
    color: "#3b82f6",
    accentColor: "#d4af37"
  },
  {
    id: "satellite",
    name: "SatelliteIcon",
    category: "networking",
    description: "Central communications satellite body featuring solar panel wings and antenna dish",
    Component: SatelliteIcon,
    color: "#06b6d4",
    accentColor: "#4f46e5"
  },
  {
    id: "wrench",
    name: "WrenchIcon",
    category: "mechanics",
    description: "Combination double-head wrench key angled in 3D space",
    Component: WrenchIcon,
    color: "#94a3b8",
    accentColor: "#475569"
  },
  {
    id: "bolt",
    name: "BoltIcon",
    category: "mechanics",
    description: "Hexagonal bolt fastener head with a detailed spiral thread shaft",
    Component: BoltIcon,
    color: "#71717a",
    accentColor: "#cbd5e1"
  },
  {
    id: "hammer",
    name: "HammerIcon",
    category: "mechanics",
    description: "Extruded steel claw hammer head with a rubber-sleeved grip handle",
    Component: HammerIcon,
    color: "#cbd5e1",
    accentColor: "#f59e0b"
  },
  {
    id: "screwdriver",
    name: "ScrewdriverIcon",
    category: "mechanics",
    description: "Classic flathead screwdriver with fluted grip handle and steel shaft",
    Component: ScrewdriverIcon,
    color: "#cbd5e1",
    accentColor: "#6366f1"
  },
  {
    id: "nut",
    name: "NutIcon",
    category: "mechanics",
    description: "Hexagonal threaded locknut fastener with concentric inner coil details",
    Component: NutIcon,
    color: "#94a3b8",
    accentColor: "#475569"
  },
  {
    id: "smile",
    name: "SmileIcon",
    category: "emojies",
    description: "Classic happy face emoji disk featuring R3F beveled smile shapes",
    Component: SmileIcon,
    color: "#f59e0b",
    accentColor: "#f43f5e"
  },
  {
    id: "frown",
    name: "FrownIcon",
    category: "emojies",
    description: "Classic sad face emoji disk featuring down-curved R3F torus mouth",
    Component: FrownIcon,
    color: "#f59e0b",
    accentColor: "#f43f5e"
  },
  {
    id: "hearteyes",
    name: "HeartEyesIcon",
    category: "emojies",
    description: "Smiley face emoji featuring dual 3D heart-shaped eye geometry meshes",
    Component: HeartEyesIcon,
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "barchart",
    name: "BarChartIcon",
    category: "utility",
    description: "Three ascending 3D bar chart columns on a glowing base plate",
    Component: BarChartIcon,
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "check",
    name: "CheckIcon",
    category: "utility",
    description: "Bold glowing 3D checkmark on a beveled circular disc backing",
    Component: CheckIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "container",
    name: "ContainerIcon",
    category: "systems",
    description: "Corrugated cargo shipping container representing Docker deployments",
    Component: ContainerIcon,
    color: "#2496ed",
    accentColor: "#f59e0b"
  },
  {
    id: "shieldcheck",
    name: "ShieldCheckIcon",
    category: "utility",
    description: "Security shield with embedded verified checkmark for trusted payment and security UIs",
    Component: ShieldCheckIcon,
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "react",
    name: "ReactIcon",
    category: "brands",
    description: "Three-orbital atomic React logo with glowing nucleus sphere",
    Component: ReactIcon,
    color: "#61dafb",
    accentColor: "#20232a"
  },
  {
    id: "node",
    name: "NodeIcon",
    category: "brands",
    description: "Hexagonal Node.js badge with inner circuit trace details",
    Component: NodeIcon,
    color: "#68a063",
    accentColor: "#3c873a"
  }
];

const CATEGORIES = ["all", "storage", "systems", "hardware", "networking", "mechanics", "brands", "emojies", "utility"] as const;

export const Landing: React.FC<LandingProps> = ({ theme, search }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("all");

  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestIconName, setRequestIconName] = useState(search || "");
  const [requestCategory, setRequestCategory] = useState("utility");
  const [requestDetails, setRequestDetails] = useState("");
  const [requestEmail, setRequestEmail] = useState("");

  // Sync suggestion field with search input
  useEffect(() => {
    setRequestIconName(search);
  }, [search]);

  const filteredIcons = ICONS_REGISTRY.filter(icon => {
    const matchesSearch = 
      icon.name.toLowerCase().includes(search.toLowerCase()) || 
      icon.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || icon.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">

        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-6">
          {CATEGORIES.map(category => {
            const translationKey = `category_${category}` as TranslationKey;
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20"
                    : "bg-zinc-100 dark:bg-[#0e111a] hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800"
                }`}
              >
                {t(translationKey)}
              </button>
            );
          })}
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filteredIcons.map(icon => (
            <IconCard
              key={icon.id}
              id={icon.id}
              name={icon.name}
              Component={icon.Component}
              color={icon.color}
              accentColor={icon.accentColor}
              theme={theme}
            />
          ))}

          {filteredIcons.length === 0 && (
            <div className="col-span-full py-12 px-6 flex flex-col items-center justify-center text-center text-zinc-400 dark:text-zinc-500 gap-6 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl bg-zinc-50/50 dark:bg-[#090d16]/30 backdrop-blur-sm max-w-md mx-auto w-full">
              <div className="flex flex-col items-center gap-1.5">
                <HelpCircle size={40} className="stroke-1 text-indigo-500 animate-pulse" />
                <h3 className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                  Can't find the icon you need?
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Submit a request and our modeling team will design it!
                </p>
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
    </div>
  );
};
