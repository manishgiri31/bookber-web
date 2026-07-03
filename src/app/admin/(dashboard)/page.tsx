import { Store, ShieldCheck, Wallet, Headset, Users, Clock } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import StatCard from "@/components/admin/StatCard";
import BookingsTrendChart from "@/components/admin/charts/BookingsTrendChart";
import { getOverviewData } from "@/lib/queries/overview";

export default async function AdminOverviewPage() {
  const data = await getOverviewData();

  return (
    <div>
      <PageHeader title="Overview" description="Platform-wide snapshot across shops, revenue, and support." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total shops" value={data.shopCount.toLocaleString()} icon={Store} accent="#2a78d6" />
        <StatCard label="Verified shops" value={data.verifiedShops.toLocaleString()} icon={ShieldCheck} accent="#16A34A" />
        <StatCard label="Active MRR" value={`$${(data.mrrCents / 100).toLocaleString()}`} icon={Wallet} accent="#4a3aa7" />
        <StatCard label="Open tickets" value={data.openTickets.toLocaleString()} icon={Headset} accent="#E53935" />
        <StatCard label="Waitlist signups" value={data.waitlistCount.toLocaleString()} icon={Users} accent="#eb6834" />
        <StatCard label="Pending verification" value={data.pendingShops.toLocaleString()} icon={Clock} accent="#eda100" />
        <StatCard label="Active subscriptions" value={data.activeSubscriptions.toLocaleString()} icon={ShieldCheck} accent="#1baf7a" />
      </div>

      <BookingsTrendChart data={data.trend} />
    </div>
  );
}
