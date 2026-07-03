import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function AdminForbidden() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="w-14 h-14 rounded-2xl bg-[#FFEBEE] flex items-center justify-center mx-auto mb-6">
          <ShieldAlert size={24} className="text-[#E53935]" />
        </div>
        <h1 className="text-xl font-black tracking-tight text-[#111111] mb-2">Access denied</h1>
        <p className="text-[#6B7280] text-sm mb-6">
          Your role doesn&apos;t have permission to view this section. Contact a developer admin if you believe this is a mistake.
        </p>
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 bg-[#111111] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#222222] transition-all text-sm"
        >
          Back to Overview
        </Link>
      </div>
    </div>
  );
}
