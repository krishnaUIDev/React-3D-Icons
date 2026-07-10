import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useRouter } from "../router/Router";
import { useTranslation } from "../i18n/useTranslation";
import { audioEngine } from "../utils/audio";
import {
  DatabaseIcon,
  CloudIcon,
  CpuIcon,
  NetworkIcon,
  GearIcon,
  FacebookIcon,
  RocketIcon,
  FlashIcon,
  ShieldIcon,
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
  Fallback2D,
  IconPreset,
  IconAngle,
  IconEnvironment,
  IconAnimationType,
  getMaterialConfig,
  MaterialConfig,
  BugIcon,
  FlaskIcon,
  PieChartIcon,
  FlameIcon,
  ActivityIcon,
  GraduationCapIcon,
  TrendingUpIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  DribbbleIcon,
  CloudNetworkIcon,
  FirewallIcon,
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
  FolderPlusIcon,
  FolderMinusIcon,
  FolderCheckIcon,
  CalendarPlusIcon,
  CalendarCheckIcon,
  BankIcon,
  CoinIcon,
  PiggyBankIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ReceiptIcon
} from "r3d-icons";
import {
  ArrowLeft,
  Copy,
  Check,
  RotateCw,
  Sparkles,
  Sliders as LucideSliders,
  Palette,
  Code,
  Zap,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import * as LucideAll from "lucide-react";

// List of all procedural components with descriptions and unique default colors
export const ICONS_REGISTRY = [
  {
    id: "plus",
    name: "PlusIcon",
    category: "utility",
    Component: PlusIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "minus",
    name: "MinusIcon",
    category: "utility",
    Component: MinusIcon,
    color: "#6b7280",
    accentColor: "#9ca3af"
  },
  {
    id: "close",
    name: "CloseIcon",
    category: "utility",
    Component: CloseIcon,
    color: "#ef4444",
    accentColor: "#f87171"
  },
  {
    id: "info",
    name: "InfoIcon",
    category: "utility",
    Component: InfoIcon,
    color: "#3b82f6",
    accentColor: "#60a5fa"
  },
  {
    id: "alertcircle",
    name: "AlertCircleIcon",
    category: "utility",
    Component: AlertCircleIcon,
    color: "#f59e0b",
    accentColor: "#fbbf24"
  },
  {
    id: "anchor",
    name: "AnchorIcon",
    category: "utility",
    Component: AnchorIcon,
    color: "#475569",
    accentColor: "#f43f5e"
  },
  {
    id: "diamond",
    name: "DiamondIcon",
    category: "utility",
    Component: DiamondIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "filter",
    name: "FilterIcon",
    category: "utility",
    Component: FilterIcon,
    color: "#f43f5e",
    accentColor: "#38bdf8"
  },
  {
    id: "pipeline",
    name: "PipelineIcon",
    category: "networking",
    Component: PipelineIcon,
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "refresh",
    name: "RefreshIcon",
    category: "utility",
    Component: RefreshIcon,
    color: "#8b5cf6",
    accentColor: "#ec4899"
  },
  {
    id: "webhook",
    name: "WebhookIcon",
    category: "networking",
    Component: WebhookIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "facebook",
    name: "FacebookIcon",
    category: "brands",
    Component: FacebookIcon,
    color: "#1877f2",
    accentColor: "#3b82f6"
  },
  {
    id: "shield",
    name: "ShieldIcon",
    category: "utility",
    Component: ShieldIcon,
    color: "#0d9488",
    accentColor: "#34d399"
  },
  {
    id: "rocket",
    name: "RocketIcon",
    category: "mechanics",
    Component: RocketIcon,
    color: "#ef4444",
    accentColor: "#f59e0b"
  },
  {
    id: "database",
    name: "DatabaseIcon",
    category: "storage",
    Component: DatabaseIcon,
    color: "#4f46e5",
    accentColor: "#ec4899"
  },
  {
    id: "folder",
    name: "FolderIcon",
    category: "storage",
    Component: FolderIcon,
    color: "#f59e0b",
    accentColor: "#eab308"
  },
  {
    id: "cloud",
    name: "CloudIcon",
    category: "systems",
    Component: CloudIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "network",
    name: "NetworkIcon",
    category: "networking",
    Component: NetworkIcon,
    color: "#06b6d4",
    accentColor: "#a855f7"
  },
  {
    id: "cloudnetwork",
    name: "CloudNetworkIcon",
    category: "networking",
    Component: CloudNetworkIcon,
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "firewall",
    name: "FirewallIcon",
    category: "networking",
    Component: FirewallIcon,
    color: "#e11d48",
    accentColor: "#ea580c"
  },
  {
    id: "cpu",
    name: "CpuIcon",
    category: "hardware",
    Component: CpuIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "gear",
    name: "GearIcon",
    category: "mechanics",
    Component: GearIcon,
    color: "#71717a",
    accentColor: "#b45309"
  },
  {
    id: "mail",
    name: "MailIcon",
    category: "utility",
    Component: MailIcon,
    color: "#e11d48",
    accentColor: "#ec4899"
  },
  {
    id: "calendar",
    name: "CalendarIcon",
    category: "utility",
    Component: CalendarIcon,
    color: "#6366f1",
    accentColor: "#ef4444"
  },
  {
    id: "wallet",
    name: "WalletIcon",
    category: "utility",
    Component: WalletIcon,
    color: "#b45309",
    accentColor: "#d97706"
  },
  {
    id: "dollar",
    name: "DollarIcon",
    category: "utility",
    Component: DollarIcon,
    color: "#eab308",
    accentColor: "#f59e0b"
  },
  {
    id: "thumbup",
    name: "ThumbUpIcon",
    category: "utility",
    Component: ThumbUpIcon,
    color: "#f43f5e",
    accentColor: "#fb7185"
  },
  {
    id: "flash",
    name: "FlashIcon",
    category: "utility",
    Component: FlashIcon,
    color: "#eab308",
    accentColor: "#f97316"
  },
  {
    id: "heart",
    name: "HeartIcon",
    category: "utility",
    Component: HeartIcon,
    color: "#ec4899",
    accentColor: "#f43f5e"
  },
  {
    id: "chat",
    name: "ChatIcon",
    category: "utility",
    Component: ChatIcon,
    color: "#8b5cf6",
    accentColor: "#a78bfa"
  },
  {
    id: "key",
    name: "KeyIcon",
    category: "utility",
    Component: KeyIcon,
    color: "#f59e0b",
    accentColor: "#fbbf24"
  },
  {
    id: "star",
    name: "StarIcon",
    category: "utility",
    Component: StarIcon,
    color: "#fbbf24",
    accentColor: "#f59e0b"
  },
  {
    id: "cart",
    name: "CartIcon",
    category: "utility",
    Component: CartIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "music",
    name: "MusicIcon",
    category: "utility",
    Component: MusicIcon,
    color: "#ec4899",
    accentColor: "#f43f5e"
  },
  {
    id: "gamepad",
    name: "GamepadIcon",
    category: "hardware",
    Component: GamepadIcon,
    color: "#6366f1",
    accentColor: "#8b5cf6"
  },
  {
    id: "bell",
    name: "BellIcon",
    category: "utility",
    Component: BellIcon,
    color: "#f59e0b",
    accentColor: "#d97706"
  },
  {
    id: "sun",
    name: "SunIcon",
    category: "systems",
    Component: SunIcon,
    color: "#f97316",
    accentColor: "#eab308"
  },
  {
    id: "bulb",
    name: "BulbIcon",
    category: "utility",
    Component: BulbIcon,
    color: "#fbbf24",
    accentColor: "#f59e0b"
  },
  {
    id: "camera",
    name: "CameraIcon",
    category: "hardware",
    Component: CameraIcon,
    color: "#06b6d4",
    accentColor: "#3b82f6"
  },
  {
    id: "clock",
    name: "ClockIcon",
    category: "utility",
    Component: ClockIcon,
    color: "#ef4444",
    accentColor: "#cbd5e1"
  },
  {
    id: "trophy",
    name: "TrophyIcon",
    category: "utility",
    Component: TrophyIcon,
    color: "#eab308",
    accentColor: "#f59e0b"
  },
  {
    id: "lock",
    name: "LockIcon",
    category: "utility",
    Component: LockIcon,
    color: "#6366f1",
    accentColor: "#8b5cf6"
  },
  {
    id: "mappin",
    name: "MapPinIcon",
    category: "utility",
    Component: MapPinIcon,
    color: "#ef4444",
    accentColor: "#f43f5e"
  },
  {
    id: "creditcard",
    name: "CreditCardIcon",
    category: "utility",
    Component: CreditCardIcon,
    color: "#4f46e5",
    accentColor: "#0ea5e9"
  },
  {
    id: "wifi",
    name: "WifiIcon",
    category: "networking",
    Component: WifiIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "search",
    name: "SearchIcon",
    category: "utility",
    Component: SearchIcon,
    color: "#3b82f6",
    accentColor: "#38bdf8"
  },
  {
    id: "home",
    name: "HomeIcon",
    category: "utility",
    Component: HomeIcon,
    color: "#10b981",
    accentColor: "#f43f5e"
  },
  {
    id: "trash",
    name: "TrashIcon",
    category: "utility",
    Component: TrashIcon,
    color: "#71717a",
    accentColor: "#ef4444"
  },
  {
    id: "user",
    name: "UserIcon",
    category: "utility",
    Component: UserIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "play",
    name: "PlayIcon",
    category: "utility",
    Component: PlayIcon,
    color: "#10b981",
    accentColor: "#38bdf8"
  },
  {
    id: "gift",
    name: "GiftIcon",
    category: "utility",
    Component: GiftIcon,
    color: "#f43f5e",
    accentColor: "#ef4444"
  },
  {
    id: "globe",
    name: "GlobeIcon",
    category: "systems",
    Component: GlobeIcon,
    color: "#0ea5e9",
    accentColor: "#3b82f6"
  },
  {
    id: "bag",
    name: "BagIcon",
    category: "utility",
    Component: BagIcon,
    color: "#f59e0b",
    accentColor: "#38bdf8"
  },
  {
    id: "compass",
    name: "CompassIcon",
    category: "utility",
    Component: CompassIcon,
    color: "#d4af37",
    accentColor: "#ef4444"
  },
  {
    id: "send",
    name: "SendIcon",
    category: "utility",
    Component: SendIcon,
    color: "#6366f1",
    accentColor: "#3b82f6"
  },
  {
    id: "target",
    name: "TargetIcon",
    category: "utility",
    Component: TargetIcon,
    color: "#ef4444",
    accentColor: "#f59e0b"
  },
  {
    id: "edit",
    name: "EditIcon",
    category: "utility",
    Component: EditIcon,
    color: "#eab308",
    accentColor: "#fed7aa"
  },
  {
    id: "phone",
    name: "PhoneIcon",
    category: "utility",
    Component: PhoneIcon,
    color: "#10b981",
    accentColor: "#cbd5e1"
  },
  {
    id: "book",
    name: "BookIcon",
    category: "utility",
    Component: BookIcon,
    color: "#e11d48",
    accentColor: "#fda4af"
  },
  {
    id: "link",
    name: "LinkIcon",
    category: "utility",
    Component: LinkIcon,
    color: "#71717a",
    accentColor: "#cbd5e1"
  },
  {
    id: "crown",
    name: "CrownIcon",
    category: "utility",
    Component: CrownIcon,
    color: "#d4af37",
    accentColor: "#fbbf24"
  },
  {
    id: "pin",
    name: "PinIcon",
    category: "utility",
    Component: PinIcon,
    color: "#ef4444",
    accentColor: "#fb7185"
  },
  {
    id: "flag",
    name: "FlagIcon",
    category: "utility",
    Component: FlagIcon,
    color: "#8b5cf6",
    accentColor: "#a78bfa"
  },
  {
    id: "briefcase",
    name: "BriefcaseIcon",
    category: "utility",
    Component: BriefcaseIcon,
    color: "#b45309",
    accentColor: "#f59e0b"
  },
  {
    id: "eye",
    name: "EyeIcon",
    category: "utility",
    Component: EyeIcon,
    color: "#0ea5e9",
    accentColor: "#a855f7"
  },
  {
    id: "tag",
    name: "TagIcon",
    category: "utility",
    Component: TagIcon,
    color: "#ec4899",
    accentColor: "#fb7185"
  },
  {
    id: "coffee",
    name: "CoffeeIcon",
    category: "utility",
    Component: CoffeeIcon,
    color: "#ea580c",
    accentColor: "#fed7aa"
  },
  {
    id: "share",
    name: "ShareIcon",
    category: "utility",
    Component: ShareIcon,
    color: "#6366f1",
    accentColor: "#818cf8"
  },
  {
    id: "layers",
    name: "LayersIcon",
    category: "storage",
    Component: LayersIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "sparkles",
    name: "SparklesIcon",
    category: "utility",
    Component: SparklesIcon,
    color: "#eab308",
    accentColor: "#fbbf24"
  },
  {
    id: "megaphone",
    name: "MegaphoneIcon",
    category: "utility",
    Component: MegaphoneIcon,
    color: "#ef4444",
    accentColor: "#f43f5e"
  },
  {
    id: "download",
    name: "DownloadIcon",
    category: "utility",
    Component: DownloadIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "upload",
    name: "UploadIcon",
    category: "utility",
    Component: UploadIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "monitor",
    name: "MonitorIcon",
    category: "hardware",
    Component: MonitorIcon,
    color: "#06b6d4",
    accentColor: "#3b82f6"
  },
  {
    id: "keyboard",
    name: "KeyboardIcon",
    category: "hardware",
    Component: KeyboardIcon,
    color: "#6366f1",
    accentColor: "#a855f7"
  },
  {
    id: "mouse",
    name: "MouseIcon",
    category: "hardware",
    Component: MouseIcon,
    color: "#10b981",
    accentColor: "#cbd5e1"
  },
  {
    id: "harddrive",
    name: "HardDriveIcon",
    category: "hardware",
    Component: HardDriveIcon,
    color: "#71717a",
    accentColor: "#94a3b8"
  },
  {
    id: "printer",
    name: "PrinterIcon",
    category: "hardware",
    Component: PrinterIcon,
    color: "#64748b",
    accentColor: "#cbd5e1"
  },
  {
    id: "speaker",
    name: "SpeakerIcon",
    category: "hardware",
    Component: SpeakerIcon,
    color: "#71717a",
    accentColor: "#818cf8"
  },
  {
    id: "glassmorphism",
    name: "GlassmorphismIcon",
    category: "utility",
    Component: GlassmorphismIcon,
    color: "#ffffff",
    accentColor: "#ec4899"
  },
  {
    id: "github",
    name: "GithubIcon",
    category: "brands",
    Component: GithubIcon,
    color: "#24292e",
    accentColor: "#6e5494"
  },
  {
    id: "twitter",
    name: "TwitterIcon",
    category: "brands",
    Component: TwitterIcon,
    color: "#1da1f2",
    accentColor: "#0f1419"
  },
  {
    id: "google",
    name: "GoogleIcon",
    category: "brands",
    Component: GoogleIcon,
    color: "#4285f4",
    accentColor: "#ea4335"
  },
  {
    id: "router",
    name: "RouterIcon",
    category: "networking",
    Component: RouterIcon,
    color: "#06b6d4",
    accentColor: "#10b981"
  },
  {
    id: "server",
    name: "ServerIcon",
    category: "networking",
    Component: ServerIcon,
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "ethernet",
    name: "EthernetIcon",
    category: "networking",
    Component: EthernetIcon,
    color: "#3b82f6",
    accentColor: "#d4af37"
  },
  {
    id: "satellite",
    name: "SatelliteIcon",
    category: "networking",
    Component: SatelliteIcon,
    color: "#06b6d4",
    accentColor: "#4f46e5"
  },
  {
    id: "wrench",
    name: "WrenchIcon",
    category: "mechanics",
    Component: WrenchIcon,
    color: "#94a3b8",
    accentColor: "#475569"
  },
  {
    id: "bolt",
    name: "BoltIcon",
    category: "mechanics",
    Component: BoltIcon,
    color: "#71717a",
    accentColor: "#cbd5e1"
  },
  {
    id: "hammer",
    name: "HammerIcon",
    category: "mechanics",
    Component: HammerIcon,
    color: "#cbd5e1",
    accentColor: "#f59e0b"
  },
  {
    id: "screwdriver",
    name: "ScrewdriverIcon",
    category: "mechanics",
    Component: ScrewdriverIcon,
    color: "#cbd5e1",
    accentColor: "#6366f1"
  },
  {
    id: "nut",
    name: "NutIcon",
    category: "mechanics",
    Component: NutIcon,
    color: "#94a3b8",
    accentColor: "#475569"
  },
  {
    id: "smile",
    name: "SmileIcon",
    category: "emojies",
    Component: SmileIcon,
    color: "#f59e0b",
    accentColor: "#f43f5e"
  },
  {
    id: "frown",
    name: "FrownIcon",
    category: "emojies",
    Component: FrownIcon,
    color: "#f59e0b",
    accentColor: "#f43f5e"
  },
  {
    id: "hearteyes",
    name: "HeartEyesIcon",
    category: "emojies",
    Component: HeartEyesIcon,
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "code",
    name: "CodeIcon",
    category: "utility",
    Component: CodeIcon,
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "terminal",
    name: "TerminalIcon",
    category: "utility",
    Component: TerminalIcon,
    color: "#10b981",
    accentColor: "#020617"
  },
  {
    id: "git",
    name: "GitIcon",
    category: "utility",
    Component: GitIcon,
    color: "#f43f5e",
    accentColor: "#ffffff"
  },
  {
    id: "figma",
    name: "FigmaIcon",
    category: "brands",
    Component: FigmaIcon,
    color: "#f24e1e",
    accentColor: "#a259ff"
  },
  {
    id: "barchart",
    name: "BarChartIcon",
    category: "utility",
    Component: BarChartIcon,
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "check",
    name: "CheckIcon",
    category: "utility",
    Component: CheckIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "container",
    name: "ContainerIcon",
    category: "systems",
    Component: ContainerIcon,
    color: "#2496ed",
    accentColor: "#f59e0b"
  },
  {
    id: "shieldcheck",
    name: "ShieldCheckIcon",
    category: "utility",
    Component: ShieldCheckIcon,
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "react",
    name: "ReactIcon",
    category: "brands",
    Component: ReactIcon,
    color: "#61dafb",
    accentColor: "#20232a"
  },
  {
    id: "node",
    name: "NodeIcon",
    category: "brands",
    Component: NodeIcon,
    color: "#68a063",
    accentColor: "#3c873a"
  },
  {
    id: "bug",
    name: "BugIcon",
    category: "utility",
    Component: BugIcon,
    color: "#475569",
    accentColor: "#ef4444"
  },
  {
    id: "flask",
    name: "FlaskIcon",
    category: "utility",
    Component: FlaskIcon,
    color: "#4f46e5",
    accentColor: "#a855f7"
  },
  {
    id: "piechart",
    name: "PieChartIcon",
    category: "utility",
    Component: PieChartIcon,
    color: "#6366f1",
    accentColor: "#ec4899"
  },
  {
    id: "flame",
    name: "FlameIcon",
    category: "utility",
    Component: FlameIcon,
    color: "#f97316",
    accentColor: "#ef4444"
  },
  {
    id: "activity",
    name: "ActivityIcon",
    category: "systems",
    Component: ActivityIcon,
    color: "#0d9488",
    accentColor: "#10b981"
  },
  {
    id: "graduationcap",
    name: "GraduationCapIcon",
    category: "utility",
    Component: GraduationCapIcon,
    color: "#3f3f46",
    accentColor: "#eab308"
  },
  {
    id: "trendingup",
    name: "TrendingUpIcon",
    category: "utility",
    Component: TrendingUpIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "instagram",
    name: "InstagramIcon",
    category: "brands",
    Component: InstagramIcon,
    color: "#e1306c",
    accentColor: "#f77737"
  },
  {
    id: "youtube",
    name: "YoutubeIcon",
    category: "brands",
    Component: YoutubeIcon,
    color: "#ff0000",
    accentColor: "#ef4444"
  },
  {
    id: "linkedin",
    name: "LinkedinIcon",
    category: "brands",
    Component: LinkedinIcon,
    color: "#0077b5",
    accentColor: "#00a0dc"
  },
  {
    id: "dribbble",
    name: "DribbbleIcon",
    category: "brands",
    Component: DribbbleIcon,
    color: "#ea4c89",
    accentColor: "#ff769f"
  },
  {
    id: "package",
    name: "PackageIcon",
    category: "storage",
    Component: PackageIcon,
    color: "#b45309",
    accentColor: "#38bdf8"
  },
  {
    id: "airplane",
    name: "AirplaneIcon",
    category: "utility",
    Component: AirplaneIcon,
    color: "#0ea5e9",
    accentColor: "#f43f5e"
  },
  {
    id: "battery",
    name: "BatteryIcon",
    category: "hardware",
    Component: BatteryIcon,
    color: "#10b981",
    accentColor: "#34d399"
  },
  {
    id: "video",
    name: "VideoIcon",
    category: "utility",
    Component: VideoIcon,
    color: "#8b5cf6",
    accentColor: "#ec4899"
  },
  {
    id: "microphone",
    name: "MicrophoneIcon",
    category: "utility",
    Component: MicrophoneIcon,
    color: "#ec4899",
    accentColor: "#3b82f6"
  },
  {
    id: "sliders",
    name: "SlidersIcon",
    category: "utility",
    Component: SlidersIcon,
    color: "#6366f1",
    accentColor: "#f59e0b"
  },
  {
    id: "map",
    name: "MapIcon",
    category: "utility",
    Component: MapIcon,
    color: "#10b981",
    accentColor: "#f43f5e"
  },
  {
    id: "umbrella",
    name: "UmbrellaIcon",
    category: "utility",
    Component: UmbrellaIcon,
    color: "#0ea5e9",
    accentColor: "#ec4899"
  },
  {
    id: "scissors",
    name: "ScissorsIcon",
    category: "utility",
    Component: ScissorsIcon,
    color: "#f59e0b",
    accentColor: "#3b82f6"
  },
  {
    id: "unlock",
    name: "UnlockIcon",
    category: "utility",
    Component: UnlockIcon,
    color: "#eab308",
    accentColor: "#22c55e"
  },
  {
    id: "archive",
    name: "ArchiveIcon",
    category: "storage",
    Component: ArchiveIcon,
    color: "#a855f7",
    accentColor: "#ec4899"
  },
  {
    id: "shieldalert",
    name: "ShieldAlertIcon",
    category: "utility",
    Component: ShieldAlertIcon,
    color: "#475569",
    accentColor: "#ef4444"
  },
  {
    id: "eyeoff",
    name: "EyeOffIcon",
    category: "utility",
    Component: EyeOffIcon,
    color: "#6366f1",
    accentColor: "#ef4444"
  },
  {
    id: "userplus",
    name: "UserPlusIcon",
    category: "utility",
    Component: UserPlusIcon,
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "trendingdown",
    name: "TrendingDownIcon",
    category: "utility",
    Component: TrendingDownIcon,
    color: "#ef4444",
    accentColor: "#fb7185"
  },
  {
    id: "copy",
    name: "CopyIcon",
    category: "utility",
    Component: CopyIcon,
    color: "#06b6d4",
    accentColor: "#22d3ee"
  },
  {
    id: "gauge",
    name: "GaugeIcon",
    category: "mechanics",
    Component: GaugeIcon,
    color: "#64748b",
    accentColor: "#ef4444"
  },
  {
    id: "magnet",
    name: "MagnetIcon",
    category: "mechanics",
    Component: MagnetIcon,
    color: "#71717a",
    accentColor: "#ef4444"
  },
  {
    id: "stack",
    name: "StackIcon",
    category: "systems",
    Component: StackIcon,
    color: "#4f46e5",
    accentColor: "#10b981"
  },
  {
    id: "workflow",
    name: "WorkflowIcon",
    category: "systems",
    Component: WorkflowIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "topology",
    name: "TopologyIcon",
    category: "systems",
    Component: TopologyIcon,
    color: "#06b6d4",
    accentColor: "#10b981"
  },
  {
    id: "file",
    name: "FileIcon",
    category: "utility",
    Component: FileIcon,
    color: "#64748b",
    accentColor: "#ef4444"
  },
  {
    id: "headphones",
    name: "HeadphonesIcon",
    category: "utility",
    Component: HeadphonesIcon,
    color: "#4f46e5",
    accentColor: "#3b82f6"
  },
  {
    id: "moon",
    name: "MoonIcon",
    category: "utility",
    Component: MoonIcon,
    color: "#a855f7",
    accentColor: "#f59e0b"
  },
  {
    id: "paperclip",
    name: "PaperclipIcon",
    category: "utility",
    Component: PaperclipIcon,
    color: "#94a3b8",
    accentColor: "#ef4444"
  },
  {
    id: "bookmark",
    name: "BookmarkIcon",
    category: "utility",
    Component: BookmarkIcon,
    color: "#e11d48",
    accentColor: "#ef4444"
  },
  {
    id: "cloudlightning",
    name: "CloudLightningIcon",
    category: "systems",
    Component: CloudLightningIcon,
    color: "#0ea5e9",
    accentColor: "#fbbf24"
  },
  {
    id: "folderopen",
    name: "FolderOpenIcon",
    category: "storage",
    Component: FolderOpenIcon,
    color: "#f59e0b",
    accentColor: "#10b981"
  },
  {
    id: "volume",
    name: "VolumeIcon",
    category: "hardware",
    Component: VolumeIcon,
    color: "#6366f1",
    accentColor: "#3b82f6"
  },
  {
    id: "belloff",
    name: "BellOffIcon",
    category: "utility",
    Component: BellOffIcon,
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "sunmoon",
    name: "SunMoonIcon",
    category: "systems",
    Component: SunMoonIcon,
    color: "#6366f1",
    accentColor: "#f59e0b"
  },
  {
    id: "piston",
    name: "PistonIcon",
    category: "mechanics",
    Component: PistonIcon,
    color: "#71717a",
    accentColor: "#10b981"
  },
  {
    id: "spring",
    name: "SpringIcon",
    category: "mechanics",
    Component: SpringIcon,
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "anvil",
    name: "AnvilIcon",
    category: "mechanics",
    Component: AnvilIcon,
    color: "#4b5563",
    accentColor: "#f97316"
  },
  {
    id: "hook",
    name: "HookIcon",
    category: "mechanics",
    Component: HookIcon,
    color: "#475569",
    accentColor: "#f59e0b"
  },
  {
    id: "turbine",
    name: "TurbineIcon",
    category: "mechanics",
    Component: TurbineIcon,
    color: "#64748b",
    accentColor: "#06b6d4"
  },
  {
    id: "pliers",
    name: "PliersIcon",
    category: "mechanics",
    Component: PliersIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "drill",
    name: "DrillIcon",
    category: "mechanics",
    Component: DrillIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "hacksaw",
    name: "HacksawIcon",
    category: "mechanics",
    Component: HacksawIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "tapemeasure",
    name: "TapeMeasureIcon",
    category: "mechanics",
    Component: TapeMeasureIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "caliper",
    name: "CaliperIcon",
    category: "mechanics",
    Component: CaliperIcon,
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "spiritlevel",
    name: "SpiritLevelIcon",
    category: "mechanics",
    Component: SpiritLevelIcon,
    color: "#64748b",
    accentColor: "#22c55e"
  },
  {
    id: "sledgehammer",
    name: "SledgehammerIcon",
    category: "mechanics",
    Component: SledgehammerIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "phonemobile",
    name: "PhoneMobileIcon",
    category: "hardware",
    Component: PhoneMobileIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "tablet",
    name: "TabletIcon",
    category: "hardware",
    Component: TabletIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "laptop",
    name: "LaptopIcon",
    category: "hardware",
    Component: LaptopIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "smartwatch",
    name: "SmartWatchIcon",
    category: "hardware",
    Component: SmartWatchIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "routerwifi",
    name: "RouterWifiIcon",
    category: "hardware",
    Component: RouterWifiIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "serverrack",
    name: "ServerRackIcon",
    category: "hardware",
    Component: ServerRackIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "harddriveexternal",
    name: "HardDriveExternalIcon",
    category: "hardware",
    Component: HardDriveExternalIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "webcam",
    name: "WebcamIcon",
    category: "hardware",
    Component: WebcamIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "chisel",
    name: "ChiselIcon",
    category: "mechanics",
    Component: ChiselIcon,
    color: "#78350f",
    accentColor: "#10b981"
  },
  {
    id: "crowbar",
    name: "CrowbarIcon",
    category: "mechanics",
    Component: CrowbarIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "funnel",
    name: "FunnelIcon",
    category: "mechanics",
    Component: FunnelIcon,
    color: "#0f766e",
    accentColor: "#10b981"
  },
  {
    id: "oilcan",
    name: "OilCanIcon",
    category: "mechanics",
    Component: OilCanIcon,
    color: "#b45309",
    accentColor: "#10b981"
  },
  {
    id: "bearing",
    name: "BearingIcon",
    category: "mechanics",
    Component: BearingIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "pulley",
    name: "PulleyIcon",
    category: "mechanics",
    Component: PulleyIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "sprocket",
    name: "SprocketIcon",
    category: "mechanics",
    Component: SprocketIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "projector",
    name: "ProjectorIcon",
    category: "hardware",
    Component: ProjectorIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "gameconsole",
    name: "GameConsoleIcon",
    category: "hardware",
    Component: GameConsoleIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "vrheadset",
    name: "VRHeadsetIcon",
    category: "hardware",
    Component: VRHeadsetIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "smartspeaker",
    name: "SmartSpeakerIcon",
    category: "hardware",
    Component: SmartSpeakerIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "powerbank",
    name: "PowerBankIcon",
    category: "hardware",
    Component: PowerBankIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "usbdrive",
    name: "UsbDriveIcon",
    category: "hardware",
    Component: UsbDriveIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "motherboard",
    name: "MotherboardIcon",
    category: "hardware",
    Component: MotherboardIcon,
    color: "#065f46",
    accentColor: "#10b981"
  },
  {
    id: "ramstick",
    name: "RamStickIcon",
    category: "hardware",
    Component: RamStickIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "crank",
    name: "CrankIcon",
    category: "mechanics",
    Component: CrankIcon,
    color: "#71717a",
    accentColor: "#10b981"
  },
  {
    id: "camshaft",
    name: "CamshaftIcon",
    category: "mechanics",
    Component: CamshaftIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "driveshaft",
    name: "DriveShaftIcon",
    category: "mechanics",
    Component: DriveShaftIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "valve",
    name: "ValveIcon",
    category: "mechanics",
    Component: ValveIcon,
    color: "#4b5563",
    accentColor: "#10b981"
  },
  {
    id: "propeller",
    name: "PropellerIcon",
    category: "mechanics",
    Component: PropellerIcon,
    color: "#78350f",
    accentColor: "#10b981"
  },
  {
    id: "rotor",
    name: "HelicopterRotorIcon",
    category: "mechanics",
    Component: HelicopterRotorIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "hydraulicjack",
    name: "HydraulicJackIcon",
    category: "mechanics",
    Component: HydraulicJackIcon,
    color: "#ef4444",
    accentColor: "#10b981"
  },
  {
    id: "gpu",
    name: "GpuIcon",
    category: "hardware",
    Component: GpuIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "powersupply",
    name: "PowerSupplyIcon",
    category: "hardware",
    Component: PowerSupplyIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "networkswitch",
    name: "NetworkSwitchIcon",
    category: "hardware",
    Component: NetworkSwitchIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "smartplug",
    name: "SmartPlugIcon",
    category: "hardware",
    Component: SmartPlugIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartbulb",
    name: "SmartBulbIcon",
    category: "hardware",
    Component: SmartBulbIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "securitycamera",
    name: "SecurityCameraIcon",
    category: "hardware",
    Component: SecurityCameraIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartlock",
    name: "SmartLockIcon",
    category: "hardware",
    Component: SmartLockIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "thermostat",
    name: "ThermostatIcon",
    category: "hardware",
    Component: ThermostatIcon,
    color: "#0f172a",
    accentColor: "#10b981"
  },
  {
    id: "gclamp",
    name: "GClampIcon",
    category: "mechanics",
    Component: GClampIcon,
    color: "#4b5563",
    accentColor: "#10b981"
  },
  {
    id: "vice",
    name: "ViceIcon",
    category: "mechanics",
    Component: ViceIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "greasegun",
    name: "GreaseGunIcon",
    category: "mechanics",
    Component: GreaseGunIcon,
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "gearbox",
    name: "GearboxIcon",
    category: "mechanics",
    Component: GearboxIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "differential",
    name: "DifferentialIcon",
    category: "mechanics",
    Component: DifferentialIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "suspension",
    name: "SuspensionIcon",
    category: "mechanics",
    Component: SuspensionIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "windlass",
    name: "WindlassIcon",
    category: "mechanics",
    Component: WindlassIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "earbuds",
    name: "EarbudsIcon",
    category: "hardware",
    Component: EarbudsIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "smartring",
    name: "SmartRingIcon",
    category: "hardware",
    Component: SmartRingIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "drawingtablet",
    name: "DrawingTabletIcon",
    category: "hardware",
    Component: DrawingTabletIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "barcodescanner",
    name: "BarcodeScannerIcon",
    category: "hardware",
    Component: BarcodeScannerIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "posregister",
    name: "POSRegisterIcon",
    category: "hardware",
    Component: POSRegisterIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "calculator",
    name: "CalculatorIcon",
    category: "hardware",
    Component: CalculatorIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "remotecontrol",
    name: "RemoteControlIcon",
    category: "hardware",
    Component: RemoteControlIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "soundbar",
    name: "SoundbarIcon",
    category: "hardware",
    Component: SoundbarIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "jackhammer",
    name: "JackhammerIcon",
    category: "mechanics",
    Component: JackhammerIcon,
    color: "#e2e8f0",
    accentColor: "#10b981"
  },
  {
    id: "solderingiron",
    name: "SolderingIronIcon",
    category: "mechanics",
    Component: SolderingIronIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "blowtorch",
    name: "BlowtorchIcon",
    category: "mechanics",
    Component: BlowtorchIcon,
    color: "#0284c7",
    accentColor: "#10b981"
  },
  {
    id: "wheelbarrow",
    name: "WheelbarrowIcon",
    category: "mechanics",
    Component: WheelbarrowIcon,
    color: "#ea580c",
    accentColor: "#10b981"
  },
  {
    id: "plumbbob",
    name: "PlumbBobIcon",
    category: "mechanics",
    Component: PlumbBobIcon,
    color: "#d97706",
    accentColor: "#10b981"
  },
  {
    id: "shears",
    name: "ShearsIcon",
    category: "mechanics",
    Component: ShearsIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "wirestripper",
    name: "WireStripperIcon",
    category: "mechanics",
    Component: WireStripperIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "pipewrench",
    name: "PipeWrenchIcon",
    category: "mechanics",
    Component: PipeWrenchIcon,
    color: "#dc2626",
    accentColor: "#10b981"
  },
  {
    id: "floppy",
    name: "FloppyDiskIcon",
    category: "storage",
    Component: FloppyDiskIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "tapecassette",
    name: "TapeCassetteIcon",
    category: "storage",
    Component: TapeCassetteIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "cd",
    name: "CompactDiscIcon",
    category: "storage",
    Component: CompactDiscIcon,
    color: "#f1f5f9",
    accentColor: "#10b981"
  },
  {
    id: "tv",
    name: "TvIcon",
    category: "hardware",
    Component: TvIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "radio",
    name: "RadioIcon",
    category: "hardware",
    Component: RadioIcon,
    color: "#7c2d12",
    accentColor: "#10b981"
  },
  {
    id: "walkietalkie",
    name: "WalkieTalkieIcon",
    category: "hardware",
    Component: WalkieTalkieIcon,
    color: "#19222f",
    accentColor: "#10b981"
  },
  {
    id: "headset",
    name: "HeadsetIcon",
    category: "hardware",
    Component: HeadsetIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "fish",
    name: "FishIcon",
    category: "emojies",
    Component: FishIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "butterfly",
    name: "ButterflyIcon",
    category: "emojies",
    Component: ButterflyIcon,
    color: "#d946ef",
    accentColor: "#10b981"
  },
  {
    id: "bird",
    name: "BirdIcon",
    category: "emojies",
    Component: BirdIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "cat",
    name: "CatIcon",
    category: "emojies",
    Component: CatIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "dog",
    name: "DogIcon",
    category: "emojies",
    Component: DogIcon,
    color: "#e2e8f0",
    accentColor: "#10b981"
  },
  {
    id: "rabbit",
    name: "RabbitIcon",
    category: "emojies",
    Component: RabbitIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "elephant",
    name: "ElephantIcon",
    category: "emojies",
    Component: ElephantIcon,
    color: "#334155",
    accentColor: "#10b981"
  },
  {
    id: "owl",
    name: "OwlIcon",
    category: "emojies",
    Component: OwlIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "turtle",
    name: "TurtleIcon",
    category: "emojies",
    Component: TurtleIcon,
    color: "#16a34a",
    accentColor: "#10b981"
  },
  {
    id: "dolphin",
    name: "DolphinIcon",
    category: "emojies",
    Component: DolphinIcon,
    color: "#0ea5e9",
    accentColor: "#10b981"
  },
  {
    id: "rose",
    name: "RoseIcon",
    category: "emojies",
    Component: RoseIcon,
    color: "#ec4899",
    accentColor: "#10b981"
  },
  {
    id: "sunflower",
    name: "SunflowerIcon",
    category: "emojies",
    Component: SunflowerIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "tulip",
    name: "TulipIcon",
    category: "emojies",
    Component: TulipIcon,
    color: "#f43f5e",
    accentColor: "#10b981"
  },
  {
    id: "lotus",
    name: "LotusIcon",
    category: "emojies",
    Component: LotusIcon,
    color: "#f472b6",
    accentColor: "#10b981"
  },
  {
    id: "daisy",
    name: "DaisyIcon",
    category: "emojies",
    Component: DaisyIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "hibiscus",
    name: "HibiscusIcon",
    category: "emojies",
    Component: HibiscusIcon,
    color: "#ec4899",
    accentColor: "#10b981"
  },
  {
    id: "orchid",
    name: "OrchidIcon",
    category: "emojies",
    Component: OrchidIcon,
    color: "#d946ef",
    accentColor: "#10b981"
  },
  {
    id: "lily",
    name: "LilyIcon",
    category: "emojies",
    Component: LilyIcon,
    color: "#fdf2f8",
    accentColor: "#10b981"
  },
  {
    id: "cactus",
    name: "CactusIcon",
    category: "emojies",
    Component: CactusIcon,
    color: "#16a34a",
    accentColor: "#10b981"
  },
  {
    id: "lavender",
    name: "LavenderIcon",
    category: "emojies",
    Component: LavenderIcon,
    color: "#a855f7",
    accentColor: "#10b981"
  },
  {
    id: "cloudrain",
    name: "CloudRainIcon",
    category: "systems",
    Component: CloudRainIcon,
    color: "#0ea5e9",
    accentColor: "#38bdf8"
  },
  {
    id: "cloudsnow",
    name: "CloudSnowIcon",
    category: "systems",
    Component: CloudSnowIcon,
    color: "#0ea5e9",
    accentColor: "#e2e8f0"
  },
  {
    id: "wind",
    name: "WindIcon",
    category: "systems",
    Component: WindIcon,
    color: "#64748b",
    accentColor: "#10b981"
  },
  {
    id: "tornado",
    name: "TornadoIcon",
    category: "systems",
    Component: TornadoIcon,
    color: "#475569",
    accentColor: "#0ea5e9"
  },
  {
    id: "snowflake",
    name: "SnowflakeIcon",
    category: "systems",
    Component: SnowflakeIcon,
    color: "#38bdf8",
    accentColor: "#e2e8f0"
  },
  {
    id: "rainbow",
    name: "RainbowIcon",
    category: "systems",
    Component: RainbowIcon,
    color: "#ef4444",
    accentColor: "#06b6d4"
  },
  {
    id: "thermometer",
    name: "ThermometerIcon",
    category: "utility",
    Component: ThermometerIcon,
    color: "#cbd5e1",
    accentColor: "#ef4444"
  },
  {
    id: "leaf",
    name: "LeafIcon",
    category: "emojies",
    Component: LeafIcon,
    color: "#16a34a",
    accentColor: "#0ea5e9"
  },
  {
    id: "tree",
    name: "TreeIcon",
    category: "emojies",
    Component: TreeIcon,
    color: "#15803d",
    accentColor: "#10b981"
  },
  {
    id: "hurricane",
    name: "HurricaneIcon",
    category: "systems",
    Component: HurricaneIcon,
    color: "#0284c7",
    accentColor: "#0ea5e9"
  },
  {
    id: "burger",
    name: "BurgerIcon",
    category: "emojies",
    Component: BurgerIcon,
    color: "#d97706",
    accentColor: "#eab308"
  },
  {
    id: "pizza",
    name: "PizzaIcon",
    category: "emojies",
    Component: PizzaIcon,
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "apple",
    name: "AppleIcon",
    category: "emojies",
    Component: AppleIcon,
    color: "#ef4444",
    accentColor: "#eab308"
  },
  {
    id: "banana",
    name: "BananaIcon",
    category: "emojies",
    Component: BananaIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "cake",
    name: "CakeIcon",
    category: "emojies",
    Component: CakeIcon,
    color: "#ec4899",
    accentColor: "#f59e0b"
  },
  {
    id: "icecream",
    name: "IceCreamIcon",
    category: "emojies",
    Component: IceCreamIcon,
    color: "#f472b6",
    accentColor: "#ef4444"
  },
  {
    id: "donut",
    name: "DonutIcon",
    category: "emojies",
    Component: DonutIcon,
    color: "#db2777",
    accentColor: "#eab308"
  },
  {
    id: "popcorn",
    name: "PopcornIcon",
    category: "emojies",
    Component: PopcornIcon,
    color: "#ef4444",
    accentColor: "#eab308"
  },
  {
    id: "watermelon",
    name: "WatermelonIcon",
    category: "emojies",
    Component: WatermelonIcon,
    color: "#ef4444",
    accentColor: "#1e293b"
  },
  {
    id: "cookie",
    name: "CookieIcon",
    category: "emojies",
    Component: CookieIcon,
    color: "#ca8a04",
    accentColor: "#10b981"
  },
  {
    id: "safe",
    name: "SafeIcon",
    category: "utility",
    Component: SafeIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "goldbars",
    name: "GoldBarsIcon",
    category: "utility",
    Component: GoldBarsIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "bank",
    name: "BankIcon",
    category: "utility",
    Component: BankIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "coin",
    name: "CoinIcon",
    category: "utility",
    Component: CoinIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "piggybank",
    name: "PiggyBankIcon",
    category: "utility",
    Component: PiggyBankIcon,
    color: "#f472b6",
    accentColor: "#eab308"
  },
  {
    id: "shoppingbag",
    name: "ShoppingBagIcon",
    category: "utility",
    Component: ShoppingBagIcon,
    color: "#ca8a04",
    accentColor: "#eab308"
  },
  {
    id: "shoppingcart",
    name: "ShoppingCartIcon",
    category: "utility",
    Component: ShoppingCartIcon,
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "scale",
    name: "ScaleIcon",
    category: "utility",
    Component: ScaleIcon,
    color: "#94a3b8",
    accentColor: "#10b981"
  },
  {
    id: "receipt",
    name: "ReceiptIcon",
    category: "utility",
    Component: ReceiptIcon,
    color: "#f8fafc",
    accentColor: "#10b981"
  },
  {
    id: "banknote",
    name: "BanknoteIcon",
    category: "utility",
    Component: BanknoteIcon,
    color: "#16a34a",
    accentColor: "#eab308"
  },
  {
    id: "euro",
    name: "EuroIcon",
    category: "utility",
    Component: EuroIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "yen",
    name: "YenIcon",
    category: "utility",
    Component: YenIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "pound",
    name: "PoundIcon",
    category: "utility",
    Component: PoundIcon,
    color: "#eab308",
    accentColor: "#10b981"
  },
  {
    id: "atom",
    name: "AtomIcon",
    category: "utility",
    Component: AtomIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "dna",
    name: "DNAIcon",
    category: "utility",
    Component: DNAIcon,
    color: "#3b82f6",
    accentColor: "#10b981"
  },
  {
    id: "microscope",
    name: "MicroscopeIcon",
    category: "utility",
    Component: MicroscopeIcon,
    color: "#475569",
    accentColor: "#10b981"
  },
  {
    id: "telescope",
    name: "TelescopeIcon",
    category: "utility",
    Component: TelescopeIcon,
    color: "#1e293b",
    accentColor: "#10b981"
  },
  {
    id: "beaker",
    name: "BeakerIcon",
    category: "utility",
    Component: BeakerIcon,
    color: "#cbd5e1",
    accentColor: "#10b981"
  },
  {
    id: "folderplus",
    name: "FolderPlusIcon",
    category: "storage",
    Component: FolderPlusIcon,
    color: "#f59e0b",
    accentColor: "#10b981"
  },
  {
    id: "folderminus",
    name: "FolderMinusIcon",
    category: "storage",
    Component: FolderMinusIcon,
    color: "#f59e0b",
    accentColor: "#ef4444"
  },
  {
    id: "foldercheck",
    name: "FolderCheckIcon",
    category: "storage",
    Component: FolderCheckIcon,
    color: "#f59e0b",
    accentColor: "#10b981"
  },
  {
    id: "calendarplus",
    name: "CalendarPlusIcon",
    category: "utility",
    Component: CalendarPlusIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
  {
    id: "calendarcheck",
    name: "CalendarCheckIcon",
    category: "utility",
    Component: CalendarCheckIcon,
    color: "#6366f1",
    accentColor: "#10b981"
  },
  // Alphabet icons A-Z
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
      category: "alphabet",
      Component: (props: any) => <LetterIcon letter={l} {...props} />,
      color: LETTER_COLORS[l],
      accentColor: "#ffffff"
    }));
  })()
];

