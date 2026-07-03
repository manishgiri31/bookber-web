import { PrismaClient, PlanTier, VerificationStatus, SubscriptionStatus, InvoiceStatus, DisputeStatus, TicketStatus, TicketPriority } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const CITIES = ["New York", "Los Angeles", "Chicago", "Houston", "Atlanta", "Miami", "San Francisco", "Austin"];
const PLANS: PlanTier[] = ["STARTER", "PROFESSIONAL", "ENTERPRISE"];
const MRR_BY_PLAN: Record<PlanTier, number> = { STARTER: 0, PROFESSIONAL: 2900, ENTERPRISE: 24900 };

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

async function main() {
  console.log("Seeding...");

  await prisma.dispute.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.barber.deleteMany();
  await prisma.shop.deleteMany();
  await prisma.supportTicket.deleteMany();
  await prisma.waitlistEntry.deleteMany();
  await prisma.featureFlag.deleteMany();
  await prisma.bookingStat.deleteMany();
  await prisma.adminAuditLog.deleteMany();

  const shopNames = [
    "Marcus Cuts", "Fresh Fade Studio", "The Gentleman's Chair", "Sharp Edge Barbers",
    "Uptown Clippers", "Classic Cuts Co", "The Barber Room", "Fade Kings",
    "Precision Barbershop", "Royal Cuts", "Downtown Trim", "The Clipper House",
    "Elite Grooming Lounge", "Signature Cuts", "Blade & Fade", "Modern Man Barbershop",
    "The Cutting Room", "Legacy Barbers", "Prestige Cuts", "Studio 22 Barbershop",
  ];

  const verificationStatuses: VerificationStatus[] = ["PENDING", "VERIFIED", "VERIFIED", "VERIFIED", "REJECTED"];

  const shops = [];
  for (const name of shopNames) {
    const plan = pick(PLANS);
    const shop = await prisma.shop.create({
      data: {
        name,
        city: pick(CITIES),
        ownerName: pick(["Marcus Williams", "Devon Clarke", "Priya Patel", "Jordan Kim", "Alex Rivera", "Sam Chen", "Taylor Brooks"]),
        plan,
        verificationStatus: pick(verificationStatuses),
        createdAt: daysAgo(Math.floor(Math.random() * 180)),
      },
    });
    shops.push({ shop, plan });

    const barberCount = 1 + Math.floor(Math.random() * 4);
    for (let i = 0; i < barberCount; i++) {
      await prisma.barber.create({
        data: {
          name: pick(["Mike Johnson", "Chris Lee", "Andre Moore", "Ricky Diaz", "Sean Carter", "Malik Owens", "Tony Russo"]),
          shopId: shop.id,
          verificationStatus: pick(verificationStatuses),
          createdAt: daysAgo(Math.floor(Math.random() * 120)),
        },
      });
    }

    if (plan !== "STARTER") {
      const subscription = await prisma.subscription.create({
        data: {
          shopId: shop.id,
          plan,
          status: pick<SubscriptionStatus>(["ACTIVE", "ACTIVE", "ACTIVE", "PAST_DUE", "CANCELED"]),
          mrrCents: MRR_BY_PLAN[plan],
          startedAt: daysAgo(Math.floor(Math.random() * 150)),
        },
      });

      const invoiceCount = 2 + Math.floor(Math.random() * 4);
      for (let i = 0; i < invoiceCount; i++) {
        const status = pick<InvoiceStatus>(["PAID", "PAID", "PAID", "DUE", "FAILED"]);
        const invoice = await prisma.invoice.create({
          data: {
            subscriptionId: subscription.id,
            amountCents: MRR_BY_PLAN[plan],
            status,
            issuedAt: daysAgo(i * 30),
          },
        });

        if (status === "FAILED" && Math.random() > 0.5) {
          await prisma.dispute.create({
            data: {
              invoiceId: invoice.id,
              reason: pick(["Duplicate charge", "Service not received", "Unauthorized charge", "Billing error"]),
              status: pick<DisputeStatus>(["OPEN", "RESOLVED"]),
              openedAt: daysAgo(Math.floor(Math.random() * 20)),
            },
          });
        }
      }
    }
  }

  const ticketSubjects = [
    "Can't check in with QR code", "Payout hasn't arrived", "Queue not updating in real-time",
    "Duplicate booking created", "Barber account verification stuck", "App crashes on checkout",
    "Wrong shop hours displayed", "Customer refund request", "Unable to upload shop photos",
    "Notification not received before appointment",
  ];
  for (const subject of ticketSubjects) {
    await prisma.supportTicket.create({
      data: {
        subject,
        category: pick(["Technical", "Billing", "Account", "Booking"]),
        priority: pick<TicketPriority>(["LOW", "MEDIUM", "MEDIUM", "HIGH", "URGENT"]),
        status: pick<TicketStatus>(["OPEN", "OPEN", "PENDING", "CLOSED"]),
        createdAt: daysAgo(Math.floor(Math.random() * 30)),
      },
    });
  }

  const waitlistNames = [
    "Janelle Rodriguez", "Aisha Thompson", "Marcus Bell", "Sofia Ramirez", "Kevin Nguyen",
    "Olivia Bennett", "Darius Coleman", "Emma Walsh", "Tyrell Jackson", "Lena Kowalski",
    "Carlos Mendez", "Rachel Kim", "Isaiah Grant", "Natalie Ford", "Omar Haddad",
  ];
  for (let i = 0; i < waitlistNames.length; i++) {
    const name = waitlistNames[i];
    await prisma.waitlistEntry.create({
      data: {
        email: `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`,
        city: pick(CITIES),
        role: pick(["customer", "barber"]),
        name,
        createdAt: daysAgo(Math.floor(Math.random() * 60)),
      },
    });
  }

  await prisma.featureFlag.createMany({
    data: [
      { key: "live_eta_v2", description: "Improved ETA calculation using barber pace history", enabled: true },
      { key: "in_app_tipping", description: "Allow customers to tip barbers directly in-app", enabled: true },
      { key: "multi_branch_dashboard", description: "Unified dashboard for multi-location shop owners", enabled: false },
      { key: "ai_scheduling_suggestions", description: "AI-powered optimal booking time suggestions", enabled: false },
      { key: "walk_in_sms_alerts", description: "SMS alerts for walk-in customers without the app", enabled: true },
    ],
  });

  for (let d = 0; d < 30; d++) {
    for (const city of CITIES.slice(0, 5)) {
      const bookings = 40 + Math.floor(Math.random() * 120);
      await prisma.bookingStat.create({
        data: {
          date: daysAgo(d),
          city,
          bookings,
          walkIns: Math.floor(bookings * (0.15 + Math.random() * 0.2)),
          noShows: Math.floor(bookings * (0.03 + Math.random() * 0.05)),
        },
      });
    }
  }

  await prisma.adminAuditLog.createMany({
    data: [
      { actorEmail: "dev@bookber.com", action: "Verified shop", target: "Marcus Cuts", at: daysAgo(2) },
      { actorEmail: "ops@bookber.com", action: "Rejected barber application", target: "Tony Russo", at: daysAgo(5) },
      { actorEmail: "accounts@bookber.com", action: "Resolved dispute", target: "Invoice #4821", at: daysAgo(1) },
      { actorEmail: "dev@bookber.com", action: "Toggled feature flag", target: "in_app_tipping", at: daysAgo(10) },
    ],
  });

  console.log(`Seeded ${shops.length} shops and related data.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
