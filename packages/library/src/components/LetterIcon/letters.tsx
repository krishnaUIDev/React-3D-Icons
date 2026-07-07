/**
 * Individual letter icon exports.
 * Each is a thin wrapper around LetterIcon with the letter pre-filled.
 * Usage: <AIcon preset="glass" color="#f43f5e" />
 */
import { LetterIcon } from "./LetterIcon";
import { LetterIconProps } from "./types";

type LetterOnlyProps = Omit<LetterIconProps, "letter">;

export const AIcon = (props: LetterOnlyProps) => <LetterIcon letter="A" {...props} />;
export const BIcon = (props: LetterOnlyProps) => <LetterIcon letter="B" {...props} />;
export const CIcon = (props: LetterOnlyProps) => <LetterIcon letter="C" {...props} />;
export const DIcon = (props: LetterOnlyProps) => <LetterIcon letter="D" {...props} />;
export const EIcon = (props: LetterOnlyProps) => <LetterIcon letter="E" {...props} />;
export const FIcon = (props: LetterOnlyProps) => <LetterIcon letter="F" {...props} />;
export const GIcon = (props: LetterOnlyProps) => <LetterIcon letter="G" {...props} />;
export const HIcon = (props: LetterOnlyProps) => <LetterIcon letter="H" {...props} />;
export const IIcon = (props: LetterOnlyProps) => <LetterIcon letter="I" {...props} />;
export const JIcon = (props: LetterOnlyProps) => <LetterIcon letter="J" {...props} />;
export const KIcon = (props: LetterOnlyProps) => <LetterIcon letter="K" {...props} />;
export const LIcon = (props: LetterOnlyProps) => <LetterIcon letter="L" {...props} />;
export const MIcon = (props: LetterOnlyProps) => <LetterIcon letter="M" {...props} />;
export const NIcon = (props: LetterOnlyProps) => <LetterIcon letter="N" {...props} />;
export const OIcon = (props: LetterOnlyProps) => <LetterIcon letter="O" {...props} />;
export const PIcon = (props: LetterOnlyProps) => <LetterIcon letter="P" {...props} />;
export const QIcon = (props: LetterOnlyProps) => <LetterIcon letter="Q" {...props} />;
export const RIcon = (props: LetterOnlyProps) => <LetterIcon letter="R" {...props} />;
export const SIcon = (props: LetterOnlyProps) => <LetterIcon letter="S" {...props} />;
export const TIcon = (props: LetterOnlyProps) => <LetterIcon letter="T" {...props} />;
export const UIcon = (props: LetterOnlyProps) => <LetterIcon letter="U" {...props} />;
export const VIcon = (props: LetterOnlyProps) => <LetterIcon letter="V" {...props} />;
export const WIcon = (props: LetterOnlyProps) => <LetterIcon letter="W" {...props} />;
export const XIcon = (props: LetterOnlyProps) => <LetterIcon letter="X" {...props} />;
export const YIcon = (props: LetterOnlyProps) => <LetterIcon letter="Y" {...props} />;
export const ZIcon = (props: LetterOnlyProps) => <LetterIcon letter="Z" {...props} />;

// Digit icons 0–9 (same Text3D approach as letters)
export const ZeroIcon = (props: LetterOnlyProps) => <LetterIcon letter="0" {...props} />;
export const OneIcon = (props: LetterOnlyProps) => <LetterIcon letter="1" {...props} />;
export const TwoIcon = (props: LetterOnlyProps) => <LetterIcon letter="2" {...props} />;
export const ThreeIcon = (props: LetterOnlyProps) => <LetterIcon letter="3" {...props} />;
export const FourIcon = (props: LetterOnlyProps) => <LetterIcon letter="4" {...props} />;
export const FiveIcon = (props: LetterOnlyProps) => <LetterIcon letter="5" {...props} />;
export const SixIcon = (props: LetterOnlyProps) => <LetterIcon letter="6" {...props} />;
export const SevenIcon = (props: LetterOnlyProps) => <LetterIcon letter="7" {...props} />;
export const EightIcon = (props: LetterOnlyProps) => <LetterIcon letter="8" {...props} />;
export const NineIcon = (props: LetterOnlyProps) => <LetterIcon letter="9" {...props} />;
