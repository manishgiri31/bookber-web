import { NextRequest, NextResponse } from "next/server";

// POST /b/login — PIN login for the barber console.
//
// Request body: { shopSlug: string, pin: string }  (pin: exactly 4 digits)
//
// On success (not yet implemented) this will:
//   - look up Shop by slug, reject if inactive or not found
//   - check Shop.pinLockedUntil, reject with 429 if still locked
//   - bcrypt.compare(pin, shop.pinHash); on failure bump
//     Shop.pinFailedAttempts and set pinLockedUntil past a threshold
//   - on success, reset the failure counters, create a BarberSession row
//     (tokenHash stored, raw token returned only via the cookie), and set
//     an httpOnly/Secure/SameSite=Lax session cookie
//   - respond with { shopId, shopName, shopSlug, barbers, services } so
//     the console can render the operator selector without another round
//     trip
//
// TODO(phase-2-logic): implement the above. Deferred pending approval of
// this route's structure.

interface BarberLoginRequestBody {
  shopSlug: string;
  pin: string;
}

function isValidBody(body: unknown): body is BarberLoginRequestBody {
  if (typeof body !== "object" || body === null) return false;
  const { shopSlug, pin } = body as Record<string, unknown>;
  return typeof shopSlug === "string" && shopSlug.length > 0 && typeof pin === "string" && /^\d{4}$/.test(pin);
}

export async function POST(request: NextRequest) {
  const body: unknown = await request.json().catch(() => null);

  if (!isValidBody(body)) {
    return NextResponse.json({ error: "shopSlug and a 4-digit pin are required." }, { status: 400 });
  }

  return NextResponse.json({ error: "not_implemented" }, { status: 501 });
}
