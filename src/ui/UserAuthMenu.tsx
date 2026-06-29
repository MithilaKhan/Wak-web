// src/ui/UserAuthMenu.tsx
'use client';

import Link from 'next/link';
import AuthModal from '@/components/(auth-pages)';

interface UserAuthMenuProps {
    isLoggedIn: boolean;
    logout: () => void;
}

export default function UserAuthMenu({ isLoggedIn, logout }: UserAuthMenuProps) {
    if (!isLoggedIn) {
        return (
            <AuthModal
                trigger={
                    <button className="text-sm font-bold bg-primary  px-6 py-2.5 rounded-lg transition-colors cursor-pointer text-white">
                        Login
                    </button>
                }
            />
        );
    }

    return (
        <div className="group relative shrink-0">
            <Link
                href="/profile"
                className="block w-10 h-10 rounded-full overflow-hidden border border-zinc-700 cursor-pointer hover:border-orange-500 transition-colors bg-zinc-800"
            >
                <img
                    src="https://i.pravatar.cc/150?img=68"
                    alt="User Profile"
                    className="w-full h-full object-cover"
                />
            </Link>

        </div>
    );
}
