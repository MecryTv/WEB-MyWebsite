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

function App() {
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