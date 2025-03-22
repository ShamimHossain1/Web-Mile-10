import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [user, setUser] = useState(null); // Replace with actual authentication logic

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Logo / Username */}
                <div className="text-xl font-bold">
                    {user ? `Welcome, ${user}` : "Coffee Hub"}
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addcoffee" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Add Coffee</NavLink>
                    </li>
                    {user ? (
                        <li>
                            <button onClick={() => setUser(null)} className="bg-red-500 px-3 py-1 rounded">Logout</button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Register</NavLink>
                            </li>
                        </>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white">☰</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
