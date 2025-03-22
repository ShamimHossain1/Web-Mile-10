import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee, setCoffee, coffees }) => {
    const { _id, name, chef, photo } = coffee;

    const handleDelete = id => {
        //   console.log(id);
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
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffee(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className="card lg:card-side bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <figure className="w-1/3 lg:w-1/4 p-4">
                <img
                    src={photo}
                    alt="coffee"
                    className="w-full h-32 object-contain"
                />
            </figure>
            <div className="flex w-full p-4 items-center justify-between">
                <div className="text-gray-700 text-sm">
                    <p><span className="font-medium">Name:</span> {name}</p>
                    <p><span className="font-medium">Chef:</span> {chef}</p>
                    <p><span className="font-medium">Price:</span> 890 Taka</p>
                </div>
                <div className="card-actions join join-vertical space-y-2">
                    <button className="btn btn-sm btn-circle bg-amber-100 border-none hover:bg-amber-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-amber-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </button>
                    <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-sm btn-circle bg-amber-100 border-none hover:bg-amber-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-circle bg-red-500 border-none hover:bg-red-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;