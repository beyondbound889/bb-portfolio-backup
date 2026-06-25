import {
  Activity,
  LineChart,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Users,
  Microscope,
  Sprout,
  Hourglass,
  Gauge,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Activity,
  LineChart,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Users,
  Microscope,
  Sprout,
  Hourglass,
  Gauge,
  BookOpen,
};

export function Icon({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const Cmp = map[name] ?? Activity;
  return <Cmp size={size} className={className} aria-hidden="true" />;
}
