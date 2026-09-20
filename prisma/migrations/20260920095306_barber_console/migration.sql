-- CreateEnum
CREATE TYPE "QueueEventType" AS ENUM ('NEXT_PRESSED', 'CUSTOMER_ARRIVED', 'SERVICE_ADDED', 'COMPLETED', 'SLIPPED');

-- CreateEnum
CREATE TYPE "EventAppliedStatus" AS ENUM ('applied', 'partially_applied', 'rejected', 'duplicate');

-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "pinFailedAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "pinLockedUntil" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "BarberSession" (
    "id" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "label" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),

    CONSTRAINT "BarberSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QueueEventLog" (
    "id" TEXT NOT NULL,
    "clientEventId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "barberSessionId" TEXT,
    "barberId" TEXT NOT NULL,
    "queueEntryId" TEXT NOT NULL,
    "type" "QueueEventType" NOT NULL,
    "payload" JSONB NOT NULL,
    "clientCreatedAt" TIMESTAMP(3) NOT NULL,
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "appliedStatus" "EventAppliedStatus",
    "rejectReason" TEXT,

    CONSTRAINT "QueueEventLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BarberSession_tokenHash_key" ON "BarberSession"("tokenHash");

-- CreateIndex
CREATE INDEX "BarberSession_shopId_idx" ON "BarberSession"("shopId");

-- CreateIndex
CREATE UNIQUE INDEX "QueueEventLog_clientEventId_key" ON "QueueEventLog"("clientEventId");

-- CreateIndex
CREATE INDEX "QueueEventLog_shopId_clientCreatedAt_idx" ON "QueueEventLog"("shopId", "clientCreatedAt");

-- CreateIndex
CREATE INDEX "QueueEventLog_queueEntryId_idx" ON "QueueEventLog"("queueEntryId");

-- AddForeignKey
ALTER TABLE "BarberSession" ADD CONSTRAINT "BarberSession_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QueueEventLog" ADD CONSTRAINT "QueueEventLog_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QueueEventLog" ADD CONSTRAINT "QueueEventLog_barberSessionId_fkey" FOREIGN KEY ("barberSessionId") REFERENCES "BarberSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QueueEventLog" ADD CONSTRAINT "QueueEventLog_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QueueEventLog" ADD CONSTRAINT "QueueEventLog_queueEntryId_fkey" FOREIGN KEY ("queueEntryId") REFERENCES "QueueEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

