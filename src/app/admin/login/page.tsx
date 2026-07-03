"use client";

import { useActionState } from "react";
import Image from "next/image";
import { Loader2, Lock } from "lucide-react";
import { login, type LoginState } from "@/app/admin/actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="BOOKBER" width={120} height={40} className="h-10 w-auto object-contain" priority />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-[#FFEBEE] flex items-center justify-center">
              <Lock size={15} className="text-[#E53935]" />
            </div>
            <h1 className="text-lg font-black tracking-tight text-[#111111]">Admin Login</h1>
          </div>
          <p className="text-[#6B7280] text-sm mb-6">Sign in with your BOOKBER staff account.</p>

          <form action={formAction} className="space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-[#6B7280] mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@bookber.com"
                required
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-medium text-[#6B7280] mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                required
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all"
              />
            </div>

            {state.error && (
              <p className="text-[#E53935] text-xs" role="alert">
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-[#E53935] text-white hover:bg-[#C62828] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_8px_24px_rgba(229,57,53,0.2)]"
            >
              {pending ? <Loader2 size={16} className="animate-spin" /> : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-[#9CA3AF] text-xs mt-6">
          BOOKBER internal tools — unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
}
