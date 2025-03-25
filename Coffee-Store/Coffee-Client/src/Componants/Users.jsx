import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    return (
        <div>
        <h2 className="text-3xl">Users: {users.length}</h2>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Login At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user._id}>
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastSignInTime}</td>
                            <td>
                                <button className='btn'>E</button>
                                <button
                                    // onClick={() => handleUserDelete(user._id)}
                                    className='btn'>X</button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
);
};

export default Users;