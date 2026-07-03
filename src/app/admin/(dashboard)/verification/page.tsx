import PageHeader from "@/components/admin/PageHeader";
import DataTable from "@/components/admin/DataTable";
import Badge, { toneForStatus } from "@/components/admin/Badge";
import { formatDate } from "@/lib/utils";
import { getVerificationData } from "@/lib/queries/verification";

export default async function VerificationPage() {
  const { shops, barbers } = await getVerificationData();

  return (
    <div className="space-y-6">
      <PageHeader title="Verification" description="Review shop and barber applications awaiting review." />

      <div>
        <h2 className="text-sm font-semibold text-[#111111] mb-3">Shops</h2>
        <DataTable
          keyFor={(row) => row.id}
          rows={shops}
          columns={[
            { header: "Shop", accessor: (r) => <span className="font-medium text-[#111111]">{r.name}</span> },
            { header: "City", accessor: (r) => r.city },
            { header: "Owner", accessor: (r) => r.ownerName },
            { header: "Plan", accessor: (r) => r.plan },
            { header: "Status", accessor: (r) => <Badge tone={toneForStatus(r.verificationStatus)}>{r.verificationStatus}</Badge> },
            { header: "Applied", accessor: (r) => formatDate(r.createdAt) },
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[#111111] mb-3">Barbers</h2>
        <DataTable
          keyFor={(row) => row.id}
          rows={barbers}
          columns={[
            { header: "Barber", accessor: (r) => <span className="font-medium text-[#111111]">{r.name}</span> },
            { header: "Shop", accessor: (r) => r.shop.name },
            { header: "Status", accessor: (r) => <Badge tone={toneForStatus(r.verificationStatus)}>{r.verificationStatus}</Badge> },
            { header: "Applied", accessor: (r) => formatDate(r.createdAt) },
          ]}
        />
      </div>
    </div>
  );
}
