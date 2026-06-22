'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const brands = [
    { id: 1, name: "Shopify", logo: "/dummy-logo1.png" },
    { id: 2, name: "Amazon", logo: "/dummy-logo2.png" },
    { id: 3, name: "Nike", logo: "/dummy-logo3.png" },
    { id: 4, name: "Adidas", logo: "/dummy-logo4.png" },
    { id: 5, name: "Apple", logo: "/dummy-logo5.png" },
    { id: 6, name: "Sony", logo: "/dummy-logo6.png" },
    { id: 7, name: "Samsung", logo: "/dummy-logo7.png" },
    { id: 8, name: "Zara", logo: "/dummy-logo4.png" },
];

const serviceProviders = [
    {
        id: 1,
        name: "Harry Thomas Wilson",
        category: "Development",
        rating: 4.4,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
    },
    {
        id: 2,
        name: "Olivia Grace Smith",
        category: "Designer",
        rating: 4.6,
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
    },
    {
        id: 3,
        name: "Isla Charlotte Brown",
        category: "Copy writing",
        rating: 4.5,
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
    },
    {
        id: 4,
        name: "James William Davies",
        category: "Marketing",
        rating: 4.8,
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
    },
    {
        id: 5,
        name: "Sophie Marie Evans",
        category: "Designer",
        rating: 4.9,
        avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
    },
    {
        id: 6,
        name: "Leo Alexander Taylor",
        category: "Development",
        rating: 4.7,
        avatar: "https://images.pexels.com/photos/912278/pexels-photo-912278.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
    }
];


const AllBrands = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');

    // On mount, sync with existing user-mode cookie if present
    useEffect(() => {
        const isService = document.cookie.includes("user-mode=service");
        if (isService) {
            setActiveTab('services');
        } else {
            setActiveTab('products');
        }
    }, []);

    const handleTabChange = (tab: 'products' | 'services') => {
        setActiveTab(tab);
        const mode = tab === 'products' ? 'customer' : 'service';
        document.cookie = `user-mode=${mode}; path=/; max-age=31536000`;
        router.refresh();
    };

    return (
        <section className="py-12 bg-[#1e1e1e] border-b border-zinc-800/40">
            {/* Segmented Tab Controller */}
            <div className="flex justify-center mb-10">
                <div className="inline-flex items-center gap-1.5 bg-[#2a2a2a]/60 p-1.5 rounded-full border border-zinc-800/80">
                    <button
                        onClick={() => handleTabChange('products')}
                        className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                            activeTab === 'products'
                                ? 'bg-[#FF6700] text-white shadow-lg shadow-orange-600/20 scale-100'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => handleTabChange('services')}
                        className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                            activeTab === 'services'
                                ? 'bg-[#FF6700] text-white shadow-lg shadow-orange-600/20 scale-100'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        Services
                    </button>
                </div>
            </div>

            {/* Marquee displays */}
            <div className="w-full relative overflow-hidden group py-4 bg-[#1a1a1a]/30 border-y border-zinc-800/30">
                <div className="flex select-none">
                    {activeTab === 'products' ? (
                        /* Brands Marquee */
                        <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center">
                            {[...brands, ...brands, ...brands].map((brand, index) => (
                                <div
                                    key={`${brand.id}-${index}`}
                                    className="inline-flex items-center justify-center w-48 h-24 relative bg-[#2a2a2a]/20 border border-zinc-800/40 rounded-xl px-5 py-3 hover:border-[#FF6700]/30 transition-all duration-300"
                                >
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        className="object-contain p-1 filter brightness-90 hover:brightness-100 transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Service Providers Marquee */
                        <div className="flex space-x-8 animate-marquee whitespace-nowrap items-center">
                            {[...serviceProviders, ...serviceProviders, ...serviceProviders].map((provider, index) => (
                                <div
                                    key={`${provider.id}-${index}`}
                                    className="inline-flex items-center gap-4 bg-[#2a2a2a]/30 border border-zinc-800/60 rounded-xl px-5 py-3.5 min-w-[280px] hover:border-[#FF6700]/30 hover:bg-[#2a2a2a]/55 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-700/80 shrink-0 relative">
                                        <img
                                            src={provider.avatar}
                                            alt={provider.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-white font-semibold text-sm line-clamp-1">{provider.name}</span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[11px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-medium">
                                                {provider.category}
                                            </span>
                                            <div className="flex items-center gap-0.5 text-amber-400">
                                                <span className="text-xs font-semibold">★</span>
                                                <span className="text-[11px] text-zinc-300 font-medium">{provider.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllBrands;
