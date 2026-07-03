import {
  Clock,
  Zap,
  Calendar,
  MapPin,
  Navigation,
  ShieldCheck,
  BarChart3,
  Bell,
  Star,
  TrendingUp,
  Map,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Zap,
  Calendar,
  MapPin,
  Navigation,
  ShieldCheck,
  BarChart3,
  Bell,
  Star,
  TrendingUp,
  Map,
  CheckCircle,
};

interface FeatureIconProps {
  name: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function FeatureIcon({ name, color = "#E53935", size = "md", className }: FeatureIconProps) {
  const Icon = iconMap[name] ?? Zap;

  const sizeMap = {
    sm: { container: "w-9 h-9", icon: 16 },
    md: { container: "w-11 h-11", icon: 20 },
    lg: { container: "w-14 h-14", icon: 24 },
  };

  const { container, icon: iconSize } = sizeMap[size];

  return (
    <div
      className={cn(
        "rounded-xl flex items-center justify-center flex-shrink-0",
        container,
        className
      )}
      style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
    >
      <Icon size={iconSize} style={{ color }} />
    </div>
  );
}
