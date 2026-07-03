import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E53935]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        {/* 404 Display */}
        <div
          className="font-black text-[8rem] md:text-[12rem] leading-none mb-4 select-none"
          style={{
            background: "linear-gradient(135deg, #E53935 0%, rgba(229,57,53,0.1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.05em",
          }}
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="text-2xl font-black text-white mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-10">
          Looks like this page went off the queue. It might have been moved, deleted, or maybe you
          typed the URL wrong. Either way, let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#C62828] transition-all text-sm w-full sm:w-auto justify-center"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/15 transition-all text-sm w-full sm:w-auto justify-center"
          >
            <Search size={16} />
            Contact Support
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[#6B7280] text-xs mb-4">Or try one of these pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#9CA3AF] hover:text-white transition-colors px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:border-white/20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Barber shop easter egg */}
        <p className="mt-12 text-[#4B5563] text-xs">
          ✂️ Even barbers have off days. Let&apos;s find you what you&apos;re looking for.
        </p>
      </div>
    </div>
  );
}
