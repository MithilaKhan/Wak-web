'use client';

import { useState } from 'react';
import { Clock } from 'lucide-react';
import { FiShield } from "react-icons/fi";

interface PricingOption {
    id: string;
    type: string;
    price: number;
    delivery: string;
    deliveryTime: string;
    features: string[];
}

const pricingData: PricingOption[] = [
    {
        id: '1',
        type: 'Hourly',
        price: 250,
        delivery: 'Varies delivery',
        deliveryTime: '7 days delivery',
        features: [
            'Bug Fixed',
            'Consultation'
        ]
    },
    {
        id: '2',
        type: 'Feature Build',
        price: 520,
        delivery: '7 days delivery',
        deliveryTime: '7 days delivery',
        features: [
            'Single page feature',
            'API Integration'
        ]
    }
];

export default function Pricing() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const currentOption = pricingData[selectedIndex];

    return (
        <div className="sticky top-8">
            {/* Progress Bar with Labels */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    {pricingData.map((option, index) => (
                        <button
                            key={option.id}
                            onClick={() => setSelectedIndex(index)}
                            className={`text-sm font-medium transition-colors duration-200 ${index === selectedIndex
                                ? 'text-white'
                                : 'text-white/72'
                                }`}
                        >
                            {option.type}
                        </button>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#FFDDA5] transition-all duration-300"
                        style={{
                            width: `${((selectedIndex + 1) / pricingData.length) * 100}%`
                        }}
                    ></div>
                </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-[#252525] rounded-xl p-6 border border-gray-700 hover:border-orange-400 transition-colors duration-300">
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl font-medium text-white">${currentOption.price}</span>
                        <span className="flex items-center gap-2 text-sm text-white/72 bg-[#1E1E1E] px-3 py-2 rounded-full">
                            <Clock className="w-4 h-4 text-orange-400" />
                            <span>{currentOption.delivery}</span>
                        </span>
                    </div>


                    <p className="text-sm text-white font-semibold mb-2">Detailed {currentOption.type} package including:</p>
                    <div className="space-y-2 mb-6">
                        {currentOption.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-white/76">
                                <span className="text-green-600 font-normal">✓</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="w-full bg-primary text-[#E9EBF0]  py-3 rounded-lg transition-colors duration-200 mb-3">
                    Continue (${currentOption.price})
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#FFF0D3]">
                    <span><FiShield /></span>
                    <span>Secure Payment Protection</span>
                </div>
            </div>
        </div>
    );
}
