import Header from '../components/Header';
import Footer from '../components/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

interface SimpleLayoutProps {
    children: React.ReactNode;
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
    useScrollToTop();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}