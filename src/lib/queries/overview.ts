import "server-only";
import { verifySession } from "@/lib/auth/dal";

// Stubbed for Phase 1: no real shops onboarded yet, so this is rewritten
// against queue throughput once there's data to show. Kept the same
// return shape as before so the page it feeds still compiles.
export async function getOverviewData() {
  await verifySession();

  return {
    shopCount: 0,
    verifiedShops: 0,
    pendingShops: 0,
    activeSubscriptions: 0,
    openTickets: 0,
    waitlistCount: 0,
    mrrCents: 0,
    trend: [] as { date: string; bookings: number; walkIns: number }[],
  };
}
