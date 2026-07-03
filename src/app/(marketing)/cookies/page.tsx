import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy — BOOKBER",
  description: "Learn how BOOKBER uses cookies and similar technologies on our website and app.",
  alternates: { canonical: "/cookies" },
};

const cookieTypes = [
  {
    name: "Strictly Necessary",
    required: true,
    purpose: "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.",
    examples: ["Session authentication", "Security tokens", "Load balancing", "CSRF protection"],
  },
  {
    name: "Performance & Analytics",
    required: false,
    purpose: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the platform.",
    examples: ["Page view analytics", "Error tracking", "Performance monitoring", "A/B testing"],
  },
  {
    name: "Functional",
    required: false,
    purpose: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
    examples: ["Language preferences", "Theme settings", "Remembered searches", "Last viewed content"],
  },
  {
    name: "Marketing & Advertising",
    required: false,
    purpose: "These cookies may be set by our advertising partners to build a profile of your interests and show you relevant advertisements on other websites.",
    examples: ["Retargeting pixels", "Social media tracking", "Conversion tracking", "Interest-based ads"],
  },
];

export default function CookiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#F8F9FA] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#6B7280] text-xs font-medium mb-8">
            Legal
          </div>
          <h1 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Cookie Policy
          </h1>
          <p className="text-[#6B7280] text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#374151] text-sm leading-relaxed mb-4">
              BOOKBER uses cookies and similar technologies (like local storage and session storage) to provide,
              improve, and protect our services. This policy explains what cookies are, what types we use, and
              how you can manage them.
            </p>
            <p className="text-[#374151] text-sm leading-relaxed">
              A cookie is a small text file that a website saves on your device when you visit it. Cookies allow
              websites to remember your actions and preferences over time.
            </p>
          </div>

          <h2 className="text-xl font-black text-[#111111] mb-6">Types of Cookies We Use</h2>

          <div className="space-y-6">
            {cookieTypes.map((type, i) => (
              <div key={i} className="rounded-2xl border border-[#E5E7EB] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 bg-[#F8F9FA] border-b border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111111]">{type.name}</h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      type.required
                        ? "bg-[#FFEBEE] text-[#C62828]"
                        : "bg-[#F1F3F5] text-[#6B7280]"
                    }`}
                  >
                    {type.required ? "Always Active" : "Optional"}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[#374151] text-sm leading-relaxed mb-4">{type.purpose}</p>
                  <div>
                    <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-2">Examples</p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-[#F3F4F6] text-[#374151] px-2.5 py-1 rounded-lg">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-black text-[#111111] mb-4">How to Manage Cookies</h2>
              <p className="text-[#374151] text-sm leading-relaxed mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2">
                {[
                  "View what cookies are stored on your device",
                  "Delete all or specific cookies",
                  "Block cookies from specific websites",
                  "Block all third-party cookies",
                  "Block all cookies (note: this may break some site functionality)",
                  "Set preferences to be asked before cookies are stored",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#374151] text-sm">
                    <span className="text-[#E53935] mt-0.5 flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-[#111111] mb-4">Third-Party Cookies</h2>
              <p className="text-[#374151] text-sm leading-relaxed">
                Some cookies on our site are set by third-party services we use, including Google Analytics,
                Stripe (payment processing), and social media platforms. These third parties have their own
                privacy policies governing their use of cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-[#111111] mb-4">Updates to This Policy</h2>
              <p className="text-[#374151] text-sm leading-relaxed">
                We may update this Cookie Policy from time to time. We&apos;ll notify you of significant changes
                through our website or by email. Continued use of BOOKBER after changes constitutes acceptance.
              </p>
            </div>

            <div className="pt-8 border-t border-[#E5E7EB]">
              <h2 className="text-xl font-black text-[#111111] mb-4">Contact</h2>
              <p className="text-[#374151] text-sm leading-relaxed">
                Questions about cookies? Email us at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#E53935] hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
