import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h1>This is phones</h1>
            <h1>{phones.length}</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;