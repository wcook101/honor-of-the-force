import type { StillName } from "@/lib/stories";

const frames: Record<StillName, string> = {
  road: "still-road",
  window: "still-window",
  field: "still-field",
  porch: "still-porch",
  river: "still-river",
  hall: "still-hall",
};

export function Still({
  name,
  label,
  className = "",
}: {
  name: StillName;
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${frames[name]} ${className}`}>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-[0.7rem] uppercase tracking-[0.18em] text-cream">
        <span className="rounded-sm bg-navy/70 px-2 py-1">Demonstration still</span>
        <span className="text-gold-soft">{label}</span>
      </div>
    </div>
  );
}
