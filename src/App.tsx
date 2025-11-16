import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import CodeZero from './components/CodeZero';
import Contact from './components/Contact';
import Imprint from './components/Imprint';
import PrivacyPolicy from './components/PrivacyPolicy';
import LoadingScreen from './components/LoadingScreen';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/codezero" element={<CodeZero />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/imprint" element={<Imprint />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;