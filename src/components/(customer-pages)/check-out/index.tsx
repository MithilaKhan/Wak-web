import Link from "next/link";
import EditAddressModal from "./EditAddressModal";

const defaultAddress = {
    fullName: "Ziad Aboualtaif",
    contactNumber: "+9 018674100254",
    address: "5515-130 Northwest Avenue",
};

export default function Checkout() {
    return (
        <div className="min-h-[calc(100vh-180px)] bg-[#1e1e1e] py-[50px]">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Order No Header */}
                <h1 className="text-xl font-medium text-white mb-6 tracking-wide">
                    Order No: #01dgj89Gj
                </h1>

                {/* Main Card Wrapper */}
                <div className="bg-[#2B2B2B] rounded-2xl p-8 md:p-10 border border-white/5 shadow-2xl space-y-8">

                    {/* SECTION 1: Delivery Address */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-white tracking-wide">
                            Delivery Address
                        </h2>

                        {/* EditAddressModal renders the Edit button + address display + modal */}
                        <EditAddressModal initialAddress={defaultAddress} />
                    </div>

                    <div>
                        <div className="col-span-full grid grid-cols-1 gap-y-3  text-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="w-44 text-white/72  mb-1 sm:mb-0">Full Name</span>
                                <span className="text-white/72">{defaultAddress.fullName}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="w-44 text-white/72  mb-1 sm:mb-0">Contact Number</span>
                                <span className="text-white/72">{defaultAddress.contactNumber}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="w-44 text-white/72  mb-1 sm:mb-0">Address</span>
                                <span className="text-white/72">{defaultAddress.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: Item List */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                        {/* Item 1 */}
                        <div className="flex items-center gap-4 py-2">
                            <div className="w-20 h-20 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-center shrink-0 overflow-hidden shadow-inner p-2">
                                <img
                                    src="/product4.png"
                                    alt="Jr. Zoom Soccer Cleats"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-white">
                                    Jr. Zoom Soccer Cleats
                                </h3>
                                <p className="text-lg font-bold text-[#FF6700]">$1169</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center gap-4 py-2">
                            <div className="w-20 h-20 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-center shrink-0 overflow-hidden shadow-inner p-2">
                                <img
                                    src="/product2.png"
                                    alt="Gucci duffle bag"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-white">
                                    Gucci duffle bag
                                </h3>
                                <p className="text-lg font-bold text-[#FF6700]">$420</p>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: Order Summary */}
                    <div className="space-y-4 pt-6 border-t border-white/5">
                        <h2 className="text-lg font-semibold text-white tracking-wide mb-2">
                            Order Summary
                        </h2>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-white/72">Subtotal Amount</span>
                                <span className="text-white/72 font-medium">$1589.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white/72">Delivery Fee</span>
                                <span className="text-white/72 font-medium">$55.00</span>
                            </div>

                            <div className="border-t border-white/10 my-4 pt-4 flex justify-between items-center">
                                <span className="text-base font-medium text-white/90">Total Amount</span>
                                <span className="text-xl font-bold text-[#FFDDA5]">$1644.00</span>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 4: Action Button */}
                    <div className="flex justify-end pt-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto bg-[#FF6700] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg active:scale-95 transition-all text-sm cursor-pointer text-center block sm:inline-block"
                        >
                            Payment
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
