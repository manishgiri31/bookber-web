import { LogOut } from "lucide-react";
import { logout } from "@/app/admin/actions";
import { ROLE_LABELS } from "@/lib/auth/rbac";
import type { AdminSessionPayload } from "@/types";

export default function AdminTopbar({ admin }: { admin: AdminSessionPayload }) {
  return (
    <header className="h-16 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-6 sticky top-0 z-10">
      <div>
        <p className="text-sm font-semibold text-[#111111]">{admin.name}</p>
        <p className="text-xs text-[#9CA3AF]">{ROLE_LABELS[admin.role]}</p>
      </div>

      <form action={logout}>
        <button
          type="submit"
          className="flex items-center gap-1.5 text-xs font-medium text-[#6B7280] hover:text-[#111111] border border-[#E5E7EB] hover:border-[#D1D5DB] px-3 py-2 rounded-lg transition-all duration-150"
        >
          <LogOut size={13} />
          Log out
        </button>
      </form>
    </header>
  );
}
