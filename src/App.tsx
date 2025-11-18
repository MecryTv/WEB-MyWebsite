import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import WaveDivider from './components/WaveDivider';

function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const sectionId = location.pathname.slice(1);
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [location]);

    return null;
}

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function MainContent() {
    return (
        <>
            <ScrollToSection />
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <ScrollToTop />
                <Header />

                <main className="flex-grow">
                    <section id="home">
                        <Home />
                    </section>

                    <WaveDivider topColor="#0A0A0A" bottomColor="#1E1E1E" />

                    <section id="about">
                        <About />
                    </section>

                    <WaveDivider topColor="#1E1E1E" bottomColor="#0A0A0A" />

                    <section id="skills">
                        <Skills />
                    </section>

                    <WaveDivider topColor="#0A0A0A" bottomColor="#1E1E1E" />

                    <section id="codezero">
                        <CodeZero />
                    </section>

                    <WaveDivider topColor="#1E1E1E" bottomColor="#0A0A0A" />

                    <section id="contact">
                        <Contact />
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}

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
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/about" element={<MainContent />} />
                <Route path="/skills" element={<MainContent />} />
                <Route path="/codezero" element={<MainContent />} />
                <Route path="/contact" element={<MainContent />} />

                <Route path="/imprint" element={
                    <div className="min-h-screen bg-gray-50 flex flex-col">
                        <Header />
                        <main className="flex-grow">
                            <ScrollToTop />
                            <Imprint />
                        </main>
                        <Footer />
                    </div>
                } />
                <Route path="/privacy" element={
                    <div className="min-h-screen bg-gray-50 flex flex-col">
                        <Header />
                        <main className="flex-grow">
                            <ScrollToTop />
                            <PrivacyPolicy />
                        </main>
                        <Footer />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;