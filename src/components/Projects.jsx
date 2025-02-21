import React from "react";
import img1 from "./../assets/dv.png";
import img2 from "./../assets/mb.png";
import { motion } from "framer-motion";

const images = [img1, img2];

const Projects = () => {
    return (
        <div id="projects" className="pt-16 bg-gray-800 h-auto">
            {/* Title */}
            <div className="flex items-center justify-center text-center px-4">
                <h1 className="text-3xl md:text-4xl text-white font-bold mb-6 hover:scale-105 transition">
                    🚀 Building Solutions That Matter
                </h1>
            </div>

            {/* Image Slider */}
            <div className="overflow-hidden">
                <motion.div
                    className="flex md:space-x-10 space-y-4 md:space-y-0 flex-col md:flex-row items-center justify-center"
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full max-w-sm md:w-96 h-48 md:h-64 object-cover rounded-lg shadow-xl"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
