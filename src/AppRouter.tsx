import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import SimpleLayout from './layouts/SimpleLayout';
import Imprint from './components/Imprint';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} />
            <Route path="/about" element={<DefaultLayout />} />
            <Route path="/skills" element={<DefaultLayout />} />
            <Route path="/codezero" element={<DefaultLayout />} />
            <Route path="/contact" element={<DefaultLayout />} />

            <Route path="/imprint" element={
                <SimpleLayout><Imprint /></SimpleLayout>
            } />
            <Route path="/privacy" element={
                <SimpleLayout><PrivacyPolicy /></SimpleLayout>
            } />
        </Routes>
    );
}