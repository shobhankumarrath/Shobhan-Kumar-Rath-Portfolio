import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "shobhan1rath@gmail.com",
            "template_jasap1s",
            form.current,
            "GI-tkUYkvSgGaFl8j"
        )
            .then(
                (result) => {
                    console.log("Email sent successful", result.text);
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log("Email sending failed", error.text);
                    alert("Failed to send message, please try again.");
                }
            )
    }
    return (
        <div className="pt-75 bg-gray-800 h-235 flex flex-col items-center">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96 mt-4 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl hover:scale-105">
                <h1 className='text-white text-4xl p-8 w-80'>Let's Connect</h1>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4" id="contactme">
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
                    <label htmlFor="email" className="text-xl">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="Email Address"
                        required
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />

                    <label htmlFor="sDesc" className="text-xl">Short Description:</label>
                    <textarea
                        id="sDesc"
                        name="sDesc"
                        placeholder="Short Description"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none w-full h-24 resize-none"
                    />
                    <input type="submit" value="Submit" className='p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none hover:105 cursor-pointer' />
                </form>
            </div>
        </div>


    )
}

export default ContactMe
