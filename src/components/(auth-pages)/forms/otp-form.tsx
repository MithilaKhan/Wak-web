"use client";
import { Button } from "@/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/ui/input-otp";

interface OtpFormProps {
  onSwitch: (view: "forgot-password" | "reset-password") => void;
}

export function OtpForm({ onSwitch }: OtpFormProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="auth-title mb-0! text-zinc-900">Check your email</h2>
        <p className="text-sm text-zinc-500 font-medium">
          We sent a reset link to <span className="text-zinc-900 font-bold">abc@gmail.com</span><br />
          Enter 4 digit code that mentioned in the email
        </p>
      </div>
 
      <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); onSwitch("reset-password"); }}>
        <div className="flex justify-center mt-2">
          <InputOTP maxLength={4}>
            <InputOTPGroup className="gap-4">
              <InputOTPSlot index={0} className="w-14 h-16 bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary text-2xl font-bold" />
              <InputOTPSlot index={1} className="w-14 h-16 bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary text-2xl font-bold" />
              <InputOTPSlot index={2} className="w-14 h-16 bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary text-2xl font-bold" />
              <InputOTPSlot index={3} className="w-14 h-16 bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary text-2xl font-bold" />
            </InputOTPGroup>
          </InputOTP>
        </div>
 
        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full bg-primary hover:bg-orange-500 text-white h-14 text-lg font-bold rounded-xl shadow-lg shadow-orange-500/20 cursor-pointer">
            Verify Code
          </Button>
 
          <p className="text-center text-sm text-zinc-500">
            You have not received the email?{" "}
            <button type="button" className="text-primary font-semibold hover:underline cursor-pointer">Resend</button>
          </p>
        </div>
      </form>
    </div>
  );
}

