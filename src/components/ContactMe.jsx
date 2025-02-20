import React from 'react'

const ContactMe = () => {
    console.log("ContactMe component rendered!");
    return (
        <div className="pt-4 bg-gray-800 h-110 flex flex-col items-center" id="contactme">
            <h1 className='text-white text-4xl'>Let's Connect</h1>
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96 mt-4">
                <form className="flex flex-col gap-4">
                    <label htmlFor="fullName" className="text-xl">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />

                    <label htmlFor="mNumber" className="text-xl">Mobile Number:</label>
                    <input
                        type="number"
                        id="mNumber"
                        name="contactNumber"
                        placeholder="Mobile Number"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />

                    <label htmlFor="sDesc" className="text-xl">Short Description:</label>
                    <input
                        type="text"
                        id="sDesc"
                        name="sDesc"
                        placeholder="Short Description"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />
                </form>
            </div>
        </div>


    )
}

export default ContactMe
