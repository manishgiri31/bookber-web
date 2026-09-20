// GET /tv/[shop]/stream — the SSE feed backing the TV board. Public,
// read-only, no auth.
//
// TODO(phase-2-logic):
//   - on connect, push the current full queue snapshot for this shop
//   - subscribe to this shop's queue changes (driven off the same
//     QueueEventLog apply step used by /b/[shop]/sync) and push a
//     `data: <json>\n\n` frame on every state change
//   - send a `: heartbeat\n\n` comment every ~20s so proxies/CDNs don't
//     time out the idle connection (no WebSockets, per the CONSTRAINTS —
//     this is the SSE half of that)
//
// For now this just opens the stream, sends one comment, and closes —
// enough to prove the route/content-type plumbing without any reconciliation
// logic. Deferred pending approval of this route's structure.

export async function GET(_request: Request, { params }: { params: Promise<{ shop: string }> }) {
  const { shop } = await params;
  void shop;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(": connected\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
