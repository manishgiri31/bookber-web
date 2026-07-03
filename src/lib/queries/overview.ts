import "server-only";
import { prisma } from "@/lib/db";
import { verifySession } from "@/lib/auth/dal";

export async function getOverviewData() {
  await verifySession();

  const [shopCount, verifiedShops, pendingShops, activeSubscriptions, openTickets, waitlistCount, bookingStats] = await Promise.all([
    prisma.shop.count(),
    prisma.shop.count({ where: { verificationStatus: "VERIFIED" } }),
    prisma.shop.count({ where: { verificationStatus: "PENDING" } }),
    prisma.subscription.count({ where: { status: "ACTIVE" } }),
    prisma.supportTicket.count({ where: { status: { not: "CLOSED" } } }),
    prisma.waitlistEntry.count(),
    prisma.bookingStat.findMany({ orderBy: { date: "asc" }, take: 150 }),
  ]);

  const mrrAgg = await prisma.subscription.aggregate({
    where: { status: "ACTIVE" },
    _sum: { mrrCents: true },
  });

  const byDate = new Map<string, { bookings: number; walkIns: number }>();
  for (const stat of bookingStats) {
    const key = stat.date.toISOString().slice(0, 10);
    const existing = byDate.get(key) ?? { bookings: 0, walkIns: 0 };
    existing.bookings += stat.bookings;
    existing.walkIns += stat.walkIns;
    byDate.set(key, existing);
  }
  const trend = Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-14)
    .map(([date, v]) => ({ date: date.slice(5), bookings: v.bookings, walkIns: v.walkIns }));

  return {
    shopCount,
    verifiedShops,
    pendingShops,
    activeSubscriptions,
    openTickets,
    waitlistCount,
    mrrCents: mrrAgg._sum.mrrCents ?? 0,
    trend,
  };
}
