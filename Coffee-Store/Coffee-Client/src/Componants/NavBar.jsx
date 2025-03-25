import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const NavBar = () => {

    const { user, SignOut, setUser } = useContext(authContext);
    // console.log(user);
    const handleSignOut = () => {
        SignOut().then(() => {
            setUser(null);
        });
    };
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Logo / Username */}
                <div className="text-xl font-bold">
                    {user ? `Welcome, ${user.email}` : "Coffee Hub"}
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addcoffee" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Add Coffee</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Users</NavLink>
                    </li>
                    {user ? (
                        <li>
                            <button onClick={() => handleSignOut()} className="bg-red-500 px-3 py-1 rounded">Logout</button>
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
