import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate();

    const user = useLoaderData();
    const { _id, name, email } = user;
    // console.log(user);

    const updateInfo = (e) => {     
        e.preventDefault();
        const form = e.target;
        const name = form.Name.value;
        const email = form.Email.value;
        const user = { name, email };
        // console.log(user);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                    
            })
            


    }
    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={updateInfo} className='flex flex-col gap-5 mt-5 '>
                <input className='bg-gray-400 text-black' name='Name' type="text" placeholder='Name' defaultValue={name} />
                <input className='bg-gray-400 text-black' name='Email' type="email" placeholder='Email' defaultValue={email} />
                <button type='submit'>Update User</button>                
            </form>
           <button onClick={() => navigate(-1)}>Go back</button>

            
        </div>
    );
};

export default Update;