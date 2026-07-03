import type { NavItem, Feature, PricingPlan, TeamMember, CareerPosition, Testimonial, FAQ, Stat } from "@/types";

export const SITE_CONFIG = {
  name: "BOOKBER",
  tagline: "The Future of Barber Booking",
  description:
    "BOOKBER is transforming how people experience barber shops through real-time appointment booking, live queue tracking, and smart scheduling.",
  url: "https://bookber.com",
  email: "hello@bookber.com",
  supportEmail: "support@bookber.com",
  businessEmail: "business@bookber.com",
  phone: "+1 (800) BOOKBER",
  address: "San Francisco, CA",
  social: {
    twitter: "https://twitter.com/bookber",
    linkedin: "https://linkedin.com/company/bookber",
    instagram: "https://instagram.com/bookber",
    facebook: "https://facebook.com/bookber",
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "For Customers", href: "/for-customers" },
  { label: "For Barbers", href: "/for-barbers" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const FEATURES: Feature[] = [
  {
    id: "realtime-queue",
    icon: "Clock",
    title: "Real-time Queue",
    description: "See live queue status and exact wait times before you even leave home.",
    color: "#E53935",
  },
  {
    id: "instant-booking",
    icon: "Zap",
    title: "Instant Booking",
    description: "Book your appointment in seconds with a tap. No phone calls. No waiting.",
    color: "#3B82F6",
  },
  {
    id: "smart-scheduling",
    icon: "Calendar",
    title: "Smart Scheduling",
    description: "AI-powered scheduling that fits your lifestyle and preferred barber's availability.",
    color: "#8B5CF6",
  },
  {
    id: "nearby-barbers",
    icon: "MapPin",
    title: "Nearby Barbers",
    description: "Discover top-rated barbers near you with real reviews and portfolio photos.",
    color: "#10B981",
  },
  {
    id: "live-eta",
    icon: "Navigation",
    title: "Live ETA",
    description: "Get precise arrival time estimates so you never waste a minute waiting.",
    color: "#F59E0B",
  },
  {
    id: "secure-payments",
    icon: "ShieldCheck",
    title: "Secure Payments",
    description: "Pay securely in-app with cards, digital wallets, and buy-now-pay-later options.",
    color: "#22C55E",
  },
  {
    id: "business-dashboard",
    icon: "BarChart3",
    title: "Business Dashboard",
    description: "Powerful analytics and management tools for barber shop owners.",
    color: "#EC4899",
  },
  {
    id: "smart-notifications",
    icon: "Bell",
    title: "Smart Notifications",
    description: "Get notified when your slot is approaching. Never miss an appointment.",
    color: "#06B6D4",
  },
  {
    id: "ratings-reviews",
    icon: "Star",
    title: "Ratings & Reviews",
    description: "Verified reviews and star ratings to help you find the best barber.",
    color: "#F97316",
  },
  {
    id: "analytics",
    icon: "TrendingUp",
    title: "Analytics",
    description: "Deep insights into your shop performance, peak hours, and customer retention.",
    color: "#6366F1",
  },
  {
    id: "maps-integration",
    icon: "Map",
    title: "Maps Integration",
    description: "Seamless navigation to your barber with turn-by-turn directions.",
    color: "#14B8A6",
  },
  {
    id: "availability",
    icon: "CheckCircle",
    title: "Live Availability",
    description: "See which barbers are available right now for walk-ins or same-day appointments.",
    color: "#84CC16",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    description: "Perfect for independent barbers just getting started.",
    features: [
      "Up to 50 bookings/month",
      "Basic queue management",
      "Customer notifications",
      "BOOKBER listing",
      "Mobile app access",
      "Email support",
    ],
    cta: "Get Started Free",
  },
  {
    id: "professional",
    name: "Professional",
    price: 29,
    period: "month",
    description: "For growing barber shops that need powerful tools.",
    features: [
      "Unlimited bookings",
      "Advanced queue management",
      "Real-time analytics",
      "Priority listing",
      "Custom branding",
      "Payment processing",
      "SMS notifications",
      "Priority support",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For multi-location chains and franchise operators.",
    features: [
      "Multi-location management",
      "White-label solution",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced analytics",
      "Onboarding support",
    ],
    cta: "Contact Sales",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former product lead at Uber. Serial entrepreneur with two successful exits. Passionate about transforming service industries through technology.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Maria Santos",
    role: "Co-Founder & CTO",
    bio: "Ex-Google engineer with 10+ years building scalable platforms. Led engineering at two YC-backed startups.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Park",
    role: "Head of Design",
    bio: "Award-winning product designer. Previously led design at Airbnb and Stripe. Obsessed with pixel-perfect interfaces.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Patel",
    role: "VP of Growth",
    bio: "Growth expert who scaled two startups from zero to $50M ARR. Former consultant at McKinsey.",
    linkedin: "#",
    twitter: "#",
  },
];

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: "senior-frontend",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build world-class interfaces using Next.js, TypeScript, and Tailwind CSS.",
    requirements: ["5+ years React/Next.js", "TypeScript expert", "Animation experience", "Mobile-first mindset"],
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and build scalable APIs powering millions of bookings.",
    requirements: ["Node.js / Go expertise", "PostgreSQL / Redis", "AWS or GCP experience", "Microservices knowledge"],
  },
  {
    id: "flutter-developer",
    title: "Flutter Developer",
    department: "Mobile",
    location: "Remote",
    type: "Full-time",
    description: "Build our iOS and Android apps used by barbers and customers worldwide.",
    requirements: ["3+ years Flutter", "Dart proficiency", "BLoC / Riverpod", "App Store deployment experience"],
  },
  {
    id: "ui-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Shape the visual identity and user experience of BOOKBER across all platforms.",
    requirements: ["Figma mastery", "UX research skills", "Mobile design portfolio", "Design systems experience"],
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    department: "Marketing",
    location: "San Francisco",
    type: "Full-time",
    description: "Lead growth campaigns and brand strategy across digital and physical channels.",
    requirements: ["5+ years B2C marketing", "Performance marketing", "Content strategy", "Analytics-driven mindset"],
  },
  {
    id: "sales-rep",
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    description: "Drive barber shop partnerships and grow our B2B customer base.",
    requirements: ["2+ years SaaS sales", "CRM experience", "Cold outreach mastery", "Results-driven"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Williams",
    role: "Barber Shop Owner",
    company: "Marcus Cuts, Atlanta",
    content:
      "BOOKBER completely changed my business. I went from struggling with walk-in chaos to a fully organized shop. Revenue is up 40% in three months.",
    rating: 5,
  },
  {
    id: "2",
    name: "Janelle Rodriguez",
    role: "Regular Customer",
    company: "Chicago, IL",
    content:
      "I used to spend 2 hours waiting at my barber every Saturday. Now I book in advance, track the queue live, and arrive right on time. Game changer.",
    rating: 5,
  },
  {
    id: "3",
    name: "Devon Clarke",
    role: "Master Barber",
    company: "Fresh Cuts Studio, NYC",
    content:
      "The analytics dashboard alone is worth it. I now know my busiest times, my most loyal clients, and where I can improve. It's like having a business coach.",
    rating: 5,
  },
  {
    id: "4",
    name: "Aisha Thompson",
    role: "Customer",
    company: "Los Angeles, CA",
    content:
      "Finding a good barber in a new city used to be stressful. BOOKBER shows ratings, photos of actual work, and real availability. Found my go-to barber in minutes.",
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What is BOOKBER?",
    answer:
      "BOOKBER is a technology platform that connects customers with barbers through real-time appointment booking, live queue management, and smart scheduling. Think of it as the 'OpenTable for barber shops.'",
    category: "General",
  },
  {
    question: "Is BOOKBER free to use?",
    answer:
      "For customers, BOOKBER is completely free to download and use. For barber shops, we offer a free Starter plan with up to 50 bookings per month, and paid plans starting at $29/month for unlimited bookings and advanced features.",
    category: "Pricing",
  },
  {
    question: "When will BOOKBER launch?",
    answer:
      "We're currently in private beta with select barber shops across major US cities. Our public launch is planned for Q3 2025. Join our waitlist to get early access and exclusive launch pricing.",
    category: "General",
  },
  {
    question: "How does real-time queue tracking work?",
    answer:
      "When you book an appointment or join a queue, BOOKBER tracks your position in real-time based on the barber's pace and confirmed bookings ahead of you. You receive live updates and push notifications as your turn approaches.",
    category: "Features",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes. You can cancel or reschedule from the app up to 1 hour before your appointment, subject to the shop's cancellation policy. Some shops may charge a small fee for last-minute cancellations.",
    category: "Bookings",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "BOOKBER supports credit/debit cards, Apple Pay, Google Pay, and cash payment at the shop. Payment processing is handled by Stripe, ensuring bank-level security for all transactions.",
    category: "Payments",
  },
  {
    question: "How do I list my barber shop on BOOKBER?",
    answer:
      "Visit our For Barbers page and click 'Become a Partner.' You'll fill out a quick application, verify your business, and our team will help you set up your profile within 24 hours.",
    category: "Barbers",
  },
  {
    question: "Is BOOKBER available in my city?",
    answer:
      "We're currently expanding across major US cities including New York, Los Angeles, Chicago, Houston, Atlanta, Miami, and more. Join the waitlist with your city and we'll notify you when we launch there.",
    category: "General",
  },
];

export const STATS: Stat[] = [
  { value: "50K+", label: "Waitlist Members", description: "Customers ready to book" },
  { value: "2K+", label: "Barber Partners", description: "Shops ready to onboard" },
  { value: "15+", label: "Cities", description: "Launching in 2025" },
  { value: "4.9★", label: "Beta Rating", description: "From early users" },
];

export const HOW_IT_WORKS_CUSTOMER = [
  { step: 1, title: "Open the App", description: "Download BOOKBER free on iOS or Android and create your profile in 60 seconds." },
  { step: 2, title: "Find Your Barber", description: "Browse nearby barbers with real photos, verified ratings, and live availability." },
  { step: 3, title: "Book Instantly", description: "Select your time slot, choose your service, and confirm in seconds. No phone calls." },
  { step: 4, title: "Track Your Queue", description: "Watch your position in real-time and get smart notifications as your turn approaches." },
  { step: 5, title: "Arrive & Get Cut", description: "Show up right on time, enjoy your fresh cut, and pay securely in-app." },
];

export const HOW_IT_WORKS_BARBER = [
  { step: 1, title: "Create Your Shop", description: "List your shop in minutes with photos, services, pricing, and your team." },
  { step: 2, title: "Set Availability", description: "Configure your working hours, break times, and booking rules your way." },
  { step: 3, title: "Accept Bookings", description: "Receive bookings automatically and manage them from your smart dashboard." },
  { step: 4, title: "Manage Queue", description: "Control your live queue, update wait times, and keep customers informed." },
  { step: 5, title: "Grow Your Business", description: "Access analytics, collect reviews, and scale your clientele with BOOKBER." },
];
