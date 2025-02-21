import React from "react";

const AboutMe = () => {
    return (
        <div id="aboutme">
            <div className="pt-5 pb-12 bg-gray-800 flex justify-center px-4">
                <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col items-center">
                    <h1 className="text-2xl md:text-4xl text-white font-bold mb-4 hover:scale-105 transition" >
                        🚀 Introduction
                    </h1>
                    <p className="w-full bg-gray-700 shadow-lg rounded-lg text-white p-6 text-center text-lg md:text-xl hover:bg-gray-600 hover:shadow-2xl hover:scale-105">
                        I am a 🚀 Full-Stack Developer with expertise in 💻 Node.js, ⚡ JavaScript, ⚛ React.js, 🚀 Express.js, and 🗄️ relational databases like MySQL & MongoDB. I specialize in building 🔧 scalable, ⚡ efficient, and 🎯 user-friendly applications, including 🌐 RESTful APIs, 🔗 database integrations, and 🛠️ DevOps practices for CI/CD pipelines & cloud deployment. 🚀🔥
                    </p>
                </div>
            </div >
        </div>
    );
};

export default AboutMe;
