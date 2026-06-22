"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { cn } from "@/lib/utils";

const agentSignupSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  businessType: z.string().min(1, "Please select a business type"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type AgentSignupValues = z.infer<typeof agentSignupSchema>;

export function AgentSignupForm({ onSwitch }: { onSwitch: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<AgentSignupValues>({
    resolver: zodResolver(agentSignupSchema),
    defaultValues: {
      companyName: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      businessType: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  function onSubmit(values: AgentSignupValues) {
    console.log("Agent Signup Data:", values);
  }

  return (
    <div className="w-full max-w-[550px] mx-auto bg-zinc-950 p-6 md:p-10 rounded-[32px] shadow-sm border border-zinc-800">
      <div className="flex flex-col items-center text-center mb-6">
        <Image
          src="/logo.png"
          alt="Setrips Logo"
          width={120}
          height={50}
          className="h-auto brightness-0 invert"
        />
        <h1 className="text-3xl font-bold text-white mb-2">Create Agent Account</h1>
        <p className="text-zinc-400 text-sm">Join our ride booking management platform</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-white font-medium">Company / Agent Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter company or agent name"
                    className="h-12 bg-zinc-900/50 border-zinc-800 text-white focus:ring-[#FF6700] focus:border-[#FF6700] rounded-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-white font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="h-12 bg-zinc-900/50 border-zinc-800 text-white focus:ring-[#FF6700] focus:border-[#FF6700] rounded-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-white font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      className="h-12 bg-zinc-900/50 border-zinc-800 text-white focus:ring-[#FF6700] focus:border-[#FF6700] rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-white font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      className="h-12 bg-zinc-900/50 border-zinc-800 text-white focus:ring-[#FF6700] focus:border-[#FF6700] rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-white font-medium">Business Type</FormLabel>
                <div className="relative">
                  <FormControl>
                    <select
                      className={cn(
                        "flex h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6700] appearance-none",
                        !field.value && "text-zinc-500"
                      )}
                      {...field}
                    >
                      <option value="" disabled>Select business type</option>
                      <option value="Passenger">Passenger</option>
                      <option value="Agents">Agents</option>
                    </select>
                  </FormControl>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-white font-medium">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      className="h-12 bg-zinc-900/50 border-zinc-800 text-white focus:ring-[#FF6700] focus:border-[#FF6700] rounded-xl pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-white font-medium">Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="********"
                      className="h-12 bg-zinc-900/50 border-zinc-800 text-white focus:ring-[#FF6700] focus:border-[#FF6700] rounded-xl pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-14 bg-[#FF6700] hover:bg-orange-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-orange-900/20 mt-4"
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-zinc-400 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitch}
              className="text-[#FF6700] font-semibold hover:underline"
            >
              Sign in here
            </button>
          </p>
        </form>
      </Form>
    </div>
  );
}
