"use client";

import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";

interface ResetPasswordFormProps {
  onSwitch: (view: "signin" | "otp") => void;
}

export function ResetPasswordForm({ onSwitch }: ResetPasswordFormProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="title mb-0!">Set a new password</h2>
        <p className="text-sm text-white/72">Create a new password. Ensure it differs from previous ones for security</p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onSwitch("signin"); }}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="new-password" className="text-white text-sm font-medium">New Password</Label>
          <Input id="new-password" type="password" placeholder="Ab158j2@0" className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirm-password" className="text-white text-sm font-medium">Confirm Password</Label>
          <Input id="confirm-password" type="password" placeholder="Ab158j2@0" className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10" />
        </div>

        <Button type="submit" className="w-full bg-primary text-white h-14 text-lg font-medium rounded-xl mt-4">
          Update Password
        </Button>
      </form>
    </div>
  );
}

