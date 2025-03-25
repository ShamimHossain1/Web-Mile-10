// Register.jsx
import React, { useContext} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {
    const Navigate = useNavigate();

    const {  setLoading,
       
        createUser } = useContext(authContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                // const user = result.user;
                // console.log(user);
                form.reset();
                const newUser = { name, email };
                setLoading(false);
                fetch('https://coffee-server-xi-nine.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)

                }).then(res => res.json()).then(data => {
                    console.log(data);
                })
                Swal.fire(
                    

                    'User has been registered.',
                     'success'
                   
                )
                Navigate('/login');
               
            })
            .catch((error) => {
                console.error(error);
            })
    }



    return (
        <div className="lg:w-3/5 mx-auto">
            <div className="text-center pt-10 pb-6">
                <h1 className="text-3xl font-bold text-gray-800">Register for Coffee Hub</h1>
                <p className="pt-4 text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
            </div>
            <div className="card bg-[#f3f3f3] w-full shrink-0 shadow-md rounded-lg">
                <form onSubmit={handleRegister} className="card-body p-6">
                    {/* Form first row */}
                    <div className=" gap-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700 text-sm">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input bg-white border-gray-300 rounded-md focus:border-gray-400 focus:ring-0 h-10 text-sm"
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700 text-sm">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input bg-white border-gray-300 rounded-md focus:border-gray-400 focus:ring-0 h-10 text-sm"
                                required
                            />
                        </div>
                    </div>
                    {/* Form second row */}
                    <div className="  gap-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700 text-sm">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input bg-white border-gray-300 rounded-md focus:border-gray-400 focus:ring-0 h-10 text-sm"
                                required
                            />
                        </div>

                    </div>
                    {/* Submit button */}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#c49a6c] hover:bg-[#b5895c] text-white border-none rounded-md py-2 text-sm font-medium">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-center text-gray-600 mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-amber-600 hover:underline">
                    Log in here
                </Link>
            </p>
        </div>
    );
};

export default Register;