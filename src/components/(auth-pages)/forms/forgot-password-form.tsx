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
        <h2 className="title mb-0!">Forget Password</h2>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onSwitch("otp"); }}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="forgot-email" className="text-white text-sm font-medium">Email</Label>
          <Input id="forgot-email" type="email" placeholder="Enter email address" className="bg-zinc-900/50 border-zinc-800 text-white h-13 rounded-xl  placeholder:text-zinc-600" />
        </div>

        <Button type="submit" className="w-full bg-primary text-white h-14 text-lg font-medium rounded-xl mt-4">
          Send a code
        </Button>
      </form>
    </div>
  );
}
