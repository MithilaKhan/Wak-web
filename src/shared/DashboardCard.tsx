import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({
  children,
  className,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "bg-[#353535]  p-6 ",
        className
      )}
    >
      {children}
    </div>
  );
}
