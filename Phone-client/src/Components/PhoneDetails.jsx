import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
    const  phone  = useLoaderData();
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
                <img src={phone?.image} alt={phone.name} className="w-full h-auto rounded-md" />
                <h2 className="text-2xl font-bold mt-4">{phone.name}</h2>
                <p className="text-gray-700 mt-2">{phone.description}</p>
                <p className="text-lg font-semibold text-blue-600 mt-4">Price: ${phone.price}</p>
            </div>
        </div>
    );
};

export default PhoneDetails;