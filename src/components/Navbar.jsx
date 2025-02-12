import React from 'react'

const Navbar = () => {

    return (
        <div className="bg-gray-800 p-4 w-full fixed top-0 h-16 flex justify-between items-center left-0 right-0 px-6 z-10">
            {/* Left side - Logo or title */}
            <h1 className="text-white text-xl font-semibold whitespace-nowrap">Web Developer</h1>

            {/* Center - Navigation buttons */}
            <div className="flex justify-center items-center space-x-6 w-full">
                <button className="text-white bg-transparent px-4 py-2 rounded-md transition duration-300 hover:bg-yellow-500">
                    Projects
                </button>
                <button className="text-white bg-transparent px-4 py-2 rounded-md transition duration-300 hover:bg-blue-500">
                    Let's Connect
                </button>
            </div>
        </div>


    )
}

export default Navbar
