"use server";

import { redirect } from "next/navigation";
import { verifyAdminPassword } from "@/lib/auth/admins";
import { createAdminSession, deleteAdminSession } from "@/lib/auth/session";

export interface LoginState {
  error?: string;
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const admin = await verifyAdminPassword(email, password);
  if (!admin) {
    return { error: "Invalid email or password." };
  }

  await createAdminSession({ email: admin.email, name: admin.name, role: admin.role });
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await deleteAdminSession();
  redirect("/admin/login");
}
