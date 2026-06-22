"use client";

import { useState } from "react";
import { Pencil, X } from "lucide-react";

interface AddressInfo {
    fullName: string;
    contactNumber: string;
    address: string;
}

interface EditAddressModalProps {
    initialAddress: AddressInfo;
}

export default function EditAddressModal({ initialAddress }: EditAddressModalProps) {
    const [addressInfo, setAddressInfo] = useState<AddressInfo>({ ...initialAddress });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempAddressInfo, setTempAddressInfo] = useState<AddressInfo>({ ...initialAddress });

    const handleOpenModal = () => {
        setTempAddressInfo({ ...addressInfo });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveAddress = (e: React.FormEvent) => {
        e.preventDefault();
        setAddressInfo({ ...tempAddressInfo });
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Edit Profile Button */}
            <button
                onClick={handleOpenModal}
                className="bg-[#FFDDA5] hover:bg-[#ffe3bc] text-black font-semibold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
            >
                <Pencil size={13} className="stroke-[2.5]" />
                Edit Delivery Address
            </button>


            {/* EDIT DELIVERY ADDRESS MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
                    <div className="bg-[#232323] w-full max-w-md rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8 animate-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                            <h3 className="text-lg font-bold text-white tracking-wide">
                                Edit Delivery Address
                            </h3>
                            <button
                                onClick={handleCloseModal}
                                className="text-white/72 hover:text-white transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handleSaveAddress} className="space-y-5">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={tempAddressInfo.fullName}
                                    onChange={(e) =>
                                        setTempAddressInfo({ ...tempAddressInfo, fullName: e.target.value })
                                    }
                                    placeholder="Enter full name"
                                    className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#FF6700] rounded-xl py-3 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-600"
                                />
                            </div>

                            {/* Contact Number */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-300">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={tempAddressInfo.contactNumber}
                                    onChange={(e) =>
                                        setTempAddressInfo({ ...tempAddressInfo, contactNumber: e.target.value })
                                    }
                                    placeholder="Enter contact number"
                                    className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#FF6700] rounded-xl py-3 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-600"
                                />
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-zinc-300">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={tempAddressInfo.address}
                                    onChange={(e) =>
                                        setTempAddressInfo({ ...tempAddressInfo, address: e.target.value })
                                    }
                                    placeholder="Enter address"
                                    className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#FF6700] rounded-xl py-3 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-600"
                                />
                            </div>

                            {/* Modal Actions */}
                            <div className="flex justify-end gap-3 pt-6">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="bg-[#3b1d1d] hover:bg-[#4d2525] text-[#ef4444] font-semibold px-6 py-3 rounded-xl text-sm transition-all active:scale-95 cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#FF6700] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all active:scale-95 cursor-pointer shadow-md shadow-orange-950/20"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
