import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import RelatedItems from "./components/RelatedItems";
import { productDetail, relatedProducts } from "./components/data";

export default function ShopDetails() {
    const p = productDetail;

    return (
        <div className="min-h-[calc(100vh-180px)] bg-[#4f2c1d] py-[50px]">
            <div className="container mx-auto px-4">
                <p className=" text-2xl font-medium mb-8"> Product Details </p>
                {/* ── Main: Gallery LEFT | Info RIGHT ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 xl:gap-14 items-start">

                    {/* Sticky gallery column */}
                    <div className="lg:sticky lg:top-24">
                        <ProductGallery
                            images={p.images}
                            name={p.name}
                            inStock={p.inStock}
                        />
                    </div>

                    {/* Right scrollable column — all info + details + buttons */}
                    <ProductInfo
                        name={p.name}
                        price={p.price}
                        originalPrice={p.originalPrice}
                        discount={p.discount}
                        rating={p.rating}
                        reviews={p.reviews}
                        aboutItems={p.aboutItems}
                        highlights={p.highlights}
                    />
                </div>

                {/* ── Related Items ── */}
                <div className="mt-16 border-t border-white/5 pt-4">
                    <RelatedItems products={relatedProducts} />
                </div>

            </div>
        </div>
    );
}
