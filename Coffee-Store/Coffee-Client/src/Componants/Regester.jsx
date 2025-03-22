// Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register Data:', formData); // Log the form data
  };

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
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-medium text-gray-700 text-sm">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input bg-white border-gray-300 rounded-md focus:border-gray-400 focus:ring-0 h-10 text-sm"
                required
              />
            </div>
          </div>
          {/* Form second row */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-medium text-gray-700 text-sm">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input bg-white border-gray-300 rounded-md focus:border-gray-400 focus:ring-0 h-10 text-sm"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-medium text-gray-700 text-sm">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
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