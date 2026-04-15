import { FaGraduationCap } from "react-icons/fa6";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FaPenAlt } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





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
  size?: number ;
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
  LuPenTool
};

export function IconHandler({
  iconName,
  className,
  color,
  size,
}: IconHandlerProps) {
  // 1. Get the component from the map
  const IconComponent = iconMap[iconName as IconName];

  // 2. CRITICAL: If the icon is undefined (not found in map), 
  // return null or a fallback icon so React doesn't crash.
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap.`);
    return null; 
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