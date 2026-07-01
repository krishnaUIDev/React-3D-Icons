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
  NodeIcon,
  AnchorIcon,
  DiamondIcon,
  FilterIcon,
  PipelineIcon,
  RefreshIcon,
  WebhookIcon,
  PlusIcon,
  MinusIcon,
  CloseIcon,
  InfoIcon,
  AlertCircleIcon,
  LetterIcon,
  BugIcon,
  FlaskIcon,
  PieChartIcon,
  FlameIcon,
  ActivityIcon,
  GraduationCapIcon,
  TrendingUpIcon,
  InstagramIcon,
  PackageIcon,
  AirplaneIcon,
  BatteryIcon,
  VideoIcon,
  MicrophoneIcon,
  SlidersIcon,
  MapIcon,
  UmbrellaIcon,
  ScissorsIcon,
  UnlockIcon,
  ArchiveIcon,
  ShieldAlertIcon,
  EyeOffIcon,
  UserPlusIcon,
  TrendingDownIcon,
  CopyIcon,
  GaugeIcon,
  MagnetIcon,
  StackIcon,
  WorkflowIcon,
  TopologyIcon,
  FileIcon,
  HeadphonesIcon,
  MoonIcon,
  PaperclipIcon,
  BookmarkIcon,
  CloudLightningIcon,
  FolderOpenIcon,
  VolumeIcon,
  BellOffIcon,
  SunMoonIcon,
  PistonIcon,
  SpringIcon,
  AnvilIcon,
  HookIcon,
  TurbineIcon,
  PliersIcon,
  DrillIcon,
  HacksawIcon,
  TapeMeasureIcon,
  CaliperIcon,
  SpiritLevelIcon,
  SledgehammerIcon,
  PhoneMobileIcon,
  TabletIcon,
  LaptopIcon,
  SmartWatchIcon,
  RouterWifiIcon,
  ServerRackIcon,
  HardDriveExternalIcon,
  WebcamIcon,
  ChiselIcon,
  CrowbarIcon,
  FunnelIcon,
  OilCanIcon,
  BearingIcon,
  PulleyIcon,
  SprocketIcon,
  ProjectorIcon,
  GameConsoleIcon,
  VRHeadsetIcon,
  SmartSpeakerIcon,
  PowerBankIcon,
  UsbDriveIcon,
  MotherboardIcon,
  RamStickIcon,
  CrankIcon,
  CamshaftIcon,
  DriveShaftIcon,
  ValveIcon,
  PropellerIcon,
  HelicopterRotorIcon,
  HydraulicJackIcon,
  GpuIcon,
  PowerSupplyIcon,
  NetworkSwitchIcon,
  SmartPlugIcon,
  SmartBulbIcon,
  SecurityCameraIcon,
  SmartLockIcon,
  ThermostatIcon,
  GClampIcon,
  ViceIcon,
  GreaseGunIcon,
  GearboxIcon,
  DifferentialIcon,
  SuspensionIcon,
  WindlassIcon,
  EarbudsIcon,
  SmartRingIcon,
  DrawingTabletIcon,
  BarcodeScannerIcon,
  POSRegisterIcon,
  CalculatorIcon,
  RemoteControlIcon,
  SoundbarIcon,
  JackhammerIcon,
  SolderingIronIcon,
  BlowtorchIcon,
  WheelbarrowIcon,
  PlumbBobIcon,
  ShearsIcon,
  WireStripperIcon,
  PipeWrenchIcon,
  FloppyDiskIcon,
  TapeCassetteIcon,
  CompactDiscIcon,
  TvIcon,
  RadioIcon,
  WalkieTalkieIcon,
  HeadsetIcon,
  FishIcon,
  ButterflyIcon,
  BirdIcon,
  CatIcon,
  DogIcon,
  RabbitIcon,
  ElephantIcon,
  OwlIcon,
  TurtleIcon,
  DolphinIcon,
  RoseIcon,
  SunflowerIcon,
  TulipIcon,
  LotusIcon,
  DaisyIcon,
  HibiscusIcon,
  OrchidIcon,
  LilyIcon,
  CactusIcon,
  LavenderIcon,
  CloudRainIcon,
  CloudSnowIcon,
  WindIcon,
  TornadoIcon,
  SnowflakeIcon,
  RainbowIcon,
  ThermometerIcon,
  LeafIcon,
  TreeIcon,
  HurricaneIcon,
  BurgerIcon,
  PizzaIcon,
  AppleIcon,
  BananaIcon,
  CakeIcon,
  IceCreamIcon,
  DonutIcon,
  PopcornIcon,
  WatermelonIcon,
  CookieIcon,
  SafeIcon,
  GoldBarsIcon,
  ScaleIcon,
  BanknoteIcon,
  EuroIcon,
  YenIcon,
  PoundIcon,
  AtomIcon,
  DNAIcon,
  MicroscopeIcon,
  TelescopeIcon,
  BeakerIcon,
  BankIcon,
  CoinIcon,
  PiggyBankIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ReceiptIcon
} from "r3d-icons";
import { TranslationKey } from "../i18n/translations";


interface LandingProps {
  theme: "light" | "dark";
  search: string;
}

