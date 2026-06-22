// src/components/(customer-pages)/profile/orders/OrdersTable.tsx
'use client';

import { Plus, Eye } from "lucide-react";

export interface Order {
  id: string;
  title: string;
  date: string;
  sellerName: string;
  sellerAvatar: string;
  amount: string;
  status: "In Progress" | "Completed" | "Canceled";
}

const ordersData: Order[] = [
  {
    id: "#82910",
    title: "Website Design",
    date: "Oct 22, 2023",
    sellerName: "Sarah Chen",
    sellerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    amount: "$1,200",
    status: "In Progress",
  },
  {
    id: "#82910",
    title: "Mobile application Design",
    date: "Oct 22, 2023",
    sellerName: "Sophie Evans",
    sellerAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    amount: "$2,200",
    status: "Completed",
  },
  {
    id: "#82741",
    title: "Copywriting for Landing Page",
    date: "Oct 10, 2023",
    sellerName: "Victoria Robinson",
    sellerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    amount: "$1,850",
    status: "Canceled",
  },
];

interface OrdersTableProps {
  onSelectOrder: (order: Order) => void;
}

export default function OrdersTable({ onSelectOrder }: OrdersTableProps) {
  return (
    <div>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-medium text-white tracking-tight">My Orders</h1>
          <p className="text-sm text-white/72 mt-1">Manage and track all your active service requests.</p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#fbe1b3] hover:bg-[#f3d299] text-zinc-950 font-semibold text-sm rounded-lg transition-colors cursor-pointer shadow-md self-start sm:self-auto shrink-0">
          <Plus className="w-4 h-4 stroke-[2.5]" /> Add Order
        </button>
      </div>

      {/* Orders Table Container */}
      <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#141414] shadow-xl">
        {/* Table Header Bar */}
        <div className="bg-[#5c2e16] text-[#f98b3c] grid grid-cols-12 px-6 py-4 text-xs font-bold uppercase tracking-wider">
          <div className="col-span-5">ORDER DETAILS</div>
          <div className="col-span-3">SELLER</div>
          <div className="col-span-2">AMOUNT</div>
          <div className="col-span-1 text-center">STATUS</div>
          <div className="col-span-1 text-center">ACTION</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-zinc-800/60">
          {ordersData.map((order, index) => (
            <div
              key={order.id + order.title}
              className={`grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-zinc-800/40 ${index % 2 === 0 ? 'bg-[#1e1e1e]' : 'bg-[#141414]'
                }`}
            >
              {/* ORDER DETAILS */}
              <div className="col-span-5 pr-4">
                <p className="font-medium text-white text-sm">{order.title}</p>
                <p className="text-xs text-white/72 mt-0.5">ID: {order.id} • {order.date}</p>
              </div>

              {/* SELLER */}
              <div className="col-span-3 flex items-center gap-3 pr-4">
                <img
                  src={order.sellerAvatar}
                  alt={order.sellerName}
                  className="w-8 h-8 rounded-full object-cover border border-zinc-700 shrink-0"
                />
                <span className="text-white text-sm font-medium">{order.sellerName}</span>
              </div>

              {/* AMOUNT */}
              <div className="col-span-2">
                <span className="text-white font-semibold text-sm">{order.amount}</span>
              </div>

              {/* STATUS */}
              <div className="col-span-1 flex justify-center">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap border ${order.status === 'In Progress'
                    ? 'bg-[#3d2a13] text-[#f5a623] border-[#f5a623]/20'
                    : order.status === 'Completed'
                      ? 'bg-[#143422] text-[#2ecc71] border-[#2ecc71]/20'
                      : 'bg-[#3a1618] text-[#ef4444] border-[#ef4444]/20'
                    }`}
                >
                  {order.status}
                </span>
              </div>

              {/* ACTION */}
              <div className="col-span-1 flex justify-center">
                <button
                  onClick={() => onSelectOrder(order)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-zinc-700/50"
                  aria-label="View Order Details"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
