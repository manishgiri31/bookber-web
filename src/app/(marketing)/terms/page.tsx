import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service — BOOKBER",
  description: "BOOKBER's terms of service govern your use of our platform, website, and mobile application.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using BOOKBER's services, website, or mobile application, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services. These terms apply to all visitors, users, customers, and barber partners.",
  },
  {
    title: "Description of Service",
    content: "BOOKBER provides a technology platform that connects customers seeking barber services with barber shops and independent barbers ('Barber Partners'). We facilitate appointment booking, queue management, payment processing, and communications between customers and Barber Partners. BOOKBER is not a barber service provider — we are a technology platform.",
  },
  {
    title: "User Accounts",
    content: "To use certain features of BOOKBER, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate, complete information and keep it updated. You must be at least 18 years old to create an account. BOOKBER reserves the right to terminate accounts that violate these terms.",
  },
  {
    title: "Barber Partner Terms",
    content: "Barbers and shop owners who register as Barber Partners agree to: (1) provide accurate information about their services, pricing, and availability; (2) honor confirmed bookings; (3) maintain professional conduct with customers; (4) comply with all applicable local laws and licensing requirements; (5) not engage in discriminatory practices. BOOKBER reserves the right to remove Barber Partners who violate these obligations.",
  },
  {
    title: "Payments and Fees",
    content: "BOOKBER charges Barber Partners a subscription fee based on their selected plan. All payment processing is handled by our third-party processor, Stripe. Customers authorize BOOKBER to charge their payment method for services booked through the platform. Refunds are subject to individual Barber Partner cancellation policies. BOOKBER's platform fees are non-refundable.",
  },
  {
    title: "Cancellations and No-Shows",
    content: "Cancellation policies are set by individual Barber Partners. Customers who fail to show up for appointments or who cancel outside the policy window may be charged a fee as specified by the Barber Partner. BOOKBER may suspend accounts with excessive no-show rates. Barber Partners who repeatedly cancel confirmed bookings may be removed from the platform.",
  },
  {
    title: "Intellectual Property",
    content: "All content on BOOKBER — including but not limited to text, graphics, logos, icons, images, audio clips, and software — is the property of BOOKBER, Inc. and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written consent.",
  },
  {
    title: "Prohibited Conduct",
    content: "You agree not to: use BOOKBER for any unlawful purpose; impersonate any person or entity; post false or misleading reviews; collect user data without consent; interfere with or disrupt the platform; attempt to gain unauthorized access to any part of the service; use automated tools to scrape or access the platform; engage in discriminatory conduct based on race, gender, religion, or other protected characteristics.",
  },
  {
    title: "Limitation of Liability",
    content: "BOOKBER is not liable for the quality of services provided by Barber Partners, any personal injury or property damage resulting from barber services, any loss or damage resulting from use of the platform, indirect, incidental, punitive, or consequential damages, or any amounts in excess of the fees you paid to BOOKBER in the preceding 12 months. Some jurisdictions do not allow certain liability limitations, so some exclusions may not apply.",
  },
  {
    title: "Dispute Resolution",
    content: "Any disputes arising from these Terms shall first be addressed through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration under the American Arbitration Association rules. Class action lawsuits are waived to the extent permitted by law. Arbitration will take place in San Francisco, California.",
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. You consent to the exclusive jurisdiction of the courts located in San Francisco County, California for any disputes not subject to arbitration.",
  },
  {
    title: "Changes to Terms",
    content: "BOOKBER reserves the right to modify these Terms at any time. We will notify users of material changes via email or in-app notification at least 30 days before they take effect. Continued use of the platform after changes take effect constitutes acceptance of the new Terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#F8F9FA] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#6B7280] text-xs font-medium mb-8">
            Legal
          </div>
          <h1 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Terms of Service
          </h1>
          <p className="text-[#6B7280] text-sm">Last updated: January 1, 2025 · Effective: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 p-6 bg-[#FFF5F5] rounded-2xl border border-[#FFCDD2]">
            <p className="text-[#374151] text-sm leading-relaxed">
              <strong className="text-[#C62828]">Please read these terms carefully.</strong> These Terms of Service
              constitute a legally binding agreement between you and BOOKBER, Inc. By using our services, you
              accept these terms in full.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-black text-[#111111] mb-4 tracking-tight">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-[#374151] text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
            <h2 className="text-xl font-black text-[#111111] mb-4">Contact</h2>
            <p className="text-[#374151] text-sm leading-relaxed">
              Questions about these Terms? Contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#E53935] hover:underline">
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
