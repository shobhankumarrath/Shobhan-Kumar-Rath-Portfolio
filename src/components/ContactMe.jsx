import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"; // Import motion

const ContactMe = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const numberRegex = /^[0-9]+$/;

        if (!formData.name.trim()) newErrors.name = "Name is required";
        else if (!nameRegex.test(formData.name)) newErrors.name = "Only letters allowed";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email";

        if (!formData.number.trim()) newErrors.number = "Mobile number is required";
        else if (!numberRegex.test(formData.number)) newErrors.number = "Only numbers allowed";

        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        emailjs
            .sendForm(
                "shobhan1rath@gmail.com",
                "template_jasap1s",
                form.current,
                "GI-tkUYkvSgGaFl8j"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                    setFormData({ name: "", email: "", number: "", message: "" });
                    setErrors({});
                },
                () => {
                    alert("Failed to send message, please try again.");
                }
            );
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <motion.div
            className="pt-10 bg-gray-800 h-auto flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg mt-4 transition-all duration-300 hover:bg-gray-700 hover:shadow-2xl hover:scale-105"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className="text-white text-3xl text-center mb-6" id='contactme'>Let's Connect</h1>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                    {/* Full Name */}
                    <label htmlFor="fullName" className="text-lg">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}

                    {/* Mobile Number */}
                    <label htmlFor="mNumber" className="text-lg">
                        Mobile Number:
                    </label>
                    <input
                        type="text"
                        id="mNumber"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />
                    {errors.number && <p className="text-red-500">{errors.number}</p>}

                    {/* Email Address */}
                    <label htmlFor="email" className="text-lg">
                        Email Address:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}

                    {/* Short Description */}
                    <label htmlFor="sDesc" className="text-lg">
                        Short Description:
                    </label>
                    <textarea
                        id="sDesc"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Short Description"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none w-full h-24 resize-none"
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}

                    {/* Submit Button */}
                    <motion.input
                        type="submit"
                        value="Submit"
                        className="p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-500 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    />
                </form>
            </motion.div>
        </motion.div>
    );
};

export default ContactMe;
