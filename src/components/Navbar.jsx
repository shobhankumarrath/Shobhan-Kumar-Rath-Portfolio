import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 w-full fixed top-0 h-16 flex justify-between items-center left-0 right-0 px-6 z-10">
            {/* Left side - Logo or title */}
            <h1 className="text-white text-2xl font-semibold whitespace-nowrap">
                Web Developer
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center space-x-6">
                <button
                    onClick={() =>
                        document
                            .getElementById("projects")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-yellow-500"
                >
                    Projects
                </button>
                <button
                    onClick={() =>
                        document
                            .getElementById("contactme")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-500"
                >
                    Let's Connect
                </button>
                <button
                    onClick={() =>
                        document
                            .getElementById("aboutme")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-500"
                >
                    About Me
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed top-16 right-0 w-2/3 h-screen bg-gray-900 text-white flex flex-col items-center gap-6 p-6 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <button
                    onClick={() => {
                        document
                            .getElementById("projects")
                            .scrollIntoView({ behavior: "smooth" });
                        setMenuOpen(false);
                    }}
                    className="text-white text-lg px-4 py-2 rounded-md transition duration-300 hover:bg-yellow-500 w-full text-center"
                >
                    Projects
                </button>
                <button
                    onClick={() => {
                        document
                            .getElementById("contactme")
                            .scrollIntoView({ behavior: "smooth" });
                        setMenuOpen(false);
                    }}
                    className="text-white text-lg px-4 py-2 rounded-md transition duration-300 hover:bg-blue-500 w-full text-center"
                >
                    Let's Connect
                </button>
                <button
                    onClick={() => {
                        document
                            .getElementById("aboutme")
                            .scrollIntoView({ behavior: "smooth" });
                        setMenuOpen(false);
                    }}
                    className="text-white text-lg px-4 py-2 rounded-md transition duration-300 hover:bg-red-500 w-full text-center"
                >
                    About Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
