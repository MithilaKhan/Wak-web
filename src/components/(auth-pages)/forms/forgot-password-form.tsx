"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

interface ForgotPasswordFormProps {
  onSwitch: (view: "signin" | "otp") => void;
}

export function ForgotPasswordForm({ onSwitch }: ForgotPasswordFormProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="auth-title mb-0! text-zinc-900">Forget Password</h2>
      </div>
 
      <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onSwitch("otp"); }}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="forgot-email" className="text-zinc-700 text-sm font-medium">Email</Label>
          <Input id="forgot-email" type="email" placeholder="Enter email address" className="h-12 bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary" />
        </div>
 
        <Button type="submit" className="w-full bg-primary hover:bg-orange-500 text-white h-14 text-lg font-bold rounded-xl mt-4 shadow-lg shadow-orange-500/20 cursor-pointer">
          Send a code
        </Button>
      </form>
    </div>
  );
}
