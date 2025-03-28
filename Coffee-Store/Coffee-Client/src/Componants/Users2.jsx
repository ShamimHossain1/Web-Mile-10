import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users2 = () => {

const {isPending,data: users} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await fetch('https://coffee-server-xi-nine.vercel.app/users');
        return res.json();
    }
})

if(isPending){
    return <h1>Loading...</h1>
}



    const handleUserDelete = id => {  
          Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`https://coffee-server-xi-nine.vercel.app/users/${id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data);
                                if (data.deletedCount > 0) {
                                    Swal.fire(
                                        'Deleted!',
                                        'User has been deleted.',
                                        'success'
                                    )
                                    const remaining = users.filter(user => user._id !== id);
                                    // setUsers(remaining);
                                }
                            })
                    }
                })
      };
    return (
        <div>
        {/* <h2 className="text-3xl">Users: {users.length}</h2> */}
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
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastSignInTime}</td>
                            <td>
                                <button className='btn'>E</button>
                                <button
                                    onClick={() => handleUserDelete(user._id)}
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

export default Users2;