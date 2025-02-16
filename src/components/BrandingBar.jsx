import React from "react";
import { Typewriter } from "react-simple-typewriter";

const BrandingBar = () => {
    return (
        <div className="pt-16 bg-gray-800">
            <div className="h-screen flex items-start justify-center bg-gray-800">
                {/* Left Side - Animated Typing */}
                <div className="w-1/3 h-64 flex flex-col justify-center bg-gray-800 shadow-lg rounded-lg p-6 mt-[+20px]">
                    <span className="text-2xl font-bold mb-4 text-white">Your Digital Associate</span>
                    <span className="text-3xl font-semibold text-white">
                        <Typewriter
                            words={["Frontend", "Backend", "Node.js", "React.JS"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <div className="w-10"></div>
                {/* Right Side - Branding Content */}
                <div className="w-1/3 h-64 flex flex-col justify-center bg-gary-800 shadow-lg rounded-lg p-6 mt-[+13px]">
                    <span className="text-2xl font-bold mb-4 text-white">This is Branding Page</span>
                    <span className="text-lg font-semibold text-white">
                        Here will go a different div element.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BrandingBar;
