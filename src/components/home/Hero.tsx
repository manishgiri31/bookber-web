"use client";

import Link from "next/link";
import { ArrowRight, Play, Star, Users, Scissors } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "none";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-light" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E53935]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#3B82F6]/[0.04] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-xs font-medium text-[#374151] mb-8"
            style={{ animation: "fadeIn 0.6s ease forwards" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            Now in private beta — Join 50,000+ on the waitlist
            <ArrowRight size={12} />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-black tracking-tight text-[#111111] text-balance"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
            }}
          >
            Book appointments.
            <br />
            <span className="relative inline-block gradient-text-red">
              Skip waiting.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-2xl"
            style={{ animation: "fadeUp 0.8s ease 0.3s both" }}
          >
            BOOKBER is transforming how people experience barber shops through real-time
            appointment booking, live queue tracking, and smart scheduling.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{ animation: "fadeUp 0.8s ease 0.5s both" }}
          >
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-[#E53935] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#C62828] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm shadow-[0_8px_24px_rgba(229,57,53,0.25)]"
            >
              Join the Waitlist
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/for-barbers"
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#111111] font-semibold px-6 py-3.5 rounded-xl hover:border-[#111111] transition-all duration-200 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <Scissors size={16} />
              Become a Barber Partner
            </Link>
            <button
              className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111111] font-medium text-sm transition-colors duration-200 group"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#111111] transition-colors">
                <Play size={14} className="translate-x-0.5" />
              </div>
              Watch how it works
            </button>
          </div>

          {/* Social proof */}
          <div
            className="mt-12 flex flex-wrap items-center gap-6"
            style={{ animation: "fadeUp 0.8s ease 0.7s both" }}
          >
            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#E53935", "#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    style={{ backgroundColor: color }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-xs text-[#9CA3AF] mt-0.5">50,000+ on the waitlist</p>
              </div>
            </div>

            <div className="h-8 w-px bg-[#E5E7EB]" />

            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#9CA3AF]" />
              <span className="text-xs text-[#6B7280]">2,000+ barber shops interested</span>
            </div>

            <div className="h-8 w-px bg-[#E5E7EB]" />

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-xs text-[#6B7280]">Launching Q3 2025</span>
            </div>
          </div>
        </div>

        {/* Floating app mockup cards */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          {/* Card 1 - Queue status */}
          <div
            className="glass-card rounded-2xl p-4 w-52"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#E53935]/10 flex items-center justify-center">
                <span className="text-[#E53935] text-xs">🔴</span>
              </div>
              <div>
                <p className="text-[#111111] text-xs font-semibold">Live Queue</p>
                <p className="text-[#9CA3AF] text-[10px]">Mike&apos;s Barber Shop</p>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[#9CA3AF] text-[10px]">Your position</span>
                <span className="text-[#111111] text-xs font-bold">#3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#9CA3AF] text-[10px]">Wait time</span>
                <span className="text-[#16A34A] text-xs font-bold">~15 min</span>
              </div>
            </div>
            <div className="mt-3 h-1 bg-[#F1F3F5] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#E53935] to-[#FF6F00] rounded-full w-2/3" />
            </div>
          </div>

          {/* Card 2 - Booking confirmed */}
          <div
            className="glass-card rounded-2xl p-4 w-52 translate-x-4"
            style={{ animation: "float 6s ease-in-out 1.5s infinite" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#DCFCE7] flex items-center justify-center">
                <span className="text-[10px]">✓</span>
              </div>
              <div>
                <p className="text-[#111111] text-xs font-semibold">Booking Confirmed!</p>
                <p className="text-[#9CA3AF] text-[10px]">Today at 2:30 PM</p>
              </div>
            </div>
            <div className="flex gap-1 mt-2">
              {["Fade", "Beard Trim"].map((tag) => (
                <span key={tag} className="text-[9px] bg-[#F1F3F5] text-[#6B7280] px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 - Rating */}
          <div
            className="glass-card rounded-2xl p-4 w-52 -translate-x-2"
            style={{ animation: "float 6s ease-in-out 3s infinite" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E53935] to-[#FF6F00] flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <div className="flex-1">
                <p className="text-[#111111] text-xs font-semibold">Mike Johnson</p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="text-[#9CA3AF] text-[10px] ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9CA3AF]">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-5 h-8 border border-[#E5E7EB] rounded-full flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-[#E53935] rounded-full"
            style={{ animation: "float 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
