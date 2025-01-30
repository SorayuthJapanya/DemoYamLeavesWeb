import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-xl font-bold text-gray-800">
                    LOGO
                </Link>


                <div className="hidden md:flex gap-6">
                    <Link to="/" className="text-gray-700 hover:text-blue-500">
                        Home
                    </Link>

                    <Link to="/classification" className="text-gray-700 hover:text-blue-500">
                        Classification
                    </Link>
                </div>


                <div className="hidden md:flex gap-4">
                    <Link
                        to="/register"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Register
                    </Link>

                    <Link
                        to="/login"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </Link>

                </div>
            </div>
        </nav>
    );
}

export default MainNav;
