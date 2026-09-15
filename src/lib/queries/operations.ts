import "server-only";
import { requireRole } from "@/lib/auth/dal";

// Stubbed for Phase 1: no real shops onboarded yet, so this is rewritten
// against queue throughput once there's data to show. Kept the same
// return shape as before so the page it feeds still compiles.
export async function getOperationsData() {
  await requireRole("developer", "operations");

  return {
    tickets: [] as {
      id: string;
      subject: string;
      category: string;
      priority: string;
      status: string;
      createdAt: Date;
    }[],
    openCount: 0,
    urgentCount: 0,
    cityStats: [] as { city: string; bookings: number; walkIns: number; noShows: number }[],
  };
}
