"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export default function WaitlistSection() {
  const [formData, setFormData] = useState({
    email: "",
    city: "",
    role: "customer" as "customer" | "barber",
    name: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 md:py-32 bg-[#F8F9FA]"
      aria-labelledby="waitlist-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E5E7EB] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 md:p-16">
          {/* Background */}
          <div className="absolute inset-0 bg-grid-light" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#E53935]/[0.06] rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-xl mx-auto">
            {status === "success" ? (
              <AnimatedSection direction="none">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={28} className="text-[#22C55E]" />
                  </div>
                  <h2 className="text-3xl font-black text-[#111111] tracking-tight mb-4">
                    You&apos;re on the list! 🎉
                  </h2>
                  <p className="text-[#6B7280] mb-6">
                    Welcome to the BOOKBER waitlist. You&apos;ll be among the first to know when we launch in your city.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl text-[#6B7280] text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    Position #{Math.floor(Math.random() * 10000) + 40000} secured
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              <>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFEBEE] border border-[#FFCDD2] rounded-full text-[#C62828] text-xs font-semibold tracking-widest uppercase mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse" />
                    Limited Early Access
                  </div>
                  <h2
                    id="waitlist-heading"
                    className="font-black tracking-tight text-[#111111] text-balance mb-4"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: "1.1" }}
                  >
                    Be first when we launch.
                  </h2>
                  <p className="text-[#6B7280] text-base leading-relaxed">
                    Join 50,000+ people waiting for BOOKBER. Early members get priority access, exclusive pricing, and lifetime perks.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="waitlist-name" className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
                        Your name
                      </label>
                      <input
                        id="waitlist-name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="waitlist-city" className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
                        Your city <span className="text-[#E53935]">*</span>
                      </label>
                      <input
                        id="waitlist-city"
                        type="text"
                        placeholder="New York"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="waitlist-email" className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
                      Email address <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 text-white placeholder-[#4B5563] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
                      I am a... <span className="text-[#E53935]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["customer", "barber"] as const).map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setFormData({ ...formData, role })}
                          className={cn(
                            "px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 capitalize",
                            formData.role === role
                              ? "bg-[#E53935] text-white border-[#E53935]"
                              : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#D1D5DB] hover:text-[#111111]"
                          )}
                        >
                          {role === "customer" ? "📱 Customer" : "✂️ Barber / Shop Owner"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-[#E53935] text-xs" role="alert">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading" || !formData.email || !formData.city}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200",
                      "bg-[#E53935] text-white hover:bg-[#C62828] hover:scale-[1.01] active:scale-[0.99]",
                      "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                      "shadow-[0_0_30px_rgba(229,57,53,0.3)]"
                    )}
                  >
                    {status === "loading" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        Join the Waitlist
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[#9CA3AF] text-xs">
                    No spam, ever. Unsubscribe any time. We respect your privacy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
