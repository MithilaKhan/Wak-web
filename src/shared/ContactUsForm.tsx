"use client"

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

const ContactUsForm = () => {
    return (
        <form className="bg-white p-8 rounded-xl shadow-xl w-full h-full flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
                {/* Top Row: Name, Email, Contact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                        <Label className="text-zinc-800 font-medium">
                            Full Name<span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            placeholder="Enter full name"
                            className="bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-orange-500 focus-visible:ring-offset-0 h-12 mt-3"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label className="text-zinc-800 font-medium">
                            Email<span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            type="email"
                            placeholder="Enter email"
                            className="bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-orange-500 focus-visible:ring-offset-0 h-12 mt-3"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label className="text-zinc-800 font-medium">
                            Contact Number<span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            placeholder="Enter contact number"
                            className="bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-orange-500 focus-visible:ring-offset-0 h-12 mt-3"
                        />
                    </div>
                </div>

                {/* Bottom Row: Message */}
                <div className="space-y-3">
                    <Label className="text-zinc-800 font-medium">
                        Message<span className="text-red-500 ml-1">*</span>
                    </Label>
                    <textarea
                        placeholder="Type here.."
                        className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 rounded-lg p-4 min-h-[150px] outline-none focus:ring-1 focus:ring-orange-500 focus:bg-white transition-all resize-none mt-3"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
                <Button className="bg-[#FF6700] hover:bg-orange-500 text-white px-8 py-6 text-md font-medium rounded-xl transition-all shadow-lg shadow-orange-500/20 cursor-pointer">
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default ContactUsForm;