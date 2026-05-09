import Image from "next/image";
import React from "react";

const DestinationsCard = ({ destination }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">

            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* country badge */}
                <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full shadow">
                    {destination.country}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                    {destination.destinationName}
                </h2>

                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                    {destination.description}
                </p>

                {/* Button */}
                <div className="mt-4 flex justify-between items-center">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition">
                        Explore →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DestinationsCard;