'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface ServiceHeader {
    id: string;
    title: string;
    professional: {
        name: string;
        badge: string;
        image: string;
    };
    rating: {
        stars: number;
        reviews: number;
    };
    heroImage: string;
}

const headerData: ServiceHeader = {
    id: '1',
    title: 'Full-Stack Development',
    professional: {
        name: 'Harry Thomas Wilson',
        badge: 'TOP RATER SELLER',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
    },
    rating: {
        stars: 4.4,
        reviews: 57
    },
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
};

export default function Header() {
    return (
        <div className="">
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 gap-8 items-start">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                            {headerData.title}
                        </h1>

                        {/* Professional Info */}
                        <div className="flex items-center  gap-4  pb-2 ">
                            <div className='flex items-center gap-4 border-e-2 border-white/50 pe-6'>
                                <Image
                                    src={headerData.professional.image}
                                    alt={headerData.professional.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div className="flex-1 space-y-1.5">
                                    <h3 className="text-white font-semibold text-lg">{headerData.professional.name}</h3>
                                    <p className="text-xs text-orange-400 font-normal">{headerData.professional.badge}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                    <span className="text-white font-semibold ml-1">{headerData.rating.stars}</span>
                                </div>
                                <span className="text-gray-400">({headerData.rating.reviews} REVIEWS)</span>
                            </div>

                        </div>

                        {/* Rating */}

                    </div>

                    {/* Right Hero Image */}
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
                        <Image
                            src={headerData.heroImage}
                            alt={headerData.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
