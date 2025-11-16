function App() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            {/* Container mit Tailwind-Klassen */}
            <header className="text-center mb-10">
                <h1 className="text-5xl font-extrabold text-blue-600 mb-2">
                    Hello Tailwind!
                </h1>
                <p className="text-xl text-gray-700">
                    Dein Vite & React Projekt ist bereit.
                </p>
            </header>

            {/* Button mit hover-Effekt */}
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Starte jetzt!
            </button>

            {/* Beispiel für Responsive Design (Mobile First) */}
            <div className="mt-10 p-4 border rounded-xl shadow-lg w-full max-w-md bg-white">
                <p className="text-sm sm:text-base text-gray-800">
                    Dieser Text ist auf kleinen Bildschirmen (sm) größer.
                </p>
            </div>
        </div>
    );
}

export default App;