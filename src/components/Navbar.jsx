import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4 px-10 bg-gray-800 text-white">
            <ul className="flex space-x-4">
                <Link href="/"><li>Home</li></Link>
                <Link href="/destinations"><li>Destinations</li></Link>
                <Link href="/my-bookings"><li>My Bookings</li></Link>
            </ul>

            <div>
                <Image
                    src="/assets/Wanderlast.png"
                    alt="Logo"
                    width={100}
                    height={50}
                />
            </div>
            <ul className="flex space-x-4">
                <Link href="/profile"><li>Profile</li></Link>
                <Link href="/login"><li>Login</li></Link>
                <Link href="/signup"><li>Sign Out</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;