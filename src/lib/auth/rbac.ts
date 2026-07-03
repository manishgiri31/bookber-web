import type { AdminRole } from "@/types";
import {
  LayoutDashboard,
  ShieldCheck,
  Users,
  Wallet,
  Headset,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface AdminSection {
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
  roles: AdminRole[];
}

export const ADMIN_SECTIONS: AdminSection[] = [
  {
    key: "overview",
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
    roles: ["developer", "marketing", "operations", "accounts"],
  },
  {
    key: "verification",
    label: "Verification",
    href: "/admin/verification",
    icon: ShieldCheck,
    roles: ["developer", "operations"],
  },
  {
    key: "waitlist",
    label: "Waitlist",
    href: "/admin/waitlist",
    icon: Users,
    roles: ["developer", "marketing"],
  },
  {
    key: "finance",
    label: "Finance",
    href: "/admin/finance",
    icon: Wallet,
    roles: ["developer", "accounts"],
  },
  {
    key: "operations",
    label: "Operations",
    href: "/admin/operations",
    icon: Headset,
    roles: ["developer", "operations"],
  },
  {
    key: "settings",
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
    roles: ["developer"],
  },
];

export function canAccess(role: AdminRole, sectionKey: string): boolean {
  const section = ADMIN_SECTIONS.find((s) => s.key === sectionKey);
  if (!section) return false;
  return section.roles.includes(role);
}

export function navForRole(role: AdminRole): AdminSection[] {
  return ADMIN_SECTIONS.filter((section) => section.roles.includes(role));
}

export const ROLE_LABELS: Record<AdminRole, string> = {
  developer: "Developer",
  marketing: "Marketing",
  operations: "Operations",
  accounts: "Accounts",
};
