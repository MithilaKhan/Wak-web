'use client';

import { Clock } from 'lucide-react';
import { FiShield } from "react-icons/fi";

export default function Pricing({ service }: { service: any }) {
    if (!service) return null;

    const features = service.packageDetails || [];

    return (
        <div className="sticky top-8">
            {/* Pricing Card */}
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-orange-400 transition-colors duration-300 mt-12">
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl font-medium text-white">${service.price}</span>
                        <span className="flex items-center gap-2 text-sm text-white/72 bg-[#4f2c1d] px-3 py-2 rounded-full">
                            <Clock className="w-4 h-4 text-orange-400" />
                            <span>{service.deliveryTime ? `${service.deliveryTime} days delivery` : 'Varies delivery'}</span>
                        </span>
                    </div>

                    <p className="text-sm text-white font-semibold mb-2">Detailed package including:</p>
                    <div className="space-y-2 mb-6">
                        {features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-white/76">
                                <span className="text-green-600 font-normal">✓</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="w-full bg-primary text-[#E9EBF0] py-3 rounded-lg transition-colors duration-200 mb-3 cursor-pointer hover:opacity-90">
                    Continue (${service.price})
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#FFF0D3]">
                    <span><FiShield /></span>
                    <span>Secure Payment Protection</span>
                </div>
            </div>
        </div>
    );
}
