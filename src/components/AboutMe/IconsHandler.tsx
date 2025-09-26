import { FaGraduationCap } from "react-icons/fa6";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FaPenAlt } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa6";
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

interface IconHandlerProps {
  iconName: IconName | string;
  className?: string;
  color?: string;
  size?: number | string;
}

const iconMap: Record<IconName, React.ComponentType<any>> = {
  FaGraduationCap,
  FaPenAlt,
  GiChemicalDrop,
  GrGroup,
  MdOutlineStarPurple500,
  FaBookReader
  ,FaChessQueen,
  FaFacebook,
  FaLinkedin
};

export function IconHandler({
  iconName,
  className,
  color,
  size,
}: IconHandlerProps) {
      const IconComponent = iconMap[iconName as IconName];
  return (
    <IconComponent 
      color={color} 
      size={size} 
      className={className}
      title={iconName}
    />
  );
}
