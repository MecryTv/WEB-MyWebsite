import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import CodeZero from '../components/CodeZero';
import Contact from '../components/Contact';
import WaveDivider from '../components/WaveDivider';
import ScrollToSection from '../utils/ScrollToSection';

export default function DefaultLayout() {
    return (
        <>
            <ScrollToSection />
            <div className="min-h-screen bg-gray-50 flex flex-col">
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