import { Flag, ScrollText, UserCog } from "lucide-react";
import PageHeader from "@/components/admin/PageHeader";
import DataTable from "@/components/admin/DataTable";
import Badge from "@/components/admin/Badge";
import { ROLE_LABELS } from "@/lib/auth/rbac";
import { formatDate } from "@/lib/utils";
import { getSettingsData } from "@/lib/queries/settings";

export default async function SettingsPage() {
  const { flags, auditLog, admins } = await getSettingsData();

  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Feature flags, admin accounts, and audit history." />

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Flag size={14} className="text-[#9CA3AF]" />
          <h2 className="text-sm font-semibold text-[#111111]">Feature flags</h2>
        </div>
        <DataTable
          keyFor={(row) => row.id}
          rows={flags}
          columns={[
            { header: "Key", accessor: (r) => <span className="font-mono text-xs text-[#111111]">{r.key}</span> },
            { header: "Description", accessor: (r) => r.description },
            { header: "Status", accessor: (r) => <Badge tone={r.enabled ? "good" : "neutral"}>{r.enabled ? "Enabled" : "Disabled"}</Badge> },
          ]}
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <UserCog size={14} className="text-[#9CA3AF]" />
          <h2 className="text-sm font-semibold text-[#111111]">Admin accounts</h2>
        </div>
        <DataTable
          keyFor={(row) => row.email}
          rows={admins}
          columns={[
            { header: "Name", accessor: (r) => <span className="font-medium text-[#111111]">{r.name}</span> },
            { header: "Email", accessor: (r) => r.email },
            { header: "Role", accessor: (r) => <Badge tone="info">{ROLE_LABELS[r.role]}</Badge> },
          ]}
          emptyLabel="No admin accounts configured — set ADMIN_USERS in your environment."
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <ScrollText size={14} className="text-[#9CA3AF]" />
          <h2 className="text-sm font-semibold text-[#111111]">Audit log</h2>
        </div>
        <DataTable
          keyFor={(row) => row.id}
          rows={auditLog}
          columns={[
            { header: "Actor", accessor: (r) => r.actorEmail },
            { header: "Action", accessor: (r) => r.action },
            { header: "Target", accessor: (r) => <span className="font-medium text-[#111111]">{r.target}</span> },
            { header: "When", accessor: (r) => formatDate(r.at) },
          ]}
        />
      </div>
    </div>
  );
}
