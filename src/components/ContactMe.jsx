import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "shobhan1rath@gmail.com",
                "template_jasap1s",
                form.current,
                "GI-tkUYkvSgGaFl8j"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully", result.text);
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log("Email sending failed", error.text);
                    alert("Failed to send message, please try again.");
                }
            );
    };

    return (
        <div className="pt-90 bg-gray-800 min-h-screen flex flex-col items-center px-4">
            <div id='contactme' className="bg-gray-900 text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mt-12 md:mt-20 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl hover:scale-105">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
                    Let's Connect
                </h1>
                <div >
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                        <label htmlFor="fullName" className="text-lg md:text-xl">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="user_name"
                            placeholder="Full Name"
                            className="p-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none w-full"
                        />

                        <label htmlFor="mNumber" className="text-lg md:text-xl">
                            Mobile Number:
                        </label>
                        <input
                            type="number"
                            id="mNumber"
                            name="user_number"
                            placeholder="Mobile Number"
                            className="p-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none w-full"
                        />

                        <label htmlFor="email" className="text-lg md:text-xl">
                            Email Address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            placeholder="Email Address"
                            required
                            className="p-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none w-full"
                        />

                        <label htmlFor="sDesc" className="text-lg md:text-xl">
                            Short Description:
                        </label>
                        <textarea
                            id="sDesc"
                            name="message"
                            placeholder="Short Description"
                            className="p-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none w-full h-24 resize-none"
                        />

                        <input
                            type="submit"
                            value="Submit"
                            className="p-3 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none hover:scale-105 transition-all duration-300 cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
