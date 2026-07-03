import "server-only";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/auth/dal";

export async function getWaitlistData() {
  await requireRole("developer", "marketing");

  const [entries, total, byRole, byCity] = await Promise.all([
    prisma.waitlistEntry.findMany({ orderBy: { createdAt: "desc" }, take: 100 }),
    prisma.waitlistEntry.count(),
    prisma.waitlistEntry.groupBy({ by: ["role"], _count: { role: true } }),
    prisma.waitlistEntry.groupBy({ by: ["city"], _count: { city: true }, orderBy: { _count: { city: "desc" } }, take: 5 }),
  ]);

  return {
    entries,
    total,
    customerCount: byRole.find((r) => r.role === "customer")?._count.role ?? 0,
    barberCount: byRole.find((r) => r.role === "barber")?._count.role ?? 0,
    topCities: byCity.map((c) => ({ city: c.city, count: c._count.city })),
  };
}
