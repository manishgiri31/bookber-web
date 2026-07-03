import { Headset, AlertCircle, MapPinned } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import StatCard from "@/components/admin/StatCard";
import DataTable from "@/components/admin/DataTable";
import Badge, { toneForStatus } from "@/components/admin/Badge";
import { formatDate } from "@/lib/utils";
import { getOperationsData } from "@/lib/queries/operations";

export default async function OperationsPage() {
  const { tickets, openCount, urgentCount, cityStats } = await getOperationsData();

  return (
    <div className="space-y-6">
      <PageHeader title="Operations" description="Support tickets and live platform metrics by city." />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard label="Open tickets" value={openCount.toLocaleString()} icon={Headset} accent="#2a78d6" />
        <StatCard label="Urgent tickets" value={urgentCount.toLocaleString()} icon={AlertCircle} accent="#E53935" />
        <StatCard label="Cities tracked" value={cityStats.length.toLocaleString()} icon={MapPinned} accent="#eb6834" />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[#111111] mb-3">Bookings by city (last 40 days)</h2>
        <DataTable
          keyFor={(row) => row.city}
          rows={cityStats}
          columns={[
            { header: "City", accessor: (r) => <span className="font-medium text-[#111111]">{r.city}</span> },
            { header: "Bookings", accessor: (r) => r.bookings.toLocaleString() },
            { header: "Walk-ins", accessor: (r) => r.walkIns.toLocaleString() },
            { header: "No-shows", accessor: (r) => r.noShows.toLocaleString() },
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[#111111] mb-3">Support tickets</h2>
        <DataTable
          keyFor={(row) => row.id}
          rows={tickets}
          columns={[
            { header: "Subject", accessor: (r) => <span className="font-medium text-[#111111]">{r.subject}</span> },
            { header: "Category", accessor: (r) => r.category },
            { header: "Priority", accessor: (r) => <Badge tone={toneForStatus(r.priority)}>{r.priority}</Badge> },
            { header: "Status", accessor: (r) => <Badge tone={toneForStatus(r.status)}>{r.status}</Badge> },
            { header: "Created", accessor: (r) => formatDate(r.createdAt) },
          ]}
        />
      </div>
    </div>
  );
}
