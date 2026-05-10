import DestinationsCard from '@/components/DestinationsCard';
import React from 'react';

const DestinationDetailsPage = async ({ params }) => {
    const {id } = await params;
    console.log('Destination ID:', id);
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    console.log('Destination Details:', destination);
    return (
        <div>
            <h1>Destination Details</h1>
            <div className="px-4 py-10 mx-auto max-w-4xl">
                {
                    destination ? (
                        <DestinationsCard destination={destination} />
                    ) : (
                        <p>Destination not found.</p>
                    )
                }
            </div>
        </div>
    );
};

export default DestinationDetailsPage;