"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const categories = [
    { id: 1, name: "Make Up", image: "/dummy-cat1.png" },
    { id: 2, name: "Mobile Phone", image: "/dummy-cat2.png" },
    { id: 3, name: "Airpods", image: "/dummy-cat3.png" },
    { id: 4, name: "Laptop", image: "/dummy-cat4.png" },
    { id: 5, name: "Travel essentials", image: "/dummy-cat5.png" }, // Black bg
    { id: 6, name: "Laptop", image: "/dummy-cat6.png" }, // Dark bg
    { id: 7, name: "Make Up", image: "/dummy-cat1.png" },
    { id: 8, name: "Sunglass", image: "/dummy-cat3.png" },
    { id: 10, name: "Apple Watch", image: "/dummy-cat3.png" }, // Black bg
    { id: 11, name: "Travel essentials", image: "/dummy-cat5.png" },
    { id: 12, name: "Make Up", image: "/dummy-cat1.png" }, // Black bg
    { id: 13, name: "Make Up", image: "/dummy-cat1.png" }, // Black bg
    { id: 14, name: "Mobile Phone", image: "/dummy-cat2.png" }, // Black bg
    { id: 15, name: "Gaming", image: "/dummy-cat4.png" },
    { id: 16, name: "Mobile Phone", image: "/dummy-cat2.png" },
];

const FeaturedCategories = () => {
    return (
        <section className="py-[50px] bg-[#1e1e1e]">
            <div className="container mx-auto px-4">
                {/* Header with Navigation */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="title mb-0!">Featured Categories</h2>

                    <div className="flex gap-4">
                        {/* Custom prev/next navigation styled for disabled state using Swiper classes */}
                        <button
                            className="category-prev w-10 h-10 rounded-full bg-[#d4a373] flex items-center justify-center hover:bg-[#d4a373]/90 transition-all text-zinc-900 disabled:opacity-40 disabled:cursor-not-allowed [&.swiper-button-disabled]:!bg-zinc-800 [&.swiper-button-disabled]:!text-zinc-600 [&.swiper-button-disabled]:!opacity-40 [&.swiper-button-disabled]:pointer-events-none cursor-pointer"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            className="category-next w-10 h-10 rounded-full bg-[#d4a373] flex items-center justify-center hover:bg-[#d4a373]/90 transition-all text-zinc-900 disabled:opacity-40 disabled:cursor-not-allowed [&.swiper-button-disabled]:!bg-zinc-800 [&.swiper-button-disabled]:!text-zinc-600 [&.swiper-button-disabled]:!opacity-40 [&.swiper-button-disabled]:pointer-events-none cursor-pointer"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="categories-slider">
                    <Swiper
                        modules={[Navigation, Grid]}
                        navigation={{
                            prevEl: '.category-prev',
                            nextEl: '.category-next',
                        }}
                        slidesPerView={5}
                        slidesPerGroup={5}
                        grid={{
                            rows: 3,
                            fill: 'row'
                        }}
                        spaceBetween={30}
                        breakpoints={{
                            320: { slidesPerView: 2, slidesPerGroup: 2, grid: { rows: 2 } },
                            768: { slidesPerView: 3, slidesPerGroup: 3, grid: { rows: 3 } },
                            1024: { slidesPerView: 5, slidesPerGroup: 5, grid: { rows: 3 } }
                        }}
                        className="h-full w-full"
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.id} className="group cursor-pointer flex justify-center items-center">
                                {/* Fluid 200x143 card wrapper */}
                                <div className="w-full max-w-[200px] h-[143px] bg-[#2a2a2a]/25 border border-zinc-800/40 rounded-xl flex flex-col items-center justify-center ">
                                    <div className="relative min-w-[144px] min-h-20 flex items-center justify-center mb-2">
                                        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                fill
                                                className="object-contain p-0.5"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-white font-medium text-sm text-center line-clamp-1">
                                        {category.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Grid Styles for Swiper */}
            <style jsx global>{`
                .categories-slider .swiper-grid-column .swiper-wrapper {
                    flex-direction: row !important;
                }
                .categories-slider .swiper-slide {
                    margin-top: 0 !important;
                    margin-bottom: 30px !important;
                }
            `}</style>
        </section>
    );
};

export default FeaturedCategories;
