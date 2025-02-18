import React from "react";
import { Typewriter } from "react-simple-typewriter";
import IMG from './../assets/ray-so-export.png';

const BrandingBar = () => {
    return (
        <div className="pt-16 bg-gray-800">
            <div className="h-83 flex items-start justify-center bg-gray-800">
                {/* Left Side - Animated Typing */}
                <div className="w-1/3 h-64 flex flex-col justify-center bg-gray-600 shadow-lg rounded-lg p-6 mt-[+20px] transition-all duration-300 hover:bg-gray-500 hover:shadow-2xl hover:scale-105">
                    <span className="text-2xl font-bold mb-4 text-white">Your Digital Associate</span>
                    <span className="text-3xl font-semibold text-white">
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
                <div className="w-25"></div>
                {/* Right Side - Branding Content */}
                <div className="w-1/3 h-64 flex flex-col items-center justify-center bg-gray-600 shadow-lg rounded-lg p-6 mt-[+20px] transition-all duration-300 hover:bg-gray-500 hover:shadow-2xl overflow-hidden hover:scale-105">
                    <span className="text-2xl font-bold mb-1 text-white">Transforming Ideas into Code</span>
                    <img src={IMG} alt="Code Illustration" className="w-full h-full object-contain rounded-lg"></img>
                </div>
            </div>
        </div>
    );
};

export default BrandingBar;
