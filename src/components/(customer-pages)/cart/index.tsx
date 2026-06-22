"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import CartItemRow from "./CartItemRow";
import OrderSummary from "./OrderSummary";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface CartData {
    items: CartItem[];
    deliveryFee: number;
}

export const cartData: CartData = {
    items: [
        {
            id: "1",
            name: "Jr. Zoom Soccer Cleats",
            price: 1169,
            image: "/product4.png",
            quantity: 1,
        },
        {
            id: "2",
            name: "Gucci duffle bag",
            price: 420,
            image: "/product2.png",
            quantity: 1,
        },
    ],
    deliveryFee: 55,
};

const ProductCart = () => {
    const [items, setItems] = useState(cartData.items);
    const { deliveryFee } = cartData;

    const handleRemove = (id: string) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)));
    };

    const isEmpty = items.length === 0;
    return (
        <main className="min-h-[calc(100vh-184px)]  pt-14.5 ">


            {isEmpty ? (
                /* Empty State */
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-2xl bg-linear-to-br from-white/5 to-white/20 border border-white/10 backdrop-blur-xl p-16 text-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                            <ShoppingCart size={40} className="text-white/40" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Your cart is empty
                        </h2>
                        <p className="text-white/60 mb-8">
                            Add items to your cart to get started
                        </p>
                        <Link
                            href="/"
                            className="inline-block px-8 py-3 rounded-lg bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            ) : (
                /* Cart with Items */
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Items Section */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <CartItemRow
                                    key={item.id}
                                    item={item}
                                    onRemove={handleRemove}
                                    onQuantityChange={handleQuantityChange}
                                />
                            ))}
                        </div>

                        {/* Summary Section */}
                        <div className="lg:col-span-1">
                            <OrderSummary items={items} deliveryFee={deliveryFee} />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ProductCart;