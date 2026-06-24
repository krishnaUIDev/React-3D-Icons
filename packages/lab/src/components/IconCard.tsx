import React, { useState } from "react";
import { useRouter } from "../router/Router";
import * as Lucide from "lucide-react";

interface IconCardProps {
  id: string;
  name: string;
  Component: React.ComponentType<any>;
  theme: "light" | "dark";
  color?: string;
  accentColor?: string;
}

const LUCIDE_FALLBACKS: Record<string, React.ComponentType<any>> = {
  facebook: Lucide.Facebook,
  shield: Lucide.Shield,
  rocket: Lucide.Rocket,
  database: Lucide.Database,
  folder: Lucide.Folder,
  cloud: Lucide.Cloud,
  network: Lucide.Network,
  cpu: Lucide.Cpu,
  gear: Lucide.Settings,
  mail: Lucide.Mail,
  calendar: Lucide.Calendar,
  wallet: Lucide.Wallet,
  dollar: Lucide.DollarSign,
  thumbup: Lucide.ThumbsUp,
  flash: Lucide.Zap,
  heart: Lucide.Heart,
  chat: Lucide.MessageSquare,
  key: Lucide.Key,
  star: Lucide.Star,
  cart: Lucide.ShoppingCart,
  music: Lucide.Music,
  gamepad: Lucide.Gamepad2,
  bell: Lucide.Bell,
  sun: Lucide.Sun,
  bulb: Lucide.Lightbulb,
  camera: Lucide.Camera,
  clock: Lucide.Clock,
  trophy: Lucide.Trophy,
  lock: Lucide.Lock,
  mappin: Lucide.MapPin,
  creditcard: Lucide.CreditCard,
  wifi: Lucide.Wifi,
  search: Lucide.Search,
  home: Lucide.Home,
  trash: Lucide.Trash2,
  user: Lucide.User,
  play: Lucide.Play,
  gift: Lucide.Gift,
  globe: Lucide.Globe,
  bag: Lucide.ShoppingBag,
  compass: Lucide.Compass,
  send: Lucide.Send,
  target: Lucide.Target,
  edit: Lucide.Pencil,
  phone: Lucide.Phone,
  book: Lucide.BookOpen,
  link: Lucide.Link,
  crown: Lucide.Crown,
  pin: Lucide.Pin,
  flag: Lucide.Flag,
  briefcase: Lucide.Briefcase,
  eye: Lucide.Eye,
  tag: Lucide.Tag,
  coffee: Lucide.Coffee,
  share: Lucide.Share2,
  layers: Lucide.Layers,
  sparkles: Lucide.Sparkles,
  megaphone: Lucide.Megaphone,
  download: Lucide.Download,
  upload: Lucide.Upload,
  monitor: Lucide.Monitor,
  keyboard: Lucide.Keyboard,
  mouse: Lucide.Mouse,
  harddrive: Lucide.HardDrive,
  glassmorphism: Lucide.Layers,
};

export const IconCard: React.FC<IconCardProps> = ({
  id,
  name,
  Component,
  theme,
  color = "#6366f1",
  accentColor
}) => {
  const { updateCustomizerURL } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const displayName = name.replace("Icon", "");
  const FallbackIcon = LUCIDE_FALLBACKS[id] || Lucide.HelpCircle;

  const handleCustomize = () => {
    const cleanColor = color ? color.replace("#", "") : "6366f1";
    updateCustomizerURL(cleanColor, id);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCustomize}
      className="group flex flex-col items-center gap-2 p-3 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-[#0e111a] hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none"
    >
      {/* 3D Icon Preview or 2D Fallback */}
      <div className="w-full flex items-center justify-center pointer-events-none min-h-[64px]">
        {isHovered ? (
          <div className="w-14 h-14 sm:w-16 sm:h-16 transform scale-105 transition-transform duration-300">
            <Component
              preset="glass"
              theme={theme}
              color={color}
              accentColor={accentColor}
              interactive={false}
              spinSpeed={1.4}
              floatHeight={1.0}
            />
          </div>
        ) : (
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
            {/* Background soft glow matching the icon's color */}
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-15 dark:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: color }}
            />
            <FallbackIcon 
              size={28} 
              strokeWidth={1.8}
              style={{ color: color }} 
              className="transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Name Label */}
      <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 truncate w-full text-center group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-none pb-0.5">
        {displayName}
      </p>
    </div>
  );
};
