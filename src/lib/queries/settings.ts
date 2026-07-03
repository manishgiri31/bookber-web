import "server-only";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/auth/dal";
import { listAdmins } from "@/lib/auth/admins";

export async function getSettingsData() {
  await requireRole("developer");

  const [flags, auditLog] = await Promise.all([
    prisma.featureFlag.findMany({ orderBy: { key: "asc" } }),
    prisma.adminAuditLog.findMany({ orderBy: { at: "desc" }, take: 30 }),
  ]);

  return { flags, auditLog, admins: listAdmins() };
}
