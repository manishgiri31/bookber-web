import { Users, UserRound, Scissors, MapPin } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import StatCard from "@/components/admin/StatCard";
import DataTable from "@/components/admin/DataTable";
import Badge from "@/components/admin/Badge";
import { formatDate } from "@/lib/utils";
import { getWaitlistData } from "@/lib/queries/marketing";

export default async function WaitlistPage() {
  const { entries, total, customerCount, barberCount, topCities } = await getWaitlistData();

  return (
    <div className="space-y-6">
      <PageHeader title="Waitlist" description="Everyone who's signed up for early access." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total signups" value={total.toLocaleString()} icon={Users} accent="#2a78d6" />
        <StatCard label="Customers" value={customerCount.toLocaleString()} icon={UserRound} accent="#1baf7a" />
        <StatCard label="Barbers / shops" value={barberCount.toLocaleString()} icon={Scissors} accent="#eb6834" />
        <StatCard label="Top city" value={topCities[0]?.city ?? "—"} icon={MapPin} accent="#4a3aa7" />
      </div>

      <DataTable
        keyFor={(row) => row.id}
        rows={entries}
        columns={[
          { header: "Name", accessor: (r) => <span className="font-medium text-[#111111]">{r.name ?? "—"}</span> },
          { header: "Email", accessor: (r) => r.email },
          { header: "City", accessor: (r) => r.city },
          { header: "Role", accessor: (r) => <Badge tone={r.role === "barber" ? "info" : "neutral"}>{r.role}</Badge> },
          { header: "Joined", accessor: (r) => formatDate(r.createdAt) },
        ]}
      />
    </div>
  );
}
