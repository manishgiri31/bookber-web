import { Wallet, FileText, AlertTriangle, CreditCard } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import StatCard from "@/components/admin/StatCard";
import DataTable from "@/components/admin/DataTable";
import Badge, { toneForStatus } from "@/components/admin/Badge";
import RevenueByPlanChart from "@/components/admin/charts/RevenueByPlanChart";
import { formatDate } from "@/lib/utils";
import { getFinanceData } from "@/lib/queries/finance";

export default async function FinancePage() {
  const { subscriptions, invoices, disputes, mrrCents, revenueByPlan } = await getFinanceData();

  return (
    <div className="space-y-6">
      <PageHeader title="Finance" description="Revenue, subscriptions, invoices, and disputes." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Active MRR" value={`$${(mrrCents / 100).toLocaleString()}`} icon={Wallet} accent="#2a78d6" />
        <StatCard label="Active subscriptions" value={subscriptions.length.toLocaleString()} icon={CreditCard} accent="#1baf7a" />
        <StatCard label="Recent invoices" value={invoices.length.toLocaleString()} icon={FileText} accent="#4a3aa7" />
        <StatCard label="Open disputes" value={disputes.length.toLocaleString()} icon={AlertTriangle} accent="#E53935" />
      </div>

      <RevenueByPlanChart data={revenueByPlan} />

      <div>
        <h2 className="text-sm font-semibold text-[#111111] mb-3">Recent invoices</h2>
        <DataTable
          keyFor={(row) => row.id}
          rows={invoices}
          columns={[
            { header: "Shop", accessor: (r) => <span className="font-medium text-[#111111]">{r.subscription.shop.name}</span> },
            { header: "Amount", accessor: (r) => `$${(r.amountCents / 100).toLocaleString()}` },
            { header: "Status", accessor: (r) => <Badge tone={toneForStatus(r.status)}>{r.status}</Badge> },
            { header: "Issued", accessor: (r) => formatDate(r.issuedAt) },
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[#111111] mb-3">Open disputes</h2>
        <DataTable
          keyFor={(row) => row.id}
          rows={disputes}
          columns={[
            { header: "Shop", accessor: (r) => <span className="font-medium text-[#111111]">{r.invoice.subscription.shop.name}</span> },
            { header: "Reason", accessor: (r) => r.reason },
            { header: "Amount", accessor: (r) => `$${(r.invoice.amountCents / 100).toLocaleString()}` },
            { header: "Opened", accessor: (r) => formatDate(r.openedAt) },
          ]}
          emptyLabel="No open disputes."
        />
      </div>
    </div>
  );
}
