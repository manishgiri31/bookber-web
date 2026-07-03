import "server-only";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/auth/dal";

export async function getFinanceData() {
  await requireRole("developer", "accounts");

  const [subscriptions, invoices, disputes, mrrByPlan] = await Promise.all([
    prisma.subscription.findMany({
      where: { status: "ACTIVE" },
      orderBy: { startedAt: "desc" },
      take: 50,
      include: { shop: { select: { name: true, city: true } } },
    }),
    prisma.invoice.findMany({
      orderBy: { issuedAt: "desc" },
      take: 50,
      include: { subscription: { include: { shop: { select: { name: true } } } } },
    }),
    prisma.dispute.findMany({
      where: { status: "OPEN" },
      orderBy: { openedAt: "desc" },
      include: { invoice: { include: { subscription: { include: { shop: { select: { name: true } } } } } } },
    }),
    prisma.subscription.groupBy({
      by: ["plan"],
      where: { status: "ACTIVE" },
      _sum: { mrrCents: true },
    }),
  ]);

  const mrrAgg = await prisma.subscription.aggregate({
    where: { status: "ACTIVE" },
    _sum: { mrrCents: true },
  });

  return {
    subscriptions,
    invoices,
    disputes,
    mrrCents: mrrAgg._sum.mrrCents ?? 0,
    revenueByPlan: mrrByPlan.map((p) => ({ plan: p.plan, mrr: p._sum.mrrCents ?? 0 })),
  };
}
