import DestinationsCard from '@/components/DestinationsCard';
import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    console.log('Destinations:', destinations);
    return (
        <div className=" px-4 py-10">

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    All Destinations
                </h1>
                <p className="text-gray-500 mt-2">
                    Explore beautiful places around the world
                </p>
            </div>

            {/* Grid */}
            {destinations?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <DestinationsCard
                            key={destination._id}
                            destination={destination}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 py-20">
                    No destinations found 😢
                </div>
            )}

        </div>
    );
};

export default DestinationsPage;