"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Checkbox } from "@/ui/checkbox";
import { FacebookIcon, GoogleIcon, AppleIcon } from "@/components/(auth-pages)/components/brands";

interface SignUpFormProps {
  onSwitch: (view: "signin" | "forgot-password") => void;
}

export function SignUpForm({ onSwitch }: SignUpFormProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="title mb-0!">Register a new account</h2>
        <p className="text-sm text-white/72">Please enter your information to create account</p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-name" className="text-white text-sm font-medium">User Name</Label>
          <Input id="signup-name" type="text" placeholder="Enter full name" className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-email" className="text-white text-sm font-medium">Email</Label>
          <Input id="signup-email" type="email" placeholder="Enter email address" className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-contact" className="text-white text-sm font-medium">Contact Number</Label>
          <Input id="signup-contact" type="text" placeholder="Enter contact number" className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-password" className="text-white text-sm font-medium">Password</Label>
          <Input id="signup-password" type="password" placeholder="********" className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10" />
        </div>


        <Button type="submit" className="w-full bg-primary text-white h-14 text-lg font-medium rounded-xl mt-4">
          Sign Up
        </Button>
      </form>

      <div className="text-center">
        <button
          onClick={() => onSwitch("signin")}
          className="text-white text-sm font-medium hover:underline"
        >
          Sign In
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-14 gap-3 bg-zinc-900/50 border-zinc-800 text-white hover:bg-zinc-800 rounded-xl">
          <GoogleIcon className="w-6 h-6 text-red-500" />
          Google
        </Button>
        <Button variant="outline" className="h-14 gap-3 bg-zinc-900/50 border-zinc-800 text-white hover:bg-zinc-800 rounded-xl">
          <AppleIcon className="w-6 h-6 text-white" />
          Apple
        </Button>
      </div>
    </div>
  );
}

