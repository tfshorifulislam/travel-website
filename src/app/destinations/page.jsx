import React from 'react';

const DestinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    console.log('Destinations:', destinations);
    return (
        <div>
            <h1>All Destinations</h1>
            <ul>
                {destinations.map((destination) => (
                    <li key={destination._id}>
                        <h2>{destination.destinationName}</h2>
                        <p>Country: {destination.country}</p>
                        <p>Category: {destination.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DestinationsPage;