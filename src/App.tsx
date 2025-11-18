import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import AppRouter from './AppRouter';


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
            <AppRouter />
        </Router>
    );
}

export default App;