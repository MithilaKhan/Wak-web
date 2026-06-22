"use client";

import { useState } from "react";
import { Star, ShoppingCart, Zap, Truck, RotateCcw, Shield } from "lucide-react";
import Link from "next/link";

interface Highlight {
    label: string;
    value: string;
}

interface ProductInfoProps {
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    aboutItems: string[];
    highlights: Highlight[];
}

const guarantees = [
    { icon: Truck, label: "Free Delivery", sub: "On orders over $200" },
    { icon: RotateCcw, label: "Easy Returns", sub: "30-day return policy" },
    { icon: Shield, label: "2 Year Warranty", sub: "Full coverage" },
];

export default function ProductInfo({
    name,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
    aboutItems,
    highlights,
}: ProductInfoProps) {
    const [qty, setQty] = useState(1);

    const decrement = () => setQty((q) => Math.max(1, q - 1));
    const increment = () => setQty((q) => q + 1);

    const savings = originalPrice ? originalPrice - price : 0;

    return (
        <div className="flex flex-col h-full">

            <div className=" space-y-5">

                {/* ── Name ── */}

                <p className="text-2xl  font-semibold text-white leading-tight tracking-tight ">
                    {name}
                </p>


                {/* ── Price ── */}
                <div className="flex items-center gap-3 flex-wrap ">
                    <span className="text-3xl font-semibold text-primary tracking-tight">
                        ${price.toLocaleString()}
                    </span>
                    {originalPrice && (
                        <span className="text-zinc-500 line-through text-xl">
                            ${originalPrice.toLocaleString()}
                        </span>
                    )}
                </div>

                {/* ── Rating ── */}
                <div className="flex items-center gap-3 ">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(rating)
                                    ? "fill-[#FFC107] text-[#FFC107]"
                                    : "text-zinc-700 fill-zinc-700"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-white font-semibold text-sm">{rating}</span>
                    <span className="text-zinc-500 text-sm">({reviews} reviews)</span>
                </div>

                <div className="flex flex-col gap-4 ">
                    {/* Qty row */}
                    <div className="flex items-center gap-4">
                        <span className="text-white/50 text-sm">Quantity</span>
                        <div className="flex items-center bg-[#252525] border border-white/8 rounded-xl overflow-hidden">
                            <button
                                onClick={decrement}
                                className="w-10 h-10 text-white/70 hover:text-white hover:bg-[#FF6700]/20 transition-all font-semibold text-xl cursor-pointer"
                            >
                                −
                            </button>
                            <span className="w-12 text-center text-white font-bold text-base border-x border-white/8">
                                {qty}
                            </span>
                            <button
                                onClick={increment}
                                className="w-10 h-10 text-white/70 hover:text-white hover:bg-[#FF6700]/20 transition-all font-semibold text-xl cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-transparent hover:bg-[#2B2B2B] border-2 border-white/15 hover:border-[#FF6700]/50 text-white font-semibold py-3.5 rounded-xl text-sm transition-all active:scale-95 cursor-pointer">
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                        </button>
                        <Link
                            href="/check-out"
                            className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#FF6700] hover:bg-orange-500 text-white font-semibold py-3.5 rounded-xl text-sm transition-all active:scale-95 shadow-xl shadow-orange-900/40 cursor-pointer"
                        >
                            <Zap className="w-4 h-4 fill-white" />
                            Buy Now
                        </Link>
                    </div>


                </div>
            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/5 pt-4" />

            {/* ── About this item ── */}
            <div className="my-4">
                <h3 className="text-sm font-medium text-white/70   mb-2">
                    About this item
                </h3>
                <ul className="space-y-2.5">
                    {aboutItems.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-white/70 leading-relaxed font-light">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6700] shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-t border-white/5 pt-4" />
            {/* ── Top Highlights ── */}
            <div className="">
                <h3 className="text-sm font-medium text-white/70  mb-4">
                    Specifications
                </h3>
                <div className="grid grid-cols-1 gap-y-3">
                    {highlights?.map(({ label, value }) => (
                        <div key={label} className="flex items-start gap-2 text-sm">
                            <span className="w-40 text-white/40 shrink-0">{label}</span>
                            <span className="text-white/80 ">{value}</span>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
