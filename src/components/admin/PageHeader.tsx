export default function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-xl font-black tracking-tight text-[#111111]">{title}</h1>
      {description && <p className="text-sm text-[#6B7280] mt-1">{description}</p>}
    </div>
  );
}
