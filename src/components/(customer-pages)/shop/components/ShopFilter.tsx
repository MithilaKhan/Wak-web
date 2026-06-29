"use client";

import { useState } from "react";

const categories = ["Mobile Phone", "Airpods", "Travel essentials", "Apple Watch", "Skin Care", "Sports"];
const brands = ["E-commerce", "E-shop", "Shop Name your togine"];
const offers = ["Regular", "Price drop"];

interface ShopFilterProps {
    onApply?: (filters: FilterState) => void;
}

export interface FilterState {
    priceMin: number;
    priceMax: number;
    categories: string[];
    rating: number | null;
    brands: string[];
    offers: string[];
}

export default function ShopFilter({ onApply }: ShopFilterProps) {
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(1000);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

    const toggleItem = (
        list: string[],
        setter: (v: string[]) => void,
        value: string
    ) => {
        setter(list.includes(value) ? list.filter((i) => i !== value) : [...list, value]);
    };

    const handleApply = () => {
        onApply?.({
            priceMin,
            priceMax,
            categories: selectedCategories,
            rating: selectedRating,
            brands: selectedBrands,
            offers: selectedOffers,
        });
    };

    return (
        <aside className="bg-white rounded-2xl p-6 border border-white/5 space-y-7 sticky top-0 self-start">
            {/* Price Range */}
            <div>
                <h3 className="text-gray-900 font-medium text-sm mb-4">Price Range</h3>
                <div className="space-y-3">
                    <input
                        type="range"
                        min={0}
                        max={1000}
                        value={priceMax}
                        onChange={(e) => setPriceMax(Number(e.target.value))}
                        className="w-full accent-[#FF6700] cursor-pointer"
                    />
                    <div className="flex items-center gap-3">
                        <div className="flex-1 bg-[#4f2c1d] border border-white/10 rounded-lg px-3 py-2 text-white text-xs font-medium text-center">
                            ${priceMin}
                        </div>
                        <div className="flex-1 bg-[#4f2c1d] border border-white/10 rounded-lg px-3 py-2 text-white text-xs font-medium text-center">
                            ${priceMax}
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Category */}
            <div>
                <h3 className="text-gray-900 font-medium text-sm mb-4">Category</h3>
                <div className="space-y-3">
                    {categories.map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(cat)}
                                onChange={() => toggleItem(selectedCategories, setSelectedCategories, cat)}
                                className="w-4 h-4 rounded border-white/20 accent-[#FF6700] cursor-pointer"
                            />
                            <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                                {cat}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Ratings */}
            <div>
                <h3 className="text-gray-900 font-medium text-sm mb-4">Ratings</h3>
                <div className="space-y-2">
                    {[4, 3, 2, 1].map((star) => (
                        <label key={star} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="rating"
                                checked={selectedRating === star}
                                onChange={() => setSelectedRating(star)}
                                className="accent-[#FF6700] cursor-pointer"
                            />
                            <span className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-3.5 h-3.5 ${i < star ? "fill-[#FFC107] text-[#FFC107]" : "fill-white/20 text-white/20"}`}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                                <span className="text-gray-900 text-xs ml-1">& Up</span>
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Brands */}
            <div>
                <h3 className="text-gray-900 font-medium text-sm mb-4">Brands</h3>
                <div className="space-y-3">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => toggleItem(selectedBrands, setSelectedBrands, brand)}
                                className="w-4 h-4 rounded border-white/20 accent-[#FF6700] cursor-pointer"
                            />
                            <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                                {brand}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Offers & Discounts */}
            <div>
                <h3 className="text-gray-900 font-medium text-sm mb-4">Offers & Discounts</h3>
                <div className="space-y-3">
                    {offers.map((offer) => (
                        <label key={offer} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedOffers.includes(offer)}
                                onChange={() => toggleItem(selectedOffers, setSelectedOffers, offer)}
                                className="w-4 h-4 rounded border-white/20 accent-[#FF6700] cursor-pointer"
                            />
                            <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                                {offer}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Apply Button */}
            <button
                onClick={handleApply}
                className="w-full bg-[#FF6700] hover:bg-orange-600 text-white font-medium py-3 rounded-xl text-sm transition-all active:scale-95 cursor-pointer shadow-lg shadow-orange-950/20 mt-2"
            >
                Apply
            </button>
        </aside>
    );
}