const PerformanceStatsHUD: React.FC<{ activeIconName: string }> = ({ activeIconName }) => {
  const [fps, setFps] = useState(60);
  const [memory, setMemory] = useState<string>("N/A");

  useEffect(() => {
    let lastTime = performance.now();
    let frames = 0;
    let animationFrameId: number;

    const calculateFps = () => {
      const now = performance.now();
      frames++;
      if (now >= lastTime + 1000) {
        setFps(Math.round((frames * 1000) / (now - lastTime)));
        frames = 0;
        lastTime = now;

        const perf = window.performance as any;
        if (perf && perf.memory) {
          const used = Math.round(perf.memory.usedJSHeapSize / (1024 * 1024));
          setMemory(`${used} MB`);
        }
      }
      animationFrameId = requestAnimationFrame(calculateFps);
    };

    animationFrameId = requestAnimationFrame(calculateFps);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const complexity = activeIconName.toLowerCase().includes("shield")
    ? { tris: "4,824", verts: "6,102", drawCalls: "14" }
    : activeIconName.toLowerCase().includes("camera")
      ? { tris: "11,250", verts: "14,312", drawCalls: "28" }
      : activeIconName.toLowerCase().includes("card")
        ? { tris: "3,210", verts: "4,400", drawCalls: "8" }
        : { tris: "6,420", verts: "8,924", drawCalls: "16" };

  return (
    <div className="absolute bottom-4 left-4 z-20 bg-zinc-950/85 backdrop-blur-md rounded-2xl border border-zinc-800 p-3.5 w-44 text-[10px] text-zinc-400 space-y-2 font-mono shadow-2xl animate-page-fade">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 mb-1.5">
        <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
          DIAGNOSTICS
        </span>
        <span className="text-[8px] px-1 bg-zinc-800 rounded font-bold text-zinc-500 uppercase">
          R3F RUNTIME
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span>FPS Monitor:</span>
        <span
          className={`font-bold ${fps > 50 ? "text-emerald-400" : fps > 30 ? "text-amber-400" : "text-rose-500"}`}
        >
          {fps} FPS
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span>Draw Calls:</span>
        <span className="font-bold text-white">{complexity.drawCalls}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Triangles:</span>
        <span className="font-bold text-white">{complexity.tris}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Vertices:</span>
        <span className="font-bold text-white">{complexity.verts}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Heap Memory:</span>
        <span className="font-bold text-indigo-300">{memory}</span>
      </div>
    </div>
  );
};

// Curated palettes: { name, color, accentColor }
const CURATED_PALETTES = [
  { name: "Neon Indigo", color: "#6366f1", accentColor: "#ec4899" },
  { name: "Sunset Gold", color: "#f59e0b", accentColor: "#ef4444" },
  { name: "Rose Quartz", color: "#fb7185", accentColor: "#fda4af" },
  { name: "Oceanic Teal", color: "#0d9488", accentColor: "#3b82f6" },
  { name: "Holo Violet", color: "#a855f7", accentColor: "#06b6d4" },
  { name: "Mint Emerald", color: "#10b981", accentColor: "#34d399" },
  { name: "Cyberpunk", color: "#ff007f", accentColor: "#00f0ff" },
  { name: "Dark Carbon", color: "#27272a", accentColor: "#71717a" }
];

// Curated Premium Theme Presets (aesthetic values combinations)
interface AestheticTheme {
  id: string;
  name: string;
  color: string;
  accentColor: string;
  gradientType: "none" | "linear" | "radial";
  gradientColorStart?: string;
  gradientColorEnd?: string;
  preset: IconPreset;
  lightingPreset: "studio" | "cyber" | "sunset" | "dramatic";
  viewportBg: "default" | "grid" | "gradient-indigo" | "gradient-sunset" | "gradient-mesh";
  badgeBg: string;
}

const AESTHETIC_THEMES: AestheticTheme[] = [
  {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    color: "#ff007f",
    accentColor: "#00f0ff",
    gradientType: "linear",
    gradientColorStart: "#ff007f",
    gradientColorEnd: "#00f0ff",
    preset: "glass",
    lightingPreset: "cyber",
    viewportBg: "gradient-indigo",
    badgeBg: "from-pink-500 to-cyan-400"
  },
  {
    id: "golden",
    name: "Golden Hour",
    color: "#ffd700",
    accentColor: "#ff4500",
    gradientType: "linear",
    gradientColorStart: "#ffd700",
    gradientColorEnd: "#ff4500",
    preset: "gold",
    lightingPreset: "sunset",
    viewportBg: "gradient-sunset",
    badgeBg: "from-amber-400 to-red-500"
  },
  {
    id: "emerald",
    name: "Emerald Glass",
    color: "#10b981",
    accentColor: "#047857",
    gradientType: "radial",
    gradientColorStart: "#10b981",
    gradientColorEnd: "#047857",
    preset: "glass",
    lightingPreset: "studio",
    viewportBg: "default",
    badgeBg: "from-emerald-400 to-teal-600"
  },
  {
    id: "obsidian",
    name: "Obsidian Dark",
    color: "#1c1917",
    accentColor: "#44403c",
    gradientType: "none",
    preset: "glass",
    lightingPreset: "dramatic",
    viewportBg: "grid",
    badgeBg: "from-stone-700 to-zinc-900"
  },
  {
    id: "pastel",
    name: "Pastel Mint",
    color: "#a7f3d0",
    accentColor: "#6ee7b7",
    gradientType: "linear",
    gradientColorStart: "#a7f3d0",
    gradientColorEnd: "#d1fae5",
    preset: "glass",
    lightingPreset: "studio",
    viewportBg: "default",
    badgeBg: "from-teal-200 to-emerald-300"
  },
  {
    id: "pearl",
    name: "Pearl Gloss",
    color: "#f3f4f6",
    accentColor: "#e5e7eb",
    gradientType: "none",
    preset: "clay",
    lightingPreset: "studio",
    viewportBg: "default",
    badgeBg: "from-zinc-100 to-zinc-300"
  }
];

interface CustomizeProps {
  theme: "light" | "dark";
}

export const Customize: React.FC<CustomizeProps> = ({ theme }) => {
  const { t } = useTranslation();
  const { color: urlColor, iconId, navigate, updateCustomizerURL } = useRouter();

  // Find current icon component
  const currentIcon = ICONS_REGISTRY.find((item) => item.id === iconId) || ICONS_REGISTRY[0];
  const ActiveComponent = currentIcon.Component;

  // Local parameter states
  const [preset, setPreset] = useState<IconPreset>("glass");
  const [angle, setAngle] = useState<IconAngle>("perspective");
  const [color, setColor] = useState(urlColor || currentIcon.color || "#6366f1");
  const [accentColor, setAccentColor] = useState(currentIcon.accentColor || "#ec4899");
  const [spinSpeed, setSpinSpeed] = useState(1.0);
  const [floatHeight, setFloatHeight] = useState(1.0);
  const [interactive, setInteractive] = useState(true);
  const [copied, setCopied] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedSVG, setCopiedSVG] = useState(false);
  const [copiedTSXWrapper, setCopiedTSXWrapper] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const sceneRef = useRef<any>(null);
  const [renderMode, setRenderMode] = useState<"3d" | "2d">("3d");
  const [environment, setEnvironment] = useState<IconEnvironment>("city");
  const [activeConsoleTab, setActiveConsoleTab] = useState<"react" | "svg">("react");
  const [svgString, setSvgString] = useState("");
  const [primaryInput, setPrimaryInput] = useState(color);
  const [accentInput, setAccentInput] = useState(accentColor);

  // PREMIUM STATES
  const [activeSidebarTab, setActiveSidebarTab] = useState<
    "tuning" | "material" | "scene" | "presets" | "compare"
  >("tuning");
  const [viewportBg, setViewportBg] = useState<
    "default" | "grid" | "gradient-indigo" | "gradient-sunset" | "gradient-mesh"
  >("default");
  const [previewContext, setPreviewContext] = useState<
    "icon" | "navbar" | "card" | "hero" | "pricing" | "mobile" | "testimonial" | "checkout"
  >("icon");
  const [cameraZoom, setCameraZoom] = useState(4.5);
  const [cameraFov, setCameraFov] = useState(45);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [embedSuccess, setEmbedSuccess] = useState(false);
  const [lightIntensity, setLightIntensity] = useState(1.0);
  const [lightColor, setLightColor] = useState("#c084fc");
  const [lightColorInput, setLightColorInput] = useState("#c084fc");
  const [accentLightColor, setAccentLightColor] = useState("#ec4899");
  const [accentLightColorInput, setAccentLightColorInput] = useState("#ec4899");
  const [accentLightIntensity, setAccentLightIntensity] = useState(0.0);
  const [accentLightAngle, setAccentLightAngle] = useState(135);
  const [tiltIntensity, setTiltIntensity] = useState(1.0);
  const [animationType, setAnimationType] = useState<IconAnimationType>("spin");
  const [animationAxis, setAnimationAxis] = useState<"x" | "y" | "z">("y");
  const [animationDirection, setAnimationDirection] = useState<"clockwise" | "counter-clockwise">(
    "clockwise"
  );
  const [shadowOpacity, setShadowOpacity] = useState(0.6);
  const [shadowBlur, setShadowBlur] = useState(2.5);
  const [textureType, setTextureType] = useState<"none" | "frosted" | "brushed" | "carbon">("none");
  const [emissivePulseSpeed, setEmissivePulseSpeed] = useState(0.0);
  const [emissivePulseIntensity, setEmissivePulseIntensity] = useState(0.5);
  const [lightingPreset, setLightingPreset] = useState<"studio" | "cyber" | "sunset" | "dramatic">(
    "studio"
  );
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle");
  const [presentationMode, setPresentationMode] = useState(false);
  const [showcaseGridView, setShowcaseGridView] = useState(false);
  const [viewportFlash, setViewportFlash] = useState(false);
  const [switcherSearch, setSwitcherSearch] = useState("");
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  // ACCORDION EXPANSION STATES
  const [tuningGeometryOpen, setTuningGeometryOpen] = useState(true);
  const [tuningColorOpen, setTuningColorOpen] = useState(false);
  const [tuningMotionOpen, setTuningMotionOpen] = useState(false);
  const [sceneBgOpen, setSceneBgOpen] = useState(true);
  const [sceneCameraOpen, setSceneCameraOpen] = useState(false);
  const [sceneLightsOpen, setSceneLightsOpen] = useState(false);
  const [materialParamsOpen, setMaterialParamsOpen] = useState(true);
  const [materialTexturesOpen, setMaterialTexturesOpen] = useState(false);
  const [materialPulsationOpen, setMaterialPulsationOpen] = useState(false);

  // Material physics overrides (initially with defaults of active preset)
  const [materialRoughness, setMaterialRoughness] = useState(0.1);
  const [materialMetalness, setMaterialMetalness] = useState(0.9);
  const [materialTransmission, setMaterialTransmission] = useState(0.6);
  const [materialThickness, setMaterialThickness] = useState(1.2);
  const [materialClearcoat, setMaterialClearcoat] = useState(1.0);
  const [materialClearcoatRoughness, setMaterialClearcoatRoughness] = useState(0.1);
  const [materialIor, setMaterialIor] = useState(1.5);
  const [materialEmissiveIntensity, setMaterialEmissiveIntensity] = useState(0.3);
  const [materialIridescence, setMaterialIridescence] = useState(0.0);
  const [materialIridescenceIor, setMaterialIridescenceIor] = useState(1.3);
  const [materialIridescenceThickness, setMaterialIridescenceThickness] = useState(400);

  // Saved Custom Presets
  const [savedPresets, setSavedPresets] = useState<any[]>([]);
  const [newPresetName, setNewPresetName] = useState("");

  // Premium Features States
  const [gradientType, setGradientType] = useState<"none" | "linear" | "radial">("none");
  const [gradientColorStart, setGradientColorStart] = useState("#6366f1");
  const [gradientColorStartInput, setGradientColorStartInput] = useState("#6366f1");
  const [gradientColorEnd, setGradientColorEnd] = useState("#ec4899");
  const [gradientColorEndInput, setGradientColorEndInput] = useState("#ec4899");
  const [gradientAngle, setGradientAngle] = useState(45);
  const [tuningGradientOpen, setTuningGradientOpen] = useState(false);

  const [ambientLightIntensity, setAmbientLightIntensity] = useState(0.4);
  const [ambientLightColor, setAmbientLightColor] = useState("#3f3f46");
  const [ambientLightColorInput, setAmbientLightColorInput] = useState("#3f3f46");

  const [showPerfStats, setShowPerfStats] = useState(false);

  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [scrubberRotation, setScrubberRotation] = useState(0);

  // Particle & Surface normal map states
  const [particleSystem, setParticleSystem] = useState<"none" | "sparkles" | "dust" | "stars">(
    "none"
  );
  const [particleCount, setParticleCount] = useState(50);
  const [particleColor, setParticleColor] = useState("#ffffff");
  const [particleColorInput, setParticleColorInput] = useState("#ffffff");
  const [particleSpeed, setParticleSpeed] = useState(1.0);
  const [surfaceNormal, setSurfaceNormal] = useState<"none" | "noise" | "leather" | "grid">("none");
  const [tuningParticlesOpen, setTuningParticlesOpen] = useState(false);
  const [tuningNormalsOpen, setTuningNormalsOpen] = useState(false);

  // Label & Audio states
  const [labelText, setLabelText] = useState("");
  const [labelColor, setLabelColor] = useState("#ffffff");
  const [labelColorInput, setLabelColorInput] = useState("#ffffff");
  const [tuningLabelOpen, setTuningLabelOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => audioEngine.isEnabled());
  const [turntableActive, setTurntableActive] = useState(false);

  // Round 3 Explode & Reflections states
  const [explodeDistance, setExplodeDistance] = useState(0.0);
  const [envRotation, setEnvRotation] = useState(0.0);
  const [tuningExplodeOpen, setTuningExplodeOpen] = useState(false);

  // Consolidation Share Modal
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareModalUrl, setShareModalUrl] = useState("");
  const [shareModalEmbedCode, setShareModalEmbedCode] = useState("");

  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [screenshotBackdrop, setScreenshotBackdrop] = useState<
    "transparent" | "solid" | "gradient" | "grid"
  >("transparent");
  const [screenshotBgStart, setScreenshotBgStart] = useState("#0b0f19");
  const [screenshotBgStartInput, setScreenshotBgStartInput] = useState("#0b0f19");
  const [screenshotBgEnd, setScreenshotBgEnd] = useState("#1f2937");
  const [screenshotBgEndInput, setScreenshotBgEndInput] = useState("#1f2937");
  const [screenshotScale, setScreenshotScale] = useState(2);

  // Compare mode list (4 icon IDs)
  const [compareList, setCompareList] = useState<string[]>([]);

  // Sync color with URL changes & primaryInput
  useEffect(() => {
    if (urlColor) {
      setColor(urlColor);
      setPrimaryInput(urlColor);
    }
  }, [urlColor]);

  // Sync inputs with parent state updates
  useEffect(() => {
    setPrimaryInput(color);
  }, [color]);

  useEffect(() => {
    setAccentInput(accentColor);
  }, [accentColor]);

  // Sync accent color when iconId switches
  useEffect(() => {
    if (currentIcon) {
      setAccentColor(currentIcon.accentColor);
      setAccentInput(currentIcon.accentColor);
    }
  }, [iconId]);

  // Load custom presets on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("r3d_saved_presets");
      if (stored) {
        setSavedPresets(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Parse and load shared link configuration if present
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const shared = params.get("share");
      if (shared) {
        const decoded = JSON.parse(decodeURIComponent(atob(shared)));
        if (decoded.preset) setPreset(decoded.preset);
        if (decoded.angle) setAngle(decoded.angle);
        if (decoded.renderMode) setRenderMode(decoded.renderMode);
        if (decoded.color) setColor(decoded.color);
        if (decoded.accentColor) setAccentColor(decoded.accentColor);
        if (decoded.spinSpeed !== undefined) setSpinSpeed(decoded.spinSpeed);
        if (decoded.floatHeight !== undefined) setFloatHeight(decoded.floatHeight);
        if (decoded.environment) setEnvironment(decoded.environment);
        if (decoded.viewportBg) setViewportBg(decoded.viewportBg);
        if (decoded.previewContext) setPreviewContext(decoded.previewContext);
        if (decoded.cameraZoom !== undefined) setCameraZoom(decoded.cameraZoom);
        if (decoded.cameraFov !== undefined) setCameraFov(decoded.cameraFov);
        if (decoded.lightIntensity !== undefined) setLightIntensity(decoded.lightIntensity);
        if (decoded.lightColor) {
          setLightColor(decoded.lightColor);
          setLightColorInput(decoded.lightColor);
        }
        if (decoded.tiltIntensity !== undefined) setTiltIntensity(decoded.tiltIntensity);
        if (decoded.animationType) setAnimationType(decoded.animationType);
        if (decoded.animationAxis) setAnimationAxis(decoded.animationAxis);
        if (decoded.animationDirection) setAnimationDirection(decoded.animationDirection);
        if (decoded.shadowOpacity !== undefined) setShadowOpacity(decoded.shadowOpacity);
        if (decoded.shadowBlur !== undefined) setShadowBlur(decoded.shadowBlur);
        if (decoded.textureType) setTextureType(decoded.textureType);
        if (decoded.emissivePulseSpeed !== undefined)
          setEmissivePulseSpeed(decoded.emissivePulseSpeed);
        if (decoded.emissivePulseIntensity !== undefined)
          setEmissivePulseIntensity(decoded.emissivePulseIntensity);
        if (decoded.lightingPreset) setLightingPreset(decoded.lightingPreset);
        if (decoded.ambientLightIntensity !== undefined)
          setAmbientLightIntensity(decoded.ambientLightIntensity);
        if (decoded.ambientLightColor) {
          setAmbientLightColor(decoded.ambientLightColor);
          setAmbientLightColorInput(decoded.ambientLightColor);
        }
        if (decoded.gradientType) setGradientType(decoded.gradientType);
        if (decoded.particleSystem) setParticleSystem(decoded.particleSystem);
        if (decoded.particleCount !== undefined) setParticleCount(decoded.particleCount);
        if (decoded.particleColor) {
          setParticleColor(decoded.particleColor);
          setParticleColorInput(decoded.particleColor);
        }
        if (decoded.particleSpeed !== undefined) setParticleSpeed(decoded.particleSpeed);
        if (decoded.surfaceNormal) setSurfaceNormal(decoded.surfaceNormal);
        if (decoded.labelText !== undefined) setLabelText(decoded.labelText);
        if (decoded.labelColor) {
          setLabelColor(decoded.labelColor);
          setLabelColorInput(decoded.labelColor);
        }
        if (decoded.explodeDistance !== undefined) setExplodeDistance(decoded.explodeDistance);
        if (decoded.envRotation !== undefined) setEnvRotation(decoded.envRotation);
        if (decoded.gradientColorStart) {
          setGradientColorStart(decoded.gradientColorStart);
          setGradientColorStartInput(decoded.gradientColorStart);
        }
        if (decoded.gradientColorEnd) {
          setGradientColorEnd(decoded.gradientColorEnd);
          setGradientColorEndInput(decoded.gradientColorEnd);
        }
        if (decoded.gradientAngle !== undefined) setGradientAngle(decoded.gradientAngle);

        if (decoded.customMaterial) {
          const defaults = getMaterialConfig(
            decoded.preset || "glass",
            decoded.color || color,
            theme,
            decoded.accentColor || accentColor
          );
          const mat = { ...defaults, ...decoded.customMaterial };
          setMaterialRoughness(mat.roughness);
          setMaterialMetalness(mat.metalness);
          setMaterialTransmission(mat.transmission);
          setMaterialThickness(mat.thickness);
          setMaterialClearcoat(mat.clearcoat);
          setMaterialClearcoatRoughness(mat.clearcoatRoughness);
          setMaterialIor(mat.ior);
          setMaterialEmissiveIntensity(mat.emissiveIntensity);
          setMaterialIridescence(mat.iridescence !== undefined ? mat.iridescence : 0.0);
          setMaterialIridescenceIor(mat.iridescenceIOR !== undefined ? mat.iridescenceIOR : 1.3);
          setMaterialIridescenceThickness(
            mat.iridescenceThickness !== undefined ? mat.iridescenceThickness : 400
          );
        }

        // Clear share parameter from URL history silently
        const cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
        window.history.replaceState(null, "", cleanUrl);
      }
    } catch (e) {
      console.error("Failed to restore shared playground configuration", e);
    }
  }, []);

  // Sync audio engine configuration
  useEffect(() => {
    audioEngine.setEnabled(soundEnabled);
  }, [soundEnabled]);

  // Sync compare list default icons when active icon changes
  useEffect(() => {
    const list = [currentIcon.id];
    const categoryMatches = ICONS_REGISTRY.filter(
      (icon) => icon.id !== currentIcon.id && icon.category === currentIcon.category
    );
    categoryMatches.forEach((icon) => {
      if (list.length < 4) list.push(icon.id);
    });
    if (list.length < 4) {
      ICONS_REGISTRY.forEach((icon) => {
        if (list.length < 4 && !list.includes(icon.id)) {
          list.push(icon.id);
        }
      });
    }
    setCompareList(list);
  }, [currentIcon.id, currentIcon.category]);

  // Sync local material states when preset or theme changes
  useEffect(() => {
    const defaultM = getMaterialConfig(preset, color, theme, accentColor);
    setMaterialRoughness(defaultM.roughness);
    setMaterialMetalness(defaultM.metalness);
    setMaterialTransmission(defaultM.transmission);
    setMaterialThickness(defaultM.thickness);
    setMaterialClearcoat(defaultM.clearcoat);
    setMaterialClearcoatRoughness(defaultM.clearcoatRoughness);
    setMaterialIor(defaultM.ior);
    setMaterialEmissiveIntensity(defaultM.emissiveIntensity);
  }, [preset, theme]);

  // Compute active customized material overrides
  const defaultMat = getMaterialConfig(preset, color, theme, accentColor);
  const customMaterial: Partial<MaterialConfig> = {};
  if (materialRoughness !== defaultMat.roughness)
    customMaterial.roughness = Number(materialRoughness.toFixed(2));
  if (materialMetalness !== defaultMat.metalness)
    customMaterial.metalness = Number(materialMetalness.toFixed(2));
  if (materialTransmission !== defaultMat.transmission)
    customMaterial.transmission = Number(materialTransmission.toFixed(2));
  if (materialThickness !== defaultMat.thickness)
    customMaterial.thickness = Number(materialThickness.toFixed(2));
  if (materialClearcoat !== defaultMat.clearcoat)
    customMaterial.clearcoat = Number(materialClearcoat.toFixed(2));
  if (materialClearcoatRoughness !== defaultMat.clearcoatRoughness)
    customMaterial.clearcoatRoughness = Number(materialClearcoatRoughness.toFixed(2));
  if (materialIor !== defaultMat.ior) customMaterial.ior = Number(materialIor.toFixed(2));
  if (materialEmissiveIntensity !== defaultMat.emissiveIntensity)
    customMaterial.emissiveIntensity = Number(materialEmissiveIntensity.toFixed(2));
  if (materialIridescence !== 0)
    customMaterial.iridescence = Number(materialIridescence.toFixed(2));
  if (materialIridescenceIor !== 1.3)
    customMaterial.iridescenceIOR = Number(materialIridescenceIor.toFixed(2));
  if (materialIridescenceThickness !== 400)
    customMaterial.iridescenceThickness = materialIridescenceThickness;

  const customMaterialKeys = Object.keys(customMaterial);
  const customMaterialProp =
    customMaterialKeys.length > 0
      ? `\n        customMaterial={{ ${customMaterialKeys.map((k) => `${k}: ${customMaterial[k as keyof typeof customMaterial]}`).join(", ")} }}`
      : "";

  const cameraZoomProp =
    cameraZoom !== 4.5 ? `\n        cameraZoom={${cameraZoom.toFixed(1)}}` : "";
  const cameraFovProp = cameraFov !== 45 ? `\n        cameraFov={${cameraFov}}` : "";
  const lightIntensityProp =
    lightIntensity !== 1.0 ? `\n        lightIntensity={${lightIntensity.toFixed(1)}}` : "";
  const lightColorProp = lightColor !== "#c084fc" ? `\n        lightColor="${lightColor}"` : "";
  const tiltIntensityProp =
    tiltIntensity !== 1.0 ? `\n        tiltIntensity={${tiltIntensity.toFixed(1)}}` : "";
  const animationTypeProp =
    animationType !== "spin" ? `\n        animationType="${animationType}"` : "";
  const animationAxisProp =
    animationAxis !== "y" ? `\n        animationAxis="${animationAxis}"` : "";
  const animationDirectionProp =
    animationDirection !== "clockwise"
      ? `\n        animationDirection="${animationDirection}"`
      : "";
  const shadowOpacityProp =
    shadowOpacity !== 0.6 ? `\n        shadowOpacity={${shadowOpacity.toFixed(2)}}` : "";
  const shadowBlurProp =
    shadowBlur !== 2.5 ? `\n        shadowBlur={${shadowBlur.toFixed(2)}}` : "";
  const textureTypeProp = textureType !== "none" ? `\n        textureType="${textureType}"` : "";
  const emissivePulseSpeedProp =
    emissivePulseSpeed > 0 ? `\n        emissivePulseSpeed={${emissivePulseSpeed.toFixed(1)}}` : "";
  const emissivePulseIntensityProp =
    emissivePulseSpeed > 0 && emissivePulseIntensity !== 0.5
      ? `\n        emissivePulseIntensity={${emissivePulseIntensity.toFixed(2)}}`
      : "";
  const lightingPresetProp =
    lightingPreset !== "studio" ? `\n        lightingPreset="${lightingPreset}"` : "";
  const accentLightColorProp =
    accentLightIntensity > 0 && accentLightColor !== "#ec4899"
      ? `\n        accentLightColor="${accentLightColor}"`
      : "";
  const accentLightIntensityProp =
    accentLightIntensity > 0
      ? `\n        accentLightIntensity={${accentLightIntensity.toFixed(2)}}`
      : "";
  const accentLightAngleProp =
    accentLightIntensity > 0 && accentLightAngle !== 135
      ? `\n        accentLightAngle={${accentLightAngle}}`
      : "";

  const ambientLightIntensityProp =
    ambientLightIntensity !== 0.4
      ? `\n        ambientLightIntensity={${ambientLightIntensity.toFixed(2)}}`
      : "";
  const ambientLightColorProp =
    ambientLightColor !== "#3f3f46" ? `\n        ambientLightColor="${ambientLightColor}"` : "";

  const gradientTypeProp =
    gradientType !== "none" ? `\n        gradientType="${gradientType}"` : "";
  const gradientColorStartProp =
    gradientType !== "none" ? `\n        gradientColorStart="${gradientColorStart}"` : "";
  const gradientColorEndProp =
    gradientType !== "none" ? `\n        gradientColorEnd="${gradientColorEnd}"` : "";
  const gradientAngleProp =
    gradientType === "linear" && gradientAngle !== 45
      ? `\n        gradientAngle={${gradientAngle}}`
      : "";

  const particleSystemProp =
    particleSystem !== "none" ? `\n        particleSystem="${particleSystem}"` : "";
  const particleCountProp =
    particleSystem !== "none" && particleCount !== 50
      ? `\n        particleCount={${particleCount}}`
      : "";
  const particleColorProp =
    particleSystem !== "none" && particleColor !== "#ffffff"
      ? `\n        particleColor="${particleColor}"`
      : "";
  const particleSpeedProp =
    particleSystem !== "none" && particleSpeed !== 1.0
      ? `\n        particleSpeed={${particleSpeed}}`
      : "";
  const surfaceNormalProp =
    surfaceNormal !== "none" ? `\n        surfaceNormal="${surfaceNormal}"` : "";
  const labelTextProp = labelText !== "" ? `\n        labelText="${labelText}"` : "";
  const labelColorProp =
    labelText !== "" && labelColor !== "#ffffff" ? `\n        labelColor="${labelColor}"` : "";
  const explodeDistanceProp =
    explodeDistance > 0 ? `\n        explodeDistance={${explodeDistance}}` : "";
  const envRotationProp = envRotation > 0 ? `\n        envRotation={${envRotation}}` : "";

  // Preset Handlers
  const handleSavePreset = () => {
    if (!newPresetName.trim()) return;
    const newPreset = {
      id: Date.now().toString(),
      name: newPresetName.trim(),
      iconId: currentIcon.id, // Save the icon ID so we can render it in the saved presets page!
      preset,
      angle,
      color,
      accentColor,
      spinSpeed,
      floatHeight,
      environment,
      textureType,
      emissivePulseSpeed,
      emissivePulseIntensity,
      lightingPreset,
      customMaterial,
      gradientType,
      gradientColorStart,
      gradientColorEnd,
      gradientAngle,
      ambientLightIntensity,
      ambientLightColor,
      particleSystem,
      particleCount,
      particleColor,
      particleSpeed,
      surfaceNormal,
      labelText,
      labelColor,
      explodeDistance,
      envRotation
    };
    const updated = [...savedPresets, newPreset];
    setSavedPresets(updated);
    localStorage.setItem("r3d_saved_presets", JSON.stringify(updated));
    setNewPresetName("");
    audioEngine.playChime();
  };

  const handleDeletePreset = (id: string) => {
    const updated = savedPresets.filter((p) => p.id !== id);
    setSavedPresets(updated);
    localStorage.setItem("r3d_saved_presets", JSON.stringify(updated));
  };

  const applyAestheticTheme = (themePreset: AestheticTheme) => {
    audioEngine.playSnap();
    setColor(themePreset.color);
    setPrimaryInput(themePreset.color);
    setAccentColor(themePreset.accentColor);
    setAccentInput(themePreset.accentColor);
    setGradientType(themePreset.gradientType);
    if (themePreset.gradientType !== "none") {
      setGradientColorStart(themePreset.gradientColorStart || themePreset.color);
      setGradientColorStartInput(themePreset.gradientColorStart || themePreset.color);
      setGradientColorEnd(themePreset.gradientColorEnd || themePreset.accentColor);
      setGradientColorEndInput(themePreset.gradientColorEnd || themePreset.accentColor);
    }
    setPreset(themePreset.preset);
    setLightingPreset(themePreset.lightingPreset);
    setViewportBg(themePreset.viewportBg);

    const mat = getMaterialConfig(
      themePreset.preset,
      themePreset.color,
      theme,
      themePreset.accentColor
    );
    setMaterialRoughness(mat.roughness);
    setMaterialMetalness(mat.metalness);
    setMaterialTransmission(mat.transmission);
    setMaterialThickness(mat.thickness);
    setMaterialClearcoat(mat.clearcoat);
    setMaterialClearcoatRoughness(mat.clearcoatRoughness);
    setMaterialIor(mat.ior);
    setMaterialEmissiveIntensity(mat.emissiveIntensity);
    setExplodeDistance(0.0);
    setEnvRotation(0.0);
  };

  const handleSharePlayground = () => {
    try {
      const data = {
        iconId,
        preset,
        angle,
        renderMode,
        color,
        accentColor,
        spinSpeed,
        floatHeight,
        environment,
        viewportBg,
        previewContext,
        cameraZoom,
        cameraFov,
        lightIntensity,
        lightColor,
        tiltIntensity,
        animationType,
        animationAxis,
        animationDirection,
        shadowOpacity,
        shadowBlur,
        textureType,
        emissivePulseSpeed,
        emissivePulseIntensity,
        lightingPreset,
        customMaterial,
        gradientType,
        gradientColorStart,
        gradientColorEnd,
        gradientAngle,
        ambientLightIntensity,
        ambientLightColor,
        particleSystem,
        particleCount,
        particleColor,
        particleSpeed,
        surfaceNormal,
        labelText,
        labelColor,
        explodeDistance,
        envRotation
      };
      const serialized = btoa(encodeURIComponent(JSON.stringify(data)));
      const shareUrl = `${window.location.origin}${window.location.pathname}?share=${serialized}#/icons/${color.replace("#", "")}-${iconId}`;
      const embedUrl = `${window.location.origin}${window.location.pathname}?embed=true&share=${serialized}#/icons/${color.replace("#", "")}-${iconId}`;
      const iframeCode = `<iframe src="${embedUrl}" width="300" height="300" style="border: none; background: transparent;" allowtransparency="true"></iframe>`;

      setShareModalUrl(shareUrl);
      setShareModalEmbedCode(iframeCode);
      setIsShareModalOpen(true);
    } catch (e) {
      console.error("Failed to generate share URL", e);
    }
  };

  const handleExportGLTF = async () => {
    if (!sceneRef.current) {
      alert("Please wait until the 3D viewport has fully loaded.");
      return;
    }
    try {
      audioEngine.playChime();
      const { GLTFExporter } = await import("three/examples/jsm/exporters/GLTFExporter.js");
      const exporter = new GLTFExporter();
      exporter.parse(
        sceneRef.current,
        (gltf) => {
          const output = JSON.stringify(gltf, null, 2);
          const blob = new Blob([output], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `${currentIcon.id}-custom.gltf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        },
        (error) => {
          console.error("An error occurred during GLTF export:", error);
        },
        { binary: false }
      );
    } catch (e) {
      console.error("Failed to load GLTFExporter:", e);
    }
  };

  const handleCopyEmbedCode = () => {
    handleSharePlayground();
  };

  const handleExportPresets = () => {
    try {
      const dataStr =
        "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedPresets, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "r3d-custom-presets.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (e) {
      console.error("Failed to export presets", e);
    }
  };

  const handleImportPresets = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const files = e.target.files;
    if (!files || files.length === 0) return;

    fileReader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed)) {
          const merged = [...savedPresets];
          parsed.forEach((importedItem) => {
            if (importedItem.name && importedItem.preset) {
              if (
                !merged.some(
                  (existing) =>
                    existing.id === importedItem.id || existing.name === importedItem.name
                )
              ) {
                merged.push(importedItem);
              }
            }
          });
          setSavedPresets(merged);
          localStorage.setItem("r3d_saved_presets", JSON.stringify(merged));
          setImportStatus("success");
          setTimeout(() => setImportStatus("idle"), 2500);
        } else {
          setImportStatus("error");
          setTimeout(() => setImportStatus("idle"), 2500);
        }
      } catch (err) {
        console.error("Failed to parse presets import", err);
        setImportStatus("error");
        setTimeout(() => setImportStatus("idle"), 2500);
      }
    };
    fileReader.readAsText(files[0]);
  };

  const handleApplyPreset = (p: any) => {
    if (p.preset) setPreset(p.preset);
    if (p.angle) setAngle(p.angle);
    if (p.color) {
      setColor(p.color);
      updateCustomizerURL(p.color, currentIcon.id);
    }
    if (p.accentColor) setAccentColor(p.accentColor);
    if (p.spinSpeed !== undefined) setSpinSpeed(p.spinSpeed);
    if (p.floatHeight !== undefined) setFloatHeight(p.floatHeight);
    if (p.environment) setEnvironment(p.environment);
    setTextureType(p.textureType || "none");
    setEmissivePulseSpeed(p.emissivePulseSpeed !== undefined ? p.emissivePulseSpeed : 0.0);
    setEmissivePulseIntensity(
      p.emissivePulseIntensity !== undefined ? p.emissivePulseIntensity : 0.5
    );
    setLightingPreset(p.lightingPreset || "studio");
    if (p.ambientLightIntensity !== undefined) setAmbientLightIntensity(p.ambientLightIntensity);
    if (p.ambientLightColor) {
      setAmbientLightColor(p.ambientLightColor);
      setAmbientLightColorInput(p.ambientLightColor);
    }
    if (p.gradientType) setGradientType(p.gradientType);
    if (p.gradientColorStart) {
      setGradientColorStart(p.gradientColorStart);
      setGradientColorStartInput(p.gradientColorStart);
    }
    if (p.gradientColorEnd) {
      setGradientColorEnd(p.gradientColorEnd);
      setGradientColorEndInput(p.gradientColorEnd);
    }
    if (p.gradientAngle !== undefined) setGradientAngle(p.gradientAngle);
    setParticleSystem(p.particleSystem || "none");
    setParticleCount(p.particleCount !== undefined ? p.particleCount : 50);
    if (p.particleColor) {
      setParticleColor(p.particleColor);
      setParticleColorInput(p.particleColor);
    }
    setParticleSpeed(p.particleSpeed !== undefined ? p.particleSpeed : 1.0);
    setSurfaceNormal(p.surfaceNormal || "none");

    // Apply custom material properties
    const defaults = getMaterialConfig(
      p.preset || "glass",
      p.color || color,
      theme,
      p.accentColor || accentColor
    );
    const mat = { ...defaults, ...p.customMaterial };
    setMaterialRoughness(mat.roughness);
    setMaterialMetalness(mat.metalness);
    setMaterialTransmission(mat.transmission);
    setMaterialThickness(mat.thickness);
    setMaterialClearcoat(mat.clearcoat);
    setMaterialClearcoatRoughness(mat.clearcoatRoughness);
    setMaterialIor(mat.ior);
    setMaterialEmissiveIntensity(mat.emissiveIntensity);

    setLabelText(p.labelText || "");
    if (p.labelColor) {
      setLabelColor(p.labelColor);
      setLabelColorInput(p.labelColor);
    }
    setExplodeDistance(p.explodeDistance !== undefined ? p.explodeDistance : 0.0);
    setEnvRotation(p.envRotation !== undefined ? p.envRotation : 0.0);
  };

  // Update dynamic SVG preview string inside sandbox console
  useEffect(() => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "-9999px";
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(<Fallback2D id={currentIcon.id} color={color} theme={theme} preset={preset} />);

    const timer = setTimeout(() => {
      const svgElement = container.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        setSvgString(svgElement.outerHTML);
      }
      root.unmount();
      document.body.removeChild(container);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIcon.id, color, theme, preset]);

  // Update browser favicon dynamically when customizing!
  useEffect(() => {
    if (svgString) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      link.href = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
    }
  }, [svgString]);

  // Reset favicon when leaving Customizer
  useEffect(() => {
    return () => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (link) {
        link.href = "./favicon.svg";
      }
    };
  }, []);

  // React component usage string
  const codeString = `import { ${currentIcon.name} } from 'r3d-icons';

function App() {
  return (
    <div style={{ width: '120px', height: '120px' }}>
      <${currentIcon.name}
        preset="${preset}"
        angle="${angle}"
        environment="${environment}"
        variant="${renderMode}"
        color="${color}"
        accentColor="${accentColor}"
        spinSpeed={${spinSpeed.toFixed(1)}}
        floatHeight={${floatHeight.toFixed(1)}}
        theme="${theme}"
        interactive={${interactive}}${cameraZoomProp}${cameraFovProp}${lightIntensityProp}${lightColorProp}${tiltIntensityProp}${animationTypeProp}${animationAxisProp}${animationDirectionProp}${shadowOpacityProp}${shadowBlurProp}${textureTypeProp}${emissivePulseSpeedProp}${emissivePulseIntensityProp}${lightingPresetProp}${accentLightColorProp}${accentLightIntensityProp}${accentLightAngleProp}${ambientLightIntensityProp}${ambientLightColorProp}${gradientTypeProp}${gradientColorStartProp}${gradientColorEndProp}${gradientAngleProp}${particleSystemProp}${particleCountProp}${particleColorProp}${particleSpeedProp}${surfaceNormalProp}${labelTextProp}${labelColorProp}${explodeDistanceProp}${envRotationProp}${customMaterialProp}
      />
    </div>
  );
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyImport = () => {
    navigator.clipboard.writeText(`import { ${currentIcon.name} } from "r3d-icons";`);
    setCopiedImport(true);
    setTimeout(() => setCopiedImport(false), 2000);
  };

  const getTSXWrapperContent = () => {
    const componentName = `Custom${currentIcon.name.replace("Icon", "")}`;
    const customMatStr =
      Object.keys(customMaterial).length > 0
        ? `const customMaterial = ${JSON.stringify(customMaterial, null, 2).replace(/"([^"]+)":/g, "$1:")};\n\n  `
        : "";

    return `import React from "react";
import { ${currentIcon.name} } from "r3d-icons";

export function ${componentName}(props: React.ComponentProps<typeof ${currentIcon.name}>) {
  ${customMatStr}return (
    <${currentIcon.name}
      preset="${preset}"
      angle="${angle}"
      environment="${environment}"
      variant="${renderMode}"
      color="${color}"
      accentColor="${accentColor}"
      spinSpeed={${spinSpeed}}
      floatHeight={${floatHeight}}
      theme="${theme}"
      interactive={${interactive}}
      cameraZoom={${cameraZoom}}
      cameraFov={${cameraFov}}
      lightIntensity={${lightIntensity}}
      lightColor="${lightColor}"
      tiltIntensity={${tiltIntensity}}
      animationType="${animationType}"
      animationAxis="${animationAxis}"
      animationDirection="${animationDirection}"
      shadowOpacity={${shadowOpacity}}
      shadowBlur={${shadowBlur}}
      textureType="${textureType}"
      emissivePulseSpeed={${emissivePulseSpeed}}
      emissivePulseIntensity={${emissivePulseIntensity}}
      lightingPreset="${lightingPreset}"
      ${accentLightIntensity > 0 ? `accentLightColor="${accentLightColor}"` : ""}
      ${accentLightIntensity > 0 ? `accentLightIntensity={${accentLightIntensity}}` : ""}
      ${accentLightIntensity > 0 ? `accentLightAngle={${accentLightAngle}}` : ""}
      ${particleSystem !== "none" ? `particleSystem="${particleSystem}"` : ""}
      ${particleSystem !== "none" && particleCount !== 50 ? `particleCount={${particleCount}}` : ""}
      ${particleSystem !== "none" && particleColor !== "#ffffff" ? `particleColor="${particleColor}"` : ""}
      ${particleSystem !== "none" && particleSpeed !== 1.0 ? `particleSpeed={${particleSpeed}}` : ""}
      ${surfaceNormal !== "none" ? `surfaceNormal="${surfaceNormal}"` : ""}
      ${labelText !== "" ? `labelText="${labelText}"` : ""}
      ${labelText !== "" && labelColor !== "#ffffff" ? `labelColor="${labelColor}"` : ""}
      ${explodeDistance > 0 ? `explodeDistance={${explodeDistance}}` : ""}
      ${envRotation > 0 ? `envRotation={${envRotation}}` : ""}
      ${Object.keys(customMaterial).length > 0 ? "customMaterial={customMaterial}" : ""}
      {...props}
    />
  );
}
`;
  };

  const handleDownloadTSX = () => {
    const filename = `Custom${currentIcon.name.replace("Icon", "")}.tsx`;
    const fileContent = getTSXWrapperContent();
    const blob = new Blob([fileContent], { type: "text/typescript" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    audioEngine.playChime();
  };

  const handleCopyTSXWrapper = () => {
    const fileContent = getTSXWrapperContent();
    navigator.clipboard.writeText(fileContent);
    setCopiedTSXWrapper(true);
    setTimeout(() => setCopiedTSXWrapper(false), 2000);
  };

  const handleDownloadSVG = () => {
    if (downloading) return;
    setDownloading(true);

    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "-9999px";
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(<Fallback2D id={currentIcon.id} color={color} theme={theme} preset={preset} />);

    setTimeout(() => {
      const svgElement = container.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        const svgContent = svgElement.outerHTML;
        const blob = new Blob([svgContent], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${currentIcon.id}-2d-${preset}.svg`;
        document.body.appendChild(link);
        link.click();
        audioEngine.playChime();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      root.unmount();
      document.body.removeChild(container);
      setDownloading(false);
    }, 100);
  };

  const handleDownloadPNG = () => {
    setIsScreenshotModalOpen(true);
  };

  const performHighQualityCapture = () => {
    const canvasElement =
      document.querySelector("#main-viewport canvas") || document.querySelector("canvas");
    if (!(canvasElement instanceof HTMLCanvasElement)) {
      alert("Could not locate the 3D canvas viewport.");
      return;
    }

    try {
      audioEngine.playShutter();
      const compCanvas = document.createElement("canvas");
      const ctx = compCanvas.getContext("2d");
      if (!ctx) return;

      const baseWidth = canvasElement.width;
      const baseHeight = canvasElement.height;
      const width = baseWidth * screenshotScale;
      const height = baseHeight * screenshotScale;
      compCanvas.width = width;
      compCanvas.height = height;

      if (screenshotBackdrop === "solid") {
        ctx.fillStyle = screenshotBgStart;
        ctx.fillRect(0, 0, width, height);
      } else if (screenshotBackdrop === "gradient") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, screenshotBgStart);
        grad.addColorStop(1, screenshotBgEnd);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (screenshotBackdrop === "grid") {
        ctx.fillStyle = theme === "dark" ? "#090c15" : "#f4f4f5";
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = "rgba(99, 102, 241, 0.15)";
        ctx.lineWidth = 1.5 * screenshotScale;
        const gridSize = 24 * screenshotScale;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      ctx.drawImage(canvasElement, 0, 0, width, height);

      const dataUrl = compCanvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${currentIcon.id}-3d-composited-${screenshotBackdrop}-${preset}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setViewportFlash(true);
      setTimeout(() => setViewportFlash(false), 250);
      setIsScreenshotModalOpen(false);
    } catch (err) {
      console.error("Failed to perform high quality composited screenshot capture:", err);
      try {
        const dataUrl = canvasElement.toDataURL("image/png");
        const fallbackLink = document.createElement("a");
        fallbackLink.href = dataUrl;
        fallbackLink.download = `${currentIcon.id}-3d-fallback.png`;
        document.body.appendChild(fallbackLink);
        fallbackLink.click();
        document.body.removeChild(fallbackLink);
      } catch (innerErr) {
        console.error("Inner fallback capture also failed:", innerErr);
      }
      setIsScreenshotModalOpen(false);
    }
  };

  const handleCopySVG = () => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.left = "-9999px";
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(<Fallback2D id={currentIcon.id} color={color} theme={theme} preset={preset} />);

    setTimeout(() => {
      const svgElement = container.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        const svgContent = svgElement.outerHTML;
        navigator.clipboard.writeText(svgContent);
        setCopiedSVG(true);
        setTimeout(() => setCopiedSVG(false), 2000);
      }
      root.unmount();
      document.body.removeChild(container);
    }, 100);
  };

  const handlePaletteSelect = (pColor: string, pAccent: string) => {
    setColor(pColor);
    setAccentColor(pAccent);
    updateCustomizerURL(pColor, currentIcon.id);
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    updateCustomizerURL(newColor, currentIcon.id);
  };

  const handlePrimaryTextChange = (val: string) => {
    setPrimaryInput(val);
    let clean = val.trim();
    if (clean.length > 0 && !clean.startsWith("#")) {
      clean = `#${clean}`;
    }
    if (/^#([0-9A-F]{3}){1,2}$/i.test(clean)) {
      setColor(clean);
      updateCustomizerURL(clean, currentIcon.id);
    }
  };

  const handleAccentTextChange = (val: string) => {
    setAccentInput(val);
    let clean = val.trim();
    if (clean.length > 0 && !clean.startsWith("#")) {
      clean = `#${clean}`;
    }
    if (/^#([0-9A-F]{3}){1,2}$/i.test(clean)) {
      setAccentColor(clean);
    }
  };

  const handlePresetSelect = (p: IconPreset) => {
    setPreset(p);
    const defaultColors: Record<IconPreset, string> = {
      glass: currentIcon.color || "#6366f1",
      metal: "#cbd5e1",
      clay: "#f43f5e",
      hologram: "#a855f7",
      gold: "#d4af37",
      silver: "#e2e8f0",
      glassmorphism: theme === "dark" ? "#ffffff" : "#64748b",
      carbon: "#27272a",
      wood: "#d97706",
      "neon-glow": "#06b6d4",
      "liquid-metal": "#38bdf8"
    };
    const newColor = defaultColors[p];
    setColor(newColor);
    updateCustomizerURL(newColor, currentIcon.id);
  };

  const handleReset = () => {
    setPreset("glass");
    setAngle("perspective");
    setRenderMode("3d");
    setColor(currentIcon.color);
    setAccentColor(currentIcon.accentColor);
    setSpinSpeed(1.0);
    setFloatHeight(1.0);
    setInteractive(true);
    setResetKey((prev) => prev + 1);
    updateCustomizerURL(currentIcon.color, currentIcon.id);

    // Premium states reset
    setViewportBg("default");
    setPreviewContext("icon");
    setCameraZoom(4.5);
    setCameraFov(45);
    setLightIntensity(1.0);
    setLightColor("#c084fc");
    setLightColorInput("#c084fc");
    setAccentLightColor("#ec4899");
    setAccentLightColorInput("#ec4899");
    setAccentLightIntensity(0.0);
    setAccentLightAngle(135);
    setTiltIntensity(1.0);
    setAnimationType("spin");
    setAnimationAxis("y");
    setAnimationDirection("clockwise");
    setShadowOpacity(0.6);
    setShadowBlur(2.5);
    setTextureType("none");
    setEmissivePulseSpeed(0.0);
    setEmissivePulseIntensity(0.5);
    setLightingPreset("studio");
    setPresentationMode(false);
    setShowcaseGridView(false);
    const defaults = getMaterialConfig(
      "glass",
      currentIcon.color || "#6366f1",
      theme,
      currentIcon.accentColor
    );
    setMaterialRoughness(defaults.roughness);
    setMaterialMetalness(defaults.metalness);
    setMaterialTransmission(defaults.transmission);
    setMaterialThickness(defaults.thickness);
    setMaterialClearcoat(defaults.clearcoat);
    setMaterialClearcoatRoughness(defaults.clearcoatRoughness);
    setMaterialIor(defaults.ior);
    setMaterialEmissiveIntensity(defaults.emissiveIntensity);
    setMaterialIridescence(0.0);
    setMaterialIridescenceIor(1.3);
    setMaterialIridescenceThickness(400);
    setTurntableActive(false);
  };

  const handleSurpriseMe = () => {
    setViewportFlash(true);
    setTimeout(() => setViewportFlash(false), 250);

    const presets: Array<IconPreset> = [
      "glass",
      "metal",
      "clay",
      "hologram",
      "gold",
      "silver",
      "glassmorphism",
      "carbon",
      "wood",
      "neon-glow",
      "liquid-metal"
    ];
    const shuffledPreset = presets[Math.floor(Math.random() * presets.length)];
    setPreset(shuffledPreset);

    const colorCombos = [
      { main: "#6366f1", accent: "#ec4899" },
      { main: "#10b981", accent: "#34d399" },
      { main: "#ef4444", accent: "#f59e0b" },
      { main: "#8b5cf6", accent: "#ff007f" },
      { main: "#0ea5e9", accent: "#00ffff" },
      { main: "#f43f5e", accent: "#38bdf8" },
      { main: "#eab308", accent: "#ff4500" },
      { main: "#0d9488", accent: "#10b981" },
      { main: "#ec4899", accent: "#8b5cf6" },
      { main: "#3b82f6", accent: "#fbbf24" }
    ];
    const combo = colorCombos[Math.floor(Math.random() * colorCombos.length)];
    setColor(combo.main);
    setAccentColor(combo.accent);
    updateCustomizerURL(combo.main.replace("#", ""), currentIcon.id);

    const defaults = getMaterialConfig(shuffledPreset, combo.main, theme, combo.accent);

    const roughnessOffset = (Math.random() - 0.5) * 0.15;
    const metalnessOffset = (Math.random() - 0.5) * 0.2;
    setMaterialRoughness(Math.max(0.01, Math.min(1.0, defaults.roughness + roughnessOffset)));
    setMaterialMetalness(Math.max(0.0, Math.min(1.0, defaults.metalness + metalnessOffset)));
    setMaterialTransmission(defaults.transmission);
    setMaterialThickness(defaults.thickness);
    setMaterialClearcoat(defaults.clearcoat);
    setMaterialClearcoatRoughness(defaults.clearcoatRoughness);
    setMaterialIor(defaults.ior);
    setMaterialEmissiveIntensity(defaults.emissiveIntensity);

    const motions: Array<IconAnimationType> = [
      "spin",
      "wobble",
      "breathe",
      "wave",
      "bounce",
      "orbit"
    ];
    const chosenMotion = motions[Math.floor(Math.random() * motions.length)];
    setAnimationType(chosenMotion);

    const axes: Array<"x" | "y" | "z"> = ["x", "y", "z"];
    setAnimationAxis(axes[Math.floor(Math.random() * axes.length)]);
    setAnimationDirection(Math.random() > 0.5 ? "clockwise" : "counter-clockwise");
    setSpinSpeed(parseFloat((Math.random() * 1.5 + 0.4).toFixed(2)));
    setFloatHeight(parseFloat((Math.random() * 1.4 + 0.3).toFixed(2)));

    const textures: Array<"none" | "frosted" | "brushed" | "carbon"> = [
      "none",
      "frosted",
      "brushed",
      "carbon"
    ];
    setTextureType(textures[Math.floor(Math.random() * textures.length)]);

    setEmissivePulseSpeed(Math.random() > 0.4 ? parseFloat((Math.random() * 2.2).toFixed(2)) : 0.0);
    setEmissivePulseIntensity(parseFloat((Math.random() * 1.6 + 0.4).toFixed(2)));

    const lightingPresets: Array<"studio" | "cyber" | "sunset" | "dramatic"> = [
      "studio",
      "cyber",
      "sunset",
      "dramatic"
    ];
    setLightingPreset(lightingPresets[Math.floor(Math.random() * lightingPresets.length)]);

    const bgs: Array<"default" | "grid" | "gradient-indigo" | "gradient-sunset" | "gradient-mesh"> =
      ["default", "grid", "gradient-indigo", "gradient-sunset", "gradient-mesh"];
    setViewportBg(bgs[Math.floor(Math.random() * bgs.length)]);

    const accentColors = [
      "#ec4899",
      "#3b82f6",
      "#10b981",
      "#ef4444",
      "#f59e0b",
      "#8b5cf6",
      "#0ea5e9",
      "#eab308"
    ];
    const randomAccentColor = accentColors[Math.floor(Math.random() * accentColors.length)];
    setAccentLightColor(randomAccentColor);
    setAccentLightColorInput(randomAccentColor);
    setAccentLightIntensity(
      Math.random() > 0.4 ? parseFloat((Math.random() * 2.5).toFixed(2)) : 0.0
    );
    setAccentLightAngle(Math.floor(Math.random() * 360));

    setResetKey((prev) => prev + 1);
  };

  const getViewportBgClass = () => {
    switch (viewportBg) {
      case "grid":
        return "bg-zinc-50 dark:bg-[#090c15] bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:24px_24px]";
      case "gradient-indigo":
        return "bg-gradient-to-br from-slate-950 via-indigo-950/70 to-slate-950 text-white";
      case "gradient-sunset":
        return "bg-gradient-to-br from-slate-950 via-pink-950/30 to-amber-950/30 text-white";
      case "gradient-mesh":
        return "bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-cyan-500/10 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-cyan-950/15";
      default:
        return "bg-white dark:bg-[#0e111a]";
    }
  };

  const canvasIconProps = {
    preset,
    angle,
    environment,
    variant: renderMode,
    color,
    accentColor,
    spinSpeed: animationPlaying ? spinSpeed : 0,
    floatHeight: animationPlaying ? floatHeight : 0,
    theme,
    interactive,
    customMaterial,
    cameraZoom,
    cameraFov,
    lightIntensity,
    lightColor,
    tiltIntensity,
    animationType,
    animationAxis,
    animationDirection,
    shadowOpacity,
    shadowBlur,
    textureType,
    emissivePulseSpeed,
    emissivePulseIntensity,
    lightingPreset,
    accentLightColor,
    accentLightIntensity,
    accentLightAngle,
    ambientLightColor,
    ambientLightIntensity,
    gradientType,
    gradientColorStart,
    gradientColorEnd,
    gradientAngle,
    manualRotationX: animationPlaying ? undefined : 0,
    manualRotationY: animationPlaying ? undefined : (scrubberRotation * Math.PI) / 180,
    manualRotationZ: animationPlaying ? undefined : 0,
    particleSystem,
    particleCount,
    particleColor,
    particleSpeed,
    surfaceNormal,
    labelText,
    labelColor,
    explodeDistance,
    envRotation,
    turntableActive,
    onSceneLoaded: (scene: any) => {
      sceneRef.current = scene;
    }
  };

  const isEmbed = new URLSearchParams(window.location.search).get("embed") === "true";

  if (isEmbed) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-transparent flex items-center justify-center relative">
        <div id="main-viewport" className="w-full h-full flex items-center justify-center">
          <ActiveComponent key={resetKey} {...canvasIconProps} interactive={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-6  space-y-4">
      {/* Back button and title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigate("catalog")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] text-xs font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all duration-150 shadow-sm shadow-zinc-150/10 dark:shadow-none group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Gallery</span>
        </button>

        <div className="flex items-center gap-3 relative z-40">
          {/* Quick Switcher dropdown select */}
          <div className="relative">
            <button
              onClick={() => {
                setIsSwitcherOpen(!isSwitcherOpen);
                setSwitcherSearch("");
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-850/80 text-[10px] font-extrabold uppercase tracking-wide text-zinc-600 dark:text-zinc-350 cursor-pointer shadow-sm active:scale-95 transition-all select-none"
            >
              <span>Switch Icon: {currentIcon.name.replace("Icon", "")}</span>
              <LucideAll.ChevronDown
                size={11}
                className={`text-zinc-400 transition-transform duration-200 ${isSwitcherOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isSwitcherOpen && (
              <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#0e111a]/95 backdrop-blur-xl shadow-xl p-2.5 space-y-2 animate-page-fade">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search icons..."
                    value={switcherSearch}
                    onChange={(e) => setSwitcherSearch(e.target.value)}
                    className="w-full px-3 py-1.5 pl-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-[10px] font-bold focus:outline-none focus:border-indigo-500 transition-all text-zinc-800 dark:text-zinc-200"
                  />
                  <LucideAll.Search size={11} className="absolute left-3 top-2.5 text-zinc-400" />
                </div>
                <div className="max-h-48 overflow-y-auto flex flex-col gap-1 custom-scrollbar pr-0.5">
                  {ICONS_REGISTRY.filter((icon) =>
                    icon.name.toLowerCase().includes(switcherSearch.toLowerCase())
                  ).map((icon) => {
                    const isCurrent = icon.id === currentIcon.id;
                    return (
                      <button
                        key={icon.id}
                        onClick={() => {
                          updateCustomizerURL(color.replace("#", ""), icon.id);
                          setIsSwitcherOpen(false);
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-left text-[9px] font-bold uppercase tracking-wider transition flex items-center justify-between cursor-pointer ${
                          isCurrent
                            ? "bg-indigo-600 text-white font-black"
                            : "text-zinc-650 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-850"
                        }`}
                      >
                        <span>{icon.name.replace("Icon", "")}</span>
                        <span
                          className={`text-[7px] px-1 py-0.5 rounded uppercase ${isCurrent ? "bg-white/20 text-white" : "bg-zinc-150 dark:bg-zinc-800 text-zinc-400"}`}
                        >
                          {icon.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <span className="px-3 py-1.5 text-[10px] font-extrabold rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 uppercase tracking-wide">
            Live Preview Sandbox
          </span>
        </div>
      </div>

      {/* Workspace split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: 3D Scene Viewport */}
        <div
          className={`${presentationMode ? "lg:col-span-12" : "lg:col-span-8"} flex flex-col gap-6 transition-all duration-300`}
        >
          <div
            className={`relative w-full rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden group transition-all duration-300 ${presentationMode ? "h-[600px]" : "h-[480px]"} ${getViewportBgClass()}`}
          >
            {/* Viewport Camera Flash Effect overlay */}
            <div
              className={`absolute inset-0 bg-white/70 dark:bg-indigo-500/10 pointer-events-none transition-opacity duration-500 z-30 ${
                viewportFlash ? "opacity-100 duration-75" : "opacity-0"
              }`}
            />

            {/* Overlay indicators */}
            {activeSidebarTab !== "compare" && (
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-bold rounded-xl bg-zinc-900/90 dark:bg-white/95 text-white dark:text-zinc-950 shadow-sm">
                  {currentIcon.name}
                </span>
                <span className="px-3 py-1.5 text-xs font-bold rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 capitalize border border-zinc-200 dark:border-zinc-700">
                  {preset} Preset
                </span>
                {previewContext !== "icon" && (
                  <span className="px-3 py-1.5 text-xs font-bold rounded-xl bg-indigo-500 text-white capitalize shadow-sm">
                    {previewContext} Mode
                  </span>
                )}
              </div>
            )}

            {/* Camera Angle Snap Bar */}
            {activeSidebarTab !== "compare" && (
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white/70 dark:bg-[#0c0f18]/80 border border-zinc-200 dark:border-zinc-800 p-1 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[8px] font-extrabold text-zinc-400 dark:text-zinc-555 uppercase tracking-wider px-2 block select-none">
                  Camera Snap:
                </span>
                {[
                  { id: "perspective", name: "3D" },
                  { id: "front", name: "Front" },
                  { id: "top", name: "Top" },
                  { id: "left", name: "Left" },
                  { id: "right", name: "Right" }
                ].map((cam) => (
                  <button
                    key={cam.id}
                    onClick={() => {
                      audioEngine.playSnap();
                      setAngle(cam.id as IconAngle);
                      if (cam.id === "perspective") {
                        setCameraZoom(4.5);
                      } else {
                        setCameraZoom(4.0);
                      }
                    }}
                    className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                      angle === cam.id
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-zinc-550 dark:text-zinc-450 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {cam.name}
                  </button>
                ))}
              </div>
            )}

            {/* Curated Aesthetic Theme Presets HUD Bar */}
            {activeSidebarTab !== "compare" && (
              <div className="absolute top-14 left-4 z-10 flex items-center gap-1.5 bg-white/70 dark:bg-[#0c0f18]/80 border border-zinc-200 dark:border-zinc-800 p-1 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[8px] font-extrabold text-zinc-400 dark:text-zinc-555 uppercase tracking-wider px-2 block select-none">
                  Aesthetic Themes:
                </span>
                <div className="flex gap-1">
                  {AESTHETIC_THEMES.map((themePreset) => (
                    <button
                      key={themePreset.id}
                      onClick={() => {
                        applyAestheticTheme(themePreset);
                      }}
                      title={`Apply ${themePreset.name} Theme`}
                      className="px-1.5 py-0.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition active:scale-95 cursor-pointer flex items-center gap-1 border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-700/50"
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded bg-gradient-to-tr ${themePreset.badgeBg} shadow-sm border border-zinc-200/20`}
                      />
                      <span className="text-[7.5px] font-black uppercase text-zinc-700 dark:text-zinc-350 pr-0.5">
                        {themePreset.name.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Viewport Control Buttons */}
            {activeSidebarTab !== "compare" && (
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {presentationMode ? (
                  <button
                    onClick={() => setPresentationMode(false)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-250 dark:border-zinc-700 bg-indigo-600 text-white shadow-lg transition active:scale-95 cursor-pointer text-[10px] font-extrabold uppercase tracking-wider animate-pulse hover:bg-indigo-700"
                  >
                    <LucideAll.Minimize2 size={12} />
                    <span>Exit Full View</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setPresentationMode(true)}
                      title="Presentation View (Hide Sidebar)"
                      className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm transition active:scale-95 cursor-pointer"
                    >
                      <LucideAll.Maximize2 size={16} />
                    </button>
                    <button
                      onClick={() => setShowPerfStats(!showPerfStats)}
                      title="Toggle Performance Diagnostics HUD"
                      className={`p-2.5 rounded-xl border transition active:scale-95 cursor-pointer flex items-center justify-center ${
                        showPerfStats
                          ? "border-indigo-500 bg-indigo-50/20 text-indigo-600 dark:text-indigo-400"
                          : "border-zinc-200 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm"
                      }`}
                    >
                      <LucideAll.Activity size={16} />
                    </button>
                    <button
                      onClick={() => {
                        const nextVal = !soundEnabled;
                        setSoundEnabled(nextVal);
                        if (nextVal) {
                          audioEngine.setEnabled(true);
                          audioEngine.playChime();
                        }
                      }}
                      title={soundEnabled ? "Mute Sound Effects" : "Unmute Sound Effects"}
                      className={`p-2.5 rounded-xl border transition active:scale-95 cursor-pointer flex items-center justify-center ${
                        soundEnabled
                          ? "border-emerald-500 bg-emerald-50/20 text-emerald-600 dark:text-emerald-400"
                          : "border-zinc-200 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm"
                      }`}
                    >
                      {soundEnabled ? (
                        <LucideAll.Volume2 size={16} />
                      ) : (
                        <LucideAll.VolumeX size={16} />
                      )}
                    </button>

                    {/* Turntable Showcase mode toggle */}
                    <button
                      onClick={() => {
                        const nextVal = !turntableActive;
                        setTurntableActive(nextVal);
                        audioEngine.playSnap();
                      }}
                      title={
                        turntableActive
                          ? "Disable Cinematic Turntable"
                          : "Enable Cinematic Turntable"
                      }
                      className={`p-2.5 rounded-xl border transition active:scale-95 cursor-pointer flex items-center justify-center ${
                        turntableActive
                          ? "border-indigo-500 bg-indigo-50/20 text-indigo-600 dark:text-indigo-400"
                          : "border-zinc-200 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm"
                      }`}
                    >
                      <LucideAll.Tv size={16} />
                    </button>

                    <button
                      onClick={handleReset}
                      title={t("reset_btn")}
                      className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm transition active:scale-95 cursor-pointer"
                    >
                      <RotateCw size={16} />
                    </button>
                    <button
                      onClick={handleSurpriseMe}
                      title="Surprise Me (Shuffle Presets 🎲)"
                      className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-amber-500 shadow-sm transition hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                    >
                      <span className="text-sm leading-none block font-mono select-none">🎲</span>
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Viewport Contents */}
            {activeSidebarTab === "compare" ? (
              /* Compare Mode: 2x2 grid side-by-side rendering */
              <div className="w-full h-full grid grid-cols-2 grid-rows-2 p-4 gap-4 bg-zinc-50/50 dark:bg-[#07090f]/30">
                {compareList.map((selectedId, idx) => {
                  const iconObj =
                    ICONS_REGISTRY.find((item) => item.id === selectedId) || currentIcon;
                  const CompareComponent = iconObj.Component;
                  return (
                    <div
                      key={idx}
                      className="relative rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-white dark:bg-[#0e111a] flex flex-col items-center justify-center p-3 group/slot overflow-hidden"
                    >
                      <div className="w-28 h-28 flex items-center justify-center">
                        <CompareComponent {...canvasIconProps} size="100%" />
                      </div>
                      <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mt-1 truncate max-w-full">
                        {iconObj.name}
                      </span>
                      {idx === 0 && (
                        <span className="absolute top-2 left-2 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 uppercase tracking-wider">
                          Active
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Single Preview Contexts or Showcase Grid Mode */
              <div className="w-full h-full">
                {showcaseGridView ? (
                  <div className="w-full h-full grid grid-cols-2 p-3 gap-3 overflow-y-auto bg-zinc-50/50 dark:bg-[#07090f]/30 custom-scrollbar">
                    {/* Slot 1: Navbar */}
                    <div className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/60 bg-white/40 dark:bg-[#0c0f1a]/40 backdrop-blur-md p-3 flex flex-col justify-between h-[210px] overflow-hidden">
                      <div className="flex items-center justify-between border-b border-zinc-200/10 dark:border-zinc-800/20 pb-1.5">
                        <div className="flex items-center gap-1">
                          <div className="w-6 h-6">
                            <ActiveComponent
                              {...canvasIconProps}
                              angle="front"
                              spinSpeed={0}
                              floatHeight={0}
                              size={20}
                            />
                          </div>
                          <span className="font-extrabold text-[8px] text-zinc-900 dark:text-white uppercase tracking-wider">
                            Navbar
                          </span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[5px] font-extrabold uppercase tracking-wide">
                          Active
                        </span>
                      </div>
                      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-1 pt-1">
                        <div className="w-12 h-12 relative flex items-center justify-center">
                          <div
                            className="absolute inset-0 rounded-full blur-xl opacity-10 pointer-events-none"
                            style={{ backgroundColor: color }}
                          />
                          <ActiveComponent {...canvasIconProps} size={44} />
                        </div>
                        <p className="text-[7px] text-zinc-400 dark:text-zinc-500 leading-normal max-w-[120px] truncate">
                          Header emblem integration
                        </p>
                      </div>
                    </div>

                    {/* Slot 2: Stats Card */}
                    <div
                      style={{ boxShadow: `0 15px 30px -10px ${color}10` }}
                      className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/60 bg-white/40 dark:bg-[#0c0f1a]/40 backdrop-blur-md p-3 flex flex-col items-center text-center justify-between h-[210px] overflow-hidden transition duration-300"
                    >
                      <div className="w-14 h-14 relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 rounded-full blur-xl opacity-15 pointer-events-none"
                          style={{ backgroundColor: color }}
                        />
                        <ActiveComponent {...canvasIconProps} size={52} />
                      </div>
                      <div className="space-y-0.5">
                        <span className="px-1.5 py-0.5 text-[5px] font-extrabold text-indigo-500 bg-indigo-500/10 rounded-full uppercase tracking-wider">
                          Premium Card
                        </span>
                        <h4 className="text-[8px] font-extrabold text-zinc-850 dark:text-white uppercase tracking-wider leading-none pt-0.5">
                          Feature Card
                        </h4>
                        <p className="text-[7px] text-zinc-400 dark:text-zinc-550 leading-relaxed max-w-[120px] truncate">
                          Glow visual node
                        </p>
                      </div>
                    </div>

                    {/* Slot 3: Customer Review */}
                    <div
                      style={{ boxShadow: `0 15px 30px -10px ${color}10` }}
                      className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/60 bg-white/40 dark:bg-[#0c0f1a]/40 backdrop-blur-md p-3 flex flex-col justify-between h-[210px] overflow-hidden relative"
                    >
                      <span className="absolute -top-1 left-2 text-2xl font-serif text-indigo-500/20 leading-none pointer-events-none select-none">
                        “
                      </span>
                      <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center">
                        <ActiveComponent {...canvasIconProps} size="100%" />
                      </div>
                      <p className="text-[7px] text-zinc-650 dark:text-zinc-400 font-medium italic leading-normal pt-2 max-w-[85px]">
                        "Interactive sandbox is amazing."
                      </p>
                      <div className="w-full h-px bg-zinc-200/10 my-0.5" />
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded-full bg-zinc-200/30 border border-zinc-200/20 flex items-center justify-center text-[6px] font-extrabold text-zinc-800 dark:text-zinc-255">
                          JD
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[7px] font-extrabold text-zinc-900 dark:text-white uppercase leading-none">
                            Jane Doe
                          </span>
                          <span className="text-[5px] text-zinc-400 dark:text-zinc-550 uppercase tracking-wide">
                            Architect
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Slot 4: Checkout */}
                    <div
                      style={{ boxShadow: `0 15px 30px -10px ${color}10` }}
                      className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/60 bg-white/40 dark:bg-[#0c0f1a]/40 backdrop-blur-md p-3 flex flex-col justify-between h-[210px] overflow-hidden"
                    >
                      <div className="flex justify-between items-center pb-1 border-b border-zinc-200/20">
                        <span className="text-[5px] font-extrabold uppercase tracking-wide text-zinc-450">
                          Receipt
                        </span>
                        <span className="text-[6px] font-extrabold text-zinc-900 dark:text-white font-mono">
                          #9082
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 py-1">
                        <div className="w-8 h-8 rounded-lg border border-zinc-200/10 bg-zinc-250/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                          <div
                            className="absolute inset-1 rounded-full blur-xl opacity-10 pointer-events-none"
                            style={{ backgroundColor: color }}
                          />
                          <ActiveComponent {...canvasIconProps} size="100%" />
                        </div>
                        <span className="text-[7px] font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider truncate max-w-[45px]">
                          Receipt Item
                        </span>
                      </div>
                      <button
                        style={{ backgroundColor: color }}
                        className="w-full py-1 rounded-lg text-white text-[7px] font-extrabold uppercase tracking-wider transition cursor-pointer"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {previewContext === "icon" && (
                      <div
                        id="main-viewport"
                        className="w-full h-full flex items-center justify-center"
                      >
                        <ActiveComponent key={resetKey} {...canvasIconProps} />
                        {showPerfStats && <PerformanceStatsHUD activeIconName={currentIcon.name} />}
                      </div>
                    )}

                    {previewContext === "navbar" && (
                      <div className="w-full h-full flex flex-col justify-between p-6 bg-zinc-50/20 dark:bg-zinc-950/10">
                        {/* Upgraded Glassmorphic Navbar */}
                        <div
                          style={{ boxShadow: `0 12px 30px -10px ${color}15` }}
                          className="w-full rounded-2xl border border-zinc-200/40 dark:border-zinc-800/50 bg-white/70 dark:bg-[#0f121e]/80 backdrop-blur-xl px-5 py-2.5 flex items-center justify-between shadow-md transition duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8">
                              <ActiveComponent
                                {...canvasIconProps}
                                angle="front"
                                spinSpeed={0}
                                floatHeight={0}
                                size={32}
                              />
                            </div>
                            <span className="font-extrabold text-[10px] text-zinc-900 dark:text-white uppercase tracking-wider">
                              {currentIcon.name.replace("Icon", "")} Portal
                            </span>
                          </div>
                          <div className="flex gap-4 text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                            <span className="hover:text-indigo-500 cursor-pointer transition">
                              Dashboard
                            </span>
                            <span className="hover:text-indigo-500 cursor-pointer transition">
                              Security
                            </span>
                            <span className="hover:text-indigo-500 cursor-pointer transition">
                              Settings
                            </span>
                          </div>
                          <button
                            style={{ backgroundColor: color }}
                            className="px-3.5 py-1.5 rounded-xl text-white text-[9px] font-extrabold uppercase tracking-wide transition shadow-sm hover:brightness-110 active:scale-95 cursor-pointer"
                          >
                            Launch
                          </button>
                        </div>

                        <div className="flex-grow flex flex-col items-center justify-center text-center max-w-sm mx-auto space-y-2 pt-4">
                          <div className="w-20 h-20 relative flex items-center justify-center">
                            <div
                              className="absolute inset-0 rounded-full blur-2xl opacity-15"
                              style={{ backgroundColor: color }}
                            />
                            <ActiveComponent {...canvasIconProps} size={80} />
                          </div>
                          <h4 className="text-[10px] font-extrabold text-zinc-800 dark:text-zinc-100 uppercase tracking-widest pt-2">
                            Logo Header Integration
                          </h4>
                          <p className="text-[9px] text-zinc-400 dark:text-zinc-500 leading-relaxed">
                            Features lightweight geometry parameters suitable as structural emblems
                            or navigational visual cues.
                          </p>
                        </div>
                      </div>
                    )}

                    {previewContext === "card" && (
                      <div className="w-full h-full flex items-center justify-center p-6 bg-zinc-50/20 dark:bg-zinc-950/10">
                        <div
                          style={{ boxShadow: `0 30px 60px -15px ${color}20` }}
                          className="w-64 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/60 bg-white/70 dark:bg-[#0f121e]/80 backdrop-blur-xl p-5 flex flex-col items-center text-center space-y-4 transition duration-300"
                        >
                          <div className="w-28 h-28 relative flex items-center justify-center">
                            <div
                              className="absolute inset-2 rounded-full blur-2xl opacity-20 pointer-events-none"
                              style={{ backgroundColor: color }}
                            />
                            <ActiveComponent {...canvasIconProps} size={112} />
                          </div>

                          <div className="space-y-1.5">
                            <span className="px-2 py-0.5 text-[8px] font-extrabold text-indigo-650 dark:text-indigo-400 bg-indigo-500/10 rounded-full uppercase tracking-wider">
                              Premium Asset
                            </span>
                            <h3 className="text-xs font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider pt-1">
                              {currentIcon.name.replace("Icon", "")} Node
                            </h3>
                            <p className="text-[9px] text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-[190px]">
                              {(currentIcon as any).description ||
                                "Deploy state-of-the-art 3D modules into your web application framework."}
                            </p>
                          </div>

                          <div className="w-full pt-1 flex gap-2">
                            <button className="flex-1 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-[9px] font-extrabold uppercase tracking-wider transition active:scale-95 cursor-pointer">
                              Configure
                            </button>
                            <button
                              className="flex-1 py-1.5 rounded-xl text-white text-[9px] font-extrabold uppercase tracking-wider transition hover:brightness-110 active:scale-95 cursor-pointer"
                              style={{ backgroundColor: color }}
                            >
                              Deploy
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {previewContext === "hero" && (
                      <div className="w-full h-full grid grid-cols-12 items-center p-8 gap-6 text-left bg-zinc-50/20 dark:bg-zinc-950/10">
                        <div className="col-span-7 space-y-3">
                          <span className="px-2 py-0.5 text-[8px] font-extrabold text-indigo-500 bg-indigo-500/10 rounded-full uppercase tracking-wider">
                            Next-Gen Visuals
                          </span>
                          <h1 className="text-xl sm:text-2xl font-extrabold leading-tight text-zinc-900 dark:text-white tracking-tight">
                            Power Up Your <br />
                            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                              Design System
                            </span>
                          </h1>
                          <p className="text-[9px] text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-xs">
                            Elevate user experience with responsive, high-performance physical 3D
                            and 2D vector layouts.
                          </p>
                          <div className="flex gap-2 pt-1">
                            <button className="px-3.5 py-1.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-[9px] font-extrabold uppercase tracking-wider shadow-md hover:scale-[1.02] transition cursor-pointer">
                              Get Started
                            </button>
                            <button className="px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-450 text-[9px] font-extrabold uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition cursor-pointer">
                              Docs
                            </button>
                          </div>
                        </div>
                        <div className="col-span-5 flex items-center justify-center relative">
                          <div
                            className="absolute w-44 h-44 rounded-full blur-[70px] opacity-20 pointer-events-none"
                            style={{ backgroundColor: color }}
                          />
                          <div className="w-44 h-44 flex items-center justify-center">
                            <ActiveComponent {...canvasIconProps} size="100%" />
                          </div>
                        </div>
                      </div>
                    )}

                    {previewContext === "pricing" && (
                      <div className="w-full h-full flex items-center justify-center p-6 bg-zinc-50/20 dark:bg-zinc-950/10">
                        <div
                          style={{ boxShadow: `0 30px 60px -15px ${color}20` }}
                          className="w-64 border border-zinc-200/50 dark:border-zinc-800/60 rounded-3xl p-5 bg-white/70 dark:bg-[#0f121e]/85 backdrop-blur-xl flex flex-col items-center text-center relative overflow-hidden transition duration-300"
                        >
                          {/* Gradient border indicator */}
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500" />

                          {/* Active icon sits beautifully at the top */}
                          <div className="w-24 h-24 mt-2 flex items-center justify-center relative">
                            <div
                              className="absolute inset-0 rounded-full blur-2xl opacity-15 pointer-events-none"
                              style={{ backgroundColor: color }}
                            />
                            <ActiveComponent {...canvasIconProps} size="100%" />
                          </div>

                          {/* Pricing Tier details */}
                          <div className="space-y-1.5 mt-2">
                            <span className="text-[8px] font-extrabold text-indigo-500 uppercase tracking-widest">
                              Enterprise Tier
                            </span>
                            <div className="flex items-baseline justify-center gap-0.5">
                              <span className="text-xl font-extrabold text-zinc-900 dark:text-white">
                                $49
                              </span>
                              <span className="text-[9px] font-semibold text-zinc-400 dark:text-zinc-500">
                                / month
                              </span>
                            </div>
                            <p className="text-[9px] text-zinc-400 dark:text-zinc-500 max-w-[190px] leading-relaxed">
                              Deploy high-performance 3D visual assets directly across your product
                              lines.
                            </p>
                          </div>

                          {/* Action call */}
                          <button
                            style={{ backgroundColor: color }}
                            className="w-full mt-4 py-2 rounded-xl text-white text-[9px] font-extrabold uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition cursor-pointer"
                          >
                            Start 14-Day Trial
                          </button>
                        </div>
                      </div>
                    )}

                    {previewContext === "mobile" && (
                      <div className="w-full h-full flex items-center justify-center p-4 bg-zinc-50/20 dark:bg-zinc-950/10">
                        {/* Simulated Phone Shell */}
                        <div className="w-[190px] h-[350px] rounded-[36px] border-[5px] border-zinc-950 dark:border-zinc-800 bg-gradient-to-b from-indigo-950/50 via-zinc-950 to-zinc-950 shadow-2xl relative overflow-hidden flex flex-col">
                          {/* Phone Speaker Notch */}
                          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-zinc-950 dark:bg-zinc-800 rounded-full z-15 flex items-center justify-center">
                            <div className="w-6 h-0.5 bg-zinc-800 dark:bg-zinc-700 rounded-full" />
                          </div>

                          {/* Status Indicators */}
                          <div className="h-7 px-4 pt-2.5 flex justify-between items-center text-[7px] font-bold text-zinc-450 dark:text-zinc-500 select-none">
                            <span>9:41</span>
                            <div className="flex items-center gap-1">
                              <LucideAll.Wifi size={8} />
                              <LucideAll.Battery size={8} />
                            </div>
                          </div>

                          {/* Mock iOS Dashboard Screen */}
                          <div className="flex-grow p-2.5 flex flex-col justify-between">
                            <div className="space-y-0.5">
                              <h4 className="text-[9px] font-extrabold text-white">
                                Smart Home Control
                              </h4>
                              <span className="text-[6px] text-zinc-500 uppercase tracking-wider block">
                                Active Integrations
                              </span>
                            </div>

                            {/* Central Widget Square Container */}
                            <div className="w-full aspect-square rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-2.5 flex flex-col justify-between shadow-sm relative group">
                              {/* Widget Header */}
                              <div className="flex justify-between items-start">
                                <span className="text-[6px] font-extrabold uppercase text-white/70 tracking-wider">
                                  3D Sync Link
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              </div>

                              {/* Active Component centered inside launcher */}
                              <div className="w-18 h-18 self-center flex items-center justify-center">
                                <ActiveComponent {...canvasIconProps} size="100%" />
                              </div>

                              {/* Widget Footer */}
                              <div className="flex justify-between items-end">
                                <span className="text-[6px] text-white/60 font-bold uppercase truncate max-w-[70px]">
                                  {currentIcon.name.replace("Icon", "")}
                                </span>
                                <span className="text-[6px] font-extrabold text-indigo-400 uppercase tracking-widest">
                                  Active
                                </span>
                              </div>
                            </div>

                            {/* Bottom App Dock Icons Mock */}
                            <div className="h-6 w-full rounded-xl bg-white/5 border border-white/5 backdrop-blur-md flex justify-around items-center px-1">
                              <div className="w-3.5 h-3.5 rounded bg-white/10" />
                              <div className="w-3.5 h-3.5 rounded bg-white/10" />
                              <div className="w-3.5 h-3.5 rounded bg-white/10" />
                              <div className="w-3.5 h-3.5 rounded bg-white/10" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {previewContext === "testimonial" && (
                      <div className="w-full h-full flex items-center justify-center p-6 bg-zinc-50/20 dark:bg-zinc-950/10">
                        <div
                          style={{ boxShadow: `0 35px 70px -15px ${color}20` }}
                          className="w-72 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/60 bg-white/75 dark:bg-[#0f121e]/85 backdrop-blur-xl p-5 flex flex-col relative transition duration-300"
                        >
                          {/* Quote Mark */}
                          <span className="absolute -top-3 left-4 text-5xl font-serif text-indigo-500/25 leading-none pointer-events-none select-none">
                            “
                          </span>

                          {/* Floating Active 3D Badge on top right */}
                          <div className="absolute -top-6 -right-6 w-20 h-20 flex items-center justify-center pointer-events-auto">
                            <ActiveComponent {...canvasIconProps} size="100%" />
                          </div>

                          {/* Testimonial speech text */}
                          <p className="text-[10px] text-zinc-650 dark:text-zinc-400 font-medium italic leading-relaxed pt-2">
                            "Antigravity has completely transformed how we integrate high-fidelity
                            R3F visual assets. The interactive customizer lets us align presets in
                            seconds!"
                          </p>

                          {/* Line divider */}
                          <div className="w-full h-px bg-zinc-150 dark:bg-zinc-800/60 my-3" />

                          {/* User bio */}
                          <div className="flex items-center gap-2">
                            <div
                              style={{ borderColor: color }}
                              className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-850 border flex items-center justify-center text-[9px] font-extrabold text-zinc-700 dark:text-zinc-300"
                            >
                              JD
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[9px] font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider leading-none">
                                Jane Doe
                              </span>
                              <span className="text-[8px] text-zinc-400 dark:text-zinc-550 uppercase tracking-widest font-semibold pt-0.5">
                                Lead UI Architect
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {previewContext === "checkout" && (
                      <div className="w-full h-full flex items-center justify-center p-6 bg-zinc-50/20 dark:bg-zinc-950/10">
                        <div
                          style={{ boxShadow: `0 30px 60px -15px ${color}20` }}
                          className="w-64 border border-zinc-200/50 dark:border-zinc-800/60 rounded-3xl p-5 bg-white/70 dark:bg-[#0f121e]/85 backdrop-blur-xl flex flex-col relative transition duration-300"
                        >
                          {/* Receipt Header */}
                          <div className="flex justify-between items-center pb-3 border-b border-zinc-150 dark:border-zinc-800/60">
                            <span className="text-[8px] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                              Order Receipt
                            </span>
                            <span className="text-[9px] font-extrabold text-zinc-900 dark:text-white font-mono">
                              #9082
                            </span>
                          </div>

                          {/* Receipt Line Item Detail */}
                          <div className="flex items-center gap-3 py-3">
                            <div className="w-14 h-14 rounded-xl border border-zinc-150 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#111422]/50 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                              <div
                                className="absolute inset-1 rounded-full blur-xl opacity-10 pointer-events-none"
                                style={{ backgroundColor: color }}
                              />
                              <ActiveComponent {...canvasIconProps} size="100%" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[9px] font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider truncate leading-tight">
                                {currentIcon.name.replace("Icon", "")} 3D Package
                              </span>
                              <span className="text-[8px] text-zinc-450 dark:text-zinc-500 pt-0.5">
                                Commercial License
                              </span>
                            </div>
                          </div>

                          {/* Calculations List */}
                          <div className="space-y-1.5 py-2.5 border-t border-b border-dashed border-zinc-200 dark:border-zinc-800 text-[8px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                            <div className="flex justify-between">
                              <span>Subtotal</span>
                              <span className="text-zinc-700 dark:text-zinc-355 font-mono">
                                $19.00
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Discount (FREE)</span>
                              <span className="text-emerald-500 font-mono">-$19.00</span>
                            </div>
                            <div className="flex justify-between text-zinc-900 dark:text-white pt-1">
                              <span>Total Cost</span>
                              <span className="font-mono text-sm leading-none">$0.00</span>
                            </div>
                          </div>

                          {/* Check Out button */}
                          <button
                            style={{ backgroundColor: color }}
                            className="w-full mt-4 py-2 rounded-xl text-white text-[9px] font-extrabold uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition cursor-pointer"
                          >
                            Complete Order
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Ambient guidance overlay */}
            {activeSidebarTab !== "compare" && (
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 pointer-events-none select-none flex items-center gap-2 bg-zinc-100/60 dark:bg-zinc-900/50 px-4 py-2 rounded-full backdrop-blur-md">
                <Sparkles size={11} className="text-indigo-500" />
                <span>{t("drag_instructions")}</span>
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] shadow-lg overflow-hidden">
            <div className="px-6 py-3.5 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 bg-zinc-50/50 dark:bg-[#0a0d14]">
              {/* Tab Selector */}
              <div className="flex items-center gap-1 bg-zinc-200/60 dark:bg-zinc-900/80 p-0.5 rounded-xl">
                <button
                  onClick={() => setActiveConsoleTab("react")}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-extrabold transition cursor-pointer ${
                    activeConsoleTab === "react"
                      ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  React Component
                </button>
                <button
                  onClick={() => setActiveConsoleTab("svg")}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-extrabold transition cursor-pointer ${
                    activeConsoleTab === "svg"
                      ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  SVG Markup
                </button>
              </div>

              {/* Sleek Tool Actions */}
              <div className="flex items-center gap-1.5">
                {/* Copy Active Code */}
                <button
                  onClick={activeConsoleTab === "react" ? handleCopyCode : handleCopySVG}
                  title={
                    activeConsoleTab === "react"
                      ? "Copy React Component Code"
                      : "Copy SVG Vector Code"
                  }
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer active:scale-95"
                >
                  {(activeConsoleTab === "react" ? copied : copiedSVG) ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>

                {/* Copy Import (only visible on React tab) */}
                {activeConsoleTab === "react" && (
                  <button
                    onClick={handleCopyImport}
                    title="Copy ES6 Import Statement"
                    className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition cursor-pointer active:scale-95"
                  >
                    {copiedImport ? <Check size={14} /> : <Code size={14} />}
                  </button>
                )}

                {/* Download SVG */}
                <button
                  onClick={handleDownloadSVG}
                  disabled={downloading}
                  title="Download SVG Vector Asset"
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <LucideAll.Download size={14} />
                </button>

                {/* Download PNG (only on 3D render) */}
                {renderMode === "3d" && (
                  <button
                    onClick={handleDownloadPNG}
                    title="Download High-Resolution 3D PNG"
                    className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <LucideAll.Camera size={14} />
                  </button>
                )}

                {/* Download GLTF 3D Model Asset (only on 3D render) */}
                {renderMode === "3d" && (
                  <button
                    onClick={handleExportGLTF}
                    title="Export & Download 3D Model Asset (GLTF)"
                    className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer active:scale-95 flex items-center justify-center gap-1 text-[9px] font-extrabold uppercase tracking-wider px-2.5"
                  >
                    <LucideAll.Package size={14} />
                    <span>3D GLTF</span>
                  </button>
                )}

                {/* Download TSX Component (only visible on React tab) */}
                {activeConsoleTab === "react" && (
                  <button
                    onClick={handleDownloadTSX}
                    title="Download Customized React TSX Component File"
                    className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer active:scale-95"
                  >
                    <LucideAll.FileCode size={14} />
                  </button>
                )}

                {/* Copy TSX Component Wrapper to clipboard (only visible on React tab) */}
                {activeConsoleTab === "react" && (
                  <button
                    onClick={handleCopyTSXWrapper}
                    title={
                      copiedTSXWrapper ? "Copied!" : "Copy Customized React TSX Component Code"
                    }
                    className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer active:scale-95 flex items-center justify-center"
                  >
                    {copiedTSXWrapper ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            </div>
            <pre className="p-6 text-xs text-zinc-700 dark:text-zinc-300 font-mono overflow-x-auto leading-relaxed bg-zinc-50/20 dark:bg-[#0b0e16] custom-scrollbar max-h-60">
              {activeConsoleTab === "react" ? codeString : svgString}
            </pre>
          </div>
        </div>

        {/* Right Side: Custom Sidebar Visual Editor */}
        <div className={`lg:col-span-4 space-y-6 ${presentationMode ? "hidden" : ""}`}>
          <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] shadow-xl space-y-6">
            <div className="flex border-b border-zinc-100 dark:border-zinc-800/80 pb-3 gap-1 overflow-x-auto custom-scrollbar">
              {(["tuning", "material", "scene", "presets", "compare"] as const).map((tab) => {
                const isSelected = activeSidebarTab === tab;
                const icon = {
                  tuning: <LucideSliders size={13} />,
                  material: <LucideAll.Box size={13} />,
                  scene: <LucideAll.Layers size={13} />,
                  presets: <LucideAll.Save size={13} />,
                  compare: <LucideAll.Columns size={13} />
                }[tab];
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveSidebarTab(tab)}
                    className={`flex items-center gap-1 py-1.5 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer border transition flex-grow text-center justify-center whitespace-nowrap ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 font-extrabold"
                        : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                    }`}
                  >
                    {icon}
                    <span>{tab}</span>
                  </button>
                );
              })}
            </div>

            {/* Tuning Tab */}
            {activeSidebarTab === "tuning" && (
              <div className="space-y-4 animate-page-fade">
                {/* 1. Geometry & Presets Group */}
                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningGeometryOpen(!tuningGeometryOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Geometry & Angles</span>
                    {tuningGeometryOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningGeometryOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      {/* Render Mode Selectors */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          Render Mode
                        </label>
                        <div className="flex gap-2">
                          {(["3d", "2d"] as const).map((m) => {
                            const isSelected = renderMode === m;
                            return (
                              <button
                                key={m}
                                onClick={() => setRenderMode(m)}
                                className={`py-1.5 px-3 rounded-xl text-xs font-bold uppercase border transition cursor-pointer flex-grow text-center ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                                }`}
                              >
                                {m === "3d" ? "3D Render" : "2D Vector"}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Presets Selectors */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          {t("presets_label")}
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {(
                            [
                              "glass",
                              "metal",
                              "clay",
                              "hologram",
                              "gold",
                              "silver",
                              "glassmorphism",
                              "carbon",
                              "wood",
                              "neon-glow",
                              "liquid-metal"
                            ] as IconPreset[]
                          ).map((p) => {
                            const isSelected = preset === p;
                            return (
                              <button
                                key={p}
                                onClick={() => handlePresetSelect(p)}
                                className={`py-1.5 px-2.5 rounded-xl text-[10px] font-bold capitalize border transition cursor-pointer flex-grow text-center ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                                }`}
                              >
                                {p}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Angle Selectors */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          {t("angle_label" as any)}
                        </label>
                        <div className="flex gap-2">
                          {(["front", "perspective", "tilted"] as IconAngle[]).map((a) => {
                            const isSelected = angle === a;
                            const translationKey = `angle_${a}` as any;
                            return (
                              <button
                                key={a}
                                onClick={() => setAngle(a)}
                                className={`py-1.5 px-3 rounded-xl text-xs font-bold capitalize border transition cursor-pointer flex-grow text-center ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                                }`}
                              >
                                {t(translationKey)}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Environment Selectors */}
                      {renderMode === "3d" && (
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                            Environment Light
                          </label>
                          <div className="grid grid-cols-3 gap-1.5">
                            {(
                              [
                                "city",
                                "sunset",
                                "studio",
                                "night",
                                "park",
                                "forest",
                                "lobby",
                                "apartment",
                                "warehouse"
                              ] as IconEnvironment[]
                            ).map((env) => {
                              const isSelected = environment === env;
                              return (
                                <button
                                  key={env}
                                  onClick={() => setEnvironment(env)}
                                  className={`py-1.5 px-2.5 rounded-xl text-[10px] font-bold capitalize border transition cursor-pointer text-center ${
                                    isSelected
                                      ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-450"
                                  }`}
                                >
                                  {env}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Color System Group */}
                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningColorOpen(!tuningColorOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Color & Styling</span>
                    {tuningColorOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningColorOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      {/* Curated Color Palettes */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                          <Palette size={11} className="text-indigo-500" />
                          <span>{t("theme_palette")}</span>
                        </label>
                        <div className="grid grid-cols-4 gap-1.5">
                          {CURATED_PALETTES.map((p) => {
                            const isSelected = color === p.color && accentColor === p.accentColor;
                            return (
                              <button
                                key={p.name}
                                onClick={() => handlePaletteSelect(p.color, p.accentColor)}
                                title={p.name}
                                className={`relative h-8 rounded-xl overflow-hidden border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer flex ${
                                  isSelected
                                    ? "border-indigo-500 ring-2 ring-indigo-500/20 shadow-md"
                                    : "border-zinc-200 dark:border-zinc-800"
                                }`}
                              >
                                <div
                                  className="w-1/2 h-full"
                                  style={{ backgroundColor: p.color }}
                                />
                                <div
                                  className="w-1/2 h-full"
                                  style={{ backgroundColor: p.accentColor }}
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Custom manual color inputs */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                            Primary Color
                          </span>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                            <input
                              type="color"
                              value={color}
                              onChange={(e) => handleColorChange(e.target.value)}
                              className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                            />
                            <input
                              type="text"
                              value={primaryInput}
                              onChange={(e) => handlePrimaryTextChange(e.target.value)}
                              maxLength={7}
                              className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400 focus:outline-none focus:text-indigo-500 uppercase p-0"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                            Accent Glow
                          </span>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                            <input
                              type="color"
                              value={accentColor}
                              onChange={(e) => setAccentColor(e.target.value)}
                              className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                            />
                            <input
                              type="text"
                              value={accentInput}
                              onChange={(e) => handleAccentTextChange(e.target.value)}
                              maxLength={7}
                              className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400 focus:outline-none focus:text-indigo-500 uppercase p-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Gradient Customizer Group */}
                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningGradientOpen(!tuningGradientOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Gradients & Overlays</span>
                    {tuningGradientOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningGradientOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      {/* Gradient Type Selector */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          Gradient Type
                        </label>
                        <div className="flex gap-2">
                          {(
                            [
                              { id: "none", name: "Solid Color" },
                              { id: "linear", name: "Linear" },
                              { id: "radial", name: "Radial" }
                            ] as const
                          ).map((gt) => {
                            const isSelected = gradientType === gt.id;
                            return (
                              <button
                                key={gt.id}
                                onClick={() => setGradientType(gt.id)}
                                className={`py-1.5 px-3 rounded-xl text-[10px] font-bold uppercase border transition cursor-pointer flex-grow text-center ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-400"
                                }`}
                              >
                                {gt.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Gradient Colors */}
                      {gradientType !== "none" && (
                        <div className="grid grid-cols-2 gap-3 animate-page-fade">
                          {/* Start Color */}
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                              Start Color
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                              <input
                                type="color"
                                value={gradientColorStart}
                                onChange={(e) => {
                                  setGradientColorStart(e.target.value);
                                  setGradientColorStartInput(e.target.value);
                                }}
                                className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                              />
                              <input
                                type="text"
                                value={gradientColorStartInput}
                                onChange={(e) => {
                                  setGradientColorStartInput(e.target.value);
                                  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                    setGradientColorStart(e.target.value);
                                  }
                                }}
                                maxLength={7}
                                className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400 focus:outline-none focus:text-indigo-500 uppercase p-0"
                              />
                            </div>
                          </div>

                          {/* End Color */}
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                              End Color
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                              <input
                                type="color"
                                value={gradientColorEnd}
                                onChange={(e) => {
                                  setGradientColorEnd(e.target.value);
                                  setGradientColorEndInput(e.target.value);
                                }}
                                className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                              />
                              <input
                                type="text"
                                value={gradientColorEndInput}
                                onChange={(e) => {
                                  setGradientColorEndInput(e.target.value);
                                  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                    setGradientColorEnd(e.target.value);
                                  }
                                }}
                                maxLength={7}
                                className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400 focus:outline-none focus:text-indigo-500 uppercase p-0"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Gradient Angle Slider (Only for Linear) */}
                      {gradientType === "linear" && (
                        <div className="space-y-1.5 animate-page-fade">
                          <div className="flex justify-between items-center text-[10px] font-bold">
                            <span className="text-zinc-500 uppercase tracking-wider">
                              Gradient Angle
                            </span>
                            <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                              {gradientAngle}°
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="360"
                            step="5"
                            value={gradientAngle}
                            onChange={(e) => setGradientAngle(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Surface Normal Texture Group */}
                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningNormalsOpen(!tuningNormalsOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Surface Tactility</span>
                    {tuningNormalsOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningNormalsOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          Tactility Normal Map
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: "none", name: "Smooth" },
                            { id: "noise", name: "Noise Bump" },
                            { id: "leather", name: "Leather" },
                            { id: "grid", name: "Digital Grid" }
                          ].map((norm) => (
                            <button
                              key={norm.id}
                              onClick={() => setSurfaceNormal(norm.id as any)}
                              className={`py-2 px-1 rounded-xl text-[9px] font-bold border uppercase transition cursor-pointer text-center ${
                                surfaceNormal === norm.id
                                  ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                  : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-400"
                              }`}
                            >
                              {norm.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Particles FX Group */}
                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningParticlesOpen(!tuningParticlesOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Particle FX Environment</span>
                    {tuningParticlesOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningParticlesOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      {/* Particle Type Selector */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-550 uppercase tracking-wider block">
                          Particle Atmosphere
                        </label>
                        <div className="grid grid-cols-4 gap-1.5">
                          {[
                            { id: "none", name: "None" },
                            { id: "sparkles", name: "Sparkle" },
                            { id: "dust", name: "Dust" },
                            { id: "stars", name: "Stars" }
                          ].map((pt) => (
                            <button
                              key={pt.id}
                              onClick={() => setParticleSystem(pt.id as any)}
                              className={`py-1.5 px-1 rounded-xl text-[9px] font-bold border uppercase transition cursor-pointer text-center ${
                                particleSystem === pt.id
                                  ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                  : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-655 dark:text-zinc-455"
                              }`}
                            >
                              {pt.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {particleSystem !== "none" && (
                        <>
                          {/* Particle Color */}
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                              Particle Color
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                              <input
                                type="color"
                                value={particleColor}
                                onChange={(e) => {
                                  setParticleColor(e.target.value);
                                  setParticleColorInput(e.target.value);
                                }}
                                className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                              />
                              <input
                                type="text"
                                value={particleColorInput}
                                onChange={(e) => {
                                  setParticleColorInput(e.target.value);
                                  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                    setParticleColor(e.target.value);
                                  }
                                }}
                                maxLength={7}
                                className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-655 dark:text-zinc-455 focus:outline-none focus:text-indigo-500 uppercase p-0"
                              />
                            </div>
                          </div>

                          {/* Particle Count Slider */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-bold">
                              <span className="text-zinc-500 uppercase tracking-wider">
                                Particle Count
                              </span>
                              <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                                {particleCount}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="10"
                              max="200"
                              step="5"
                              value={particleCount}
                              onChange={(e) => setParticleCount(parseInt(e.target.value))}
                              className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                          </div>

                          {/* Particle Speed Slider */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-bold">
                              <span className="text-zinc-500 uppercase tracking-wider">
                                Float Speed
                              </span>
                              <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                                {particleSpeed.toFixed(1)}x
                              </span>
                            </div>
                            <input
                              type="range"
                              min="0.1"
                              max="3.0"
                              step="0.1"
                              value={particleSpeed}
                              onChange={(e) => setParticleSpeed(parseFloat(e.target.value))}
                              className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* 3D Typography Label Group */}
                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningLabelOpen(!tuningLabelOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>3D Canvas Typography</span>
                    {tuningLabelOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningLabelOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      {/* Label Text Input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-550 uppercase tracking-wider block">
                          Typography Label
                        </label>
                        <input
                          type="text"
                          value={labelText}
                          placeholder="e.g. Awesome Icon"
                          onChange={(e) => {
                            setLabelText(e.target.value);
                            audioEngine.playClick();
                          }}
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-300 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>

                      {/* Label Color Input */}
                      {labelText && (
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                            Label Color
                          </span>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                            <input
                              type="color"
                              value={labelColor}
                              onChange={(e) => {
                                setLabelColor(e.target.value);
                                setLabelColorInput(e.target.value);
                              }}
                              className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                            />
                            <input
                              type="text"
                              value={labelColorInput}
                              onChange={(e) => {
                                setLabelColorInput(e.target.value);
                                if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                  setLabelColor(e.target.value);
                                }
                              }}
                              maxLength={7}
                              className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-655 dark:text-zinc-455 focus:outline-none focus:text-indigo-500 uppercase p-0"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 3D Explode & Reflections Group */}
                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningExplodeOpen(!tuningExplodeOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Explode & Reflections</span>
                    {tuningExplodeOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningExplodeOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      {/* Explode Distance Slider */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-500 uppercase tracking-wider">
                            Mesh Explode Distance
                          </span>
                          <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                            {explodeDistance.toFixed(2)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.2"
                          step="0.05"
                          value={explodeDistance}
                          onChange={(e) => {
                            setExplodeDistance(parseFloat(e.target.value));
                            audioEngine.playClick();
                          }}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Environment Rotation Slider */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-500 uppercase tracking-wider">
                            Reflection Map Rotation
                          </span>
                          <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                            {Math.round((envRotation * 180) / Math.PI)}°
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={2 * Math.PI}
                          step={Math.PI / 36}
                          value={envRotation}
                          onChange={(e) => {
                            setEnvRotation(parseFloat(e.target.value));
                            audioEngine.playClick();
                          }}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Motion & Animation Group */}

                <div className="border border-zinc-200 dark:border-zinc-850 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setTuningMotionOpen(!tuningMotionOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Motion & Physics</span>
                    {tuningMotionOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {tuningMotionOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-850/60 animate-page-fade">
                      {/* Spin Speed */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
                          <span className="uppercase tracking-wider">{t("spin_speed")}</span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {spinSpeed.toFixed(1)}x
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="3.0"
                          step="0.1"
                          value={spinSpeed}
                          onChange={(e) => setSpinSpeed(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Float Height */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
                          <span className="uppercase tracking-wider">{t("float_height")}</span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {floatHeight.toFixed(1)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="2.5"
                          step="0.1"
                          value={floatHeight}
                          onChange={(e) => setFloatHeight(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Mouse Parallax Follow Strength */}
                      {interactive && (
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
                            <span className="uppercase tracking-wider">Mouse Follow Tilt</span>
                            <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                              {tiltIntensity.toFixed(1)}x
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0.0"
                            max="2.5"
                            step="0.1"
                            value={tiltIntensity}
                            onChange={(e) => setTiltIntensity(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>
                      )}

                      {/* Micro-Animation Presets */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          Motion Preset
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { id: "spin", name: "Rotate Spin" },
                            { id: "wobble", name: "Tilt Wobble" },
                            { id: "breathe", name: "Pulse Scale" },
                            { id: "wave", name: "Sine Wave Float" },
                            { id: "bounce", name: "Elastic Bounce" },
                            { id: "orbit", name: "Pendulum Swing" }
                          ].map((anim) => {
                            const isSelected = animationType === anim.id;
                            return (
                              <button
                                key={anim.id}
                                onClick={() => setAnimationType(anim.id as any)}
                                className={`py-1.5 px-2 rounded-xl text-[10px] font-bold border transition cursor-pointer text-center truncate ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-450"
                                }`}
                              >
                                {anim.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Axis & Direction - only shown for spin type */}
                      {animationType === "spin" && (
                        <div className="space-y-3 pt-1">
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider block">
                              Spin Rotation Axis
                            </label>
                            <div className="flex gap-1.5">
                              {(["x", "y", "z"] as const).map((ax) => {
                                const isSelected = animationAxis === ax;
                                return (
                                  <button
                                    key={ax}
                                    onClick={() => setAnimationAxis(ax)}
                                    className={`py-1 px-2 rounded-lg text-[9px] font-bold uppercase border transition cursor-pointer flex-grow text-center ${
                                      isSelected
                                        ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                                    }`}
                                  >
                                    {ax}-Axis
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider block">
                              Spin Direction
                            </label>
                            <div className="flex gap-1.5">
                              {(["clockwise", "counter-clockwise"] as const).map((dir) => {
                                const isSelected = animationDirection === dir;
                                return (
                                  <button
                                    key={dir}
                                    onClick={() => setAnimationDirection(dir)}
                                    className={`py-1 px-2 rounded-lg text-[9px] font-bold border transition cursor-pointer flex-grow text-center capitalize ${
                                      isSelected
                                        ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-655 dark:text-zinc-455"
                                    }`}
                                  >
                                    {dir === "clockwise" ? "Clockwise" : "Reverse"}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Interactive Hover toggle */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider">
                          {t("interactive_label")}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={interactive}
                            onChange={(e) => setInteractive(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-350 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
                        </label>
                      </div>

                      {/* Timeline & Playback Rig */}
                      <div className="space-y-3 pt-3 border-t border-zinc-150 dark:border-zinc-800/80 animate-page-fade">
                        <label className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider block">
                          Timeline Playback
                        </label>

                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider">
                            Animation State
                          </span>
                          <button
                            onClick={() => setAnimationPlaying(!animationPlaying)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-extrabold text-[10px] uppercase tracking-wider transition active:scale-95 cursor-pointer border ${
                              animationPlaying
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/10 hover:bg-indigo-500"
                                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                            }`}
                          >
                            {animationPlaying ? (
                              <>
                                <LucideAll.Pause size={10} fill="currentColor" />
                                <span>Playing</span>
                              </>
                            ) : (
                              <>
                                <LucideAll.Play size={10} fill="currentColor" />
                                <span>Paused</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Scrubber slider - only active when paused */}
                        {!animationPlaying && (
                          <div className="space-y-1.5 animate-page-fade">
                            <div className="flex justify-between items-center text-[10px] font-bold text-zinc-450 dark:text-zinc-500">
                              <span className="uppercase tracking-wider">
                                Manual Orbit Scrubber
                              </span>
                              <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                                {scrubberRotation}°
                              </span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="360"
                              step="2"
                              value={scrubberRotation}
                              onChange={(e) => setScrubberRotation(parseInt(e.target.value))}
                              className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                            <span className="text-[8px] text-zinc-400 dark:text-zinc-500 italic block leading-relaxed">
                              Drag the slider to manually rotate the 3D model when playback is
                              paused.
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Material Tab */}
            {activeSidebarTab === "material" && (
              <div className="space-y-4 animate-page-fade">
                {/* 1. Base Physical Parameters Group */}
                <div className="border border-zinc-200 dark:border-zinc-855 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <div className="w-full flex items-center justify-between p-3.5 bg-zinc-50/30 dark:bg-[#0b0e16]/30">
                    <button
                      onClick={() => setMaterialParamsOpen(!materialParamsOpen)}
                      className="flex-grow text-left text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider cursor-pointer focus:outline-none flex items-center justify-between"
                    >
                      <span>Physical Parameters</span>
                      {materialParamsOpen ? (
                        <ChevronDown size={12} className="mr-2" />
                      ) : (
                        <ChevronRight size={12} className="mr-2" />
                      )}
                    </button>
                    {customMaterialKeys.length > 0 && (
                      <button
                        onClick={() => {
                          const defaults = getMaterialConfig(preset, color, theme, accentColor);
                          setMaterialRoughness(defaults.roughness);
                          setMaterialMetalness(defaults.metalness);
                          setMaterialTransmission(defaults.transmission);
                          setMaterialThickness(defaults.thickness);
                          setMaterialClearcoat(defaults.clearcoat);
                          setMaterialClearcoatRoughness(defaults.clearcoatRoughness);
                          setMaterialIor(defaults.ior);
                          setMaterialEmissiveIntensity(defaults.emissiveIntensity);
                        }}
                        className="text-[9px] text-indigo-500 hover:underline font-extrabold cursor-pointer"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  {materialParamsOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-855/60 animate-page-fade">
                      {/* Roughness */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Roughness
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {materialRoughness.toFixed(2)}
                            {materialRoughness === defaultMat.roughness
                              ? " (default)"
                              : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.01"
                          value={materialRoughness}
                          onChange={(e) => setMaterialRoughness(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Metalness */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Metalness
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {materialMetalness.toFixed(2)}
                            {materialMetalness === defaultMat.metalness
                              ? " (default)"
                              : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.01"
                          value={materialMetalness}
                          onChange={(e) => setMaterialMetalness(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Transmission */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Transmission
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {materialTransmission.toFixed(2)}
                            {materialTransmission === defaultMat.transmission
                              ? " (default)"
                              : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.01"
                          value={materialTransmission}
                          onChange={(e) => setMaterialTransmission(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Thickness */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Thickness
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {materialThickness.toFixed(2)}
                            {materialThickness === defaultMat.thickness
                              ? " (default)"
                              : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="3.0"
                          step="0.05"
                          value={materialThickness}
                          onChange={(e) => setMaterialThickness(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Clearcoat */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Clearcoat
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {materialClearcoat.toFixed(2)}
                            {materialClearcoat === defaultMat.clearcoat
                              ? " (default)"
                              : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.01"
                          value={materialClearcoat}
                          onChange={(e) => setMaterialClearcoat(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Clearcoat Roughness */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Clearcoat Roughness
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {materialClearcoatRoughness.toFixed(2)}
                            {materialClearcoatRoughness === defaultMat.clearcoatRoughness
                              ? " (default)"
                              : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.01"
                          value={materialClearcoatRoughness}
                          onChange={(e) =>
                            setMaterialClearcoatRoughness(parseFloat(e.target.value))
                          }
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* IOR */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Index of Refraction (IOR)
                          </span>
                          <span className="text-zinc-770 dark:text-zinc-300 font-mono">
                            {materialIor.toFixed(2)}
                            {materialIor === defaultMat.ior ? " (default)" : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="1.0"
                          max="2.5"
                          step="0.01"
                          value={materialIor}
                          onChange={(e) => setMaterialIor(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Emissive Intensity */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Emissive Intensity
                          </span>
                          <span className="text-zinc-770 dark:text-zinc-300 font-mono">
                            {materialEmissiveIntensity.toFixed(2)}
                            {materialEmissiveIntensity === defaultMat.emissiveIntensity
                              ? " (default)"
                              : " (edited)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="5.0"
                          step="0.1"
                          value={materialEmissiveIntensity}
                          onChange={(e) => setMaterialEmissiveIntensity(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Iridescence Intensity */}
                      <div className="space-y-1.5 pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Iridescent Foil Intensity
                          </span>
                          <span className="text-zinc-770 dark:text-zinc-300 font-mono">
                            {materialIridescence.toFixed(2)}
                            {materialIridescence === 0 ? " (none)" : " (active)"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.05"
                          value={materialIridescence}
                          onChange={(e) => {
                            setMaterialIridescence(parseFloat(e.target.value));
                            audioEngine.playClick();
                          }}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Iridescence IOR */}
                      {materialIridescence > 0 && (
                        <>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-bold">
                              <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                                Foil Refraction Index (IOR)
                              </span>
                              <span className="text-zinc-770 dark:text-zinc-300 font-mono">
                                {materialIridescenceIor.toFixed(2)}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="1.0"
                              max="3.0"
                              step="0.05"
                              value={materialIridescenceIor}
                              onChange={(e) => {
                                setMaterialIridescenceIor(parseFloat(e.target.value));
                                audioEngine.playClick();
                              }}
                              className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-bold">
                              <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                                Foil Film Thickness
                              </span>
                              <span className="text-zinc-770 dark:text-zinc-300 font-mono">
                                {materialIridescenceThickness} nm
                              </span>
                            </div>
                            <input
                              type="range"
                              min="100"
                              max="1000"
                              step="50"
                              value={materialIridescenceThickness}
                              onChange={(e) => {
                                setMaterialIridescenceThickness(parseInt(e.target.value));
                                audioEngine.playClick();
                              }}
                              className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Surface Noise Shaders Group */}
                <div className="border border-zinc-200 dark:border-zinc-855 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setMaterialTexturesOpen(!materialTexturesOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Surface Texturing</span>
                    {materialTexturesOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {materialTexturesOpen && (
                    <div className="p-4 space-y-3 border-t border-zinc-200/60 dark:border-zinc-855/60 animate-page-fade">
                      <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                        Surface Noise Layer
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { id: "none", name: "Perfect Polish" },
                          { id: "frosted", name: "Frosted Glass" },
                          { id: "brushed", name: "Brushed Metal" },
                          { id: "carbon", name: "Carbon Twill" }
                        ].map((txt) => {
                          const isSelected = textureType === txt.id;
                          return (
                            <button
                              key={txt.id}
                              onClick={() => setTextureType(txt.id as any)}
                              className={`py-1.5 px-3 rounded-xl text-[10px] font-bold border transition cursor-pointer text-center truncate ${
                                isSelected
                                  ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                  : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-450"
                              }`}
                            >
                              {txt.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Emissive Pulse Animations Group */}
                <div className="border border-zinc-200 dark:border-zinc-855 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setMaterialPulsationOpen(!materialPulsationOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Emissive Pulsing</span>
                    {materialPulsationOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {materialPulsationOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-855/60 animate-page-fade">
                      {/* Pulse Speed */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Pulse Breathing Speed
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {emissivePulseSpeed > 0 ? `${emissivePulseSpeed.toFixed(1)}Hz` : "Off"}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="4.0"
                          step="0.1"
                          value={emissivePulseSpeed}
                          onChange={(e) => setEmissivePulseSpeed(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Pulse Intensity */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-555 dark:text-zinc-500 uppercase tracking-wider">
                            Pulse Depth Amplitude
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                            {(emissivePulseIntensity * 100).toFixed(0)}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="1.0"
                          step="0.05"
                          value={emissivePulseIntensity}
                          onChange={(e) => setEmissivePulseIntensity(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Scene Tab */}
            {activeSidebarTab === "scene" && (
              <div className="space-y-4 animate-page-fade">
                {/* 1. Viewport & Background Layouts Group */}
                <div className="border border-zinc-200 dark:border-zinc-855 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setSceneBgOpen(!sceneBgOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Viewport & Contexts</span>
                    {sceneBgOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {sceneBgOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-855/60 animate-page-fade">
                      {/* Viewport Background choices */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          Viewport Background
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { id: "default", name: "Default" },
                            { id: "grid", name: "Isometric Grid" },
                            { id: "gradient-indigo", name: "Deep Indigo" },
                            { id: "gradient-sunset", name: "Sunset Glow" },
                            { id: "gradient-mesh", name: "Modern Mesh" }
                          ].map((bg) => {
                            const isSelected = viewportBg === bg.id;
                            return (
                              <button
                                key={bg.id}
                                onClick={() => setViewportBg(bg.id as any)}
                                className={`py-1.5 px-3 rounded-xl text-[10px] font-bold border transition cursor-pointer text-center truncate ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                                }`}
                              >
                                {bg.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Mock UI Context Layouts */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center pb-1.5 border-b border-zinc-150 dark:border-zinc-800/60">
                          <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                            Component Context Layout
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer select-none">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-450">
                              Showcase Collage
                            </span>
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={showcaseGridView}
                                onChange={(e) => setShowcaseGridView(e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-7 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600" />
                            </div>
                          </label>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {[
                            {
                              id: "icon",
                              name: "Isolated Icon",
                              desc: "Full-canvas preview layout"
                            },
                            {
                              id: "navbar",
                              name: "Navbar Integration",
                              desc: "Mockup navigation header component"
                            },
                            {
                              id: "card",
                              name: "Feature Stats Card",
                              desc: "Centred inside a glassmorphic dashboard card"
                            },
                            {
                              id: "hero",
                              name: "Landing Page Hero",
                              desc: "Main marketing graphic of a split landing page"
                            },
                            {
                              id: "pricing",
                              name: "SaaS Pricing Tier",
                              desc: "Featured pricing plan checkmark card"
                            },
                            {
                              id: "mobile",
                              name: "iOS Home Screen Widget",
                              desc: "Positioned inside a phone widget layout"
                            },
                            {
                              id: "testimonial",
                              name: "Customer Review Card",
                              desc: "SaaS user review glass bubble card"
                            },
                            {
                              id: "checkout",
                              name: "Checkout Receipt",
                              desc: "Order confirmation payment card widget"
                            }
                          ].map((ctx) => {
                            const isSelected = !showcaseGridView && previewContext === ctx.id;
                            return (
                              <button
                                key={ctx.id}
                                onClick={() => setPreviewContext(ctx.id as any)}
                                disabled={showcaseGridView}
                                className={`p-2.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/15 dark:bg-indigo-950/15 text-zinc-950 dark:text-white"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-550 dark:text-zinc-450"
                                } ${showcaseGridView ? "opacity-40 cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}
                              >
                                <span className="text-[10px] font-bold uppercase tracking-wide leading-none">
                                  {ctx.name}
                                </span>
                                <span className="text-[9px] text-zinc-400 dark:text-zinc-500 leading-normal">
                                  {ctx.desc}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Camera Setup Group */}
                <div className="border border-zinc-200 dark:border-zinc-855 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setSceneCameraOpen(!sceneCameraOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Camera Settings</span>
                    {sceneCameraOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {sceneCameraOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-855/60 animate-page-fade">
                      {/* Camera Zoom */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-500 uppercase tracking-wider">
                            Camera Zoom
                          </span>
                          <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                            {cameraZoom.toFixed(1)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="1.5"
                          max="8.0"
                          step="0.1"
                          value={cameraZoom}
                          onChange={(e) => setCameraZoom(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Camera FOV */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-500 uppercase tracking-wider">
                            Field of View (FOV)
                          </span>
                          <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                            {cameraFov}°
                          </span>
                        </div>
                        <input
                          type="range"
                          min="15"
                          max="90"
                          step="1"
                          value={cameraFov}
                          onChange={(e) => setCameraFov(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Lights & Shadows Group */}
                <div className="border border-zinc-200 dark:border-zinc-855 rounded-2xl overflow-hidden bg-zinc-50/10 dark:bg-[#0b0e16]/10">
                  <button
                    onClick={() => setSceneLightsOpen(!sceneLightsOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-50/30 dark:bg-[#0b0e16]/30 cursor-pointer focus:outline-none"
                  >
                    <span>Lighting & Shadows</span>
                    {sceneLightsOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  {sceneLightsOpen && (
                    <div className="p-4 space-y-4 border-t border-zinc-200/60 dark:border-zinc-855/60 animate-page-fade">
                      {/* Studio Lighting Preset Rig Choice */}
                      <div className="space-y-2 pb-2 border-b border-zinc-100 dark:border-zinc-800/80">
                        <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                          Lighting Studio Preset
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { id: "studio", name: "Studio Daylight" },
                            { id: "cyber", name: "Cyber Neon" },
                            { id: "sunset", name: "Sunset Gold" },
                            { id: "dramatic", name: "Dramatic Rim" }
                          ].map((l) => {
                            const isSelected = lightingPreset === l.id;
                            return (
                              <button
                                key={l.id}
                                onClick={() => setLightingPreset(l.id as any)}
                                className={`py-1.5 px-3 rounded-xl text-[10px] font-bold border transition cursor-pointer text-center truncate ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-450"
                                }`}
                              >
                                {l.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Spotlight Brightness */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-500 uppercase tracking-wider">
                            Spotlight Brightness
                          </span>
                          <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                            {lightIntensity.toFixed(1)}x
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="4.0"
                          step="0.1"
                          value={lightIntensity}
                          onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>

                      {/* Spotlight Color */}
                      <div className="space-y-1.5">
                        <label className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-zinc-500 uppercase tracking-wider">
                            Spotlight Color
                          </span>
                          <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                            {lightColor}
                          </span>
                        </label>
                        <div className="flex gap-1.5">
                          <input
                            type="color"
                            value={lightColor}
                            onChange={(e) => {
                              setLightColor(e.target.value);
                              setLightColorInput(e.target.value);
                            }}
                            className="w-8 h-8 rounded-lg border-0 cursor-pointer p-0 bg-transparent flex-shrink-0"
                          />
                          <input
                            type="text"
                            value={lightColorInput}
                            onChange={(e) => {
                              setLightColorInput(e.target.value);
                              if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                setLightColor(e.target.value);
                              }
                            }}
                            placeholder="#ffffff"
                            className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-indigo-500 rounded-xl px-2.5 py-1 text-[10px] focus:outline-none text-zinc-900 dark:text-white transition flex-grow font-mono"
                          />
                        </div>
                      </div>

                      {/* Secondary Accent Light Mixer (Tuning rig) */}
                      <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                        <label className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider block">
                          Secondary Accent Light
                        </label>

                        {/* Accent Light Intensity */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10px] font-bold">
                            <span className="text-zinc-550 dark:text-zinc-450 uppercase tracking-wider">
                              Accent Brightness
                            </span>
                            <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                              {accentLightIntensity.toFixed(2)}x
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0.0"
                            max="4.0"
                            step="0.05"
                            value={accentLightIntensity}
                            onChange={(e) => setAccentLightIntensity(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>

                        {/* Accent Light Angle */}
                        {accentLightIntensity > 0 && (
                          <div className="space-y-1.5 animate-page-fade">
                            <div className="flex justify-between items-center text-[10px] font-bold">
                              <span className="text-zinc-555 dark:text-zinc-455 uppercase tracking-wider">
                                Rotation Angle
                              </span>
                              <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                                {accentLightAngle}°
                              </span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="360"
                              step="5"
                              value={accentLightAngle}
                              onChange={(e) => setAccentLightAngle(parseInt(e.target.value))}
                              className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                          </div>
                        )}

                        {/* Accent Light Color */}
                        {accentLightIntensity > 0 && (
                          <div className="space-y-1.5 animate-page-fade">
                            <label className="flex justify-between items-center text-[10px] font-bold">
                              <span className="text-zinc-555 dark:text-zinc-455 uppercase tracking-wider">
                                Accent Light Color
                              </span>
                              <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                                {accentLightColor}
                              </span>
                            </label>
                            <div className="flex gap-1.5">
                              <input
                                type="color"
                                value={accentLightColor}
                                onChange={(e) => {
                                  setAccentLightColor(e.target.value);
                                  setAccentLightColorInput(e.target.value);
                                }}
                                className="w-8 h-8 rounded-lg border-0 cursor-pointer p-0 bg-transparent flex-shrink-0"
                              />
                              <input
                                type="text"
                                value={accentLightColorInput}
                                onChange={(e) => {
                                  setAccentLightColorInput(e.target.value);
                                  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                    setAccentLightColor(e.target.value);
                                  }
                                }}
                                placeholder="#ec4899"
                                className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-indigo-500 rounded-xl px-2.5 py-1 text-[10px] focus:outline-none text-zinc-900 dark:text-white transition flex-grow font-mono"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Ambient Light overrides */}
                      <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                        <label className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider block">
                          Ambient Light Override
                        </label>

                        {/* Ambient Light Intensity */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10px] font-bold">
                            <span className="text-zinc-550 dark:text-zinc-450 uppercase tracking-wider">
                              Ambient Brightness
                            </span>
                            <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                              {ambientLightIntensity.toFixed(2)}x
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0.0"
                            max="2.5"
                            step="0.05"
                            value={ambientLightIntensity}
                            onChange={(e) => setAmbientLightIntensity(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>

                        {/* Ambient Light Color */}
                        <div className="space-y-1.5">
                          <label className="flex justify-between items-center text-[10px] font-bold">
                            <span className="text-zinc-555 dark:text-zinc-455 uppercase tracking-wider">
                              Ambient Color
                            </span>
                            <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                              {ambientLightColor}
                            </span>
                          </label>
                          <div className="flex gap-1.5">
                            <input
                              type="color"
                              value={ambientLightColor}
                              onChange={(e) => {
                                setAmbientLightColor(e.target.value);
                                setAmbientLightColorInput(e.target.value);
                              }}
                              className="w-8 h-8 rounded-lg border-0 cursor-pointer p-0 bg-transparent flex-shrink-0"
                            />
                            <input
                              type="text"
                              value={ambientLightColorInput}
                              onChange={(e) => {
                                setAmbientLightColorInput(e.target.value);
                                if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                                  setAmbientLightColor(e.target.value);
                                }
                              }}
                              placeholder="#3f3f46"
                              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-indigo-500 rounded-xl px-2.5 py-1 text-[10px] focus:outline-none text-zinc-900 dark:text-white transition flex-grow font-mono"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Shadows */}
                      <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                        {/* Shadow Opacity */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10px] font-bold">
                            <span className="text-zinc-500 uppercase tracking-wider">
                              Shadow Opacity
                            </span>
                            <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                              {shadowOpacity.toFixed(2)}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0.0"
                            max="1.0"
                            step="0.05"
                            value={shadowOpacity}
                            onChange={(e) => setShadowOpacity(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>

                        {/* Shadow Blur */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[10px] font-bold">
                            <span className="text-zinc-550 dark:text-zinc-500 uppercase tracking-wider">
                              Shadow Softness
                            </span>
                            <span className="text-zinc-750 dark:text-zinc-350 font-mono">
                              {shadowBlur.toFixed(1)}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0.5"
                            max="5.0"
                            step="0.1"
                            value={shadowBlur}
                            onChange={(e) => setShadowBlur(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Presets Tab */}
            {activeSidebarTab === "presets" && (
              <div className="space-y-5 animate-page-fade">
                {/* Save current config */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Save Current Config
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Preset Name (e.g. My Neon Red)"
                      value={newPresetName}
                      onChange={(e) => setNewPresetName(e.target.value)}
                      className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs focus:outline-none text-zinc-900 dark:text-white transition flex-grow"
                    />
                    <button
                      onClick={handleSavePreset}
                      disabled={!newPresetName.trim()}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 text-xs font-bold transition active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      Save
                    </button>
                  </div>
                </div>

                {/* Workspace Portability (Share & Backup) */}
                <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/85">
                  <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Workspace Portability
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={handleSharePlayground}
                      className="flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-755 text-white rounded-xl py-2 px-2 text-[9px] font-bold transition active:scale-95 cursor-pointer shadow-sm"
                      title="Copy Shareable Playground Link"
                    >
                      <LucideAll.Share2 size={11} />
                      <span>{shareSuccess ? "Copied!" : "Share URL"}</span>
                    </button>
                    <button
                      onClick={handleCopyEmbedCode}
                      className="flex items-center justify-center gap-1 bg-violet-600 hover:bg-violet-755 text-white rounded-xl py-2 px-2 text-[9px] font-bold transition active:scale-95 cursor-pointer shadow-sm"
                      title="Copy Iframe Code Embed Snippet"
                    >
                      <LucideAll.Code size={11} />
                      <span>{embedSuccess ? "Copied!" : "Embed Code"}</span>
                    </button>
                    <button
                      onClick={handleExportPresets}
                      className="flex items-center justify-center gap-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-250 rounded-xl py-2 px-2 text-[9px] font-bold transition active:scale-95 cursor-pointer border border-zinc-200/80 dark:border-zinc-700"
                      title="Download Backup Presets JSON File"
                    >
                      <LucideAll.Download size={11} />
                      <span>Backup</span>
                    </button>
                  </div>
                  <div className="pt-0.5">
                    <label className="w-full flex items-center justify-center gap-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800/30 dark:hover:bg-zinc-800/60 text-zinc-500 dark:text-zinc-400 rounded-xl py-2 px-3 text-[10px] font-bold transition active:scale-95 cursor-pointer border border-dashed border-zinc-300 dark:border-zinc-700">
                      <LucideAll.Upload size={12} />
                      <span>
                        {importStatus === "success"
                          ? "Restore Complete!"
                          : importStatus === "error"
                            ? "Invalid file!"
                            : "Restore Backup"}
                      </span>
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportPresets}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Presets List */}
                <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/85">
                  <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Saved Custom Presets
                  </label>
                  {savedPresets.length === 0 ? (
                    <div className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 text-center py-4 italic">
                      No custom presets saved yet.
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 max-h-60 overflow-y-auto custom-scrollbar">
                      {savedPresets.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
                        >
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-100 truncate">
                              {p.name}
                            </span>
                            <span className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase font-semibold">
                              {p.preset} • {p.environment}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => handleApplyPreset(p)}
                              className="text-[10px] font-bold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline cursor-pointer px-2 py-1 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm"
                            >
                              Apply
                            </button>
                            <button
                              onClick={() => handleDeletePreset(p.id)}
                              className="text-zinc-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer p-1.5"
                            >
                              <LucideAll.Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Compare Tab */}
            {activeSidebarTab === "compare" && (
              <div className="space-y-5 animate-page-fade">
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[11px] leading-relaxed">
                  <strong>Compare Mode</strong>: Splitting the layout into a 2x2 grid. All slots
                  render with your customized physics overrides, colors, angles, and lighting
                  environment.
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Slot Configurations
                  </label>
                  <div className="space-y-2">
                    {compareList.map((selectedId, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex flex-col gap-1.5 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                            Slot {idx + 1} {idx === 0 && "(Active)"}
                          </span>
                          <select
                            value={selectedId}
                            onChange={(e) => {
                              const updated = [...compareList];
                              updated[idx] = e.target.value;
                              setCompareList(updated);
                            }}
                            disabled={idx === 0} // Lock Slot 1 to current icon
                            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-2 py-1.5 text-xs text-zinc-850 dark:text-zinc-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
                          >
                            {ICONS_REGISTRY.map((icon) => (
                              <option key={icon.id} value={icon.id}>
                                {icon.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick horizontal switcher selector at the bottom */}
      <div className="space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
          <Zap size={14} className="text-indigo-500" />
          <span>Similar Icons ({t(`category_${currentIcon.category}` as any)})</span>
        </h3>

        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 custom-scrollbar">
          {ICONS_REGISTRY.filter((icon) => icon.category === currentIcon.category).map((icon) => {
            const isSelected = icon.id === iconId;
            return (
              <button
                key={icon.id}
                onClick={() => updateCustomizerURL(icon.color.replace("#", ""), icon.id)}
                className={`flex-shrink-0 w-24 h-24 rounded-2xl border flex flex-col items-center justify-center p-2 transition duration-200 cursor-pointer ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 shadow-md ring-1 ring-indigo-500/20"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-[#0e111a]"
                }`}
              >
                <div className="w-16 h-16 pointer-events-none select-none flex items-center justify-center relative">
                  {/* Soft background glow matching the icon's color */}
                  <div
                    className="absolute inset-1 rounded-full blur-lg opacity-10 dark:opacity-15"
                    style={{ backgroundColor: icon.color }}
                  />
                  <icon.Component
                    variant="2d"
                    preset="glass"
                    theme={theme}
                    color={icon.color}
                    accentColor={icon.accentColor}
                    interactive={false}
                    size="100%"
                  />
                </div>
                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 mt-1 truncate w-full text-center">
                  {icon.name.replace("Icon", "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* High-Quality Screenshot Compositor Modal */}
      {isScreenshotModalOpen && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 overflow-y-auto flex justify-center items-start p-4 py-8 animate-page-fade">
          <div className="bg-white dark:bg-[#0b0e16] border border-zinc-200 dark:border-zinc-800 rounded-3xl w-full max-w-md p-6 space-y-5 shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setIsScreenshotModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 dark:text-zinc-550 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors p-1 cursor-pointer"
            >
              <LucideAll.X size={18} />
            </button>

            <div className="space-y-1">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <LucideAll.Camera size={16} className="text-indigo-500" />
                <span>Premium Canvas screenshot</span>
              </h3>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-normal">
                Configure backdrops and high-resolution multipliers to render stunning marketing
                graphics.
              </p>
            </div>

            {/* Backdrop Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider block">
                Compositor Backdrop
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {(
                  [
                    { id: "transparent", name: "Transparent" },
                    { id: "solid", name: "Solid" },
                    { id: "gradient", name: "Gradient" },
                    { id: "grid", name: "Grid Overlay" }
                  ] as const
                ).map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setScreenshotBackdrop(mode.id)}
                    className={`py-1.5 px-1 rounded-xl text-[9px] font-bold border uppercase transition cursor-pointer text-center ${
                      screenshotBackdrop === mode.id
                        ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-450"
                    }`}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Backdrop Color Selectors */}
            {screenshotBackdrop === "solid" && (
              <div className="space-y-1.5 animate-page-fade">
                <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider block">
                  Backdrop Solid Color
                </span>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={screenshotBgStart}
                    onChange={(e) => {
                      setScreenshotBgStart(e.target.value);
                      setScreenshotBgStartInput(e.target.value);
                    }}
                    className="w-8 h-8 rounded-lg border-0 cursor-pointer p-0 bg-transparent flex-shrink-0"
                  />
                  <input
                    type="text"
                    value={screenshotBgStartInput}
                    onChange={(e) => {
                      setScreenshotBgStartInput(e.target.value);
                      if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                        setScreenshotBgStart(e.target.value);
                      }
                    }}
                    maxLength={7}
                    className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-indigo-500 rounded-xl px-2.5 py-1 text-[10px] focus:outline-none text-zinc-900 dark:text-white transition flex-grow font-mono"
                  />
                </div>
              </div>
            )}

            {screenshotBackdrop === "gradient" && (
              <div className="grid grid-cols-2 gap-3 animate-page-fade">
                {/* Start Color */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                    Gradient Start
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                    <input
                      type="color"
                      value={screenshotBgStart}
                      onChange={(e) => {
                        setScreenshotBgStart(e.target.value);
                        setScreenshotBgStartInput(e.target.value);
                      }}
                      className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                    />
                    <input
                      type="text"
                      value={screenshotBgStartInput}
                      onChange={(e) => {
                        setScreenshotBgStartInput(e.target.value);
                        if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                          setScreenshotBgStart(e.target.value);
                        }
                      }}
                      maxLength={7}
                      className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-650 dark:text-zinc-450 focus:outline-none focus:text-indigo-500 uppercase p-0"
                    />
                  </div>
                </div>

                {/* End Color */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider">
                    Gradient End
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                    <input
                      type="color"
                      value={screenshotBgEnd}
                      onChange={(e) => {
                        setScreenshotBgEnd(e.target.value);
                        setScreenshotBgEndInput(e.target.value);
                      }}
                      className="w-4 h-4 rounded cursor-pointer border-0 p-0 bg-transparent flex-shrink-0"
                    />
                    <input
                      type="text"
                      value={screenshotBgEndInput}
                      onChange={(e) => {
                        setScreenshotBgEndInput(e.target.value);
                        if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                          setScreenshotBgEnd(e.target.value);
                        }
                      }}
                      maxLength={7}
                      className="w-full bg-transparent border-none text-[10px] font-mono font-bold text-zinc-655 dark:text-zinc-455 focus:outline-none focus:text-indigo-500 uppercase p-0"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Scale Multiplier */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider block">
                Resolution Multiplier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 1, name: "1x (Standard)" },
                  { id: 2, name: "2x (HD Ret)" },
                  { id: 3, name: "3x (Print 4K)" }
                ].map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setScreenshotScale(scale.id)}
                    className={`py-1.5 px-2 rounded-xl text-[9px] font-bold border uppercase transition cursor-pointer text-center ${
                      screenshotScale === scale.id
                        ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-450"
                    }`}
                  >
                    {scale.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-3 border-t border-zinc-150 dark:border-zinc-800/80">
              <button
                onClick={() => setIsScreenshotModalOpen(false)}
                className="flex-grow py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-[10px] font-extrabold uppercase tracking-wider transition active:scale-95 cursor-pointer text-center"
              >
                Cancel
              </button>
              <button
                onClick={performHighQualityCapture}
                style={{ backgroundColor: color }}
                className="flex-grow py-2 rounded-xl text-white text-[10px] font-extrabold uppercase tracking-wider transition hover:opacity-90 active:scale-95 cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-md shadow-zinc-900/10"
              >
                <LucideAll.Camera size={12} fill="currentColor" />
                <span>Render & Capture</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Share Modal with QR Code */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 overflow-y-auto flex justify-center items-start p-4 py-8 animate-page-fade">
          <div className="bg-white dark:bg-[#0b0e16] border border-zinc-200 dark:border-zinc-800 rounded-3xl w-full max-w-md p-6 space-y-5 shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 dark:text-zinc-550 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors p-1 cursor-pointer"
            >
              <LucideAll.X size={18} />
            </button>

            <div className="space-y-1">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <LucideAll.Share2 size={16} className="text-indigo-500" />
                <span>Share Custom 3D Icon</span>
              </h3>
              <p className="text-[10px] text-zinc-550 dark:text-zinc-455 leading-normal">
                Scan the QR code to instantly interact with your custom icon on your mobile device,
                or copy the links below.
              </p>
            </div>

            {/* QR Code Container */}
            <div className="flex flex-col items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-150 dark:border-zinc-850">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(shareModalUrl)}`}
                alt="Share QR Code"
                width={160}
                height={160}
                className="rounded-xl shadow-md border-4 border-white bg-white"
              />
              <span className="text-[9px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-widest mt-3">
                Scan with mobile camera
              </span>
            </div>

            {/* URLs & Embed Inputs */}
            <div className="space-y-3">
              {/* Share URL */}
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider block">
                  Playground URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={shareModalUrl}
                    className="flex-grow bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-1.5 text-[10px] font-mono text-zinc-600 dark:text-zinc-455 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareModalUrl);
                      setShareSuccess(true);
                      setTimeout(() => setShareSuccess(false), 2000);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-550 text-white text-[10px] font-bold uppercase tracking-wider transition active:scale-95 cursor-pointer"
                  >
                    {shareSuccess ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Embed Code */}
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-wider block">
                  Iframe Embed Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={shareModalEmbedCode}
                    className="flex-grow bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-1.5 text-[10px] font-mono text-zinc-600 dark:text-zinc-455 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareModalEmbedCode);
                      setEmbedSuccess(true);
                      setTimeout(() => setEmbedSuccess(false), 2000);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-550 text-white text-[10px] font-bold uppercase tracking-wider transition active:scale-95 cursor-pointer"
                  >
                    {embedSuccess ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="w-full py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-[10px] font-extrabold uppercase tracking-wider transition active:scale-95 cursor-pointer text-center"
              >
                Close Share Options
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
