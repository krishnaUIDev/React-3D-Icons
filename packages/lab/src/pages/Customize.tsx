import React, { useState, useEffect } from "react";
import { useRouter } from "../router/Router";
import { useTranslation } from "../i18n/useTranslation";
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
  IconPreset,
  IconAngle
} from "react-3d-icons";
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  RotateCw, 
  Sparkles, 
  Sliders as SlidersIcon, 
  Palette, 
  Code,
  Zap
} from "lucide-react";
import * as LucideAll from "lucide-react";

// List of all procedural components with descriptions and unique default colors
const ICONS_REGISTRY = [
  { id: "facebook", name: "FacebookIcon", Component: FacebookIcon, color: "#1877f2", accentColor: "#3b82f6" },
  { id: "shield", name: "ShieldIcon", Component: ShieldIcon, color: "#0d9488", accentColor: "#34d399" },
  { id: "rocket", name: "RocketIcon", Component: RocketIcon, color: "#ef4444", accentColor: "#f59e0b" },
  { id: "database", name: "DatabaseIcon", Component: DatabaseIcon, color: "#4f46e5", accentColor: "#ec4899" },
  { id: "folder", name: "FolderIcon", Component: FolderIcon, color: "#f59e0b", accentColor: "#eab308" },
  { id: "cloud", name: "CloudIcon", Component: CloudIcon, color: "#0ea5e9", accentColor: "#38bdf8" },
  { id: "network", name: "NetworkIcon", Component: NetworkIcon, color: "#06b6d4", accentColor: "#a855f7" },
  { id: "cpu", name: "CpuIcon", Component: CpuIcon, color: "#10b981", accentColor: "#34d399" },
  { id: "gear", name: "GearIcon", Component: GearIcon, color: "#71717a", accentColor: "#b45309" },
  { id: "mail", name: "MailIcon", Component: MailIcon, color: "#e11d48", accentColor: "#ec4899" },
  { id: "calendar", name: "CalendarIcon", Component: CalendarIcon, color: "#6366f1", accentColor: "#ef4444" },
  { id: "wallet", name: "WalletIcon", Component: WalletIcon, color: "#b45309", accentColor: "#d97706" },
  { id: "dollar", name: "DollarIcon", Component: DollarIcon, color: "#eab308", accentColor: "#f59e0b" },
  { id: "thumbup", name: "ThumbUpIcon", Component: ThumbUpIcon, color: "#f43f5e", accentColor: "#fb7185" },
  { id: "flash", name: "FlashIcon", Component: FlashIcon, color: "#eab308", accentColor: "#f97316" },
  { id: "heart", name: "HeartIcon", Component: HeartIcon, color: "#ec4899", accentColor: "#f43f5e" },
  { id: "chat", name: "ChatIcon", Component: ChatIcon, color: "#8b5cf6", accentColor: "#a78bfa" },
  { id: "key", name: "KeyIcon", Component: KeyIcon, color: "#f59e0b", accentColor: "#fbbf24" },
  { id: "star", name: "StarIcon", Component: StarIcon, color: "#fbbf24", accentColor: "#f59e0b" },
  { id: "cart", name: "CartIcon", Component: CartIcon, color: "#10b981", accentColor: "#34d399" },
  { id: "music", name: "MusicIcon", Component: MusicIcon, color: "#ec4899", accentColor: "#f43f5e" },
  { id: "gamepad", name: "GamepadIcon", Component: GamepadIcon, color: "#6366f1", accentColor: "#8b5cf6" },
  { id: "bell", name: "BellIcon", Component: BellIcon, color: "#f59e0b", accentColor: "#d97706" },
  { id: "sun", name: "SunIcon", Component: SunIcon, color: "#f97316", accentColor: "#eab308" },
  { id: "bulb", name: "BulbIcon", Component: BulbIcon, color: "#fbbf24", accentColor: "#f59e0b" },
  { id: "camera", name: "CameraIcon", Component: CameraIcon, color: "#06b6d4", accentColor: "#3b82f6" },
  { id: "clock", name: "ClockIcon", Component: ClockIcon, color: "#ef4444", accentColor: "#cbd5e1" },
  { id: "trophy", name: "TrophyIcon", Component: TrophyIcon, color: "#eab308", accentColor: "#f59e0b" },
  { id: "lock", name: "LockIcon", Component: LockIcon, color: "#6366f1", accentColor: "#8b5cf6" },
  { id: "mappin", name: "MapPinIcon", Component: MapPinIcon, color: "#ef4444", accentColor: "#f43f5e" },
  { id: "creditcard", name: "CreditCardIcon", Component: CreditCardIcon, color: "#4f46e5", accentColor: "#0ea5e9" },
  { id: "wifi", name: "WifiIcon", Component: WifiIcon, color: "#0ea5e9", accentColor: "#38bdf8" },
  { id: "search", name: "SearchIcon", Component: SearchIcon, color: "#3b82f6", accentColor: "#38bdf8" },
  { id: "home", name: "HomeIcon", Component: HomeIcon, color: "#10b981", accentColor: "#f43f5e" },
  { id: "trash", name: "TrashIcon", Component: TrashIcon, color: "#71717a", accentColor: "#ef4444" },
  { id: "user", name: "UserIcon", Component: UserIcon, color: "#6366f1", accentColor: "#10b981" },
  { id: "play", name: "PlayIcon", Component: PlayIcon, color: "#10b981", accentColor: "#38bdf8" },
  { id: "gift", name: "GiftIcon", Component: GiftIcon, color: "#f43f5e", accentColor: "#ef4444" },
  { id: "globe", name: "GlobeIcon", Component: GlobeIcon, color: "#0ea5e9", accentColor: "#3b82f6" },
  { id: "bag", name: "BagIcon", Component: BagIcon, color: "#f59e0b", accentColor: "#38bdf8" },
  { id: "compass", name: "CompassIcon", Component: CompassIcon, color: "#d4af37", accentColor: "#ef4444" },
  { id: "send", name: "SendIcon", Component: SendIcon, color: "#6366f1", accentColor: "#3b82f6" },
  { id: "target", name: "TargetIcon", Component: TargetIcon, color: "#ef4444", accentColor: "#f59e0b" },
  { id: "edit", name: "EditIcon", Component: EditIcon, color: "#eab308", accentColor: "#fed7aa" },
  { id: "phone", name: "PhoneIcon", Component: PhoneIcon, color: "#10b981", accentColor: "#cbd5e1" },
  { id: "book", name: "BookIcon", Component: BookIcon, color: "#e11d48", accentColor: "#fda4af" },
  { id: "link", name: "LinkIcon", Component: LinkIcon, color: "#71717a", accentColor: "#cbd5e1" },
  { id: "crown", name: "CrownIcon", Component: CrownIcon, color: "#d4af37", accentColor: "#fbbf24" },
  { id: "pin", name: "PinIcon", Component: PinIcon, color: "#ef4444", accentColor: "#fb7185" },
  { id: "flag", name: "FlagIcon", Component: FlagIcon, color: "#8b5cf6", accentColor: "#a78bfa" },
  { id: "briefcase", name: "BriefcaseIcon", Component: BriefcaseIcon, color: "#b45309", accentColor: "#f59e0b" },
  { id: "eye", name: "EyeIcon", Component: EyeIcon, color: "#0ea5e9", accentColor: "#a855f7" },
  { id: "tag", name: "TagIcon", Component: TagIcon, color: "#ec4899", accentColor: "#fb7185" },
  { id: "coffee", name: "CoffeeIcon", Component: CoffeeIcon, color: "#ea580c", accentColor: "#fed7aa" },
  { id: "share", name: "ShareIcon", Component: ShareIcon, color: "#6366f1", accentColor: "#818cf8" },
  { id: "layers", name: "LayersIcon", Component: LayersIcon, color: "#0ea5e9", accentColor: "#38bdf8" },
  { id: "sparkles", name: "SparklesIcon", Component: SparklesIcon, color: "#eab308", accentColor: "#fbbf24" },
  { id: "megaphone", name: "MegaphoneIcon", Component: MegaphoneIcon, color: "#ef4444", accentColor: "#f43f5e" },
  { id: "download", name: "DownloadIcon", Component: DownloadIcon, color: "#10b981", accentColor: "#34d399" },
  { id: "upload", name: "UploadIcon", Component: UploadIcon, color: "#10b981", accentColor: "#34d399" },
  { id: "monitor", name: "MonitorIcon", Component: MonitorIcon, color: "#06b6d4", accentColor: "#3b82f6" },
  { id: "keyboard", name: "KeyboardIcon", Component: KeyboardIcon, color: "#6366f1", accentColor: "#a855f7" },
  { id: "mouse", name: "MouseIcon", Component: MouseIcon, color: "#10b981", accentColor: "#cbd5e1" },
  { id: "harddrive", name: "HardDriveIcon", Component: HardDriveIcon, color: "#71717a", accentColor: "#94a3b8" },
  { id: "glassmorphism", name: "GlassmorphismIcon", Component: GlassmorphismIcon, color: "#ffffff", accentColor: "#ec4899" }
];

