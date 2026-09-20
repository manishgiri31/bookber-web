import { NextRequest, NextResponse } from "next/server";
import type { QueueEventType, EventAppliedStatus } from "@prisma/client";

// POST /b/[shop]/sync — batch offline-event reconciliation.
//
// Request body: { events: OutboxEvent[] }
//   One entry per QueueEventLog row queued client-side in IndexedDB while
//   offline. Sent as a batch (not one-at-a-time) so a device that was
//   offline for a while can catch up in a single round trip.
//
// Response body: { results: EventResult[] }
//   One outcome per submitted event, matched by clientEventId — a batch is
//   never all-or-nothing, one stale event must not block the rest.
//
// TODO(phase-2-logic): for each event, in the batch:
//   - verify the session cookie's BarberSession belongs to this shop
//   - look up by clientEventId; if it already exists, return "duplicate"
//   - otherwise validate the transition against the queueEntry's CURRENT
//     status (state machine guard) and apply it; NEXT_PRESSED can come
//     back "partially_applied" if the completion succeeds but the chained
//     next-call loses a race to another device
//   - persist the QueueEventLog row with its outcome either way
// See Phase 2 spec for the full per-type payload shapes and state machine.
//
// Deferred pending approval of this route's structure.

interface OutboxEvent {
  clientEventId: string;
  barberId: string;
  queueEntryId: string;
  type: QueueEventType;
  payload: Record<string, unknown>;
  clientCreatedAt: string; // ISO timestamp, set on-device
}

interface EventResult {
  clientEventId: string;
  appliedStatus: EventAppliedStatus;
  rejectReason?: string;
}

function isValidBody(body: unknown): body is { events: OutboxEvent[] } {
  if (typeof body !== "object" || body === null) return false;
  const { events } = body as Record<string, unknown>;
  return Array.isArray(events);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ shop: string }> }) {
  const { shop } = await params;
  const body: unknown = await request.json().catch(() => null);

  if (!isValidBody(body)) {
    return NextResponse.json({ error: "events (array) is required." }, { status: 400 });
  }

  void shop;
  const results: EventResult[] = [];

  return NextResponse.json({ results, error: "not_implemented" }, { status: 501 });
}
