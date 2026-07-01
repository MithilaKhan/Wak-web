
import ProductCard from "@/shared/ProductCard";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/ui/pagination"

const allProducts = [
    { id: 1, name: "Jr. Zoom Soccer Cleats", image: "/product3.png", currentPrice: 1169, originalPrice: 1899, discount: 35, rating: 5, reviews: 88 },
    { id: 2, name: "RGB liquid CPU Cooler", image: "/product1.png", currentPrice: 120, originalPrice: 180, discount: 40, rating: 5, reviews: 88 },
    { id: 3, name: "Small BookSelf", image: "/product4.png", currentPrice: 520, originalPrice: 580, discount: 0, rating: 5, reviews: 88 },
    { id: 4, name: "Gucci duffle bag", image: "/product2.png", currentPrice: 420, originalPrice: 580, discount: 24, rating: 4.5, reviews: 88 },
    { id: 5, name: "Small BookSelf", image: "/product4.png", currentPrice: 520, originalPrice: 580, discount: 0, rating: 5, reviews: 88 },
    { id: 6, name: "Jr. Zoom Soccer Cleats", image: "/product3.png", currentPrice: 1169, originalPrice: 1899, discount: 0, rating: 5, reviews: 88 },
    { id: 7, name: "Jr. Zoom Soccer Cleats", image: "/product3.png", currentPrice: 1169, originalPrice: 1899, discount: 0, rating: 5, reviews: 88 },
    { id: 8, name: "Small BookSelf", image: "/product4.png", currentPrice: 520, originalPrice: 580, discount: 0, rating: 5, reviews: 88 },
    { id: 9, name: "RGB liquid CPU Cooler", image: "/product1.png", currentPrice: 120, originalPrice: 180, discount: 40, rating: 5, reviews: 88 },

];


export default function ShopProductGrid() {
    return (
        <div className="flex-1 flex flex-col gap-6">
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {allProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination + Info Row */}
            <div className="flex items-center justify-center gap-4 pt-8 pb-4">
                <Pagination>
                    <PaginationContent className="gap-2">
                        <PaginationItem>
                            <PaginationPrevious href="#" className="bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 shadow-sm rounded-xl cursor-pointer" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" className="bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 shadow-sm rounded-xl cursor-pointer">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive className="bg-primary border border-primary text-white shadow-md shadow-primary/20 hover:bg-orange-500 transition-all duration-200 rounded-xl cursor-pointer">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" className="bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 shadow-sm rounded-xl cursor-pointer">
                                3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis className="bg-white border border-zinc-200 text-zinc-800 rounded-xl h-10 w-10 shadow-sm flex items-center justify-center" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" className="bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 shadow-sm rounded-xl cursor-pointer" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
