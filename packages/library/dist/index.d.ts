import * as react from 'react';
import { HTMLAttributes } from 'react';

type IconPreset = "glass" | "metal" | "clay" | "hologram" | "gold" | "glassmorphism" | "carbon" | "wood";
type IconAngle = "front" | "perspective" | "tilted";
interface IconProps extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "children"> {
    preset?: IconPreset;
    angle?: IconAngle;
    variant?: "3d" | "2d";
    color?: string;
    accentColor?: string;
    spinSpeed?: number;
    floatHeight?: number;
    theme?: "light" | "dark";
    interactive?: boolean;
    size?: number | string;
}
interface MaterialConfig {
    roughness: number;
    metalness: number;
    transmission: number;
    thickness: number;
    clearcoat: number;
    clearcoatRoughness: number;
    ior: number;
    color: string;
    emissive: string;
    emissiveIntensity: number;
}

type DatabaseIconProps = IconProps;

declare function DatabaseIcon(props: DatabaseIconProps): react.JSX.Element;

type CloudIconProps = IconProps;

declare function CloudIcon(props: CloudIconProps): react.JSX.Element;

type CpuIconProps = IconProps;

declare function CpuIcon(props: CpuIconProps): react.JSX.Element;

type NetworkIconProps = IconProps;

declare function NetworkIcon(props: NetworkIconProps): react.JSX.Element;

type GearIconProps = IconProps;

declare function GearIcon(props: GearIconProps): react.JSX.Element;

type FacebookIconProps = IconProps;

declare function FacebookIcon(props: FacebookIconProps): react.JSX.Element;

type RocketIconProps = IconProps;

declare function RocketIcon(props: RocketIconProps): react.JSX.Element;

type FlashIconProps = IconProps;

declare function FlashIcon(props: FlashIconProps): react.JSX.Element;

type ShieldIconProps = IconProps;

declare function ShieldIcon(props: ShieldIconProps): react.JSX.Element;

type FolderIconProps = IconProps;

declare function FolderIcon(props: FolderIconProps): react.JSX.Element;

type MailIconProps = IconProps;

declare function MailIcon(props: MailIconProps): react.JSX.Element;

type WalletIconProps = IconProps;

declare function WalletIcon(props: WalletIconProps): react.JSX.Element;

type CalendarIconProps = IconProps;

declare function CalendarIcon(props: CalendarIconProps): react.JSX.Element;

type DollarIconProps = IconProps;

declare function DollarIcon(props: DollarIconProps): react.JSX.Element;

type ThumbUpIconProps = IconProps;

declare function ThumbUpIcon(props: ThumbUpIconProps): react.JSX.Element;

type HeartIconProps = IconProps;

declare function HeartIcon(props: HeartIconProps): react.JSX.Element;

type ChatIconProps = IconProps;

declare function ChatIcon(props: ChatIconProps): react.JSX.Element;

type KeyIconProps = IconProps;

declare function KeyIcon(props: KeyIconProps): react.JSX.Element;

type StarIconProps = IconProps;

declare function StarIcon(props: StarIconProps): react.JSX.Element;

type CartIconProps = IconProps;

declare function CartIcon(props: CartIconProps): react.JSX.Element;

type MusicIconProps = IconProps;

declare function MusicIcon(props: MusicIconProps): react.JSX.Element;

type GamepadIconProps = IconProps;

declare function GamepadIcon(props: GamepadIconProps): react.JSX.Element;

type BellIconProps = IconProps;

declare function BellIcon(props: BellIconProps): react.JSX.Element;

type SunIconProps = IconProps;

declare function SunIcon(props: SunIconProps): react.JSX.Element;

type BulbIconProps = IconProps;

declare function BulbIcon(props: BulbIconProps): react.JSX.Element;

type CameraIconProps = IconProps;

declare function CameraIcon(props: CameraIconProps): react.JSX.Element;

type ClockIconProps = IconProps;

declare function ClockIcon(props: ClockIconProps): react.JSX.Element;

type TrophyIconProps = IconProps;

declare function TrophyIcon(props: TrophyIconProps): react.JSX.Element;

type LockIconProps = IconProps;

declare function LockIcon(props: LockIconProps): react.JSX.Element;

type MapPinIconProps = IconProps;

declare function MapPinIcon(props: MapPinIconProps): react.JSX.Element;

type CreditCardIconProps = IconProps;

declare function CreditCardIcon(props: CreditCardIconProps): react.JSX.Element;

type WifiIconProps = IconProps;

declare function WifiIcon(props: WifiIconProps): react.JSX.Element;

type SearchIconProps = IconProps;

declare function SearchIcon(props: SearchIconProps): react.JSX.Element;

type HomeIconProps = IconProps;

declare function HomeIcon(props: HomeIconProps): react.JSX.Element;

type TrashIconProps = IconProps;

declare function TrashIcon(props: TrashIconProps): react.JSX.Element;

type UserIconProps = IconProps;

declare function UserIcon(props: UserIconProps): react.JSX.Element;

type PlayIconProps = IconProps;

declare function PlayIcon(props: PlayIconProps): react.JSX.Element;

type GiftIconProps = IconProps;

declare function GiftIcon(props: GiftIconProps): react.JSX.Element;

type GlobeIconProps = IconProps;

declare function GlobeIcon(props: GlobeIconProps): react.JSX.Element;

type BagIconProps = IconProps;

declare function BagIcon(props: BagIconProps): react.JSX.Element;

declare function CompassIcon(props: IconProps): react.JSX.Element;

declare function SendIcon(props: IconProps): react.JSX.Element;

declare function TargetIcon(props: IconProps): react.JSX.Element;

