import React from "react";
import { Typewriter } from "react-simple-typewriter";
import IMG from "./../assets/ray-so-export.png";

const BrandingBar = () => {
    return (
        <div className="pt-16 bg-gray-800 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-gray-800">

                {/* Left Side - Animated Typing */}
                <div className="w-full md:flex-1 min-h-[300px] flex flex-col justify-center items-center bg-gray-600 shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-gray-500 hover:shadow-2xl hover:scale-105">
                    <span className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
                        Your Digital Associate
                    </span>
                    <span className="text-3xl md:text-4xl font-semibold text-white text-center">
                        <Typewriter
                            words={["Frontend", "Backend", "Node.js", "React.js"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>

                {/* Right Side - Branding Content */}
                <div className="w-full md:flex-1 min-h-[300px] flex flex-col items-center justify-center bg-gray-600 shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-gray-500 hover:shadow-2xl overflow-hidden hover:scale-105">
                    <span className="text-2xl md:text-3xl font-bold mb-2 text-white text-center">
                        Transforming Ideas into Code
                    </span>
                    <img
                        src={IMG}
                        alt="Code Illustration"
                        className="w-40 md:w-60 h-auto object-contain rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default BrandingBar;
