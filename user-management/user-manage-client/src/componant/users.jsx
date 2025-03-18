import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    const handleDeleteUser = (id) => {
        console.log(id);
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('User deleted successfully');
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            {
                users.map(user => (
                    <div className='border-2 border-solid m-5 p-5 flex justify-between' key={user._id}>
                        <h3>User ID: {user._id}</h3>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Age: {user.age}</p>
                        <Link to={`/update/${user._id}`}>
                        <button>
                            Update
                        </button>
                        </Link>
                        <button  onClick={() => handleDeleteUser(user._id)}>X</button>
                    </div>
                ))
            }

        </div>
    );
};

export default Users;