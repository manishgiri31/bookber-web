import "server-only";
import bcrypt from "bcryptjs";
import type { AdminUser } from "@/types";

function loadAdmins(): AdminUser[] {
  const raw = process.env.ADMIN_USERS;
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as AdminUser[];
    return parsed;
  } catch {
    console.error("ADMIN_USERS env var is not valid JSON");
    return [];
  }
}

const admins = loadAdmins();

export function findAdminByEmail(email: string): AdminUser | undefined {
  return admins.find((admin) => admin.email.toLowerCase() === email.toLowerCase());
}

export async function verifyAdminPassword(email: string, password: string): Promise<AdminUser | null> {
  const admin = findAdminByEmail(email);
  if (!admin) return null;

  const valid = await bcrypt.compare(password, admin.passwordHash);
  return valid ? admin : null;
}

export function listAdmins(): Pick<AdminUser, "email" | "name" | "role">[] {
  return admins.map(({ email, name, role }) => ({ email, name, role }));
}
