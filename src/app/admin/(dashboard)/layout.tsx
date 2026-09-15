import { verifySession } from "@/lib/auth/dal";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import PageTransition from "@/components/shared/PageTransition";

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await verifySession();

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <AdminSidebar role={admin.role} />
      <div className="flex-1 min-w-0 flex flex-col">
        <AdminTopbar admin={admin} />
        <main className="flex-1 p-6">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>
    </div>
  );
}
