import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"; // Import motion

const ContactMe = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_number: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const numberRegex = /^[0-9]+$/;

        if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
        else if (!nameRegex.test(formData.user_name)) newErrors.user_name = "Only letters allowed";

        if (!formData.user_email.trim()) newErrors.user_email = "Email is required";
        else if (!emailRegex.test(formData.user_email)) newErrors.user_email = "Enter a valid email";

        if (!formData.user_number.trim()) newErrors.user_number = "Mobile number is required";
        else if (!numberRegex.test(formData.user_number)) newErrors.user_number = "Only numbers allowed";

        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        emailjs
            .sendForm(
                "shobhan1rath@gmail.com", // Replace with your EmailJS service ID
                "template_jasap1s", // Replace with your template ID
                form.current,
                "GI-tkUYkvSgGaFl8j" // Replace with your EmailJS public key
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                    setFormData({ user_name: "", user_email: "", user_number: "", message: "" });
                    setErrors({});
                },
                () => {
                    alert("Failed to send message, please try again.");
                }
            );
    };

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

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
                <h1 className="text-white text-3xl text-center mb-6" id="contactme">
                    Let's Connect
                </h1>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                    {/* Full Name */}
                    <label htmlFor="fullName" className="text-lg">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />
                    {errors.user_name && <p className="text-red-500">{errors.user_name}</p>}

                    {/* Mobile Number */}
                    <label htmlFor="mNumber" className="text-lg">
                        Mobile Number:
                    </label>
                    <input
                        type="text"
                        id="mNumber"
                        name="user_number"
                        value={formData.user_number}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />
                    {errors.user_number && <p className="text-red-500">{errors.user_number}</p>}

                    {/* Email Address */}
                    <label htmlFor="email" className="text-lg">
                        Email Address:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="p-2 bg-gray-700 text-white rounded border border-gray-500 focus:outline-none"
                    />
                    {errors.user_email && <p className="text-red-500">{errors.user_email}</p>}

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
