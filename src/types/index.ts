export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number | string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  description: string;
  requirements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface WaitlistFormData {
  email: string;
  city: string;
  role: "customer" | "barber";
  name?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export type AdminRole = "developer" | "marketing" | "operations" | "accounts";

export interface AdminUser {
  email: string;
  name: string;
  role: AdminRole;
  passwordHash: string;
}

export interface AdminSessionPayload {
  email: string;
  name: string;
  role: AdminRole;
}
