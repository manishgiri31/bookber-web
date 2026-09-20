import { PrismaClient, QueueSource, QueueStatus, WaitlistRole } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const STANDARD_SERVICES = [
  { name: "Haircut", pricePaise: 15000, defaultDurationMin: 20 },
  { name: "Beard", pricePaise: 8000, defaultDurationMin: 10 },
  { name: "Head Massage", pricePaise: 10000, defaultDurationMin: 15 },
  { name: "Hair Colour", pricePaise: 30000, defaultDurationMin: 45 },
  { name: "Facial", pricePaise: 25000, defaultDurationMin: 30 },
];

const SHOPS = [
  { name: "Sharma Hair Studio", slug: "sharma-hair-studio", city: "Lucknow", address: "12 Hazratganj Market, Lucknow", phone: "9415012345", ownerName: "Ramesh Sharma", chairs: 4, pin: "1234" },
  { name: "New Look Salon", slug: "new-look-salon", city: "Indore", address: "45 MG Road, Indore", phone: "9827098765", ownerName: "Suresh Yadav", chairs: 3, pin: "5678" },
  { name: "Bombay Hair Studio", slug: "bombay-hair-studio", city: "Pune", address: "8 FC Road, Pune", phone: "9822054321", ownerName: "Imran Sheikh", chairs: 5, pin: "4321" },
];

const BARBER_NAMES = ["Vijay Kumar", "Rakesh Singh", "Sanjay Verma", "Mahesh Pal", "Dinesh Chauhan", "Suresh Rathore", "Anil Kushwaha", "Sunil Tiwari", "Deepak Joshi", "Naresh Gupta", "Ravi Shukla", "Ashok Mehta"];

const CUSTOMER_NAMES = ["Amit", "Rahul", "Pankaj", "Vikas", "Sandeep", "Manoj", "Rajesh", "Gaurav", "Nitin", "Vivek", "Arjun", "Rohit", "Sameer", "Kunal", "Ajay"];

