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
