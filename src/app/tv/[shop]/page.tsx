// GET /tv/[shop] — TV display board. Public, read-only, no auth.
//
// A page rather than a raw SSE endpoint (Next.js doesn't allow route.ts
// and page.tsx at the same segment) — the actual event stream lives at
// GET /tv/[shop]/stream and is opened client-side via EventSource. See
// the Phase 2 report for this split.
//
// TODO(phase-2-logic):
//   - large-type, auto-refreshing token board: "now serving" per chair,
//     the waiting list, no PII beyond first name/initial
//   - client component opens `new EventSource('/tv/[shop]/stream')` and
//     re-renders on each pushed snapshot
//
// Deferred pending approval of this route's structure.

export default async function TvBoardPage({
  params,
}: {
  params: Promise<{ shop: string }>;
}) {
  const { shop } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <p className="text-lg uppercase tracking-widest text-[#9CA3AF] mb-2">Now serving</p>
        <h1 className="text-4xl font-bold">{shop}</h1>
        <p className="text-base text-[#9CA3AF] mt-4">Coming soon — pending Phase 2 logic approval.</p>
      </div>
    </div>
  );
}
