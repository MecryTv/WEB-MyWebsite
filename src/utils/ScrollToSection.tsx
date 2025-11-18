// utils/ScrollToSection.tsx (Korrigierte Version)

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        // 1. Header-Höhe ermitteln
        // Annahme: Ihr Header hat die ID 'main-header'.
        // Wenn Ihr Header keine ID hat, verwenden Sie den entsprechenden Selector (z.B. 'header').
        const headerElement = document.getElementById('main-header') || document.querySelector('header');

        // Verwenden Sie einen Fallback-Wert (z.B. 80 Pixel), wenn der Header nicht gefunden wird.
        const headerHeight = headerElement ? headerElement.offsetHeight : 80;

        if (path === '/') {
            // Für die Home-Seite: Immer nach ganz oben scrollen
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const sectionId = path.slice(1);
        const element = document.getElementById(sectionId);

        if (element) {
            // Die genaue Position des Elements relativ zum Dokument (offset)
            const elementTop = element.getBoundingClientRect().top + window.scrollY;

            // Die neue ZIELPOSITION: Element-Anfangsposition minus der Header-Höhe
            const targetScrollPosition = elementTop - headerHeight;

            // Scrolle zur angepassten Position
            window.scrollTo({
                // Stellen Sie sicher, dass wir nicht unter 0 scrollen
                top: Math.max(0, targetScrollPosition),
                behavior: 'smooth'
            });
        }
    }, [location]);

    return null;
}