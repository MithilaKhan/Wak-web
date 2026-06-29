// src/ui/BrowseCategoriesButton.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    LayoutGrid,
    ChevronDown,
    ChevronRight,
    Laptop,
    ShoppingBag,
    Shirt,
    Home,
    Pill,
    Dumbbell,
    Baby,
    Apple,
    Heart,
    Code,
    Palette,
    Megaphone,
    Layers,
    PenTool,
    TrendingUp
} from 'lucide-react';

const productCategories = [
    { name: "Electronics", href: "/shop?category=Electronics", icon: Laptop },
    { name: "Woman's Fashion", href: "/shop?category=Woman's Fashion", icon: ShoppingBag },
    { name: "Men's Fashion", href: "/shop?category=Men's Fashion", icon: Shirt },
    { name: "Home & Lifestyle", href: "/shop?category=Home & Lifestyle", icon: Home },
    { name: "Medicine", href: "/shop?category=Medicine", icon: Pill },
    { name: "Sports & Outdoor", href: "/shop?category=Sports & Outdoor", icon: Dumbbell },
    { name: "Baby's & Toys", href: "/shop?category=Baby's & Toys", icon: Baby },
    { name: "Groceries & Pets", href: "/shop?category=Groceries & Pets", icon: Apple },
    { name: "Health & Beauty", href: "/shop?category=Health & Beauty", icon: Heart }
];

const serviceCategories = [
    { name: "Web Development", href: "/services?category=Development", icon: Code },
    { name: "Graphic Design", href: "/services?category=Designer", icon: Palette },
    { name: "Digital Marketing", href: "/services?category=Marketing", icon: Megaphone },
    { name: "UI/UX Design", href: "/services?category=UIUX Design", icon: Layers },
    { name: "Copy writing", href: "/services?category=Copy writing", icon: PenTool },
    { name: "SEO & Marketing", href: "/services?category=SEO Marketing", icon: TrendingUp }
];

export default function BrowseCategoriesButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 bg-[#FF6700] hover:bg-orange-500 transition-colors text-white px-5 py-2.5 rounded-lg font-semibold text-sm cursor-pointer shrink-0 w-64 justify-between"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3">
                    <LayoutGrid className="w-5 h-5" />
                    Browse All Categories
                </div>
                <ChevronDown className={`w-4 h-4 ml-1 opacity-80 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full mt-2 w-[480px] bg-[#4f2c1d]/80 border border-white/50 rounded-xl shadow-2xl shadow-black/80 flex overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Left Column: Top-level headers (Products, Services) */}
                    <div className="w-[180px] border-r border-white/80 bg-[#4f2c1d] p-2.5 flex flex-col gap-1.5">
                        <button
                            onMouseEnter={() => setActiveTab('products')}
                            onClick={() => setActiveTab('products')}
                            className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer text-left group ${
                                activeTab === 'products'
                                    ? 'bg-[#FF6700] text-white shadow-md shadow-orange-600/20'
                                    : 'text-white hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <span>Products</span>
                            <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeTab === 'products' ? 'translate-x-0.5' : 'opacity-40 group-hover:opacity-100'}`} />
                        </button>
                        <button
                            onMouseEnter={() => setActiveTab('services')}
                            onClick={() => setActiveTab('services')}
                            className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer text-left group ${
                                activeTab === 'services'
                                    ? 'bg-[#FF6700] text-white shadow-md shadow-orange-600/20'
                                    : 'text-white hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <span>Services</span>
                            <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeTab === 'services' ? 'translate-x-0.5' : 'opacity-40 group-hover:opacity-100'}`} />
                        </button>
                    </div>

                    {/* Right Column: Subcategories list depending on activeTab */}
                    <div className="flex-1 p-3 bg-[#4f2c1d] max-h-[360px] overflow-y-auto animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 gap-1">
                            {(activeTab === 'products' ? productCategories : serviceCategories).map((category) => {
                                const Icon = category.icon;
                                return (
                                    <Link
                                        key={category.name}
                                        href={category.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:text-primary hover:bg-white/5 rounded-lg transition-colors font-medium group"
                                    >
                                        <Icon className="w-4.5 h-4.5 text-white group-hover:text-[#FF6700] transition-colors" />
                                        <span>{category.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
