// src/components/(customer-pages)/profile/orders/index.tsx
'use client';

import { useState } from "react";
import { MessageCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import DashboardCard from "../../../../shared/DashboardCard";
import OrderTimeline from "./OrderTimeline";
import OrdersTable, { Order } from "./OrdersTable";

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  if (!selectedOrder) {
    return (
      <DashboardCard className="p-8">
        <OrdersTable onSelectOrder={setSelectedOrder} />
      </DashboardCard>
    );
  }

  return (
    <DashboardCard className="p-8">
      {/* Back Button */}
      <button
        onClick={() => setSelectedOrder(null)}
        className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white mb-8 transition-colors cursor-pointer group font-medium"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to My Orders
      </button>

      {/* Project Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800/80">
        <div>
          <p className="text-xs text-zinc-400 font-normal tracking-wide">
            Active Project {selectedOrder.id}
          </p>
          <h1 className="text-2xl font-medium text-white mt-1">
            {selectedOrder.title}
          </h1>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#fbe1b3] hover:bg-[#f3d299] text-zinc-950 font-semibold text-sm rounded-lg transition-colors cursor-pointer shadow-md self-start sm:self-auto shrink-0">
          <MessageCircle className="w-4 h-4 fill-zinc-950" />
          Message Seller
        </button>
      </div>

      {/* Milestone Header */}
      <div className="flex items-center gap-2 mb-8">
        <CheckCircle2 className="w-4 h-4 text-zinc-400" />
        <span className="text-sm font-medium text-zinc-300">
          Service Delivery Milestones
        </span>
      </div>

      {/* Timeline */}
      <OrderTimeline />
    </DashboardCard>
  );
}
