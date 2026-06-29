"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/shared/ProductCard';

// Import Swiper styles
import 'swiper/css';
import { useRouter } from 'next/navigation';

const products = [
    {
        id: 1,
        name: "RGB liquid CPU Cooler",
        image: "/product1.png",
        currentPrice: 120,
        originalPrice: 180,
        discount: 40,
        rating: 5,
        reviews: 88
    },
    {
        id: 2,
        name: "Jr. Zoom Soccer Cleats",
        image: "/product2.png",
        currentPrice: 1169,
        originalPrice: 1899,
        discount: 35,
        rating: 5,
        reviews: 88
    },
    {
        id: 3,
        name: "Small BookSelf",
        image: "/product3.png",
        currentPrice: 520,
        originalPrice: 580,
        discount: 10,
        rating: 5,
        reviews: 88
    },
    {
        id: 4,
        name: "Gucci duffle bag",
        image: "/product4.png",
        currentPrice: 420,
        originalPrice: 580,
        discount: 24,
        rating: 4.5,
        reviews: 88
    },
    {
        id: 5,
        name: "Gaming Chair",
        image: "/product1.png",
        currentPrice: 320,
        originalPrice: 400,
        discount: 20,
        rating: 5,
        reviews: 95
    }
];


const BestSelling = () => {
    const router = useRouter();

    const handleClick = () => {
        const cookies = document.cookie;
        const hasMode = cookies.includes("user-mode=customer");

        if (!hasMode) {
            document.cookie = "user-mode=customer; path=/; max-age=31536000";
        }

        router.push(`/shop`);
        router.refresh();
    };
    return (
        <section className="py-[50px] bg-[#4f2c1d]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-5 h-10 bg-primary rounded-xs"></div>
                        <span className="text-white font-normal text-sm">This Month</span>
                    </div>
                    <div className="flex justify-between items-end" onClick={handleClick}>
                        <h2 className="title mb-0!">Best Selling Products</h2>
                        <button className="flex items-center gap-2  text-[#FFDDA5] px-6 py-3 rounded-md font-medium hover:underline underline-offset-4 transition-all group ">
                            View All
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="products-slider">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        autoplay={{ delay: 4000 }}
                        breakpoints={{
                            320: { slidesPerView: 1.2, spaceBetween: 20 },
                            640: { slidesPerView: 2.2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                            1280: { slidesPerView: 4, spaceBetween: 30 }
                        }}
                        className="w-full"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
