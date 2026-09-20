import "server-only";
import { requireRole } from "@/lib/auth/dal";

// Stubbed for Phase 1: no real shops onboarded yet, so this is rewritten
// against the single-plan subscription model once there's data to show.
// Kept the same return shape as before so the page it feeds still compiles.
export async function getFinanceData() {
  await requireRole("developer", "accounts");

  return {
    subscriptions: [] as { id: string; startedAt: Date; shop: { name: string; city: string } }[],
    invoices: [] as {
      id: string;
      amountCents: number;
      status: string;
      issuedAt: Date;
      subscription: { shop: { name: string } };
    }[],
    disputes: [] as {
      id: string;
      reason: string;
      openedAt: Date;
      invoice: { amountCents: number; subscription: { shop: { name: string } } };
    }[],
    mrrCents: 0,
    revenueByPlan: [] as { plan: string; mrr: number }[],
  };
}
