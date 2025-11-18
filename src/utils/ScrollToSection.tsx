import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        // Kleine Verzögerung, damit der DOM vollständig geladen ist
        setTimeout(() => {
            const headerElement = document.getElementById('main-header') || document.querySelector('header');
            const headerHeight = headerElement ? headerElement.offsetHeight : 80;

            if (path === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const sectionId = path.slice(1);
            const element = document.getElementById(sectionId);

            if (element) {
                const elementTop = element.getBoundingClientRect().top + window.scrollY;
                const targetScrollPosition = elementTop - headerHeight;

                window.scrollTo({
                    top: Math.max(0, targetScrollPosition),
                    behavior: 'smooth'
                });
            }
        }, 100);
    }, [location]);

    return null;
}