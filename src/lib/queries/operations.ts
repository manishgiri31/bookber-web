import "server-only";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/auth/dal";

export async function getOperationsData() {
  await requireRole("developer", "operations");

  const [tickets, openCount, urgentCount, bookingStats] = await Promise.all([
    prisma.supportTicket.findMany({ orderBy: { createdAt: "desc" }, take: 50 }),
    prisma.supportTicket.count({ where: { status: "OPEN" } }),
    prisma.supportTicket.count({ where: { priority: "URGENT", status: { not: "CLOSED" } } }),
    prisma.bookingStat.findMany({ orderBy: { date: "desc" }, take: 40 }),
  ]);

  const byCity = new Map<string, { bookings: number; walkIns: number; noShows: number }>();
  for (const stat of bookingStats) {
    const existing = byCity.get(stat.city) ?? { bookings: 0, walkIns: 0, noShows: 0 };
    existing.bookings += stat.bookings;
    existing.walkIns += stat.walkIns;
    existing.noShows += stat.noShows;
    byCity.set(stat.city, existing);
  }

  return {
    tickets,
    openCount,
    urgentCount,
    cityStats: Array.from(byCity.entries()).map(([city, v]) => ({ city, ...v })),
  };
}
