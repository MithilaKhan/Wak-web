
import ShopFilter from "./components/ShopFilter";
import ShopProductGrid from "./components/ShopProductGrid";

export default function Shop() {
    return (
        <div className="min-h-[calc(100vh-180px)] bg-[#4f2c1d] py-[50px]">
            <div className="container mx-auto px-4">

                {/* Layout: Sidebar + Grid */}
                <div className="grid grid-cols-12 gap-6 lg:gap-10">
                    {/* Filter Sidebar — fluid responsive width */}
                    <div className="col-span-12 lg:col-span-3 shrink-0">
                        <ShopFilter />
                    </div>

                    {/* Product Grid + Pagination */}
                    <div className="col-span-12 lg:col-span-9 bg-white/5 p-3 rounded-2xl">
                        <ShopProductGrid />
                    </div>
                </div>
            </div>
        </div>
    );
}
