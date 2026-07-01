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
        <h2 className="auth-title mb-0! text-zinc-900">Set a new password</h2>
        <p className="text-sm text-zinc-500">Create a new password. Ensure it differs from previous ones for security</p>
      </div>
 
      <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onSwitch("signin"); }}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="new-password" className="text-zinc-700 text-sm font-medium">New Password</Label>
          <Input id="new-password" type="password" placeholder="Ab158j2@0" className="h-12 bg-zinc-50 border border-zinc-200 text-zinc-900 mt-2 rounded-xl placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary" />
        </div>
 
        <div className="flex flex-col gap-2">
          <Label htmlFor="confirm-password" className="text-zinc-700 text-sm font-medium">Confirm Password</Label>
          <Input id="confirm-password" type="password" placeholder="Ab158j2@0" className="h-12 bg-zinc-50 border border-zinc-200 text-zinc-900 mt-2 rounded-xl placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary" />
        </div>
 
        <Button type="submit" className="w-full bg-primary hover:bg-orange-500 text-white h-14 text-lg font-bold rounded-xl mt-4 shadow-lg shadow-orange-500/20 cursor-pointer">
          Update Password
        </Button>
      </form>
    </div>
  );
}