declare function EditIcon(props: IconProps): react.JSX.Element;

declare function PhoneIcon(props: IconProps): react.JSX.Element;

declare function BookIcon(props: IconProps): react.JSX.Element;

declare function LinkIcon(props: IconProps): react.JSX.Element;

declare function CrownIcon(props: IconProps): react.JSX.Element;

declare function PinIcon(props: IconProps): react.JSX.Element;

declare function FlagIcon(props: IconProps): react.JSX.Element;

declare function BriefcaseIcon(props: IconProps): react.JSX.Element;

declare function EyeIcon(props: IconProps): react.JSX.Element;

declare function TagIcon(props: IconProps): react.JSX.Element;

declare function CoffeeIcon(props: IconProps): react.JSX.Element;

declare function ShareIcon(props: IconProps): react.JSX.Element;

declare function LayersIcon(props: IconProps): react.JSX.Element;

declare function SparklesIcon(props: IconProps): react.JSX.Element;

declare function MegaphoneIcon(props: IconProps): react.JSX.Element;

declare function DownloadIcon(props: IconProps): react.JSX.Element;

declare function UploadIcon(props: IconProps): react.JSX.Element;

declare function MonitorIcon(props: IconProps): react.JSX.Element;

declare function KeyboardIcon(props: IconProps): react.JSX.Element;

declare function MouseIcon(props: IconProps): react.JSX.Element;

declare function HardDriveIcon(props: IconProps): react.JSX.Element;

declare function GlassmorphismIcon(props: IconProps): react.JSX.Element;

type GithubIconProps = IconProps;

declare function GithubIcon(props: GithubIconProps): react.JSX.Element;

type TwitterIconProps = IconProps;

declare function TwitterIcon(props: TwitterIconProps): react.JSX.Element;

type GoogleIconProps = IconProps;

declare function GoogleIcon(props: GoogleIconProps): react.JSX.Element;

type RouterIconProps = IconProps;

declare function RouterIcon(props: RouterIconProps): react.JSX.Element;

type ServerIconProps = IconProps;

declare function ServerIcon(props: ServerIconProps): react.JSX.Element;

type WrenchIconProps = IconProps;

declare function WrenchIcon(props: WrenchIconProps): react.JSX.Element;

type BoltIconProps = IconProps;

declare function BoltIcon(props: BoltIconProps): react.JSX.Element;

type SmileIconProps = IconProps;

declare function SmileIcon(props: SmileIconProps): react.JSX.Element;

type FrownIconProps = IconProps;

declare function FrownIcon(props: FrownIconProps): react.JSX.Element;

type HeartEyesIconProps = IconProps;

declare function HeartEyesIcon(props: HeartEyesIconProps): react.JSX.Element;

type HammerIconProps = IconProps;

declare function HammerIcon(props: HammerIconProps): react.JSX.Element;

type ScrewdriverIconProps = IconProps;

declare function ScrewdriverIcon(props: ScrewdriverIconProps): react.JSX.Element;

type NutIconProps = IconProps;

declare function NutIcon(props: NutIconProps): react.JSX.Element;

type PrinterIconProps = IconProps;

declare function PrinterIcon(props: PrinterIconProps): react.JSX.Element;

type SpeakerIconProps = IconProps;

declare function SpeakerIcon(props: SpeakerIconProps): react.JSX.Element;

type EthernetIconProps = IconProps;

declare function EthernetIcon(props: EthernetIconProps): react.JSX.Element;

type SatelliteIconProps = IconProps;

declare function SatelliteIcon(props: SatelliteIconProps): react.JSX.Element;

type CodeIconProps = IconProps;

declare function CodeIcon(props: CodeIconProps): react.JSX.Element;

type TerminalIconProps = IconProps;

declare function TerminalIcon(props: TerminalIconProps): react.JSX.Element;

type GitIconProps = IconProps;

declare function GitIcon(props: GitIconProps): react.JSX.Element;

type FigmaIconProps = IconProps;

declare function FigmaIcon(props: FigmaIconProps): react.JSX.Element;

export { BagIcon, BellIcon, BoltIcon, BookIcon, BriefcaseIcon, BulbIcon, CalendarIcon, CameraIcon, CartIcon, ChatIcon, ClockIcon, CloudIcon, CodeIcon, CoffeeIcon, CompassIcon, CpuIcon, CreditCardIcon, CrownIcon, DatabaseIcon, DollarIcon, DownloadIcon, EditIcon, EthernetIcon, EyeIcon, FacebookIcon, FigmaIcon, FlagIcon, FlashIcon, FolderIcon, FrownIcon, GamepadIcon, GearIcon, GiftIcon, GitIcon, GithubIcon, GlassmorphismIcon, GlobeIcon, GoogleIcon, HammerIcon, HardDriveIcon, HeartEyesIcon, HeartIcon, HomeIcon, type IconAngle, type IconPreset, type IconProps, KeyIcon, KeyboardIcon, LayersIcon, LinkIcon, LockIcon, MailIcon, MapPinIcon, type MaterialConfig, MegaphoneIcon, MonitorIcon, MouseIcon, MusicIcon, NetworkIcon, NutIcon, PhoneIcon, PinIcon, PlayIcon, PrinterIcon, RocketIcon, RouterIcon, SatelliteIcon, ScrewdriverIcon, SearchIcon, SendIcon, ServerIcon, ShareIcon, ShieldIcon, SmileIcon, SparklesIcon, SpeakerIcon, StarIcon, SunIcon, TagIcon, TargetIcon, TerminalIcon, ThumbUpIcon, TrashIcon, TrophyIcon, TwitterIcon, UploadIcon, UserIcon, WalletIcon, WifiIcon, WrenchIcon };