const ICONS_REGISTRY = [
  {
    id: "plus",
    name: "PlusIcon",
    category: "utility",
    description: "3D mathematical plus sign composed of two intersecting cylinders",
    Component: PlusIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "minus",
    name: "MinusIcon",
    category: "utility",
    description: "3D horizontal minus cylinder bar with glowing status caps",
    Component: MinusIcon,
    color: "#6b7280",
    accentColor: "#9ca3af"
  },
  {
    id: "close",
    name: "CloseIcon",
    category: "utility",
    description: "3D close cross sign composed of two diagonal intersecting cylinders",
    Component: CloseIcon,
    color: "#ef4444",
    accentColor: "#f87171"
  },
  {
    id: "info",
    name: "InfoIcon",
    category: "utility",
    description: "3D lowercase letter i inside a circular ring with glowing accent dot",
    Component: InfoIcon,
    color: "#3b82f6",
    accentColor: "#60a5fa"
  },
  {
    id: "alertcircle",
    name: "AlertCircleIcon",
    category: "utility",
    description: "3D exclamation point inside a circular ring with glowing warning dot",
    Component: AlertCircleIcon,
    color: "#f59e0b",
    accentColor: "#fbbf24"
  },
  {
    id: "anchor",
    name: "AnchorIcon",
    category: "utility",
    description: "Maritime physical anchor with upper stock bar and bottom crescent flukes",
    Component: AnchorIcon,
    color: "#475569",
    accentColor: "#f43f5e"
  },
  {
    id: "diamond",
    name: "DiamondIcon",
    category: "utility",
    description: "Gemstone cut diamond with bevel facet edges and metal girdle belt",
    Component: DiamondIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "filter",
    name: "FilterIcon",
    category: "utility",
    description: "Conical liquid funnel filter showing internal tray and bottom droplet",
    Component: FilterIcon,
    color: "#f43f5e",
    accentColor: "#38bdf8"
  },
  {
    id: "pipeline",
    name: "PipelineIcon",
    category: "networking",
    description: "Multi-joint physical network flow pipelines with central control valve wheel",
    Component: PipelineIcon,
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "refresh",
    name: "RefreshIcon",
    category: "utility",
    description: "Dual symmetrical circular arrows in continuous sync loop motion",
    Component: RefreshIcon,
    color: "#8b5cf6",
    accentColor: "#ec4899"
  },
  {
    id: "webhook",
    name: "WebhookIcon",
    category: "networking",
    description: "Forked merge network connector showing 3 terminal spheres and status bulbs",
    Component: WebhookIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
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
  },
  {
    id: "bug",
    name: "BugIcon",
    category: "utility",
    description: "3D software bug model with segmented body, glowing eyes and legs",
    Component: BugIcon,
    color: "#475569",
    accentColor: "#ef4444"
  },
  {
    id: "flask",
    name: "FlaskIcon",
    category: "utility",
    description: "3D chemistry science lab flask containing glowing fluid and rising bubbles",
    Component: FlaskIcon,
    color: "#4f46e5",
    accentColor: "#a855f7"
  },
  {
    id: "piechart",
    name: "PieChartIcon",
    category: "utility",
    description: "3D circular pie chart divided into three distinct colored proportional wedges",
    Component: PieChartIcon,
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "flame",
    name: "FlameIcon",
    category: "utility",
    description: "3D layered organic fire flame showing warm red, orange, and yellow cores",
    Component: FlameIcon,
    color: "#f97316",
    accentColor: "#ef4444"
  },
  {
    id: "activity",
    name: "ActivityIcon",
    category: "systems",
    description: "3D medical heartbeat ECG monitor line with glowing joint beads",
    Component: ActivityIcon,
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "graduationcap",
    name: "GraduationCapIcon",
    category: "utility",
    description: "3D academic graduation mortarboard cap with golden hanging tassel",
    Component: GraduationCapIcon,
    color: "#3f3f46",
    accentColor: "#eab308"
  },
  {
    id: "trendingup",
    name: "TrendingUpIcon",
    category: "utility",
    description: "3D line chart arrow showing rising analytics growth and trend trajectory",
    Component: TrendingUpIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "instagram",
    name: "InstagramIcon",
    category: "brands",
    description: "3D Instagram brand mark camera lens with metallic ring and golden flash",
    Component: InstagramIcon,
    color: "#e1306c",
    accentColor: "#f77737"
  },
  {
    id: "package",
    name: "PackageIcon",
    category: "storage",
    description: "3D cardboard box storage packaging parcel with glowing tape overlay",
    Component: PackageIcon,
    color: "#b45309",
    accentColor: "#38bdf8"
  },
  {
    id: "airplane",
    name: "AirplaneIcon",
    category: "utility",
    description: "Sleek 3D aircraft with swept-back wings, dual underwing engines, and detailed tail fins",
    Component: AirplaneIcon,
    color: "#0ea5e9",
    accentColor: "#f43f5e"
  },
  {
    id: "battery",
    name: "BatteryIcon",
    category: "hardware",
    description: "3D battery cylinder featuring transparent outer casing and glowing green energy charge indicator cells",
    Component: BatteryIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "video",
    name: "VideoIcon",
    category: "utility",
    description: "3D cinema video camera with physical casing, concentric focus lens, and side-mounted display panel",
    Component: VideoIcon,
    color: "#8b5cf6",
    accentColor: "#ec4899"
  },
  {
    id: "microphone",
    name: "MicrophoneIcon",
    category: "utility",
    description: "3D recording studio microphone capsule mounted on vertical desktop swivel base",
    Component: MicrophoneIcon,
    color: "#ec4899",
    accentColor: "#3b82f6"
  },
  {
    id: "sliders",
    name: "SlidersIcon",
    category: "utility",
    description: "3D control dashboard sliders showing vertical track rods and slider level nodes with glowing indicators",
    Component: SlidersIcon,
    color: "#6366f1",
    accentColor: "#f59e0b"
  },
  {
    id: "map",
    name: "MapIcon",
    category: "utility",
    description: "3D folded accordion map with road lines and a glowing location pin",
    Component: MapIcon,
    color: "#10b981",
    accentColor: "#f43f5e"
  },
  {
    id: "umbrella",
    name: "UmbrellaIcon",
    category: "utility",
    description: "3D open umbrella canopy with a central steel shaft and J-hook handle",
    Component: UmbrellaIcon,
    color: "#0ea5e9",
    accentColor: "#ec4899"
  },
  {
    id: "scissors",
    name: "ScissorsIcon",
    category: "utility",
    description: "3D scissors with crossing blades, pivot screw, and grip loops",
    Component: ScissorsIcon,
    color: "#f59e0b",
    accentColor: "#3b82f6"
  },
  {
    id: "unlock",
    name: "UnlockIcon",
    category: "utility",
    description: "3D open lock featuring a physical body base and rotated shackle",
    Component: UnlockIcon,
    color: "#eab308",
    accentColor: "#22c55e"
  },
  {
    id: "archive",
    name: "ArchiveIcon",
    category: "storage",
    description: "3D archive cabinet with sliding drawer panels and metal pulls",
    Component: ArchiveIcon,
    color: "#a855f7",
    accentColor: "#ec4899"
  },
  {
    id: "shieldalert",
    name: "ShieldAlertIcon",
    category: "utility",
    description: "3D guard shield with a central vertical exclamation warning symbol",
    Component: ShieldAlertIcon,
    color: "#475569",
    accentColor: "#ef4444"
  },
  {
    id: "eyeoff",
    name: "EyeOffIcon",
    category: "utility",
    description: "3D eyeball Crossed out by a front-diagonal slash bar indicating hidden state",
    Component: EyeOffIcon,
    color: "#6366f1",
    accentColor: "#ef4444"
  },
  {
    id: "userplus",
    name: "UserPlusIcon",
    category: "utility",
    description: "3D user body profile alongside a floating plus sign badge representing user addition",
    Component: UserPlusIcon,
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "trendingdown",
    name: "TrendingDownIcon",
    category: "utility",
    description: "3D line chart arrow pointing downwards indicating negative trend metrics",
    Component: TrendingDownIcon,
    color: "#ef4444",
    accentColor: "#fb7185"
  },
  {
    id: "copy",
    name: "CopyIcon",
    category: "utility",
    description: "3D overlapping duplicate document sheets with horizontal glowing layout lines",
    Component: CopyIcon,
    color: "#06b6d4",
    accentColor: "#22d3ee"
  },
  {
    id: "gauge",
    name: "GaugeIcon",
    category: "mechanics",
    description: "3D dial gauge speedometer with tick marks and a rotating pointer needle",
    Component: GaugeIcon,
    color: "#64748b",
    accentColor: "#ef4444"
  },
  {
    id: "magnet",
    name: "MagnetIcon",
    category: "mechanics",
    description: "3D horseshoe magnet with polar colored ends and floating force-field rings",
    Component: MagnetIcon,
    color: "#71717a",
    accentColor: "#ef4444"
  },
  {
    id: "stack",
    name: "StackIcon",
    category: "systems",
    description: "3D stack of database slabs with glowing illuminated spacer layers",
    Component: StackIcon,
    color: "#4f46e5",
    accentColor: "#10b981"
  },
  {
    id: "workflow",
    name: "WorkflowIcon",
    category: "systems",
    description: "3D process flowchart hierarchy showing root node connected to child nodes",
    Component: WorkflowIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "topology",
    name: "TopologyIcon",
    category: "systems",
    description: "3D hub-and-spoke network diagram with central hub and satellite nodes",
    Component: TopologyIcon,
    color: "#06b6d4",
    accentColor: "#10b981"
  },
  {
    id: "file",
    name: "FileIcon",
    category: "utility",
    description: "3D document page sheet with folded corner and glowing text lines",
    Component: FileIcon,
    color: "#64748b",
    accentColor: "#ef4444"
  },
  {
    id: "headphones",
    name: "HeadphonesIcon",
    category: "utility",
    description: "Sleek 3D over-ear music headphones with soft earcups and metallic sliders",
    Component: HeadphonesIcon,
    color: "#4f46e5",
    accentColor: "#3b82f6"
  },
  {
    id: "moon",
    name: "MoonIcon",
    category: "utility",
    description: "Glossy 3D crescent moon with floating yellow night-sky stars",
    Component: MoonIcon,
    color: "#a855f7",
    accentColor: "#f59e0b"
  },
  {
    id: "paperclip",
    name: "PaperclipIcon",
    category: "utility",
    description: "Looping 3D metallic paperclip attachment wireframe with red status band",
    Component: PaperclipIcon,
    color: "#94a3b8",
    accentColor: "#ef4444"
  },
  {
    id: "bookmark",
    name: "BookmarkIcon",
    category: "utility",
    description: "Hanging 3D ribbon bookmark tab with metallic mounting loop and grommet",
    Component: BookmarkIcon,
    color: "#e11d48",
    accentColor: "#ef4444"
  },
  {
    id: "cloudlightning",
    name: "CloudLightningIcon",
    category: "systems",
    description: "3D fluffy weather data cloud with a central glowing lightning bolt",
    Component: CloudLightningIcon,
    color: "#0ea5e9",
    accentColor: "#fbbf24"
  },
  {
    id: "folderopen",
    name: "FolderOpenIcon",
    category: "storage",
    description: "3D open folder container with nesting document sheet panels",
    Component: FolderOpenIcon,
    color: "#f59e0b",
    accentColor: "#10b981"
  },
  {
    id: "volume",
    name: "VolumeIcon",
    category: "hardware",
    description: "3D audio speaker cone with glowing concentric audio wave arcs",
    Component: VolumeIcon,
    color: "#6366f1",
    accentColor: "#3b82f6"
  },
  {
    id: "belloff",
    name: "BellOffIcon",
    category: "utility",
    description: "3D notification alert bell crossed out by a front diagonal slash bar",
    Component: BellOffIcon,
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "sunmoon",
    name: "SunMoonIcon",
    category: "systems",
    description: "3D hybrid sun sphere and overlapping crescent moon mode switcher",
    Component: SunMoonIcon,
    color: "#6366f1",
    accentColor: "#f59e0b"
  },
  {
    id: "piston",
    name: "PistonIcon",
    category: "mechanics",
    description: "3D engine piston chamber with glowing rings and moving connecting rod",
    Component: PistonIcon,
    color: "#71717a",
    accentColor: "#10b981"
  },
  {
    id: "spring",
    name: "SpringIcon",
    category: "mechanics",
    description: "3D helical suspension coil spring with glowing top and bottom attachment loops",
    Component: SpringIcon,
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "anvil",
    name: "AnvilIcon",
    category: "mechanics",
    description: "3D blacksmith forged anvil body with a horn, deck, and glowing metal bar",
    Component: AnvilIcon,
    color: "#4b5563",
    accentColor: "#f97316"
  },
  {
    id: "hook",
    name: "HookIcon",
    category: "mechanics",
    description: "3D heavy crane lifting hook with warning pulley housing and swivel axle",
    Component: HookIcon,
    color: "#475569",
    accentColor: "#f59e0b"
  },
  {
    id: "turbine",
    name: "TurbineIcon",
    category: "mechanics",
    description: "3D mechanical wind turbine propeller with angled pitch blades and central hub",
    Component: TurbineIcon,
    color: "#64748b",
    accentColor: "#06b6d4"
  },
  {
    id: "pliers",
    name: "PliersIcon",
    category: "mechanics",
    description: "3D double-handle hand pliers with rubberized grip sleeves and textured jaws",
    Component: PliersIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "drill",
    name: "DrillIcon",
    category: "mechanics",
    description: "3D cordless power drill with motor housing barrel, battery pack, and steel chuck",
    Component: DrillIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "hacksaw",
    name: "HacksawIcon",
    category: "mechanics",
    description: "3D metal cutting hacksaw with a steel frame rod, blade, and D-shaped grip",
    Component: HacksawIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "tapemeasure",
    name: "TapeMeasureIcon",
    category: "mechanics",
    description: "3D pocket tape measure with bumper guard casing, extended steel blade, and lock switch",
    Component: TapeMeasureIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "caliper",
    name: "CaliperIcon",
    category: "mechanics",
    description: "3D precision vernier caliper slide gauge with measuring jaws and depth rod",
    Component: CaliperIcon,
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "spiritlevel",
    name: "SpiritLevelIcon",
    category: "mechanics",
    description: "3D builder bubble level bar featuring horizontal and vertical indicator vials",
    Component: SpiritLevelIcon,
    color: "#64748b",
    accentColor: "#22c55e"
  },
  {
    id: "sledgehammer",
    name: "SledgehammerIcon",
    category: "mechanics",
    description: "3D heavy demolition sledgehammer head with fiberglass shaft and rubber grip",
    Component: SledgehammerIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "phonemobile",
    name: "PhoneMobileIcon",
    category: "hardware",
    description: "3D bezel-less mobile smartphone screen with camera punch and desktop widgets",
    Component: PhoneMobileIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "tablet",
    name: "TabletIcon",
    category: "hardware",
    description: "3D display tablet screen with bezel borders and floating overlay widgets",
    Component: TabletIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "laptop",
    name: "LaptopIcon",
    category: "hardware",
    description: "3D open laptop deck with raised keyboard rows, trackpad, and angled display screen",
    Component: LaptopIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "smartwatch",
    name: "SmartWatchIcon",
    category: "hardware",
    description: "3D smartwatch housing featuring glass watch face screen and wrapping strap bands",
    Component: SmartWatchIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "routerwifi",
    name: "RouterWifiIcon",
    category: "hardware",
    description: "3D home broadband internet wifi router base with dual vertical antennas",
    Component: RouterWifiIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "serverrack",
    name: "ServerRackIcon",
    category: "hardware",
    description: "3D enterprise datacenter server cabinet with stacked server drawers and LED indicators",
    Component: ServerRackIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "harddriveexternal",
    name: "HardDriveExternalIcon",
    category: "hardware",
    description: "3D portable external backup hard drive block with side rubber bumper guards",
    Component: HardDriveExternalIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "webcam",
    name: "WebcamIcon",
    category: "hardware",
    description: "3D spherical desktop webcam with lens bezel, aperture glass, and mounting stand clamp",
    Component: WebcamIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "chisel",
    name: "ChiselIcon",
    category: "mechanics",
    description: "3D octagonal wood chisel tool with beveled steel tip, metal tang, and glowing accent bolster",
    Component: ChiselIcon,
    color: "#78350f",
    accentColor: "#10b981"
  },
  {
    id: "crowbar",
    name: "CrowbarIcon",
    category: "mechanics",
    description: "3D bent steel crowbar pry rod with split claw head, wedge tip, and glowing accent split",
    Component: CrowbarIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "funnel",
    name: "FunnelIcon",
    category: "mechanics",
    description: "3D conical fluid funnel with narrow outlet spout, rim loop, and a glowing suspended droplet",
    Component: FunnelIcon,
    color: "#0f766e",
    accentColor: "#10b981"
  },
  {
    id: "oilcan",
    name: "OilCanIcon",
    category: "mechanics",
    description: "3D thumb-pump oil can canister with slanted spout, trigger lever, and glowing fluid drop",
    Component: OilCanIcon,
    color: "#b45309",
    accentColor: "#10b981"
  },
  {
    id: "bearing",
    name: "BearingIcon",
    category: "mechanics",
    description: "3D ball bearing cage assembly with concentric inner/outer rings and spherical steel balls",
    Component: BearingIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "pulley",
    name: "PulleyIcon",
    category: "mechanics",
    description: "3D mechanical pulley block with U-bracket frame, grooved wheel, and guiding wire rope",
    Component: PulleyIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "sprocket",
    name: "SprocketIcon",
    category: "mechanics",
    description: "3D drive sprocket wheel with beveled teeth, central shaft hole, and glowing concentric tracks",
    Component: SprocketIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "projector",
    name: "ProjectorIcon",
    category: "hardware",
    description: "3D table presentation projector with concentric lens, controls pad, and glowing focus ring",
    Component: ProjectorIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "gameconsole",
    name: "GameConsoleIcon",
    category: "hardware",
    description: "3D slim home console stand with side panels, vertical base, and glowing status stripe",
    Component: GameConsoleIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "vrheadset",
    name: "VRHeadsetIcon",
    category: "hardware",
    description: "3D virtual reality goggle headset with front glass shield visor and glowing indicator strip",
    Component: VRHeadsetIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "smartspeaker",
    name: "SmartSpeakerIcon",
    category: "hardware",
    description: "3D assistant smart speaker cylinder with control deck and glowing voice response ring",
    Component: SmartSpeakerIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "powerbank",
    name: "PowerBankIcon",
    category: "hardware",
    description: "3D backup power bank battery brick with USB port slots and glowing status level LEDs",
    Component: PowerBankIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "usbdrive",
    name: "UsbDriveIcon",
    category: "hardware",
    description: "3D flash thumb drive memory key with metal connector plug and glowing keyring loop",
    Component: UsbDriveIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "motherboard",
    name: "MotherboardIcon",
    category: "hardware",
    description: "3D green circuit motherboard board with CPU socket frame, RAM slots, and glowing core",
    Component: MotherboardIcon,
    color: "#065f46",
    accentColor: "#10b981"
  },
  {
    id: "ramstick",
    name: "RamStickIcon",
    category: "hardware",
    description: "3D desktop memory RAM stick module with golden pin edge and glowing top RGB light diffuser",
    Component: RamStickIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "crank",
    name: "CrankIcon",
    category: "mechanics",
    description: "3D offset manual crank arm handle with a pivot sleeve, counterweight, and glowing accent cap",
    Component: CrankIcon,
    color: "#71717a",
    accentColor: "#10b981"
  },
  {
    id: "camshaft",
    name: "CamshaftIcon",
    category: "mechanics",
    description: "3D engine camshaft shaft populated with eccentric cam lobes, journals, and a glowing accent gear",
    Component: CamshaftIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "driveshaft",
    name: "DriveShaftIcon",
    category: "mechanics",
    description: "3D torqued driveshaft rod with double universal joints, weld yokes, and a glowing spider cross",
    Component: DriveShaftIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "valve",
    name: "ValveIcon",
    category: "mechanics",
    description: "3D pipeline fluid control gate valve wheel with a threaded stem and glowing accent ring",
    Component: ValveIcon,
    color: "#4b5563",
    accentColor: "#10b981"
  },
  {
    id: "propeller",
    name: "PropellerIcon",
    category: "mechanics",
    description: "3D marine propeller hub containing three twisted blades, adapter shaft, and glowing nose cap",
    Component: PropellerIcon,
    color: "#78350f",
    accentColor: "#10b981"
  },
  {
    id: "rotor",
    name: "HelicopterRotorIcon",
    category: "mechanics",
    description: "3D multi-blade helicopter rotor hub with control rods, swashplate, and glowing control ring",
    Component: HelicopterRotorIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "hydraulicjack",
    name: "HydraulicJackIcon",
    category: "mechanics",
    description: "3D heavy hydraulic bottle jack cylinder lifting jack with a base plate and glowing accent collar",
    Component: HydraulicJackIcon,
    color: "#ef4444",
    accentColor: "#10b981"
  },
  {
    id: "gpu",
    name: "GpuIcon",
    category: "hardware",
    description: "3D high-end desktop GPU graphics card with triple active fan spinner blades and top RGB glowing strip",
    Component: GpuIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "powersupply",
    name: "PowerSupplyIcon",
    category: "hardware",
    description: "3D boxy ATX power unit with a round fan cooling grille, braided cables, and glowing indicator red switch",
    Component: PowerSupplyIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "networkswitch",
    name: "NetworkSwitchIcon",
    category: "hardware",
    description: "3D rack unit populated with dual rows of RJ45 ports, mount brackets, and glowing status LED panel",
    Component: NetworkSwitchIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "smartplug",
    name: "SmartPlugIcon",
    category: "hardware",
    description: "3D smart wall outlet adapter plug with US receptacle holes and a glowing status power button",
    Component: SmartPlugIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartbulb",
    name: "SmartBulbIcon",
    category: "hardware",
    description: "3D smart RGB LED lightbulb containing a wifi accent ring and glowing inner LED tower",
    Component: SmartBulbIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "securitycamera",
    name: "SecurityCameraIcon",
    category: "hardware",
    description: "3D spherical dome security surveillance lens camera with mount bracket and glowing status LED ring",
    Component: SecurityCameraIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartlock",
    name: "SmartLockIcon",
    category: "hardware",
    description: "3D heavy mechanical cylinder door smart lock with electronic touchpad and glowing status ring",
    Component: SmartLockIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "thermostat",
    name: "ThermostatIcon",
    category: "hardware",
    description: "3D circular smart home climate thermostat dials with digital number readout and glowing accent scale",
    Component: ThermostatIcon,
    color: "#0f172a",
    accentColor: "#10b981"
  },
  {
    id: "gclamp",
    name: "GClampIcon",
    category: "mechanics",
    description: "3D heavy threaded G-clamp frame with a rotatable clamping screw rod and glowing collar guide",
    Component: GClampIcon,
    color: "#4b5563",
    accentColor: "#10b981"
  },
  {
    id: "vice",
    name: "ViceIcon",
    category: "mechanics",
    description: "3D heavy duty workbench jaws vice tool with sliding track guide and glowing hub dial",
    Component: ViceIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "greasegun",
    name: "GreaseGunIcon",
    category: "mechanics",
    description: "3D hand-lever grease injector gun canister with high pressure extension pipe and glowing accent sleeve",
    Component: GreaseGunIcon,
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "gearbox",
    name: "GearboxIcon",
    category: "mechanics",
    description: "3D mechanical gearbox casing enclosure showing meshed cogs and a glowing center indicator",
    Component: GearboxIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "differential",
    name: "DifferentialIcon",
    category: "mechanics",
    description: "3D automotive differential pumpkin gear casing with axle tubes and a glowing perimeter flange",
    Component: DifferentialIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "suspension",
    name: "SuspensionIcon",
    category: "mechanics",
    description: "3D wishbone frame car suspension arm with shock absorber strut and glowing spiral spring coils",
    Component: SuspensionIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "windlass",
    name: "WindlassIcon",
    category: "mechanics",
    description: "3D cable winch windlass drum cylinder with a hand crank, support brackets, and glowing end flange",
    Component: WindlassIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "earbuds",
    name: "EarbudsIcon",
    category: "hardware",
    description: "3D open wireless charging earbuds case with twin nested buds and glowing battery status LED",
    Component: EarbudsIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartring",
    name: "SmartRingIcon",
    category: "hardware",
    description: "3D high gloss titanium smart health tracker ring with glowing exterior sensor crown line",
    Component: SmartRingIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "drawingtablet",
    name: "DrawingTabletIcon",
    category: "hardware",
    description: "3D graphics drawing tablet bezel frame and active canvas screen with a hovering stylus pen",
    Component: DrawingTabletIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "barcodescanner",
    name: "BarcodeScannerIcon",
    category: "hardware",
    description: "3D pistol-trigger barcode laser scanner handle with top rubber guard and red glowing laser window",
    Component: BarcodeScannerIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "posregister",
    name: "POSRegisterIcon",
    category: "hardware",
    description: "3D cashier register terminal display with cash drawer base, printer paper sheet, and pole LCD screen",
    Component: POSRegisterIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "calculator",
    name: "CalculatorIcon",
    category: "hardware",
    description: "3D pocket calculator casing with 4x4 keypad grid, solar strip, and glowing display matrix",
    Component: CalculatorIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "remotecontrol",
    name: "RemoteControlIcon",
    category: "hardware",
    description: "3D TV remote control wand with navigation D-pad disk, number keys, and glowing power switch",
    Component: RemoteControlIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "soundbar",
    name: "SoundbarIcon",
    category: "hardware",
    description: "3D slim audio soundbar horizontal cabinet with front fabric mesh and standing companion subwoofer",
    Component: SoundbarIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "jackhammer",
    name: "JackhammerIcon",
    category: "mechanics",
    description: "3D pneumatic demolition jackhammer with T-handle grip, shock absorber spring, and steel chisel bit",
    Component: JackhammerIcon,
    color: "#e2e8f0",
    accentColor: "#10b981"
  },
  {
    id: "solderingiron",
    name: "SolderingIronIcon",
    category: "mechanics",
    description: "3D pen-style high-temperature soldering iron with grip collar, connection cable, and fine copper tip",
    Component: SolderingIronIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "blowtorch",
    name: "BlowtorchIcon",
    category: "mechanics",
    description: "3D portable welding gas torch cylinder with brass valve knob, angled neck, and glowing jet nozzle",
    Component: BlowtorchIcon,
    color: "#0284c7",
    accentColor: "#10b981"
  },
  {
    id: "wheelbarrow",
    name: "WheelbarrowIcon",
    category: "mechanics",
    description: "3D heavy construction hand push wheelbarrow with deep container tray, support legs, and front rubber wheel",
    Component: WheelbarrowIcon,
    color: "#ea580c",
    accentColor: "#10b981"
  },
  {
    id: "plumbbob",
    name: "PlumbBobIcon",
    category: "mechanics",
    description: "3D suspended conical plumb bob alignment weight with brass cap collar and thin hanging wire",
    Component: PlumbBobIcon,
    color: "#d97706",
    accentColor: "#10b981"
  },
  {
    id: "shears",
    name: "ShearsIcon",
    category: "mechanics",
    description: "3D sheet metal hand shears with double pivot hinge and curved rubber-coated handle loops",
    Component: ShearsIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "wirestripper",
    name: "WireStripperIcon",
    category: "mechanics",
    description: "3D spring-loaded wire insulation stripper plier jaws with metric sizing notches and rubber handle sleeve",
    Component: WireStripperIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "pipewrench",
    name: "PipeWrenchIcon",
    category: "mechanics",
    description: "3D plumber heavy pipe wrench with adjustable hook jaw, thread turn ring, and steel grip handle",
    Component: PipeWrenchIcon,
    color: "#dc2626",
    accentColor: "#10b981"
  },
  {
    id: "floppy",
    name: "FloppyDiskIcon",
    category: "storage",
    description: "3D vintage 3.5 inch floppy diskette with metal sliding shutter casing, write-protect tab, and paper label",
    Component: FloppyDiskIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "tapecassette",
    name: "TapeCassetteIcon",
    category: "storage",
    description: "3D retro audio tape cassette shell case with central sprocket holes and magnetic tape reel spool packs",
    Component: TapeCassetteIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "cd",
    name: "CompactDiscIcon",
    category: "storage",
    description: "3D optical compact disc showing shiny iridescent colors, clear central hub ring, and spindle hole",
    Component: CompactDiscIcon,
    color: "#f1f5f9",
    accentColor: "#10b981"
  },
  {
    id: "tv",
    name: "TvIcon",
    category: "hardware",
    description: "3D flat widescreen television display screen resting on a central column stand and rectangular base",
    Component: TvIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "radio",
    name: "RadioIcon",
    category: "hardware",
    description: "3D retro transistor radio cabinet showing left speaker fabric mesh, horizontal tuning bar, and dials",
    Component: RadioIcon,
    color: "#7c2d12",
    accentColor: "#10b981"
  },
  {
    id: "walkietalkie",
    name: "WalkieTalkieIcon",
    category: "hardware",
    description: "3D wireless handheld walkie-talkie handset with flexible top antenna, volume knob, and side PTT button",
    Component: WalkieTalkieIcon,
    color: "#19222f",
    accentColor: "#10b981"
  },
  {
    id: "headset",
    name: "HeadsetIcon",
    category: "hardware",
    description: "3D call center headset with padded overhead band, left/right earmuff cushions, and a boom microphone",
    Component: HeadsetIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "fish",
    name: "FishIcon",
    category: "emojies",
    description: "3D stylized swimming fish with curved dorsal fins, tail fins, and a glowing scale-band",
    Component: FishIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "butterfly",
    name: "ButterflyIcon",
    category: "emojies",
    description: "3D symmetrical butterfly with upper and lower glass wings, antennae, and glowing inner wing slots",
    Component: ButterflyIcon,
    color: "#d946ef",
    accentColor: "#10b981"
  },
  {
    id: "bird",
    name: "BirdIcon",
    category: "emojies",
    description: "3D aerodynamic flying bird in upstroke wing pose, with glowing beak and wing tip highlights",
    Component: BirdIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "cat",
    name: "CatIcon",
    category: "emojies",
    description: "3D round feline head with pointed ears, whiskers, glowing eyes, and a collar band",
    Component: CatIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "dog",
    name: "DogIcon",
    category: "emojies",
    description: "3D canine head showing floppy ears, protruding snout, round glowing eyes, and a collar tag",
    Component: DogIcon,
    color: "#e2e8f0",
    accentColor: "#10b981"
  },
  {
    id: "rabbit",
    name: "RabbitIcon",
    category: "emojies",
    description: "3D cute rabbit head with long vertical ears, glowing inner ear canals, and a tiny nose snout",
    Component: RabbitIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "elephant",
    name: "ElephantIcon",
    category: "emojies",
    description: "3D stately elephant profile showing raised trunk, large ear plates, and glowing tusks",
    Component: ElephantIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "owl",
    name: "OwlIcon",
    category: "emojies",
    description: "3D owl head showing top tufts, large concentric eye rings with glowing pupils, and beak",
    Component: OwlIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "turtle",
    name: "TurtleIcon",
    category: "emojies",
    description: "3D domed sea turtle shell wrapped in a glowing collar rim, with four flippers and head",
    Component: TurtleIcon,
    color: "#16a34a",
    accentColor: "#10b981"
  },
  {
    id: "dolphin",
    name: "DolphinIcon",
    category: "emojies",
    description: "3D curved dolphin body leaping forward, featuring dorsal fin, tail fluke, and glowing snout tip",
    Component: DolphinIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "rose",
    name: "RoseIcon",
    category: "emojies",
    description: "3D concentric rose petals structure with stem, thorns, and glowing center core",
    Component: RoseIcon,
    color: "#ec4899",
    accentColor: "#10b981"
  },
  {
    id: "sunflower",
    name: "SunflowerIcon",
    category: "emojies",
    description: "3D circular array of yellow pointed petals with a dark seed disc and glowing grid seeds",
    Component: SunflowerIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "tulip",
    name: "TulipIcon",
    category: "emojies",
    description: "3D closed cup tulip blossom with green stem leaf and glowing stamen",
    Component: TulipIcon,
    color: "#f43f5e",
    accentColor: "#10b981"
  },
  {
    id: "lotus",
    name: "LotusIcon",
    category: "emojies",
    description: "3D symmetrical blooming lotus petals layered above a flat water lily pad",
    Component: LotusIcon,
    color: "#f472b6",
    accentColor: "#10b981"
  },
  {
    id: "daisy",
    name: "DaisyIcon",
    category: "emojies",
    description: "3D flat yellow center button with radiating white capsule petals and glowing stamen dots",
    Component: DaisyIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "hibiscus",
    name: "HibiscusIcon",
    category: "emojies",
    description: "3D flared hibiscus petals with a curved central style tube and glowing pollen tips",
    Component: HibiscusIcon,
    color: "#ec4899",
    accentColor: "#10b981"
  },
  {
    id: "orchid",
    name: "OrchidIcon",
    category: "emojies",
    description: "3D exotic asymmetric orchid petals with a center hood and glowing stamen node",
    Component: OrchidIcon,
    color: "#d946ef",
    accentColor: "#10b981"
  },
  {
    id: "lily",
    name: "LilyIcon",
    category: "emojies",
    description: "3D trumpet-like recurved lily petals, green calyx base, and glowing stamen tips",
    Component: LilyIcon,
    color: "#fdf2f8",
    accentColor: "#10b981"
  },
  {
    id: "cactus",
    name: "CactusIcon",
    category: "emojies",
    description: "3D Saguaro cactus silhouette with ribbed trunk, side branches, and glowing spine pins",
    Component: CactusIcon,
    color: "#16a34a",
    accentColor: "#10b981"
  },
  {
    id: "lavender",
    name: "LavenderIcon",
    category: "emojies",
    description: "3D thin green stem with vertically stacked purple flower pod tiers and glowing centers",
    Component: LavenderIcon,
    color: "#a855f7",
    accentColor: "#10b981"
  },
  {
    id: "cloudrain",
    name: "CloudRainIcon",
    category: "systems",
    description: "3D glassmorphic cloud body with falling cylindrical glowing raindrops",
    Component: CloudRainIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "cloudsnow",
    name: "CloudSnowIcon",
    category: "systems",
    description: "3D glassmorphic cloud body with falling glowing spherical snowflakes",
    Component: CloudSnowIcon,
    color: "#0ea5e9",
    accentColor: "#e2e8f0"
  },
  {
    id: "wind",
    name: "WindIcon",
    category: "systems",
    description: "3D horizontal blowing breeze air streams with glowing vector curls",
    Component: WindIcon,
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "tornado",
    name: "TornadoIcon",
    category: "systems",
    description: "3D helical spinning funnel vortex storm with a glowing vertical axis core",
    Component: TornadoIcon,
    color: "#475569",
    accentColor: "#0ea5e9"
  },
  {
    id: "snowflake",
    name: "SnowflakeIcon",
    category: "systems",
    description: "3D six-sided symmetrical crystalline snowflake with a central glowing core",
    Component: SnowflakeIcon,
    color: "#38bdf8",
    accentColor: "#e2e8f0"
  },
  {
    id: "rainbow",
    name: "RainbowIcon",
    category: "systems",
    description: "3D multi-layered arching rainbow with nested semi-toruses and base clouds",
    Component: RainbowIcon,
    color: "#ef4444",
    accentColor: "#06b6d4"
  },
  {
    id: "thermometer",
    name: "ThermometerIcon",
    category: "utility",
    description: "3D temperature gauge cylinder tube with base bulb and glowing red fluid core",
    Component: ThermometerIcon,
    color: "#cbd5e1",
    accentColor: "#ef4444"
  },
  {
    id: "leaf",
    name: "LeafIcon",
    category: "emojies",
    description: "3D organic styled leaf blade with midrib veins and a glowing dewdrop sphere",
    Component: LeafIcon,
    color: "#16a34a",
    accentColor: "#0ea5e9"
  },
  {
    id: "tree",
    name: "TreeIcon",
    category: "emojies",
    description: "3D coniferous pine tree with stacked green cones, trunk, and a glowing peak node",
    Component: TreeIcon,
    color: "#15803d",
    accentColor: "#10b981"
  },
  {
    id: "hurricane",
    name: "HurricaneIcon",
    category: "systems",
    description: "3D symmetrical spiral storm vortex arms around a central glowing eye sphere",
    Component: HurricaneIcon,
    color: "#0284c7",
    accentColor: "#0ea5e9"
  },
  {
    id: "burger",
    name: "BurgerIcon",
    category: "emojies",
    description: "3D stacked burger with buns, sesame seeds, meat patty, cheese, and green lettuce layers",
    Component: BurgerIcon,
    color: "#d97706",
    accentColor: "#eab308"
  },
  {
    id: "pizza",
    name: "PizzaIcon",
    category: "emojies",
    description: "3D triangular pizza slice with cheese, base crust, and glowing red pepperoni discs",
    Component: PizzaIcon,
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "apple",
    name: "AppleIcon",
    category: "emojies",
    description: "3D cleft apple body with top indentation, vertical stem, green leaf, and glowing core seed",
    Component: AppleIcon,
    color: "#ef4444",
    accentColor: "#eab308"
  },
  {
    id: "banana",
    name: "BananaIcon",
    category: "emojies",
    description: "3D partially peeled banana with matte cream core and yellow skin peeling flaps",
    Component: BananaIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "cake",
    name: "CakeIcon",
    category: "emojies",
    description: "3D dual-layer celebration cake with white frosting, rim whipped cream, and glowing candle",
    Component: CakeIcon,
    color: "#ec4899",
    accentColor: "#f59e0b"
  },
  {
    id: "icecream",
    name: "IceCreamIcon",
    category: "emojies",
    description: "3D waffle cone containing a scoop of ice cream with whipped cream and glowing cherry on top",
    Component: IceCreamIcon,
    color: "#f472b6",
    accentColor: "#ef4444"
  },
  {
    id: "donut",
    name: "DonutIcon",
    category: "emojies",
    description: "3D baked ring donut with thick colored frosting glaze and scattered multi-color sprinkles",
    Component: DonutIcon,
    color: "#db2777",
    accentColor: "#eab308"
  },
  {
    id: "popcorn",
    name: "PopcornIcon",
    category: "emojies",
    description: "3D striped popcorn tub overflowing with white and buttery glowing yellow popcorn kernels",
    Component: PopcornIcon,
    color: "#ef4444",
    accentColor: "#eab308"
  },
  {
    id: "watermelon",
    name: "WatermelonIcon",
    category: "emojies",
    description: "3D triangular watermelon wedge showing green rind, white outline, red flesh, and black seeds",
    Component: WatermelonIcon,
    color: "#ef4444",
    accentColor: "#1e293b"
  },
  {
    id: "cookie",
    name: "CookieIcon",
    category: "emojies",
    description: "3D circular baked cookie disc with dark chocolate chips and a central glowing accent chip",
    Component: CookieIcon,
    color: "#ca8a04",
    accentColor: "#10b981"
  },
  {
    id: "safe",
    name: "SafeIcon",
    category: "utility",
    description: "3D steel combination vault safe box with circular combination dial, lever handle, and a glowing node",
    Component: SafeIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "goldbars",
    name: "GoldBarsIcon",
    category: "utility",
    description: "3D stacked gold bars showing trapezoidal shape contours, polished finish, and a glowing end stamp",
    Component: GoldBarsIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "bank",
    name: "BankIcon",
    category: "utility",
    description: "3D classical temple bank building with vertical pillars, foundation steps, and a glowing portal",
    Component: BankIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "coin",
    name: "CoinIcon",
    category: "utility",
    description: "3D ridged gold coin showing raised outer borders and a glowing central currency dollar symbol",
    Component: CoinIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "piggybank",
    name: "PiggyBankIcon",
    category: "utility",
    description: "3D stylized piggy bank featuring a top slot and a glowing gold coin drop entry",
    Component: PiggyBankIcon,
    color: "#f472b6",
    accentColor: "#eab308"
  },
  {
    id: "shoppingbag",
    name: "ShoppingBagIcon",
    category: "utility",
    description: "3D paper shopping bag with rope handles, side crease folds, and a glowing star label badge",
    Component: ShoppingBagIcon,
    color: "#ca8a04",
    accentColor: "#eab308"
  },
  {
    id: "shoppingcart",
    name: "ShoppingCartIcon",
    category: "utility",
    description: "3D metallic shopping cart with support frames, moving wheels, and a glowing gift item inside",
    Component: ShoppingCartIcon,
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "scale",
    name: "ScaleIcon",
    category: "utility",
    description: "3D justice balance scale showing central stand column, balance crossbeam, hanging pans, and glowing pivot",
    Component: ScaleIcon,
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "receipt",
    name: "ReceiptIcon",
    category: "utility",
    description: "3D curved transaction receipt slip with jagged cut edges, printed lines, and a glowing checkmark",
    Component: ReceiptIcon,
    color: "#f8fafc",
    accentColor: "#10b981"
  },
  {
    id: "banknote",
    name: "BanknoteIcon",
    category: "utility",
    description: "3D paper banknote bills stacked together with center strap collar and a glowing coin badge in center",
    Component: BanknoteIcon,
    color: "#16a34a",
    accentColor: "#eab308"
  },
  {
    id: "euro",
    name: "EuroIcon",
    category: "utility",
    description: "3D ridged gold coin showing raised outer borders and a glowing central currency euro symbol",
    Component: EuroIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "yen",
    name: "YenIcon",
    category: "utility",
    description: "3D ridged gold coin showing raised outer borders and a glowing central currency yen symbol",
    Component: YenIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "pound",
    name: "PoundIcon",
    category: "utility",
    description: "3D ridged gold coin showing raised outer borders and a glowing central currency pound symbol",
    Component: PoundIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "atom",
    name: "AtomIcon",
    category: "utility",
    description: "3D Rutherford-Bohr atom model with orbiting electrons and a clustered nucleus",
    Component: AtomIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "dna",
    name: "DNAIcon",
    category: "utility",
    description: "3D winding double-helix structure with connected base pairs",
    Component: DNAIcon,
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "microscope",
    name: "MicroscopeIcon",
    category: "utility",
    description: "3D laboratory microscope featuring adjustable focus knobs and a specimen platform",
    Component: MicroscopeIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "telescope",
    name: "TelescopeIcon",
    category: "utility",
    description: "3D astronomical telescope with refractor main tube on tripod support legs",
    Component: TelescopeIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "beaker",
    name: "BeakerIcon",
    category: "utility",
    description: "3D laboratory beaker containing bubbling liquid volume and measurement markers",
    Component: BeakerIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  // Alphabet icons – generated dynamically A-Z
  ...(() => {
    const LETTER_COLORS: Record<string, string> = {
      A: "#f43f5e", B: "#f97316", C: "#eab308", D: "#84cc16",
      E: "#22c55e", F: "#10b981", G: "#14b8a6", H: "#06b6d4",
      I: "#0ea5e9", J: "#3b82f6", K: "#6366f1", L: "#8b5cf6",
      M: "#a855f7", N: "#d946ef", O: "#ec4899", P: "#f43f5e",
      Q: "#ef4444", R: "#f97316", S: "#f59e0b", T: "#10b981",
      U: "#06b6d4", V: "#3b82f6", W: "#6366f1", X: "#8b5cf6",
      Y: "#a855f7", Z: "#d946ef"
    };
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => ({
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

const CATEGORIES = ["all", "storage", "systems", "hardware", "networking", "mechanics", "brands", "emojies", "utility", "alphabet"] as const;

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
