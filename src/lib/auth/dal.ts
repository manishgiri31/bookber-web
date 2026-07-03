import "server-only";
import { cache } from "react";
import { redirect, forbidden } from "next/navigation";
import { decryptSession, getSessionCookie } from "./session";
import type { AdminRole, AdminSessionPayload } from "@/types";

export const verifySession = cache(async (): Promise<AdminSessionPayload> => {
  const cookie = await getSessionCookie();
  const session = await decryptSession(cookie);

  if (!session) {
    redirect("/admin/login");
  }

  return session;
});

export const getCurrentAdmin = cache(async (): Promise<AdminSessionPayload | null> => {
  const cookie = await getSessionCookie();
  return decryptSession(cookie);
});

export async function requireRole(...roles: AdminRole[]): Promise<AdminSessionPayload> {
  const session = await verifySession();
  if (!roles.includes(session.role)) {
    forbidden();
  }
  return session;
}