const CITIES = ["Lucknow", "Indore", "Pune", "Kanpur", "Nagpur", "Jaipur", "Bhopal", "Surat"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomPhone(): string {
  const first = pick(["6", "7", "8", "9"]);
  let rest = "";
  for (let i = 0; i < 9; i++) rest += Math.floor(Math.random() * 10);
  return first + rest;
}

function todayDateOnly(): Date {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

function minutesAfter(base: Date, minutes: number): Date {
  return new Date(base.getTime() + minutes * 60_000);
}

// Status pattern per shop — guarantees a mix of every state, including
// slipped and no_show, without being uniformly random.
const STATUS_PATTERN_14: QueueStatus[] = [
  "done", "done", "done", "done",
  "waiting", "waiting", "waiting",
  "called", "called",
  "in_service",
  "slipped", "slipped",
  "no_show",
  "cancelled",
];

const STATUS_PATTERN_13: QueueStatus[] = [
  "done", "done", "done", "done",
  "waiting", "waiting", "waiting",
  "called", "called",
  "in_service",
  "slipped",
  "no_show",
  "cancelled",
];

async function main() {
  console.log("Seeding...");

  await prisma.queueEntryService.deleteMany();
  await prisma.messageLog.deleteMany();
  await prisma.walletTransaction.deleteMany();
  await prisma.udhaarLedger.deleteMany();
  await prisma.queueEntry.deleteMany();
  await prisma.dispute.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.service.deleteMany();
  await prisma.barber.deleteMany();
  await prisma.shop.deleteMany();
  await prisma.supportTicket.deleteMany();
  await prisma.waitlistEntry.deleteMany();
  await prisma.featureFlag.deleteMany();
  await prisma.adminAuditLog.deleteMany();

  const businessDate = todayDateOnly();
  const dayStart = new Date(businessDate.getTime() + 9 * 60 * 60_000); // 9am local-ish for seed purposes

  const barberNamePool = [...BARBER_NAMES];
  let totalQueueEntries = 0;
  let totalSlipped = 0;
  let totalNoShow = 0;

  for (let s = 0; s < SHOPS.length; s++) {
    const shopSeed = SHOPS[s];
    const pinHash = await bcrypt.hash(shopSeed.pin, 10);

    const shop = await prisma.shop.create({
      data: {
        name: shopSeed.name,
        slug: shopSeed.slug,
        city: shopSeed.city,
        address: shopSeed.address,
        phone: shopSeed.phone,
        ownerName: shopSeed.ownerName,
        chairs: shopSeed.chairs,
        pinHash,
        verificationStatus: s === 0 ? "VERIFIED" : s === 1 ? "VERIFIED" : "PENDING",
      },
    });

    // 4 barbers per shop, 12 total.
    const shopBarberNames = barberNamePool.splice(0, 4);
    const barbers = [];
    for (const name of shopBarberNames) {
      const barber = await prisma.barber.create({
        data: {
          name,
          shopId: shop.id,
          commissionPct: 30 + Math.floor(Math.random() * 21), // 30-50%
        },
      });
      barbers.push(barber);
    }

    // Standard service list, seeded per shop.
    const services = [];
    for (const svc of STANDARD_SERVICES) {
      const service = await prisma.service.create({
        data: {
          shopId: shop.id,
          name: svc.name,
          pricePaise: svc.pricePaise,
          defaultDurationMin: svc.defaultDurationMin,
        },
      });
      services.push(service);
    }

    const pattern = s === 0 ? STATUS_PATTERN_14 : STATUS_PATTERN_13;
    let tokenNumber = 1;

    for (const status of pattern) {
      const joinedAt = minutesAfter(dayStart, tokenNumber * 9);
      const source: QueueSource = Math.random() < 0.6 ? "walk_in" : "remote";
      const customerName = Math.random() < 0.5 ? pick(CUSTOMER_NAMES) : null;
      const barberPrefId = Math.random() < 0.4 ? pick(barbers).id : null;

      const base = {
        shopId: shop.id,
        businessDate,
        tokenNumber: tokenNumber++,
        customerPhone: randomPhone(),
        customerName,
        source,
        barberPrefId,
        joinedAt,
        status,
      };

      if (status === "waiting") {
        await prisma.queueEntry.create({ data: base });
      } else if (status === "called") {
        const calledAt = minutesAfter(joinedAt, 15);
        await prisma.queueEntry.create({
          data: { ...base, assignedBarberId: pick(barbers).id, calledAt, arrivedAt: Math.random() < 0.7 ? minutesAfter(calledAt, -3) : null },
        });
      } else if (status === "in_service") {
        const calledAt = minutesAfter(joinedAt, 12);
        const arrivedAt = minutesAfter(calledAt, -2);
        const startedAt = minutesAfter(calledAt, 3);
        await prisma.queueEntry.create({
          data: { ...base, assignedBarberId: pick(barbers).id, calledAt, arrivedAt, startedAt },
        });
      } else if (status === "done") {
        const assignedBarber = pick(barbers);
        const calledAt = minutesAfter(joinedAt, 14);
        const arrivedAt = minutesAfter(calledAt, -2);
        const startedAt = minutesAfter(calledAt, 2);
        const chosenServices = [...services].sort(() => Math.random() - 0.5).slice(0, 1 + Math.floor(Math.random() * 2));
        const durationMin = chosenServices.reduce((sum, sv) => sum + sv.defaultDurationMin, 0);
        const completedAt = minutesAfter(startedAt, durationMin);
        const amountPaise = chosenServices.reduce((sum, sv) => sum + sv.pricePaise, 0);

        const entry = await prisma.queueEntry.create({
          data: { ...base, assignedBarberId: assignedBarber.id, calledAt, arrivedAt, startedAt, completedAt, amountPaise },
        });

        for (const sv of chosenServices) {
          await prisma.queueEntryService.create({
            data: { queueEntryId: entry.id, serviceId: sv.id, pricePaiseAtCompletion: sv.pricePaise },
          });
        }
      } else if (status === "slipped") {
        const calledAt = minutesAfter(joinedAt, 10);
        await prisma.queueEntry.create({
          data: { ...base, calledAt, slipCount: 1 },
        });
        totalSlipped++;
      } else if (status === "no_show") {
        const calledAt = minutesAfter(joinedAt, 20);
        await prisma.queueEntry.create({
          data: { ...base, calledAt, slipCount: 2 },
        });
        totalNoShow++;
      } else if (status === "cancelled") {
        await prisma.queueEntry.create({ data: base });
      }

      totalQueueEntries++;
    }
  }

  const waitlistNames = [
    "Ramesh Sharma", "Suresh Yadav", "Imran Sheikh", "Deepak Joshi", "Kavita Nair",
    "Pooja Mehta", "Arvind Rao", "Shalini Reddy", "Manoj Tripathi", "Neha Kapoor",
    "Sameer Ansari", "Ritu Bansal", "Vikram Solanki", "Anjali Desai", "Farhan Qureshi",
  ];
  for (let i = 0; i < waitlistNames.length; i++) {
    const name = waitlistNames[i];
    await prisma.waitlistEntry.create({
      data: {
        email: `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`,
        city: pick(CITIES),
        role: pick<WaitlistRole>(["customer", "barber"]),
        name,
      },
    });
  }

  await prisma.featureFlag.createMany({
    data: [
      { key: "queue_eta_v2", description: "Rolling-median ETA using per-barber, per-service completed durations", enabled: true },
      { key: "web_push_v1", description: "Web Push notifications as the primary channel after token issue", enabled: true },
      { key: "udhaar_ledger_v1", description: "Running udhaar balance per shop, per customer phone", enabled: true },
      { key: "tv_board_sse", description: "Server-sent events for the TV display board instead of polling", enabled: false },
      { key: "whatsapp_fallback", description: "Single WhatsApp fallback message when 2 tokens away", enabled: false },
    ],
  });

  await prisma.adminAuditLog.createMany({
    data: [
      { actorEmail: "dev@bookber.com", action: "Verified shop", target: "Sharma Hair Studio" },
      { actorEmail: "ops@bookber.com", action: "Verified shop", target: "New Look Salon" },
      { actorEmail: "accounts@bookber.com", action: "Reviewed wallet balance", target: "Bombay Hair Studio" },
      { actorEmail: "dev@bookber.com", action: "Toggled feature flag", target: "web_push_v1" },
    ],
  });

  console.log(`Seeded ${SHOPS.length} shops, ${BARBER_NAMES.length} barbers, ${STANDARD_SERVICES.length} services/shop.`);
  console.log(`Seeded ${totalQueueEntries} queue entries (${totalSlipped} slipped, ${totalNoShow} no_show).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
