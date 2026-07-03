"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

const XIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const subjects = [
  "General Inquiry",
  "Barber Partnership",
  "Press / Media",
  "Investor Relations",
  "Support",
  "Other",
];

const socialLinks = [
  { Icon: XIcon, label: "Twitter / X", href: SITE_CONFIG.social.twitter, handle: "@bookber" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: SITE_CONFIG.social.linkedin, handle: "BOOKBER Inc." },
  { Icon: InstagramIcon, label: "Instagram", href: SITE_CONFIG.social.instagram, handle: "@bookber" },
  { Icon: FacebookIcon, label: "Facebook", href: SITE_CONFIG.social.facebook, handle: "BOOKBER" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Contact"
            title="Let's talk."
            description="Whether you're a barber ready to partner, a journalist, an investor, or just curious — we'd love to hear from you."
            className="max-w-2xl"
            align="left"
          />
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                {/* Contact cards */}
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "General", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                    { icon: Mail, label: "Support", value: SITE_CONFIG.supportEmail, href: `mailto:${SITE_CONFIG.supportEmail}` },
                    { icon: Mail, label: "Business", value: SITE_CONFIG.businessEmail, href: `mailto:${SITE_CONFIG.businessEmail}` },
                    { icon: MapPin, label: "HQ", value: SITE_CONFIG.address },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E5E7EB]">
                      <div className="w-10 h-10 rounded-lg bg-[#FFEBEE] border border-[#FFCDD2] flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-[#E53935]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#111111] font-medium text-sm hover:text-[#E53935] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#111111] font-medium text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-semibold text-[#111111] mb-4 text-sm">Follow us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map(({ Icon, label, href, handle }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#111111] hover:shadow-sm transition-all duration-200 group"
                      >
                        <span className="text-[#6B7280] group-hover:text-[#111111] transition-colors"><Icon /></span>
                        <div>
                          <p className="text-[11px] text-[#9CA3AF]">{label}</p>
                          <p className="text-xs font-medium text-[#111111]">{handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-[#111111] rounded-2xl overflow-hidden h-48 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-grid-dark" />
                  <div className="relative z-10 text-center">
                    <MapPin size={24} className="text-[#E53935] mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">San Francisco, CA</p>
                    <p className="text-[#6B7280] text-xs">Our home base</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={28} className="text-[#22C55E]" />
                    </div>
                    <h3 className="text-xl font-black text-[#111111] mb-3">Message sent!</h3>
                    <p className="text-[#6B7280] text-sm mb-6">
                      We&apos;ll get back to you within 24 hours. For urgent matters, email us directly.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", phone: "", subject: subjects[0], message: "" }); }}
                      className="text-sm text-[#E53935] font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <h2 className="text-xl font-black text-[#111111] mb-6">Send us a message</h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-[#374151] mb-1.5">
                          Full name <span className="text-[#E53935]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-[#374151] mb-1.5">
                          Email <span className="text-[#E53935]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-[#374151] mb-1.5">
                        Phone number <span className="text-[#9CA3AF]">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-[#374151] mb-1.5">
                        Subject <span className="text-[#E53935]">*</span>
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-[#E5E7EB] text-[#111111] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent appearance-none cursor-pointer"
                      >
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-[#374151] mb-1.5">
                        Message <span className="text-[#E53935]">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8F9FA] border border-[#E5E7EB] text-[#111111] placeholder-[#9CA3AF] text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading" || !formData.name || !formData.email || !formData.message}
                      className={cn(
                        "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200",
                        "bg-[#E53935] text-white hover:bg-[#C62828] hover:scale-[1.01]",
                        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      )}
                    >
                      {status === "loading" ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
