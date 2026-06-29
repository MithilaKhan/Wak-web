"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/ui/input";

export default function ChangePasswordForm() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle password change
    console.log("Password change submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Current Password */}
      <div className="space-y-2">
        <label
          htmlFor="current-password"
          className="text-sm font-medium text-zinc-300"
        >
          Current Password
        </label>
        <div className="relative">
          <Input
            id="current-password"
            name="currentPassword"
            type={showCurrent ? "text" : "password"}
            placeholder="••••••••"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10"
          />
          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            {showCurrent ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="space-y-2">
        <label
          htmlFor="new-password"
          className="text-sm font-medium text-zinc-300"
        >
          New password
        </label>
        <div className="relative">
          <Input
            id="new-password"
            name="newPassword"
            type={showNew ? "text" : "password"}
            placeholder="••••••••"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10"
          />
          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            {showNew ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label
          htmlFor="confirm-password"
          className="text-sm font-medium text-zinc-300"
        >
          Confirm New password
        </label>
        <div className="relative">
          <Input
            id="confirm-password"
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="••••••••"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
          >
            {showConfirm ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4 pt-4">
        <button
          type="button"
          className="px-8 py-3 bg-[#5a2a2a] hover:bg-[#6a3232] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#FF6700] hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
}
