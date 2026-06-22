"use client"

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

const ContactUsForm = () => {
    return (
        <form className="bg-[#333333] p-8 rounded-xl shadow-xl w-full h-full flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-8">
                {/* Top Row: Name, Email, Contact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                        <Label className="text-white font-medium">
                            Full Name<span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            placeholder="Enter full name"
                            className="bg-[#2a2a2a] border-none text-white h-12 focus:ring-1 focus:ring-orange-500 mt-3"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label className="text-white font-medium">
                            Email<span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            type="email"
                            placeholder="Enter email"
                            className="bg-[#2a2a2a] border-none text-white h-12 focus:ring-1 focus:ring-orange-500 mt-3"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label className="text-white font-medium">
                            Contact Number<span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            placeholder="Enter contact number"
                            className="bg-[#2a2a2a] border-none text-white h-12 focus:ring-1 focus:ring-orange-500 mt-3"
                        />
                    </div>
                </div>

                {/* Bottom Row: Message */}
                <div className="space-y-3">
                    <Label className="text-white font-medium">
                        Message<span className="text-red-500 ml-1">*</span>
                    </Label>
                    <textarea
                        placeholder="Type here.."
                        className="w-full bg-[#2a2a2a] border-none text-white rounded-lg p-4 min-h-[150px] outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none mt-3"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
                <Button className="bg-[#FF6700]  text-white px-8 py-6 text-md font-medium rounded-xl transition-all shadow-lg shadow-orange-900/20">
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default ContactUsForm;