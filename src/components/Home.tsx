import React from "react";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-extrabold text-blue-600 mb-2">
                    Willkommen auf meiner Portfolio-Seite!
                </h1>
                <p className="text-xl text-gray-700">
                    Entwickler | Designer | Problemlöser
                </p>
            </div>

            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Projekte ansehen
            </button>

            <div className="mt-10 p-4 border rounded-xl shadow-lg w-full max-w-md bg-white">
                <p className="text-sm sm:text-base text-gray-800">
                    Hier entsteht meine persönliche Website mit React, TypeScript und Tailwind CSS.
                </p>
            </div>
        </div>
    );
}

export default Home;