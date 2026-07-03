"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navForRole, ROLE_LABELS } from "@/lib/auth/rbac";
import type { AdminRole } from "@/types";

export default function AdminSidebar({ role }: { role: AdminRole }) {
  const pathname = usePathname();
  const sections = navForRole(role);

  const isActive = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));

  return (
    <aside className="w-60 shrink-0 bg-white border-r border-[#E5E7EB] flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-5 border-b border-[#E5E7EB]">
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/logo.png" alt="BOOKBER" width={96} height={32} className="h-8 w-auto object-contain" priority />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1" aria-label="Admin navigation">
        {sections.map((section) => {
          const Icon = section.icon;
          const active = isActive(section.href);
          return (
            <Link
              key={section.key}
              href={section.href}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                active
                  ? "bg-[#FFEBEE] text-[#C62828]"
                  : "text-[#374151] hover:bg-[#F8F9FA] hover:text-[#111111]"
              )}
            >
              <Icon size={16} />
              {section.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-[#E5E7EB]">
        <div className="text-[10px] uppercase tracking-widest font-semibold text-[#9CA3AF]">Signed in as</div>
        <div className="text-xs font-medium text-[#6B7280] mt-0.5">{ROLE_LABELS[role]}</div>
      </div>
    </aside>
  );
}
