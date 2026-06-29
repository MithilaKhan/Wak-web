// src/components/(customer-pages)/profile/settings/DeleteAccount.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import { Input } from "@/ui/input";

export default function DeleteAccount() {
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const reasons = [
    { id: "duplicate", label: "I have a duplicate account" },
    { id: "no-longer", label: "I no longer want to use Star Tech" },
    { id: "others", label: "Others" },
  ];

  const handleDelete = () => {
    console.log("Account deletion requested with reason:", selectedReason);
    alert("Account deletion request submitted successfully.");
  };

  return (
    <div className="text-white space-y-8">
      {/* Header Info */}
      <div>
        <h2 className="text-xl font-medium text-white mb-4 tracking-tight">Account Deletion Request</h2>
        <div className="space-y-3 text-sm text-zinc-400 leading-relaxed">
          <p>
            - If you delete your Account, you will lose your Account&apos;s Order History, Star Points, Saved PCs, Product Wishlist, and other Data that are related to your Account.
          </p>
          <p>
            - Star Points and other financial assets/Data related to this Account will not be Refundable/Recoverable.
          </p>
        </div>
      </div>

      {/* Reason Selection */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4 tracking-tight">Reason for Deletion</h3>
        <div className="space-y-3.5">
          {reasons.map((reason) => {
            const isSelected = selectedReason === reason.id;
            return (
              <div
                key={reason.id}
                onClick={() => setSelectedReason(reason.id)}
                className="flex items-center gap-3.5 cursor-pointer group"
              >
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isSelected
                    ? "bg-[#4f2c1d] border-zinc-500 text-white"
                    : "bg-[#4f2c1d] border-zinc-700 text-transparent group-hover:border-zinc-500"
                    }`}
                >
                  <Check className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "opacity-0"}`} />
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {reason.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-2.5 max-w-full">
        <label htmlFor="delete-password" className="text-sm font-medium text-zinc-300">
          Current Password
        </label>
        <div className="relative">
          <Input
            id="delete-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10 pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 mt-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex items-center justify-end gap-4 pt-6 border-t border-zinc-800/60">
        <button
          type="button"
          onClick={() => {
            setSelectedReason("");
            setPassword("");
          }}
          className="px-8 py-2.5 bg-[#522b2b] hover:bg-[#633434] text-[#f87171] text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-md"
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={!selectedReason || !password.trim()}
          onClick={handleDelete}
          className="px-8 py-2.5 bg-[#FF6700] hover:bg-orange-600 disabled:opacity-50 disabled:hover:bg-[#FF6700] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
