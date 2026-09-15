"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB]/80 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="BOOKBER Home"
            >
              <Image
                src="/logo.png"
                alt="BOOKBER"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                style={{ width: "auto" }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              ref={dropdownRef}
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.href} className="relative">
                  {item.children ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.href ? null : item.href)
                      }
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive(item.href)
                          ? "text-[#111111] bg-[#F1F3F5]"
                          : "text-[#374151] hover:text-[#111111] hover:bg-[#F8F9FA]"
                      )}
                      aria-expanded={activeDropdown === item.href}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.href && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive(item.href)
                          ? "text-[#111111] bg-[#F1F3F5]"
                          : "text-[#374151] hover:text-[#111111] hover:bg-[#F8F9FA]"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-[#374151] hover:text-[#111111] transition-colors px-3 py-2"
              >
                Contact
              </Link>
              <Link
                href="/for-barbers"
                className="text-sm font-medium text-[#374151] border border-[#E5E7EB] hover:border-[#111111] hover:text-[#111111] px-4 py-2 rounded-full transition-all duration-200"
              >
                For Barbers
              </Link>
              <Link
                href="#waitlist"
                className="text-sm font-medium bg-[#E53935] text-white px-4 py-2 rounded-full hover:bg-[#C62828] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#F1F3F5] transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300",
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
            <Link href="/" aria-label="BOOKBER Home">
              <Image
                src="/logo.png"
                alt="BOOKBER"
                width={100}
                height={34}
                className="h-8 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#F1F3F5] transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="p-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-[#F1F3F5] text-[#111111]"
                    : "text-[#374151] hover:bg-[#F8F9FA] hover:text-[#111111]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#374151] hover:bg-[#F8F9FA] hover:text-[#111111] transition-all duration-200"
            >
              Contact
            </Link>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#E5E7EB] flex flex-col gap-2">
            <Link
              href="/for-barbers"
              className="w-full text-center text-sm font-medium text-[#111111] border border-[#E5E7EB] px-4 py-2.5 rounded-full hover:border-[#111111] transition-all"
            >
              For Barbers
            </Link>
            <Link
              href="#waitlist"
              className="w-full text-center text-sm font-medium bg-[#E53935] text-white px-4 py-2.5 rounded-full hover:bg-[#C62828] transition-all"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
