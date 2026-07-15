import { IconProps } from "../../types";

export interface CalendarIconProps extends IconProps {
  studio?: boolean;
  selectedDayRow?: number;
  selectedDayCol?: number;
  highlightColor?: string;
  dayText?: string;
  showGrid?: boolean;
}
