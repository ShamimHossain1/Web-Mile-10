// LogIn.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const LogIn = () => {
    const Navigate = useNavigate();
    const { setLoading,
        setUser,
        loginUser, SignOut } = useContext(authContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then((result) => {
                // console.log(result.user);
                setUser(result.user);
                setLoading(false);
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };
                fetch(`https://coffee-server-xi-nine.vercel.app/users/${email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)


                }).then(res => res.json()).then(data => {
                    console.log(data);
                })
            }
            )
            .catch((error) => {
                console.error(error);
            }).finally(() => {
                form.reset();
                Swal.fire(

                    'Login Successful',

                )
                // Navigate('/');
            })


    }


    return (
        <div className="lg:w-3/5 mx-auto">
            <div className="text-center pt-10 pb-6">
                <h1 className="text-3xl font-bold text-gray-800">Log In to Coffee Hub</h1>
                <p className="pt-4 text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
            </div>
            <div className="card bg-[#f3f3f3] w-full shrink-0 shadow-md rounded-lg">
                <form onSubmit={handleLogIn} className="card-body p-6">
                    {/* Form row */}
                    <div className="flex flex-col lg:flex-row gap-4">
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
                            Log In
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-center text-gray-600 mt-4">
                Don’t have an account?{' '}
                <Link to="/register" className="text-amber-600 hover:underline">
                    Register here
                </Link>
            </p>
        </div>
    );
};

export default LogIn;