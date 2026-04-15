// Try to be as specific as possible with paths if your build stays large
import { FaGraduationCap, FaChessQueen } from "react-icons/fa6";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPenTool } from "react-icons/lu";
import { FaLinkedin, FaFacebook, FaBookReader, FaPenAlt } from "react-icons/fa";

export type IconName =
  | "FaGraduationCap"
  | "GiChemicalDrop"
  | "GrGroup"
  | "MdOutlineStarPurple500"
  | "FaPenAlt"
  | "FaBookReader"
  | "FaChessQueen"
  | "FaFacebook"
  | "FaLinkedin"
  | "LuPenTool";

interface IconHandlerProps {
  iconName: IconName | string;
  className?: string;
  color?: string;
  size?: number;
}

// ... your imports ...

const iconMap: Record<IconName, React.ComponentType<any>> = {
  FaGraduationCap,
  FaPenAlt,
  GiChemicalDrop,
  GrGroup,
  MdOutlineStarPurple500, // Ensure this matches exactly
  FaBookReader,
  FaChessQueen,
  FaFacebook,
  FaLinkedin,
  LuPenTool,
};

export function IconHandler({
  iconName,
  className,
  color,
  size = 20,
}: IconHandlerProps) {
  // 1. Get the component from the map
  const IconComponent = iconMap[iconName as IconName];

  // 2. CRITICAL: If the icon is undefined (not found in map),
  if (!IconComponent) {
    // Return a default icon (like a circle or warning) instead of null
    // so the layout doesn't break or look empty
    return (
      <div
        className={`w-[${size}px] h-[${size}px] bg-slate-800 rounded-full animate-pulse ${className}`}
      />
    );
  }

  return (
    <IconComponent
      color={color}
      size={size}
      className={className}
      title={iconName}
    />
  );
}
