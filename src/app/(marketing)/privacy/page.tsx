import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — BOOKBER",
  description: "BOOKBER's privacy policy explains how we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Account information: When you create a BOOKBER account, we collect your name, email address, phone number, and profile photo.",
      "Booking data: We collect information about your appointments, preferred barbers, services, and payment methods.",
      "Location data: With your permission, we collect your device location to show nearby barbers and provide queue tracking.",
      "Usage data: We collect information about how you use the app, including pages visited, features used, and time spent.",
      "Device data: We collect device identifiers, operating system version, and app version for technical support.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide and improve the BOOKBER platform and services",
      "To process bookings and payments",
      "To send appointment reminders and queue notifications",
      "To help you find barbers near you",
      "To personalize your experience based on your preferences",
      "To analyze usage patterns and improve our products",
      "To detect and prevent fraud and abuse",
      "To comply with legal obligations",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "With barbers: We share your name, contact info, and appointment details with the barber shops you book with.",
      "With payment processors: We use Stripe to process payments. Your payment data is handled per Stripe's privacy policy.",
      "With service providers: We use third-party services for analytics, communication, and infrastructure — all under strict data agreements.",
      "For legal reasons: We may disclose information if required by law or to protect rights, property, or safety.",
      "We never sell your personal data to third parties for advertising purposes.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
      "We use industry-standard security practices including regular security audits and penetration testing.",
      "Access to personal data is restricted to employees who need it to provide services.",
      "We maintain incident response procedures to address any security breaches promptly.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access: You can request a copy of all personal data we hold about you.",
      "Correction: You can update or correct your personal information at any time through the app settings.",
      "Deletion: You can request deletion of your account and associated data.",
      "Portability: You can request your data in a machine-readable format.",
      "Opt-out: You can opt out of marketing communications at any time.",
      "To exercise any rights, contact us at " + SITE_CONFIG.email,
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use cookies and similar technologies to improve your experience on our website.",
      "Essential cookies: Required for core functionality (login, security, cart).",
      "Analytics cookies: Help us understand how users interact with our website.",
      "Marketing cookies: Used to show relevant advertisements (with consent).",
      "You can manage your cookie preferences at any time. See our Cookie Policy for details.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "BOOKBER is not directed at children under 13. We do not knowingly collect personal information from children under 13.",
      "If we learn we have collected data from a child under 13, we will delete it promptly.",
      "Parents who believe their child has provided us with personal information should contact us immediately.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons.",
      "We will notify you of significant changes via email or in-app notification at least 30 days before changes take effect.",
      "Continued use of BOOKBER after policy changes constitutes acceptance of the updated terms.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#F8F9FA] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#6B7280] text-xs font-medium mb-8">
            Legal
          </div>
          <h1 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Privacy Policy
          </h1>
          <p className="text-[#6B7280] text-sm">Last updated: January 1, 2025 · Effective: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 p-6 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB]">
            <p className="text-[#374151] text-sm leading-relaxed">
              At BOOKBER, Inc. (&quot;BOOKBER&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we take your privacy seriously.
              This Privacy Policy explains how we collect, use, disclose, and protect your personal
              information when you use our website and mobile application. By using BOOKBER, you agree
              to the practices described in this policy.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-black text-[#111111] mb-4 tracking-tight">
                  {i + 1}. {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[#374151] text-sm leading-relaxed">
                      <span className="text-[#E53935] mt-0.5 flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
            <h2 className="text-xl font-black text-[#111111] mb-4">Contact Us</h2>
            <p className="text-[#374151] text-sm leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your data, please contact our
              Privacy Team at <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#E53935] hover:underline">{SITE_CONFIG.email}</a> or write to us at BOOKBER, Inc., San Francisco, CA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
