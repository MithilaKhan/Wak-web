"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Checkbox } from "@/ui/checkbox";
import { useAuth } from "@/hooks/use-auth";
import { GoogleIcon, AppleIcon } from "@/components/(auth-pages)/components/brands";

interface SignInFormProps {
  onSwitch: (view: "signup" | "forgot-password") => void;
}

export function SignInForm({ onSwitch }: SignInFormProps) {
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="title mb-0!">Login to Account</h2>
        <p className="text-sm text-zinc-400">Please enter your email and password to continue</p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="signin-email" className="text-white/90 text-sm font-medium">Email</Label>
          <Input
            id="signin-email"
            type="email"
            placeholder="Enter email address"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="signin-password" title="Password" className="text-white/90 text-sm font-medium">Password</Label>
          <div className="relative">
            <Input
              id="signin-password"
              type="password"
              placeholder="********"
              className="h-13 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10 pr-10"
            />
            {/* Password toggle icon could go here */}
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-zinc-700 data-[state=checked]:bg-zinc-700 data-[state=checked]:border-zinc-700" />
            <Label htmlFor="remember" className="text-sm font-normal cursor-pointer text-zinc-400">Remember Password</Label>
          </div>
          <button
            type="button"
            onClick={() => onSwitch("forgot-password")}
            className="text-sm font-normal text-white/90 hover:underline"
          >
            Forget Password?
          </button>
        </div>

        <Button type="submit" className="w-full bg-[#FF6700]  text-white h-14 text-lg font-semiboldbold rounded-xl mt-4 shadow-lg shadow-orange-900/20">
          Sign In
        </Button>
      </form>

      <div className="text-center">
        <button
          onClick={() => onSwitch("signup")}
          className="text-white text-sm font-medium hover:underline"
        >
          Sign Up
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

