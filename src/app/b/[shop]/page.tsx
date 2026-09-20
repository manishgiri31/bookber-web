// GET /b/[shop] — barber console (queue controller).
//
// Protected by the barber_session cookie set from POST /b/login.
//
// TODO(phase-2-logic):
//   - read the session cookie, verify it against BarberSession
//     (tokenHash match, revokedAt is null, session.shopId matches this
//     shop's slug) — redirect to a PIN entry view if missing/invalid
//   - bump BarberSession.lastSeenAt
//   - render the "who is operating" barber selector (persisted client-side
//     in localStorage, not server session state — see Phase 2 spec)
//   - render the live queue (per-barber lines + any-barber pool) with the
//     big NEXT button, backed by the IndexedDB-cached snapshot so it
//     renders instantly offline
//
// Deferred pending approval of this route's structure.

export default async function BarberConsolePage({
  params,
}: {
  params: Promise<{ shop: string }>;
}) {
  const { shop } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white p-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-[#9CA3AF] mb-2">Barber console</p>
        <h1 className="text-2xl font-semibold">{shop}</h1>
        <p className="text-sm text-[#9CA3AF] mt-4">Coming soon — pending Phase 2 logic approval.</p>
      </div>
    </div>
  );
}
