// src/components/(customer-pages)/profile/orders/OrderTimeline.tsx
import { Check } from "lucide-react";

interface Milestone {
  title: string;
  date: string;
  status: "Pending" | "In progress" | "Completed" | "Approved";
}

const milestones: Milestone[] = [
  {
    title: "Requirements Gathering",
    date: "Oct 24, 2023",
    status: "Pending",
  },
  {
    title: "Initial Design Draft",
    date: "Oct 26, 2023",
    status: "In progress",
  },
  {
    title: "Development Phase",
    date: "Oct 24, 2023",
    status: "In progress",
  },
  {
    title: "Project Handover",
    date: "Oct 24, 2023",
    status: "Completed",
  },
  {
    title: "Completed",
    date: "Oct 24, 2023",
    status: "Approved",
  },
];

const statusStyles: Record<Milestone["status"], string> = {
  Pending: "bg-[#2a2a2a] text-zinc-400 border-zinc-700",
  "In progress": "bg-[#3d2a13] text-[#f5a623] border-[#f5a623]/20",
  Completed: "bg-[#143422] text-[#2ecc71] border-[#2ecc71]/20",
  Approved: "bg-[#391835] text-[#d946ef] border-[#d946ef]/20",
};

export default function OrderTimeline() {
  return (
    <div className="relative pl-2">
      {milestones.map((milestone, index) => (
        <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
          {/* Vertical dashed line */}
          {index < milestones.length - 1 && (
            <div className="absolute left-[15px] top-8 w-[2px] h-[calc(100%-24px)] border-l-2 border-dashed border-zinc-600" />
          )}

          {/* Solid Green Circle Badge */}
          <div className="relative z-10 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center shadow-md shadow-emerald-500/20">
              <Check className="w-4 h-4 text-white stroke-3" />
            </div>
          </div>

          {/* Milestone Details & Status Badge */}
          <div className="flex-1 flex items-start justify-between min-h-[40px] pt-1">
            <div>
              <h4 className="text-sm font-normal text-white">
                {milestone.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">{milestone.date}</p>
            </div>

            <span
              className={`px-3 py-1 text-[11px] font-semibold rounded-full border ${statusStyles[milestone.status]}`}
            >
              {milestone.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
