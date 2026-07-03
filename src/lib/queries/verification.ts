import "server-only";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/auth/dal";

export async function getVerificationData() {
  await requireRole("developer", "operations");

  const [shops, barbers] = await Promise.all([
    prisma.shop.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: { id: true, name: true, city: true, ownerName: true, plan: true, verificationStatus: true, createdAt: true },
    }),
    prisma.barber.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: { id: true, name: true, verificationStatus: true, createdAt: true, shop: { select: { name: true } } },
    }),
  ]);

  return { shops, barbers };
}
