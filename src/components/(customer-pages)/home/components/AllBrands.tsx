'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

const serviceCategoriesMarquee = [
    {
        name: "Web Development",
        href: "/services?category=Development",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&dpr=1"
    },
    {
        name: "Graphic Design",
        href: "/services?category=Designer",
        image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&dpr=1"
    },
    {
        name: "Digital Marketing",
        href: "/services?category=Marketing",
        image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&dpr=1"
    },
    {
        name: "UI/UX Design",
        href: "/services?category=UIUX Design",
        image: "https://images.pexels.com/photos/1966445/pexels-photo-1966445.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&dpr=1"
    },
    {
        name: "Copy writing",
        href: "/services?category=Copy writing",
        image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&dpr=1"
    },
    {
        name: "SEO & Marketing",
        href: "/services?category=SEO Marketing",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300&h=180&dpr=1"
    }
];


const AllBrands = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'products' | 'services'>('services');

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
        <section className="py-12 bg-[#4f2c1d] ">
            {/* Segmented Tab Controller */}
            <div className="flex justify-center mb-10">
                <div className="inline-flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-primary/50">
                    <button
                        onClick={() => handleTabChange('products')}
                        className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === 'products'
                                ? 'bg-[#FF6700] text-white shadow-lg shadow-orange-600/20 scale-100'
                                : 'text-zinc-800 hover:text-primary hover:bg-white/5'
                            }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => handleTabChange('services')}
                        className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === 'services'
                                ? 'bg-[#FF6700] text-white shadow-lg shadow-orange-600/20 scale-100'
                                : 'text-zinc-700 hover:text-primary hover:bg-white/5'
                            }`}
                    >
                        Services
                    </button>
                </div>
            </div>

            {/* Marquee displays */}
            <div className="w-full relative overflow-hidden group py-4 ">
                <div className="flex select-none">
                    {activeTab === 'products' ? (
                        /* Brands Marquee */
                        <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center">
                            {[...brands, ...brands, ...brands].map((brand, index) => (
                                <div
                                    key={`${brand.id}-${index}`}
                                    className="inline-flex items-center justify-center w-48 h-24 relative bg-white/5 border border-white/20 rounded-xl px-5 py-3 hover:border-[#FF6700]/30 transition-all duration-300"
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
                        /* Service Categories Marquee */
                        <div className="flex space-x-8 animate-marquee whitespace-nowrap items-center">
                            {[...serviceCategoriesMarquee, ...serviceCategoriesMarquee, ...serviceCategoriesMarquee].map((cat, index) => (
                                <Link
                                    key={`${cat.name}-${index}`}
                                    href={cat.href}
                                    className="inline-flex flex-col relative w-60 h-36 rounded-2xl overflow-hidden  shadow-lg group  transition-all duration-300 cursor-pointer select-none"
                                >
                                    {/* Image Background */}
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/90" />

                                    {/* Content inside card */}
                                    <div className="absolute bottom-4 left-4 text-left">
                                        <h4 className="text-white font-bold text-base tracking-wide group-hover:text-primary transition-colors">
                                            {cat.name}
                                        </h4>
                                        <span className="text-[10px] text-zinc-200 font-medium uppercase tracking-wider mt-1 block">
                                            Explore Services
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllBrands;
