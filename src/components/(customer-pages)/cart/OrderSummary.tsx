"use client";

import Link from "next/link";
import { CartItem } from "../cart";

interface OrderSummaryProps {
    items: CartItem[];
    deliveryFee: number;
}

export default function OrderSummary({ items, deliveryFee }: OrderSummaryProps) {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + deliveryFee;

    return (
        <div className="h-fit sticky top-6 rounded-2xl bg-[#353535] ">
            {/* Header */}
            <div className="px-6 py-4 pb-0!">
                <h2 className="text-base font-semibold text-white">Summary</h2>
            </div>

            {/* Items List */}
            <div className="px-6 py-5 space-y-4">
                {items.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                        {/* Item Image */}
                        <div className="w-14 h-14 rounded-lg bg-black shrink-0 overflow-hidden border border-white/10">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover p-2"
                            />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white line-clamp-1">
                                {item.name}
                            </p>
                            <p className="text-lg font-medium text-primary mt-0.5">
                                ${item.price.toLocaleString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pricing Details */}
            <div className="px-6 py-5 space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Subtotal Amount</span>
                    <span className="font-medium text-white/70">
                        ${subtotal.toLocaleString()}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Delivery Fee</span>
                    <span className="font-medium text-white/70">
                        ${deliveryFee.toLocaleString()}
                    </span>
                </div>
            </div>

            {/* Total */}
            <div className="px-6 py-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-normal text-white/70">Total Amount</span>
                    <span className="text-2xl font-semibold text-primary">
                        ${total.toLocaleString()}
                    </span>
                </div>
            </div>

            {/* Checkout Button */}
            <div className="px-6 pb-4">
                <Link
                    href="/check-out"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium text-center transition-all duration-300 hover:bg-primary/90 block"
                >
                    Check out
                </Link>
            </div>
        </div>
    );
}
