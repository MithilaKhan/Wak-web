'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Star } from 'lucide-react';

const HorizontalServiceCard = ({
    id,
    name,
    avatar,
    rating,
    reviewCount,
    category,
    description,
    price,
    coverImage
}: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    category: string;
    description: string;
    price: number;
    coverImage: string;
}) => {
    const router = useRouter();

    const handleClick = () => {
        const cookies = document.cookie;
        const hasMode = cookies.includes("user-mode=service");

        if (!hasMode) {
            document.cookie = "user-mode=service; path=/; max-age=31536000";
        }

        router.push(`/services/${id}`);
        router.refresh();
    };

    return (
        <div
            onClick={handleClick}
            className="flex gap-4 bg-[#2a2a2a]/20 border border-zinc-800/80 hover:border-[#FF6700]/30 hover:bg-[#2a2a2a]/40 rounded-2xl p-4 transition-all duration-350 hover:-translate-y-0.5 cursor-pointer group"
        >
            {/* Cover Image (Left Side) */}
            <div className="w-28 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden shrink-0 relative border border-zinc-700/20">
                <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content (Right Side) */}
            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base line-clamp-1 group-hover:text-[#FFDDA5] transition-colors">
                        {name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 line-clamp-1 mt-1 font-normal leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                    <div className="flex items-center gap-2 min-w-0">
                        <img
                            src={avatar}
                            alt={name}
                            className="w-5.5 h-5.5 rounded-full object-cover border border-zinc-700/50 shrink-0"
                        />
                        <span className="text-[10px] bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded font-medium truncate">
                            {category}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <div className="flex items-center gap-0.5 text-amber-400">
                            <Star size={11} className="fill-amber-400 text-amber-400" />
                            <span className="text-[11px] font-semibold text-white ml-0.5">
                                {rating.toFixed(1)} <span className="text-zinc-500 font-normal">({reviewCount})</span>
                            </span>
                        </div>
                        <span className="text-[11px] font-bold text-[#FF6700]">
                            From: ${price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const categories = [
    { name: "All", value: "All" },
    { name: "Web Development", value: "Development" },
    { name: "Graphic Design", value: "Designer" },
    { name: "Digital Marketing", value: "Marketing" },
    { name: "UI/UX Design", value: "UIUX Design" },
    { name: "Copy writing", value: "Copy writing" },
    { name: "SEO & Marketing", value: "SEO Marketing" }
];

const servicesData = [
    {
        id: 1,
        name: 'Harry Thomas Wilson',
        avatar:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Development',
        description:
            'I will do website development as full stack web developer, front end, back-end development....',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 2,
        name: 'Olivia Grace Smith',
        avatar:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.6,
        reviewCount: 57,
        category: 'Designer',
        description: 'I will do website ui ux design, app ui ux design, ui ux design expert',
        price: 320,
        coverImage:
            'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 3,
        name: 'Isla Charlotte Brown',
        avatar:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.5,
        reviewCount: 57,
        category: 'Copy writing',
        description: 'I will be your professional website content writer, SEO copywriter.',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 4,
        name: 'James William Davies',
        avatar:
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.8,
        reviewCount: 24,
        category: 'Marketing',
        description: 'I will set up and manage your high-converting Google Ads and Meta Ads campaigns.',
        price: 180,
        coverImage:
            'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 5,
        name: 'Sophie Marie Evans',
        avatar:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.9,
        reviewCount: 42,
        category: 'UIUX Design',
        description: 'I will design mobile app UI/UX, SaaS landing page UI/UX in Figma.',
        price: 290,
        coverImage:
            'https://images.pexels.com/photos/1966445/pexels-photo-1966445.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 6,
        name: 'Leo Alexander Taylor',
        avatar:
            'https://images.pexels.com/photos/912278/pexels-photo-912278.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.7,
        reviewCount: 31,
        category: 'SEO Marketing',
        description: 'I will do advanced technical SEO audit, keyword research, and on-page optimization.',
        price: 150,
        coverImage:
            'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 7,
        name: 'Isla Charlotte Brown',
        avatar:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Copy writing',
        description: 'I will be your professional website content writer, SEO copywriter.',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 8,
        name: 'Olivia Grace Smith',
        avatar:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Designer',
        description: 'I will do website ui ux design, app ui ux design, ui ux design expert',
        price: 320,
        coverImage:
            'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
    {
        id: 9,
        name: 'Harry Thomas Wilson',
        avatar:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1',
        rating: 4.4,
        reviewCount: 57,
        category: 'Development',
        description:
            'I will do website development as full stack web developer, front end, back-end development....',
        price: 450,
        coverImage:
            'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400&h=220&dpr=1',
    },
];

export default function ServicesList() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Sync selected tab with URL query category param if present
    useEffect(() => {
        if (categoryQuery) {
            setSelectedCategory(categoryQuery);
        } else {
            setSelectedCategory('All');
        }
    }, [categoryQuery]);

    const filteredServices = selectedCategory === 'All'
        ? servicesData
        : servicesData.filter(service => service.category === selectedCategory);

    return (
        <section className="pb-16 md:py-20 bg-[#1e1e1e]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-1 h-10 bg-[#FF6700] rounded-full"></div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                                    Our Services
                                </h2>
                                <p className="text-gray-400 text-sm mt-2">
                                    Browse through expert-vetted professionals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2.5 mb-12">
                    {categories.map((category) => {
                        const isActive = selectedCategory === category.value;
                        return (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? 'bg-[#FF6700] text-white shadow-lg shadow-orange-600/10'
                                        : 'bg-[#2a2a2a]/30 hover:bg-[#2a2a2a]/55 border border-zinc-800/80 text-zinc-300 hover:text-white'
                                }`}
                            >
                                {category.name}
                            </button>
                        );
                    })}
                </div>

                {filteredServices.length === 0 ? (
                    <div key={selectedCategory} className="py-20 text-center border border-dashed border-zinc-800 rounded-2xl bg-[#2a2a2a]/10 animate-in fade-in duration-300">
                        <p className="text-zinc-500 text-sm">No services found in this category.</p>
                    </div>
                ) : (
                    <div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
                        {filteredServices.map((service) => (
                            <HorizontalServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
