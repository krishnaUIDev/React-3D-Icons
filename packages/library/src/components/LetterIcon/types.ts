import { IconProps } from "../../types";

export interface LetterIconProps extends IconProps {
  /** The letter to render (A–Z). Case-insensitive. */
  letter: string;
  /** URL to a typeface.json font file. Defaults to the bundled Helvetiker Bold. */
  fontUrl?: string;
}