const LUCIDE_FALLBACKS: Record<string, React.ComponentType<any>> = {
  facebook: LucideAll.Facebook,
  shield: LucideAll.Shield,
  rocket: LucideAll.Rocket,
  database: LucideAll.Database,
  folder: LucideAll.Folder,
  cloud: LucideAll.Cloud,
  network: LucideAll.Network,
  cpu: LucideAll.Cpu,
  gear: LucideAll.Settings,
  mail: LucideAll.Mail,
  calendar: LucideAll.Calendar,
  wallet: LucideAll.Wallet,
  dollar: LucideAll.DollarSign,
  thumbup: LucideAll.ThumbsUp,
  flash: LucideAll.Zap,
  heart: LucideAll.Heart,
  chat: LucideAll.MessageSquare,
  key: LucideAll.Key,
  star: LucideAll.Star,
  cart: LucideAll.ShoppingCart,
  music: LucideAll.Music,
  gamepad: LucideAll.Gamepad2,
  bell: LucideAll.Bell,
  sun: LucideAll.Sun,
  bulb: LucideAll.Lightbulb,
  camera: LucideAll.Camera,
  clock: LucideAll.Clock,
  trophy: LucideAll.Trophy,
  lock: LucideAll.Lock,
  mappin: LucideAll.MapPin,
  creditcard: LucideAll.CreditCard,
  wifi: LucideAll.Wifi,
  search: LucideAll.Search,
  home: LucideAll.Home,
  trash: LucideAll.Trash2,
  user: LucideAll.User,
  play: LucideAll.Play,
  gift: LucideAll.Gift,
  globe: LucideAll.Globe,
  bag: LucideAll.ShoppingBag,
  compass: LucideAll.Compass,
  send: LucideAll.Send,
  target: LucideAll.Target,
  edit: LucideAll.Pencil,
  phone: LucideAll.Phone,
  book: LucideAll.BookOpen,
  link: LucideAll.Link,
  crown: LucideAll.Crown,
  pin: LucideAll.Pin,
  flag: LucideAll.Flag,
  briefcase: LucideAll.Briefcase,
  eye: LucideAll.Eye,
  tag: LucideAll.Tag,
  coffee: LucideAll.Coffee,
  share: LucideAll.Share2,
  layers: LucideAll.Layers,
  sparkles: LucideAll.Sparkles,
  megaphone: LucideAll.Megaphone,
  download: LucideAll.Download,
  upload: LucideAll.Upload,
  monitor: LucideAll.Monitor,
  keyboard: LucideAll.Keyboard,
  mouse: LucideAll.Mouse,
  harddrive: LucideAll.HardDrive,
  glassmorphism: LucideAll.Layers,
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

interface CustomizeProps {
  theme: "light" | "dark";
}

export const Customize: React.FC<CustomizeProps> = ({ theme }) => {
  const { t } = useTranslation();
  const { color: urlColor, iconId, navigate, updateCustomizerURL } = useRouter();

  // Find current icon component
  const currentIcon = ICONS_REGISTRY.find(item => item.id === iconId) || ICONS_REGISTRY[0];
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
  const [renderMode, setRenderMode] = useState<"3d" | "2d">("3d");

  // Sync color with URL changes
  useEffect(() => {
    if (urlColor) {
      setColor(urlColor);
    }
  }, [urlColor]);

  // Sync accent color when iconId switches
  useEffect(() => {
    if (currentIcon) {
      setAccentColor(currentIcon.accentColor);
    }
  }, [iconId]);

  // React component usage string
  const codeString = `import { ${currentIcon.name} } from 'react-3d-icons';

function App() {
  return (
    <div style={{ width: '120px', height: '120px' }}>
      <${currentIcon.name}
        preset="${preset}"
        angle="${angle}"
        variant="${renderMode}"
        color="${color}"
        accentColor="${accentColor}"
        spinSpeed={${spinSpeed.toFixed(1)}}
        floatHeight={${floatHeight.toFixed(1)}}
        theme="${theme}"
        interactive={${interactive}}
      />
    </div>
  );
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  const handlePresetSelect = (p: IconPreset) => {
    setPreset(p);
    const defaultColors: Record<IconPreset, string> = {
      glass: currentIcon.color || "#6366f1",
      metal: "#cbd5e1",
      clay: "#f43f5e",
      hologram: "#a855f7",
      gold: "#d4af37",
      glassmorphism: theme === "dark" ? "#ffffff" : "#64748b",
      carbon: "#27272a",
      wood: "#d97706"
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
    updateCustomizerURL(currentIcon.color, currentIcon.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 pb-24 space-y-8">
      {/* Back button and title */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigate("landing")}
          className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Gallery</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 uppercase tracking-wide">
            Live Preview Sandbox
          </span>
        </div>
      </div>

      {/* Workspace split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: 3D Scene Viewport */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative h-[480px] w-full rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] shadow-xl overflow-hidden group">
            
            {/* Overlay indicators */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs font-bold rounded-xl bg-zinc-900/90 dark:bg-white/95 text-white dark:text-zinc-950 shadow-sm">
                {currentIcon.name}
              </span>
              <span className="px-3 py-1.5 text-xs font-bold rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 capitalize border border-zinc-200 dark:border-zinc-700">
                {preset} Preset
              </span>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              title={t("reset_btn")}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm transition active:scale-95 cursor-pointer"
            >
              <RotateCw size={16} />
            </button>

            {/* Main Interactive canvas element */}
            <div className="w-full h-full">
              <ActiveComponent
                preset={preset}
                angle={angle}
                variant={renderMode}
                color={color}
                accentColor={accentColor}
                spinSpeed={spinSpeed}
                floatHeight={floatHeight}
                theme={theme}
                interactive={interactive}
              />
            </div>

            {/* Ambient guidance overlay */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 pointer-events-none select-none flex items-center gap-2 bg-zinc-100/60 dark:bg-zinc-900/50 px-4 py-2 rounded-full backdrop-blur-md">
              <Sparkles size={11} className="text-indigo-500" />
              <span>{t("drag_instructions")}</span>
            </div>
          </div>

          {/* Dynamic Code generation console block */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-[#0a0d14]">
              <div className="flex items-center gap-2">
                <Code size={16} className="text-indigo-500" />
                <span className="text-xs font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                  {t("code_snippet")}
                </span>
              </div>
              
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/10 hover:scale-[1.02] transition active:scale-98 cursor-pointer"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? t("copied_btn") : t("copy_btn")}</span>
              </button>
            </div>
            <pre className="p-6 text-xs text-zinc-700 dark:text-zinc-300 font-mono overflow-x-auto leading-relaxed bg-zinc-50/20 dark:bg-[#0b0e16] custom-scrollbar">
              {codeString}
            </pre>
          </div>
        </div>

        {/* Right Side: Custom Sidebar Visual Editor (Leva-Free) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e111a] shadow-xl space-y-6">
            
            <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
              <SlidersIcon size={18} className="text-indigo-500" />
              <h2 className="text-sm font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider">
                {t("editor_title")}
              </h2>
            </div>

            {/* Render Mode Selectors */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                Render Mode
              </label>
              <div className="flex gap-2">
                {(["3d", "2d"] as const).map((m) => {
                  const isSelected = renderMode === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setRenderMode(m)}
                      className={`py-2 px-3.5 rounded-xl text-xs font-bold uppercase border transition cursor-pointer flex-grow text-center ${
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
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                {t("presets_label")}
              </label>
              <div className="flex flex-wrap gap-2">
                {(["glass", "metal", "clay", "hologram", "gold", "glassmorphism", "carbon", "wood"] as IconPreset[]).map((p) => {
                  const isSelected = preset === p;
                  return (
                    <button
                      key={p}
                      onClick={() => handlePresetSelect(p)}
                      className={`py-2 px-3.5 rounded-xl text-xs font-bold capitalize border transition cursor-pointer flex-grow text-center ${
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
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
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
                      className={`py-2 px-3.5 rounded-xl text-xs font-bold capitalize border transition cursor-pointer flex-grow text-center ${
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

            {/* Curated Color Palettes */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Palette size={12} className="text-indigo-500" />
                  <span>{t("theme_palette")}</span>
                </label>
              </div>

              {/* Swatch grid */}
              <div className="grid grid-cols-4 gap-2">
                {CURATED_PALETTES.map((p) => {
                  const isSelected = color === p.color && accentColor === p.accentColor;
                  return (
                    <button
                      key={p.name}
                      onClick={() => handlePaletteSelect(p.color, p.accentColor)}
                      title={p.name}
                      className={`relative h-10 rounded-xl overflow-hidden border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer flex ${
                        isSelected 
                          ? "border-indigo-500 ring-2 ring-indigo-500/20 shadow-md" 
                          : "border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      <div className="w-1/2 h-full" style={{ backgroundColor: p.color }} />
                      <div className="w-1/2 h-full" style={{ backgroundColor: p.accentColor }} />
                    </button>
                  );
                })}
              </div>

              {/* Custom manual color inputs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Primary Color</span>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                    <input 
                      type="color" 
                      value={color}
                      onChange={(e) => handleColorChange(e.target.value)}
                      className="w-5 h-5 rounded cursor-pointer border-0 p-0 bg-transparent"
                    />
                    <span className="text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400">{color.toUpperCase()}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Accent Glow</span>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                    <input 
                      type="color" 
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-5 h-5 rounded cursor-pointer border-0 p-0 bg-transparent"
                    />
                    <span className="text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400">{accentColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
              
              {/* Spin Speed */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-zinc-400 dark:text-zinc-500">
                  <span className="uppercase tracking-wider">{t("spin_speed")}</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-mono">{spinSpeed.toFixed(1)}x</span>
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
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-zinc-400 dark:text-zinc-500">
                  <span className="uppercase tracking-wider">{t("float_height")}</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-mono">{floatHeight.toFixed(1)}</span>
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

              {/* Interactive Hover toggle */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  {t("interactive_label")}
                </span>
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={interactive}
                    onChange={(e) => setInteractive(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-350 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-650" />
                </label>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Quick horizontal switcher selector at the bottom */}
      <div className="space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
          <Zap size={14} className="text-indigo-500" />
          <span>Switch Component</span>
        </h3>
        
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 custom-scrollbar">
          {ICONS_REGISTRY.map((icon) => {
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
                  {(() => {
                    const FallbackIcon = LUCIDE_FALLBACKS[icon.id] || LucideAll.HelpCircle;
                    return (
                      <FallbackIcon 
                        size={26} 
                        strokeWidth={1.8}
                        style={{ color: icon.color }} 
                      />
                    );
                  })()}
                </div>
                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 mt-1 truncate w-full text-center">
                  {icon.name.replace("Icon", "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
