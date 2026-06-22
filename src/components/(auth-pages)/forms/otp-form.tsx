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
        <h2 className="title mb-0!">Check your email</h2>
        <p className="text-sm text-white/72">
          We sent a reset link to <span className="text-white font-medium">abc@gmail.com</span><br />
          Enter 4 digit code that mentioned in the email
        </p>
      </div>

      <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); onSwitch("reset-password"); }}>
        <div className="flex justify-center mt-2">
          <InputOTP maxLength={4}>
            <InputOTPGroup className="gap-4">
              <InputOTPSlot index={0} className="w-14 h-16 bg-[#1E1E1E] border border-zinc-700/50 text-white rounded-xl focus:ring-[#FF6700] focus:border-[#FF6700] text-2xl font-semibold" />
              <InputOTPSlot index={1} className="w-14 h-16 bg-[#1E1E1E] border border-zinc-700/50 text-white rounded-xl focus:ring-[#FF6700] focus:border-[#FF6700] text-2xl font-semibold" />
              <InputOTPSlot index={2} className="w-14 h-16 bg-[#1E1E1E] border border-zinc-700/50 text-white rounded-xl focus:ring-[#FF6700] focus:border-[#FF6700] text-2xl font-semibold" />
              <InputOTPSlot index={3} className="w-14 h-16 bg-[#1E1E1E] border border-zinc-700/50 text-white rounded-xl focus:ring-[#FF6700] focus:border-[#FF6700] text-2xl font-semibold" />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full bg-primary text-white h-14 text-lg font-medium rounded-xl">
            Verify Code
          </Button>

          <p className="text-center text-sm text-white/72">
            You have not received the email?{" "}
            <button type="button" className="text-orange-500 font-medium hover:underline">Resend</button>
          </p>
        </div>
      </form>
    </div>
  );
}

