import { Code2, Landmark, FlaskConical, Megaphone, Cpu, Sprout, type LucideIcon } from "lucide-react";
import type { ServiceDetail } from "@/content/site";

const map: Record<ServiceDetail["icon"], LucideIcon> = {
  code: Code2,
  landmark: Landmark,
  flask: FlaskConical,
  megaphone: Megaphone,
  cpu: Cpu,
  sprout: Sprout,
};

export function ServiceIcon({ icon, className }: { icon: ServiceDetail["icon"]; className?: string }) {
  const Icon = map[icon];
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}
