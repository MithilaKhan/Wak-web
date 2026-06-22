"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const bannerData = [
    {
        id: 1,
        title: "Explore Mother's Day deals",
        subtitle: "Up to 50% OFF",
        image: "/banner.png",
    },
    {
        id: 2,
        title: "Spring Collection 2026",
        subtitle: "New Arrivals Now In",
        image: "/banner.png",
    },
    {
        id: 3,
        title: "Premium Tech Gadgets",
        subtitle: "Best Sellers Selection",
        image: "/banner.png",
    }
];

const Banner = () => {
    return (
        <div className="w-full relative group bg-[#1e1e1e]  flex flex-col items-center">
            <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{
                    el: '.banner-pagination',
                    clickable: true,
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full aspect-2.5/1 sm:aspect-3/1 lg:aspect-4/1 overflow-hidden min-h-[520px] rounded-none"
            >
                {bannerData.map((item) => (
                    <SwiperSlide key={item.id} className="relative w-full h-full">
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 h-full container mx-auto px-6 md:px-0 flex flex-col justify-center items-center">
                            <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-700">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4 tracking-tight">
                                    {item.title}
                                </h1>
                                <p className="text-sm md:text-lg text-zinc-700 mb-8 font-medium">
                                    {item.subtitle}
                                </p>
                                <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-900 rounded-full text-zinc-900 font-semibold hover:bg-zinc-900 hover:text-white transition-all duration-300 group/btn">
                                    Shop Now
                                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination container placed outside/below the banner */}
            <div className="banner-pagination flex justify-center items-center gap-2 mt-8 z-10"></div>
        </div>
    );
};

export default Banner;
