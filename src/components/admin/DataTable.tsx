interface Column<T> {
  header: string;
  accessor: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  keyFor: (row: T) => string;
  emptyLabel?: string;
}

export default function DataTable<T>({ columns, rows, keyFor, emptyLabel = "No records yet." }: DataTableProps<T>) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#F8F9FA]">
              {columns.map((col) => (
                <th key={col.header} className="text-left px-4 py-3 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-10 text-center text-[#9CA3AF] text-sm">
                  {emptyLabel}
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={keyFor(row)} className="hover:bg-[#FAFAFA] transition-colors">
                  {columns.map((col) => (
                    <td key={col.header} className={col.className ?? "px-4 py-3 text-[#374151] whitespace-nowrap"}>
                      {col.accessor(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
