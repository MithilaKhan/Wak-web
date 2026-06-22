
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
                    <ProductCard key={product.id} product={product} bgColor="#1E1E1E" />
                ))}
            </div>

            {/* Pagination + Info Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-4 ">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
