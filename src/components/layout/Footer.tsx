import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Social icon SVGs (brand icons not in lucide-react)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const AppleLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.41-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.24-2.987c.836-1.011 1.402-2.42 1.246-3.821-1.207.052-2.662.805-3.53 1.816-.78.896-1.454 2.325-1.271 3.7 1.336.104 2.723-.688 3.555-1.695z" />
  </svg>
);
const GooglePlayLogo = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <defs>
      <linearGradient id="play-badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D2FF" />
        <stop offset="35%" stopColor="#3BE477" />
        <stop offset="65%" stopColor="#FFCE00" />
        <stop offset="100%" stopColor="#F4433D" />
      </linearGradient>
    </defs>
    <path
      fill="url(#play-badge-gradient)"
      d="M3.61 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.44V3.254a1.99 1.99 0 0 1 .61-1.44zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.606-3.606l2.612 1.51a1.997 1.997 0 0 1 0 3.478l-2.612 1.51-2.616-2.616 2.616-2.616zM4.696 1.107l10.937 6.333-2.302 2.302-8.635-8.635z"
    />
  </svg>
);
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "For Customers", href: "/for-customers" },
    { label: "For Barbers", href: "/for-barbers" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#", badge: "Soon" },
    { label: "Press Kit", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: XIcon, label: "Twitter / X", href: SITE_CONFIG.social.twitter },
  { icon: LinkedinIcon, label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
  { icon: InstagramIcon, label: "Instagram", href: SITE_CONFIG.social.instagram },
  { icon: FacebookIcon, label: "Facebook", href: SITE_CONFIG.social.facebook },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E5E7EB]" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <Image
                src="/logo.png"
                alt="BOOKBER"
                width={112}
                height={36}
                className="h-9 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>

            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs mb-6">
              Transforming how people experience barber shops through real-time booking and smart queue management.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white hover:bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#D1D5DB] flex items-center justify-center transition-all duration-200 group"
                >
                  <span className="text-[#6B7280] group-hover:text-[#111111] transition-colors"><Icon /></span>
                </a>
              ))}
            </div>

            {/* App download badges */}
            <div className="mt-8 flex gap-3">
              <div className="h-11 px-3.5 bg-[#111111] rounded-xl flex items-center gap-2.5 text-white">
                <AppleLogo />
                <div>
                  <div className="text-[9px] uppercase tracking-wide leading-none text-[#D1D5DB]">Download on the</div>
                  <div className="font-semibold text-sm leading-tight -mt-0.5">App Store</div>
                </div>
              </div>
              <div className="h-11 px-3.5 bg-[#111111] rounded-xl flex items-center gap-2.5 text-white">
                <GooglePlayLogo />
                <div>
                  <div className="text-[9px] uppercase tracking-wide leading-none text-[#D1D5DB]">GET IT ON</div>
                  <div className="font-semibold text-sm leading-tight -mt-0.5">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {link.label}
                      {"badge" in link && link.badge && (
                        <span className="text-[10px] bg-[#FFEBEE] text-[#C62828] px-1.5 py-0.5 rounded-full font-medium">
                          {link.badge}
                        </span>
                      )}
                      {link.href === "#" && (
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-200"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-[#9CA3AF] text-xs">
              <span>© {currentYear} BOOKBER, Inc. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-[#9CA3AF] text-xs">
              <Link href="/privacy" className="hover:text-[#111111] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#111111] transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-[#111111] transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
