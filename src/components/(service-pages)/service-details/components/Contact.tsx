'use client';
import { BiMessageDetail } from "react-icons/bi";
export default function Contact() {
    return (
        <section className="">
            <h2 className="text-xl font-medium text-white mb-4">Messaging & Questions</h2>

            <div className="flex items-center gap-4">
                <p className="text-white/95 bg-white/10 backdrop-blur-md rounded-xl p-4 text-sm w-full">
                    Have a custom request? Message Harry Thomas Wilson before ordering.
                </p>
                <button className="bg-primary text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2">
                    <span><BiMessageDetail /></span> Contact
                </button>
            </div>
        </section>
    );
}